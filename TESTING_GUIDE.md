# Testing Guide: Global Currency and Timezone Settings

## How to Test Currency Changes

### Step 1: Access Settings Page
1. Log in as a restaurant owner
2. Navigate to Settings page (usually at `/owner/settings`)

### Step 2: Change Currency
1. Find the "Currency" dropdown in the settings form
2. Change from current currency (e.g., USD) to a different one (e.g., EUR, GBP, JPY)
3. Click "Save Settings"
4. You should see a success toast message

### Step 3: Verify Currency Updates
Visit the following pages and verify all prices show the new currency symbol:

**Owner Pages:**
- **Dashboard** (`/owner/dashboard`)
  - Check "Today's Revenue" card
  - Check recent orders list (order totals)
  - Check popular items (item prices)

- **Analytics** (`/owner/analytics`)
  - Check total revenue
  - Check average per order
  - Check average per day
  - Check revenue by date chart
  - Check revenue by item chart
  - Check top performing items

- **Menu Management** (`/owner/menu`)
  - Check menu item prices in the grid view

**Customer Pages:**
- **Menu Browsing** (`/customer/menu`)
  - Check menu item prices
  - Check cart total
  - Check item prices in cart

- **Checkout** (`/customer/checkout`)
  - Check item prices
  - Check subtotal
  - Check tax amount
  - Check total amount

- **Customer Dashboard** (`/customer/dashboard`)
  - Check "Total Spent" card
  - Check order amounts in order history

**Order Components:**
- **Order Cards** (visible in dashboard and order management)
  - Check order total amount
  - Check item subtotals

- **Print Bill** (click print button on completed orders)
  - Check item prices
  - Check order total

### Expected Results
- All prices should display with the new currency symbol
- No `$` symbols should appear if you changed from USD
- Currency symbol should match your selection (€ for EUR, £ for GBP, ¥ for JPY, etc.)

## How to Test Timezone Changes

### Step 1: Access Settings Page
1. Log in as a restaurant owner
2. Navigate to Settings page

### Step 2: Change Timezone
1. Find the "Timezone" dropdown in the settings form
2. Change from current timezone (e.g., UTC) to a different one (e.g., America/New_York, Europe/London, Asia/Tokyo)
3. Click "Save Settings"
4. You should see a success toast message

### Step 3: Verify Timezone Updates
Visit the following pages and verify all timestamps show the new timezone:

**Order Components:**
- **Order Timeline** (expand any order card)
  - Check status change timestamps
  - Times should reflect the selected timezone

- **Order Cards**
  - Check order creation time
  - Check last update time

**Customer Pages:**
- **Customer Dashboard**
  - Check order dates in order history

### Expected Results
- All timestamps should display in the selected timezone
- Time differences should match the timezone offset
- For example, if you change from UTC to America/New_York (UTC-5), times should be 5 hours earlier

## Testing Edge Cases

### Currency Edge Cases
1. **Japanese Yen (JPY)** - Has 0 decimal places
   - Change currency to JPY
   - Verify prices show as whole numbers (e.g., ¥1000 instead of ¥1000.00)

2. **Large Amounts**
   - Create an order with a large total (e.g., $10,000)
   - Verify formatting is correct with thousands separators

3. **Small Amounts**
   - Check items with prices less than $1
   - Verify decimal places are shown correctly

### Timezone Edge Cases
1. **Daylight Saving Time**
   - Test with timezones that observe DST (e.g., America/New_York)
   - Create orders during DST transition periods
   - Verify times are calculated correctly

2. **Large Timezone Offsets**
   - Test with timezones far from UTC (e.g., Pacific/Auckland, UTC+12)
   - Verify dates don't shift incorrectly

3. **Same Day Orders**
   - Create multiple orders on the same day
   - Change timezone
   - Verify all orders still show correct relative times

## Common Issues to Check

### Currency Issues
- ❌ Double currency symbols (e.g., $$10.00 or $€10.00)
- ❌ Missing currency symbols
- ❌ Incorrect decimal places
- ❌ Old currency symbol still showing in some places

### Timezone Issues
- ❌ Times not updating after timezone change
- ❌ Dates shifting by one day
- ❌ Inconsistent time formats across pages
- ❌ Times showing in wrong timezone

## Quick Verification Checklist

After changing currency or timezone, verify:

- [ ] Owner Dashboard shows updated values
- [ ] Analytics page shows updated values
- [ ] Menu Management shows updated prices
- [ ] Customer Menu Browsing shows updated prices
- [ ] Checkout page shows updated prices
- [ ] Customer Dashboard shows updated values
- [ ] Order Cards show updated values
- [ ] Order Timeline shows updated timestamps
- [ ] Print Bill shows updated values
- [ ] No console errors appear
- [ ] Page doesn't require refresh to see changes

## Troubleshooting

### Changes Not Appearing
1. Check browser console for errors
2. Verify settings were saved successfully (check success toast)
3. Try refreshing the page
4. Check if SettingsContext is properly providing values

### Incorrect Formatting
1. Verify the currency/timezone value in the database
2. Check if the formatter functions are being called correctly
3. Verify the useFormatters hook is imported and used
4. Check for any hardcoded currency symbols or date formats

### Performance Issues
1. Settings are fetched once on app load
2. Formatters are memoized in the hook
3. No unnecessary re-renders should occur
4. Check React DevTools for excessive re-renders
