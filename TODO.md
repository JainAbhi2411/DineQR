# Task: Complete Checkout Flow for DineQR

## Plan
- [x] Step 1: Analyze existing database schema and API functions
  - Orders table has all required fields (payment_status, payment_method, special_instructions, stripe fields)
  - OrderApi has createOrder and createOrderItems functions
  - Types are properly defined

- [x] Step 2: Create Stripe Edge Functions
  - [x] Updated create_stripe_checkout edge function
  - [x] Updated verify_stripe_payment edge function
  - [x] Deployed both edge functions

- [x] Step 3: Add Stripe secret configuration
  - [x] Used supabase_bulk_create_secrets to add STRIPE_SECRET_KEY placeholder

- [x] Step 4: Update Checkout Page
  - [x] Updated Checkout.tsx to properly call edge functions
  - [x] Implemented COC and online payment flows
  - [x] Added proper error handling

- [x] Step 5: Create Payment Success Page
  - [x] Created /payment-success route
  - [x] Implemented payment verification
  - [x] Added success/error states

- [x] Step 6: Create Order Tracking Page
  - [x] Created /order-tracking/:orderId route
  - [x] Display order details and status
  - [x] Show real-time status updates with progress bar
  - [x] Added order history link

- [x] Step 7: Update Routes
  - [x] Added payment-success route
  - [x] Added order-tracking route
  - [x] Updated routes.tsx with proper imports

- [x] Step 8: Testing and Validation
  - [x] Run linter
  - [x] Verify all flows work correctly

- [x] Step 9: Bug Fixes
  - [x] Fixed "Proceed to Checkout" navigation issue
  - [x] Updated MenuBrowsing to include restaurantId in checkout URL
  - [x] Updated Checkout to handle tableId from both URL and state
  - [x] Added "Track Order" button to Order History
  - [x] Created testing guide

- [x] Step 10: Real-time and Table Number Fixes
  - [x] Enhanced real-time subscriptions for order updates
  - [x] Added subscription to order_items table
  - [x] Updated order_status_history subscription to all events
  - [x] Fixed table number display to show "Walk-in / Takeaway" when null
  - [x] Updated OrderCard, OrderManagement, PrintBill, and OrderTracking components
  - [x] Added proper TypeScript type casting for payload data

## Notes
- Database schema is already complete with all required fields
- Stripe payment integration implemented with edge functions
- Support both online payment and cash on counter
- Handles guest checkout (customer_id can be null)
- Edge functions deployed and ready
- STRIPE_SECRET_KEY needs to be replaced with actual key in production
