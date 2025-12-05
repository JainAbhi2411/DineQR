# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Add-On Order Feature)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced database-driven portion selection UI featuring Full Portion as default (original item price) and additional price variants stored in database with custom names and prices, AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, personalized restaurant dashboard for quick reordering, complete staff management with attendance tracking and performance analytics, advanced marketing and promotions system with campaign management, comprehensive settings module for restaurant configuration with automatic currency and timezone application across the entire platform, restaurant type classification (Veg/Non-Veg/Both) with prominent display in browse restaurants and menu pages, QR code scanning functionality exclusively available on mobile devices, fully functional sidebar navigation with complete features for all menu items including browse restaurants functionality, real-time synchronization of menu updates and table updates to customer dashboards without page refresh, **and Add-On Order feature allowing customers to add items to their active order without creating a new order or bill** - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface. All data displayed across the platform is real-time and dynamically calculated from the live database.

## 2. Advanced Authentication System

### 2.1 Multi-Level User Authentication

**User Roles**:
- **Restaurant Owner**: Full administrative access to restaurant management, menu, orders, staff, inventory, analytics, settings
- **Waiter/Agent**: Access to assigned orders, customer communication, order status updates, table management\n- **Customer**: Access to menu browsing, ordering, order tracking, chat with restaurant, payment, order history, browse previously scanned restaurants

**Authentication Flow**:
1. **Landing Page**: Welcome screen with 'Sign In' and 'Sign Up' buttons
2. **Sign Up Options**:
   - Email/Password registration with role selection (Owner/Waiter/Customer)\n   - Google OAuth integration (using OSS Google login method)
   - Phone number OTP verification
3. **Sign In Options**:
   - Email/Password login
   - Google OAuth login (using OSS Google login method)
   - Phone number OTP login
4. **Role-Based Conditional Rendering**:
   - After successful authentication, system identifies user role from database
   - **Owner**: Redirected to Owner Dashboard
   - **Waiter**: Redirected to Waiter Dashboard
   - **Customer**: Redirected to Customer Home
5. **Session Management**: JWT token-based authentication, automatic token refresh, secure logout

### 2.2 Password Recovery & Account Security
- Forgot password flow with email/SMS OTP verification
- Two-factor authentication (optional for owners)
- Account activity logs\n- Device management (view and revoke active sessions)

---

## 3. Enhanced Core Features

### 3.1 Advanced Restaurant Owner Features

#### 3.1.1 Owner Home Screen with Zomato-Style Layout and Real-Time Data Integration

**Overview**:
The Owner Home Screen serves as the central command center, displaying real-time business metrics, order status, revenue analytics, and quick access to all management functions.\n
**Layout Structure**:
\n**A. Top Navigation Bar**\n- Restaurant logo and name (left)\n- Search bar (center)
- Notification bell icon with real-time badge count (right)
- User profile dropdown (right)

**B. Sidebar Navigation (Collapsible)**
- **Dashboard** (home icon)\n- **Menu Management** (utensils icon)
- **Orders** (clipboard icon)
- **Inventory** (box icon)
- **QR Codes** (qr-code icon)
- **Staff** (users icon)
- **Analytics** (chart icon)
- **Marketing** (megaphone icon)
- **Payments** (credit-card icon)
- **Chat** (message icon)
- **Settings** (gear icon)
\n**C. Main Dashboard Content Area**
\n**Top Metrics Cards Row**:
1. Today's Revenue Card
2. Active Orders Card
3. Total Orders Today Card
4. Customer Satisfaction Card
\n**Recent Orders Section**:
- Display last 5 orders with real-time updates
- Quick action buttons\n\n**Quick Actions Section**:
- Grid of6 quick action buttons
\n**Sales Analytics Chart**:
- Interactive chart showing revenue trends\n
**Popular Menu Items Section**:
- Top 5 selling items

**D. Real-Time Notification System**
- Notification bell with badge count
- Dropdown panel with recent notifications
- WebSocket-based instant updates

---

#### 3.1.2 Advanced Menu Management System with Database-Driven Portion Selection and Real-Time Customer Synchronization

**Overview**:
Comprehensive menu management interface with database-driven portion selection featuring Full Portion as default and additional price variants.\n
**Key Features**:

**A. Menu Item Management Interface**
- Action buttons for adding items and viewing menu
- Menu categories section
- Menu items grid/list view
\n**B. Add/Edit Menu Item Modal with Database-Driven Portion Selection**
- Basic Information Tab
- Pricing & Portions Tab (Full Portion as default, optional additional variants)
- Inventory & Availability Tab
- Additional Details Tab
\n**C. Zomato-Style Menu View**
- Full-screen menu display
- Category navigation
- Item cards with portion indicators
\n**D. Bulk Actions**
- Select multiple items for bulk operations
\n**E. Menu Analytics**
- Most ordered items
- Revenue by category and portion type
\n**F. Category Management with Real-Time Synchronization**
- Add/edit/delete categories with instant sync
\n---

#### 3.1.3 Advanced Inventory Management\n
**Overview**:
Complete inventory tracking system with real-time stock monitoring and alerts.\n
**Key Features**:\n- Inventory Dashboard\n- Add/Edit Inventory Item
- Stock Adjustment\n- Low Stock Alerts
- Inventory Reports
- Supplier Management

---

#### 3.1.4 Enhanced QR Code Management with Real-Time Table Synchronization

**Overview**:
Generate and manage QR codes for tables with real-time synchronization.\n
**Key Features**:\n- QR Code Dashboard
- Generate QR Code
- QR Code Actions (view, edit, download, print, activate/deactivate, delete)
- QR Code Analytics
- Bulk QR Code Generation
\n---

#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards and Real-Time Auto-Refresh

**Overview**:\nCentralized order management interface with real-time updates and detailed order information.

**Key Features**:
\n**A. Order Dashboard Layout**
- Top filters and search\n- Order cards grid
\n**B. Enhanced Order Card Design**
- Card header with order ID, timestamp, status badge
- Card body with customer info, order items (with portion names), order total, assigned waiter
- Card footer with action buttons

**C. Real-Time Auto-Refresh & Notifications**
- WebSocket integration for instant updates
- New order notifications
- Order status updates
- Timeline auto-updates

**D. Order Details Modal**
- Order summary, items, timeline, payment info, waiter details, customer communication, actions

**E. Bulk Order Actions**
- Select multiple orders for bulk operations
\n**F. Order Analytics**
- Average preparation time, orders by status, peak times, revenue analysis

---
\n#### 3.1.6 Enhanced Payment Management for Restaurant Owners

**Overview**:
Comprehensive payment tracking and management system.\n
**Key Features**:\n- Payment Dashboard
- Payment Details Modal
- Refund Processing
- Payment Method Analytics
- Financial Reports
- Payment Settings

---
\n#### 3.1.7Waiter/Agent Assignment System\n
**Overview**:
Automatic and manual waiter assignment with performance tracking.

**Key Features**:
- Waiter Management Dashboard
- Automatic Assignment
- Manual Assignment
- Waiter Performance Tracking
- Waiter Communication
\n---

#### 3.1.8 Real-Time Communication Hub

**Overview**:\nCentralized messaging system for communication between owner, waiters, and customers.

**Key Features**:
- Chat Dashboard
- Real-Time Messaging
- Broadcast Messages
- Quick Replies
- Notification Settings

---
\n#### 3.1.9 Advanced Analytics & Reports with Real-Time Data\n
**Overview**:
Comprehensive analytics dashboard with real-time data visualization.

**Key Features**:
- Analytics Dashboard (revenue, orders, menu, customer, staff analytics)
- Custom Reports
- Predictive Analytics
\n---

#### 3.1.10 Complete Staff Management System

**Overview**:
Comprehensive staff management module.\n
**Key Features**:\n- Staff Dashboard
- Add/Edit Staff Member
- Attendance Tracking
- Leave Management
- Shift Scheduling
- Performance Analytics\n- Payroll Management
- Staff Communication

---
\n#### 3.1.11 Complete Marketing & Promotions System

**Overview**:
Advanced marketing module for campaigns and promotions.

**Key Features**:
- Marketing Dashboard
- Create Promotion Campaign
- Discount Code Management
- Loyalty Program\n- Referral Program
- Campaign Analytics
- Customer Engagement

---
\n#### 3.1.12 Complete Settings Module with Auto-Application\n
**Overview**:
Comprehensive settings module for restaurant configuration.

**Key Features**:
- Settings Dashboard
- Restaurant Profile (including restaurant type: Veg/Non-Veg/Both)
- Operational Settings\n- Payment Settings
- Notification Settings
- User Preferences
- Currency & Timezone (with auto-application system-wide)
- Security Settings
- Integrations
- System Settings

---
\n### 3.2 Enhanced Customer Features with Real-Time Synchronization and Database-Driven Portion Selection

#### 3.2.1 Customer Home Screen with Complete Sidebar Functionality and Real-Time Updates

**Overview**:\nCustomer-facing home screen with access to all features and real-time synchronization.

**Layout Structure**:

**A. Top Navigation Bar**
- DineQR logo\n- Search bar
- Notification bell\n- User profile icon

**B. Sidebar Navigation (Fully Functional)**
- Home\n- Browse Restaurants
- Active Orders
- Order History
- Favorites
- Loyalty & Rewards
- Profile
- Settings
- Help & Support

**C. Main Dashboard Content Area**
- Welcome banner
- Active orders section
- Recently scanned restaurants
- Recommended items
- Promotions & offers
\n**D. Real-Time WebSocket Connection**
- Persistent connection for instant updates
\n---

#### 3.2.2 Browse Restaurants with Restaurant Type Display and Real-Time Menu Updates

**Overview**:
Dedicated page displaying previously scanned restaurants with search and filter functionality.

**Key Features**:
- Restaurant list layout with search bar, filter options (including restaurant type), restaurant cards grid
- Restaurant details\n- Empty state\n- Real-time menu synchronization
\n---

#### 3.2.3 QR Code Scanning & Menu Access (Mobile-Only Feature with Restaurant Type Display and Database-Driven Portion Selection)

**Overview**:
Customers scan QR codes to access digital menu. QR scanning is mobile-only.\n
**Key Features**:\n\n**A. QR Code Scanner (Mobile-Only)**
- 'Scan QR Code' button visible only on mobile devices
- Camera interface for scanning
- Error handling for desktop access

**B. Digital Menu Display**
- Menu header with restaurant name and type badge
- Menu layout with categories and items
- Real-time menu synchronization

**C. Item Details Modal with Database-Driven Portion Selection**
- Large item image\n- Item details
- Portion selection section (Full Portion as default, additional variants from database)
- Quantity selector
- Price summary
- Action buttons

**D. Cart Management**
- Floating cart icon
- Cart sidebar with item list (showing selected portions)
- Subtotal, taxes, total
- Proceed to checkout button

---
\n#### 3.2.4 Complete Order Placement & Checkout Flow with Table Number Entry and Database-Driven Portion Display

**Overview**:\nStreamlined checkout process with customer information collection, promo codes, payment options, and order confirmation.

**STEP 1: Cart Review & Proceed to Checkout**
- Cart sidebar/page with item list (showing portion names), price breakdown, action buttons
\n**STEP 2: Checkout Page - Customer Information & Order Details**
- Customer information section
- Order type & delivery details (with table number entry logic and real-time table synchronization)
- Promo code section
- Order summary (sticky on desktop, showing portion names)\n- 'Proceed to Payment' button

**STEP 3: Payment Page - Payment Method Selection & Processing**
- Payment method selection (Cash, Card, UPI, Wallet)
- Order summary\n- Action buttons
- Payment processing flow

**STEP 4: Order Confirmation Page**
- Success message
- Order details card (including table number and portion names)
- Order summary
- Action buttons
- Additional information\n- Post-order actions\n
**STEP 5: Transition to Order Tracking**
- Automatic redirect or manual navigation\n- Order tracking page\n\n**Additional Checkout Features**:
- Guest checkout\n- Saved addresses & payment methods
- Order modifications
- Accessibility & UX enhancements
- Security measures

---
\n#### 3.2.5 Real-Time Order Tracking\n
**Overview**:
Customers track orders in real-time with automatic status updates.\n
**Key Features**:\n- Order tracking page with order details, timeline, estimated time, real-time updates
- Chat with restaurant\n\n---

#### 3.2.6 Order History & Reordering\n
**Overview**:
View past orders with detailed information and reorder functionality.
\n**Key Features**:
- Order history page with order list, search & filter\n- Order details modal
- Reorder functionality (with portion names)\n\n---

#### 3.2.7 Favorites & Saved Items

**Overview**:\nSave favorite menu items and restaurants.\n
**Key Features**:\n- Favorites page with tabs for items and restaurants
- Add to favorites\n\n---

#### 3.2.8 Loyalty & Rewards\n
**Overview**:
View loyalty points and redeem rewards.

**Key Features**:
- Loyalty dashboard with points balance, rewards catalog, points history
- Referral program

---\n
#### 3.2.9 Profile & Settings

**Overview**:
Manage customer profile and app preferences.

**Key Features**:
- Profile page with profile information, change password, delete account
- Settings page with notification preferences, language, theme, privacy settings

---
\n#### 3.2.10 Help & Support

**Overview**:
Access help resources and contact support.

**Key Features**:
- Help center with FAQs, contact support, live chat
- Feedback\n
---

#### 3.2.11 Add-On Order Feature (NEW)

**Overview**:\nAllows customers to add items to their active order without creating a new order or generating a separate bill. This feature solves the scenario where a customer has already placed an order (e.g., dal fry, paneer masala, 2 sada roti) and wants to add more items (e.g., 1 more roti) to the same order instead of creating a new order.
\n**Key Features**:
\n**A. Active Order Detection**
\n- **System Logic**:
  - When customer opens menu or cart, system checks if customer has an active order for the current table/session
  - Active order defined as: Order status is 'Pending', 'Accepted', or 'Preparing' (not 'Ready', 'Completed', or 'Cancelled')
  - If active order exists, display 'Add-On Order' option prominently

**B. Add-On Order UI**
\n- **Menu Page**:
  - Display banner at top of menu page: 'You have an active order (#ORD-1234). Add more items to your current order.' (neon cyan background, white text)
  - Banner includes: Order ID, current order status badge, 'View Order' link (opens order details modal)
  - When customer adds items to cart, system automatically tags them as add-on items

- **Cart Page**:
  - Cart displays two sections:
    1. **Current Order Items** (greyed out, read-only):
       - Heading: 'Current Order (#ORD-1234)' with status badge
       - List of items already ordered with portion names and quantities
       - Subtotal for current order
       - Note: 'These items are already being prepared'\n    2. **Add-On Items** (editable):
       - Heading: 'Add-On Items' (neon magenta color)
       - List of new items being added with portion selection and quantity controls
       - Subtotal for add-on items
       - Option to edit quantities, change portions, or remove add-on items
  - **Total Price Breakdown**:
    - Current Order Subtotal: $XX.XX
    - Add-On Items Subtotal: $XX.XX
    - Taxes (on add-on items): $X.XX
    - **Grand Total (Combined)**: $XX.XX (bold, large font)
  - **Action Buttons**:
    - 'Continue Shopping' button (returns to menu)
    - 'Add to Current Order' button (primary, neon gradient)
\n**C. Add-On Order Checkout Flow**

- **Simplified Checkout**:
  - When customer clicks 'Add to Current Order', skip full checkout page
  - Display confirmation modal:\n    - Heading: 'Add Items to Order #ORD-1234?'
    - Show add-on items list with portion names and quantities
    - Show add-on subtotal and updated grand total
    - Note: 'These items will be added to your current order. Payment will be combined.'
    - Action buttons:\n      - 'Cancel' (secondary, outline)
      - 'Confirm Add-On' (primary, neon gradient)
\n- **Payment Handling**:
  - **If original order payment status is 'Pending' (not yet paid)**:
    - Add-on items added to order\n    - Grand total updated\n    - Single payment required at end (combined bill)
  - **If original order payment status is 'Paid'**:
    - Add-on items added to order
    - Customer pays only for add-on items (separate payment for add-on)\n    - System generates supplementary bill for add-on items
    - Final e-bill combines both payments with clear breakdown

**D. Add-On Order Confirmation**\n
- **Confirmation Modal**:
  - Success icon (animated checkmark)
  - Heading: 'Items Added to Order #ORD-1234!'
  - Message: 'Your add-on items have been added to your current order. The kitchen will prepare them shortly.'
  - Show updated order summary:\n    - Original items with portion names
    - Add-on items with portion names (highlighted with'NEW' badge)
    - Updated grand total
  - Action buttons:
    - 'Track Order' (navigates to order tracking page)
    - 'Back to Menu' (returns to menu)\n
**E. Real-Time Notifications**

- **Customer Notification**:
  - Toast notification: 'Add-on items added to Order #ORD-1234'\n  - Order tracking page updates automatically to show add-on items in timeline
\n- **Restaurant Owner Notification**:
  - Real-time notification: 'Add-on items added to Order #ORD-1234 (Table X)'
  - Notification bell badge increments\n  - Order card in owner dashboard updates to show add-on items with'ADD-ON' badge
  - Order details modal displays:\n    - Original items section
    - Add-on items section (highlighted with neon border and 'ADD-ON' label)
    - Updated grand total\n
- **Waiter Notification**:\n  - If waiter assigned to order, receive notification: 'Add-on items added to Order #ORD-1234'
  - Waiter dashboard updates order card with add-on indicator
\n**F. Order Timeline Update**

- **Timeline Entry**:
  - New timeline step added: 'Add-On Items Added' with timestamp
  - Timeline shows:
    - Order Placed (original items)
    - Order Accepted\n    - Preparing (original items)
    - **Add-On Items Added** (new step, highlighted)\n    - Preparing (add-on items)
    - Ready (all items)
    - Completed\n\n**G. Kitchen Display System (KDS) Integration**

- **KDS Update**:
  - Add-on items appear in KDS with 'ADD-ON' label and order ID
  - Kitchen staff can see which items are add-ons to existing order
  - Add-on items grouped with original order for efficient preparation

**H. E-Bill Generation**

- **Combined E-Bill**:
  - Single e-bill generated at end with clear sections:\n    1. **Original Order Items**:\n       - List of original items with portion names, quantities, prices
       - Subtotal for original items
    2. **Add-On Items**:
       - List of add-on items with portion names, quantities, prices
       - Subtotal for add-on items
    3. **Total Breakdown**:
       - Combined subtotal\n       - Taxes\n       - Discounts (if applicable)
       - Grand Total
  - E-bill clearly indicates add-on items with label or different formatting
  - Download as PDF or send via email/SMS

**I. Add-On Order Restrictions**

- **Restrictions**:
  - Add-on feature available only if active order status is 'Pending', 'Accepted', or 'Preparing'
  - If order status is 'Ready' or 'Completed', add-on not allowed (customer must place new order)
  - If order is 'Cancelled', add-on not allowed\n  - Maximum add-on limit: Customer can add items up to 3 times per order (configurable in settings)
  - If limit reached, display message: 'You have reached the maximum add-on limit for this order. Please place a new order for additional items.'

**J. Add-On Order Analytics**

- **Owner Analytics Dashboard**:
  - New metric card: 'Add-On Orders Today' (count and percentage of total orders)
  - Chart:'Add-On Items Revenue' (revenue generated from add-on items)
  - Table: 'Most Added-On Items' (items frequently added as add-ons)
  - Insight: Average add-on value per order

**K. Settings Configuration**

- **Owner Settings**:
  - Toggle: 'Enable Add-On Orders' (on/off)
  - Input: 'Maximum Add-Ons Per Order' (default: 3)
  - Toggle: 'Allow Add-Ons After Payment' (if original order already paid, allow add-ons with separate payment)
\n---

### 3.3 Enhanced Waiter/Agent Features

#### 3.3.1 Waiter Dashboard\n
**Overview**:
Waiter-facing dashboard with assigned orders, tables, and tasks.

**Key Features**:
- Dashboard layout with metrics, assigned orders, active tables\n- Order management (view details, update status)
- Communication (chat with owner and customer)
- Notifications\n\n---

#### 3.3.2 Waiter Profile & Attendance

**Overview**:\nWaiter profile, clock in/out, and attendance history.

**Key Features**:
- Profile page\n- Attendance (clock in/out, history)
- Leave requests
\n---

## 4. Complete User Flows

### 4.1 Restaurant Owner Flow

1. Sign Up/Login → Owner Dashboard
2. Setup Restaurant Profile (including restaurant type)\n3. Add Menu Items with Database-Driven Portions
4. Edit/Delete Menu Items (real-time sync to customers)
5. Add/Edit/Delete Categories (real-time sync)\n6. Generate/Edit/Delete QR Codes (real-time table sync)
7. Receive Order (including add-on orders)
8. Assign Waiter\n9. Track Order\n10. Manage Staff
11. Create Promotion\n12. View Analytics (including add-on order analytics)
13. Configure Settings (including add-on order settings)
\n### 4.2 Customer Flow (Complete Checkout Flow with Add-On Order Feature)

1. Sign Up/Login → Customer Home
2. Scan QR Code (Mobile-Only) → Menu displayed with restaurant type badge → Table number auto-detected
3. Browse Menu → Real-time menu updates\n4. Select Item with Database-Driven Portion → Choose portion (Full Portion or additional variant) → Add to Cart
5. Review Cart → View items with portion names → Edit quantities/portions → Proceed to Checkout
6. Checkout Page → Enter customer details → Select order type (with table number entry if needed) → Apply promo code → Review order summary → Proceed to Payment\n7. Payment Page → Select payment method → Enter payment details → Place Order & Pay
8. Order Confirmation → View order details with portion names → Download receipt → Track Order
9. **Add-On Order Flow (NEW)**:
   - Customer has active order (#ORD-1234) with status 'Preparing'
   - Customer opens menu → Banner displays: 'You have an active order. Add more items to your current order.'
   - Customer selects additional item (e.g., 1 sada roti) with portion selection → Add to Cart
   - Cart displays two sections:'Current Order Items' (read-only) and 'Add-On Items' (editable)
   - Customer reviews add-on items and updated grand total → Click 'Add to Current Order'
   - Confirmation modal appears: 'Add Items to Order #ORD-1234?' → Customer clicks 'Confirm Add-On'\n   - System adds items to existing order → Updates grand total\n   - Confirmation message: 'Items Added to Order #ORD-1234!'
   - Real-time notifications sent to owner and waiter
   - Order tracking page updates to show add-on items in timeline
   - At end of meal, single combined e-bill generated with original and add-on items
10. Track Order → Real-time updates\n11. Receive Order → Rate Order\n12. Browse Restaurants → View previously scanned restaurants → Select restaurant → View menu → Add items with portions → Add-On to active order if applicable → Complete order
13. Reorder → Previous portion names auto-selected
14. View Loyalty Points\n\n### 4.3 Waiter Flow

1. Login → Waiter Dashboard
2. Clock In\n3. View Assigned Orders (including add-on orders with'ADD-ON' indicator)
4. View Order Details (with portion names and add-on items highlighted)
5. Update Order Status\n6. Communicate with customer or owner
7. Clock Out
\n---

## 5. Advanced Design System with Futuristic UI Specifications

### 5.1 Overall Aesthetic

- **Theme**: Dark-themed futuristic interface with neon accents
- **Color Scheme**: Deep charcoal grey or dark blue backgrounds with electric cyan, vibrant magenta, and electric blue accents
- **Visual Effects**: Glassmorphism, smooth gradients, multi-layered UI, subtle shadows with neon glow,3D effects
\n### 5.2 Typography

- **Headings**: Orbitron Bold or Exo 2 Bold\n- **Body Text**: Poppins Regular or Inter Regular
- **Buttons & Labels**: Orbitron Medium\n- **Font Colors**: White or light grey on dark backgrounds, neon colors for emphasis

### 5.3 Color Palette

- **Background**: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A)
- **Primary Accent**: Electric cyan (#00F0FF)\n- **Secondary Accent**: Vibrant magenta (#FF006E)
- **Tertiary Accent**: Electric blue (#3A86FF)
- **Success**: Neon green (#39FF14)
- **Warning**: Neon yellow (#FFFF00)
- **Error**: Neon red (#FF073A)
- **Text**: White (#FFFFFF) or light grey (#E0E0E0)
- **Restaurant Type Badges**: Veg (bright green #39FF14), Non-Veg (bright red #FF073A), Both (bright orange #FF8C00)
- **Portion Badges**: Full Portion (vibrant magenta #FF006E), Additional Variants (electric cyan #00F0FF or electric blue #3A86FF)\n- **Add-On Indicator**: Neon yellow (#FFFF00) badge with'ADD-ON' text

### 5.4 UI Components

- **Cards**: Glassmorphism effect with neon gradient borders, rounded corners, subtle shadows with neon glow
- **Buttons**: Neon gradient backgrounds, rounded corners, bold text, hover effects
- **Inputs**: Dark background with neon border on focus\n- **Badges**: Small circular or pill-shaped elements with neon background
- **Portion Selection Cards**: Large card-style radio buttons with glassmorphism, neon borders, checkmark icons
- **Add-On Order Banner**: Neon cyan background with white text, prominent display at top of menu page
- **Add-On Items Section**: Highlighted with neon magenta border and 'ADD-ON' label in cart and order details
\n### 5.5 Animations

- **Slide-in**: New order cards, menu items, add-on items slide in with bounce animation
- **Pulsing Glow**: Notification badges, updated items, add-on indicators have pulsing glow
- **Shake**: Notification bell shakes on new notification
- **Ripple Effect**: Button clicks trigger ripple effect\n- **Smooth Transitions**: All state changes use ease-in-out transitions
- **Loading Animations**: Neon spinners or skeleton screens
- **Page Transitions**: Smooth fade or slide transitions
- **Real-Time Update Animations**: New items slide in, edited items highlight, deleted items fade out, add-on items appear with highlight animation
- **Portion Selection Animations**: Selected cards scale up and glow\n
### 5.6 Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices first
- **Breakpoints**: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- **Collapsible Sidebar**: Sidebar collapses to hamburger menu on mobile
- **Adaptive Grids**: Grid layouts adjust column count based on screen size
- **Touch-Friendly**: Buttons and interactive elements have minimum44px height
- **Optimized Images**: Responsive images with appropriate sizes
- **Portion Selection on Mobile**: Portion cards stack vertically for easy thumb navigation
- **Add-On Order UI on Mobile**: Banner and cart sections optimized for mobile view

### 5.7 Accessibility

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Sufficient contrast for readability
- **Focus Indicators**: Clear focus outlines on interactive elements
- **Portion Selection Accessibility**: Clear focus states, keyboard navigation, screen reader labels
- **Add-On Order Accessibility**: Banner and sections have clear labels for screen readers
\n---

## 6. Technical Considerations

### 6.1 Technology Stack

- **Frontend**: React.js or Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js with Express.js or Django, WebSocket (Socket.io)
- **Database**: PostgreSQL or MongoDB (with restaurant_type field, menu_items table with price field, price_variants table, **orders table with add_on_items field to store add-on items separately**)
- **Authentication**: JWT tokens, OAuth 2.0 (OSS Google login), OTP via Twilio or Firebase
- **Payment Gateway**: Stripe, Razorpay, or PayPal\n- **Cloud Storage**: AWS S3 or Cloudinary\n- **Hosting**: AWS, Google Cloud, or Vercel
- **Device Detection**: User agent parsing or screen size detection

### 6.2 Real-Time Features with WebSocket Implementation

- **WebSocket Connection**: Persistent connection for instant updates (orders, notifications, chat, menu, categories, tables, **add-on orders**)
- **Event-Driven Architecture**: Backend emits events, frontend listens and updates UI
- **Optimistic UI Updates**: UI updates immediately, syncs with backend in background
- **Real-Time Menu Synchronization**: Events for item and category changes
- **Real-Time Table Synchronization**: Events for table changes
- **Real-Time Add-On Order Updates**: Events for add-on items added to orders
- **Event Payload Structure**: Includes restaurant_id, item_id, order_id, add_on_items, etc.

### 6.3 Security\n
- **Data Encryption**: HTTPS, encrypted storage\n- **Input Validation**: Server-side validation\n- **Rate Limiting**: Prevent abuse\n- **Secure Authentication**: Password hashing, secure token storage
\n### 6.4 Performance Optimization

- **Lazy Loading**: Load images and components on demand
- **Code Splitting**: Split JavaScript bundles\n- **Caching**: Cache static assets and API responses
- **Database Indexing**: Optimize queries with proper indexing (including index on add_on_items field)
- **CDN**: Use CDN for static assets
- **WebSocket Connection Management**: Efficient connection pooling, automatic reconnection, heartbeat mechanism

### 6.5 Scalability
\n- **Microservices Architecture**: Separate services for orders, payments, notifications, menu management
- **Load Balancing**: Distribute traffic across servers
- **Database Sharding**: Partition database for horizontal scaling
- **Auto-Scaling**: Automatically scale resources\n- **WebSocket Scaling**: Use Redis pub/sub for broadcasting events

---

## 7. Future Enhancements

- AI-Powered Recommendations (including portion type recommendations)
- Voice Ordering with portion selection
- Augmented Reality Menu with portion size visualization
- Multi-Language Support
- Advanced Analytics (including add-on order analytics)
- Integration with Delivery Platforms
- Table Reservation System
- Kitchen Display System (KDS) with add-on item indicators
- Customer Feedback Analysis
- Gamification\n\n---

## 8. Design Style\n
**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan, vibrant magenta, electric blue), glassmorphism effects, smooth gradients, multi-layered UI, subtle shadows, and 3D effects.

**Typography**: Orbitron Bold/Exo 2 Bold for headings, Poppins Regular/Inter Regular for body text, Orbitron Medium for buttons. Font colors: White or light grey on dark backgrounds, neon colors for emphasis.

**Color Palette**: Deep charcoal grey or dark blue backgrounds, electric cyan, vibrant magenta, electric blue accents, neon green (success), neon yellow (warning), neon red (error), white or light grey text. Restaurant type badges: Veg (bright green), Non-Veg (bright red), Both (bright orange). Portion badges: Full Portion (vibrant magenta), Additional Variants (electric cyan or electric blue). Add-On indicator: Neon yellow badge.\n
**UI Components**: Glassmorphism cards with neon gradient borders, futuristic buttons with neon gradients and hover effects, animated counters, smooth transitions, interactive elements with neon borders and glow. Restaurant type badges are pill-shaped with rounded corners, bold text, and icon. Portion badges are pill-shaped with rounded corners, medium text. Portion selection cards feature large card-style radio buttons with glassmorphism, neon borders, checkmark icons. Add-On order banner has neon cyan background with white text. Add-On items section highlighted with neon magenta border and 'ADD-ON' label.

**Animations**: Slide-in animations for new orders, menu items, and add-on items, pulsing glow for notification badges and updated items, shake animation for notification bell, ripple effect for button clicks, smooth page transitions, loading animations with neon spinners, real-time update animations (new items slide in, edited items highlight, deleted items fade out, add-on items appear with highlight), portion selection animations (selected cards scale up and glow).

**Responsive Design**: Mobile-first approach, collapsible sidebar on mobile, adaptive grid layouts, touch-friendly buttons and inputs, optimized for all screen sizes. QR code scanning feature exclusively available on mobile devices. Portion selection cards stack vertically on mobile. Add-On order UI optimized for mobile view.

---

**End of Requirements Document**