# Task: Add to Existing Order Feature

## Problem
When a customer places an order and wants to add more items later (e.g., ordering 1 more roti after already ordering dal fry, paneer masala, and 2 rotis), the system creates a new separate order. This results in:
- Multiple orders for the same table/session
- Multiple bills
- Poor customer experience
- Difficult order management

## Solution
Implement "Add to Existing Order" feature that:
1. Checks if customer has an active order (pending/preparing status)
2. Shows dialog asking if they want to add to existing order or create new
3. Adds items to existing order and updates total
4. Notifies restaurant of additional items

## Implementation Plan

- [x] Step 1: Add API function to check for active orders
  - [x] Create `getActiveOrderForCustomer()` function
  - [x] Query orders with pending/preparing status
  
- [x] Step 2: Add API function to add items to existing order
  - [x] Create `addItemsToExistingOrder()` function
  - [x] Update order total
  - [x] Create order status history entry
  
- [x] Step 3: Update checkout flow in MenuBrowsing
  - [x] Check for active orders before checkout
  - [x] Show dialog if active order exists
  - [x] Handle "add to existing" vs "create new" choice
  
- [x] Step 4: Create AddToExistingOrderDialog component
  - [x] Show existing order details
  - [x] Show new items to be added
  - [x] Show updated total
  - [x] Confirm/Cancel buttons
  
- [x] Step 5: Update order notifications
  - [x] Notify restaurant when items are added to existing order
  - [x] Show "Additional items" indicator
  
- [ ] Step 6: Test the feature
  - [ ] Test adding items to existing order
  - [ ] Test creating new order when desired
  - [ ] Test with different order statuses
  - [ ] Test notifications

## Notes
- Only allow adding to orders with status: pending or preparing
- Don't allow adding to completed/cancelled orders
- Clear cart after adding to existing order
- Update order timestamp to reflect latest addition

## Implementation Complete ✅
All code has been implemented and passes linting checks.
