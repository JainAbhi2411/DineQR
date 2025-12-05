# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Waiter Assignment for Every Order)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced database-driven portion selection UI featuring Full Portion as default (original item price) and additional price variants stored in database with custom names and prices, AI-powered recommendations, real-time chat system, **mandatory waiter assignment for every order by restaurant owner**, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, personalized restaurant dashboard for quick reordering, complete staff management with attendance tracking and performance analytics, advanced marketing and promotions system with campaign management, comprehensive settings module for restaurant configuration with automatic currency and timezone application across the entire platform, restaurant type classification (Veg/Non-Veg/Both) with prominent display in browse restaurants and menu pages, QR code scanning functionality exclusively available on mobile devices, fully functional sidebar navigation with complete features for all menu items including browse restaurants functionality, real-time synchronization of menu updates and table updates to customer dashboards without page refresh, and Add-On Order feature allowing customers to add items to their active order without creating a new order or bill - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface. All data displayed across the platform is real-time and dynamically calculated from the live database.\n
## 2. Advanced Authentication System

### 2.1 Multi-Level User Authentication

**User Roles**:
- **Restaurant Owner**: Full administrative access to restaurant management, menu, orders, staff, inventory, analytics, settings, **mandatory waiter assignment for all orders**
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
\n**A. Top Navigation Bar**
- Restaurant logo and name (left)\n- Search bar (center)
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
\n**Top Metrics Cards Row**:\n1. Today's Revenue Card
2. Active Orders Card
3. Total Orders Today Card
4. Customer Satisfaction Card
\n**Recent Orders Section**:
- Display last 5 orders with real-time updates
- **Each order card displays assigned waiter name and avatar**
- Quick action buttons\n\n**Quick Actions Section**:
- Grid of 6 quick action buttons
\n**Sales Analytics Chart**:
- Interactive chart showing revenue trends\n\n**Popular Menu Items Section**:
- Top 5 selling items
\n**D. Real-Time Notification System**
- Notification bell with badge count
- Dropdown panel with recent notifications
- WebSocket-based instant updates
- **New notification type: 'New Order Awaiting Waiter Assignment' (highlighted in neon yellow)**

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

#### 3.1.5 Advanced Order Management Dashboard with Mandatory Waiter Assignment and Real-Time Auto-Refresh

**Overview**:\nCentralized order management interface with real-time updates, detailed order information, and **mandatory waiter assignment for every order**.

**Key Features**:

**A. Order Dashboard Layout**
- Top filters and search\n- Order cards grid
- **Filter option: 'Unassigned Orders' (shows orders without waiter assignment, highlighted in neon yellow)**
\n**B. Enhanced Order Card Design**
- Card header with order ID, timestamp, status badge, **waiter assignment status badge**
- Card body with customer info, order items (with portion names), order total, **assigned waiter info (name, avatar, or'Unassigned' badge in neon yellow)**
- Card footer with action buttons including **'Assign Waiter' button (primary, neon gradient) for unassigned orders**

**C. Real-Time Auto-Refresh & Notifications**
- WebSocket integration for instant updates
- **New order notifications with'Assign Waiter' prompt**
- Order status updates\n- Timeline auto-updates
- **Waiter assignment notifications**

**D. Order Details Modal with Waiter Assignment**
- Order summary, items, timeline, payment info, **waiter assignment section**, customer communication, actions
- **Waiter Assignment Section**:\n  - **If Unassigned**:
    - Heading: 'Assign Waiter' (neon magenta color)
    - Dropdown: List of available waiters with name, avatar, current workload (number of active orders)
    - Button: 'Assign' (primary, neon gradient)
    - Note: 'Please assign a waiter to this order to proceed.'
  - **If Assigned**:
    - Heading: 'Assigned Waiter'\n    - Display: Waiter name, avatar, contact info\n    - Button: 'Reassign Waiter' (secondary, outline)
    - Timeline entry: 'Waiter Assigned' with timestamp and waiter name
\n**E. Waiter Assignment Modal**
\n- **Triggered by**: Clicking 'Assign Waiter' button on order card or in order details modal
- **Modal Layout**:
  - Heading: 'Assign Waiter to Order #ORD-1234'
  - Subheading: 'Select a waiter to handle this order'
  - **Waiter Selection List**:
    - Display all active waiters in card format
    - Each card shows:\n      - Waiter avatar (circular, neon border)
      - Waiter name (bold, white text)
      - Current workload: 'X Active Orders' (small text, light grey)
      - Status indicator: 'Available' (neon green) or 'Busy' (neon yellow) based on workload threshold
      - Radio button for selection
    - Cards arranged in grid (2-3 columns on desktop, 1 column on mobile)
    - Selected card highlights with neon gradient border and scale animation
  - **Search & Filter**:
    - Search bar: 'Search waiter by name'\n    - Filter dropdown: 'All Waiters', 'Available', 'Busy'
  - **Action Buttons**:
    - 'Cancel' (secondary, outline)
    - 'Assign Waiter' (primary, neon gradient, disabled until waiter selected)
  - **Empty State**: If no waiters available, display message: 'No waiters available. Please add staff members in Staff Management.'

**F. Waiter Assignment Confirmation**
\n- **After Assignment**:
  - Success toast notification: 'Waiter [Name] assigned to Order #ORD-1234'
  - Order card updates to show assigned waiter info
  - Order details modal updates waiter assignment section
  - Timeline adds new entry: 'Waiter Assigned: [Name]' with timestamp
  - **Real-time notification sent to assigned waiter**: 'You have been assigned to Order #ORD-1234 (Table X)'
  - **Real-time notification sent to customer**: 'Your order has been assigned to [Waiter Name]. They will assist you shortly.'

**G. Waiter Reassignment**

- **Triggered by**: Clicking 'Reassign Waiter' button in order details modal
- **Reassignment Modal**:
  - Similar to assignment modal\n  - Heading: 'Reassign Waiter for Order #ORD-1234'
  - Display current waiter info at top with label 'Currently Assigned'\n  - Waiter selection list excludes current waiter
  - Confirmation prompt: 'Are you sure you want to reassign this order? The current waiter will be notified.'
- **After Reassignment**:
  - Success toast: 'Order #ORD-1234 reassigned to [New Waiter Name]'
  - Timeline adds entry: 'Waiter Reassigned: [Old Name] → [New Name]' with timestamp
  - **Notification to old waiter**: 'Order #ORD-1234 has been reassigned to [New Waiter Name]'
  - **Notification to new waiter**: 'You have been assigned to Order #ORD-1234 (Table X)'
  - **Notification to customer**: 'Your order has been reassigned to [New Waiter Name]'
\n**H. Bulk Order Actions**
- Select multiple orders for bulk operations
\n**I. Order Analytics**
- Average preparation time, orders by status, peak times, revenue analysis, **waiter performance metrics (orders handled, average handling time)**

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
\n#### 3.1.7Waiter/Agent Assignment System (Updated)

**Overview**:\n**Mandatory waiter assignment for every order** with performance tracking and workload management.

**Key Features**:

**A. Waiter Management Dashboard**
- List of all waiters with status (Available/Busy/Offline)
- Current workload for each waiter (number of active orders)
- Performance metrics (orders completed today, average handling time, customer ratings)
- Action buttons: 'Add Waiter', 'View Details', 'Edit', 'Deactivate'\n
**B. Mandatory Assignment for Every Order**
- **System Rule**: Every new order must be assigned a waiter before it can proceed to'Accepted' status
- **Owner Workflow**:
  1. New order arrives → Order status: 'Pending - Awaiting Waiter Assignment'
  2. Owner receives notification: 'New Order #ORD-1234 - Assign Waiter'
  3. Owner opens order details or clicks 'Assign Waiter' on order card
  4. Owner selects waiter from assignment modal
  5. System assigns waiter → Order status changes to 'Pending - Waiter Assigned'
  6. Waiter receives notification and can accept order
- **Unassigned Order Restrictions**:
  - Orders without waiter assignment cannot be marked as 'Accepted' or 'Preparing'
  - Order card displays 'Unassigned' badge in neon yellow
  - Owner dashboard highlights unassigned orders count in metrics card

**C. Automatic Assignment (Optional Feature)**
- **Toggle in Settings**: 'Enable Automatic Waiter Assignment' (on/off)
- **Assignment Logic**:
  - System automatically assigns waiter based on:\n    1. Current workload (assigns to waiter with fewest active orders)
    2. Table proximity (if table location data available)
    3. Waiter availability status\n  - Owner can override automatic assignment and reassign manually
- **Notification**: Owner receives notification: 'Order #ORD-1234 automatically assigned to [Waiter Name]'

**D. Waiter Performance Tracking**
- Orders handled per shift
- Average order handling time
- Customer ratings for assigned orders
- Order completion rate
- Tips received (if applicable)

**E. Waiter Communication**
- Direct chat between owner and waiter
- Broadcast messages to all waiters
- Order-specific communication thread
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
Comprehensive analytics dashboard with real-time data visualization, **including waiter performance analytics**.

**Key Features**:
- Analytics Dashboard (revenue, orders, menu, customer, **staff analytics with waiter performance metrics**)
- Custom Reports
- Predictive Analytics
- **Waiter Performance Reports**: Orders per waiter, average handling time, customer ratings, tips earned
\n---

#### 3.1.10 Complete Staff Management System

**Overview**:
Comprehensive staff management module with **waiter assignment tracking**.

**Key Features**:
- Staff Dashboard (including waiter assignment status and workload)
- Add/Edit Staff Member
- Attendance Tracking
- Leave Management
- Shift Scheduling
- Performance Analytics (including waiter assignment metrics)
- Payroll Management
- Staff Communication

---
\n#### 3.1.11 Complete Marketing & Promotions System
\n**Overview**:
Advanced marketing module for campaigns and promotions.

**Key Features**:
- Marketing Dashboard\n- Create Promotion Campaign
- Discount Code Management
- Loyalty Program\n- Referral Program
- Campaign Analytics
- Customer Engagement

---
\n#### 3.1.12 Complete Settings Module with Auto-Application

**Overview**:\nComprehensive settings module for restaurant configuration, **including waiter assignment settings**.

**Key Features**:
- Settings Dashboard
- Restaurant Profile (including restaurant type: Veg/Non-Veg/Both)
- Operational Settings\n- **Waiter Assignment Settings**:
  - Toggle: 'Enable Automatic Waiter Assignment' (on/off)
  - Input: 'Workload Threshold for Busy Status' (default: 5active orders)
  - Toggle: 'Allow Customer to View Assigned Waiter' (on/off)
  - Toggle: 'Require Waiter Assignment Before Order Acceptance' (on/off, default: on)
- Payment Settings
- Notification Settings\n- User Preferences
- Currency & Timezone (with auto-application system-wide)
- Security Settings
- Integrations\n- System Settings

---
\n### 3.2 Enhanced Customer Features with Real-Time Synchronization and Database-Driven Portion Selection

#### 3.2.1 Customer Home Screen with Complete Sidebar Functionality and Real-Time Updates

**Overview**:\nCustomer-facing home screen with access to all features and real-time synchronization.

**Layout Structure**:

**A. Top Navigation Bar**
- DineQR logo\n- Search bar\n- Notification bell\n- User profile icon
\n**B. Sidebar Navigation (Fully Functional)**
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
- Active orders section (displays assigned waiter info if enabled in settings)
- Recently scanned restaurants
- Recommended items
- Promotions & offers
\n**D. Real-Time WebSocket Connection**
- Persistent connection for instant updates
- **Receives waiter assignment notifications**
\n---

#### 3.2.2 Browse Restaurants with Restaurant Type Display and Real-Time Menu Updates

**Overview**:\nDedicated page displaying previously scanned restaurants with search and filter functionality.

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
\n**B. Digital Menu Display**
- Menu header with restaurant name and type badge
- Menu layout with categories and items
- Real-time menu synchronization
\n**C. Item Details Modal with Database-Driven Portion Selection**
- Large item image\n- Item details
- Portion selection section (Full Portion as default, additional variants from database)
- Quantity selector
- Price summary
- Action buttons\n
**D. Cart Management**
- Floating cart icon
- Cart sidebar with item list (showing selected portions)
- Subtotal, taxes, total
- Proceed to checkout button
\n---

#### 3.2.4 Complete Order Placement & Checkout Flow with Table Number Entry and Database-Driven Portion Display

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
- Order summary
- Action buttons\n- Payment processing flow

**STEP 4: Order Confirmation Page**
- Success message
- Order details card (including table number and portion names, **waiter assignment status:'Your order is being assigned to a waiter'**)
- Order summary
- Action buttons
- Additional information\n- Post-order actions\n
**STEP 5: Transition to Order Tracking**
- Automatic redirect or manual navigation\n- Order tracking page
\n**Additional Checkout Features**:\n- Guest checkout\n- Saved addresses & payment methods
- Order modifications
- Accessibility & UX enhancements
- Security measures

---
\n#### 3.2.5 Real-Time Order Tracking with Waiter Information\n
**Overview**:
Customers track orders in real-time with automatic status updates and **assigned waiter information**.

**Key Features**:
- Order tracking page with order details, timeline, estimated time, real-time updates, **assigned waiter info (if enabled in settings)**
- **Waiter Info Section** (if enabled):
  - Heading: 'Your Waiter'\n  - Display: Waiter name, avatar\n  - Note: '[Waiter Name] is handling your order'
  - Button: 'Chat with Waiter' (opens chat interface)
- **Timeline includes waiter assignment step**: 'Waiter Assigned: [Name]' with timestamp
- Chat with restaurant\n\n---

#### 3.2.6 Order History & Reordering\n
**Overview**:
View past orders with detailed information and reorder functionality.

**Key Features**:
- Order history page with order list, search & filter\n- Order details modal (includes assigned waiter info)
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
\n---

#### 3.2.9 Profile & Settings

**Overview**:
Manage customer profile and app preferences.

**Key Features**:
- Profile page with profile information, change password, delete account
- Settings page with notification preferences, language, theme, privacy settings

---

#### 3.2.10 Help & Support
\n**Overview**:
Access help resources and contact support.

**Key Features**:
- Help center with FAQs, contact support, live chat
- Feedback\n
---

#### 3.2.11 Add-On Order Feature

**Overview**:\nAllows customers to add items to their active order without creating a new order or generating a separate bill.

**Key Features**:
\n**A. Active Order Detection**
- System checks if customer has an active order for the current table/session
- Active order defined as: Order status is 'Pending', 'Accepted', or 'Preparing'
- If active order exists, display 'Add-On Order' option prominently

**B. Add-On Order UI**
- Menu page banner: 'You have an active order (#ORD-1234). Add more items to your current order.'
- Cart displays two sections: 'Current Order Items' (read-only) and 'Add-On Items' (editable)
- Total price breakdown shows combined total
\n**C. Add-On Order Checkout Flow**
- Simplified checkout with confirmation modal
- Payment handling based on original order payment status
\n**D. Add-On Order Confirmation**
- Success message with updated order summary
- Action buttons to track order or return to menu

**E. Real-Time Notifications**
- Customer, owner, and **assigned waiter** receive notifications about add-on items
- **Waiter notification**: 'Add-on items added to Order #ORD-1234 (your assigned order)'

**F. Order Timeline Update**
- New timeline step: 'Add-On Items Added' with timestamp
\n**G. Kitchen Display System (KDS) Integration**
- Add-on items appear in KDS with'ADD-ON' label
\n**H. E-Bill Generation**
- Combined e-bill with original and add-on items sections

**I. Add-On Order Restrictions**
- Available only for active orders (Pending, Accepted, Preparing)\n- Maximum add-on limit: 3 times per order (configurable)

**J. Add-On Order Analytics**
- Owner analytics dashboard includes add-on order metrics

**K. Settings Configuration**
- Toggle: 'Enable Add-On Orders'\n- Input: 'Maximum Add-Ons Per Order'\n- Toggle: 'Allow Add-Ons After Payment'
\n---

### 3.3 Enhanced Waiter/Agent Features\n
#### 3.3.1 Waiter Dashboard with Assigned Orders\n
**Overview**:
Waiter-facing dashboard with **assigned orders**, tables, and tasks.

**Key Features**:
- Dashboard layout with metrics (including'Orders Assigned to You Today'), **assigned orders section (displays only orders assigned to this waiter)**, active tables\n- **Assigned Orders Section**:
  - Heading: 'Your Assigned Orders'
  - Order cards grid showing orders assigned to this waiter
  - Each card displays: Order ID, table number, customer name, order items, order total, status badge, timestamp
  - Action buttons: 'View Details', 'Update Status', 'Chat with Customer'\n  - Real-time updates when new orders assigned or reassigned
- **New Order Notification**:
  - When owner assigns order to waiter, waiter receives notification: 'You have been assigned to Order #ORD-1234 (Table X)'
  - Notification bell badge increments
  - Order card slides into'Assigned Orders' section with animation
- Order management (view details, update status)\n- Communication (chat with owner and customer)
- Notifications (including assignment and reassignment notifications)

---

#### 3.3.2 Waiter Profile & Attendance

**Overview**:\nWaiter profile, clock in/out, and attendance history, **including assignment performance metrics**.

**Key Features**:
- Profile page (includes performance metrics: orders handled, average handling time, customer ratings)\n- Attendance (clock in/out, history)
- Leave requests
\n---

## 4. Complete User Flows

### 4.1 Restaurant Owner Flow (Updated)

1. Sign Up/Login → Owner Dashboard
2. Setup Restaurant Profile (including restaurant type)\n3. Add Menu Items with Database-Driven Portions
4. Edit/Delete Menu Items (real-time sync to customers)
5. Add/Edit/Delete Categories (real-time sync)\n6. Generate/Edit/Delete QR Codes (real-time table sync)
7. **Receive Order → Order status: 'Pending - Awaiting Waiter Assignment'**\n8. **Assign Waiter (Mandatory)**:\n   - Open order details or click 'Assign Waiter' on order card\n   - Select waiter from assignment modal
   - Confirm assignment
   - System updates order status to 'Pending - Waiter Assigned'
   - Waiter and customer receive notifications
9. Track Order\n10. Manage Staff (including waiter assignment tracking)
11. Create Promotion\n12. View Analytics (including waiter performance metrics)
13. Configure Settings (including waiter assignment settings)
\n### 4.2 Customer Flow (Complete Checkout Flow with Add-On Order Feature)

1. Sign Up/Login → Customer Home
2. Scan QR Code (Mobile-Only) → Menu displayed with restaurant type badge → Table number auto-detected
3. Browse Menu → Real-time menu updates\n4. Select Item with Database-Driven Portion → Choose portion → Add to Cart
5. Review Cart → Edit quantities/portions → Proceed to Checkout
6. Checkout Page → Enter customer details → Select order type → Apply promo code → Review order summary → Proceed to Payment\n7. Payment Page → Select payment method → Enter payment details → Place Order & Pay
8. Order Confirmation → View order details → **Notification: 'Your order is being assigned to a waiter'** → Download receipt → Track Order
9. **Receive Notification: 'Your order has been assigned to [Waiter Name]'**\n10. **Add-On Order Flow**:
    - Customer has active order with assigned waiter
    - Customer opens menu → Banner displays add-on option
    - Customer selects additional items → Add to Cart
    - Cart displays current order items and add-on items
    - Customer reviews and confirms add-on\n    - System adds items to existing order
    - **Assigned waiter receives notification about add-on items**
    - Order tracking page updates\n11. Track Order → Real-time updates → **View assigned waiter info (if enabled)**
12. Receive Order → Rate Order (including waiter rating)
13. Browse Restaurants → View previously scanned restaurants → Select restaurant → View menu → Add items → Complete order
14. Reorder → Previous portion names auto-selected
15. View Loyalty Points\n\n### 4.3 Waiter Flow (Updated)

1. Login → Waiter Dashboard
2. Clock In\n3. **Receive Notification: 'You have been assigned to Order #ORD-1234 (Table X)'**
4. **View Assigned Orders (only orders assigned to this waiter)**
5. View Order Details (with portion names and add-on items highlighted)
6. Update Order Status (Accept → Preparing → Ready → Completed)
7. **Receive Notification: 'Add-on items added to Order #ORD-1234 (your assigned order)'**
8. Communicate with customer or owner
9. Clock Out
\n---

## 5. Advanced Design System with Futuristic UI Specifications

### 5.1 Overall Aesthetic\n
- **Theme**: Dark-themed futuristic interface with neon accents
- **Color Scheme**: Deep charcoal grey or dark blue backgrounds with electric cyan, vibrant magenta, and electric blue accents
- **Visual Effects**: Glassmorphism, smooth gradients, multi-layered UI, subtle shadows with neon glow,3D effects
\n### 5.2 Typography

- **Headings**: Orbitron Bold or Exo 2 Bold\n- **Body Text**: Poppins Regular or Inter Regular
- **Buttons & Labels**: Orbitron Medium\n- **Font Colors**: White or light grey on dark backgrounds, neon colors for emphasis

### 5.3 Color Palette

- **Background**: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A)
- **Primary Accent**: Electric cyan (#00F0FF)
- **Secondary Accent**: Vibrant magenta (#FF006E)
- **Tertiary Accent**: Electric blue (#3A86FF)
- **Success**: Neon green (#39FF14)
- **Warning**: Neon yellow (#FFFF00)
- **Error**: Neon red (#FF073A)
- **Text**: White (#FFFFFF) or light grey (#E0E0E0)
- **Restaurant Type Badges**: Veg (bright green #39FF14), Non-Veg (bright red #FF073A), Both (bright orange #FF8C00)
- **Portion Badges**: Full Portion (vibrant magenta #FF006E), Additional Variants (electric cyan #00F0FF or electric blue #3A86FF)\n- **Add-On Indicator**: Neon yellow (#FFFF00) badge with'ADD-ON' text
- **Waiter Assignment Status**: Unassigned (neon yellow #FFFF00), Assigned (neon green #39FF14)\n
### 5.4 UI Components

- **Cards**: Glassmorphism effect with neon gradient borders, rounded corners, subtle shadows with neon glow
- **Buttons**: Neon gradient backgrounds, rounded corners, bold text, hover effects
- **Inputs**: Dark background with neon border on focus\n- **Badges**: Small circular or pill-shaped elements with neon background
- **Portion Selection Cards**: Large card-style radio buttons with glassmorphism, neon borders, checkmark icons
- **Add-On Order Banner**: Neon cyan background with white text, prominent display at top of menu page
- **Add-On Items Section**: Highlighted with neon magenta border and 'ADD-ON' label in cart and order details
- **Waiter Assignment Modal**: Glassmorphism card with neon gradient border, waiter cards with avatar, name, workload, status indicator
- **Waiter Info Section**: Card with waiter avatar, name, and chat button, neon border
\n### 5.5 Animations

- **Slide-in**: New order cards, menu items, add-on items, **assigned orders** slide in with bounce animation
- **Pulsing Glow**: Notification badges, updated items, add-on indicators, **unassigned order badges** have pulsing glow
- **Shake**: Notification bell shakes on new notification (including waiter assignment notifications)
- **Ripple Effect**: Button clicks trigger ripple effect\n- **Smooth Transitions**: All state changes use ease-in-out transitions
- **Loading Animations**: Neon spinners or skeleton screens
- **Page Transitions**: Smooth fade or slide transitions\n- **Real-Time Update Animations**: New items slide in, edited items highlight, deleted items fade out, add-on items appear with highlight animation, **assigned orders slide into waiter dashboard**
- **Portion Selection Animations**: Selected cards scale up and glow\n- **Waiter Assignment Animations**: Selected waiter card scales up and glows, assignment confirmation with checkmark animation

### 5.6 Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices first
- **Breakpoints**: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- **Collapsible Sidebar**: Sidebar collapses to hamburger menu on mobile
- **Adaptive Grids**: Grid layouts adjust column count based on screen size
- **Touch-Friendly**: Buttons and interactive elements have minimum44px height
- **Optimized Images**: Responsive images with appropriate sizes
- **Portion Selection on Mobile**: Portion cards stack vertically for easy thumb navigation
- **Add-On Order UI on Mobile**: Banner and cart sections optimized for mobile view
- **Waiter Assignment Modal on Mobile**: Waiter cards stack vertically, full-screen modal\n
### 5.7 Accessibility

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Sufficient contrast for readability
- **Focus Indicators**: Clear focus outlines on interactive elements
- **Portion Selection Accessibility**: Clear focus states, keyboard navigation, screen reader labels
- **Add-On Order Accessibility**: Banner and sections have clear labels for screen readers
- **Waiter Assignment Accessibility**: Modal and waiter cards have clear labels, keyboard navigation support

---

## 6. Technical Considerations

### 6.1 Technology Stack

- **Frontend**: React.js or Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js with Express.js or Django, WebSocket (Socket.io)
- **Database**: PostgreSQL or MongoDB (with restaurant_type field, menu_items table with price field, price_variants table, **orders table with assigned_waiter_id field and add_on_items field**, **waiters table with current_workload field**)
- **Authentication**: JWT tokens, OAuth 2.0 (OSS Google login), OTP via Twilio or Firebase
- **Payment Gateway**: Stripe, Razorpay, or PayPal\n- **Cloud Storage**: AWS S3 or Cloudinary\n- **Hosting**: AWS, Google Cloud, or Vercel
- **Device Detection**: User agent parsing or screen size detection

### 6.2 Real-Time Features with WebSocket Implementation

- **WebSocket Connection**: Persistent connection for instant updates (orders, notifications, chat, menu, categories, tables, add-on orders, **waiter assignments**)
- **Event-Driven Architecture**: Backend emits events, frontend listens and updates UI
- **Optimistic UI Updates**: UI updates immediately, syncs with backend in background
- **Real-Time Menu Synchronization**: Events for item and category changes
- **Real-Time Table Synchronization**: Events for table changes
- **Real-Time Add-On Order Updates**: Events for add-on items added to orders
- **Real-Time Waiter Assignment Updates**: Events for waiter assignment and reassignment
- **Event Payload Structure**: Includes restaurant_id, item_id, order_id, add_on_items, assigned_waiter_id, etc.

### 6.3 Security\n
- **Data Encryption**: HTTPS, encrypted storage\n- **Input Validation**: Server-side validation\n- **Rate Limiting**: Prevent abuse
- **Secure Authentication**: Password hashing, secure token storage
\n### 6.4 Performance Optimization

- **Lazy Loading**: Load images and components on demand
- **Code Splitting**: Split JavaScript bundles\n- **Caching**: Cache static assets and API responses
- **Database Indexing**: Optimize queries with proper indexing (including index on assigned_waiter_id and add_on_items fields)
- **CDN**: Use CDN for static assets
- **WebSocket Connection Management**: Efficient connection pooling, automatic reconnection, heartbeat mechanism

### 6.5 Scalability
\n- **Microservices Architecture**: Separate services for orders, payments, notifications, menu management, **waiter assignment**
- **Load Balancing**: Distribute traffic across servers
- **Database Sharding**: Partition database for horizontal scaling
- **Auto-Scaling**: Automatically scale resources\n- **WebSocket Scaling**: Use Redis pub/sub for broadcasting events

---

## 7. Future Enhancements

- AI-Powered Recommendations (including portion type recommendations)
- Voice Ordering with portion selection
- Augmented Reality Menu with portion size visualization
- Multi-Language Support
- Advanced Analytics (including add-on order analytics and waiter performance analytics)
- Integration with Delivery Platforms\n- Table Reservation System
- Kitchen Display System (KDS) with add-on item indicators and waiter assignment info
- Customer Feedback Analysis (including waiter ratings)\n- Gamification\n- **AI-Powered Waiter Assignment**: Machine learning algorithm to optimize waiter assignment based on historical performance, customer preferences, and real-time workload\n
---

## 8. Design Style\n
**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan, vibrant magenta, electric blue), glassmorphism effects, smooth gradients, multi-layered UI, subtle shadows, and 3D effects.
\n**Typography**: Orbitron Bold/Exo 2 Bold for headings, Poppins Regular/Inter Regular for body text, Orbitron Medium for buttons. Font colors: White or light grey on dark backgrounds, neon colors for emphasis.

**Color Palette**: Deep charcoal grey or dark blue backgrounds, electric cyan, vibrant magenta, electric blue accents, neon green (success), neon yellow (warning), neon red (error), white or light grey text. Restaurant type badges: Veg (bright green), Non-Veg (bright red), Both (bright orange). Portion badges: Full Portion (vibrant magenta), Additional Variants (electric cyan or electric blue). Add-On indicator: Neon yellow badge. Waiter assignment status: Unassigned (neon yellow), Assigned (neon green).

**UI Components**: Glassmorphism cards with neon gradient borders, futuristic buttons with neon gradients and hover effects, animated counters, smooth transitions, interactive elements with neon borders and glow. Restaurant type badges are pill-shaped with rounded corners, bold text, and icon. Portion badges are pill-shaped with rounded corners, medium text. Portion selection cards feature large card-style radio buttons with glassmorphism, neon borders, checkmark icons. Add-On order banner has neon cyan background with white text. Add-On items section highlighted with neon magenta border and 'ADD-ON' label. Waiter assignment modal features glassmorphism card with waiter selection cards displaying avatar, name, workload, and status indicator. Waiter info section displays waiter avatar, name, and chat button with neon border.
\n**Animations**: Slide-in animations for new orders, menu items, add-on items, and assigned orders, pulsing glow for notification badges, updated items, and unassigned order badges, shake animation for notification bell, ripple effect for button clicks, smooth page transitions, loading animations with neon spinners, real-time update animations (new items slide in, edited items highlight, deleted items fade out, add-on items appear with highlight, assigned orders slide into waiter dashboard), portion selection animations (selected cards scale up and glow), waiter assignment animations (selected waiter card scales up and glows, assignment confirmation with checkmark animation).

**Responsive Design**: Mobile-first approach, collapsible sidebar on mobile, adaptive grid layouts, touch-friendly buttons and inputs, optimized for all screen sizes. QR code scanning feature exclusively available on mobile devices. Portion selection cards stack vertically on mobile. Add-On order UI optimized for mobile view. Waiter assignment modal displays full-screen on mobile with vertically stacked waiter cards.

---

**End of Requirements Document**