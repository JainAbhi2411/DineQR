import { createClient } from "jsr:@supabase/supabase-js@2";
import Stripe from "npm:stripe@19.1.0";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

const successUrlPath = '/payment-success?session_id={CHECKOUT_SESSION_ID}';
const cancelUrlPath = '/customer/cart';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderItem {
  menu_item_id: string;
  menu_item_name: string;
  price: number;
  quantity: number;
  notes?: string;
  portion_size?: string;
  variant_name?: string;
  image_url?: string;
}

interface CheckoutRequest {
  restaurant_id: string;
  table_id?: string;
  items: OrderItem[];
  special_instructions?: string;
  currency?: string;
}

function ok(data: any): Response {
  return new Response(
    JSON.stringify({ code: "SUCCESS", message: "Success", data }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    }
  );
}

function fail(msg: string, code = 400): Response {
  return new Response(
    JSON.stringify({ code: "FAIL", message: msg }),
    {
      status: code,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    }
  );
}

function validateCheckoutRequest(request: CheckoutRequest): void {
  if (!request.restaurant_id) {
    throw new Error("Restaurant ID is required");
  }
  if (!request.items?.length) {
    throw new Error("Order items cannot be empty");
  }
  for (const item of request.items) {
    if (!item.menu_item_id || !item.menu_item_name || item.price <= 0 || item.quantity <= 0) {
      throw new Error("Invalid item information");
    }
  }
}

async function createCheckoutSession(
  stripe: Stripe,
  userId: string | null,
  request: CheckoutRequest,
  origin: string
) {
  const totalAmount = request.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const currency = (request.currency || 'usd').toLowerCase();

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      customer_id: userId,
      restaurant_id: request.restaurant_id,
      table_id: request.table_id || null,
      total_amount: totalAmount,
      currency: currency,
      status: "pending",
      payment_status: "pending",
      payment_method: "online",
      special_instructions: request.special_instructions || null,
    })
    .select()
    .single();

  if (orderError) throw new Error(`Failed to create order: ${orderError.message}`);

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(
      request.items.map(item => ({
        order_id: order.id,
        menu_item_id: item.menu_item_id,
        menu_item_name: item.menu_item_name,
        quantity: item.quantity,
        price: item.price,
        notes: item.notes || null,
        portion_size: item.portion_size || null,
        variant_name: item.variant_name || null,
      }))
    );

  if (itemsError) throw new Error(`Failed to create order items: ${itemsError.message}`);

  const session = await stripe.checkout.sessions.create({
    line_items: request.items.map(item => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.menu_item_name,
          images: item.image_url ? [item.image_url] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${origin}${successUrlPath}`,
    cancel_url: `${origin}${cancelUrlPath}`,
    payment_method_types: ['card'],
    metadata: {
      order_id: order.id,
      user_id: userId || "",
      restaurant_id: request.restaurant_id,
      table_id: request.table_id || "",
    },
  });

  await supabase
    .from("orders")
    .update({
      stripe_session_id: session.id,
      stripe_payment_intent_id: session.payment_intent as string,
      payment_status: "processing",
    })
    .eq("id", order.id);

  return { order, session };
}

Deno.serve(async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

    const request = await req.json();
    validateCheckoutRequest(request);

    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");
    const { data: { user } } = token
      ? await supabase.auth.getUser(token)
      : { data: { user: null } };

    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2025-08-27.basil",
    });

    const origin = req.headers.get("origin") || "";
    const { order, session } = await createCheckoutSession(
      stripe,
      user?.id || null,
      request,
      origin
    );

    return ok({
      url: session.url,
      sessionId: session.id,
      orderId: order.id,
    });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Payment processing failed", 500);
  }
});
