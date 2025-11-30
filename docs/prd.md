# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication, dynamic menu management with enhanced schema support, AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, detailed order tracking with complete timelines, and e-bill generation - creating a unified platform that manages every aspect from customer arrival to post-dining feedback.

## 2. Advanced Authentication System

### 2.1 Restaurant Owner Authentication
- **Registration Flow**:
  - Multi-step registration with email and phone verification (OTP-based)
  - Business license/tax ID verification for restaurant legitimacy
  - Two-factor authentication (2FA) setup mandatory\n  - Password requirements: minimum 12 characters with uppercase, lowercase, numbers, and special characters
  - Security questions setup for account recovery
- **Login System**:
  - Email/phone + password authentication
  - Biometric login support (fingerprint/face recognition) for mobile
  - Session management with auto-logout after inactivity
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
\n#### 3.1.1 Restaurant Management Dashboard with Animated Home Page
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
  - Notification bell with shake animation for new alerts
  - Profile avatar with hover zoom and border glow
  - Search bar with expand animation on focus
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

**Restaurant Profile** (Enhanced):
  - Restaurant name, logo, and banner images (multiple images support)
  - Complete address with Google Maps integration and geolocation
  - Contact details: phone, email, website, social media links
  - Business hours with holiday schedule management
  - Cuisine types (multi-select): Italian, Chinese, Indian, Mexican, etc.
  - Restaurant category: Fine Dining, Casual, Fast Food, Cafe, Bar
  - Seating capacity, table count, and floor plan upload
  - Amenities: WiFi, Parking, Outdoor Seating, Live Music, etc.
  - Restaurant description (rich text editor with formatting)
  - Photo gallery for ambiance and signature dishes
  - Certifications and awards display

#### 3.1.2 Advanced Menu Management System

**Enhanced Schema Structure**:
- **Category Schema**:
  - Category ID (auto-generated UUID)
  - Category Name (required, max 50 characters)
  - Category Description (optional, rich text, max 500 characters)
  - Display Order (integer for sorting)
  - Category Icon (upload or select from library)
  - Availability Status (active/inactive)
  - Time-based Availability (breakfast, lunch, dinner, all-day)
  - Parent Category (for sub-categories support)

- **Food Item Schema** (Complete):
  - Item ID (auto-generated UUID)
  - Item Name (required, max 100 characters)
  - Item Description (required, rich text editor with formatting, max 1000 characters)
  - Category Assignment (required, multi-category support)
  - Price (required, decimal with currency)\n  - Discounted Price (optional)\n  - Multiple Images (minimum 1, maximum 5 high-resolution images)
  - Preparation Time (required, in minutes)
  - Dietary Indicators (multi-select): Vegetarian, Vegan, Non-Vegetarian, Gluten-Free, Dairy-Free,Nut-Free, Halal, Kosher\n  - Spice Level (None, Mild, Medium, Hot, Extra Hot)
  - Allergen Information (multi-select): Nuts, Dairy, Eggs, Soy, Shellfish, Wheat, etc.
  - Nutritional Information (optional):
    - Calories
    - Protein (grams)
    - Carbohydrates (grams)
    - Fat (grams)
    - Fiber (grams)
    - Sodium (mg)
  - Ingredients List (detailed, comma-separated)
  - Customization Options:\n    - Portion Size (Small, Medium, Large with price variations)
    - Spice Level Adjustment (with price if applicable)
    - Add-ons (extra cheese, extra sauce, etc. with individual prices)
    - Removal Options (no onions, no garlic, etc.)\n  - Availability Status (available, out of stock, seasonal)
  - Popular Item Badge (yes/no)
  - Chef's Special Badge (yes/no)
  - New Item Badge (auto-expires after 30 days)
  - Item Tags (searchable keywords)
  - Pairing Suggestions (recommend drinks or sides)
  - Customer Ratings (average rating, total reviews)
  - Total Orders Count (for popularity tracking)
\n**Advanced Menu Operations**:
- **Bulk Management**:
  - Import menu via CSV/Excel with template download
  - Export complete menu with all fields
  - Duplicate items for quick variations
  - Bulk price updates with percentage increase/decrease
  - Bulk category reassignment
- **Menu Versioning**:
  - Save menu versions for seasonal changes
  - Schedule menu changes for specific dates
  - Rollback to previous menu versions
- **Menu Analytics**:
  - Most viewed items\n  - Most ordered items
  - Items with highest ratings
  - Items with low orders (candidates for removal)
  - Category-wise performance\n- **Smart Recommendations**:
  - AI-suggested item pairings
  - Automatic'Frequently Bought Together' generation
  - Seasonal item suggestions based on trends
\n#### 3.1.3 Advanced Inventory Management
- **Ingredient Database**:
  - Create ingredient master list with units (kg, liters, pieces)\n  - Link ingredients to menu items with quantity requirements
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
  - Cost analysis and profit margin per item
  - Wastage reports with cost impact\n  - Reorder suggestions based on consumption patterns

#### 3.1.4 Enhanced QR Code Management
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
\n#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards
\n**Real-Time Order Board**:
- **Order Card Display**:
  - Grid or list view toggle for order cards
  - Color-coded order cards by status:\n    - Orange: New Order (requires acknowledgment)
    - Blue: Acknowledged (assigned to waiter)
    - Yellow: Preparing (in kitchen)
    - Green: Ready (waiting for service)
    - Purple: Served (food delivered to customer)
    - Teal: Payment Pending (awaiting payment completion)
    - Gray: Completed (payment received and order closed)
  - Compact card view shows:
    - Order ID and timestamp
    - Table number with floor/section\n    - Customer name (real name from profile or'Guest')
    - Order status badge (current stage)
    - Payment method indicator (Card, Wallet, UPI,BNPL, COC)
    - Payment status badge (Pending/Completed/Failed)
    - Total amount\n    - Quick action buttons (View Details, Update Status)\n\n**Expandable Order Details**:
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
        - Quantity
        - Customizations (portion size, spice level, add-ons, removals)
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
        - **Order Completed**: Final timestamp\n      - Each checkpoint shows:
        - Status icon (checkmark for completed, clock for pending)
        - Status label\n        - Timestamp (date and time)
        - Duration between stages (e.g., 'Prepared in 15 mins')
      - Current stage highlighted with animated indicator
      - Completed stages in green with checkmarks
      - Pending stages in gray with clock icons
    - **Action Buttons** (context-based):
      - Update Status (dropdown to change order stage)
      - Reassign Waiter (if needed)
      - Contact Customer (open chat)
      - Modify Order (if not yet preparing)
      - Cancel Order (with reason)
      - Mark Payment as Collected (for COC orders)
      - Print E-Bill (visible only when order status is 'Completed')
      - View E-Bill (preview generated bill)

**Order Status Management**:
- **Status Update Workflow**:
  - Owner/Manager can manually update order status via dropdown
  - Status options based on current stage:
    - New Order → Acknowledge → Assign Waiter\n    - Acknowledged → Start Preparing\n    - Preparing → Mark as Ready
    - Ready → Mark as Served
    - Served → Collect Payment (for COC) or Auto-update (for online)
    - Payment Collected → Complete Order
  - Each status change automatically updates timeline with timestamp
  - Real-time synchronization with customer app and waiter app
  - Notification sent to relevant parties on status change

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
    - Itemized list with prices
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
  - Export to accounting software (QuickBooks, Xero)\n
**Order Filters and Search**:
- **Filter Options**:
  - By status (New, Acknowledged, Preparing, Ready, Served, Payment Pending, Completed)
  - By payment method (COC, Card, Wallet, UPI, BNPL)
  - By payment status (Pending, Completed, Failed)
  - By table number
  - By waiter assigned
  - By date range (today, yesterday, last 7 days, custom)
- **Search Functionality**:
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
  - When customer selects COC as payment method, order is marked with'COC Payment' badge in orange color
  - Order card displays prominent'Payment Pending - COC' status
  - Owner/Manager dashboard shows dedicated 'Pending COC Payments' section
\n- **Bill Summary View for COC Orders**:
  - Click on COC order to view detailed bill summary:\n    - Itemized list with quantities and prices
    - Subtotal, taxes, service charges breakdown
    - Discounts and promo codes applied
    - Total amount payable (highlighted in large, bold text)
    - Customer name and table number
    - Order timestamp
  - Prominent action button: 'Collect Payment from Customer'
\n- **Payment Collection Process**:
  - Step1: Customer approaches counter for payment
  - Step 2: Staff opens order in dashboard and reviews bill summary
  - Step 3: Staff collects cash from customer
  - Step 4: Staff clicks 'Collect Payment from Customer' button
  - Step 5: Confirmation dialog appears: 'Have you received payment from [Customer Name] for Table [X]? Amount: [Total]'
  - Step 6: Staff confirms by clicking 'Yes, Payment Received'
  - Step 7: System updates order status to 'Payment Completed'
  - Step 8: System automatically updates order timeline with 'Payment Collected' timestamp
- Step 9: System automatically generates and sends e-bill to customer via email/SMS
  - Step 10: Order moves to 'Completed Orders' section
  - Step 11: 'Print E-Bill' button becomes visible in order details

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
- Failed payment alerts with customer contact for follow-up
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
  - Profit margin per item
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
    - Portion size preference (small, regular, large)
  - **Special Requests**:
    - Default special instructions (e.g., 'less oil', 'no MSG')
    - Saved for all future orders
\n- **Payment Methods Section**:\n  - **Saved Cards**:
    - Card list with masked numbers (•••• •••• •••• 1234)
    - Card brand logo (Visa, Mastercard, Amex)\n    - Expiry date display\n    - Set default card option
    - Edit or remove card with confirmation\n  - **Digital Wallets**:
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
      - Total amount\n      - Order status badge
    - Tap to expand full order details
  - **Order Details View**:
    - Complete itemized list with quantities and customizations
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
\n#### 3.2.2 Enhanced QR Scanning & Restaurant Access
- **Smart QR Scanner**:
  - In-app camera with auto-focus and QR detection
  - **Automatic restaurant ID capture** from QR code to link order to correct restaurant
  - Scan history with quick access to recently visited restaurants
  - Manual table number entry option if QR scan fails
  - Offline QR code caching for previously visited restaurants
  - **Error handling**: Display clear error message if restaurant ID is missing or invalid
- **Restaurant Landing Experience**:
  - Full-screen restaurant banner with image carousel
  - Restaurant name, logo, and verified badge
  - Overall rating with total review count
  - Cuisine type and price range indicators
  - Operating hours with current status (Open/Closed)
  - Table number confirmation display
  - Quick access buttons: Menu, Reviews, Info, Chat\n\n#### 3.2.3 Advanced Menu Browsing (Zomato-Inspired UI)
- **Category Navigation**:
  - Sticky horizontal scrollable category tabs at top
  - Category icons with names\n  - Active category highlighted with underline animation
  - 'All Items' option to view complete menu
  - Search bar with auto-suggestions
- **Menu Display**:
  - Vertical infinite scroll with category sections
  - Large high-quality food images (16:9 ratio)
  - Card-based layout with subtle shadows
  - Item name in bold, description in regular text
  - Price prominently displayed
  - Dietary indicators with color-coded icons (green for veg, red for non-veg)\n  - Badges:'Popular', 'Chef's Special', 'New'\n  - Star rating with review count
  - Preparation time badge
  - 'Out of Stock' overlay for unavailable items
- **Advanced Filtering**:
  - Filter by dietary preference (veg/non-veg/vegan)
  - Filter by price range (slider)\n  - Filter by preparation time\n  - Filter by spice level
  - Filter by allergens (exclude items with specific allergens)
  - Sort by: Popularity, Price (low to high), Rating, Preparation Time
- **Search Functionality**:
  - Real-time search with instant results
  - Search by item name, ingredients, or tags
  - Search history and suggestions
  - Voice search support
\n#### 3.2.4 Item Detail View (Enhanced)
- **Full-Screen Experience**:
  - Image gallery with swipe navigation (up to 5 images)
  - Zoom functionality for detailed view
  - Item name and price at top
  - Detailed description with rich text formatting
  - Complete ingredients list
  - Nutritional information expandable section
  - Allergen warnings highlighted
  - Customer reviews and ratings section
  - 'Frequently Ordered With' suggestions
- **Customization Panel**:
  - Portion size selection with price adjustment
  - Spice level slider
  - Add-ons checklist with individual prices
  - Removal options (e.g., no onions)\n  - Special instructions text box
  - Quantity selector with +/- buttons
- **Social Proof**:
  - Customer photos of the dish
  - Recent reviews with ratings
  - 'X people ordered this today' indicator
\n#### 3.2.5 Advanced Cart & Checkout
- **Smart Cart**:
  - Floating cart button with item count badge
  - Bottom sheet cart view with itemized list
  - Each item shows: name, customizations, quantity, price
  - Edit or remove items directly from cart
  - Subtotal, taxes, and total amount breakdown
  - Estimated preparation time for entire order
  - **Restaurant ID validation** before proceeding to payment
- **Promo Codes & Discounts**:
  - Apply promo code field with validation
  - Available offers display
  - Loyalty points redemption
  - Automatic discount application for eligible items
- **Special Instructions**:
  - Order-level special instructions text box
  - Pre-defined quick options (less oil, extra spicy, etc.)
- **Order Confirmation**:
  - Review complete order summary
  - Confirm table number and restaurant details
  - Estimated total time display
  - 'Place Order' button with loading animation

#### 3.2.6 Real-Time Order Tracking with Complete Timeline
\n**Order Status Screen**:
- **Visual Progress Tracker**:
  - Horizontal or vertical timeline with stages:\n    - Order Placed → Acknowledged → Preparing → Ready → Served → Payment Collected → Completed
  - Current status highlighted with animated indicator (pulsing dot or progress bar)
  - Completed stages in green with checkmarks
  - Pending stages in gray with clock icons
  - Estimated time for each stage displayed
\n**Detailed Order Timeline**:
- **Timeline View**:
  - Expandable timeline section showing complete order journey
  - Each checkpoint displays:
    - **Order Received**:\n      - Icon: Receipt icon
      - Label: 'Order Placed'
      - Timestamp: Date and time when order was placed
      - Description: 'Your order has been received by the restaurant'
    - **Acknowledged**:
      - Icon: Checkmark icon
      - Label: 'Order Acknowledged'
      - Timestamp: Date and time when restaurant acknowledged
      - Description: 'Restaurant has confirmed your order'
    - **Waiter Assigned**:
      - Icon: Person icon
      - Label: 'Waiter Assigned'
      - Timestamp: Date and time of assignment
      - Description: 'Your waiter is [Waiter Name]' with waiter photo
    - **Preparing**:
      - Icon: Chef hat icon
      - Label: 'Preparing in Kitchen'
      - Timestamp: Date and time when preparation started
      - Description: 'Your food is being prepared'
      - Duration: 'Preparation time: X minutes' (countdown or elapsed time)
    - **Ready**:
      - Icon: Bell icon
      - Label: 'Food Ready'
      - Timestamp: Date and time when food ready
      - Description: 'Your order is ready to be served'
    - **Served**:
      - Icon: Plate icon
      - Label: 'Food Served'
      - Timestamp: Date and time when food delivered to table
      - Description: 'Enjoy your meal!'
    - **Payment Collected**:
      - Icon: Payment icon (card/cash based on method)
      - Label: 'Payment Completed'
      - Timestamp: Date and time when payment confirmed
      - Description: 'Payment received successfully'
      - Payment method displayed (COC, Card, Wallet, UPI,BNPL)
    - **Order Completed**:
      - Icon: Star icon
      - Label: 'Order Completed'
      - Timestamp: Final completion time
      - Description: 'Thank you for dining with us!'
  - Duration between stages calculated and displayed (e.g., 'Prepared in 15 mins', 'Served in 3 mins')
  - Total order duration displayed at bottom (e.g., 'Total time: 45 minutes')

**Order Details Display**:
- **Order Information Card**:
  - Order ID (large, bold at top)
  - Restaurant name and logo
  - Table number
  - Order date and time
  - Current order status badge (color-coded)
  - Assigned waiter name and photo
- **Itemized Order List**:
  - Each item shows:
    - Item name and thumbnail image
    - Quantity
    - Customizations (portion size, spice level, add-ons, removals)
    - Special instructions per item
    - Individual item price
  - Order-level special instructions highlighted
- **Pricing Breakdown**:
  - Subtotal
  - Taxes (itemized)
  - Discounts and promo codes applied
  - Tip amount (if applicable)
  - Total amount (large, bold)
- **Payment Information**:
  - Payment method selected (with icon)
  - Payment status (Pending/Completed/Failed)
  - Transaction ID (for online payments)
  - Payment timestamp (when completed)
\n**Real-Time Updates**:
- Push notifications for each status change
- In-app toast notifications with sound/vibration
- Live status updates without page refresh
- Estimated time updates based on kitchen progress
\n**Modify Order**:
- Request to add more items (if order not yet preparing)
- Cancel order option (with confirmation)
- Contact waiter button for modifications
\n**Expandable Order Card**:
- Tap on order card to expand full details
- Slide-out panel or full-screen modal
- All order information, timeline, and actions accessible
- Swipe down or back button to collapse

#### 3.2.7 Real-Time Chat with Restaurant\n- **Chat Interface**:
  - Floating chat bubble icon (bottom-right corner)
  - Slide-up chat window with message history
  - Direct connection to assigned waiter for table-specific queries
  - Escalation to manager for complex issues
- **Chat Features**:
  - Text messaging with real-time delivery\n  - Image sharing (e.g., send photo of issue with food)
  - Voice messages for convenience
  - Quick reply suggestions:\n    - 'Where is my order?'
    - 'Can I modify my order?'
    - 'I need extra napkins'
    - 'Request for bill'\n  - Typing indicators when waiter is responding
  - Read receipts\n  - Chat history saved for reference
- **AI Chatbot Integration**:
  - Instant responses for common queries (menu info, ingredients, restaurant details)
  - Seamless handoff to human waiter when needed
  - 24/7 availability for basic questions
  - Multilingual support\n
#### 3.2.8 Enhanced Payment & Billing with Dining Completion Flow

**Post-Dining Completion Notification**:
- **Dining Status Check**:
  - After order status changes to 'Served', app monitors dining duration
  - After reasonable dining time (e.g., 30-45 minutes), app sends gentle notification: 'Hope you enjoyed your meal!'
  - Notification includes quick action button: 'Complete Dining'\n\n- **Dining Completion Confirmation Dialog**:
  - When customer taps 'Complete Dining' or payment notification:\n  - Full-screen dialog appears with friendly message:\n    - Heading: 'Have you finished your meal?'
    - Subtext: 'Let us know if you are ready to proceed with payment'
    - Two prominent buttons:\n      - 'Yes, I am Done' (primary button in green)
      - 'Not Yet' (secondary button)\n  - If customer selects 'Not Yet':
    - Dialog closes with message: 'Take your time! Tap the bell icon when ready.'
    - Bell icon remains accessible in app for later\n  - If customer selects 'Yes, I am Done':
    - Proceed to bill summary and payment flow
\n**Bill Generation & Summary**:
- **Bill Summary Screen**:
  - Clean, receipt-style layout with restaurant logo at top
  - Heading: 'Your Bill Summary'
  - Itemized list with quantities and individual prices
  - Subtotal calculation
  - Taxes breakdown (GST, service charge, etc.)
  - Discounts and promo codes applied (if any)
  - **Total Amount Payable** (large, bold text in primary color)
  - Tip suggestion section (10%, 15%, 20%, custom, or no tip)
  - Selected payment method displayed prominently
\n**Payment Flow Based on Method**:
\n- **For COC (Cash on Counter) Payment**:
  - **Step 1**: Bill summary displays with prominent banner:\n    - Orange banner with cash icon
    - Text: 'Payment Method: Cash on Counter (COC)'
  - **Step 2**: Clear instruction card below bill:\n    - Icon: Counter/cashier illustration
    - Heading: 'Please Pay at the Counter'
    - Instructions:\n      - 'Kindly proceed to the restaurant counter to complete your payment'
      - 'Show this bill summary to the staff'
      - 'Your e-bill will be generated after payment confirmation'
    - Table number and order ID displayed for reference
  - **Step 3**: Action button: 'I Have Paid at Counter'
  - **Step 4**: When customer taps 'I Have Paid at Counter':
    - Confirmation dialog: 'Have you completed the payment at the counter?'
    - Two options: 'Yes, Payment Done' and 'Not Yet'
  - **Step 5**: If 'Yes, Payment Done' selected:
    - App sends payment confirmation request to restaurant dashboard
    - Loading screen with message: 'Waiting for payment confirmation from restaurant...'
    - Restaurant staff confirms payment in their dashboard
  - **Step 6**: Upon restaurant confirmation:
    - Success animation with checkmark
    - Message: 'Payment Confirmed! Thank you for dining with us.'
    - **Order timeline automatically updated** with 'Payment Collected' timestamp
    - **E-Bill Generation**:
      - System automatically generates digital bill/receipt
      - E-bill includes:
        - Restaurant details and logo
        - Order ID and timestamp
        - Table number
        - Customer name\n        - Itemized list with prices
        - Subtotal, taxes, discounts, total
        - Payment method: COC\n        - Payment timestamp
        - Thank you message
      - E-bill sent via:\n        - Email (if email provided)
        - SMS with download link (if phone provided)
        - In-app download button (PDF format)
    - **'Print E-Bill' button becomes visible** in order details
    - Redirect to post-payment screen (rating and review)

- **For Online Payments** (Cards, Wallets, UPI, BNPL):
  - **Step 1**: Bill summary displays with selected payment method
  - **Step 2**: Tip selection (optional)
  - **Step 3**: 'Proceed to Payment' button
  - **Step 4**: Secure payment gateway opens
  - **Step 5**: Complete payment with authentication (3D Secure, OTP, biometric)
  - **Step 6**: Payment success confirmation
  - **Step 7**: **Order timeline automatically updated** with 'Payment Collected' timestamp
  - **Step 8**: **E-Bill Auto-Generation**:
    - System instantly generates e-bill upon successful payment
    - E-bill sent immediately via email and SMS
    - In-app download option available\n    - Payment status:'Paid Online'
  - **Step 9**: **'Print E-Bill' button becomes visible** in order details
  - **Step 10**: Redirect to post-payment screen (rating and review)

**Split Bill Feature**:
- Equal split among multiple customers
- Custom split with individual item assignment
- Each person selects their payment method independently
- For COC split payments:\n  - Each person pays their share at counter
  - Individual e-bills generated for each person after confirmation
- Coordinator receives confirmation when all payments complete

**Post-Payment Experience**:
- **Rating & Review Screen**:
  - Rate overall experience (1-5 stars)
  - Rate individual aspects: food quality, service, ambiance, value for money
  - Rate individual dishes ordered
  - Write review with photo upload
  - Tag review (e.g., 'Great for families', 'Romantic')
- **Loyalty Points Display**:
  - Animated counter showing points earned
  - Progress towards next reward\n- **Thank You Message**:
  - Personalized thank you with restaurant branding
  - Invitation to visit again with special offer (optional)
- **E-Bill Access**:
  - Prominent 'Download E-Bill' button\n  - 'Print E-Bill' button (opens print dialog or shares to printer app)
  - 'Email E-Bill' option\n  - E-bill saved in Order History for future reference

**Payment Failure Handling**:
- For online payment failures:
  - Clear error message with reason
  - 'Retry Payment' button
  - Option to change payment method
  - Contact support link
- For COC payment issues:
  - If restaurant does not confirm payment after reasonable time:
    - Reminder notification to customer
    - Option to contact restaurant via chat
    - Manual resolution with support team
\n#### 3.2.9 Order History & Reordering with Enhanced Order Details

**Order History**:
- **Order List View**:
  - Chronological list of all past orders
  - Each order card shows:
    - Restaurant name and logo
    - Order date and time
    - Order items summary (first 2 items + 'X more')
    - Total amount
    - Order status badge (Completed/Cancelled)\n    - Payment method used
  - Tap to expand full order details
\n**Expandable Order Details in History**:
- **Full Order Information**:
  - Order ID and timestamp
  - Restaurant name and location
  - Table number
  - Itemized list with quantities, customizations, and prices
  - Pricing breakdown (subtotal, taxes, discounts, total)
  - Payment method and transaction ID
  - Payment timestamp
- **Complete Order Timeline**:
  - Visual timeline showing all stages with timestamps:\n    - Order Received
    - Acknowledged
    - Waiter Assigned
    - Preparing
    - Ready
    - Served
    - Payment Collected
    - Order Completed
  - Duration between stages displayed
  - Total order duration shown
- **E-Bill Access**:
  - 'Download E-Bill' button
  - 'Print E-Bill' button (for completed orders)
  - 'Email E-Bill' option
  - View e-bill preview in app
- **Action Buttons**:
  - 'Reorder' button (one-tap reorder with saved customizations)
  - 'Rate & Review' button (if not already reviewed)
  - 'Contact Support' (for issues with past orders)
\n**Filters & Search**:
- Filter by restaurant\n- Filter by date range (date picker)
- Filter by order status (Completed, Cancelled)\n- Search by item name or order ID
- Sort by: Recent, Oldest, Highest Amount\n\n**Quick Reorder**:
- 'Reorder' button for favorite orders
- One-tap reorder with saved customizations
- Modify reorder before placing
\n**Favorites**:
- Save favorite restaurants
- Save favorite dishes for quick access
- Create custom food collections

#### 3.2.10 Reviews & Ratings\n- **Rate Restaurant**:
  - Overall rating (1-5 stars)\n  - Individual ratings for food quality, service, ambiance, value for money
  - Written review with photo upload
  - Tag review (e.g., 'Great for families', 'Romantic', 'Quick service')
- **Rate Individual Dishes**:
  - Rate each ordered item separately
  - Upload photos of dishes
  - Helpful/Not Helpful voting on reviews
- **Review Management**:
  - Edit or delete your reviews
  - View your review history
  - Receive responses from restaurant owners
\n## 4. Complete User Flows

### 4.1 Restaurant Owner Complete Flow

**Phase 1: Registration & Setup**
1. Visit DineQR website/app and click 'Register as Restaurant Owner'
2. Enter email and phone number
3. Receive OTP on both email and phone, verify
4. Create strong password (12+ characters with complexity requirements)
5. Set up two-factor authentication (2FA) with authenticator app
6. Upload business license and tax ID for verification
7. Complete profile setup: name, role, profile photo
8. Account approved after verification (24-48 hours)

**Phase 2: Restaurant Profile Creation**
1. Click 'Add New Restaurant'
2. Enter restaurant details:\n   - Restaurant name and tagline
   - Upload logo and banner images
   - Enter complete address with map pin
   - Add contact details (phone, email, website, social media)
   - Set business hours and holiday schedule
   - Select cuisine types and restaurant category
   - Enter seating capacity and table count
   - Upload floor plan (optional)
   - Add amenities and certifications
   - Write restaurant description\n3. Preview restaurant profile
4. Publish restaurant\n
**Phase 3: Menu Creation**
1. Navigate to 'Menu Management'\n2. Create food categories:
   - Add category name and description
   - Upload category icon
   - Set display order\n   - Set time-based availability
3. Add food items:
   - Enter item name\n   - Write detailed description using rich text editor
   - Upload 1-5 high-quality images
   - Set price and discounted price (if any)
   - Assign to categories
   - Set preparation time
   - Select dietary indicators and allergen information
   - Add nutritional information (optional)
   - List ingredients\n   - Configure customization options (portion sizes, add-ons, spice levels)
   - Set availability status
   - Add tags and pairing suggestions
4. Bulk import items via CSV (optional)
5. Preview menu in customer view
6. Publish menu

**Phase 4: Inventory Setup**
1. Create ingredient master list
2. Link ingredients to menu items with quantities
3. Set minimum stock levels and alerts
4. Add supplier information
5. Log initial stock levels

**Phase 5: QR Code Generation**
1. Navigate to 'QR Code Management'
2. Enter number of tables
3. Customize QR code design with logo and colors
4. Generate QR codes for all tables (each QR code embeds unique table number and restaurant ID)
5. Download QR codes in print-ready PDF format
6. Print and place QR codes on tables with table numbers

**Phase 6: Staff Management**
1. Navigate to 'Staff Management'
2. Add staff members:\n   - Enter name, email, phone, employee ID
   - Assign role (waiter, chef, manager)\n   - Set shift schedule
   - Send invitation email for account setup
3. Staff members complete registration and login
\n**Phase 7: Daily Operations**
1. Login to dashboard
2. Monitor real-time order board
3. When new order arrives:
   - System validates restaurant ID from QR scan
   - View customer's real name (or'Guest' if not logged in)
   - Click on order card to expand full details
   - View complete order information, timeline, and payment status
   - Acknowledge order\n   - System auto-assigns waiter based on table location
   - Waiter receives notification and confirms\n   - Kitchen receives order and starts preparation
   - Update order status: Preparing → Ready → Served
   - Timeline automatically updates with timestamps for each stage
4. Monitor customer chats:\n   - Assigned waiters handle table-specific queries
   - Manager intervenes for complex issues
5. **Handle COC Payments**:
   - Monitor'Pending COC Payments' section
   - When customer approaches counter:
     - Open order and review bill summary
     - Collect cash payment from customer
     - Click 'Collect Payment from Customer'\n     - Confirm payment received
     - System updates order timeline with 'Payment Collected' timestamp\n     - System generates and sends e-bill to customer
     - Order status changes to 'Completed'
     - 'Print E-Bill' button becomes visible in order details
6. **Print E-Bills**:
   - For completed orders, click 'Print E-Bill' button
   - Print dialog opens with formatted e-bill
   - Print directly or download as PDF
7. Manage inventory:
   - Update stock levels\n   - Mark items as out of stock when ingredients run low
8. Review daily analytics and reports

**Phase 8: Ongoing Management**
1. Update menu based on inventory and customer feedback
2. Analyze sales trends and adjust pricing
3. Respond to customer reviews\n4. Manage staff schedules and performance
5. Run promotional campaigns
6. Export financial reports for accounting

### 4.2 Customer Complete Flow
\n**Phase 1: Registration & Onboarding**
1. Download DineQR app or visit website
2. Click 'Sign Up'\n3. Choose registration method:
   - Email + password
   - Phone number + OTP
   - Google/Facebook/Apple Sign-In
4. Verify email or phone with OTP
5. Complete profile setup:
   - Upload profile photo
   - Enter full name (will be displayed to restaurant for orders)
   - Set dietary preferences and allergies
   - Select favorite cuisines\n6. Enable biometric login for future access
7. Complete onboarding tutorial

**Phase 2: Arrival at Restaurant**
1. Arrive at restaurant and sit at table
2. Open DineQR app\n3. Login with saved credentials or biometric (or continue as guest)
4. Tap 'Scan QR Code'\n5. Scan QR code on table (system captures restaurant ID and table number)
6. App loads restaurant profile and menu
7. Confirm table number and restaurant name displayed
\n**Phase 3: Menu Browsing**
1. View restaurant landing page with banner, ratings, and info
2. Tap 'View Menu'\n3. Browse menu with category tabs
4. Use search or filters to find specific items:\n   - Filter by dietary preference
   - Filter by price range
   - Exclude allergens
5. Tap on item card to view details
6. View full item information:\n   - Images, description, ingredients
   - Nutritional info and allergens
   - Customer reviews and ratings
7. Use AI chatbot to ask questions:\n   - 'Does this dish contain nuts?'
   - 'How spicy is this item?'
   - 'Whatdo you recommend for vegetarians?'

**Phase 4: Ordering**
1. Select item customizations:
   - Choose portion size\n   - Adjust spice level
   - Add extras (cheese, sauce, etc.)
   - Remove ingredients (no onions, etc.)
2. Add special instructions\n3. Select quantity
4. Tap 'Add to Cart'
5. Continue browsing and adding items
6. Tap floating cart button to review
7. Edit items or quantities in cart
8. Apply promo code if available
9. Add order-level special instructions
10. Review total amount and estimated time
11. Tap 'Place Order' (system validates restaurant ID before proceeding)
12. Receive order confirmation notification

**Phase 5: Order Tracking with Complete Timeline**
1. View order status screen with visual progress tracker
2. See complete order timeline with all stages:\n   - Order Received (timestamp)
   - Acknowledged (timestamp)
   - Waiter Assigned (waiter name and photo, timestamp)
   - Preparing (timestamp, preparation duration)
   - Ready (timestamp)\n   - Served (timestamp)\n   - Payment Collected (timestamp, payment method)
   - Order Completed (timestamp, total duration)
3. Current stage highlighted with animated indicator
4. Completed stages shown in green with checkmarks
5. Pending stages shown in gray with clock icons
6. Duration between stages displayed (e.g., 'Prepared in 15 mins')
7. Tap on order card to expand full details:\n   - View complete order information\n   - View itemized list with customizations
   - View pricing breakdown
   - View payment information
   - View complete timeline with all timestamps
8. Receive real-time push notifications for each status change
9. Track estimated time for each stage
10. Use chat to communicate with waiter:\n   - 'Can I add one more item?'
   - 'Please bring extra napkins'
   - 'Where is my order?'
11. Waiter responds in real-time
12. Receive notification when food is served

**Phase 6: Dining Experience**
1. Enjoy meal\n2. Use chat for any requests:\n   - Request condiments
   - Report issues with food
   - Ask for recommendations for dessert
3. Order additional items if needed
\n**Phase 7: Dining Completion & Payment**
1. **Dining Completion Check**:
   - Receive notification: 'Hope you enjoyed your meal!'
   - Tap 'Complete Dining' button
   - Confirmation dialog: 'Have you finished your meal?'
   - Select 'Yes, I am Done'
2. **Bill Summary Display**:
   - View itemized bill with all charges
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
     - **Order timeline automatically updated** with 'Payment Collected' timestamp
     - **E-bill automatically generated and sent via email/SMS**
     - Download e-bill from app
     - **'Print E-Bill' button becomes visible** in order details
   - **If Online Payment Selected**:
     - Tap 'Proceed to Payment'
     - Complete payment with authentication
     - Receive instant confirmation
     - **Order timeline automatically updated** with 'Payment Collected' timestamp
     - **E-bill automatically generated and sent immediately**
     - Download e-bill from app
     - **'Print E-Bill' button becomes visible** in order details
4. **Split Bill** (if applicable):
   - Each person pays their share\n   - Individual e-bills generated for each\n\n**Phase 8: Post-Dining**
1. Rate overall experience (1-5 stars)
2. Rate individual aspects:
   - Food quality
   - Service
   - Ambiance\n   - Value for money
3. Rate individual dishes ordered
4. Write review and upload photos
5. View loyalty points earned
6. Download, print, or email e-bill if needed
7. Save restaurant to favorites
8. Share experience on social media
9. View complete order details in Order History:\n   - Tap on order to expand full details
   - View complete timeline with all timestamps
   - View itemized list and pricing
   - Access e-bill (download, print, email)

### 4.3 Waiter/Agent Complete Flow

**Phase 1: Account Setup**
1. Receive invitation email from restaurant owner
2. Click activation link
3. Set up password and security questions
4. Complete profile: name, photo, employee ID
5. Download DineQR Staff app
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
   - Ordered items with customizations
   - Special instructions
   - Estimated preparation time
   - Order timeline with current status
4. Confirm order assignment
5. Monitor order status in kitchen
6. Receive notification when order is ready
7. Serve food to customer
8. Update order status to 'Served'
9. Order timeline automatically updated with timestamp

**Phase 4: Customer Communication**
1. Receive chat messages from assigned tables
2. Respond to customer requests:
   - Answer menu questions
   - Bring additional items (napkins, water, condiments)
   - Handle order modifications
   - Address complaints or issues
3. Escalate complex issues to manager if needed
4. Provide personalized recommendations

**Phase 5: Table Management**
1. Monitor all assigned tables
2. Check table status:\n   - Ordering\n   - Eating
   - Payment pending
3. Assist with bill generation
4. Process payment requests:\n   - For online payments: Guide customer through app payment
   - For COC payments: Direct customer to counter
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
- **Primary Brand Color**: Vibrant Orange (#FF6B35) for CTAs, active states, food-related elements, and order alerts
- **Secondary Color**: Deep Teal (#00A896) for restaurant owner dashboard, professional sections, and success states
- **Accent Colors**:
  - Green (#28A745): Vegetarian indicators, positive actions,'Ready' status, completed timeline stages
  - Red (#DC3545): Non-vegetarian indicators, alerts, 'Out of Stock'\n  - Yellow (#FFC107): Ratings, 'Preparing' status, warnings\n  - Blue (#007BFF): Information, links, 'Acknowledged' status
  - Purple (#6F42C1): Premium features, loyalty badges, 'Served' status
  - Teal (#00A896): 'Payment Pending' status\n  - Gray (#6C757D): 'Completed' status, pending timeline stages
- **Neutral Colors**:
  - White (#FFFFFF): Main background, cards\n  - Light Gray (#F8F9FA): Section separators, disabled states
  - Medium Gray (#6C757D): Secondary text, placeholders
  - Charcoal (#2C3E50): Primary text, headings
  - Dark Gray (#343A40): Navigation bars, footers

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

### 5.3 Layout & Grid System
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

**Input Fields**:
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
- Image: 16:9 aspect ratio, rounded top corners
- Content padding: 12px
- Badges: Positioned top-right on image
- Price: Bottom-right, bold and prominent
- Add button: Floating bottom-right corner

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

### 5.5 Iconography
- **Style**: Outlined icons for consistency
- **Size**: 24px standard, 20px small, 32px large
- **Library**: Material Icons or Feather Icons
- **Custom Icons**: Food categories, dietary indicators, payment methods (including COC icon with cash/counter symbol), timeline stage icons
- **Color**: Inherit from parent or theme color

### 5.6 Imagery Guidelines
- **Food Photos**:
  - High resolution: minimum 1200x675px
  - Professional photography with good lighting
  - Consistent styling across menu\n  - Show portion size accurately
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
- **Order Alerts**: Slide-in from top with bounce\n- **Chat Messages**: Fade-in with slide-up\n- **Status Updates**: Progress bar fill animation
- **Timeline Updates**: Checkmark animation with scale and color change
- **Success Actions**: Checkmark animation with scale\n- **Payment Method Selection**: Smooth highlight transition when selected
- **Dining Completion Dialog**: Fade-in with scale animation
- **E-Bill Generation**: Document animation with success checkmark
- **Print Dialog**: Fade-in with slide-up\n- **Dashboard Home Page Animations**:
  - Hero section gradient transitions: 3s infinite alternate
  - Floating food icons: 4s ease-in-out infinite (up and down motion)
  - Lottie cooking animations: Loop continuously
  - Counter animations: 2s ease-out from0 to target value
  - Progress ring animations: 1.5s ease-in-out fill
  - Quick action cards: Stagger entrance with 100ms delay between cards
  - Live order feed: Slide-in from right with 300ms\n  - Notification bell shake: 500ms on new alert
  - Particle effects: Continuous subtle movement

### 5.8 Accessibility
- **Color Contrast**: WCAG AA compliant (4.5:1 for text)\n- **Touch Targets**: Minimum 44x44px for mobile\n- **Keyboard Navigation**: Full support with visible focus states
- **Screen Reader**: Semantic HTML with ARIA labels
- **Alt Text**: Descriptive text for all images
- **Font Scaling**: Support for user font size preferences
- **Motion**: Respect prefers-reduced-motion setting

### 5.9 Dark Mode Support
- **Background**: Dark gray (#1A1A1A) instead of white
- **Cards**: Slightly lighter gray (#2C2C2C)\n- **Text**: Light gray (#E0E0E0) for readability
- **Primary Color**: Slightly desaturated orange for less strain
- **Images**: Subtle overlay to reduce brightness
- **Toggle**: Easy switch in settings

## 6. Technical Considerations

### 6.1 Security
- End-to-end encryption for chat messages
- PCI-DSS compliance for payment processing
- HTTPS for all communications
- Regular security audits and penetration testing
- Data encryption at rest and in transit
- GDPR and data privacy compliance
- **Restaurant ID validation** at multiple checkpoints to prevent order misrouting
- Secure customer name storage and display with privacy controls

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

### 6.3 Scalability
- Microservices architecture for independent scaling
- Load balancing for high traffic
- Database sharding for large datasets
- Message queue for order processing and timeline updates
- Horizontal scaling for peak hours
\n### 6.4 Integrations
- Payment gateways: Stripe, PayPal, Razorpay
- SMS gateway for OTP and notifications
- Email service for receipts and marketing
- Google Maps API for location services
- Analytics: Google Analytics, Mixpanel\n- Accounting software: QuickBooks, Xero
- E-bill generation library for PDF creation
- Print service integration for e-bill printing
- Lottie animation library for complex animations

### 6.5 Platform Support
- Web: Responsive design for all browsers
- iOS: Native app or PWA
- Android: Native app or PWA
- Tablet: Optimized layout for larger screens
- Desktop: Full-featured dashboard for restaurant owners
\n## 7. Future Enhancements
- AI-powered menu recommendations based on customer preferences
- Voice ordering with natural language processing
- Augmented Reality (AR) menu visualization
- Delivery and takeout integration
- Table reservation system
- Loyalty program with gamification\n- Multi-language support for international customers
- Integration with food delivery platforms (Uber Eats, DoorDash)
- Kitchen automation with IoT devices
- Predictive analytics for inventory management
- Cryptocurrency payment support
- QR code-based loyalty card scanning
- Automated e-bill archiving and tax reporting
- Customer dining history analytics for personalized experiences
- Advanced timeline analytics (average time per stage, bottleneck identification)
- Automated timeline-based alerts (e.g., order taking too long in preparation)
- Customer timeline sharing (share order progress with friends/family)
\n## 8. Design Style\n
### 8.1 Overall Aesthetic
- Modern and clean interface with focus on usability and visual appeal
- Food-centric design with appetizing imagery and warm color palette
- Professional yet approachable tone for restaurant owners
- Friendly and engaging experience for customers
- Consistent branding across all platforms and touchpoints
- **Restaurant ambiance feel** with animated elements that evoke dining atmosphere

### 8.2 Visual Elements
- **Color Scheme**: Vibrant orange as primary color for energy and appetite stimulation, complemented by teal for professionalism and trust
- **Typography**: Poppins for bold, modern headings; Inter for clean, readable body text
- **Iconography**: Outlined icons for consistency and clarity, custom food and payment icons for brand identity
- **Imagery**: High-quality food photography with professional styling, restaurant ambiance photos for context
- **Animations**: Smooth, purposeful animations that enhance user experience without distraction, with special focus on creating an immersive restaurant atmosphere on the owner dashboard home page

### 8.3 User Experience Principles
- **Simplicity**: Intuitive navigation with minimal learning curve
- **Efficiency**: Quick access to key features with minimal taps/clicks
- **Transparency**: Clear communication of order status, payment flow, and timeline progress
- **Feedback**: Immediate visual and haptic feedback for all user actions
- **Personalization**: Tailored experience based on user preferences and history
- **Accessibility**: Inclusive design for users of all abilities
- **Engagement**: Animated elements that create emotional connection and enhance brand identity

### 8.4 Brand Identity
- **Logo**: Modern, food-related icon with'DineQR' wordmark
- **Tagline**: 'Your Culinary Journey Starts Here' or 'Smart Dining, Simplified'
- **Voice**: Professional yet friendly, informative yet conversational
- **Values**: Innovation, quality, customer satisfaction, transparency