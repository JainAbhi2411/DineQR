# Task: Add Visited Restaurants Feature to Customer Dashboard

## Plan
- [x] Step 1: Create database migration for visited_restaurants table
- [x] Step 2: Update TypeScript types to include VisitedRestaurant interface
- [x] Step 3: Create API functions to manage visited restaurants
- [x] Step 4: Update ScanQR page to save visited restaurant when QR is scanned
- [x] Step 5: Update CustomerDashboard to display visited restaurants as cards
- [x] Step 6: Test the implementation with lint check

## Notes
- When a user scans a QR code, save the restaurant to their visited list
- Display visited restaurants as clickable cards on the dashboard
- Allow quick reordering by clicking on restaurant cards
- Track last visited timestamp and visit count for each restaurant
- Users can remove restaurants from their list by hovering and clicking the X button

## Implementation Summary
1. Created `visited_restaurants` table with customer_id, restaurant_id, visit counts, and timestamps
2. Added unique constraint on (customer_id, restaurant_id) to prevent duplicates
3. Created `upsert_visited_restaurant` RPC function to handle insert/update logic
4. Added VisitedRestaurant and VisitedRestaurantWithDetails TypeScript interfaces
5. Created visitedRestaurantApi with methods to upsert, get, and delete visited restaurants
6. Updated ScanQR page to save restaurant when QR code is scanned
7. Enhanced CustomerDashboard with "Your Restaurants" section showing visited restaurants as cards
8. Added hover effects and remove functionality for restaurant cards
9. All lint checks passed successfully

## Previous Task Completed
- Half/Full Portion Option for Menu Items - All tasks completed successfully!
