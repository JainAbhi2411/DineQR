# Task: Add Half/Full Portion Option for Menu Items

## Plan
- [x] Step 1: Create database migration to add portion_size field to order_items
- [x] Step 2: Update TypeScript types to include portion information
- [x] Step 3: Update database API functions to handle portion sizes
- [x] Step 4: Update MenuManagement.tsx to allow configuring half/full portions
- [x] Step 5: Update MenuBrowsing.tsx to show portion selection UI
- [x] Step 6: Update cart context to handle portion sizes
- [x] Step 7: Update checkout flow to include portion information
- [x] Step 8: Test the implementation with lint check

## Notes
- Half/full portions should be optional per menu item
- Variants JSONB field can store half/full pricing: [{"name": "Half", "price": 10}, {"name": "Full", "price": 18}]
- Order items need to track which portion was selected
- All tasks completed successfully!

## Implementation Summary
1. Added `portion_size`, `variant_name` fields to `order_items` table
2. Added `has_portions` boolean flag to `menu_items` table
3. Updated TypeScript interfaces for MenuItem, OrderItem, and CartItem
4. Enhanced EnhancedMenuItemForm with portion toggle and helpful UI hints
5. Updated MenuBrowsing with portion selection dialog using RadioGroup
6. Modified cart system to handle different portions as separate cart items
7. Updated checkout flow to display and submit portion information
8. All lint checks passed successfully
