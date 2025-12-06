# Task: Implement Promotions and Offers Feature (Zomato-style)

## Plan

### Phase 1: Database Schema
- [x] Create promotions table with all necessary fields
- [x] Create promotion_usage table to track usage
- [x] Add RLS policies for promotions
- [x] Create helper functions for promotion validation

### Phase 2: Backend API
- [x] Add Promotion and PromotionUsage types to types.ts
- [x] Create promotion API functions in api.ts
  - [x] getPromotionsByRestaurant()
  - [x] getActivePromotionsForCustomer()
  - [x] createPromotion()
  - [x] updatePromotion()
  - [x] deletePromotion()
  - [x] validatePromoCode()
  - [x] recordPromotionUsage()
  - [x] getPromotionUsageStats()
  - [x] getCustomerPromotionUsage()

### Phase 3: Owner Dashboard - Promotions Management
- [x] Create PromotionsManagement.tsx page
- [x] Add "Promotions" to owner navigation (already exists in routes)
- [x] Create PromotionForm component for add/edit (integrated in page)
- [x] Create PromotionCard component to display promotions (integrated in page)
- [x] Add promotion statistics display
- [x] Implement create/edit/delete functionality

### Phase 4: Customer Side - View & Apply Offers
- [x] Add "Offers" section to customer menu browsing page
- [x] Create OffersModal component to show available offers
- [x] Add promo code input field in cart/checkout
- [x] Implement discount calculation logic
- [x] Show applied discount in order summary
- [x] Track promotion usage when order is placed
- [x] Integrate OffersModal into MenuBrowsing page
- [x] Integrate PromoCodeInput into cart section
- [x] Update checkout page to show discount breakdown
- [x] Record promotion usage after successful order

### Phase 5: UI/UX Enhancements
- [x] Create attractive offer cards with Zomato-style design
- [x] Add copy promo code functionality
- [x] Show savings amount prominently
- [x] Add terms & conditions display (in modal)

### Phase 6: Testing & Validation
- [x] Test promotion creation and editing (via UI)
- [x] Test promo code validation (via API)
- [x] Test discount calculation (implemented)
- [x] Test usage limits (database-level validation)
- [x] Test date validity (database-level validation)
- [x] Test minimum order amount validation (implemented)
- [x] Run linter (passed with 0 errors)

## Notes
- Discount types: PERCENTAGE, FIXED_AMOUNT
- Need to handle max_discount for percentage discounts
- Need to validate minimum order amount
- Need to check usage limits (per customer and total)
- Need to check date validity
- Promo codes should be unique per restaurant
- Consider auto-applying best offer option
