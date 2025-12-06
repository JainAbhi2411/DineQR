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
- [ ] Add "Offers" section to customer menu browsing page
- [ ] Create OffersModal component to show available offers
- [ ] Add promo code input field in cart/checkout
- [ ] Implement discount calculation logic
- [ ] Show applied discount in order summary
- [ ] Display offer badge on menu items if applicable
- [ ] Track promotion usage when order is placed

### Phase 5: UI/UX Enhancements
- [ ] Add offer badges/tags to highlight promotions
- [ ] Create attractive offer cards with Zomato-style design
- [ ] Add copy promo code functionality
- [ ] Show savings amount prominently
- [ ] Add terms & conditions display

### Phase 6: Testing & Validation
- [ ] Test promotion creation and editing
- [ ] Test promo code validation
- [ ] Test discount calculation
- [ ] Test usage limits
- [ ] Test date validity
- [ ] Test minimum order amount validation
- [ ] Run linter

## Notes
- Discount types: PERCENTAGE, FIXED_AMOUNT
- Need to handle max_discount for percentage discounts
- Need to validate minimum order amount
- Need to check usage limits (per customer and total)
- Need to check date validity
- Promo codes should be unique per restaurant
- Consider auto-applying best offer option
