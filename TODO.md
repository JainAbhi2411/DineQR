# Task: Improve Portion Selection UX (Zomato-style)

## Current State
- Menu items can have `has_portions` flag
- When adding to cart, a dialog shows with portion selection (Half/Full) and special instructions
- Special instructions are shown alongside portion selection

## Required Changes (Zomato-style)
1. When clicking "Add" on an item with portions enabled:
   - Show a clean dialog with ONLY portion variants (Half, Full, Small, etc.)
   - Remove special instructions from this dialog
   - Show prices for each portion variant
   - Default selection should be "Full" portion

2. Update the portion selection dialog:
   - Clean, minimal design
   - Clear price display for each portion
   - Easy selection with radio buttons
   - Confirm button shows selected portion and price

3. Special instructions should be added separately (in cart or checkout)

## Implementation Plan
- [x] Analyze current code structure
- [x] Update MenuBrowsing.tsx to remove special instructions from portion dialog
- [x] Improve portion selection UI to match Zomato's clean design
- [x] Ensure default selection is "Full" portion
- [x] Test the flow: Add item → Select portion → Add to cart
- [x] Run lint to check for issues

## Completed ✅
All changes have been successfully implemented!

## Files to Modify
- `/workspace/app-7x1ojvae4075/src/pages/customer/MenuBrowsing.tsx` - Main menu browsing page with portion dialog
