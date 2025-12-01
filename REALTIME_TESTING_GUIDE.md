# Real-Time Notification System - Testing Guide

## 🎯 What Was Fixed

### Issue
Real-time updates were not working properly without page refresh.

### Root Cause
Supabase Realtime was not enabled for the `notifications` and `orders` tables.

### Solution Applied
1. ✅ Created migration `00015_enable_realtime_notifications.sql`
2. ✅ Enabled Realtime publication for `notifications` table
3. ✅ Enabled Realtime publication for `orders` table
4. ✅ Added detailed logging to track subscription status
5. ✅ Improved channel naming to avoid conflicts (unique per user)
6. ✅ Added subscription status callbacks for debugging

## 🧪 How to Test Real-Time Notifications

### Prerequisites
- Two browser windows (or use incognito mode for one)
- One restaurant owner account
- One customer account
- At least one restaurant with menu items and QR codes

### Test Scenario 1: New Order Notification (Owner)

**Setup:**
1. Open Browser Window 1 (Owner)
   - Log in as restaurant owner
   - Navigate to Owner Dashboard
   - Open browser console (F12) to see logs

2. Open Browser Window 2 (Customer)
   - Log in as customer
   - Navigate to customer area
   - Open browser console (F12) to see logs

**Test Steps:**
1. In Window 2 (Customer):
   - Scan a QR code or navigate to a restaurant menu
   - Add items to cart
   - Place an order
   - Watch the console for logs

2. In Window 1 (Owner):
   - **Expected Results:**
     - Console shows: `[useNotifications] Received INSERT event`
     - Bell icon badge updates from 0 to 1 (or increments)
     - Toast notification appears: "New Order Received"
     - Notification message shows table number and restaurant name
     - **NO PAGE REFRESH REQUIRED**

3. Verify:
   - Click the bell icon in Window 1
   - See the new notification in the list
   - Notification shows as unread (blue dot)

### Test Scenario 2: Order Status Update (Customer)

**Setup:**
- Continue from Test Scenario 1
- Keep both windows open

**Test Steps:**
1. In Window 1 (Owner):
   - Navigate to Order Management
   - Find the order just placed
   - Change status from "pending" to "preparing"
   - Watch the console for logs

2. In Window 2 (Customer):
   - **Expected Results:**
     - Console shows: `[useNotifications] Received INSERT event`
     - Bell icon badge updates (increments by 1)
     - Toast notification appears: "Order Status Updated"
     - Notification message: "Your order at [Restaurant] is being prepared"
     - **NO PAGE REFRESH REQUIRED**
     - If on Customer Dashboard, order list updates automatically
     - Console shows: `[CustomerDashboard] Received order change`

3. Verify:
   - Click the bell icon in Window 2
   - See the status update notification
   - Notification shows as unread (blue dot)

### Test Scenario 3: Multiple Status Changes

**Test Steps:**
1. In Window 1 (Owner):
   - Change order status to "served"
   - Wait 2 seconds
   - Change order status to "completed"

2. In Window 2 (Customer):
   - **Expected Results:**
     - Two separate notifications appear
     - Bell badge shows 2 (or increments by 2)
     - Two toast notifications appear sequentially
     - Both notifications visible in notification list
     - **NO PAGE REFRESH REQUIRED**

## 🔍 Debugging Console Logs

### What to Look For

#### Successful Subscription Setup
```
[useNotifications] Setting up real-time subscription for user: <user-id>
[useNotifications] Subscription status: SUBSCRIBED
```

#### Successful Notification Receipt
```
[useNotifications] Received INSERT event: {
  new: {
    id: "...",
    user_id: "...",
    type: "new_order",
    title: "New Order Received",
    message: "New order from Table 5 at Restaurant Name",
    ...
  }
}
```

### Common Issues and Solutions

#### Issue: Subscription status shows "CHANNEL_ERROR"
**Solution:**
- Check if Realtime is enabled in Supabase dashboard
- Verify migration `00015_enable_realtime_notifications.sql` was applied
- Check Supabase project settings → API → Realtime

#### Issue: No logs appear in console
**Solution:**
- Ensure browser console is open (F12)
- Check if user is logged in
- Verify `userId` is not null
- Refresh the page and check logs again

#### Issue: Notifications appear after page refresh but not in real-time
**Solution:**
- Check console for subscription status
- Verify Realtime is enabled for the table
- Check if there are any JavaScript errors
- Verify Supabase connection is active

## 📊 Verification Checklist

### Owner Notifications
- [ ] Owner receives notification when customer places order
- [ ] Notification appears without page refresh
- [ ] Bell badge updates automatically
- [ ] Toast notification appears
- [ ] Console shows subscription setup logs
- [ ] Console shows INSERT event logs

### Customer Notifications
- [ ] Customer receives notification when order status changes
- [ ] Notification appears without page refresh
- [ ] Bell badge updates automatically
- [ ] Toast notification appears
- [ ] Customer Dashboard order list updates automatically
- [ ] Console shows subscription setup logs
- [ ] Console shows INSERT event logs

### Notification Management
- [ ] Mark as read works without page refresh
- [ ] Mark all as read works without page refresh
- [ ] Delete notification works without page refresh
- [ ] Badge counter updates correctly

## ✅ Success Criteria

The real-time notification system is working correctly if:

1. ✅ Notifications appear within 1-2 seconds of the triggering event
2. ✅ No page refresh is required to see new notifications
3. ✅ Bell badge updates automatically
4. ✅ Toast notifications appear for new notifications
5. ✅ Console logs show successful subscription setup
6. ✅ Console logs show INSERT events when notifications are created
7. ✅ Notification management (read, delete) works without refresh

---

**Note:** Open browser console (F12) to see detailed logs about subscription status and events.
