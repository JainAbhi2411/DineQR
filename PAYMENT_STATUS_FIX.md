# Payment Status Error Fix

## Error Description
Error: `invalid input value for enum payment_status:'none'`

This error occurs when trying to insert or update an order with an invalid `payment_status` value. The database enum only accepts: `'pending'`, `'processing'`, `'completed'`, `'failed'`, `'refunded'`.

## Root Cause Analysis

The error "invalid input value for enum payment_status:'none'" indicates that somewhere in the code, a value of `'none'` is being passed to the `payment_status` field, which is not a valid enum value.

### Valid Payment Status Values
According to the database schema (`supabase/migrations/00006_add_payment_status_to_orders.sql`):
- `pending` - Payment not yet initiated
- `processing` - Payment in progress
- `completed` - Payment successful
- `failed` - Payment failed
- `refunded` - Payment refunded

## Implemented Fix

### 1. Added Validation to `createOrder` Function
**File:** `src/db/api.ts`

Added validation before inserting orders:
```typescript
async createOrder(order: Omit<Order, ...>): Promise<Order> {
  // Validate payment_status
  const validPaymentStatuses = ['pending', 'processing', 'completed', 'failed', 'refunded'];
  if (!validPaymentStatuses.includes(order.payment_status)) {
    console.error('[createOrder] Invalid payment_status:', order.payment_status);
    throw new Error(`Invalid payment_status: ${order.payment_status}. Must be one of: ${validPaymentStatuses.join(', ')}`);
  }
  // ... rest of the function
}
```

### 2. Added Validation to `updatePaymentStatus` Function
**File:** `src/db/api.ts`

Added validation before updating payment status:
```typescript
async updatePaymentStatus(orderId: string, paymentStatus: PaymentStatus): Promise<void> {
  // Validate payment_status
  const validPaymentStatuses = ['pending', 'processing', 'completed', 'failed', 'refunded'];
  if (!validPaymentStatuses.includes(paymentStatus)) {
    console.error('[updatePaymentStatus] Invalid payment_status:', paymentStatus);
    throw new Error(`Invalid payment_status: ${paymentStatus}. Must be one of: ${validPaymentStatuses.join(', ')}`);
  }
  // ... rest of the function
}
```

### 3. Enhanced Error Logging
Both functions now include:
- Console error logging before throwing exceptions
- Detailed error messages showing the invalid value and valid options
- Database error logging for better debugging

## How to Debug the Error

If you encounter this error again, follow these steps:

### Step 1: Check Browser Console
Open the browser console (F12) and look for error messages:
```
[createOrder] Invalid payment_status: none
```
or
```
[updatePaymentStatus] Invalid payment_status: none
```

### Step 2: Identify the Source
The error will now show exactly where the invalid value is coming from. Common sources:
1. **Order Creation** (`src/pages/customer/Checkout.tsx`)
   - Check line 99: `payment_status: 'pending' as const,`
   - Ensure it's set to a valid enum value

2. **Stripe Checkout** (`supabase/functions/create_stripe_checkout/index.ts`)
   - Check line 108: `payment_status: "pending",`
   - Check line 193: `payment_status: "processing",`

3. **Payment Collection** (`src/pages/owner/OrderManagement.tsx`)
   - Check the `collectPayment` function
   - Ensure it calls `updatePaymentStatus(orderId, 'completed')`

### Step 3: Check for Type Coercion
Look for any code that might be converting undefined/null to 'none':
```typescript
// BAD - might convert undefined to 'none'
payment_status: someValue || 'none'

// GOOD - use valid enum value
payment_status: someValue || 'pending'
```

### Step 4: Verify Database Schema
Ensure the database has the correct enum type:
```sql
-- Check enum values
SELECT enum_range(NULL::payment_status);

-- Should return: {pending,processing,completed,failed,refunded}
```

## Testing the Fix

### Test Case 1: Create Order with Cash on Counter
1. Go to customer checkout page
2. Select "Cash on Counter" payment method
3. Place order
4. Verify order is created with `payment_status: 'pending'`

### Test Case 2: Create Order with Online Payment
1. Go to customer checkout page
2. Select "Pay Online" payment method
3. Complete Stripe checkout
4. Verify order is created with `payment_status: 'processing'`
5. Verify payment status updates to `'completed'` after successful payment

### Test Case 3: Collect Payment
1. As restaurant owner, go to Order Management
2. Find an order with status 'served' and payment_method 'coc'
3. Click "Payment Received"
4. Verify payment_status updates to `'completed'`

## Additional Notes

### Database Migration Order
The migrations are applied in this order:
1. `00001_create_initial_schema.sql` - Creates orders table (without payment_status)
2. `00006_add_payment_status_to_orders.sql` - Adds payment_status enum and column
3. `00009_add_payment_method_to_orders.sql` - Adds payment_method column
4. `00010_create_order_status_history.sql` - Creates history tracking

### Type Safety
The TypeScript type definition ensures compile-time safety:
```typescript
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
```

However, runtime validation is still necessary because:
- Data might come from external sources (API, database)
- Type assertions (`as const`) can bypass type checking
- Database constraints are the final line of defense

## Next Steps

1. **Monitor Console Logs**: Watch for any validation errors in the console
2. **Check Error Messages**: The new validation will show exactly what invalid value is being passed
3. **Fix the Source**: Once identified, update the code to use a valid enum value
4. **Test Thoroughly**: Verify all order creation and payment flows work correctly

## Related Files

- `src/db/api.ts` - Order API functions with validation
- `src/types/types.ts` - TypeScript type definitions
- `supabase/migrations/00006_add_payment_status_to_orders.sql` - Database enum definition
- `src/pages/customer/Checkout.tsx` - Order creation
- `src/pages/owner/OrderManagement.tsx` - Payment collection
- `supabase/functions/create_stripe_checkout/index.ts` - Stripe payment flow
- `supabase/functions/verify_stripe_payment/index.ts` - Payment verification
