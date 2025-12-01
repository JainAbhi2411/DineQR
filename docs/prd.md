# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Real-Time Notifications & Auto-Refresh Features Enhanced)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem that revolutionizes the complete dining experience. The platform provides advanced authentication, **real-time notifications with automatic page updates**, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication, dynamic menu management with enhanced schema support (including half/full portion options), AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, **instant order notifications without page refresh**, **automatic real-time order timeline updates on both customer and owner dashboards**, detailed order tracking with complete timelines, e-bill generation, and personalized restaurant dashboard for quick reordering - creating a unified platform that manages every aspect from customer arrival to post-dining feedback.

## 2. Advanced Authentication System

### 2.1 Restaurant Owner Authentication
- **Registration Flow**:
  - Multi-step registration with email and phone verification (OTP-based)
  - Business license/tax ID verification for restaurant legitimacy
  - Two-factor authentication (2FA) setup mandatory\n  - Password requirements: minimum 12 characters with uppercase, lowercase, numbers, and special characters
  - Security questions setup for account recovery
- **Login System**:
  - Email/phone + password authentication
  - Biometric login support (fingerprint/face recognition) for mobile\n  - Session management with auto-logout after inactivity
  - Device tracking and suspicious login alerts
  - Single Sign-On (SSO) support for enterprise accounts
- **Password Management**:
  - Secure password reset via email/SMS with time-limited tokens
  - Password change history tracking
  - Forced password update every 90 days for security
- **Role-Based Access Control (RBAC)**:
  - Owner: Full system access\n  - Manager: Menu and order management
  - Staff: Order viewing and status updates only
  - Accountant: Financial reports and payment data access
\n### 2.2 Customer Authentication
- **Registration Options**:
  - Email registration with verification link
  - Phone number registration with OTP verification
  - Social media integration (Google, Facebook, Apple Sign-In)
  - Guest mode with limited features (no order history, no saved preferences)
- **Login System**:
  - Email/phone + password\n  - Social media quick login
  - Biometric authentication for returning users
  - Remember device option for faster access
- **Profile Verification**:
  - Optional profile completion for personalized experience
  - Verified badge for users with confirmed email and phone
  - Loyalty program enrollment during registration
- **Security Features**:
  - Account lockout after 5 failed login attempts
  - Email/SMS alerts for new device logins
  - Privacy settings for data sharing preferences
  - GDPR-compliant data management

### 2.3 Waiter/Agent Authentication
- **Staff Registration** (by restaurant owner):
  - Owner creates staff accounts with unique employee IDs
  - Email/phone verification for staff members
  - Role assignment (waiter, chef, manager)\n  - Shift schedule integration
- **Staff Login**:
  - Employee ID + password authentication
  - Quick PIN-based login for tablet devices
  - Biometric login for mobile staff apps
  - Automatic clock-in/clock-out tracking\n- **Access Permissions**:
  - View assigned tables and orders only
  - Update order status within assigned tables
  - Access customer chat for assigned orders
  - View menu and inventory information

## 3. Enhanced Core Features

### 3.1 Advanced Restaurant Owner Features
\n#### 3.1.1 Restaurant Management Dashboard with Animated Home Page and Real-Time Notification System
\n**Enhanced Home Page with Restaurant Ambiance Animations**:\n\n- **Hero Section with Dynamic Visuals**:
  - Full-width hero banner with animated gradient background (smooth color transitions between warm orange and teal)
  - Floating food illustrations with parallax scrolling effect (subtle movement on scroll)
  - Animated restaurant icons (plates, utensils, chef hats) with gentle floating motion
  - Lottie animations of cooking elements (steam rising, sizzling pans, rotating dishes)
  - Welcome message with typewriter animation effect:'Welcome back, [Owner Name]!'
  - Current date and time display with smooth fade-in transition
\n- **Live Statistics Dashboard with Animated Counters**:
  - Real-time metrics cards with entrance animations (slide-up with stagger effect)
  - Animated number counters for key statistics:\n    - Total Orders Today (counting animation from 0 to current value)
    - Active Orders (pulsing badge with live count)
    - Revenue Today (currency symbol with rolling number animation)
    - Customer Satisfaction Rating (animated star fill effect)
  - Circular progress indicators with smooth arc animations for:\n    - Table Occupancy Rate (animated donut chart)
    - Kitchen Efficiency (progress ring with color gradient)
    - Average Service Time (clock animation with moving hands)
  - Sparkline charts with drawing animation for hourly trends
  - Color-coded status indicators with glow effects

- **Quick Action Cards with Hover Effects**:
  - Grid layout of action cards with 3D tilt effect on hover
  - Each card features:
    - Animated icon with bounce effect on page load
    - Card title with gradient text effect
    - Hover state: scale(1.05) with shadow expansion and subtle rotation
    - Click animation: ripple effect from touch point
  - Quick actions include:
    - 'View Orders' (with live order count badge pulsing)
    - 'Manage Menu' (with rotating plate icon)
    - 'Check Inventory' (with stock level indicator animation)
    - 'View Analytics' (with animated chart icon)
    - 'Staff Management' (with team icon animation)
    - 'Generate Reports' (with document flip animation)

- **Live Order Feed with Real-Time Animations**:
  - Scrolling ticker showing recent orders with slide-in animation
  - New order notifications with slide-down and bounce effect
  - Order status updates with color transition animations
  - Sound notification with visual ripple effect for new orders
  - Auto-scrolling feed with pause on hover

- **Restaurant Ambiance Elements**:
  - Animated background patterns:\n    - Subtle food-related SVG patterns (forks, spoons, plates) with slow rotation
    - Floating bubble animations with food icons inside
    - Particle effects resembling steam or sparkles
  - Ambient animations:
    - Candle flame flicker effect in corner decorations
    - Subtle shadow movements simulating restaurant lighting
    - Animated table layout visualization showing occupied/available tables
  - Seasonal themes:
    - Falling leaves animation for autumn
    - Snowflakes for winter
    - Flower petals for spring
    - Sun rays for summer

- **Interactive Elements**:
  - Animated navigation menu with smooth expand/collapse\n  - Sidebar with slide-in animation on page load
  - **Real-Time Notification Bell with Advanced Features** (NEW):
    - Bell icon positioned in top-right corner of dashboard header
    - **Live notification badge**: Red circular badge with unread count (e.g., '3')
    - **Shake animation**: Bell shakes with bounce effect when new order arrives (500ms animation)
    - **Sound notification**: Customizable notification sound plays when new order received (can be enabled/disabled in settings)
    - **Visual ripple effect**: Orange ripple animation emanates from bell icon on new notification
    - **Notification dropdown panel**:
      - Click bell icon to open dropdown panel (slide-down animation, 300ms)
      - Panel displays list of recent notifications (last 10)\n      - Each notification card shows:
        - Notification icon (order icon, payment icon, etc.)
        - Notification title (e.g., 'New Order Received')
        - Brief message (e.g., 'Table 12 placed an order for $45.50')
        - Timestamp (e.g., '2 minutes ago')
        - Unread indicator (blue dot for unread notifications)
      - Click on notification to navigate to relevant order details
      - 'Mark All as Read' button at bottom of panel
      - 'View All Notifications' link to open full notification history page
    - **Notification types**:
      - New Order Received (orange icon)
      - Order Status Updated (blue icon)
      - Payment Completed (green icon)
      - Payment Pending (yellow icon)
      - Customer Message (purple icon)
      - Low Stock Alert (red icon)
      - Staff Activity (gray icon)
    - **Auto-dismiss**: Notification badge count updates automatically when notifications are read
    - **Persistent notifications**: Notifications remain in panel until manually dismissed or marked as read
  - Profile avatar with hover zoom and border glow\n  - Search bar with expand animation on focus
  - Dropdown menus with fade-in and slide-down effect

- **Performance Optimizations**:
  - CSS animations for smooth 60fps performance
  - Lottie animations loaded asynchronously
  - Reduced motion mode for accessibility (respects prefers-reduced-motion)
  - Lazy loading for non-critical animations
  - GPU-accelerated transforms for smooth transitions

- **Responsive Animations**:
  - Mobile: Simplified animations with reduced complexity
  - Tablet: Moderate animation effects with optimized performance
  - Desktop: Full animation suite with advanced effects
  - Touch devices: Haptic feedback integration with animations

**Multi-Restaurant Support**:
  - Manage unlimited restaurant locations from single account
  - Switch between restaurants with dropdown selector (animated transition)
  - Consolidated analytics across all locations
  - Location-specific settings and customization

**Restaurant Profile** (Enhanced with Additional Fields):
- **Basic Information**:
  - Restaurant name (required, max 100 characters)
  - Restaurant tagline/slogan (optional, max 150 characters)
  - Restaurant logo (upload, recommended size: 512x512px, formats: PNG, JPG, SVG)
  - Banner images (upload multiple, minimum 1, maximum 5, recommended size: 1920x1080px)
  - **Restaurant Type** (required, single select):
    - Pure Vegetarian (serves only vegetarian food)
    - Non-Vegetarian (serves both vegetarian and non-vegetarian food)
    - Vegan (serves only plant-based food)
    - Mixed (offers all types)\n  - **Restaurant Images Gallery** (enhanced):
    - Interior photos (minimum 3, maximum 10)\n    - Exterior photos (minimum 2, maximum 5)
    - Ambiance shots (dining area, bar, outdoor seating)
    - Kitchen photos (optional, for transparency)
    - Staff photos (optional, for personal touch)
    - Signature dish photos (minimum 5, maximum 15)
    - Image upload with drag-and-drop support
- Image cropping and editing tools
    - Set primary image for restaurant profile
    - Reorder images with drag-and-drop
    - Add captions to images (optional)
- **Contact & Location**:
  - Complete address with Google Maps integration and geolocation
  - Contact phone number (required, with country code)
  - Email address (required)\n  - Website URL (optional)\n  - Social media links (Facebook, Instagram, Twitter, YouTube)
- **Operating Details**:
  - Business hours with day-wise timings
  - Holiday schedule management
  - Special hours for events or seasons
  - Delivery hours (if applicable)
  - Takeout hours (if applicable)
- **Restaurant Classification**:
  - Cuisine types (multi-select): Italian, Chinese, Indian, Mexican, Japanese, Thai, Mediterranean, American, French, Korean, Vietnamese, Middle Eastern, Fusion, etc.
  - Restaurant category (single select): Fine Dining, Casual Dining, Fast Food, Cafe, Bar & Grill, Buffet, Food Truck, Cloud Kitchen, etc.
  - Price range indicator (single select): Budget ($), Moderate ($$), Upscale ($$$), Fine Dining ($$$$)\n  - Dining style (multi-select): Dine-in, Takeout, Delivery, Catering, Drive-through\n- **Capacity & Layout**:
  - Total seating capacity (number of guests)
  - Number of tables\n  - Floor plan upload (optional, PDF or image)
  - Private dining rooms (yes/no, if yes, specify count and capacity)
  - Outdoor seating availability (yes/no, if yes, specify capacity)
- **Amenities & Features** (multi-select):
  - Free WiFi\n  - Parking (valet, self-parking, street parking)
  - Wheelchair accessible
  - Outdoor seating
  - Live music/entertainment
  - Bar/alcohol service
  - Kids menu
  - Pet-friendly
  - Air conditioning
  - Smoking area
  - Private events hosting
  - Catering services
  - Delivery service
  - Takeout service
  - Reservations accepted
  - Online ordering
- **Description & Story**:
  - Restaurant description (required, rich text editor with formatting, max 2000 characters)
  - Chef's story or restaurant history (optional, rich text, max 1000 characters)
  - Special features or unique selling points (optional, max 500 characters)
- **Certifications & Awards** (optional):
  - Food safety certifications (upload certificates)
  - Health department ratings
  - Awards and recognitions (text list with year)
  - Michelin stars or other ratings
  - Organic/sustainable certifications
- **Additional Information**:
  - Dress code (casual, smart casual, formal, etc.)
  - Reservation policy\n  - Cancellation policy\n  - Group dining policy
  - Payment methods accepted (cash, cards, digital wallets, etc.)
  - Languages spoken by staff
  - Special dietary accommodations (gluten-free, vegan options, etc.)
\n#### 3.1.2 Advanced Menu Management System\n
**Enhanced Schema Structure**:
\n- **Category Schema** (Updated with Additional Fields):
  - Category ID (auto-generated UUID)
  - Category Name (required, max 50 characters)
  - Category Description (optional, rich text, max 500 characters)
  - **Category Type** (required, single select):
    - Vegetarian (contains only vegetarian items)
    - Non-Vegetarian (contains non-vegetarian items)
    - Vegan (contains only vegan items)
    - Mixed (contains both vegetarian and non-vegetarian items)
  - Category Image/Icon (upload or select from library)
  - Display Order (integer for sorting, drag-and-drop reordering)\n  - Availability Status (active/inactive toggle)
  - Time-based Availability (multi-select):
    - Breakfast (with time range, e.g., 7:00 AM - 11:00 AM)
    - Lunch (with time range, e.g., 12:00 PM - 3:00 PM)
    - Dinner (with time range, e.g., 6:00 PM - 10:00 PM)
    - All-day\n    - Custom time slots (define start and end time)
  - Parent Category (optional, for sub-categories support, dropdown selection)
  - **Category Rating** (auto-calculated):
    - Average rating of all items in category (1-5 stars)
    - Total number of ratings
    - Display on category card
  - Popular Category Badge (auto-assigned based on order volume)
\n- **Food Item Schema** (Complete with Additional Fields Including Half/Full Portion Option):
  - Item ID (auto-generated UUID)
  - Item Name (required, max 100 characters)
  - Item Description (required, rich text editor with formatting, max 1000 characters)
  - **Item Type** (required, single select with color-coded icon):
    - Vegetarian (green icon: leaf or'V' symbol)
    - Non-Vegetarian (red icon: chicken leg or 'N' symbol)
    - Vegan (green icon: 'VG' symbol)
    - Eggetarian (yellow icon: egg symbol)
  - Category Assignment (required, multi-category support with primary category selection)
  - **Pricing Structure** (enhanced for quantity-based pricing and half/full portions):
    - **Base Price** (required, decimal with currency symbol)
    - **Quantity-Based Pricing** (optional, for items with multiple serving sizes):
      - Small/Regular/Large portions with individual prices
      - Example: Small (250g) - $8, Regular (400g) - $12, Large (600g) - $16
      - **Half/Full Plate Options** (optional, for applicable items):
        - **Half Plate**: Price for half portion (e.g., Half Plate - $10)
        - **Full Plate**: Price for full portion (e.g., Full Plate - $18)
        - Toggle to enable/disable half/full option for specific items
        - Set default selection (Half or Full)
        - Display both options prominently in menu and item detail view
      - Single/Double/Family pack options
      - Custom quantity units (grams, pieces, servings, etc.)
      - Set default quantity selection\n    - **Combo Pricing** (optional):
      - Combo meal options with bundled items and discounted price
      - Example: Burger + Fries + Drink = $15 (save $3)
    - Discounted Price (optional, for promotions)
    - Discount percentage display (auto-calculated)
    - Discount validity period (start and end date)
  - **Images** (enhanced):
    - Upload multiple images (minimum 1, maximum 5)
    - High-resolution images (minimum 1200x675px)
    - Image cropping and editing tools
    - Set primary image for display
    - Reorder images with drag-and-drop
    - Add captions to images (optional)
  - Preparation Time (required, in minutes, with range: e.g., 15-20 mins)
  - **Customer Ratings & Reviews** (enhanced):
    - **Overall Item Rating** (1-5 stars, auto-calculated from customer reviews)
    - Total number of ratings (display count)
    - Rating breakdown (5-star: X%, 4-star: Y%, etc.)
    - Recent reviews display (last 5 reviews with customer name, rating, comment, date)
    - Review photos uploaded by customers
    - Helpful/Not Helpful voting on reviews
    - Restaurant owner response to reviews (optional)
    - Filter reviews by rating (5-star, 4-star, etc.)
    - Sort reviews by: Most Recent, Highest Rating, Lowest Rating, Most Helpful
  - Dietary Indicators (multi-select with icons):
    - Vegetarian, Vegan, Non-Vegetarian, Eggetarian
    - Gluten-Free, Dairy-Free, Nut-Free, Soy-Free, Shellfish-Free
    - Halal, Kosher, Jain, Organic
    - Low-Carb, Keto-Friendly, Paleo, High-Protein
  - Spice Level (single select with visual indicator):
    - None (no chili icon)
    - Mild (1chili icon)
    - Medium (2 chili icons)
    - Hot (3 chili icons)
    - Extra Hot (4 chili icons)\n    - Customizable (customer can adjust)\n  - Allergen Information (multi-select with warning icons):
    - Nuts, Dairy, Eggs, Soy, Shellfish, Wheat, Fish, Sesame, Mustard, Celery, Lupin, Molluscs, Sulphites
    - Severity indicator (mild, moderate, severe)
    - Display prominent warning for severe allergens
  - Nutritional Information (optional, expandable section):
    - Calories (kcal)
    - Protein (grams)
    - Carbohydrates (grams)
    - Fat (grams)
    - Saturated Fat (grams)
    - Trans Fat (grams)
    - Fiber (grams)
    - Sugar (grams)
    - Sodium (mg)
    - Cholesterol (mg)
    - Vitamins and minerals (optional)
  - Ingredients List (required, detailed, comma-separated or bullet points)
  - **Customization Options** (enhanced):
    - **Portion Size** (if not using quantity-based pricing):
      - Small, Medium, Large with price variations
      - Custom portion names (e.g., Solo, Duo, Family)
    - **Half/Full Plate Selection** (for applicable items):
      - Radio buttons or segmented control for Half Plate or Full Plate
      - Price displayed for each option
      - Selected option highlighted
      - Default selection based on restaurant settings
    - **Spice Level Adjustment**:
      - No Spice, Mild, Medium, Hot, Extra Hot
      - Price adjustment if applicable (e.g., extra spicy sauce +$1)
    - **Add-ons** (multi-select with individual prices):
      - Extra cheese (+$2), Extra sauce (+$1), Extra toppings (+$3)
      - Side items (fries, salad, bread)\n      - Beverages (soft drinks, juices)\n      - Desserts\n    - **Removal Options** (multi-select, no charge):
      - No onions, No garlic, No cilantro, No mayo, etc.
    - **Cooking Preferences** (single select):
      - Rare, Medium Rare, Medium, Medium Well, Well Done (for meats)
      - Crispy, Soft, Extra crispy (for fried items)
    - **Special Instructions** (text box for custom requests)
  - Availability Status (required, single select):
    - Available (in stock and ready to order)
    - Out of Stock (temporarily unavailable)
    - Seasonal (available only during specific seasons)
    - Limited Time Offer (available for limited period)
    - Coming Soon (not yet available)
  - **Badges & Labels** (auto-assigned or manual):
    - Popular Item (based on order volume, auto-assigned)
    - Chef's Special (manually assigned by owner)
    - New Item (auto-expires after 30 days from creation)
    - Best Seller (top10% of items by sales)
    - Customer Favorite (highest rated items,4.5+ stars)
    - Healthy Choice (low-calorie or nutritious items)
    - Spicy (for items with medium or higher spice level)
  - Item Tags (searchable keywords, comma-separated):
    - Examples: comfort food, street food, fusion, traditional, modern, grilled, baked, fried, steamed, etc.
  - Pairing Suggestions (multi-select from menu items):
    - Recommend drinks (e.g., 'Pairs well with Mango Lassi')
    - Recommend sides (e.g., 'Goes great with Garlic Naan')
    - Recommend desserts (e.g., 'Complete your meal with Gulab Jamun')
  - **Popularity Metrics** (auto-tracked):
    - Total Orders Count (lifetime orders for this item)
    - Orders This Week/Month (for trending analysis)
    - View Count (how many times item detail page was viewed)
    - Add-to-Cart Count (how many times added to cart)
    - Conversion Rate (orders / views)\n  - **Inventory Linking** (optional):
    - Link to ingredient inventory for automatic stock updates
    - Low stock alert when ingredients running low
    - Auto-disable item when out of stock
  - Item Status (active/inactive toggle for visibility)
  - Created Date and Last Modified Date (auto-tracked)
\n**Advanced Menu Operations**:
- **Bulk Management**:
  - Import menu via CSV/Excel with template download (includes all new fields including half/full portion options)
  - Export complete menu with all fields to CSV/Excel
  - Duplicate items for quick variations (e.g., create 'Veg Burger' from 'Chicken Burger')
  - Bulk price updates with percentage increase/decrease or fixed amount
  - Bulk category reassignment (move multiple items to different category)
  - Bulk availability status change (mark multiple items as out of stock)
  - Bulk badge assignment (mark multiple items as 'Chef's Special')
- **Menu Versioning**:
  - Save menu versions for seasonal changes (e.g., Summer Menu, Winter Menu)
  - Schedule menu changes for specific dates and times
  - Rollback to previous menu versions with one click
  - Compare menu versions side-by-side\n- **Menu Analytics**:
  - Most viewed items (top 20 by view count)
  - Most ordered items (top 20 by order count)
  - Items with highest ratings (4.5+ stars)
  - Items with low orders (candidates for removal or promotion)
  - Category-wise performance (sales, ratings, popularity)
  - Trending items (items with increasing order volume)
  - Underperforming items (low views, low orders, low ratings)
  - Revenue contribution per item (percentage of total revenue)
  - Profit margin analysis per item
  - **Half vs Full Plate Analytics** (for items with half/full option):
    - Percentage of orders choosing half plate vs full plate
    - Revenue comparison between half and full portions
    - Customer preference trends over time
- **Smart Recommendations**:
  - AI-suggested item pairings based on order history
  - Automatic'Frequently Bought Together' generation
  - Seasonal item suggestions based on trends and weather
  - Price optimization suggestions based on demand
  - Menu gap analysis (missing popular items in market)
\n#### 3.1.3 Advanced Inventory Management
- **Ingredient Database**:
  - Create ingredient master list with units (kg, liters, pieces)\n  - Link ingredients to menu items with quantity requirements (including separate quantities for half and full portions)
  - Set minimum stock levels with auto-alerts
  - Track ingredient costs for profit margin calculation
- **Stock Management**:
  - Real-time stock level tracking
  - Automatic item availability updates when ingredients run low
  - Stock-in/stock-out logging with timestamps
  - Wastage tracking and reporting
  - Expiry date management for perishables
- **Supplier Management**:
  - Maintain supplier database with contact information
  - Create purchase orders directly from inventory system
  - Track supplier performance and delivery times
  - Compare supplier pricing for cost optimization
- **Inventory Reports**:
  - Daily/weekly/monthly consumption reports
  - Cost analysis and profit margin per item (including half/full portion profitability)
  - Wastage reports with cost impact\n  - Reorder suggestions based on consumption patterns
\n#### 3.1.4 Enhanced QR Code Management
- **QR Code Generation**:
  - Generate unique QR codes for each table with embedded table number and restaurant ID
  - Batch QR code generation for multiple tables
  - Custom QR code design with restaurant logo and brand colors
  - QR code expiry and regeneration for security
- **QR Code Features**:
  - Download in multiple formats: PNG, SVG, PDF, EPS
  - Print-ready templates with table numbers and instructions
  - QR code with embedded WiFi credentials (optional)
  - Dynamic QR codes that can be updated without reprinting
- **QR Analytics**:
  - Scan count per table
  - Peak scanning hours
  - Average time between scan and first order
  - Table turnover rate
\n#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards and Real-Time Auto-Refresh (ENHANCED)
\n**Real-Time Order Board with Automatic Updates (NO MANUAL REFRESH REQUIRED)**:

- **Persistent WebSocket Connection**:
  - Dashboard establishes persistent WebSocket connection upon login
  - Connection remains active throughout session
  - Automatic reconnection with exponential backoff if connection drops
  - Connection status indicator in dashboard header (green dot: connected, yellow: reconnecting, red: disconnected)
\n- **Instant New Order Notifications (NEW)**:
  - **When customer places order**:
    - Server immediately broadcasts new order event to owner dashboard via WebSocket
    - **No page refresh required** - order appears instantly on dashboard
    - **Visual notification**:
      - New order card slides in from top with bounce animation (500ms)
      - Orange highlight border around new order card for 3 seconds
      - Card positioned at top of order board
    - **Audio notification**:
      - Customizable notification sound plays (can be enabled/disabled in settings)
      - Sound options: Bell, Chime, Ding, or Custom upload
    - **Notification bell alert**:
      - Bell icon in header shakes with bounce animation
      - Red badge count increments automatically
      - Notification added to dropdown panel
    - **Desktop notification** (if browser permissions granted):
      - System notification appears outside browser window
      - Shows:'New Order from Table [X]' with order total
      - Click to focus dashboard window
    - **Mobile push notification** (if app installed):
      - Push notification sent to owner's mobile device
      - Notification shows order summary\n      - Tap to open app and view order\n\n- **Order Card Display**:
  - Grid or list view toggle for order cards
  - Color-coded order cards by status:\n    - Orange: New Order (requires acknowledgment)
    - Blue: Acknowledged (assigned to waiter)
    - Yellow: Preparing (in kitchen)
    - Green: Ready (waiting for service)
    - Purple: Served (food delivered to customer)
    - Teal: Payment Pending (awaiting payment completion)
    - Gray: Completed (payment received and order closed)
  - Compact card view shows:\n    - Order ID and timestamp
    - Table number with floor/section\n    - Customer name (real name from profile or'Guest')
    - Order status badge (current stage)
    - Payment method indicator (Card, Wallet, UPI,BNPL, COC)\n    - Payment status badge (Pending/Completed/Failed)
    - Total amount\n    - Quick action buttons (View Details, Update Status)\n\n**Automatic Order Status Updates (NO MANUAL REFRESH REQUIRED)**:\n
- **Real-Time Status Synchronization**:
  - When owner/manager updates order status in dashboard, change is immediately broadcast to all connected clients
  - **Customer dashboard automatically receives update** without manual refresh
  - **Owner dashboard updates in real-time** for all users viewing same restaurant
  - Order card automatically moves to appropriate status section
  - Status badge updates with smooth color transition animation
  - Timeline checkpoint added automatically with timestamp

- **Live Order Count Updates**:
  - Order count badges update automatically when new orders arrive or status changes
  - Statistics dashboard counters update in real-time (Total Orders, Active Orders, Revenue)
  - No need to refresh page to see updated counts
\n**Expandable Order Details**:
- **Click/Tap to Expand**:
  - Order card expands to full-screen modal or slide-out panel
  - Detailed order information displayed:\n    - **Order Header**:
      - Order ID (large, bold)
      - Order date and time
      - Table number and location
      - Customer name and contact (phone/email if available)
      - Assigned waiter name and photo
    - **Order Items Section**:
      - Itemized list with:\n        - Item name and image thumbnail
        - Item type indicator (veg/non-veg icon)
        - Quantity
        - **Portion size selected** (Half Plate or Full Plate, if applicable)
        - Customizations (spice level, add-ons, removals)
        - Special instructions per item
        - Individual item price
        - Subtotal per item
    - **Order-Level Special Instructions**:
      - Highlighted section for overall order notes
    - **Pricing Breakdown**:
      - Subtotal
      - Taxes (itemized: GST, service charge, etc.)
      - Discounts and promo codes applied
      - Tip amount (if applicable)
      - Total amount (large, bold)
    - **Payment Information**:
      - Payment method selected (with icon)
      - Payment status (Pending/Completed/Failed)
      - Transaction ID (for online payments)
      - Payment timestamp (when completed)
    - **Order Timeline** (Visual Progress Tracker):
      - Vertical timeline with checkpoints:\n        - **Order Received**: Timestamp when order placed
        - **Acknowledged**: Timestamp when owner/manager acknowledged
        - **Waiter Assigned**: Timestamp and waiter name
        - **Preparing**: Timestamp when kitchen started preparation
        - **Ready**: Timestamp when food ready for service
        - **Served**: Timestamp when food delivered to customer
        - **Payment Collected**: Timestamp when payment completed
        - **Order Completed**: Final timestamp\n      - Each checkpoint shows:\n        - Status icon (checkmark for completed, clock for pending)
        - Status label\n        - Timestamp (date and time)
        - Duration between stages (e.g., 'Prepared in 15 mins')
      - Current stage highlighted with animated indicator
      - Completed stages in green with checkmarks
      - Pending stages in gray with clock icons
    - **Action Buttons** (context-based):
      - Update Status (dropdown to change order stage)
      - Reassign Waiter (if needed)
      - Contact Customer (open chat)\n      - Modify Order (if not yet preparing)
      - Cancel Order (with reason)
      - Mark Payment as Collected (for COC orders)
      - Print E-Bill (visible only when order status is 'Completed')
- View E-Bill (preview generated bill)
\n**Order Status Management**:
- **Status Update Workflow**:
  - Owner/Manager can manually update order status via dropdown
  - Status options based on current stage:
    - New Order → Acknowledge → Assign Waiter\n    - Acknowledged → Start Preparing\n    - Preparing → Mark as Ready
    - Ready → Mark as Served
    - Served → Collect Payment (for COC) or Auto-update (for online)
    - Payment Collected → Complete Order
  - Each status change automatically updates timeline with timestamp
  - **Real-time synchronization with customer app** - customer sees update instantly without refresh
  - **Real-time synchronization with waiter app** - waiter sees update instantly\n  - Notification sent to relevant parties on status change

**Payment Status Tracking**:
- **Payment Pending Orders**:
  - Dedicated section for orders with pending payments
  - Filter by payment method (COC, Card, Wallet, UPI, BNPL)\n  - Visual indicator for payment timeout (e.g., pending for >15 mins)
  - Quick action:'Collect Payment' button for COC orders
- **Payment Completed Orders**:
  - Automatic move to 'Completed Orders' section upon payment confirmation
  - Payment timestamp recorded in timeline
  - E-bill auto-generated and linked to order
- **Failed Payment Handling**:
  - Orders with failed online payments flagged with red badge
  - Alert notification to owner/manager
  - Customer contact details displayed for follow-up
  - Option to resend payment link or mark as COC

**E-Bill Management for Restaurant**:
- **E-Bill Generation**:
  - Automatic e-bill generation upon order completion
  - E-bill includes:
    - Restaurant details and logo
    - Order ID and timestamp
    - Table number\n    - Customer name
    - Itemized list with prices (including half/full plate selections)
    - Subtotal, taxes, discounts, total
    - Payment method and transaction ID
    - Payment timestamp
    - Thank you message
  - E-bill stored in system with order record
- **Print E-Bill Button**:
  - Visible only when order status is 'Completed'
  - Located in expanded order details view
  - Click to open print dialog with formatted e-bill
  - Options:\n    - Print directly to connected printer
    - Download as PDF
    - Email to customer
    - Share via messaging apps
  - Print preview shows professional bill layout
- **E-Bill Archive**:
  - All generated e-bills stored in 'E-Bills' section
  - Search by order ID, customer name, date range
  - Bulk download for accounting purposes
  - Export to accounting software (QuickBooks, Xero)\n\n**Order Filters and Search**:
- **Filter Options**:
  - By status (New, Acknowledged, Preparing, Ready, Served, Payment Pending, Completed)
  - By payment method (COC, Card, Wallet, UPI, BNPL)
  - By payment status (Pending, Completed, Failed)
  - By table number
  - By waiter assigned
  - By date range (today, yesterday, last 7 days, custom)\n- **Search Functionality**:
  - Search by order ID\n  - Search by customer name\n  - Search by item name
  - Real-time search results
\n**Order Analytics Dashboard**:
- Real-time counter showing:
  - Total active orders
  - Orders by status (count for each stage)
  - Pending payments (count and total amount)
  - Completed orders today
  - Average order preparation time
  - Average service time
- Visual charts:\n  - Order flow timeline (orders per hour)
  - Payment method distribution
  - Popular items today
\n#### 3.1.6 Enhanced Payment Management for Restaurant Owners

**COC (Cash on Counter) Payment Workflow**:
- **Order with COC Payment Method**:
  - When customer selects COC as payment method, order is marked with 'COC Payment' badge in orange color
  - Order card displays prominent'Payment Pending - COC' status
  - Owner/Manager dashboard shows dedicated 'Pending COC Payments' section
\n- **Bill Summary View for COC Orders**:
  - Click on COC order to view detailed bill summary:\n    - Itemized list with quantities, portion sizes (half/full), and prices
    - Subtotal, taxes, service charges breakdown
    - Discounts and promo codes applied
    - Total amount payable (highlighted in large, bold text)
    - Customer name and table number
    - Order timestamp
  - Prominent action button: 'Collect Payment from Customer'
\n- **Payment Collection Process**:\n  - Step1: Customer approaches counter for payment
  - Step 2: Staff opens order in dashboard and reviews bill summary
  - Step 3: Staff collects cash from customer
  - Step 4: Staff clicks 'Collect Payment from Customer' button
  - Step 5: Confirmation dialog appears: 'Have you received payment from [Customer Name] for Table [X]? Amount: [Total]'
  - Step 6: Staff confirms by clicking 'Yes, Payment Received'
  - Step 7: System updates order status to 'Payment Completed'
  - Step 8: **System automatically updates order timeline with'Payment Collected' timestamp**\n  - Step 9: **Customer app automatically receives real-time update** - timeline updates instantly without manual refresh
  - Step 10: System automatically generates and sends e-bill to customer via email/SMS
  - Step 11: Order moves to 'Completed Orders' section
  - Step 12: 'Print E-Bill' button becomes visible in order details

- **Payment Tracking Dashboard**:
  - Real-time counter showing:
    - Total pending COC payments (count and amount)
    - Total completed payments today
    - Payment method breakdown (COC vs Online)
  - Filter orders by payment status: Pending, Completed, Failed\n  - Search orders by customer name, table number, or order ID
  - Export payment reports for accounting

- **COC Payment Alerts**:
  - Visual notification badge on dashboard when COC payment is pending
  - Sound alert when customer marks dining as complete (indicating they may approach counter soon)
  - Auto-reminder if COC payment pending for more than 15 minutes after order served
\n**Online Payment Monitoring**:
- Real-time payment status updates for Card, Wallet, UPI, BNPL payments
- Automatic order completion upon successful online payment
- Automatic timeline update with'Payment Collected' timestamp
- **Customer app automatically receives real-time update** - timeline updates instantly\n- Failed payment alerts with customer contact for follow-up
- Payment reconciliation reports with transaction IDs

#### 3.1.7 Waiter/Agent Assignment System
- **Automatic Assignment Logic**:
  - Assign waiters based on table location (floor/section)\n  - Load balancing: distribute orders evenly among available waiters
  - Shift-based assignment: only assign to waiters currently on duty
  - Skill-based assignment: assign complex orders to experienced staff
- **Manual Assignment**:
  - Owner/Manager can manually assign or reassign waiters
  - View waiter workload (number of active tables)
  - Reassign tables when waiter goes on break\n- **Waiter Dashboard**:
  - View all assigned tables and orders
  - Real-time order status updates
  - Customer chat access for assigned tables
  - Table status indicators (occupied, ordering, eating, payment pending)
  - Shift schedule and break management
- **Performance Tracking**:
  - Average service time per waiter
  - Customer ratings for individual waiters
  - Orders served per shift
  - Tips received (if applicable)
\n#### 3.1.8 Real-Time Communication Hub
- **Customer Chat Interface** (Restaurant Side):
  - Unified inbox for all customer messages
  - Chat organized by table number
  - Assigned waiter receives direct messages from their tables
  - Owner/Manager can view all chats and intervene if needed
  - Quick reply templates for common queries
  - Image sharing support (customers can send food photos for issues)
  - Voice message support\n  - Chat history and search functionality
- **Internal Communication**:
  - Kitchen-to-waiter messaging for order updates
  - Manager-to-staff announcements
  - Emergency alerts (e.g., ingredient shortage)
- **Notification System**:
  - Push notifications for new orders\n  - SMS alerts for critical issues
  - Email summaries for daily operations
\n#### 3.1.9 Advanced Analytics & Reports
- **Sales Analytics**:
  - Real-time revenue dashboard
  - Daily/weekly/monthly/yearly sales trends
  - Peak hours and days analysis
  - Average order value and table turnover rate
  - Payment method breakdown\n- **Menu Performance**:
  - Best-selling items with revenue contribution
  - Slow-moving items analysis
  - Category-wise sales distribution
  - Profit margin per item (including half/full portion analysis)
  - Item rating trends over time
  - **Half vs Full Plate Performance**:
    - Sales volume comparison between half and full portions
    - Revenue contribution by portion size
    - Customer preference trends
- **Customer Insights**:
  - New vs. returning customer ratio
  - Customer lifetime value\n  - Average spending per customer
  - Popular dining times\n  - Customer feedback sentiment analysis
- **Staff Performance**:
  - Waiter efficiency metrics
  - Average service time per order
  - Customer ratings per staff member
  - Shift-wise productivity\n- **Export & Integration**:
  - Export reports in PDF, Excel, CSV formats
  - Integration with accounting software (QuickBooks, Xero)\n  - API access for custom reporting tools

### 3.2 Enhanced Customer Features

#### 3.2.1 Impressive Login UI & Profile Management
\n**Enhanced Login Interface Design**:
- **Visual Design**:
  - Full-screen gradient background with animated food imagery (subtle parallax effect)
  - Glassmorphism card design with frosted glass effect and soft shadows
  - Smooth micro-interactions and transitions (fade-in, slide-up animations)
  - Lottie animations for loading states and success confirmations
  - Dynamic color scheme that adapts to time of day (warm tones for evening, fresh tones for morning)
  - Floating food particles animation in background for visual appeal
\n- **Login Screen Layout**:
  - Centered login card with rounded corners (24px border radius)
  - DineQR logo with animated entrance (scale + fade effect)
  - Welcoming tagline: 'Your Culinary Journey Starts Here' with elegant typography
  - Input fields with floating labels and smooth focus animations
  - Password field with show/hide toggle icon
  - Biometric login button with fingerprint/face icon and pulse animation
  - Social login buttons with brand colors and hover effects:\n    - Google (white background, colorful logo)
    - Facebook (blue background, white logo)
    - Apple (black background, white logo)
  - 'Remember Me' checkbox with custom styling
  - 'Forgot Password?' link with subtle underline animation on hover
  - Primary'Login' button with gradient background and loading spinner
  - 'Don't have an account? Sign Up' link with smooth color transition

- **Registration Screen Enhancements**:
  - Multi-step registration with progress indicator (step 1/3,2/3, 3/3)
  - Step1: Basic Info (name, email, phone with country code selector)
  - Step 2: Password Setup (strength meter with color indicators, confirmation field)
  - Step 3: Preferences (dietary restrictions with icon selection, favorite cuisines with image cards)
  - Profile photo upload with drag-and-drop or camera capture
  - Real-time validation with inline error messages and success checkmarks
  - Smooth transitions between steps with slide animations
  - Skip option for optional steps with clear indication

- **Social Login Flow**:
  - One-tap social authentication with OAuth 2.0\n  - Automatic profile data import (name, email, profile photo)
  - Permission request screen with clear explanations
  - Seamless account linking for existing users
\n**Comprehensive Profile Management System**:
\n- **Profile Dashboard**:
  - Accessible via user avatar icon in top-right corner or bottom navigation
  - Clean, card-based layout with sections:\n    - Personal Information\n    - Dining Preferences
    - Payment Methods
    - Order History\n    - Saved Restaurants
    - Loyalty & Rewards
    - Settings & Privacy
\n- **Personal Information Section**:
  - **Profile Photo**:
    - Large circular avatar with edit icon overlay
    - Upload from gallery, take photo, or choose avatar
    - Crop and zoom functionality
    - Remove photo option\n  - **Basic Details** (editable):
    - Full Name (with character limit indicator)
    - Email Address (with verification status badge)
    - Phone Number (with country code, verification status)
    - Date of Birth (date picker with age calculation)
    - Gender (dropdown: Male, Female, Other, Prefer not to say)
  - **Contact Preferences**:
    - Preferred contact method (email, SMS, push notifications)
    - Language preference (multi-language support)
  - **Verification Status**:
    - Email verified badge (green checkmark)
    - Phone verified badge (green checkmark)
    - Re-send verification link/OTP option
\n- **Dining Preferences Section**:
  - **Dietary Restrictions** (multi-select with icons):
    - Vegetarian, Vegan, Non-Vegetarian\n    - Gluten-Free, Dairy-Free, Nut-Free
    - Halal, Kosher, Pescatarian
    - Custom restrictions (text input)\n  - **Allergies** (multi-select with warning icons):
    - Nuts, Dairy, Eggs, Soy, Shellfish, Wheat, Fish
    - Severity indicator (mild, moderate, severe)
    - Custom allergies (text input)
  - **Spice Preference**:
    - Slider: No Spice → Mild → Medium → Hot → Extra Hot
    - Visual indicator with chili pepper icons
  - **Favorite Cuisines** (multi-select with image cards):
    - Italian, Chinese, Indian, Mexican, Japanese, Thai, Mediterranean, etc.
    - Drag to reorder by preference
  - **Meal Preferences**:
    - Preferred meal times (breakfast, lunch, dinner, late-night)
    - Portion size preference (small, regular, large, half plate, full plate)
  - **Special Requests**:
    - Default special instructions (e.g., 'less oil', 'no MSG')
    - Saved for all future orders
\n- **Payment Methods Section**:\n  - **Saved Cards**:
    - Card list with masked numbers (•••• •••• •••• 1234)
    - Card brand logo (Visa, Mastercard, Amex)\n    - Expiry date display\n    - Set default card option
    - Edit or remove card with confirmation
  - **Digital Wallets**:
    - Linked wallets: Google Pay, Apple Pay, PayPal\n    - Add new wallet option
    - Default wallet selection
  - **Add New Payment Method**:
    - Secure card input form with validation
    - CVV field with security explanation
    - Billing address (optional)
    - Save for future use checkbox
  - **Payment Security**:
    - PCI-DSS compliance badge
    - Encryption information\n    - Transaction history link

- **Order History Section**:
  - **Order List**:
    - Chronological list with most recent first
    - Each order card shows:
      - Restaurant name and logo
      - Order date and time
      - Order items summary (first 2 items + 'X more')
      - Total amount
      - Order status badge
    - Tap to expand full order details
  - **Order Details View**:
    - Complete itemized list with quantities, portion sizes (half/full), and customizations
    - Subtotal, taxes, discounts, total breakdown
    - Payment method used
    - Digital receipt download button
    - Reorder button (one-tap reorder)
    - Rate & Review button (if not already reviewed)
  - **Filters & Search**:
    - Filter by restaurant\n    - Filter by date range (date picker)
    - Search by item name
    - Sort by: Recent, Oldest, Highest Amount\n\n- **Saved Restaurants Section**:
  - **Favorites List**:
    - Grid or list view toggle
    - Each restaurant card shows:
      - Restaurant banner image
      - Name, cuisine type, rating
      - Distance from current location
      - Last visited date
    - Remove from favorites option
    - Tap to view restaurant profile
  - **Collections** (optional):
    - Create custom collections (e.g., 'Date Night', 'Quick Lunch')
    - Add restaurants to collections
    - Share collections with friends
\n- **Loyalty & Rewards Section**:
  - **Points Balance**:
    - Large display of current points with animated counter
    - Points expiry date (if applicable)
    - Points history (earned and redeemed)
  - **Rewards Catalog**:
    - Available rewards with points required
    - Redeem button for eligible rewards
    - Locked rewards with progress indicator
  - **Membership Tier**:
    - Current tier badge (Bronze, Silver, Gold, Platinum)\n    - Progress bar to next tier
    - Tier benefits list
  - **Referral Program**:\n    - Unique referral code with copy button
    - Share referral link via social media or messaging
    - Referral rewards earned display

- **Settings & Privacy Section**:
  - **Account Settings**:
    - Change password (current password + new password + confirm)
    - Two-factor authentication toggle (enable/disable)
    - Biometric login toggle (fingerprint/face recognition)
    - Session management (view active devices, logout from all)
  - **Notification Preferences**:
    - Push notifications toggle (order updates, promotions, reminders)
    - Email notifications toggle (receipts, newsletters, offers)
    - SMS notifications toggle (OTP, order alerts)\n    - Notification sound and vibration settings
  - **Privacy Settings**:
    - Profile visibility (public, friends only, private)
    - Share dining activity toggle
    - Location services toggle
    - Data sharing preferences (analytics, personalization)
  - **App Preferences**:
    - Theme selection (light mode, dark mode, auto)\n    - Language selection (multi-language support)
    - Currency preference\n    - Default tip percentage
  - **Legal & Support**:
    - Terms of Service link
    - Privacy Policy link
    - Help & FAQ link
    - Contact Support button
    - App version display
  - **Account Management**:
    - Download my data (GDPR compliance)
    - Delete account (with confirmation and warning)
    - Logout button
\n- **Profile Edit Mode**:
  - Inline editing with save/cancel buttons
  - Real-time validation with error messages
  - Unsaved changes warning when navigating away
  - Success toast notification after saving
  - Undo option for recent changes

- **Profile Completion Indicator**:
  - Progress bar showing profile completion percentage
  - Suggestions to complete missing sections
  - Rewards for100% profile completion (bonus loyalty points)
\n#### 3.2.2 Enhanced QR Scanning & Restaurant Access with Comprehensive Restaurant Profile Display

**Smart QR Scanner**:
- **QR Scanning Process**:
  - In-app camera with auto-focus and QR detection
  - **Automatic restaurant ID capture** from QR code to link order to correct restaurant
  - Scan history with quick access to recently visited restaurants
  - Manual table number entry option if QR scan fails
  - Offline QR code caching for previously visited restaurants
  - **Error handling**: Display clear error message if restaurant ID is missing or invalid
  - **Automatic Restaurant Card Creation**: Upon successful QR scan, restaurant is automatically added to user's 'My Restaurants' dashboard as a restaurant card for quick future access

**Enhanced Restaurant Landing Experience**:
\n- **Hero Section with Image Gallery**:
  - **Full-screen image carousel** displaying restaurant images:\n    - Primary banner image (full-width, 16:9 aspect ratio)
    - Swipeable gallery with all uploaded restaurant images:\n      - Interior photos (dining area, ambiance shots)
      - Exterior photos (building facade, entrance)
      - Signature dish photos (high-quality food images)
      - Staff photos (optional, for personal touch)
    - Image counter indicator (e.g., '1/15') at bottom-right
    - Smooth swipe transitions with fade effect
    - Pinch-to-zoom functionality for detailed view
    - Image captions displayed at bottom (if provided by restaurant)
  - **Restaurant Logo Overlay**:
    - Circular logo positioned at top-left corner of hero image
    - White border with subtle shadow for visibility
    - Verified badge (green checkmark) if restaurant is verified
\n- **Restaurant Information Card** (Below Hero Section):
  - **Restaurant Name & Type**:
    - Restaurant name in large, bold typography (H1, Poppins Bold,32px)
    - Restaurant tagline/slogan below name (if provided, italic, 18px)
    - **Restaurant Type Indicator** (prominent display):
      - Large color-coded badge positioned next to restaurant name:\n        - **Pure Vegetarian**: Green badge with leaf icon and text'Pure Veg'
        - **Non-Vegetarian**: Red badge with chicken leg icon and text 'Non-Veg'
        - **Vegan**: Green badge with 'VG' icon and text 'Vegan'
        - **Mixed**: Orange badge with dual icon (leaf + chicken leg) and text 'Veg & Non-Veg'
      - Badge size: 120px x 40px with rounded corners (20px border radius)
      - Icon size: 24px, positioned left of text
      - Badge positioned prominently below restaurant name
  - **Rating & Reviews**:
    - Overall rating displayed with large star icons (5-star scale)
    - Average rating number (e.g., 4.5) in bold,24px\n    - Total review count in parentheses (e.g., '(1,234 reviews)')
    - Tap to view all reviews and ratings breakdown
  - **Cuisine & Category**:
    - Cuisine types displayed as chips/tags (e.g., 'Italian', 'Chinese', 'Indian')
    - Restaurant category (e.g., 'Fine Dining', 'Casual Dining') with icon
    - Price range indicator (e.g., '$$' or '$$$') with dollar sign icons
  - **Operating Hours**:
    - Current status badge: 'Open Now' (green) or 'Closed' (red)\n    - Today's operating hours (e.g., '11:00 AM - 10:00 PM')
    - Tap to view full week schedule
  - **Table Confirmation**:
    - Confirmed table number displayed prominently (e.g., 'Table 12')
    - Floor/section information (if applicable, e.g., 'Ground Floor, Section A')
\n- **Quick Action Buttons** (Sticky Bar Below Restaurant Info):
  - Horizontal scrollable button bar with icons and labels:\n    - **Menu** (fork & knife icon): Navigate to menu section
    - **Reviews** (star icon): View customer reviews and ratings
    - **Info** (info icon): View complete restaurant details
    - **Gallery** (image icon): View full restaurant image gallery
    - **Chat** (message icon): Open chat with restaurant staff
  - Buttons styled with rounded corners, icon + text layout
  - Active button highlighted with primary color (orange)
\n- **Restaurant Description Section**:
  - Expandable section with 'Read More' / 'Read Less' toggle
  - Restaurant description displayed with rich text formatting
  - Chef's story or restaurant history (if provided)
  - Special features or unique selling points highlighted
\n- **Amenities & Features Section**:
  - Grid layout displaying restaurant amenities with icons:\n    - Free WiFi, Parking, Wheelchair Accessible, Outdoor Seating, etc.
  - Each amenity shown as icon + label in compact card\n  - Color-coded icons (green for available, gray for not available)
\n- **Location & Contact Section**:
  - Embedded Google Maps with restaurant location pin
  - Complete address displayed below map
  - 'Get Directions' button to open in maps app
  - Contact phone number with'Call' button
  - Email address with 'Email' button\n  - Social media links (Facebook, Instagram, Twitter) with icons

- **Certifications & Awards Section** (if applicable):
  - Display food safety certifications with badge icons
  - Health department ratings\n  - Awards and recognitions with year\n  - Michelin stars or other ratings (if applicable)

- **Additional Information Section**:
  - Expandable accordion with details:
    - Dress code\n    - Reservation policy
    - Cancellation policy
    - Payment methods accepted (icons for cash, cards, wallets)
    - Languages spoken by staff
    - Special dietary accommodations
\n#### 3.2.3 My Restaurants Dashboard (NEW FEATURE)

**Overview**:
- Dedicated section in customer app/profile displaying all restaurants the user has visited by scanning QR codes or entering QR codes manually
- Provides quick access to favorite restaurants for easy reordering without rescanning QR codes
- Accessible from main navigation menu, home screen, or profile dashboard
\n**Restaurant Card Auto-Creation**:
- **Trigger**: Automatically created when user successfully scans QR code or manually enters valid QR code for the first time
- **Card Information Captured**:
  - Restaurant ID (unique identifier)
  - Restaurant name\n  - Restaurant logo
  - Restaurant banner image (primary image)
  - Restaurant type (Vegetarian/Non-Vegetarian/Vegan/Mixed)
  - Cuisine types\n  - Average rating
  - Address and location
  - Last visited date (timestamp of first scan)
  - Total visits count (increments with each scan)
  - Last order details (order ID, date, total amount)
- **Duplicate Prevention**: System checks if restaurant already exists in user's dashboard before creating new card
- **Update Logic**: If restaurant already exists, system updates 'Last Visited' date and increments 'Total Visits' count

**My Restaurants Dashboard Layout**:
\n- **Dashboard Header**:
  - Title: 'My Restaurants' (large, bold, Poppins SemiBold, 28px)
  - Subtitle: 'Your dining history and favorites' (regular, Inter, 16px, gray)
  - Total restaurant count badge (e.g., '12Restaurants')
\n- **View Options**:
  - Toggle between Grid View and List View
  - Grid View: 2 columns on mobile, 3 columns on tablet, 4 columns on desktop
  - List View: Single column with larger cards
\n- **Restaurant Card Design** (Grid View):
  - **Card Layout**:
    - Vertical card with rounded corners (12px border radius)
    - Shadow: 0 2px 8px rgba(0,0,0,0.1)\n    - Hover effect: scale(1.03) with 300ms transition
  - **Card Content**:
    - **Banner Image**: Top section,16:9 aspect ratio, restaurant banner or primary image
    - **Restaurant Logo Overlay**: Circular logo (64px diameter) positioned bottom-left of banner, overlapping banner and content section
    - **Restaurant Type Badge**: Positioned top-right on banner image
      - Color-coded badge (Veg/Non-Veg/Vegan/Mixed)
      - Badge size: 80px x 30px with rounded corners\n    - **Content Section** (below banner):
      - **Restaurant Name**: Bold, 18px, Poppins SemiBold, truncated to 2 lines
      - **Cuisine Types**: Small chips/tags below name (e.g., 'Italian, Chinese')
      - **Rating Display**: Star icon with average rating (e.g., '4.5 ★')
      - **Last Visited**: Small text with date (e.g., 'Last visited: Nov 28, 2025')
      - **Total Visits Badge**: Small badge showing visit count (e.g., '5 visits')
    - **Action Buttons** (bottom of card):
      - **'View Menu' Button**: Primary button, orange background, white text
      - **'Reorder' Button**: Secondary button, white background, orange border and text
      - **Heart Icon**: Favorite toggle (filled if favorited, outlined if not)
  - **Card Tap Action**: Tap anywhere on card (except action buttons) to open restaurant profile with menu\n
- **Restaurant Card Design** (List View):
  - **Card Layout**:
    - Horizontal card with rounded corners (12px border radius)
    - Shadow: 0 2px 8px rgba(0,0,0,0.1)
    - Hover effect: scale(1.02) with 300ms transition
  - **Card Content**:
    - **Left Section**: Restaurant banner image (square, 120px x 120px)
    - **Restaurant Logo Overlay**: Circular logo (48px diameter) positioned bottom-right of image
    - **Restaurant Type Badge**: Positioned top-right on image
    - **Middle Section** (main content):
      - **Restaurant Name**: Bold, 20px, Poppins SemiBold\n      - **Cuisine Types**: Chips/tags below name\n      - **Rating & Reviews**: Star icon with rating and review count
      - **Address**: Truncated address with location icon
      - **Last Visited & Total Visits**: Small text below address
    - **Right Section** (action buttons):
      - **'View Menu' Button**: Primary button\n      - **'Reorder' Button**: Secondary button
      - **Heart Icon**: Favorite toggle
\n**Sorting & Filtering Options**:
\n- **Sort By** (Dropdown in header):
  - Recent (last visited first) - Default
  - Most Visited (highest visit count first)
  - Alphabetical (A-Z)
  - Highest Rated (highest rating first)
  - Nearest (closest to current location)

- **Filter Options** (Filter button opens slide-out panel):
  - **Restaurant Type** (multi-select):
    - Pure Vegetarian
    - Non-Vegetarian
    - Vegan
    - Mixed
  - **Cuisine Type** (multi-select):
    - Italian, Chinese, Indian, Mexican, Japanese, Thai, etc.
  - **Rating** (slider):
    - Minimum rating filter (e.g., 4+ stars)
  - **Distance** (slider):
    - Maximum distance from current location (e.g., within 5 km)
  - **Favorites Only** (toggle):
    - Show only favorited restaurants
  - 'Apply Filters' button at bottom
  - 'Clear All' button to reset filters
\n**Search Functionality**:
- **Search Bar** at top of dashboard
- Placeholder: 'Search restaurants by name, cuisine, or location...'
- Real-time search results as user types
- Search by:\n  - Restaurant name
  - Cuisine type
  - Location/address
- Highlight matching keywords in results
\n**Quick Reorder Feature**:
\n- **'Reorder' Button on Restaurant Card**:
  - Tap to open reorder options
  - **Reorder Options Modal**:
    - **Option 1: Reorder Last Order**
      - Display last order details (items, quantities, portion sizes, total amount)
      - 'Reorder This' button adds all items to cart with saved customizations (including half/full selections)
      - Confirmation toast: 'Items added to cart'\n    - **Option 2: View Menu & Order**
      - Opens restaurant menu for browsing and ordering
    - **Option 3: View Order History**
      - Opens list of all past orders from this restaurant
      - Each order card shows order date, items, total amount\n      - Tap on any order to reorder that specific order
\n- **Reorder Workflow**:
  - Step 1: User taps 'Reorder' button on restaurant card
  - Step 2: System retrieves last order details
  - Step 3: Modal displays last order with itemized list
  - Step 4: User confirms reorder
  - Step 5: All items added to cart with saved customizations
  - Step 6: Cart opens automatically for review
  - Step 7: User can modify items, quantities, or customizations (including changing half/full selections)
  - Step 8: User proceeds to checkout

**Restaurant Card Management**:
\n- **Remove Restaurant**:
  - Swipe left on restaurant card (mobile) or hover menu (desktop)
  - 'Remove' option appears\n  - Confirmation dialog: 'Remove [Restaurant Name] from your list?'
  - Options: 'Remove' or 'Cancel'
  - Removed restaurant no longer appears in dashboard
  - Can be re-added by scanning QR code again

- **Favorite Toggle**:
  - Heart icon on each restaurant card
  - Tap to add/remove from favorites
  - Favorited restaurants highlighted with filled heart icon
  - Filter option to show only favorites

- **Share Restaurant**:
  - Share icon on restaurant card
  - Tap to open share sheet
  - Share restaurant profile link via:\n    - Social media (Facebook, Instagram, Twitter)\n    - Messaging apps (WhatsApp, Telegram, SMS)
    - Email
- Copy link to clipboard
\n**Empty State**:
- **When No Restaurants Saved**:
  - Illustration: Empty plate or QR code scanner icon
  - Heading: 'No Restaurants Yet'
  - Subtext: 'Scan a QR code at any restaurant to get started'
  - 'Scan QR Code' button (opens QR scanner)
\n**Integration with Other Features**:

- **Home Screen Widget** (optional):
  - Display3-4 most recently visited restaurants
  - Quick access to 'View All' button linking to full dashboard
\n- **Order History Integration**:
  - Each order in Order History links to corresponding restaurant card
  - Tap restaurant name in order details to view restaurant profile
\n- **Notifications**:
  - Push notification when user is near a saved restaurant (geofencing)
  - Notification: 'You're near [Restaurant Name]! Tap to view menu.'
  - Promotional notifications from saved restaurants (if user opted in)

**Analytics for User**:
- **Dining Insights** (optional section in dashboard):
  - Total restaurants visited
  - Total orders placed
  - Favorite cuisine type (based on order frequency)
  - Most visited restaurant
  - Total amount spent across all restaurants
  - Displayed as visual cards with icons and numbers

#### 3.2.4 Advanced Menu Browsing with Restaurant Type Filtering (Zomato-Inspired UI)

**Enhanced Category Navigation**:
- **Sticky Header with Restaurant Type Filter**:
  - **Restaurant Type Toggle** (if restaurant type is 'Mixed'):
    - Positioned at top of menu section, above category tabs
    - Horizontal segmented control with two options:
      - **Vegetarian** (left segment): Green background with leaf icon
      - **Non-Vegetarian** (right segment): Red background with chicken leg icon\n    - Smooth slide animation when switching between segments
    - Selected segment highlighted with solid color, unselected with outline
    - **Filter Logic**:
      - When 'Vegetarian' selected: Show only vegetarian and vegan items/categories
      - When 'Non-Vegetarian' selected: Show only non-vegetarian items/categories
      - Categories with no items matching filter are hidden
    - Toggle persists during browsing session
  - **Note**: If restaurant type is 'Pure Vegetarian', 'Non-Vegetarian', or 'Vegan', no toggle is shown (all items match restaurant type)

- **Category Tabs** (Below Restaurant Type Toggle):
  - Sticky horizontal scrollable category tabs
  - Each category tab displays:
    - Category icon (if provided)
    - Category name
    - **Category type indicator** (small badge):
      - Green dot for Vegetarian categories
      - Red dot for Non-Vegetarian categories
      - Green'VG' for Vegan categories
      - Orange dual-color dot for Mixed categories
  - Active category highlighted with orange underline animation
  - 'All Items' option to view complete menu (respects restaurant type filter)
  - Smooth scroll to category section when tab tapped

- **Search Bar**:
  - Positioned below category tabs or in header
  - Search icon with placeholder text: 'Search menu items...'
  - Auto-suggestions dropdown as user types
  - Search results respect restaurant type filter (if active)
  - Voice search icon for voice input

**Enhanced Menu Display**:
\n- **Food Item Cards** (Vertical Scroll with Category Sections):
  - **Card Layout**:
    - Large high-quality food image (16:9 aspect ratio, rounded top corners)
    - **Item type indicator** positioned top-left on image:\n      - Circular badge (32px diameter) with colored background:\n        - **Vegetarian**: Green circle with white leaf or'V' symbol
        - **Non-Vegetarian**: Red circle with white chicken leg or 'N' symbol\n        - **Vegan**: Green circle with white 'VG' symbol
        - **Eggetarian**: Yellow circle with white egg symbol
      - Badge has subtle shadow for visibility on light images
    - **Badges** positioned top-right on image:
      - 'Popular', 'Chef's Special', 'New', 'Best Seller', 'Customer Favorite' badges
      - Badges styled with colored background and white text
      - Multiple badges stacked vertically if applicable
    - **Out of Stock Overlay**:
      - Semi-transparent gray overlay on image if item unavailable
      - 'Out of Stock' text in bold, centered on image
  - **Card Content** (Below Image):
    - **Item Name**: Bold, 18px, Poppins SemiBold, truncated to 2 lines\n    - **Item Description**: Regular, 14px, Inter, light gray color, truncated to 2 lines with'Read More' link
    - **Customer Rating**:
      - Star icon (yellow) with average rating number (e.g., '4.5')
      - Total rating count in parentheses (e.g., '(234)')
      - Positioned below item name, left-aligned
    - **Dietary Indicators**:
      - Small icon badges for dietary attributes (Gluten-Free, Dairy-Free, Halal, etc.)
      - Displayed as horizontal row of icons below description
    - **Spice Level Indicator**:
      - Chili pepper icons (1-4chilies) for spice level
      - Positioned next to dietary indicators
    - **Preparation Time Badge**:
      - Clock icon with time (e.g., '15-20 mins')
      - Small badge, positioned below dietary indicators
  - **Pricing & Add Button** (Bottom of Card):
    - **Price Display**:
      - **Single Price**: Bold, 20px, Poppins SemiBold, primary color (orange)
      - **Quantity-Based Pricing**: Price range displayed (e.g., '$8- $16')
      - **Half/Full Plate Pricing**: Price range displayed (e.g., 'Half $10| Full $18')
      - **Discounted Price**: Original price struck through, discounted price in bold with savings percentage (e.g., 'Save 20%')
      - Positioned bottom-left of card
    - **Add Button**:
      - Floating button positioned bottom-right of card
      - Circular button (48px diameter) with '+' icon
      - Orange background with white icon
      - Tap to open item detail view or quick-add to cart
      - If item already in cart, button shows quantity with '+' and '-' controls
\n**Advanced Filtering & Sorting**:

- **Filter Panel** (Accessible via 'Filter' button in header):
  - Slide-out panel or modal with filter options:\n    - **Item Type** (multi-select with checkboxes):
      - Vegetarian, Non-Vegetarian, Vegan, Eggetarian
      - Checkboxes with color-coded icons
    - **Price Range** (slider):
      - Min and max price sliders
      - Current range displayed above slider
    - **Preparation Time** (slider):
      - Filter by max preparation time (e.g., 'Under 20 mins')
    - **Spice Level** (multi-select):
      - None, Mild, Medium, Hot, Extra Hot
    - **Dietary Attributes** (multi-select):
      - Gluten-Free, Dairy-Free, Nut-Free, Halal, Kosher, etc.
    - **Allergen Exclusion** (multi-select):
      - Exclude items containing specific allergens (Nuts, Dairy, Eggs, etc.)
    - **Rating** (single select):
      - 4+ stars, 3+ stars, 2+ stars, All ratings
    - **Availability** (toggle):
      - Show only available items (hide out of stock)
  - 'Apply Filters' button at bottom of panel
  - 'Clear All' button to reset filters
- Active filter count badge displayed on'Filter' button in header

- **Sort Options** (Dropdown in header):
  - Sort by:
    - Popularity (most ordered items first)
    - Price: Low to High
    - Price: High to Low
    - Rating: High to Low
    - Preparation Time: Shortest First
    - Newest Items First
  - Selected sort option displayed in header
\n**Search Functionality**:
- **Real-Time Search**:
  - Instant results as user types
  - Search by item name, ingredients, tags, or description
  - Search results displayed in same card layout\n  - Highlight matching keywords in results\n- **Search History**:
  - Recent searches displayed below search bar
  - Tap to re-search\n  - Clear history option\n- **Voice Search**:
  - Tap microphone icon to activate voice input
  - Speech-to-text conversion
  - Display recognized text in search bar
\n**Category Sections**:
- **Section Headers**:
  - Category name in bold,24px, Poppins SemiBold
  - **Category type indicator** (badge) next to name:\n    - Green badge for Vegetarian categories
    - Red badge for Non-Vegetarian categories
    - Green 'VG' badge for Vegan categories
    - Orange badge for Mixed categories
  - Category description (if provided) below name
  - Item count in category (e.g., '12 items')
- **Infinite Scroll**:
  - Load more items as user scrolls down\n  - Smooth loading animation with skeleton screens
  - 'Back to Top' floating button appears after scrolling

#### 3.2.5 Enhanced Item Detail View with Complete Information Display

**Full-Screen Item Detail Experience**:

- **Image Gallery Section**:
  - **Full-width image carousel** at top:\n    - Swipeable gallery with all item images (up to 5 images)
    - Image counter indicator (e.g., '1/5') at bottom-right
    - Pinch-to-zoom functionality for detailed view
    - Smooth swipe transitions with fade effect
  - **Item Type Indicator Overlay**:
    - Large circular badge (48px diameter) positioned top-left on image:\n      - **Vegetarian**: Green circle with white leaf or 'V' symbol
      - **Non-Vegetarian**: Red circle with white chicken leg or 'N' symbol
      - **Vegan**: Green circle with white 'VG' symbol
      - **Eggetarian**: Yellow circle with white egg symbol
    - Badge has prominent shadow for visibility\n  - **Badges Overlay**:
    - 'Popular', 'Chef's Special', 'New', 'Best Seller', 'Customer Favorite' badges
    - Positioned top-right on image
    - Stacked vertically if multiple badges
\n- **Item Information Section** (Below Image Gallery):
  - **Item Name & Rating**:
    - Item name in large, bold typography (H2, Poppins SemiBold, 28px)
    - **Customer Rating** displayed prominently:\n      - Large star icons (5-star scale,32px size)
      - Average rating number (e.g., '4.5') in bold,28px, next to stars
      - Total rating count below (e.g., '(1,234 ratings)')
      - Tap to scroll to reviews section
  - **Item Description**:
    - Detailed description with rich text formatting
    - Full description displayed (no truncation)
    - Paragraph spacing for readability
\n- **Pricing Section**:
  - **Price Display** (prominent, large text):
    - **Single Price**:
      - Base price in bold, 32px, Poppins SemiBold, primary color (orange)
    - **Quantity-Based Pricing**:
      - Pricing table displayed as cards:\n        - Each size option (Small, Regular, Large) as separate card
        - Card shows: Size name, quantity/weight, price\n        - Example:\n          - **Small** (250g) - $8
          - **Regular** (400g) - $12 (marked as 'Default')
          - **Large** (600g) - $16\n        - Cards styled with border, rounded corners\n        - Selected size highlighted with orange border
        - Tap to select size
    - **Half/Full Plate Pricing** (for applicable items):
      - Pricing table displayed as two prominent cards:
        - **Half Plate Card**:
          - Label: 'Half Plate'
          - Portion description (e.g., 'Perfect for one person')
          - Price in bold (e.g., '$10')
          - Card styled with border, rounded corners
        - **Full Plate Card**:\n          - Label: 'Full Plate'
          - Portion description (e.g., 'Ideal for sharing or hearty appetite')
          - Price in bold (e.g., '$18')
          - Card styled with border, rounded corners
      - Selected option highlighted with orange border and checkmark icon
      - Tap to select Half or Full\n      - Default selection based on restaurant settings
    - **Discounted Price**:
      - Original price struck through in gray
      - Discounted price in bold, large text, primary color\n      - Savings percentage badge (e.g., 'Save 20%') in green
      - Discount validity period displayed (e.g., 'Valid until Dec 31')
  - **Combo Pricing** (if applicable):\n    - Combo meal details displayed in expandable card:\n      - Combo name and description
      - Bundled items list with images
      - Combo price with savings amount
      - 'Add Combo' button\n\n- **Preparation Time**:
  - Clock icon with estimated time (e.g., '15-20 mins')
  - Displayed as badge below pricing
\n- **Dietary Indicators & Allergen Information**:
  - **Dietary Attributes**:
    - Horizontal row of icon badges:\n      - Vegetarian, Vegan, Gluten-Free, Dairy-Free, Halal, Kosher, etc.\n    - Each badge with icon and label
    - Color-coded for quick recognition
  - **Spice Level**:
    - Chili pepper icons (1-4 chilies) with label (e.g., 'Medium Spice')
    - Visual indicator with color gradient (green to red)
  - **Allergen Warnings**:
    - Prominent warning section with red border if allergens present
    - List of allergens with warning icons:\n      - Nuts, Dairy, Eggs, Soy, Shellfish, Wheat, etc.
    - Severity indicator (mild, moderate, severe) with color coding
    - Bold text: 'Contains: Nuts, Dairy' for severe allergens

- **Ingredients List**:
  - Expandable section with 'View Ingredients' button
  - Complete list of ingredients displayed as bullet points or comma-separated
  - Allergens highlighted in bold or colored text
\n- **Nutritional Information**:
  - Expandable section with 'View Nutrition Facts' button
  - Table layout displaying:
    - Calories (kcal)
    - Protein, Carbohydrates, Fat (grams)
    - Saturated Fat, Trans Fat, Fiber, Sugar (grams)
    - Sodium, Cholesterol (mg)
    - Vitamins and minerals (if provided)
  - Styled as nutrition label format

- **Customer Reviews & Ratings Section**:
  - **Rating Breakdown**:
    - Horizontal bar chart showing distribution:\n      - 5-star: X% (with bar)\n      - 4-star: Y% (with bar)
      - 3-star: Z% (with bar)
      - 2-star: A% (with bar)
      - 1-star: B% (with bar)
    - Bars color-coded (green for high ratings, red for low)\n  - **Recent Reviews**:
    - List of recent reviews (last 5-10 reviews)\n    - Each review card displays:
      - Customer name and profile photo
      - Star rating (1-5 stars)\n      - Review date (e.g., '2 days ago')
      - Review text (full or truncated with'Read More')
      - Review photos uploaded by customer (if any)
      - Helpful/Not Helpful voting buttons with count
      - Restaurant owner response (if provided)
    - 'View All Reviews' button to see complete review list
  - **Filter & Sort Reviews**:
    - Filter by rating (5-star, 4-star, etc.)
    - Sort by: Most Recent, Highest Rating, Lowest Rating, Most Helpful
\n- **Pairing Suggestions**:
  - Section titled 'Pairs Well With' or 'Recommended Combos'
  - Horizontal scrollable list of suggested items:\n    - Drinks, sides, desserts\n    - Each suggestion shown as small card with image, name, price
    - Tap to view item details or add to cart
\n- **Frequently Ordered With**:
  - Section titled 'Customers Also Ordered'\n  - Horizontal scrollable list of items frequently ordered together
  - Same card layout as pairing suggestions

**Customization Panel** (Sticky Bottom Section):
\n- **Quantity/Portion Size Selection**:
  - **If Quantity-Based Pricing**:
    - Radio buttons or segmented control for size options:\n      - Small, Regular, Large (or custom names)
    - Selected size highlighted\n    - Price updates dynamically based on selection
  - **If Half/Full Plate Option Available**:
    - **Prominent segmented control or radio buttons**:
      - **Half Plate** (left option): Label with price (e.g., 'Half Plate - $10')
      - **Full Plate** (right option): Label with price (e.g., 'Full Plate - $18')
    - Selected option highlighted with orange background and white text
    - Unselected option with white background and orange border
    - Smooth transition animation when switching between options
    - Price updates dynamically based on selection
- Default selection based on restaurant settings or customer preference
  - **If Single Price**:
    - Quantity selector with '+' and '-' buttons
    - Current quantity displayed in center\n\n- **Spice Level Adjustment**:
  - Slider or segmented control:\n    - No Spice, Mild, Medium, Hot, Extra Hot
  - Visual indicator with chili pepper icons
  - Price adjustment displayed if applicable (e.g., '+$1for Extra Hot')

- **Add-ons Selection**:
  - Expandable section with 'Add Extras' button
  - Checklist of add-ons with individual prices:\n    - Extra cheese (+$2), Extra sauce (+$1), Extra toppings (+$3)
    - Side items (fries, salad, bread)\n    - Beverages (soft drinks, juices)
    - Desserts\n  - Each add-on with checkbox and price
  - Selected add-ons highlighted\n  - Total add-on cost displayed

- **Removal Options**:
  - Expandable section with 'Customize' button
  - Checklist of ingredients to remove:\n    - No onions, No garlic, No cilantro, No mayo, etc.
  - Each option with checkbox\n  - No additional charge for removals
\n- **Cooking Preferences** (if applicable):
  - Dropdown or radio buttons:\n    - For meats: Rare, Medium Rare, Medium, Medium Well, Well Done
    - For fried items: Crispy, Soft, Extra crispy
  - Selected preference highlighted
\n- **Special Instructions**:
  - Text box for custom requests
  - Placeholder text: 'Any special requests? (e.g., less oil, extra spicy)'
  - Character limit indicator (e.g., '0/200')

- **Total Price Display**:
  - Large, bold text showing total price including customizations
  - Breakdown: Base price (Half/Full) + Add-ons + Adjustments = Total
  - Updates dynamically as customizations change

- **Add to Cart Button**:
  - Large, prominent button at bottom\n  - Orange background with white text
  - Text: 'Add to Cart - $XX.XX'
  - Tap to add item to cart with all customizations (including half/full selection)
  - Loading animation on tap
  - Success feedback (checkmark animation or toast notification)

**Social Proof Section**:
- **Customer Photos**:
  - Grid of photos uploaded by customers
  - Tap to view full-size image
  - 'View All Photos' button if more than 6 photos
- **Order Statistics**:
  - Badge showing 'X people ordered this today'
  - Badge showing 'Ordered Y times this week'
  - Positioned near reviews section

**Back Button & Share Button**:
- **Back Button**:
  - Positioned top-left corner (floating over image)
  - Circular button with back arrow icon
  - White background with shadow
- **Share Button**:
  - Positioned top-right corner (floating over image)
  - Circular button with share icon
  - Tap to open share sheet (share item via social media, messaging, etc.)

#### 3.2.6 Advanced Cart & Checkout\n
**Smart Cart**:
- **Floating Cart Button**:
  - Positioned bottom-right corner (fixed)\n  - Circular button with cart icon
  - Item count badge (red circle with number)
  - Pulsing animation when items added
  - Tap to open cart view
- **Cart View** (Bottom Sheet or Full Screen):
  - **Cart Header**:
    - Title: 'Your Cart'
    - Restaurant name and logo
    - Table number confirmation
  - **Itemized List**:
    - Each item card displays:
      - Item image thumbnail
      - Item name
      - **Item type indicator** (Veg/Non-Veg icon)
      - **Portion size selected** (Half Plate or Full Plate, if applicable)
      - Customizations summary (spice level, add-ons, removals)
      - Special instructions (if provided)
      - Quantity selector with '+' and '-' buttons
      - Individual item price
      - Subtotal per item (quantity × price)
    - Swipe left to remove item (with confirmation)
    - Tap item to edit customizations (including changing half/full selection)
  - **Pricing Breakdown**:
    - Subtotal (sum of all items)
    - Taxes (itemized: GST, service charge, etc.)
    - Discounts (promo codes, loyalty points)
    - Delivery fee (if applicable)\n    - Total amount (large, bold text)
  - **Estimated Preparation Time**:
    - Total estimated time for entire order
    - Clock icon with time (e.g., '30-40 mins')
  - **Restaurant ID Validation**:
    - System validates restaurant ID before proceeding
    - Error message if mismatch detected

**Promo Codes & Discounts**:
- **Apply Promo Code**:
  - Text input field with 'Apply' button
  - Placeholder: 'Enter promo code'
  - Validation on apply\n  - Success message with discount amount
  - Error message if invalid code
- **Available Offers**:
  - Expandable section showing available offers
  - Each offer card displays:
    - Offer title and description
    - Discount amount or percentage
    - Validity period\n    - 'Apply' button\n  - Auto-apply best offer option
- **Loyalty Points Redemption**:
  - Display available loyalty points
  - Slider or input to select points to redeem
  - Conversion rate displayed (e.g., '100 points = $1')
  - 'Redeem' button\n\n**Special Instructions**:
- **Order-Level Instructions**:
  - Text box for overall order notes
  - Placeholder: 'Any special instructions for your order?'
  - Character limit indicator\n- **Quick Options**:
  - Pre-defined buttons for common requests:\n    - 'Less Oil', 'Extra Spicy', 'No MSG', 'Mild Salt', etc.
  - Tap to add to instructions
\n**Order Confirmation**:
- **Review Order Summary**:
  - Complete itemized list with all details (including half/full selections)
  - Pricing breakdown
  - Special instructions summary
- **Confirm Details**:
  - Restaurant name and logo
  - Table number
  - Estimated total time
- **Place Order Button**:
  - Large, prominent button at bottom
  - Orange background with white text
  - Text: 'Place Order - $XX.XX'
  - Loading animation on tap
  - Success feedback (checkmark animation)\n  - Redirect to order tracking screen

#### 3.2.7 Real-Time Order Tracking with Complete Timeline and Automatic Real-Time Updates (ENHANCED)

**Order Status Screen with Automatic Updates (NO MANUAL REFRESH REQUIRED)**:
\n- **Persistent WebSocket Connection**:
  - Customer app establishes persistent WebSocket connection upon order placement
  - Connection remains active throughout order lifecycle
  - Automatic reconnection with exponential backoff if connection drops
  - Connection status indicator in order tracking screen (green dot: connected, yellow: reconnecting, red: disconnected)

- **Visual Progress Tracker**:
  - **Horizontal Timeline** (Mobile):
    - Stages displayed left to right:
      - Order Placed → Acknowledged → Preparing → Ready → Served → Payment Collected → Completed
    - Current stage highlighted with animated pulsing dot
    - Completed stages in green with checkmarks
    - Pending stages in gray with clock icons
    - Connecting line between stages (solid for completed, dashed for pending)
  - **Vertical Timeline** (Tablet/Desktop):
    - Stages displayed top to bottom\n    - Same visual indicators as horizontal\n  - **Estimated Time**:
    - Estimated time for each stage displayed below stage label
    - Countdown timer for current stage
\n**Detailed Order Timeline with Real-Time Auto-Updates**:

- **Expandable Timeline Section**:
  - Tap'View Timeline' to expand full details
  - Each checkpoint displays:
    - **Order Received**:\n      - Icon: Receipt icon (orange)
      - Label: 'Order Placed'
      - Timestamp: Date and time (e.g., 'Nov 30, 2025, 7:30 PM')
      - Description: 'Your order has been received by the restaurant'
    - **Acknowledged**:
      - Icon: Checkmark icon (blue)
      - Label: 'Order Acknowledged'
      - Timestamp: Date and time\n      - Description: 'Restaurant has confirmed your order'
    - **Waiter Assigned**:
      - Icon: Person icon (blue)
      - Label: 'Waiter Assigned'
      - Timestamp: Date and time\n      - Description: 'Your waiter is [Waiter Name]'
      - Waiter photo displayed (circular,48px)
    - **Preparing**:
      - Icon: Chef hat icon (yellow)
      - Label: 'Preparing in Kitchen'
      - Timestamp: Date and time
      - Description: 'Your food is being prepared'
      - Duration: 'Preparation time: X minutes' (countdown or elapsed time)
      - Progress bar showing preparation progress (if available)
    - **Ready**:\n      - Icon: Bell icon (green)
      - Label: 'Food Ready'
      - Timestamp: Date and time
      - Description: 'Your order is ready to be served'
    - **Served**:
      - Icon: Plate icon (green)
      - Label: 'Food Served'
      - Timestamp: Date and time
      - Description: 'Enjoy your meal!'
    - **Payment Collected**:
      - Icon: Payment icon (teal, card/cash based on method)
      - Label: 'Payment Completed'
      - Timestamp: Date and time
      - Description: 'Payment received successfully'
      - Payment method displayed (COC, Card, Wallet, UPI,BNPL)\n    - **Order Completed**:
      - Icon: Star icon (gray)
      - Label: 'Order Completed'
      - Timestamp: Final completion time
      - Description: 'Thank you for dining with us!'
  - **Duration Between Stages**:
    - Calculated and displayed (e.g., 'Prepared in 15 mins', 'Served in 3 mins')
    - Color-coded: Green for fast, yellow for average, red for slow
  - **Total Order Duration**:
    - Displayed at bottom (e.g., 'Total time: 45 minutes')
    - Comparison with estimated time (e.g., 'Faster than expected by 5 mins')

**Order Details Display**:
\n- **Order Information Card**:
  - **Order Header**:
    - Order ID (large, bold at top)
    - Restaurant name and logo
    - Table number\n    - Order date and time
    - Current order status badge (color-coded)
    - Assigned waiter name and photo
  - **Itemized Order List**:
    - Each item shows:
      - Item name and thumbnail image
      - **Item type indicator** (Veg/Non-Veg icon)
      - Quantity and **portion size** (Half Plate or Full Plate, if applicable)
      - Customizations (spice level, add-ons, removals)
      - Special instructions per item
      - Individual item price
    - Order-level special instructions highlighted in separate card
  - **Pricing Breakdown**:\n    - Subtotal\n    - Taxes (itemized)\n    - Discounts and promo codes applied
    - Tip amount (if applicable)
    - Total amount (large, bold)
  - **Payment Information**:
    - Payment method selected (with icon)
    - Payment status (Pending/Completed/Failed)
    - Transaction ID (for online payments)
    - Payment timestamp (when completed)
\n**Real-Time Automatic Updates (NO MANUAL REFRESH REQUIRED)**:

- **WebSocket Connection for Live Updates**:
  - Persistent WebSocket connection between customer app and server
  - Connection remains active throughout order lifecycle
  - Server pushes real-time updates to customer app whenever restaurant updates order status
  - **No manual refresh or page reload required**

- **Automatic Timeline Refresh Mechanism**:
  - **Server-Side Event Broadcasting**:
    - When restaurant owner/manager updates order status in dashboard (e.g., changes status from 'Acknowledged' to 'Preparing'), server immediately broadcasts update event to customer app
    - Event payload includes:
      - Order ID\n      - New status\n      - Timestamp of status change
      - Updated timeline data (all checkpoints with timestamps)
      - Duration between stages
  - **Client-Side Real-Time Rendering**:
    - Customer app listens for incoming WebSocket events
    - Upon receiving status update event:\n      - **Timeline automatically updates** without user interaction
      - New checkpoint appears with timestamp and status icon
      - Progress tracker advances to new stage with smooth animation
      - Completed stages update with green checkmarks
      - Current stage indicator moves to new position with pulsing animation
      - Duration labels update between stages (e.g., 'Prepared in 15 mins')
- Total order duration recalculates and displays
    - **Visual Feedback for Updates**:
      - Subtle animation when timeline updates (e.g., new checkpoint slides in from right with fade-in effect)
      - Brief highlight or glow effect on newly updated checkpoint (2-second duration)
      - Sound notification (optional, user-configurable) for major status changes
      - Haptic feedback (vibration) on mobile devices for status updates

- **Push Notifications for Status Changes**:
  - In addition to real-time timeline updates, push notifications sent for each status change
  - Notification content: Status update with timestamp (e.g., 'Your order is now being prepared!')
  - Tap notification to open order tracking screen with updated timeline
  - Notification badge on app icon updates with order status
\n- **In-App Toast Notifications**:
  - Toast message slides down from top when status changes
  - Message content: Brief status update (e.g., 'Order Ready for Service')
  - Auto-dismiss after 3 seconds\n  - Tap to view full order details

- **Live Status Updates Without Page Refresh**:
  - Order status updates seamlessly without requiring page refresh or pull-to-refresh
  - Timeline, progress tracker, and order details all update in real-time
  - Animated transitions between stages for smooth user experience
  - No loading spinners or delays - updates appear instantly

- **Estimated Time Updates**:
  - Dynamic updates based on kitchen progress\n  - If estimated time changes significantly (e.g., delay in preparation), customer receives notification
  - Updated estimated time displayed in timeline with explanation (e.g., 'Estimated time updated due to high order volume')

- **Connection Status Indicator**:
  - Small indicator in order tracking screen showing WebSocket connection status:\n    - Green dot: Connected (real-time updates active)
    - Yellow dot: Reconnecting (temporary connection loss)
    - Red dot: Disconnected (real-time updates unavailable, manual refresh required)
  - If connection lost, app automatically attempts to reconnect
  - Upon reconnection, app fetches latest order status and updates timeline

- **Fallback Mechanism**:
  - If WebSocket connection fails or is unavailable, app falls back to polling mechanism
  - Polling interval: Every 10 seconds to check for order status updates
  - Polling continues until order is completed\n  - User can manually pull-to-refresh to force immediate update

- **Battery and Data Optimization**:
  - WebSocket connection optimized for low battery and data usage
  - Connection automatically pauses when app is in background (iOS/Android background restrictions)
  - Resumes when app returns to foreground
  - Push notifications ensure user is informed even when app is closed

**Modify Order**:
- **Add More Items**:
  - 'Add More Items' button (visible if order not yet preparing)
  - Opens menu to add items to current order
  - New items added to existing order
- **Cancel Order**:
  - 'Cancel Order' button (visible if order not yet preparing)
  - Confirmation dialog with reason selection
  - Cancellation notification sent to restaurant
- **Contact Waiter**:
  - 'Contact Waiter' button opens chat\n  - Direct message to assigned waiter
  - Request modifications or assistance
\n**Expandable Order Card**:
- **Tap to Expand**:
  - Tap on order card to expand full details
  - Slide-out panel from bottom or full-screen modal
  - All order information, timeline, and actions accessible
- **Collapse**:
  - Swipe down or tap back button to collapse
  - Returns to order status screen
\n#### 3.2.8 Real-Time Chat with Restaurant\n
**Chat Interface**:\n- **Floating Chat Bubble**:
  - Positioned bottom-right corner (fixed)
  - Circular button with message icon
  - Unread message count badge (red circle with number)
  - Pulsing animation for new messages
  - Tap to open chat window
- **Chat Window** (Slide-Up Panel or Full Screen):
  - **Chat Header**:
    - Title: 'Chat with [Restaurant Name]'
    - Assigned waiter name and photo (if available)
    - Online status indicator (green dot if online)\n    - Close button (X icon)
  - **Message History**:
    - Scrollable message list
    - Messages grouped by date
    - Each message displays:
      - Sender name and photo (customer or waiter)
      - Message text
      - Timestamp (e.g., '7:45 PM')
      - Read receipts (double checkmark if read)
    - Customer messages aligned right (blue background)
    - Waiter messages aligned left (gray background)
    - System messages centered (e.g., 'Waiter assigned')
  - **Message Input**:
    - Text input field at bottom
    - Placeholder: 'Type your message...'
    - Send button (paper plane icon)
    - Attachment button (paperclip icon) for image sharing
    - Voice message button (microphone icon)\n\n**Chat Features**:
- **Text Messaging**:
  - Real-time message delivery
  - Typing indicators when waiter is responding (e.g., '[Waiter Name] is typing...')
  - Read receipts (checkmarks)\n  - Message timestamps
- **Image Sharing**:
  - Tap attachment button to select image from gallery or take photo
  - Image preview before sending
  - Sent images displayed in chat with thumbnail
  - Tap to view full-size image
- **Voice Messages**:
  - Tap and hold microphone button to record\n  - Release to send, swipe left to cancel
  - Voice message displayed as audio player in chat
  - Playback controls (play/pause, progress bar)
- **Quick Reply Suggestions**:
  - Pre-defined quick replies displayed above input field:\n    - 'Where is my order?'
    - 'Can I modify my order?'
    - 'I need extra napkins'
    - 'Request for bill'
  - Tap to send quick reply
- **Chat History**:
  - All messages saved for reference
  - Search chat history\n  - Scroll to load older messages
\n**AI Chatbot Integration**:
- **Instant Responses**:
  - AI chatbot handles common queries:\n    - Menu information (ingredients, allergens, pricing, half/full options)
    - Restaurant details (hours, location, amenities)
    - Order status updates
  - Instant response with no wait time
- **Seamless Handoff**:
  - If query requires human assistance, chatbot hands off to waiter
  - Message: 'Connecting you to [Waiter Name]...'
  - Waiter receives notification and takes over chat
- **24/7 Availability**:
  - Chatbot available even when restaurant closed
  - Provides basic information and takes reservations
- **Multilingual Support**:
  - Chatbot supports multiple languages
  - Auto-detect user language or manual selection
\n#### 3.2.9 Enhanced Payment & Billing with Dining Completion Flow

**Post-Dining Completion Notification**:
\n- **Dining Status Check**:
  - After order status changes to 'Served', app monitors dining duration
  - After reasonable dining time (e.g., 30-45 minutes), app sends gentle notification:\n    - Notification title: 'Hope you enjoyed your meal!'
    - Notification body: 'Tap to complete dining and proceed with payment'
  - Notification includes quick action button: 'Complete Dining'\n\n- **Dining Completion Confirmation Dialog**:
  - When customer taps 'Complete Dining' or payment notification:\n  - Full-screen dialog appears with friendly message:\n    - **Heading**: 'Have you finished your meal?' (large, bold text)
    - **Subtext**: 'Let us know if you are ready to proceed with payment' (regular text)
    - **Illustration**: Happy dining icon or animation
    - **Two prominent buttons**:
      - **'Yes, I am Done'** (primary button, green background, white text)
      - **'Not Yet'** (secondary button, white background, gray border, gray text)
  - **If customer selects 'Not Yet'**:
    - Dialog closes with toast message: 'Take your time! Tap the bell icon when ready.'
    - Bell icon remains accessible in app header or floating button
    - Customer can tap bell icon later to reopen dialog
  - **If customer selects 'Yes, I am Done'**:
    - Dialog closes with smooth transition
    - Proceed to bill summary and payment flow
\n**Bill Generation & Summary**:
\n- **Bill Summary Screen**:
  - **Header**:
    - Restaurant logo at top center
    - Heading: 'Your Bill Summary' (large, bold text)
  - **Itemized List**:
    - Clean, receipt-style layout
    - Each item displays:
      - Item name
      - Quantity and **portion size** (Half Plate or Full Plate, if applicable)
      - Individual item price
      - Subtotal per item
    - Customizations and add-ons listed below each item
  - **Pricing Breakdown**:
    - Subtotal (sum of all items)
    - Taxes breakdown:\n      - GST (X%): $Y\n      - Service charge (Z%): $A
    - Discounts and promo codes applied (if any):\n      - Promo code: [Code Name] - $B
      - Loyalty points redeemed: $C
    - **Total Amount Payable** (large, bold text, primary color, highlighted)
  - **Tip Suggestion Section**:
    - Heading: 'Add a tip for great service?' (optional)
    - Tip percentage buttons:\n      - 10% ($X), 15% ($Y), 20% ($Z), Custom, No Tip
    - Selected tip highlighted\n    - Tip amount added to total
  - **Payment Method Display**:
    - Selected payment method displayed prominently with icon
    - Payment method name (e.g., 'Cash on Counter', 'Credit Card', 'Google Pay')
\n**Payment Flow Based on Method**:
\n**For COC (Cash on Counter) Payment**:
\n- **Step 1: Bill Summary with COC Banner**:
  - Bill summary displays with prominent banner at top:\n    - **Orange banner** with cash/counter icon
    - **Text**: 'Payment Method: Cash on Counter (COC)'
    - Banner styled with rounded corners and shadow
\n- **Step 2: Instruction Card**:
  - Clear instruction card below bill summary:\n    - **Icon**: Counter/cashier illustration (large, centered)
    - **Heading**: 'Please Pay at the Counter' (bold, 24px)
    - **Instructions** (bullet points or numbered list):
      - 'Kindly proceed to the restaurant counter to complete your payment'
      - 'Show this bill summary to the staff'
      - 'Your e-bill will be generated after payment confirmation'
    - **Table Number & Order ID**:
      - Displayed prominently for reference
      - Example: 'Table 12 | Order #12345'
\n- **Step 3: Action Button**:
  - Large button at bottom: 'I Have Paid at Counter'
  - Orange background with white text
  - Tap to proceed\n
- **Step 4: Payment Confirmation Dialog**:
  - When customer taps 'I Have Paid at Counter':
  - Confirmation dialog appears:
    - **Heading**: 'Have you completed the payment at the counter?'
    - **Two options**:
      - **'Yes, Payment Done'** (primary button, green)\n      - **'Not Yet'** (secondary button, gray)
\n- **Step 5: Waiting for Confirmation**:
  - If'Yes, Payment Done' selected:
  - App sends payment confirmation request to restaurant dashboard
  - Loading screen with message:\n    - **Heading**: 'Waiting for payment confirmation from restaurant...'
    - **Subtext**: 'Please wait while we verify your payment'
    - **Loading animation**: Spinner or progress indicator
\n- **Step 6: Payment Confirmed**:
  - Upon restaurant confirmation:
  - Success animation with checkmark (scale and fade-in)
  - Success message:\n    - **Heading**: 'Payment Confirmed!'
    - **Subtext**: 'Thank you for dining with us.'
  - **Order Timeline Automatically Updated**:
    - 'Payment Collected' checkpoint added with timestamp
    - **Timeline updates instantly without manual refresh**
  - **E-Bill Generation**:
    - System automatically generates digital bill/receipt
    - E-bill includes:
      - Restaurant details and logo
      - Order ID and timestamp
      - Table number\n      - Customer name
      - Itemized list with prices (including half/full plate selections)
      - Subtotal, taxes, discounts, total
      - Payment method: COC\n      - Payment timestamp
      - Thank you message
    - E-bill sent via:\n      - **Email** (if email provided): Sent to registered email
      - **SMS** with download link (if phone provided): Sent to registered phone
      - **In-app download button**: 'Download E-Bill' button (PDF format)
  - **'Print E-Bill' Button Becomes Visible**:
    - Button displayed in order details screen
    - Tap to open print dialog or share to printer app
  - **Redirect to Post-Payment Screen**:
    - Automatic redirect to rating and review screen after3 seconds
    - Skip button to go directly to home\n
**For Online Payments (Cards, Wallets, UPI,BNPL)**:

- **Step 1: Bill Summary with Payment Method**:
  - Bill summary displays with selected payment method
  - Payment method icon and name displayed prominently
\n- **Step 2: Tip Selection**:
  - Tip suggestion section (optional)
  - Select tip percentage or custom amount
\n- **Step 3: Proceed to Payment Button**:
  - Large button at bottom: 'Proceed to Payment - $XX.XX'
  - Orange background with white text
  - Tap to open payment gateway

- **Step 4: Secure Payment Gateway**:
  - Payment gateway opens (Stripe, PayPal, Razorpay, etc.)\n  - Enter payment details:\n    - Card number, expiry date, CVV (for cards)
    - Login credentials (for wallets)
    - UPI ID (for UPI)\n    - BNPL account details (for BNPL)
  - Authentication:\n    - 3D Secure (for cards)
    - OTP verification (for wallets/UPI)
    - Biometric authentication (if supported)
\n- **Step 5: Payment Processing**:
  - Loading screen with message: 'Processing payment...'
  - Progress indicator
\n- **Step 6: Payment Success**:
  - Success animation with checkmark\n  - Success message: 'Payment Successful!'
  - **Order Timeline Automatically Updated**:
    - 'Payment Collected' checkpoint added with timestamp
    - **Timeline updates instantly without manual refresh**
  - **E-Bill Auto-Generation**:
    - System instantly generates e-bill upon successful payment
    - E-bill sent immediately via:
      - **Email**: Sent to registered email
      - **SMS**: Sent to registered phone with download link
      - **In-app download option**: 'Download E-Bill' button available
    - Payment status:'Paid Online'\n    - Transaction ID included in e-bill
  - **'Print E-Bill' Button Becomes Visible**:
    - Button displayed in order details screen\n  - **Redirect to Post-Payment Screen**:
    - Automatic redirect to rating and review screen\n\n**Split Bill Feature**:
\n- **Equal Split**:
  - 'Split Bill' button in bill summary
  - Enter number of people to split among
  - Each person's share calculated and displayed
  - Each person selects their payment method independently
  - For COC split payments:\n    - Each person pays their share at counter
    - Individual e-bills generated for each person after confirmation
  - Coordinator receives confirmation when all payments complete

- **Custom Split**:
  - Assign individual items to each person
  - Each person's total calculated based on assigned items
  - Each person proceeds with their own payment\n\n**Post-Payment Experience**:

- **Rating & Review Screen**:
  - **Overall Experience Rating**:
    - Large star icons (1-5 stars)
    - Tap to rate\n    - Animated star fill effect
  - **Individual Aspect Ratings**:
    - Food Quality (1-5 stars)
    - Service (1-5 stars)
    - Ambiance (1-5 stars)
    - Value for Money (1-5 stars)
  - **Rate Individual Dishes**:
    - List of ordered items\n    - Each item with star rating (1-5 stars)
    - Tap to rate\n  - **Write Review**:
    - Text box for review
    - Placeholder: 'Share your experience...'
    - Character limit indicator
  - **Upload Photos**:
    - 'Add Photos' button
    - Select photos from gallery or take photo
    - Photo thumbnails displayed
  - **Tag Review**:
    - Pre-defined tags (multi-select):
      - 'Great for families', 'Romantic', 'Quick service', 'Value for money', etc.
    - Tap to select tags
  - **Submit Review Button**:
    - Large button at bottom: 'Submit Review'
    - Success message after submission
\n- **Loyalty Points Display**:
  - Animated counter showing points earned
  - Confetti animation for milestone achievements
  - Progress bar towards next reward
  - Message: 'You earned X points!'

- **Thank You Message**:
  - Personalized thank you with restaurant branding
  - Restaurant logo and name
  - Message: 'Thank you for dining with us, [Customer Name]!'
  - Invitation to visit again with special offer (optional):\n    - Example: 'Get 10% off on your next visit!'

- **E-Bill Access**:
  - Prominent 'Download E-Bill' button\n  - 'Print E-Bill' button (opens print dialog or shares to printer app)
  - 'Email E-Bill' option (send to different email)
  - E-bill saved in Order History for future reference

**Payment Failure Handling**:

- **For Online Payment Failures**:
  - Error screen with clear error message
  - Reason for failure displayed (e.g., 'Insufficient funds', 'Card declined', 'Network error')
  - 'Retry Payment' button
  - Option to change payment method
  - 'Contact Support' link for assistance

- **For COC Payment Issues**:
  - If restaurant does not confirm payment after reasonable time (e.g., 10 minutes):
    - Reminder notification to customer: 'Payment confirmation pending. Please check with restaurant staff.'
    - Option to contact restaurant via chat\n    - Manual resolution with support team if issue persists
\n#### 3.2.10 Order History & Reordering with Enhanced Order Details

**Order History**:

- **Order List View**:
  - Chronological list of all past orders
  - Most recent orders at top
  - Each order card shows:
    - **Restaurant name and logo**
    - **Order date and time** (e.g., 'Nov 30, 2025, 7:30 PM')
    - **Order items summary**: First2 items + 'X more items'
    - **Total amount** (bold, large text)
    - **Order status badge** (color-coded):
      - Completed (green)
      - Cancelled (red)
    - **Payment method used** (icon + label)
  - Tap to expand full order details
\n**Expandable Order Details in History**:

- **Full Order Information**:
  - **Order Header**:
    - Order ID (large, bold)
    - Order date and timestamp
    - Restaurant name and logo
    - Restaurant location
    - Table number
  - **Itemized List**:
    - Each item displays:
      - Item name and thumbnail image
      - **Item type indicator** (Veg/Non-Veg icon)
      - Quantity and **portion size** (Half Plate or Full Plate, if applicable)
      - Customizations (spice level, add-ons, removals)
      - Special instructions per item
      - Individual item price
      - Subtotal per item
- **Pricing Breakdown**:\n    - Subtotal\n    - Taxes (itemized)
    - Discounts and promo codes applied
    - Tip amount (if applicable)
    - Total amount (large, bold)
  - **Payment Information**:
    - Payment method used (with icon)
    - Payment status (Completed/Failed)
    - Transaction ID (for online payments)
    - Payment timestamp
\n- **Complete Order Timeline**:
  - Visual timeline showing all stages with timestamps:\n    - Order Received (timestamp)
    - Acknowledged (timestamp)
    - Waiter Assigned (waiter name, timestamp)
    - Preparing (timestamp, duration)
    - Ready (timestamp)\n    - Served (timestamp)\n    - Payment Collected (timestamp, payment method)
    - Order Completed (timestamp, total duration)
  - Each checkpoint shows:
    - Status icon (checkmark for completed)\n    - Status label\n    - Timestamp (date and time)
  - Duration between stages displayed (e.g., 'Prepared in 15 mins')
  - Total order duration shown at bottom (e.g., 'Total time: 45 minutes')

- **E-Bill Access**:
  - **'Download E-Bill' Button**:\n    - Tap to download e-bill as PDF
    - Save to device or open in PDF viewer
  - **'Print E-Bill' Button** (for completed orders):
    - Tap to open print dialog
    - Print directly to connected printer or share to printer app
  - **'Email E-Bill' Option**:
    - Tap to send e-bill to email address
    - Enter email or use registered email
  - **View E-Bill Preview**:
    - Tap to view e-bill in app
    - Formatted as professional receipt

- **Action Buttons**:
  - **'Reorder' Button**:
    - One-tap reorder with saved customizations (including half/full selections)
    - All items added to cart with same customizations
    - Option to modify before placing order
  - **'Rate & Review' Button** (if not already reviewed):
    - Opens rating and review screen
    - Pre-filled with order details
  - **'Contact Support' Button** (for issues with past orders):
    - Opens support chat or contact form
    - Order details auto-attached for reference

**Filters & Search**:

- **Filter Options**:
  - **Filter by Restaurant**:
    - Dropdown or search to select restaurant
    - Show orders from selected restaurant only
  - **Filter by Date Range**:
    - Date picker to select start and end date
    - Pre-defined ranges: Last 7 days, Last 30 days, Last 3 months, All time
  - **Filter by Order Status**:
    - Completed, Cancelled\n  - 'Apply Filters' button
  - 'Clear Filters' button to reset

- **Search Functionality**:
  - Search bar at top
  - Search by:\n    - Item name (e.g., 'Margherita Pizza')
    - Order ID (e.g., '#12345')
    - Restaurant name\n  - Real-time search results as user types
  - Highlight matching keywords in results

- **Sort Options**:
  - Sort by:
    - Recent (most recent first)
    - Oldest (oldest first)
    - Highest Amount (highest total first)
    - Lowest Amount (lowest total first)
  - Selected sort option displayed in header

**Quick Reorder**:

- **'Reorder' Button on Order Card**:
  - Positioned on each order card in list view
  - Tap to reorder entire order
  - All items added to cart with saved customizations (including half/full selections)
  - Confirmation toast: 'Items added to cart'\n
- **Modify Reorder Before Placing**:
  - After reorder, cart opens automatically
  - Customer can edit items, quantities, customizations (including changing half/full selection)
  - Remove items if needed
  - Add new items from menu
  - Proceed to checkout when ready

**Favorites**:

- **Save Favorite Restaurants**:
  - Heart icon on restaurant profile
  - Tap to add to favorites
  - Access favorites from profile or home screen
\n- **Save Favorite Dishes**:
  - Heart icon on item detail view
  - Tap to add to favorites
  - Quick access to favorite dishes from profile\n  - 'Add to Cart' button on favorite dishes for quick ordering

- **Create Custom Food Collections**:
  - Create collections (e.g., 'Comfort Food', 'Healthy Meals', 'Desserts')
  - Add items to collections
  - Share collections with friends
\n#### 3.2.11 Reviews & Ratings\n
**Rate Restaurant**:

- **Overall Rating**:
  - Large star icons (1-5 stars)
  - Tap to rate
  - Animated star fill effect

- **Individual Aspect Ratings**:
  - Food Quality (1-5 stars)
  - Service (1-5 stars)
  - Ambiance (1-5 stars)
  - Value for Money (1-5 stars)
- Each aspect with star icons and label

- **Written Review**:
  - Text box for review
  - Placeholder: 'Share your experience...'
  - Character limit indicator (e.g., '0/500')
  - Rich text formatting (optional): bold, italic, bullet points\n
- **Upload Photos**:
  - 'Add Photos' button
  - Select photos from gallery or take photo
  - Photo thumbnails displayed
  - Remove photo option

- **Tag Review**:
  - Pre-defined tags (multi-select):
    - 'Great for families', 'Romantic', 'Quick service', 'Value for money','Cozy ambiance', 'Friendly staff', etc.
  - Tap to select tags
  - Selected tags highlighted\n
**Rate Individual Dishes**:

- **Dish Rating**:
  - List of ordered items
  - Each item with star rating (1-5 stars)
  - Tap to rate
  - Animated star fill effect

- **Upload Photos of Dishes**:
  - 'Add Photo' button for each dish
  - Select photo from gallery or take photo
  - Photo thumbnail displayed
\n- **Helpful/Not Helpful Voting**:
  - View other customers' reviews
  - 'Helpful' and 'Not Helpful' buttons\n  - Vote count displayed
  - Helps surface most useful reviews

**Review Management**:

- **Edit Review**:
  - Access your reviews from profile
  - 'Edit' button on each review
  - Modify rating, text, photos, tags
  - Save changes

- **Delete Review**:\n  - 'Delete' button on each review\n  - Confirmation dialog before deletion
  - Review removed from restaurant profile

- **View Your Review History**:
  - List of all reviews you've written
  - Organized by date
  - Filter by restaurant
\n- **Receive Responses from Restaurant Owners**:
  - Restaurant owners can respond to reviews
  - Response displayed below your review
  - Notification when owner responds
  - Option to reply to owner's response

## 4. Complete User Flows

### 4.1 Restaurant Owner Complete Flow

**Phase 1: Registration & Setup**
1. Visit DineQR website/app and click 'Register as Restaurant Owner'
2. Enter email and phone number
3. Receive OTP on both email and phone, verify
4. Create strong password (12+ characters with complexity requirements)
5. Set up two-factor authentication (2FA) with authenticator app
6. Upload business license and tax ID for verification
7. Complete profile setup: name, role, profile photo\n8. Account approved after verification (24-48 hours)

**Phase 2: Restaurant Profile Creation**
1. Click 'Add New Restaurant'
2. Enter restaurant details:\n   - Restaurant name and tagline
   - Upload logo and banner images
   - **Select restaurant type** (Pure Vegetarian/Non-Vegetarian/Vegan/Mixed)
   - **Upload restaurant images gallery**:\n     - Interior photos (minimum 3)\n     - Exterior photos (minimum 2)
     - Ambiance shots\n     - Signature dish photos (minimum 5)
   - Enter complete address with map pin
   - Add contact details (phone, email, website, social media)
   - Set business hours and holiday schedule
   - Select cuisine types and restaurant category
   - Select price range indicator
   - Select dining style options
   - Enter seating capacity and table count
   - Upload floor plan (optional)
   - Add amenities and certifications
   - Write restaurant description\n3. Preview restaurant profile
4. Publish restaurant\n
**Phase 3: Menu Creation**
1. Navigate to 'Menu Management'\n2. Create food categories:
   - Add category name and description
   - **Select category type** (Vegetarian/Non-Vegetarian/Vegan/Mixed)
   - Upload category icon\n   - Set display order\n   - Set time-based availability
3. Add food items:
   - Enter item name\n   - Write detailed description using rich text editor
   - **Select item type** (Vegetarian/Non-Vegetarian/Vegan/Eggetarian)
   - Upload 1-5 high-quality images
   - **Set pricing**:
     - Base price (required)
     - Quantity-based pricing (optional): Small/Regular/Large with individual prices
     - **Half/Full Plate Pricing** (optional): Enable toggle, set Half Plate price and Full Plate price, set default selection
     - Combo pricing (optional)\n     - Discounted price (optional)
   - Assign to categories
   - Set preparation time
   - Select dietary indicators and allergen information
   - Add nutritional information (optional)
   - List ingredients\n   - Configure customization options (portion sizes, add-ons, spice levels, half/full plate selection)
   - Set availability status
   - Add tags and pairing suggestions
4. Bulk import items via CSV (optional, template includes half/full plate fields)
5. Preview menu in customer view
6. Publish menu

**Phase 4: Inventory Setup**
1. Create ingredient master list
2. Link ingredients to menu items with quantities (including separate quantities for half and full portions)
3. Set minimum stock levels and alerts
4. Add supplier information
5. Log initial stock levels
\n**Phase 5: QR Code Generation**
1. Navigate to 'QR Code Management'
2. Enter number of tables
3. Customize QR code design with logo and colors
4. Generate QR codes for all tables (each QR code embeds unique table number and restaurant ID)
5. Download QR codes in print-ready PDF format
6. Print and place QR codes on tables with table numbers

**Phase 6: Staff Management**
1. Navigate to 'Staff Management'
2. Add staff members:\n   - Enter name, email, phone, employee ID
   - Assign role (waiter, chef, manager)
   - Set shift schedule
   - Send invitation email for account setup
3. Staff members complete registration and login
\n**Phase 7: Daily Operations with Real-Time Notifications (ENHANCED)**
1. Login to dashboard
2. **Dashboard automatically connects via WebSocket** for real-time updates
3. Monitor real-time order board
4. **When new order arrives**:
   - **Order appears instantly on dashboard without manual refresh**
   - **Visual notification**: New order card slides in from top with bounce animation, orange highlight border for3 seconds
   - **Audio notification**: Notification sound plays (if enabled in settings)
   - **Notification bell alert**: Bell icon shakes, red badge count increments, notification added to dropdown panel
   - **Desktop notification**: System notification appears (if browser permissions granted)
   - **Mobile push notification**: Push notification sent to owner's device (if app installed)
   - System validates restaurant ID from QR scan
   - View customer's real name (or'Guest' if not logged in)
   - Click on order card to expand full details
   - View complete order information (including item types, portion sizes - half/full, ratings)\n   - View timeline and payment status
   - Acknowledge order\n   - System auto-assigns waiter based on table location
   - Waiter receives notification and confirms\n   - Kitchen receives order and starts preparation
   - Update order status: Preparing → Ready → Served
   - **Timeline automatically updates with timestamps for each stage**
   - **Customer app automatically receives real-time timeline updates without manual refresh**
5. Monitor customer chats:\n   - Assigned waiters handle table-specific queries
   - Manager intervenes for complex issues
6. **Handle COC Payments**:
   - Monitor'Pending COC Payments' section
   - When customer approaches counter:\n     - Open order and review bill summary (including half/full plate selections)
     - Collect cash payment from customer
     - Click 'Collect Payment from Customer'\n     - Confirm payment received
     - System updates order timeline with'Payment Collected' timestamp
     - **Customer app automatically receives real-time timeline update showing payment collected without manual refresh**
     - System generates and sends e-bill to customer
     - Order status changes to 'Completed'
     - 'Print E-Bill' button becomes visible in order details
7. **Print E-Bills**:
   - For completed orders, click 'Print E-Bill' button
   - Print dialog opens with formatted e-bill
   - Print directly or download as PDF
8. Manage inventory:
   - Update stock levels\n   - Mark items as out of stock when ingredients run low
9. Review daily analytics and reports (including half/full plate performance)
\n**Phase 8: Ongoing Management**
1. Update menu based on inventory and customer feedback
2. Analyze sales trends and adjust pricing (including half/full plate pricing optimization)
3. Monitor item ratings and reviews
4. Respond to customer reviews\n5. Manage staff schedules and performance
6. Run promotional campaigns
7. Export financial reports for accounting
\n### 4.2 Customer Complete Flow

**Phase 1: Registration & Onboarding**
1. Download DineQR app or visit website
2. Click 'Sign Up'\n3. Choose registration method:
   - Email + password
   - Phone number + OTP
   - Google/Facebook/Apple Sign-In
4. Verify email or phone with OTP
5. Complete profile setup:\n   - Upload profile photo
   - Enter full name (will be displayed to restaurant for orders)
   - Set dietary preferences and allergies
   - Select favorite cuisines
6. Enable biometric login for future access
7. Complete onboarding tutorial

**Phase 2: Arrival at Restaurant**
1. Arrive at restaurant and sit at table
2. Open DineQR app\n3. Login with saved credentials or biometric (or continue as guest)
4. Tap 'Scan QR Code'\n5. Scan QR code on table (system captures restaurant ID and table number)
6. **Restaurant automatically added to 'My Restaurants' dashboard** as a restaurant card for future quick access
7. App loads restaurant profile and menu
8. **View enhanced restaurant landing page**:
   - Swipe through restaurant image gallery (interior, exterior, signature dishes)
   - View restaurant type indicator (Vegetarian/Non-Vegetarian/Vegan/Mixed)
   - View overall rating and reviews
   - Confirm table number and restaurant name displayed
9. Explore restaurant details:
   - Read restaurant description
   - View amenities and features
   - Check operating hours
   - View location on map
\n**Phase 3: Menu Browsing with Enhanced Filtering**
1. Tap 'View Menu' from restaurant landing page
2. **If restaurant type is 'Mixed', use restaurant type toggle**:\n   - Toggle between 'Vegetarian' and 'Non-Vegetarian' views
   - Menu filters automatically to show only matching items/categories
3. Browse menu with category tabs:
   - View category type indicators (Veg/Non-Veg/Vegan badges)
   - Tap category tab to scroll to section
4. View food item cards:
   - See large food images with item type indicators (Veg/Non-Veg icons)
   - View customer ratings and review counts
   - See price display (single price, price range for quantity-based items, or half/full plate pricing)
   - View badges ('Popular', 'Chef's Special', 'Best Seller', etc.)
   - View dietary indicators and spice level
5. Use advanced filters:
   - Filter by item type (Vegetarian/Non-Vegetarian/Vegan)\n   - Filter by price range\n   - Filter by rating
   - Exclude allergens
   - Filter by preparation time
6. Use search functionality:
   - Search by item name, ingredients, or tags
   - View real-time search results
7. Use AI chatbot to ask questions:\n   - 'Does this dish contain nuts?'
   - 'How spicy is this item?'
   - 'Whatdo you recommend for vegetarians?'
   - 'Is this available in half plate?'
\n**Phase 4: Item Detail View & Ordering**
1. Tap on item card to view full details
2. **View comprehensive item information**:
   - Swipe through item image gallery
   - View item type indicator (Veg/Non-Veg icon)
   - View customer rating (large star display with average and count)
   - Read detailed description
   - **View pricing**:
     - If single price: See base price\n     - If quantity-based pricing: View pricing table with size options (Small/Regular/Large)
     - **If half/full plate option available**: View pricing table with Half Plate and Full Plate cards showing prices and descriptions
     - If discounted: See original price struck through with savings percentage
   - View preparation time
   - View dietary indicators and spice level
   - View allergen warnings (highlighted if present)
   - Expand to view ingredients list
   - Expand to view nutritional information
   - **View customer reviews and ratings**:\n     - See rating breakdown (5-star: X%, 4-star: Y%, etc.)
     - Read recent reviews with customer photos
     - Vote helpful/not helpful on reviews
   - View pairing suggestions and frequently ordered with items
3. **Customize order**:
   - **Select portion size**:\n     - If quantity-based pricing: Select Small/Regular/Large
     - **If half/full plate option available**: Select Half Plate or Full Plate (tap on card to select, selected option highlighted with orange border)
   - Adjust spice level
   - Add extras (cheese, sauce, toppings)
   - Remove ingredients (no onions, etc.)
   - Select cooking preferences (if applicable)
   - Add special instructions\n   - Select quantity
4. View total price (updates dynamically with customizations including half/full selection)
5. Tap 'Add to Cart'\n6. Continue browsing and adding items\n
**Phase 5: Cart & Checkout**
1. Tap floating cart button to review\n2. View itemized cart:\n   - See item names, images, item type indicators
   - View quantities, **portion sizes** (Half Plate or Full Plate, if applicable)
   - View customizations\n   - Edit items or quantities (including changing half/full selection)
   - Remove items
3. Apply promo code if available
4. Add order-level special instructions
5. Review total amount and estimated time
6. Tap 'Place Order' (system validates restaurant ID)\n7. Receive order confirmation notification
\n**Phase 6: Order Tracking with Complete Timeline and Real-Time Auto-Updates (ENHANCED)**
1. **App automatically connects via WebSocket** for real-time updates
2. View order status screen with visual progress tracker
3. **See complete order timeline with all stages**:
   - Order Received (timestamp)
   - Acknowledged (timestamp)
   - Waiter Assigned (waiter name and photo, timestamp)
   - Preparing (timestamp, preparation duration)
   - Ready (timestamp)\n   - Served (timestamp)\n   - Payment Collected (timestamp, payment method)
   - Order Completed (timestamp, total duration)
4. Current stage highlighted with animated indicator
5. Completed stages shown in green with checkmarks
6. Pending stages shown in gray with clock icons
7. Duration between stages displayed (e.g., 'Prepared in 15 mins')
8. **Timeline automatically updates in real-time without manual refresh**:\n   - When restaurant updates order status, timeline instantly refreshes
   - New checkpoint appears with smooth animation
   - Progress tracker advances to new stage automatically
   - Push notification received for each status change
   - Toast notification slides down with status update
   - **No need to pull-to-refresh or reload page**
9. **Tap on order card to expand full details**:\n   - View complete order information
   - View itemized list with item types, portion sizes (half/full), and customizations
   - View pricing breakdown\n   - View payment information
   - View complete timeline with all timestamps
10. Receive real-time push notifications for each status change
11. Track estimated time for each stage
12. Use chat to communicate with waiter:\n   - 'Can I add one more item?'
   - 'Please bring extra napkins'
   - 'Where is my order?'
13. Waiter responds in real-time
14. Receive notification when food is served
\n**Phase 7: Dining Experience**
1. Enjoy meal
2. Use chat for any requests:\n   - Request condiments
   - Report issues with food
   - Ask for recommendations for dessert
3. Order additional items if needed
\n**Phase 8: Dining Completion & Payment**
1. **Dining Completion Check**:
   - Receive notification: 'Hope you enjoyed your meal!'
   - Tap 'Complete Dining' button
   - Confirmation dialog: 'Have you finished your meal?'
   - Select'Yes, I am Done'\n2. **Bill Summary Display**:
   - View itemized bill with all charges (including half/full plate selections)
   - Review total amount
   - Add tip (optional)
3. **Payment Based on Method**:
   - **If COC Selected**:
     - See instruction: 'Please Pay at the Counter'
     - Proceed to restaurant counter with phone\n     - Show bill summary to staff
     - Pay with cash\n     - Tap 'I Have Paid at Counter' in app
     - Confirm payment completion
     - Wait for restaurant confirmation
     - Receive payment success notification
     - **Order timeline automatically updated in real-time** with'Payment Collected' timestamp (no manual refresh needed)
     - **E-bill automatically generated and sent via email/SMS**
     - Download e-bill from app
     - **'Print E-Bill' button becomes visible** in order details
   - **If Online Payment Selected**:
     - Tap 'Proceed to Payment'
     - Complete payment with authentication
     - Receive instant confirmation
     - **Order timeline automatically updated in real-time** with 'Payment Collected' timestamp (no manual refresh needed)
     - **E-bill automatically generated and sent immediately**
     - Download e-bill from app
     - **'Print E-Bill' button becomes visible** in order details
4. **Split Bill** (if applicable):
   - Each person pays their share
   - Individual e-bills generated for each\n\n**Phase 9: Post-Dining**
1. Rate overall experience (1-5 stars)
2. Rate individual aspects:
   - Food quality\n   - Service\n   - Ambiance
   - Value for money
3. Rate individual dishes ordered
4. Write review and upload photos
5. View loyalty points earned
6. Download, print, or email e-bill if needed
7. Save restaurant to favorites
8. Share experience on social media
9. **View complete order details in Order History**:
   - Tap on order to expand full details
   - View complete timeline with all timestamps
   - View itemized list with item types, portion sizes (half/full), and pricing
   - Access e-bill (download, print, email)
10. **Access restaurant from'My Restaurants' dashboard for future quick reordering**:\n   - Navigate to 'My Restaurants' dashboard
   - View restaurant card with details
   - Tap 'Reorder' button to quickly reorder last order
   - Or tap 'View Menu' to browse and order new items

### 4.3 Waiter/Agent Complete Flow

**Phase 1: Account Setup**
1. Receive invitation email from restaurant owner
2. Click activation link
3. Set up password and security questions
4. Complete profile: name, photo, employee ID\n5. Download DineQR Staff app
6. Login with employee ID and password
7. Enable biometric login\n\n**Phase 2: Shift Start**
1. Login to staff app
2. Clock in for shift
3. View assigned section/tables
4. Check table status (occupied/available)
5. Review shift schedule and breaks
\n**Phase 3: Order Management**
1. Receive notification for new order assignment
2. Tap on order card to expand full details
3. View complete order information:\n   - Table number
   - Customer name (real name from profile)
   - Ordered items with item types, portion sizes (half/full), and customizations
   - Special instructions
   - Estimated preparation time
   - Order timeline with current status
4. Confirm order assignment
5. Monitor order status in kitchen
6. Receive notification when order is ready
7. Serve food to customer
8. Update order status to 'Served'\n9. Order timeline automatically updated with timestamp
10. **Customer app automatically receives real-time timeline update showing food served**

**Phase 4: Customer Communication**
1. Receive chat messages from assigned tables
2. Respond to customer requests:
   - Answer menu questions (including half/full plate availability)
   - Bring additional items (napkins, water, condiments)
   - Handle order modifications
   - Address complaints or issues
3. Escalate complex issues to manager if needed
4. Provide personalized recommendations
\n**Phase 5: Table Management**
1. Monitor all assigned tables
2. Check table status:\n   - Ordering\n   - Eating
   - Payment pending
3. Assist with bill generation
4. Process payment requests:\n   - For online payments: Guide customer through app payment\n   - For COC payments: Direct customer to counter
5. Clear table after customer leaves
6. Update table status to available

**Phase 6: Shift End**
1. Complete all pending orders
2. Hand over active tables to next shift
3. Review shift performance:\n   - Orders served
   - Average service time
   - Customer ratings
   - Tips received
4. Clock out\n\n## 5. Advanced Design System

### 5.1 Color Palette
- **Primary Brand Color**: Vibrant Orange (#FF6B35) for CTAs, active states, food-related elements, order alerts, and notification highlights
- **Secondary Color**: Deep Teal (#00A896) for restaurant owner dashboard, professional sections, and success states
- **Accent Colors**:
  - Green (#28A745): Vegetarian indicators, positive actions, 'Ready' status, completed timeline stages
  - Red (#DC3545): Non-vegetarian indicators, alerts, 'Out of Stock'\n  - Yellow (#FFC107): Ratings, 'Preparing' status, warnings, Eggetarian indicators
  - Blue (#007BFF): Information, links, 'Acknowledged' status\n  - Purple (#6F42C1): Premium features, loyalty badges, 'Served' status
  - Teal (#00A896): 'Payment Pending' status\n  - Gray (#6C757D): 'Completed' status, pending timeline stages
- **Neutral Colors**:
  - White (#FFFFFF): Main background, cards\n  - Light Gray (#F8F9FA): Section separators, disabled states
  - Medium Gray (#6C757D): Secondary text, placeholders
  - Charcoal (#2C3E50): Primary text, headings\n  - Dark Gray (#343A40): Navigation bars, footers

### 5.2 Typography System
- **Font Families**:
  - Primary: Poppins (headings, buttons, emphasis)
  - Secondary: Inter (body text, descriptions, UI elements)
- **Type Scale**:
  - H1: Poppins Bold,32px (restaurant names, page titles)
  - H2: Poppins SemiBold, 24px (section headings)
  - H3: Poppins SemiBold, 20px (card titles, item names)
  - H4: Poppins Medium, 18px (sub-headings)\n  - Body Large: Inter Regular, 16px (descriptions, content)
  - Body: Inter Regular, 14px (standard text)
  - Small: Inter Regular, 12px (metadata, captions, timestamps)
  - Button: Poppins SemiBold, 16px (CTAs)\n  - Price: Poppins SemiBold, 20px (pricing emphasis)
\n### 5.3 Layout & Grid System
- **Responsive Breakpoints**:
  - Mobile: 320px - 767px (single column)
  - Tablet: 768px - 1023px (2-column grid)
  - Desktop: 1024px+ (3-column grid with sidebar)
- **Spacing System** (8px base unit):
  - XS: 4px (tight spacing)
  - S: 8px (compact elements)
  - M: 16px (standard spacing)
  - L: 24px (section spacing)
  - XL: 32px (major sections)
  - XXL: 48px (page sections)
- **Container Widths**:
  - Mobile: 100% with16px padding
  - Tablet: 720px max-width
  - Desktop: 1200px max-width
\n### 5.4 Component Design
\n**Cards**:
- Border radius: 12px for soft, modern look
- Shadow: 0 2px 8px rgba(0,0,0,0.1) for subtle depth
- Hover effect: scale(1.02) with 300ms transition
- Padding: 16px (mobile), 24px (desktop)
- Expandable cards: Smooth expand animation with slide-down effect

**Buttons**:
- Primary: Orange background, white text, 24px border radius
- Secondary: White background, orange border, orange text
- Tertiary: Transparent background, orange text\n- Height: 48px (mobile), 44px (desktop)
- Hover: Darken by 10%, smooth200ms transition
- Active: Scale(0.98) for tactile feedback
\n**Input Fields**:
- Border: 1px solid light gray, 8px border radius
- Focus: Orange border, subtle shadow
- Height: 48px for easy touch targets
- Placeholder: Medium gray text
- Error state: Red border with error message below

**Navigation**:
- Sticky top navigation bar (60px height)
- Bottom tab bar for mobile (56px height)
- Sidebar navigation for desktop (240px width)\n- Active state: Orange underline or background

**Food Item Cards**:
- Image:16:9 aspect ratio, rounded top corners
- **Item type indicator**: Positioned top-left on image (Veg/Non-Veg/Vegan icon with colored background,32px diameter)
- Content padding: 12px
- Badges: Positioned top-right on image\n- **Rating display**: Star icon with rating number below item name
- **Price display**: Bottom-right, bold and prominent (base price, price range, or half/full plate pricing)
- Add button: Floating bottom-right corner\n
**Order Status Cards**:
- Color-coded left border (4px width) based on status
- Status badge: Top-right corner\n- Expandable details: Accordion or modal style
- Action buttons: Bottom-right\n- Timeline: Vertical or horizontal progress tracker with checkpoints

**Timeline Component**:
- Vertical layout for mobile, horizontal for desktop
- Checkpoints connected by line (solid for completed, dashed for pending)
- Icons for each stage (checkmark for completed, clock for pending)\n- Timestamps displayed below each checkpoint
- Duration labels between stages
- Animated indicator for current stage (pulsing dot or progress bar)
- **Real-time update animations**:
  - New checkpoint slides in from right with fade-in effect (300ms)
  - Brief highlight or glow effect on newly updated checkpoint (2-second duration, orange glow)
  - Smooth transition when progress tracker advances to new stage (400ms ease-in-out)
  - Checkmark animation with scale effect when stage completes (scale from 0.8 to 1.0, 300ms)

**Rating Component**:
- Star icons (filled for rating, outlined for remaining)
- Rating number displayed next to stars
- Review count in parentheses
- Color: Yellow (#FFC107) for stars\n- Size: 16px for small, 24px for large
\n**Item Type Indicator**:
- Icon size: 20px (small), 32px (large)\n- Vegetarian: Green circle with leaf or'V' symbol
- Non-Vegetarian: Red circle with chicken leg or 'N' symbol
- Vegan: Green circle with 'VG' symbol
- Eggetarian: Yellow circle with egg symbol
- Positioned prominently on item cards and detail views

**Restaurant Type Indicator**:
- Badge size: 120px x 40px (large), 80px x 30px (small)
- Border radius: 20px (large), 15px (small)
- Icon size: 24px (large), 18px (small)
- Pure Vegetarian: Green badge with leaf icon
- Non-Vegetarian: Red badge with chicken leg icon
- Vegan: Green badge with 'VG' icon
- Mixed: Orange badge with dual icon (leaf + chicken leg)
\n**Half/Full Plate Selection Component**:
- **Segmented Control Style**:
  - Two segments: Half Plate (left) and Full Plate (right)\n  - Width: 100% of container, height: 56px
  - Border radius: 12px for outer container
  - Selected segment: Orange background (#FF6B35), white text, bold
  - Unselected segment: White background, orange border, orange text
  - Smooth slide animation when switching (300ms ease-in-out)
- **Card Style** (for item detail view):
  - Two cards side by side with equal width
  - Card height: 120px\n  - Border: 2px solid light gray
  - Border radius: 12px
  - Selected card: Orange border, checkmark icon top-right
  - Unselected card: Light gray border\n  - Each card displays: Label (Half Plate/Full Plate), description, price\n  - Tap to select with scale animation (scale0.98 on tap)
\n**Restaurant Card Component** (for My Restaurants Dashboard):
- **Grid View Card**:
  - Vertical card with rounded corners (12px border radius)
  - Shadow: 0 2px 8px rgba(0,0,0,0.1)
  - Hover effect: scale(1.03) with 300ms transition
  - Banner image: 16:9 aspect ratio at top
  - Restaurant logo overlay: Circular (64px diameter), positioned bottom-left of banner
  - Restaurant type badge: Positioned top-right on banner (80px x 30px)
  - Content section: Restaurant name (18px, bold), cuisine tags, rating, last visited date, total visits badge
  - Action buttons at bottom:'View Menu' (primary), 'Reorder' (secondary), Heart icon (favorite toggle)
- **List View Card**:
  - Horizontal card with rounded corners (12px border radius)
  - Shadow: 0 2px 8px rgba(0,0,0,0.1)
  - Hover effect: scale(1.02) with 300ms transition
  - Left section: Square banner image (120px x 120px) with logo overlay (48px diameter)
  - Middle section: Restaurant name (20px, bold), cuisine tags, rating, address, last visited & total visits\n  - Right section: Action buttons ('View Menu', 'Reorder', Heart icon)
\n**Real-Time Update Indicators**:
- **Connection Status Indicator**:
  - Small circular dot (8px diameter) in order tracking screen header or dashboard header
  - Green: Connected (real-time updates active)
  - Yellow: Reconnecting (temporary connection loss)
  - Red: Disconnected (real-time updates unavailable)
  - Positioned next to order ID or in top-right corner
- **Update Notification Toast**:
  - Slide-down animation from top (300ms ease-out)
  - Orange background with white text
  - Icon + message (e.g., 'Order status updated: Preparing')
  - Auto-dismiss after 3 seconds with fade-out\n  - Tap to dismiss immediately

**Notification Bell Component** (for Restaurant Owner Dashboard):
- **Bell Icon**:
  - Positioned in top-right corner of dashboard header
  - Icon size: 24px\n  - Color: Charcoal (#2C3E50) default, Orange (#FF6B35) on hover
- **Notification Badge**:
  - Red circular badge (18px diameter) positioned top-right of bell icon
  - White text showing unread count (e.g., '3')
  - Font: Poppins SemiBold, 12px
- **Shake Animation**:
  - Bell shakes with bounce effect when new notification arrives
  - Animation duration: 500ms
  - Keyframes: rotate(-15deg) → rotate(15deg) → rotate(0deg)
- **Ripple Effect**:
  - Orange ripple animation emanates from bell icon on new notification
  - Ripple expands from center with fade-out (1s duration)
- **Dropdown Panel**:
  - Slide-down animation (300ms ease-out)
  - Width: 360px (desktop), 100% (mobile)
  - Max height: 500px with scroll\n  - Shadow: 0 4px 12px rgba(0,0,0,0.15)
  - Border radius: 12px
  - Background: White\n- **Notification Card** (in dropdown):
  - Horizontal layout with icon, content, timestamp
  - Icon size: 32px, positioned left\n  - Unread indicator: Blue dot (8px diameter) positioned left of icon
  - Title: Poppins SemiBold, 14px\n  - Message: Inter Regular, 12px, gray\n  - Timestamp: Inter Regular, 11px, light gray
  - Hover effect: Light gray background\n  - Tap to navigate to relevant order

### 5.5 Iconography\n- **Style**: Outlined icons for consistency
- **Size**: 24px standard, 20px small, 32px large
- **Library**: Material Icons or Feather Icons
- **Custom Icons**: Food categories, dietary indicators (Veg/Non-Veg/Vegan/Eggetarian), restaurant type indicators, payment methods (including COC icon with cash/counter symbol), timeline stage icons, rating stars, half/full plate icons, restaurant card icons (menu, reorder, favorite), connection status indicators (green/yellow/red dots), WebSocket connection icon, notification bell icon, notification type icons (order, payment, message, alert)\n- **Color**: Inherit from parent or theme color
\n### 5.6 Imagery Guidelines
- **Food Photos**:
  - High resolution: minimum 1200x675px
  - Professional photography with good lighting
  - Consistent styling across menu\n  - Show portion size accurately (including visual difference between half and full plates if applicable)
  - Include garnish and plating\n- **Restaurant Photos**:
  - Ambiance shots for landing page
  - Interior and exterior views
  - Signature dishes close-ups
  - Staff photos for personal touch
- **Image Optimization**:
  - WebP format for web\n  - Progressive loading with blur-up effect
  - Lazy loading for performance
  - Responsive images with srcset

### 5.7 Animation & Transitions
- **Page Transitions**:300ms ease-in-out\n- **Card Hover**: Scale(1.02) with 200ms\n- **Card Expand**: Slide-down animation with 400ms
- **Button Press**: Scale(0.98) with 100ms
- **Loading States**: Skeleton screens with shimmer effect
- **Order Alerts**: Slide-in from top with bounce\n- **Chat Messages**: Fade-in with slide-up
- **Status Updates**: Progress bar fill animation
- **Timeline Updates**: Checkmark animation with scale and color change
- **Success Actions**: Checkmark animation with scale\n- **Payment Method Selection**: Smooth highlight transition when selected
- **Dining Completion Dialog**: Fade-in with scale animation
- **E-Bill Generation**: Document animation with success checkmark
- **Print Dialog**: Fade-in with slide-up\n- **Rating Stars**: Fill animation on tap/click
- **Image Gallery Swipe**: Smooth swipe transitions with fade effect
- **Restaurant Type Toggle**: Slide animation when switching segments
- **Half/Full Plate Selection**: Smooth transition animation when switching options (300ms ease-in-out)
- **Dashboard Home Page Animations**:
  - Hero section gradient transitions: 3s infinite alternate
  - Floating food icons: 4s ease-in-out infinite (up and down motion)
  - Lottie cooking animations: Loop continuously
  - Counter animations: 2s ease-out from0 to target value
  - Progress ring animations: 1.5s ease-in-out fill
  - Quick action cards: Stagger entrance with 100ms delay between cards
  - Live order feed: Slide-in from right with 300ms\n  - Notification bell shake: 500ms on new alert
  - Particle effects: Continuous subtle movement
- **Restaurant Card Animations** (My Restaurants Dashboard):
  - Card entrance: Stagger animation with 100ms delay between cards
  - Card hover: Scale(1.03) for grid view, scale(1.02) for list view, with 300ms transition
  - Card tap: Scale(0.98) with 100ms for tactile feedback
  - Favorite toggle: Heart icon scale and color change animation (300ms)
  - Remove swipe: Smooth swipe-left animation with fade-out (400ms)
- **Real-Time Timeline Update Animations** (ENHANCED):
  - New checkpoint appearance: Slide-in from right with fade-in effect (300ms ease-out)
  - Checkpoint highlight: Orange glow effect for2 seconds on newly updated checkpoint
  - Progress tracker advancement: Smooth transition to new stage with pulsing animation (400ms ease-in-out)\n  - Checkmark completion: Scale animation from 0.8 to 1.0 with bounce effect (300ms)
  - Connection status change: Color transition animation (green↔ yellow ↔ red, 200ms)
  - Toast notification: Slide-down from top with bounce (300ms), auto-dismiss with fade-out (200ms)
  - Haptic feedback: Brief vibration on mobile devices for status updates (50ms)
- **New Order Notification Animations** (NEW):
  - Order card entrance: Slide-in from top with bounce animation (500ms ease-out)
  - Orange highlight border: Fade-in and fade-out over 3 seconds
  - Notification bell shake: Rotate animation with bounce effect (500ms)
  - Notification badge increment: Scale animation from 1.0 to 1.2 to 1.0 (300ms)
  - Ripple effect: Expand from bell icon center with fade-out (1s)\n  - Dropdown panel: Slide-down animation (300ms ease-out)
  - Notification card: Fade-in with slide-down (200ms)
\n### 5.8 Accessibility
- **Color Contrast**: WCAG AA compliant (4.5:1 for text)\n- **Touch Targets**: Minimum 44x44px for mobile\n- **Keyboard Navigation**: Full support with visible focus states
- **Screen Reader**: Semantic HTML with ARIA labels
- **Alt Text**: Descriptive text for all images
- **Font Scaling**: Support for user font size preferences
- **Motion**: Respect prefers-reduced-motion setting (disable animations for users with motion sensitivity)
- **Real-Time Updates**: Screen reader announcements for timeline updates (e.g., 'Order status updated to Preparing')
- **Notification Accessibility**: Screen reader announces new notifications with priority level

### 5.9 Dark Mode Support
- **Background**: Dark gray (#1A1A1A) instead of white
- **Cards**: Slightly lighter gray (#2C2C2C)\n- **Text**: Light gray (#E0E0E0) for readability
- **Primary Color**: Slightly desaturated orange for less strain
- **Images**: Subtle overlay to reduce brightness
- **Toggle**: Easy switch in settings\n
## 6. Technical Considerations

### 6.1 Security
- End-to-end encryption for chat messages
- PCI-DSS compliance for payment processing
- HTTPS for all communications
- Regular security audits and penetration testing\n- Data encryption at rest and in transit
- GDPR and data privacy compliance
- **Restaurant ID validation** at multiple checkpoints to prevent order misrouting
- Secure customer name storage and display with privacy controls
- **WebSocket security**: Secure WebSocket (WSS) protocol with authentication tokens
- **Notification security**: Encrypted notification payloads, user-specific notification channels

### 6.2 Performance
- Progressive Web App (PWA) for offline support
- Image optimization and lazy loading
- Code splitting for faster initial load
- CDN for static assets
- Database indexing for quick queries
- Caching strategies for frequently accessed data
- Real-time synchronization for order status, payment confirmations, and timeline updates
- Efficient timeline rendering with virtualization for long order histories
- **Animation Performance**:
  - CSS animations with GPU acceleration (transform, opacity)\n  - RequestAnimationFrame for JavaScript animations
  - Debouncing and throttling for scroll-triggered animations
  - Lazy loading of Lottie animations
  - Reduced animation complexity on low-end devices
- **Restaurant Card Rendering**:
  - Virtualized scrolling for large restaurant lists
  - Image lazy loading with placeholder\n  - Efficient card re-rendering on filter/sort changes
- **WebSocket Performance**:
  - Connection pooling for efficient resource usage
  - Message batching to reduce network overhead
  - Automatic reconnection with exponential backoff
  - Heartbeat mechanism to detect connection issues
  - Optimized payload size for real-time updates
- **Notification Performance**:
  - Efficient notification rendering with virtual scrolling
  - Notification batching to prevent UI overload
  - Background notification processing
  - Optimized sound playback with audio sprite
\n### 6.3 Scalability
- Microservices architecture for independent scaling
- Load balancing for high traffic
- Database sharding for large datasets
- Message queue for order processing and timeline updates
- Horizontal scaling for peak hours
- **WebSocket scaling**: Distributed WebSocket server architecture with Redis pub/sub for multi-server synchronization
- **Notification scaling**: Distributed notification service with message queue (RabbitMQ, Kafka)\n\n### 6.4 Integrations
- Payment gateways: Stripe, PayPal, Razorpay
- SMS gateway for OTP and notifications
- Email service for receipts and marketing
- Google Maps API for location services
- Analytics: Google Analytics, Mixpanel\n- Accounting software: QuickBooks, Xero
- E-bill generation library for PDF creation
- Print service integration for e-bill printing
- Lottie animation library for complex animations
- **WebSocket library**: Socket.IO or native WebSocket API for real-time communication
- **Push notification services**: Firebase Cloud Messaging (FCM) for Android, Apple Push Notification Service (APNS) for iOS
- **Audio library**: Howler.js or Web Audio API for notification sounds

### 6.5 Platform Support
- Web: Responsive design for all browsers
- iOS: Native app or PWA\n- Android: Native app or PWA
- Tablet: Optimized layout for larger screens
- Desktop: Full-featured dashboard for restaurant owners
- **WebSocket support**: All modern browsers and mobile platforms
- **Push notification support**: All modern browsers (with user permission), iOS and Android native apps

## 7. Future Enhancements
- AI-powered menu recommendations based on customer preferences and dietary restrictions
- Voice ordering with natural language processing
- Augmented Reality (AR) menu visualization (including visual comparison of half vs full portions)
- Delivery and takeout integration
- Table reservation system
- Loyalty program with gamification\n- Multi-language support for international customers
- Integration with food delivery platforms (Uber Eats, DoorDash)
- Kitchen automation with IoT devices
- Predictive analytics for inventory management (including half/full portion demand forecasting)
- Cryptocurrency payment support
- QR code-based loyalty card scanning
- Automated e-bill archiving and tax reporting
- Customer dining history analytics for personalized experiences
- Advanced timeline analytics (average time per stage, bottleneck identification)
- Automated timeline-based alerts (e.g., order taking too long in preparation)
- Customer timeline sharing (share order progress with friends/family)
- Advanced rating analytics (sentiment analysis, trending feedback)
- Item recommendation engine based on ratings and order history
- Smart portion size recommendations based on customer history and preferences
- **Restaurant Dashboard Enhancements**:
  - Social sharing of favorite restaurants
  - Restaurant collections (e.g., 'Date Night Spots', 'Quick Lunch Places')
  - Personalized restaurant recommendations based on dining history
  - Geofencing notifications when near saved restaurants
  - Restaurant comparison feature (compare menus, prices, ratings)
  - Dining streak tracking (consecutive visits to same restaurant)
  - Restaurant loyalty program integration
- **Real-Time Features Enhancements**:
  - Video call support for customer-waiter communication
  - Live kitchen camera feed for transparency
  - Real-time table availability updates
  - Collaborative ordering (multiple customers ordering together in real-time)
  - Live order modification with instant restaurant notification
- **Notification Enhancements**:
  - Customizable notification sounds per notification type
  - Notification scheduling and quiet hours
  - Notification history with search and filter\n  - Notification analytics (most engaged notification types)
  - Smart notification grouping (batch similar notifications)
\n## 8. Design Style\n
### 8.1 Overall Aesthetic
- Modern and clean interface with focus on usability and visual appeal
- Food-centric design with appetizing imagery and warm color palette
- Professional yet approachable tone for restaurant owners
- Friendly and engaging experience for customers
- Consistent branding across all platforms and touchpoints
- **Restaurant ambiance feel** with animated elements that evoke dining atmosphere
- **Real-time responsiveness** with instant visual feedback for all updates
- **Proactive notifications** to keep users informed without manual intervention

### 8.2 Visual Elements
- **Color Scheme**: Vibrant orange as primary color for energy and appetite stimulation, complemented by teal for professionalism and trust
- **Typography**: Poppins for bold, modern headings; Inter for clean, readable body text
- **Iconography**: Outlined icons for consistency and clarity, custom food and payment icons for brand identity, color-coded dietary indicators (Veg/Non-Veg/Vegan), restaurant type indicators, half/full plate icons, restaurant card icons, connection status indicators, notification bell icon, notification type icons\n- **Imagery**: High-quality food photography with professional styling, restaurant ambiance photos for context, comprehensive restaurant image galleries
- **Animations**: Smooth, purposeful animations that enhance user experience without distraction, with special focus on creating an immersive restaurant atmosphere on the owner dashboard home page and engaging card interactions on customer dashboard, **real-time update animations for instant visual feedback**, **notification animations for attention-grabbing alerts**

### 8.3 User Experience Principles
- **Simplicity**: Intuitive navigation with minimal learning curve
- **Efficiency**: Quick access to key features with minimal taps/clicks
- **Transparency**: Clear communication of order status, payment flow, and timeline progress
- **Feedback**: Immediate visual and haptic feedback for all user actions
- **Personalization**: Tailored experience based on user preferences and history
- **Accessibility**: Inclusive design for users of all abilities
- **Engagement**: Animated elements that create emotional connection and enhance brand identity
- **Flexibility**: Support for diverse dining preferences including half/full portion options
- **Convenience**: Quick reordering from saved restaurants for returning customers
- **Real-Time Responsiveness**: Instant updates without manual refresh for seamless experience
- **Proactive Communication**: Automatic notifications to keep users informed and engaged

### 8.4 Brand Identity
- **Logo**: Modern, food-related icon with'DineQR' wordmark
- **Tagline**: 'Your Culinary Journey Starts Here' or 'Smart Dining, Simplified'
- **Voice**: Professional yet friendly, informative yet conversational
- **Values**: Innovation, quality, customer satisfaction, transparency, flexibility, convenience, real-time connectivity, proactive service
