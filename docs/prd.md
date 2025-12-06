# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Complete Promotions & Offers Flow with Swiggy-Style Real-Time Customer Display + NLP Natural Language Ordering)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced database-driven portion selection UI featuring Full Portion as default (original item price) and additional price variants stored in database with custom names and prices, AI-powered recommendations, real-time chat system, mandatory waiter assignment for every order by restaurant owner with intelligent free waiter filtering and real-time synchronization to customer dashboard displaying assigned waiter name and information, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, personalized restaurant dashboard for quick reordering, complete staff management with attendance tracking, performance analytics, and real-time waiter availability status (Free/Busy/Offline), advanced marketing and promotions system with Swiggy-style real-time customer-facing offers display featuring prominent banner placement, horizontal scrollable offer cards, automatic real-time synchronization via WebSocket, automatic discount application, and promo code redemption, comprehensive settings module for restaurant configuration with automatic currency and timezone application across the entire platform, restaurant type classification (Veg/Non-Veg/Both) with prominent display in browse restaurants and menu pages, QR code scanning functionality exclusively available on mobile devices, fully functional sidebar navigation with complete features for all menu items including browse restaurants functionality, real-time synchronization of menu updates, table updates, and promotions to customer dashboards without page refresh, Add-On Order feature allowing customers to add items to their active order without creating a new order or bill, **and revolutionary NLP-powered Natural Language Ordering via AI Chatbot enabling customers to place orders using conversational text (e.g., 'I want to order 1 daal tadka, 4 roti, 1 margherita pizza') with automatic cart creation and intelligent menu item recognition** - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface with Swiggy-inspired offer presentation. All data displayed across the platform is real-time and dynamically calculated from the live database.\n
## 2. Advanced Authentication System

### 2.1 Multi-Level User Authentication

**User Roles**:\n- **Restaurant Owner**: Full administrative access to restaurant management, menu, orders, staff, inventory, analytics, settings, mandatory waiter assignment for all orders with free waiter visibility, promotions and offers management\n- **Waiter/Agent**: Access to assigned orders, customer communication, order status updates, table management\n- **Customer**: Access to menu browsing, ordering, order tracking, real-time waiter assignment information display, chat with restaurant, payment, order history, browse previously scanned restaurants, real-time view and apply promotions and offers with Swiggy-style UI, **NLP-powered natural language ordering via AI chatbot**

**Authentication Flow**:
1. **Landing Page**: Welcome screen with 'Sign In' and 'Sign Up' buttons
2. **Sign Up Options**:
   - Email/Password registration with role selection (Owner/Waiter/Customer)
   - Google OAuth integration (using OSS Google login method)
   - Phone number OTP verification
3. **Sign In Options**:
   - Email/Password login
   - Google OAuth login (using OSS Google login method)
   - Phone number OTP login
4. **Role-Based Conditional Rendering**:
   - After successful authentication, system identifies user role from database
   - **Owner**: Redirected to Owner Dashboard\n   - **Waiter**: Redirected to Waiter Dashboard
   - **Customer**: Redirected to Customer Home with real-time promotions display
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
\n**Top Metrics Cards Row**:\n1. Today's Revenue Card
2. Active Orders Card
3. Total Orders Today Card
4. Customer Satisfaction Card
5. **Active Promotions Card** (displays count of currently active promotions)
6. **NLP Orders Card** (displays count of orders placed via NLP chatbot today)
\n**Recent Orders Section**:
- Display last 5 orders with real-time updates
- Each order card displays assigned waiter name and avatar
- **Order source indicator**:'Manual Order' or 'NLP Chatbot Order' badge
- Quick action buttons\n
**Quick Actions Section**:
- Grid of 6 quick action buttons (including 'Create Promotion' button)
\n**Sales Analytics Chart**:
- Interactive chart showing revenue trends\n\n**Popular Menu Items Section**:
- Top 5 selling items\n\n**Active Promotions Section**:
- Display currently active promotions with quick view cards
- Each card shows: Promotion name, discount type, validity period, usage count
-'View All Promotions' button\n
**D. Real-Time Notification System**
- Notification bell with badge count
- Dropdown panel with recent notifications
- WebSocket-based instant updates
- New notification type: 'New Order Awaiting Waiter Assignment' (highlighted in neon yellow)
- **New notification type: 'Promotion Applied to Order' (highlighted in neon cyan)**
- **New notification type: 'NLP Order Placed via Chatbot' (highlighted in neon purple)**

---

#### 3.1.2 Advanced Menu Management System with Database-Driven Portion Selection and Real-Time Customer Synchronization

**Overview**:
Comprehensive menu management interface with database-driven portion selection featuring Full Portion as default and additional price variants.\n
**Key Features**:

**A. Menu Item Management Interface**
- Action buttons for adding items and viewing menu
- Menu categories section\n- Menu items grid/list view
\n**B. Add/Edit Menu Item Modal with Database-Driven Portion Selection**
- Basic Information Tab
- Pricing & Portions Tab (Full Portion as default, optional additional variants)
- Inventory & Availability Tab\n- Additional Details Tab
- **Promotions Tab**: Link menu items to active promotions (optional)
- **NLP Aliases Tab**: Add alternative names and common misspellings for NLP recognition (e.g., 'Daal Tadka' aliases: 'dal tadka', 'daal fry', 'yellow dal', 'tadka dal')

**C. Zomato-Style Menu View**
- Full-screen menu display\n- Category navigation
- Item cards with portion indicators
- **Promotion badges on eligible items** (e.g., '20% OFF', 'Buy 1 Get 1')
\n**D. Bulk Actions**
- Select multiple items for bulk operations
\n**E. Menu Analytics**
- Most ordered items
- Revenue by category and portion type
- **Items with highest promotion redemption**
- **Most ordered items via NLP chatbot**
\n**F. Category Management with Real-Time Synchronization**
- Add/edit/delete categories with instant sync
\n---

#### 3.1.3 Advanced Inventory Management\n
**Overview**:
Complete inventory tracking system with real-time stock monitoring and alerts.

**Key Features**:
- Inventory Dashboard
- Add/Edit Inventory Item
- Stock Adjustment\n- Low Stock Alerts
- Inventory Reports
- Supplier Management
\n---

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

**Overview**:\nCentralized order management interface with real-time updates, detailed order information, and mandatory waiter assignment for every order with intelligent free waiter filtering and instant synchronization to customer dashboard.
\n**Key Features**:
\n**A. Order Dashboard Layout**
- Top filters and search\n- Order cards grid\n- Filter option: 'Unassigned Orders' (shows orders without waiter assignment, highlighted in neon yellow)
- **Filter option: 'Orders with Promotions Applied' (shows orders with applied discounts)**
- **Filter option: 'NLP Chatbot Orders' (shows orders placed via natural language chatbot)**
\n**B. Enhanced Order Card Design**
- Card header with order ID, timestamp, status badge, waiter assignment status badge, **promotion badge (if applied)**, **order source badge ('Manual' or 'NLP Chatbot' with robot icon)**
- Card body with customer info, order items (with portion names), **discount amount (if promotion applied)**, order total, assigned waiter info (name, avatar, or 'Unassigned' badge in neon yellow)
- Card footer with action buttons including 'Assign Waiter' button (primary, neon gradient) for unassigned orders

**C. Real-Time Auto-Refresh & Notifications**
- WebSocket integration for instant updates
- New order notifications with'Assign Waiter' prompt
- Order status updates\n- Timeline auto-updates\n- Waiter assignment notifications
- **Promotion application notifications**: 'Promotion [Name] applied to Order #ORD-1234'\n- **NLP order notifications**: 'New NLP Order #ORD-1234 placed via chatbot'

**D. Order Details Modal with Waiter Assignment and Promotion Information**
- Order summary, items, timeline, payment info, waiter assignment section, **promotion details section**, **order source section ('Placed via: Manual' or 'NLP Chatbot')**, customer communication, actions\n- **Promotion Details Section**:
  - **If Promotion Applied**:
    - Heading: 'Applied Promotion' (neon cyan color)
    - Display: Promotion name, discount type, discount amount, promo code (if used)\n    - Discount breakdown: Original total, discount amount, final total
- **If No Promotion Applied**:
    - Display: 'No promotion applied to this order'
- **Waiter Assignment Section**:
  - **If Unassigned**:
    - Heading: 'Assign Waiter' (neon magenta color)
    - Dropdown: List of active and free waiters only with name, avatar, current workload (number of active orders)
    - Button: 'Assign' (primary, neon gradient)
- Note: 'Please assign a waiter to this order to proceed.'
  - **If Assigned**:
    - Heading: 'Assigned Waiter'\n    - Display: Waiter name, avatar, contact info\n    - Button: 'Reassign Waiter' (secondary, outline)
    - Timeline entry: 'Waiter Assigned' with timestamp and waiter name

**E. Waiter Assignment Modal with Free Waiter Filtering**
\n- **Triggered by**: Clicking 'Assign Waiter' button on order card or in order details modal
- **Modal Layout**:
  - Heading: 'Assign Waiter to Order #ORD-1234'
  - Subheading: 'Select a free waiter to handle this order'
  - **Waiter Selection List (Active and Free Waiters Only)**:\n    - **Filtering Logic**: Display only waiters with status 'Active' AND availability 'Free' (workload below threshold)
    - Display filtered waiters in card format
    - Each card shows:\n      - Waiter avatar (circular, neon border)
      - Waiter name (bold, white text)
      - Current workload:'X Active Orders' (small text, light grey)
      - Status indicator: 'Free' (neon green badge)
      - Radio button for selection
    - Cards arranged in grid (2-3 columns on desktop, 1 column on mobile)
    - Selected card highlights with neon gradient border and scale animation
  - **Search & Filter**:
    - Search bar: 'Search waiter by name'\n    - **Note**: Filter automatically applied to show only active and free waiters
  - **Action Buttons**:
    - 'Cancel' (secondary, outline)
    - 'Assign Waiter' (primary, neon gradient, disabled until waiter selected)
  - **Empty State**: If no free waiters available, display message: 'No free waiters available at the moment. All waiters are currently busy. Please wait or check Staff Management to add more waiters.'

**F. Waiter Assignment Confirmation and Real-Time Customer Dashboard Update**
\n- **After Assignment**:
  - Success toast notification: 'Waiter [Name] assigned to Order #ORD-1234'
  - Order card updates to show assigned waiter info
  - Order details modal updates waiter assignment section
  - Timeline adds new entry: 'Waiter Assigned: [Name]' with timestamp
  - Waiter status automatically updates from 'Free' to 'Busy' in Staff Management
  - Real-time notification sent to assigned waiter: 'You have been assigned to Order #ORD-1234 (Table X)'
  - Real-time WebSocket event sent to customer: Event type'waiter_assigned' with payload containing order_id, waiter_name, waiter_avatar, waiter_contact\n  - Customer dashboard automatically updates without page refresh:\n    - Active order card displays assigned waiter information (name, avatar)\n    - Order tracking page updates to show waiter info section
    - Timeline adds'Waiter Assigned: [Name]' entry with timestamp
    - Customer receives in-app notification: 'Your order has been assigned to [Waiter Name]. They will assist you shortly.'

**G. Waiter Reassignment with Customer Dashboard Update**

- **Triggered by**: Clicking 'Reassign Waiter' button in order details modal
- **Reassignment Modal**:
  - Similar to assignment modal\n  - Heading: 'Reassign Waiter for Order #ORD-1234'
  - Display current waiter info at top with label 'Currently Assigned'\n  - Waiter selection list shows only active and free waiters (excludes current waiter)
  - Confirmation prompt: 'Are you sure you want to reassign this order? The current waiter will be notified.'
- **After Reassignment**:
  - Success toast: 'Order #ORD-1234 reassigned to [New Waiter Name]'
  - Timeline adds entry: 'Waiter Reassigned: [Old Name] → [New Name]' with timestamp
  - Old waiter status updates to 'Free' if no other active orders
  - New waiter status updates to 'Busy'\n  - Notification to old waiter: 'Order #ORD-1234 has been reassigned to [New Waiter Name]'
  - Notification to new waiter: 'You have been assigned to Order #ORD-1234 (Table X)'
  - Real-time WebSocket event sent to customer: Event type 'waiter_reassigned' with payload containing order_id, new_waiter_name, new_waiter_avatar, new_waiter_contact
  - Customer dashboard automatically updates:\n    - Waiter info section updates to show new waiter details
    - Timeline adds 'Waiter Reassigned' entry\n    - Customer receives notification: 'Your order has been reassigned to [New Waiter Name]'\n
**H. Bulk Order Actions**
- Select multiple orders for bulk operations
\n**I. Order Analytics**
- Average preparation time, orders by status, peak times, revenue analysis, waiter performance metrics (orders handled, average handling time), **promotion redemption analytics (orders with promotions, total discount given, most redeemed promotions)**, **NLP order analytics (total NLP orders, NLP order success rate, most ordered items via NLP, average NLP order value)**

---

#### 3.1.6 Enhanced Payment Management for Restaurant Owners

**Overview**:
Comprehensive payment tracking and management system.\n
**Key Features**:\n- Payment Dashboard (includes promotion discount tracking)
- Payment Details Modal (displays applied promotion and discount amount)
- Refund Processing\n- Payment Method Analytics
- Financial Reports (includes promotion impact on revenue)
- Payment Settings\n
---

#### 3.1.7 Waiter/Agent Assignment System (Complete Implementation with Free Waiter Filtering)
\n**Overview**:
Mandatory waiter assignment for every order with performance tracking, workload management, real-time availability status tracking (Free/Busy/Offline), and real-time synchronization to customer dashboard.

**Key Features**:

**A. Waiter Management Dashboard (Integrated with Staff Management)**
- **Located in Staff Management module**
- List of all waiters with real-time status indicators:\n  - **Free** (neon green badge): Waiter is active and has workload below threshold (available for assignment)
  - **Busy** (neon yellow badge): Waiter is active but has workload at or above threshold (not available for assignment)
  - **Offline** (grey badge): Waiter is not clocked in or inactive (not available for assignment)
- **Waiter Card Display**:
  - Waiter avatar (circular, neon border)
  - Waiter name (bold, white text)
  - Status badge (Free/Busy/Offline)
  - Current workload: 'X Active Orders' (small text, light grey)
  - Performance metrics: Orders completed today, average handling time, customer ratings
  - Action buttons: 'View Details', 'Edit', 'Deactivate'\n- **Free Waiters Section**:
  - Dedicated section at top of Staff Management page
  - Heading: 'Free Waiters' (neon green color)
  - Displays all waiters with 'Free' status in card grid\n  - Quick view of available waiters for immediate assignment
  - Real-time updates as waiter status changes
- **Filter Options**:
  - 'All Waiters', 'Free', 'Busy', 'Offline'
  - Search bar: 'Search waiter by name'\n- **Add Waiter Button**:'Add Waiter' (primary, neon gradient) - opens Add Staff Member modal with role pre-selected as 'Waiter'
\n**B. Mandatory Assignment for Every Order with Customer Dashboard Integration**
- **System Rule**: Every new order must be assigned a waiter before it can proceed to'Accepted' status
- **Owner Workflow**:
  1. New order arrives → Order status: 'Pending - Awaiting Waiter Assignment'
  2. Owner receives notification: 'New Order #ORD-1234 - Assign Waiter'\n  3. Owner opens order details or clicks 'Assign Waiter' on order card
  4. System displays only active and free waiters in assignment modal
  5. Owner selects waiter from filtered list
  6. System assigns waiter → Order status changes to 'Pending - Waiter Assigned'
  7. Waiter status automatically updates from 'Free' to 'Busy' in Staff Management
  8. Real-time WebSocket event 'waiter_assigned' sent to customer with waiter details
  9. Customer dashboard automatically updates to display assigned waiter name, avatar, and contact info
  10. Waiter receives notification and can accept order\n- **Unassigned Order Restrictions**:
  - Orders without waiter assignment cannot be marked as 'Accepted' or 'Preparing'
  - Order card displays 'Unassigned' badge in neon yellow
  - Owner dashboard highlights unassigned orders count in metrics card
  - Customer dashboard displays 'Waiter assignment pending' status until waiter is assigned

**C. Automatic Assignment (Optional Feature)**
- **Toggle in Settings**: 'Enable Automatic Waiter Assignment' (on/off)
- **Assignment Logic**:
  - System automatically assigns waiter based on:\n    1. Availability status: Only'Free' waiters are considered\n    2. Current workload (assigns to free waiter with fewest active orders)
    3. Table proximity (if table location data available)
  - Owner can override automatic assignment and reassign manually
  - Waiter status automatically updates from 'Free' to 'Busy' after assignment
  - Customer dashboard automatically updates with assigned waiter info
- **Notification**: Owner receives notification: 'Order #ORD-1234 automatically assigned to [Waiter Name]'
\n**D. Waiter Availability Status Logic**
- **Free Status**:
  - Waiter is clocked in (Active)\n  - Current workload (active orders) is below threshold (default: 5orders, configurable in Settings)
  - Available for new order assignments
- **Busy Status**:
  - Waiter is clocked in (Active)
  - Current workload is at or above threshold\n  - Not available for new order assignments (hidden from assignment modal)
- **Offline Status**:
  - Waiter is not clocked in or account is inactive
  - Not available for any assignments
- **Real-Time Status Updates**:
  - Status automatically updates when:\n    - Waiter is assigned a new order (Free → Busy if threshold reached)
    - Waiter completes an order (Busy → Free if workload drops below threshold)
    - Waiter clocks in/out (Offline ↔ Free/Busy)
  - WebSocket events broadcast status changes to Owner Dashboard and Staff Management

**E. Waiter Performance Tracking**
- Orders handled per shift\n- Average order handling time
- Customer ratings for assigned orders
- Order completion rate
- Tips received (if applicable)
- Availability rate: Percentage of time waiter was'Free' vs 'Busy' during shift

**F. Waiter Communication**
- Direct chat between owner and waiter
- Broadcast messages to all waiters\n- Order-specific communication thread
\n---

#### 3.1.8 Real-Time Communication Hub\n
**Overview**:
Centralized messaging system for communication between owner, waiters, and customers.

**Key Features**:
- Chat Dashboard
- Real-Time Messaging
- Broadcast Messages
- Quick Replies
- Notification Settings
\n---

#### 3.1.9 Advanced Analytics & Reports with Real-Time Data\n
**Overview**:
Comprehensive analytics dashboard with real-time data visualization, including waiter performance analytics and availability metrics, promotion performance analytics, **and NLP chatbot order analytics**.

**Key Features**:
- Analytics Dashboard (revenue, orders, menu, customer, staff analytics with waiter performance metrics and availability tracking, promotion analytics, **NLP chatbot analytics**)
- Custom Reports
- Predictive Analytics
- Waiter Performance Reports: Orders per waiter, average handling time, customer ratings, tips earned, availability rate (Free vs Busy time)
- **Promotion Performance Reports**: Total promotions created, active promotions, redemption rate, total discount given, revenue impact, most popular promotions, customer engagement with promotions
- **NLP Chatbot Performance Reports**: Total NLP orders, NLP order success rate, failed NLP order attempts with reasons, most ordered items via NLP, average NLP order value, customer satisfaction with NLP ordering, common NLP queries and recognition accuracy

---
\n#### 3.1.10 Complete Staff Management System with Waiter Availability Tracking

**Overview**:
Comprehensive staff management module with waiter assignment tracking and real-time availability status (Free/Busy/Offline).

**Key Features**:
- **Staff Dashboard**:
  - **Free Waiters Section** (dedicated section at top):
    - Heading: 'Free Waiters' (neon green color)
    - Card grid displaying all waiters with 'Free' status
    - Each card shows: Avatar, name, 'Free' badge (neon green), current workload,'Assign to Order' quick action button
    - Real-time updates as status changes
  - **All Staff Section**:
    - List/grid view of all staff members (including waiters)
    - Filter options: 'All Staff', 'Waiters', 'Kitchen Staff', 'Managers', etc.
    - **Waiter Status Filter**: 'All Waiters', 'Free', 'Busy', 'Offline'
    - Each waiter card displays: Avatar, name, role, status badge (Free/Busy/Offline), current workload, performance metrics
    - Action buttons: 'View Details', 'Edit', 'Deactivate'
- **Add/Edit Staff Member**:
  - Form fields: Name, role (dropdown with 'Waiter' option), contact info, employment details
  - **For Waiters**: Additional field for'Workload Threshold' (default: 5 active orders)
  - 'Add Waiter' button in Free Waiters section opens this form with role pre-selected as 'Waiter'
- **Attendance Tracking**:
  - Clock in/out functionality
  - Waiter status automatically changes to 'Free' on clock in (if workload below threshold) or 'Offline' on clock out\n- **Leave Management**\n- **Shift Scheduling**
- **Performance Analytics** (including waiter assignment metrics and availability rate)
- **Payroll Management**
- **Staff Communication**

---

#### 3.1.11 Complete Marketing & Promotions System with Swiggy-Style Customer Integration and Real-Time Synchronization

**Overview**:
Advanced marketing module for creating, managing, and distributing promotions and offers to customers with real-time WebSocket synchronization and automatic discount application. Customer-facing UI follows Swiggy-style design with prominent banner placement, horizontal scrollable offer cards, and instant real-time updates.

**Key Features**:
\n**A. Marketing Dashboard**
- **Top Metrics Cards**:
  1. Active Promotions Count
  2. Total Promotions Created
  3. Redemption Rate (percentage of orders with promotions applied)
  4. Total Discount Given (amount)\n- **Active Promotions Section**:
  - Grid/list view of currently active promotions
  - Each promotion card displays:\n    - Promotion name (bold, white text)
    - Promotion type badge (Percentage Discount, Flat Discount, Buy X Get Y, Free Item, etc.) with neon color coding
    - Discount details (e.g., '20% OFF', 'Flat ₹100OFF', 'Buy 1 Get 1 Free')\n    - Validity period (start date - end date)
    - Usage statistics: 'Redeemed X times' (small text, light grey)
    - Status indicator: 'Active' (neon green badge)
    - Action buttons: 'Edit', 'Deactivate', 'View Analytics', 'Duplicate'
  - Filter options: 'All Promotions', 'Active', 'Scheduled', 'Expired', 'Deactivated'
  - Search bar: 'Search promotions by name or code'
- **Create Promotion Button**: 'Create Promotion' (primary, neon gradient) - opens Create Promotion Modal\n- **Scheduled Promotions Section**:
  - Display promotions scheduled for future activation
  - Each card shows: Promotion name, scheduled start date, discount details\n- **Expired Promotions Section**:
  - Display past promotions with performance summary
  - Option to reactivate or duplicate\n\n**B. Create Promotion Campaign Modal**
\n**Modal Layout**:
- Heading: 'Create New Promotion' (neon magenta color)
- Multi-step form with tabs: Basic Info, Discount Details, Eligibility, Validity, Preview\n\n**Step 1: Basic Information**
- **Promotion Name**: Text input (required) - e.g., 'Summer Sale', 'Weekend Special'
- **Promotion Description**: Textarea (optional) - Brief description for internal reference
- **Promotion Type**: Dropdown (required) - Options:\n  - Percentage Discount (e.g., 20% OFF)\n  - Flat Discount (e.g., ₹100 OFF)
  - Buy X Get Y (e.g., Buy 1 Get 1 Free)
  - Free Item (e.g., Free Dessert with Main Course)
  - Minimum Order Discount (e.g., ₹50 OFF on orders above ₹500)
  - First Order Discount (e.g., 30% OFF on first order)
  - Loyalty Discount (e.g., 10% OFF for loyalty members)
- **Promotion Code**: Text input (optional) - Unique promo code for customers to apply (e.g., 'SUMMER20', 'WELCOME30')
  - Auto-generate button: 'Generate Code' (generates random alphanumeric code)
  - Note: 'Leave blank for automatic promotions (no code required)'
\n**Step 2: Discount Details**
- **Discount Configuration** (based on selected promotion type):
  - **For Percentage Discount**:
    - Discount Percentage: Number input (1-100%) (required)
    - Maximum Discount Amount: Number input (optional) - e.g., 'Max ₹200discount'
  - **For Flat Discount**:
    - Discount Amount: Number input (required) - e.g., '₹100'
  - **For Buy X Get Y**:
    - Buy Quantity: Number input (required) - e.g., 'Buy 2'\n    - Get Quantity: Number input (required) - e.g., 'Get 1Free'
    - Applicable Items: Multi-select dropdown (required) - Select menu items eligible for this offer
  - **For Free Item**:
    - Free Item: Dropdown (required) - Select menu item to be given free\n    - Condition: Text input (optional) - e.g., 'With purchase of any main course'
  - **For Minimum Order Discount**:
    - Minimum Order Value: Number input (required) - e.g., '₹500'\n    - Discount Type: Radio buttons - 'Percentage' or 'Flat Amount'
    - Discount Value: Number input (required)\n  - **For First Order Discount**:
    - Discount Type: Radio buttons - 'Percentage' or 'Flat Amount'
    - Discount Value: Number input (required)
  - **For Loyalty Discount**:
    - Discount Percentage: Number input (required)\n    - Minimum Loyalty Points: Number input (optional)\n\n**Step 3: Eligibility & Conditions**
- **Applicable To**: Checkboxes (required) - Select one or more:\n  - All Customers
  - New Customers Only
  - Loyalty Members Only
  - Specific Customer Segments (dropdown to select segments)
- **Applicable Menu Items**: Multi-select dropdown (optional)\n  - Options: 'All Items', 'Specific Categories', 'Specific Items'
- If 'Specific Categories' or 'Specific Items' selected, display additional dropdown to select categories/items
- **Minimum Order Value**: Number input (optional) - e.g., 'Applicable on orders above ₹300'
- **Maximum Usage Per Customer**: Number input (optional) - e.g., 'Each customer can use this promotion 3 times'
- **Total Usage Limit**: Number input (optional) - e.g., 'Promotion valid for first 100 redemptions'
- **Applicable Days**: Checkboxes (optional) - Select days of the week (Monday to Sunday)
- **Applicable Time**: Time range input (optional) - e.g., '12:00 PM - 3:00 PM' (for lunch specials)
\n**Step 4: Validity Period**
- **Start Date**: Date picker (required) - Promotion activation date
- **End Date**: Date picker (required) - Promotion expiration date
- **Auto-Activate**: Toggle (on/off) - If enabled, promotion automatically activates on start date
- **Auto-Deactivate**: Toggle (on/off) - If enabled, promotion automatically deactivates on end date
\n**Step 5: Preview & Confirmation**
- **Promotion Summary Card** (glassmorphism effect with neon gradient border):
  - Display all entered details in a visually appealing card format
  - Show how promotion will appear to customers (preview of Swiggy-style promotion card with banner and offer details)
  - Estimated discount impact:'Estimated total discount: ₹X (based on average order value)'
- **Action Buttons**:
  - 'Back' (secondary, outline) - Go back to edit details
  - 'Save as Draft' (secondary, outline) - Save promotion without activating
  - 'Create & Activate' (primary, neon gradient) - Create and immediately activate promotion
\n**After Creation**:
- Success toast notification: 'Promotion [Name] created successfully!'
- Promotion card appears in Active Promotions section (if activated) or Scheduled Promotions section (if scheduled)
- **Real-time WebSocket event'promotion_created' sent to all customers**:\n  - Payload: { promotion_id, promotion_name, promotion_type, discount_type, discount_value, promo_code, validity_period, applicable_items, eligibility_criteria}
  - **Customer dashboards automatically update without page refresh**:\n    - New promotion card slides into'Exclusive Offers' banner on Customer Home with smooth animation
    - Promotion card appears in dedicated Offers & Promotions page
    - In-app notification displays: 'New Offer Available: [Promotion Name] - [Discount Details]'
    - Notification bell badge increments\n
**C. Edit Promotion**
- **Triggered by**: Clicking 'Edit' button on promotion card
- **Edit Modal**: Similar to Create Promotion Modal, pre-filled with existing promotion details
- **Editable Fields**: All fields except promotion code (code cannot be changed once created)
- **After Editing**:
  - Success toast: 'Promotion [Name] updated successfully!'
  - Promotion card updates in dashboard
  - **Real-time WebSocket event 'promotion_updated' sent to customers**:
    - Payload: { promotion_id, updated_fields, timestamp }
    - **Customer dashboards automatically update without page refresh**:
      - Existing promotion card updates with fade animation to reflect new details
      - Updated promotion highlighted with brief neon glow animation
\n**D. Deactivate/Reactivate Promotion**\n- **Deactivate**:
  - Triggered by: Clicking 'Deactivate' button on promotion card
  - Confirmation modal: 'Are you sure you want to deactivate this promotion? Customers will no longer be able to apply it.'
  - After deactivation:
    - Success toast: 'Promotion [Name] deactivated'\n    - Promotion status changes to 'Deactivated' (grey badge)
    - Promotion card moves to 'Deactivated' section\n    - **Real-time WebSocket event 'promotion_deactivated' sent to customers**:
      - Payload: { promotion_id, timestamp }
      - **Customer dashboards automatically update without page refresh**:\n        - Promotion card fades out and is removed from 'Exclusive Offers' banner and Offers page
        - If promotion was applied to items in cart, system displays notification: 'Offer [Name] is no longer available and has been removed from your cart'
- **Reactivate**:
  - Triggered by: Clicking 'Reactivate' button on deactivated promotion card
  - After reactivation:
    - Success toast: 'Promotion [Name] reactivated'
    - Promotion status changes to 'Active' (neon green badge)
    - Promotion card moves back to 'Active Promotions' section
    - **Real-time WebSocket event 'promotion_activated' sent to customers**:
      - Payload: { promotion_id, promotion_name, promotion_type, discount_type, discount_value, promo_code, validity_period, applicable_items, eligibility_criteria }
      - **Customer dashboards automatically update without page refresh**:\n        - Promotion card slides into 'Exclusive Offers' banner and Offers page with animation
        - In-app notification displays: 'Offer [Name] is now available again!'
\n**E. Duplicate Promotion**
- **Triggered by**: Clicking 'Duplicate' button on promotion card
- **Action**: Opens Create Promotion Modal pre-filled with details from selected promotion
- **Note**: Promotion code is cleared (new code must be generated or entered)
- **Use Case**: Quickly create similar promotions with minor modifications

**F. Promotion Analytics**
- **Triggered by**: Clicking 'View Analytics' button on promotion card
- **Analytics Modal Layout**:
  - Heading: 'Promotion Analytics - [Promotion Name]'
  - **Metrics Cards**:
    1. Total Redemptions (count)
    2. Total Discount Given (amount)
    3. Revenue Impact (percentage change in revenue during promotion period)
    4. Average Order Value with Promotion (amount)
  - **Redemption Timeline Chart**: Line chart showing redemptions over time
  - **Top Customers**: List of customers who redeemed promotion most frequently
  - **Applicable Items Performance**: If promotion applies to specific items, show which items were ordered most with this promotion
  - **Export Report Button**: 'Export Analytics' (secondary, outline) - Download analytics as PDF or CSV

**G. Bulk Promotion Actions**
- **Select Multiple Promotions**: Checkboxes on promotion cards
- **Bulk Actions Toolbar** (appears when promotions selected):
  - 'Activate Selected' (primary, neon gradient)\n  - 'Deactivate Selected' (secondary, outline)
  - 'Delete Selected' (error, neon red)
\n**H. Promotion Notification System**
- **Owner Notifications**:
  - 'Promotion [Name] is expiring in 3 days' (reminder notification)
  - 'Promotion [Name] has reached 80% of total usage limit'\n  - 'Promotion [Name] applied to Order #ORD-1234' (real-time notification when customer applies promotion)
- **Customer Notifications** (via WebSocket):
  - 'New Offer Available: [Promotion Name] - [Discount Details]' (when new promotion created)
  - 'Offer Expiring Soon: [Promotion Name] expires in 2 days' (reminder notification)
  - 'Exclusive Offer for You: [Promotion Name]' (targeted promotions for specific customer segments)

**I. Promotion Settings (in Settings Module)**
- **Toggle**:'Enable Promotions & Offers' (on/off) - Master switch to enable/disable entire promotions system
- **Toggle**: 'Allow Customers to Stack Promotions' (on/off) - If enabled, customers can apply multiple promotions to a single order (subject to eligibility)
- **Toggle**: 'Auto-Apply Best Promotion' (on/off) - If enabled, system automatically applies the best available promotion to customer's order (highest discount)\n- **Toggle**: 'Display Promotions on Menu Items' (on/off) - If enabled, promotion badges appear on eligible menu items
- **Input**: 'Maximum Promotions Per Order' (number) - Limit number of promotions that can be applied to a single order (default: 1)
\n---

#### 3.1.12 Complete Settings Module with Auto-Application\n
**Overview**:
Comprehensive settings module for restaurant configuration, including waiter assignment settings and availability threshold configuration, promotion system settings, **and NLP chatbot settings**.

**Key Features**:
- Settings Dashboard\n- Restaurant Profile (including restaurant type: Veg/Non-Veg/Both)
- Operational Settings\n- **Waiter Assignment Settings**:
  - Toggle: 'Enable Automatic Waiter Assignment' (on/off)
  - Input: 'Workload Threshold for Busy Status' (default: 5 active orders) - determines when waiter status changes from 'Free' to 'Busy'
  - Toggle: 'Allow Customer to View Assigned Waiter' (on/off, default: on)
  - Toggle: 'Require Waiter Assignment Before Order Acceptance' (on/off, default: on)
  - Toggle: 'Display Waiter Contact Info to Customer' (on/off, default: on)
  - Toggle: 'Show Only Free Waiters in Assignment Modal' (on/off, default: on) - when enabled, assignment modal displays only active and free waiters
- Payment Settings
- Notification Settings
- User Preferences
- Currency & Timezone (with auto-application system-wide)
- Security Settings
- Integrations\n- System Settings
- **Promotion Settings**:
  - Toggle: 'Enable Promotions & Offers' (on/off)
  - Toggle: 'Allow Customers to Stack Promotions' (on/off)
  - Toggle: 'Auto-Apply Best Promotion' (on/off)
  - Toggle: 'Display Promotions on Menu Items' (on/off)
  - Input: 'Maximum Promotions Per Order' (default: 1)
- **NLP Chatbot Settings**:
  - Toggle: 'Enable NLP Natural Language Ordering' (on/off, default: on) - Master switch to enable/disable NLP chatbot ordering feature
  - Toggle: 'Display NLP Chatbot Button on Menu Page' (on/off, default: on)
  - Toggle: 'Auto-Open Chatbot on Menu Page Load' (on/off, default: off)
  - Input: 'NLP Recognition Confidence Threshold' (percentage, default: 80%) - Minimum confidence level for menu item recognition
  - Toggle: 'Allow Portion Selection via NLP' (on/off, default: on) - If enabled, customers can specify portions in natural language (e.g., 'half plate', 'full portion')
  - Toggle: 'Enable NLP Order Confirmation' (on/off, default: on) - If enabled, chatbot displays order summary and asks for confirmation before adding to cart
  - Toggle: 'Enable NLP Promotion Application' (on/off, default: on) - If enabled, chatbot can apply promotions based on natural language requests (e.g., 'apply summer sale offer')
  - Input: 'NLP Chatbot Welcome Message' (textarea) - Customize chatbot greeting message
  - Input: 'NLP Chatbot Error Message' (textarea) - Customize message when item not recognized
\n---

### 3.2 Enhanced Customer Features with Real-Time Waiter Assignment Display, Synchronization, Swiggy-Style Real-Time Promotions & Offers, and NLP Natural Language Ordering

#### 3.2.1 Customer Home Screen with Complete Sidebar Functionality, Real-Time Updates, Swiggy-Style Promotions Display, and NLP Chatbot Access

**Overview**:\nCustomer-facing home screen with access to all features, real-time waiter assignment information display, prominent Swiggy-style promotions and offers section with real-time WebSocket synchronization, **and quick access to NLP-powered natural language ordering chatbot**.

**Layout Structure**:
\n**A. Top Navigation Bar**
- DineQR logo
- Search bar\n- **NLP Chatbot Icon** (robot icon with neon purple glow, positioned next to search bar) - Quick access to NLP ordering chatbot
- Notification bell\n- User profile icon
\n**B. Sidebar Navigation (Fully Functional)**
- Home\n- Browse Restaurants
- **Offers & Promotions** (menu item with megaphone icon)
- Active Orders
- Order History
- Favorites
- Loyalty & Rewards
- Profile
- Settings
- Help & Support

**C. Main Dashboard Content Area**
\n**Welcome Banner**
- Personalized greeting: 'Welcome back, [Customer Name]!'
- Quick stats: Active orders count, loyalty points balance\n\n**Swiggy-Style Promotions & Offers Section** (Prominent Display at Top)
- **Section Heading**: 'Exclusive Offers for You' (large bold text, neon cyan color with subtle glow)
- **Horizontal Scrollable Carousel** (Swiggy-style):
  - Smooth horizontal scroll with snap points
  - Navigation arrows on desktop (left/right)
  - Touch/swipe enabled on mobile
  - Auto-scroll every 5 seconds (optional, configurable)
  - **Promotion Cards** (Swiggy-inspired design):
    - **Card Layout**:
      - Large rectangular card with rounded corners (16px border-radius)
      - Glassmorphism effect with semi-transparent dark background (rgba(26, 26, 26, 0.7))
      - Neon gradient border (color based on promotion type):
        - Percentage Discount: Electric cyan (#00F0FF)
        - Flat Discount: Vibrant magenta (#FF006E)
        - Buy X Get Y: Electric blue (#3A86FF)
        - Free Item: Neon green (#39FF14)
        - Minimum Order: Neon yellow (#FFFF00)
        - First Order: Neon red (#FF073A)
        - Loyalty: Neon purple (#BF40BF)
      - Subtle box shadow with neon glow (04px 20px rgba(0, 240, 255, 0.3))
      - Hover effect: Card scales up (1.05) and glow intensifies\n    - **Card Content**:
      - **Top Section**:
        - Promotion type badge (top-left corner, pill-shaped, neon background, white text, icon)
        - Example: 'FLAT DEAL' badge with discount icon
      - **Middle Section**:
        - Promotion name (extra-large bold text, white color,24px font size)
        - Example: 'Summer Sale'\n        - Discount details (large text, neon cyan color, 20px font size, bold)
        - Example: '20% OFF on all orders' or 'Flat₹100 OFF'
      - **Bottom Section**:
        - Promo code section (if applicable):
          - Label: 'Use Code:' (small text, light grey, 12px)\n          - Promo code (medium bold text, white color, dashed border, 14px)\n          - Example: 'SUMMER20'\n          - Copy icon (clickable, neon cyan color)
          - Clicking copy icon copies code to clipboard and displays success toast: 'Code copied!'
        - Validity period (small text, light grey, 12px)
        - Example: 'Valid till31 Dec 2025'
      - **Action Buttons**:
        - 'Apply Offer' button (primary, neon gradient background, white text, bold, rounded corners)
        - 'View Details' button (secondary, outline style, neon cyan border, neon cyan text)
    - **Card Dimensions**:
      - Desktop: Width 320px, Height 180px
      - Mobile: Width 280px, Height 160px
- **Spacing**: 16px gap between cards
  - **Real-Time Updates via WebSocket**:
    - **New Promotion Created**: New promotion card slides into carousel from right with smooth animation (slide-in + fade-in, duration 0.5s)
    - **Promotion Updated**: Existing card updates with fade animation (fade-out, update content, fade-in, duration 0.3s)
    - **Promotion Deactivated**: Card fades out and slides out to left (fade-out + slide-out, duration 0.5s)
    - **Promotion Reactivated**: Card slides into carousel from right with animation\n    - **In-App Notification**: When new promotion created, notification bell shakes and badge increments, notification displays: 'New Offer Available: [Promotion Name] - [Discount Details]'
- **'View All Offers' Button**:\n  - Positioned below carousel (center-aligned)
  - Primary button style (neon gradient background, white text, bold, rounded corners)
  - Navigates to dedicated Offers & Promotions page\n\n**NLP Quick Order Section** (New Feature)
- **Section Heading**: 'Order with AI Assistant' (medium bold text, neon purple color with robot icon)
- **Description**: 'Simply tell us what you want in your own words, and we will create your order instantly!' (small text, light grey)\n- **NLP Chatbot Button**: 'Start Ordering with AI' (large primary button, neon purple gradient background, white text, bold, robot icon)
  - Clicking button opens NLP chatbot modal overlay
- **Example Queries Display** (horizontal scrollable pills):
  - 'I want 1daal tadka, 4 roti, 1 margherita pizza'\n  - 'Get me 2 butter chicken with naan'\n  - 'Order 1 large pepperoni pizza and 2 cokes'
  - Pills have glassmorphism effect with neon purple border
  - Clicking pill opens chatbot with pre-filled query

**Active Orders Section with Assigned Waiter Information**
- **Section Heading**: 'Your Active Orders' (medium bold text, white color)
- **Order Cards Grid** (2 columns on desktop, 1 column on mobile):
  - Each active order card displays:
    - Order ID and table number (top-left)
    - **Order source badge**:'Manual Order' or 'NLP Chatbot Order' with robot icon (top-right, neon purple for NLP orders)
    - Order status badge (top-right, neon color based on status)
    - Order items summary (list of items with quantities)
    - **Applied Promotion Badge** (if promotion applied):
      - Badge: 'Offer Applied: [Promotion Name]' (neon cyan background, white text, pill-shaped)\n      - Positioned below order items
    - **Assigned Waiter Section**:
      - **If waiter assigned**:
        - Waiter avatar (circular, 48px diameter, neon border)\n        - Waiter name (bold, white text, 14px)
        - 'Your Waiter' label (small text, light grey, 12px)
        - 'Chat with Waiter' button (secondary, outline, neon cyan border)\n      - **If waiter not yet assigned**:
        - 'Waiter assignment pending' badge (neon yellow background, white text, pulsing glow animation)
        - Message: 'Your order is being assigned to a waiter' (small text, light grey)
    - Order total (with discount breakdown if promotion applied)
    - Estimated time (countdown timer)
    - 'Track Order' button (primary, neon gradient)\n  - **Real-Time Updates**:
    - When waiter assigned: Waiter section transitions from 'pending' to 'assigned' with fade-in animation
    - When promotion applied: Promotion badge slides in with animation
\n**Recently Scanned Restaurants Section**
- Display last 5 scanned restaurants with thumbnail, name, and 'View Menu' button
\n**Recommended Items Section** (with promotion badges if applicable)
- Display personalized item recommendations based on order history
- If item is eligible for promotion, display promotion badge on item card
\n**D. Real-Time WebSocket Connection**
- **Persistent WebSocket connection for instant updates**
- **Event Listeners**:
  - **'promotion_created'**: New promotion card slides into carousel\n  - **'promotion_updated'**: Existing promotion card updates with fade animation
  - **'promotion_deactivated'**: Promotion card fades out and is removed\n  - **'promotion_activated'**: Promotion card slides into carousel (for reactivated promotions)
  - **'waiter_assigned'**: Active order card updates to display waiter info
  - **'waiter_reassigned'**: Waiter info section updates with new waiter details
  - **'order_status_update'**: Order status badge and timeline update
  - **'promotion_applied'**: Order card displays promotion badge and discount breakdown
- **Automatic UI Updates**: All updates occur without page refresh
- **In-App Notifications**: Notification bell displays badge count and shakes on new notifications

---

#### 3.2.2 Browse Restaurants with Restaurant Type Display and Real-Time Menu Updates

**Overview**:\nDedicated page displaying previously scanned restaurants with search and filter functionality.\n
**Key Features**:\n- Restaurant list layout with search bar, filter options (including restaurant type), restaurant cards grid\n- Restaurant details\n- Empty state\n- Real-time menu synchronization\n\n---

#### 3.2.3 QR Code Scanning & Menu Access (Mobile-Only Feature with Restaurant Type Display, Database-Driven Portion Selection, Swiggy-Style Promotion Banners, and NLP Chatbot Integration)

**Overview**:\nCustomers scan QR codes to access digital menu. QR scanning is mobile-only. **Menu page includes prominent NLP chatbot button for natural language ordering.**

**Key Features**:
\n**A. QR Code Scanner (Mobile-Only)**
- 'Scan QR Code' button visible only on mobile devices
- Camera interface for scanning\n- Error handling for desktop access
\n**B. Digital Menu Display**
- **Menu Header**:
  - Restaurant name (large bold text)
  - Restaurant type badge (Veg/Non-Veg/Both)
  - **NLP Chatbot Button** (floating action button, bottom-right corner, neon purple gradient, robot icon, pulsing glow animation)
    - Button label: 'Order with AI' (small text, white)\n    - Clicking button opens NLP chatbot modal overlay
- **Swiggy-Style Promotions Banner** (if active promotions available):
  - **Banner Layout**:
    - Positioned directly below menu header
    - Full-width horizontal scrollable carousel
    - Smooth horizontal scroll with snap points
    - Touch/swipe enabled\n  - **Promotion Cards** (Swiggy-inspired compact design):
    - Compact rectangular cards (width 240px, height 100px on mobile)
    - Glassmorphism effect with neon gradient border
    - Card content:
      - Promotion type icon (top-left, small)\n      - Discount details (large bold text, neon cyan color)
      - Example: '20% OFF' or 'Buy1 Get 1'\n      - Promo code (if applicable, small text,dashed border)
      - 'Apply' button (small, neon gradient, positioned at bottom-right)
    - Clicking 'Apply' button:\n      - If cart is empty: Display message 'Add items to cart to apply this offer'
      - If cart has items: System validates eligibility and applies promotion to cart
      - Success toast: 'Offer applied! You saved ₹X'\n  - **Real-Time Updates**:
    - New promotions slide into banner with animation
    - Deactivated promotions fade out and are removed
- **Menu Layout**:
  - Category navigation (horizontal tabs)
  - Menu items grid/list view
  - **Promotion Badges on Menu Items**:
    - If promotion applies to specific menu items, display promotion badge on item card
    - Badge positioned at top-right corner of item card
    - Badge design: Small pill-shaped badge, neon cyan background, white text, discount details (e.g., '20% OFF', 'Buy 1 Get 1')
    - Pulsing glow animation to attract attention
- **Real-Time Menu Synchronization**:
  - Menu items and categories update automatically when owner makes changes
  - Promotion badges update in real-time when promotions are created, updated, or deactivated
\n**C. Item Details Modal with Database-Driven Portion Selection**\n- Large item image\n- Item details\n- **Applicable Promotions Section** (if item is eligible for any promotions):
  - Heading: 'Available Offers' (neon cyan color)
  - List of applicable promotions with discount details
  - Each promotion displays:
    - Promotion name and discount details
    - Promo code (if applicable)
    - 'Apply Offer' button (primary, neon gradient)
  - Clicking 'Apply Offer' button:
    - System validates eligibility\n    - If eligible: Promotion applied to cart, success toast displays
    - If not eligible: Error toast displays with reason
- Portion selection section (Full Portion as default, additional variants from database)
- Quantity selector
- Price summary (with discount breakdown if promotion applied)
- Action buttons\n\n**D. Cart Management**
- Floating cart icon
- Cart sidebar with item list (showing selected portions and applied promotions)
- **Applied Promotions Section**:
  - Display all applied promotions with discount breakdown
  - Each promotion displays:
    - Promotion name and discount details
    - Discount amount:'You saved ₹X' (neon green color)
    - 'Remove' button (secondary, outline)\n- **Available Offers Section** (if eligible promotions not yet applied):
  - Display applicable promotions with 'Apply' button
  - Clicking 'Apply' button validates and applies promotion
- Subtotal, discount amount, taxes, total\n- Proceed to checkout button

---

#### 3.2.4 NLP Natural Language Ordering via AI Chatbot (New Feature)

**Overview**:
Revolutionary NLP-powered ordering system that allows customers to place orders using natural conversational language. Customers can simply type what they want to order (e.g., 'I want to order 1 daal tadka, 4 roti, 1 margherita pizza'), and the AI chatbot automatically recognizes menu items, quantities, and portions, creates the cart, and allows customers to proceed directly to checkout.

**Key Features**:

**A. NLP Chatbot Modal Interface**
\n**Triggered by**:
- Clicking 'Start Ordering with AI' button on Customer Home\n- Clicking floating NLP chatbot button on menu page (bottom-right corner)
- Clicking NLP chatbot icon in top navigation bar

**Modal Layout**:
- **Full-screen overlay** (semi-transparent dark background with glassmorphism effect)
- **Chatbot Window** (centered, glassmorphism card with neon purple gradient border):
  - **Header**:
    - Heading: 'AI Order Assistant' (neon purple color, robot icon)
    - Subheading: 'Tell me what you want to order in your own words!' (small text, light grey)
    - Close button (top-right corner,'X' icon)
  - **Chat Area** (scrollable message thread):
    - **Welcome Message** (from chatbot):
      - Avatar: Robot icon with neon purple glow
      - Message: 'Hi [Customer Name]! I am your AI order assistant. Simply tell me what you would like to order, and I will add it to your cart instantly. For example, you can say: I want 1 daal tadka, 4 roti, and 1 margherita pizza.' (white text, glassmorphism bubble)
    - **Example Queries** (quick reply buttons below welcome message):
      - 'I want 2 butter chicken with naan'
      - 'Get me 1 large pepperoni pizza'\n      - 'Order 1daal tadka and 4 roti'
      - Buttons have neon purple outline, clicking pre-fills input field
    - **Message Thread**:
      - Customer messages: Right-aligned, neon cyan bubble, white text
      - Chatbot messages: Left-aligned, glassmorphism bubble with neon purple border, white text
      - Typing indicator: Animated dots when chatbot is processing
  - **Input Area** (bottom of chatbot window):
    - **Text Input Field**: Large textarea with placeholder 'Type your order here... (e.g., I want 1 daal tadka, 4 roti, 1 margherita pizza)' (dark background, neon purple border on focus)
    - **Send Button**: Primary button with neon purple gradient, paper plane icon, positioned to right of input field
    - **Voice Input Button** (optional): Microphone icon button for voice-to-text input (neon purple outline)
\n**B. NLP Order Processing Flow**

**Step 1: Customer Input**
- Customer types order in natural language (e.g., 'I want to order 1 daal tadka, 4 roti, 1 margherita pizza')\n- Customer clicks 'Send' button or presses Enter key
- Customer message appears in chat thread (right-aligned, neon cyan bubble)\n
**Step 2: NLP Processing & Menu Item Recognition**
- Chatbot displays typing indicator (animated dots)
- Backend NLP engine processes customer input:\n  - **Tokenization**: Break input into individual words and phrases
  - **Entity Recognition**: Identify menu item names, quantities, and portions
- Example: '1 daal tadka' → Item: 'Daal Tadka', Quantity: 1, Portion: Full (default)
    - Example: '4 roti' → Item: 'Roti', Quantity: 4, Portion: Full (default)
    - Example: '1 margherita pizza' → Item: 'Margherita Pizza', Quantity: 1, Portion: Full (default)
  - **Fuzzy Matching**: Match recognized items to menu database using fuzzy string matching and NLP aliases
    - Handle common misspellings (e.g., 'daal' vs 'dal', 'marghaerita' vs 'margherita')
    - Match alternative names (e.g., 'butter naan' matches 'Naan' with 'Butter' variant)
  - **Portion Recognition** (if enabled in settings):
    - Recognize portion keywords: 'half', 'full', 'large', 'small', 'regular', 'quarter', etc.
    - Example: 'half platedaal tadka' → Portion: Half Plate (if available in database)
    - If portion not specified, default to 'Full Portion'\n  - **Confidence Scoring**: Assign confidence score to each recognized item (0-100%)
    - Threshold: Configurable in settings (default: 80%)
    - Items below threshold flagged for clarification

**Step 3: Chatbot Response & Order Confirmation**
\n**Scenario A: All Items Recognized with High Confidence**
- Chatbot displays confirmation message (left-aligned, glassmorphism bubble):
  - Message: 'Great! I found the following items for you:' (white text)\n  - **Order Summary Card** (glassmorphism effect with neon purple border):
    - List of recognized items with quantities and portions:\n      - '1x Daal Tadka (Full Portion) - ₹150'
      - '4x Roti (Full Portion) - ₹40(₹10 each)'
      - '1x Margherita Pizza (Full Portion) - ₹300'
    - **Subtotal**: '₹490' (bold, neon cyan color)
    - **Applicable Promotions** (if any):
      - Display applicable promotions with discount details
      - Example: 'Summer Sale: 20% OFF - You save ₹98' (neon green color)
- 'Apply Offer' button (small, neon gradient)\n  - **Confirmation Buttons** (below order summary card):
    - 'Add to Cart' button (primary, neon purple gradient, bold) - Adds items to cart and closes chatbot
    - 'Modify Order' button (secondary, outline, neon purple border) - Allows customer to edit quantities or portions
    - 'Cancel' button (secondary, outline, grey) - Clears order and returns to chat
\n**Scenario B: Some Items Not Recognized or Low Confidence**
- Chatbot displays clarification message:\n  - Message: 'I found most of your items, but I need some help with a few:' (white text)
  - **Recognized Items Section**:
    - List of successfully recognized items (same format as Scenario A)
  - **Unrecognized Items Section**:
    - Heading: 'Items I could not find:' (neon yellow color)
    - List of unrecognized items with suggestions:\n      - Example: 'marghaerita pizza' (customer input)
      - Suggestion: 'Did you mean: Margherita Pizza?' (neon cyan color, clickable)
      - Alternative suggestions: 'Pepperoni Pizza', 'Veggie Pizza' (clickable links)
    - If no suggestions available: 'I could not find this item in the menu. Please check the spelling or browse the menu.' (small text, light grey)
  - **Action Buttons**:
    - 'Add Recognized Items to Cart' button (primary, neon purple gradient) - Adds only recognized items
    - 'Try Again' button (secondary, outline) - Allows customer to rephrase order
    - 'Browse Menu' button (secondary, outline) - Opens menu page\n
**Scenario C: No Items Recognized**
- Chatbot displays error message:
  - Message: 'I am sorry, I could not find any items matching your order. Please try rephrasing or browse the menu.' (white text)\n  - **Suggestions**:
    - 'Try using item names from the menu (e.g., Daal Tadka, Roti, Margherita Pizza)'
    - 'Check spelling and try again'
  - **Action Buttons**:
    - 'Browse Menu' button (primary, neon purple gradient)\n    - 'Try Again' button (secondary, outline)
\n**Step 4: Add to Cart & Proceed to Checkout**
\n**After Customer Clicks 'Add to Cart'**:\n- Chatbot displays success message:\n  - Message: 'Your order has been added to your cart!' (neon green color, checkmark icon)
  - **Order Summary**:
    - Total items: 'X items added' (small text, light grey)
    - Cart total: '₹490' (bold, neon cyan color)
  - **Action Buttons**:
    - 'Proceed to Checkout' button (primary, neon purple gradient, bold) - Navigates to checkout page
    - 'Add More Items' button (secondary, outline) - Keeps chatbot open for additional orders
    - 'View Cart' button (secondary, outline) - Opens cart sidebar
- **Cart Icon Badge Updates**: Cart icon in top navigation bar displays updated item count with bounce animation
- **Chatbot Auto-Close** (optional, configurable in settings): Chatbot modal closes automatically after 3 seconds if customer does not click any button

**C. NLP Chatbot Features**

**1. Multi-Item Order Support**
- Customers can order multiple items in a single message\n- Example: 'I want 1 daal tadka, 4 roti, 1 margherita pizza, and 2 cokes'
- Chatbot recognizes and processes all items simultaneously

**2. Quantity Recognition**
- Recognize numeric quantities: '1', '2', '10', etc.
- Recognize word-based quantities: 'one', 'two', 'ten', etc.
- Handle plural forms: '2 rotis' → '2x Roti'
\n**3. Portion Recognition** (if enabled in settings)\n- Recognize portion keywords: 'half', 'full', 'large', 'small', 'regular', 'quarter', 'family size', etc.
- Example: 'half plate daal tadka' → Portion: Half Plate
- Example: 'large margherita pizza' → Portion: Large\n- If portion not specified, default to 'Full Portion'

**4. Fuzzy Matching & Typo Tolerance**
- Handle common misspellings and typos
- Example: 'marghaerita' matches 'Margherita'\n- Example: 'daal' matches 'Dal'
- Use Levenshtein distance algorithm for fuzzy matching

**5. NLP Aliases & Alternative Names**
- Menu items can have multiple aliases stored in database
- Example: 'Daal Tadka' aliases: 'dal tadka', 'daal fry', 'yellow dal', 'tadka dal'
- Example: 'Margherita Pizza' aliases: 'margherita', 'cheese pizza', 'plain pizza'
- Owner can add aliases in Menu Management → NLP Aliases Tab

**6. Contextual Understanding**
- Recognize common ordering phrases:\n  - 'I want...', 'Get me...', 'Order...', 'Can I have...', 'I would like...'
- Ignore filler words: 'please', 'thanks', 'also', 'and', etc.
\n**7. Promotion Application via NLP** (if enabled in settings)
- Customers can request promotion application in natural language
- Example: 'Apply summer sale offer to my order'\n- Example: 'Use promo code SUMMER20'\n- Chatbot validates and applies promotion, displays discount in order summary

**8. Order Modification**
- Customers can modify order before adding to cart
- Clicking 'Modify Order' button displays editable order summary:\n  - Each item has quantity selector and portion dropdown
  - 'Remove' button to delete item
  - 'Update' button to confirm changes
\n**9. Voice Input** (optional feature)
- Microphone button for voice-to-text input\n- Uses browser's Web Speech API or third-party service (e.g., Google Speech-to-Text)
- Converts spoken order to text and processes via NLP engine

**10. Chat History**
- Chat thread persists during session
- Customers can scroll up to view previous messages
- 'Clear Chat' button (optional) to reset conversation

**11. Fallback to Manual Ordering**
- If NLP fails to recognize items, chatbot suggests browsing menu manually
- 'Browse Menu' button opens menu page in same window or new tab
\n**D. NLP Chatbot UI/UX Design**

**Visual Design**:\n- **Chatbot Window**: Glassmorphism card with neon purple gradient border, rounded corners (16px), subtle box shadow with neon glow
- **Chat Bubbles**:
  - Customer messages: Right-aligned, neon cyan background, white text, rounded corners
  - Chatbot messages: Left-aligned, glassmorphism effect with neon purple border, white text, rounded corners
- **Order Summary Card**: Glassmorphism effect with neon purple border, item list with icons, subtotal in bold neon cyan\n- **Buttons**: Primary buttons with neon purple gradient, secondary buttons with outline style, hover effects with scale and glow
- **Typing Indicator**: Animated dots (three dots bouncing) in glassmorphism bubble
- **Success/Error Messages**: Neon green for success (checkmark icon), neon red for errors (exclamation icon)

**Animations**:
- **Message Slide-In**: New messages slide in from right (customer) or left (chatbot) with fade-in animation (duration0.3s)
- **Typing Indicator**: Dots bounce up and down in loop
- **Order Summary Card**: Slides down with fade-in animation (duration 0.5s)
- **Button Hover**: Scale up (1.05) and glow intensifies
- **Success Checkmark**: Checkmark icon animates with scale and rotation (duration 0.5s)

**Responsive Design**:
- **Desktop**: Chatbot window centered, width 600px, height 700px
- **Mobile**: Full-screen chatbot modal, input area fixed at bottom, chat area scrollable
- **Touch-Friendly**: Buttons and input fields have minimum44px height

**Accessibility**:
- **Keyboard Navigation**: Tab key to navigate buttons, Enter key to send message
- **Screen Reader Support**: ARIA labels for chatbot messages, buttons, and input field
- **Focus Indicators**: Clear focus outlines on interactive elements
\n**E. NLP Order Analytics (Owner Dashboard)**

**NLP Order Metrics**:
- Total NLP orders placed today/week/month
- NLP order success rate (percentage of orders successfully processed)
- Failed NLP order attempts with reasons (item not recognized, low confidence, etc.)
- Most ordered items via NLP\n- Average NLP order value
- Customer satisfaction with NLP ordering (optional feedback prompt)
- Common NLP queries and recognition accuracy

**NLP Performance Dashboard**:
- **Recognition Accuracy Chart**: Line chart showing NLP recognition accuracy over time
- **Top Unrecognized Items**: List of items customers tried to order but were not recognized (helps owner add aliases)
- **NLP vs Manual Orders**: Comparison chart showing percentage of orders placed via NLP vs manual menu browsing
\n**F. NLP Settings & Configuration (Owner Settings Module)**

**NLP Chatbot Settings**:
- Toggle:'Enable NLP Natural Language Ordering' (on/off, default: on)
- Toggle: 'Display NLP Chatbot Button on Menu Page' (on/off, default: on)
- Toggle: 'Auto-Open Chatbot on Menu Page Load' (on/off, default: off)
- Input: 'NLP Recognition Confidence Threshold' (percentage, default: 80%)
- Toggle: 'Allow Portion Selection via NLP' (on/off, default: on)
- Toggle: 'Enable NLP Order Confirmation' (on/off, default: on) - If enabled, chatbot displays order summary and asks for confirmation before adding to cart
- Toggle: 'Enable NLP Promotion Application' (on/off, default: on)
- Input: 'NLP Chatbot Welcome Message' (textarea, customizable)
- Input: 'NLP Chatbot Error Message' (textarea, customizable)\n- Toggle: 'Enable Voice Input' (on/off, default: off)
- Toggle: 'Auto-Close Chatbot After Order' (on/off, default: off)
- Input: 'Auto-Close Delay' (seconds, default: 3)\n\n**NLP Aliases Management** (in Menu Management):
- Each menu item has'NLP Aliases' tab in Add/Edit Item modal
- Owner can add multiple aliases and alternative names for each item
- Example: 'Daal Tadka' aliases: 'dal tadka', 'daal fry', 'yellow dal', 'tadka dal'
- Aliases stored in database and used for fuzzy matching

---

#### 3.2.5 Complete Order Placement & Checkout Flow with Table Number Entry, Database-Driven Portion Display, Swiggy-Style Promotion Application, and NLP Order Support

**Overview**:
Streamlined checkout process with customer information collection, Swiggy-style promo codes, payment options, and order confirmation. **Supports orders placed via manual menu browsing and NLP chatbot.**

**STEP 1: Cart Review & Proceed to Checkout**
- Cart sidebar/page with item list (showing portion names, applied promotions, **and order source indicator:'Added via Manual' or 'Added via NLP Chatbot' with robot icon**), price breakdown (subtotal, discount, taxes, total), action buttons\n\n**STEP 2: Checkout Page - Customer Information, Order Details, and Swiggy-Style Promotion Application**
- Customer information section\n- Order type & delivery details (with table number entry logic and real-time table synchronization)
- **Swiggy-Style Promo Code Section**:
  - **Section Heading**: 'Apply Promo Code' (medium bold text, neon cyan color)
  - **Available Offers Display** (Swiggy-inspired expandable section):
    - **Collapsed State**:
      - Button: 'View Available Offers' (secondary, outline, neon cyan border, icon: chevron-down)
      - Positioned at top of promo code section
    - **Expanded State** (when button clicked):
      - Button icon changes to chevron-up
      - Promotion cards slide down with smooth animation (slide-down + fade-in, duration 0.3s)
      - **Promotion Cards Grid** (2columns on desktop, 1 column on mobile):
        - Each card displays:\n          - Glassmorphism effect with neon gradient border
          - Promotion type badge (top-left, pill-shaped, neon background)
          - Promotion name (bold, large white text)
          - Discount details (medium text, neon cyan color)
          - Promo code (if applicable, dashed border, copy icon)
          - Validity period (small text, light grey)
          - 'Apply' button (primary, neon gradient, full-width)
        - Clicking 'Apply' button:\n          - System validates promotion eligibility
          - If eligible: Promotion applied to order, success toast displays, order summary updates with discount breakdown
          - If not eligible: Error toast displays with reason (e.g., 'Minimum order value not met', 'Offer valid for new customers only')
  - **Promo Code Input** (Swiggy-style):
    - Text input field: 'Enter promo code' (placeholder text, dark background, neon border on focus)
    - 'Apply' button (primary, neon gradient, positioned to right of input)
    - After entering code and clicking 'Apply':
      - System validates code (checks eligibility, validity, usage limits)
      - **If valid**: Success message: 'Promo code [CODE] applied! You saved ₹X' (neon green color, bold), discount amount updates in order summary
      - **If invalid**: Error message: 'Invalid or expired promo code' (neon red color)\n  - **Applied Promotions Display**:
    - If promotion applied, display promotion card with:
      - Glassmorphism effect with neon cyan border
      - Promotion name and discount details
      - 'You saved ₹X' (neon green color, bold, large text)
      - 'Remove' button (secondary, outline) - removes promotion from order
- Order summary (sticky on desktop, showing portion names, applied promotions, discount breakdown, **and order source: 'Manual Order' or 'NLP Chatbot Order'**)
- 'Proceed to Payment' button\n\n**STEP 3: Payment Page - Payment Method Selection & Processing**
- Payment method selection (Cash, Card, UPI, Wallet)
- Order summary (with applied promotions and discount breakdown)
- Action buttons\n- Payment processing flow\n\n**STEP 4: Order Confirmation Page**
- Success message\n- Order details card (including table number, portion names, applied promotions, discount amount, **order source: 'Placed via Manual' or 'NLP Chatbot'**, waiter assignment status: 'Your order is being assigned to a waiter')
- Order summary (with discount breakdown)
- Action buttons
- Additional information\n- Post-order actions\n
**STEP 5: Transition to Order Tracking**
- Automatic redirect or manual navigation\n- Order tracking page\n\n**Additional Checkout Features**:
- Guest checkout\n- Saved addresses & payment methods
- Order modifications
- Accessibility & UX enhancements
- Security measures

---

#### 3.2.6 Real-Time Order Tracking with Assigned Waiter Information Display and Promotion Details

**Overview**:\nCustomers track orders in real-time with automatic status updates, assigned waiter information with real-time synchronization, applied promotion details, **and order source indicator (Manual or NLP Chatbot)**.

**Key Features**:
\n**A. Order Tracking Page Layout**
- Page header with order ID, **order source badge ('Manual Order' or 'NLP Chatbot Order' with robot icon)**, and status badge\n- **Applied Promotion Section** (if promotion applied):
  - Section heading: 'Offer Applied' (neon cyan color)\n  - Promotion card with glassmorphism effect:\n    - Promotion name (bold, large white text)
    - Discount details (medium text, neon cyan color)
    - Promo code (if applicable):'Code: SUMMER20' (small text, light grey)
    - Discount amount:'You saved ₹X' (neon green color, bold)
  - Note: 'This offer has been applied to your order.' (small text, light grey)
- **Assigned Waiter Information Section** (prominent display):
  - **If waiter assigned**:
    - Section heading: 'Your Waiter' (neon magenta color)
    - Waiter card with glassmorphism effect and neon gradient border:\n      - Waiter avatar (large, circular, neon border)
      - Waiter name (bold, large white text)
      - Waiter contact info (if enabled in settings): Phone number or extension (medium text, light grey)
      - Status indicator: 'Handling Your Order' (neon green badge)
      - 'Chat with Waiter' button (primary, neon gradient)\n    - Note: '[Waiter Name] is handling your order and will assist you shortly.' (small text, light grey)
  - **If waiter not yet assigned**:
    - Section heading: 'Waiter Assignment' (neon yellow color)
    - Placeholder card with glassmorphism effect:
      - Icon: Waiter silhouette or loading spinner
      - Message: 'Your order is being assigned to a waiter' (medium text, white)
      - Status badge: 'Assignment Pending' (neon yellow, pulsing glow animation)
    - Note: 'Please wait while we assign a waiter to your order.' (small text, light grey)
- Order details section (order items with portion names, applied promotions, table number, order total with discount breakdown, estimated time)\n- Order timeline section (vertical timeline with status steps, including'Promotion Applied' step if applicable, **and 'Order Placed via NLP Chatbot' step if applicable**)
- Real-time updates indicator (WebSocket connection status)
- Chat with restaurant button\n
**B. Real-Time Waiter Assignment Update**
- WebSocket Event Listener: Customer dashboard listens for 'waiter_assigned' event
- Event Payload: Contains order_id, waiter_name, waiter_avatar, waiter_contact (if enabled)
- Automatic UI Update:\n  - Waiter assignment section transitions from 'Assignment Pending' to 'Your Waiter' with smooth fade-in animation
  - Waiter card slides in with bounce animation\n  - Waiter avatar, name, and contact info populate automatically
  - Status badge changes to 'Handling Your Order' (neon green)
  - Timeline adds new step: 'Waiter Assigned: [Waiter Name]' with timestamp
  - In-app notification displays: 'Your order has been assigned to [Waiter Name]. They will assist you shortly.'
  - Notification bell badge increments

**C. Real-Time Waiter Reassignment Update**
- WebSocket Event Listener: Customer dashboard listens for 'waiter_reassigned' event
- Event Payload: Contains order_id, new_waiter_name, new_waiter_avatar, new_waiter_contact\n- Automatic UI Update:
  - Waiter card updates with fade-out/fade-in animation
  - New waiter avatar, name, and contact info replace old waiter info
  - Timeline adds new step: 'Waiter Reassigned: [Old Name] → [New Name]' with timestamp
  - In-app notification displays: 'Your order has been reassigned to [New Waiter Name]'\n\n**D. Order Timeline with Waiter Assignment, Promotion Application, and NLP Order Steps**
- Timeline displays all order status steps:\n  1. **Order Placed (timestamp)** - **If NLP order**: 'Order Placed via NLP Chatbot' with robot icon (highlighted with neon purple)
  2. **Promotion Applied: [Promotion Name] (timestamp)** - highlighted with neon cyan icon (if promotion applied)
  3. **Waiter Assigned: [Waiter Name] (timestamp)** - highlighted with neon green icon\n  4. Order Accepted (timestamp)
  5. Preparing (timestamp)
  6. Ready for Pickup/Delivery (timestamp)
  7. Completed (timestamp)
- Each step has icon, label, timestamp, and status indicator
- Current step highlighted with neon glow animation
- Waiter assignment step includes waiter avatar next to timestamp
\n**E. Chat with Waiter Feature**
- 'Chat with Waiter' button opens real-time chat interface
- Chat window displays waiter name and avatar at top
- Real-time messaging with WebSocket integration
- Message history persists across sessions
- Typing indicators and read receipts

**F. Real-Time Order Status Updates**
- WebSocket connection for instant status changes
- Timeline auto-updates without page refresh
- Estimated time dynamically recalculates
- Push notifications for major status changes

---

#### 3.2.7 Order History & Reordering with Promotion Details\n
**Overview**:
View past orders with detailed information, including assigned waiter info, applied promotions, **and order source (Manual or NLP Chatbot)**, and reorder functionality.

**Key Features**:
- Order history page with order list, search & filter (including filter by 'Orders with Promotions', **filter by 'NLP Chatbot Orders'**)\n- Order details modal (includes assigned waiter info: waiter name, avatar, and 'Waiter: [Name]' label, applied promotion details: promotion name, discount amount, promo code, **and order source badge: 'Manual Order' or 'NLP Chatbot Order' with robot icon**)
- Reorder functionality (with portion names, and option to apply same promotion if still valid, **and option to reorder via NLP chatbot: 'Reorder with AI' button opens chatbot with pre-filled order**)
\n---

#### 3.2.8 Favorites & Saved Items\n
**Overview**:
Save favorite menu items and restaurants.\n
**Key Features**:\n- Favorites page with tabs for items and restaurants
- Add to favorites\n\n---

#### 3.2.9 Loyalty & Rewards\n
**Overview**:
View loyalty points and redeem rewards.

**Key Features**:
- Loyalty dashboard with points balance, rewards catalog, points history
- Referral program\n
---

#### 3.2.10 Offers & Promotions Page (Dedicated Page - Swiggy-Style with Real-Time Updates)

**Overview**:
Dedicated page displaying all available promotions and offers with detailed information, Swiggy-style UI, and real-time WebSocket synchronization.

**Page Layout**:
\n**A. Page Header**
- Heading: 'Exclusive Offers & Promotions' (neon cyan color, large bold text,32px)
- Subheading: 'Save more on your orders with these amazing deals!' (medium text, light grey, 16px)
- Search bar: 'Search offers by name or code' (with search icon, dark background, neon border on focus)
\n**B. Filter & Sort Options**
- **Filter Options** (horizontal pill buttons, Swiggy-style):
  - 'All Offers' (default, neon gradient background when selected)
  - 'Percentage Discounts'\n  - 'Flat Discounts'
  - 'Buy X Get Y'\n  - 'Free Items'
  - 'First Order Offers'
  - 'Loyalty Offers'
  - Horizontal scroll on mobile
- **Sort Options** (dropdown, positioned to right of filters):
  - 'Highest Discount First'
  - 'Expiring Soon'
  - 'Newest First'
\n**C. Promotions Grid (Swiggy-Style with Real-Time Updates)**
- **Grid Layout**: 3 columns on desktop, 2 columns on tablet, 1 column on mobile\n- **Promotion Cards** (Swiggy-inspired design):
  - **Card Layout**:
    - Large rectangular card with rounded corners (16px border-radius)
    - Glassmorphism effect with semi-transparent dark background (rgba(26, 26, 26, 0.7))
    - Neon gradient border (color based on promotion type)
    - Subtle box shadow with neon glow (0 4px 20px rgba(0, 240, 255, 0.3))
    - Hover effect: Card scales up (1.05) and glow intensifies\n  - **Card Content**:
    - **Card Header**:
      - Promotion type badge (top-left corner, pill-shaped, neon background, white text, icon)\n      - Example: 'FLAT DEAL' badge with discount icon
    - **Card Body**:
      - Promotion name (bold, large white text,20px)
      - Discount details (medium text, neon cyan color, 16px)
      - Example: '20% OFF on all orders', 'Flat₹100 OFF on orders above ₹500'
- Promo code section (if applicable):
        - 'Use Code:' label (small text, light grey, 12px)
        - Promo code (bold, white text, dashed border, 14px)
        - Copy icon (clickable, neon cyan color)
        - Clicking copy icon copies code to clipboard and displays success toast: 'Code copied!'
      - Validity period: 'Valid till [Date]' (small text, light grey, 12px)
      - Terms & conditions: 'View T&C' (link, small text, neon cyan color) - opens modal with full terms
    - **Card Footer**:
      - 'Apply Offer' button (primary, neon gradient, full-width, bold)
      - 'View Details' button (secondary, outline, neon cyan border, full-width)
  - **Card Dimensions**:
    - Desktop: Width 100% (responsive), Height auto (min200px)
    - Mobile: Width 100%, Height auto (min 180px)
  - **Spacing**: 20px gap between cards\n- **Real-Time Updates via WebSocket**:
  - **New Promotion Created**:
    - WebSocket event'promotion_created' received
    - New promotion card slides into grid from top with smooth animation (slide-down + fade-in, duration 0.5s)
    - Card positioned based on sort order (e.g., if sorted by 'Newest First', card appears at top)
- In-app notification displays: 'New Offer Available: [Promotion Name] - [Discount Details]'
    - Notification bell shakes and badge increments
  - **Promotion Updated**:
    - WebSocket event 'promotion_updated' received\n    - Existing promotion card updates with fade animation (fade-out, update content, fade-in, duration 0.3s)
    - Updated card briefly highlights with neon glow animation (duration 1s)
  - **Promotion Deactivated**:
    - WebSocket event 'promotion_deactivated' received
    - Promotion card fades out and slides out to top (fade-out + slide-up, duration 0.5s)\n    - Card removed from grid
    - If promotion was applied to items in cart, system displays notification: 'Offer [Name] is no longer available and has been removed from your cart'
- **Promotion Reactivated**:
    - WebSocket event 'promotion_activated' received
    - Promotion card slides into grid from top with animation (slide-down + fade-in, duration 0.5s)\n    - In-app notification displays: 'Offer [Name] is now available again!'
\n**D. Promotion Details Modal**
- **Triggered by**: Clicking 'View Details' button on promotion card
- **Modal Layout**:
  - Heading: Promotion name (neon cyan color)\n  - Promotion type badge\n  - **Discount Details Section**:
    - Large text displaying discount (e.g., '20% OFF', 'Flat ₹100 OFF')
    - Description of discount and conditions
  - **Promo Code Section** (if applicable):
    - Promo code display with copy button
  - **Eligibility Section**:
    - 'Who can use this offer?' (heading)\n    - List of eligibility criteria (e.g., 'All customers', 'New customers only', 'Loyalty members only')
  - **Applicable Items Section** (if promotion applies to specific items):
    - 'Applicable on:' (heading)
    - List of menu items or categories
  - **Validity Section**:
    - Start date and end date\n    - Countdown timer: 'Expires in X days Y hours' (if expiring soon, display in neon yellow color)
  - **Terms & Conditions Section**:
    - Full terms and conditions text
  - **Action Buttons**:
    - 'Apply Offer' (primary, neon gradient)\n    - 'Close' (secondary, outline)\n\n**E. Apply Offer Functionality**
- **Triggered by**: Clicking 'Apply Offer' button on promotion card or in promotion details modal
- **Action Flow**:
  1. System checks if customer has items in cart
  2. **If cart is empty**:
     - Display message: 'Your cart is empty. Add items to your cart to apply this offer.'
     - 'Browse Menu' button (primary, neon gradient) - navigates to menu page
     - **'Order with AI' button (secondary, neon purple gradient, robot icon)** - opens NLP chatbot\n  3. **If cart has items**:
     - System validates promotion eligibility:\n       - Check if customer meets eligibility criteria (new customer, loyalty member, etc.)
       - Check if cart items are eligible for promotion
       - Check if minimum order value is met (if applicable)
       - Check if promotion usage limits are not exceeded
     - **If eligible**:
       - Promotion automatically applied to cart\n       - Success toast notification: 'Offer applied! You saved ₹X'\n       - Cart updates to show applied promotion and discount breakdown
       - Navigate to cart/checkout page
     - **If not eligible**:
       - Error toast notification with reason: 'This offer is not applicable. [Reason]' (e.g., 'Minimum order value not met', 'Offer valid for new customers only')
       - Display suggestion: 'Add ₹X more to your cart to apply this offer' (if minimum order value not met)
\n**F. Real-Time Updates**
- **WebSocket Integration**:
  - Persistent WebSocket connection for instant updates
  - Listen for 'promotion_created' event → New promotion card slides into grid with animation
  - Listen for 'promotion_updated' event → Existing promotion card updates with fade animation
  - Listen for 'promotion_deactivated' event → Promotion card fades out and is removed from grid
  - Listen for 'promotion_activated' event → Promotion card slides into grid (for reactivated promotions)
- **In-App Notifications**:
  - 'New Offer Available: [Promotion Name]' (when new promotion created)
  - 'Offer Expiring Soon: [Promotion Name] expires in 2 days' (reminder notification)
\n**G. Empty State**
- **If no promotions available**:
  - Display message: 'No offers available at the moment. Check back soon for exciting deals!'
  - Illustration: Empty state graphic (e.g., gift box icon)\n  - 'Browse Menu' button (primary, neon gradient)\n  - **'Order with AI' button (secondary, neon purple gradient, robot icon)**

---
\n#### 3.2.11 Profile & Settings

**Overview**:\nManage customer profile and app preferences.

**Key Features**:
- Profile page with profile information, change password, delete account
- Settings page with notification preferences (including waiter assignment notifications, promotion notifications, **and NLP order notifications**), language, theme, privacy settings
\n---

#### 3.2.12 Help & Support

**Overview**:
Access help resources and contact support.

**Key Features**:
- Help center with FAQs (including FAQ section for promotions: 'How do I apply a promo code?', 'Can I use multiple offers on one order?', etc., **and FAQ section for NLP ordering: 'How do I order using AI chatbot?', 'What if the chatbot does not recognize my order?', 'Can I specify portions in natural language?', etc.**), contact support, live chat\n- Feedback\n
---

#### 3.2.13 Add-On Order Feature

**Overview**:\nAllows customers to add items to their active order without creating a new order or generating a separate bill. **Supports adding items via manual menu browsing and NLP chatbot.**

**Key Features**:
\n**A. Active Order Detection**
- System checks if customer has an active order for the current table/session
- Active order defined as: Order status is 'Pending', 'Accepted', or 'Preparing'
- If active order exists, display 'Add-On Order' option prominently

**B. Add-On Order UI**
- Menu page banner: 'You have an active order (#ORD-1234). Add more items to your current order.'
- **NLP Chatbot Add-On Support**: If customer opens NLP chatbot while having active order, chatbot displays message: 'You have an active order (#ORD-1234). I can add more items to your current order. Just tell me what you want!' (neon cyan color)
- Cart displays two sections: 'Current Order Items' (read-only) and 'Add-On Items' (editable, **with source indicator: 'Added via Manual' or 'Added via NLP Chatbot'**)
- **Promotion Application for Add-On Items**:
  - If original order has applied promotion, system checks if promotion is still valid and applicable to add-on items
  - If applicable, promotion automatically extends to add-on items
  - If not applicable, display message: 'Your current offer does not apply to add-on items.'
  - Customer can apply a different promotion to add-on items (if eligible)
- Total price breakdown shows combined total (with discount breakdown if promotion applied)
\n**C. Add-On Order Checkout Flow**
- Simplified checkout with confirmation modal
- Payment handling based on original order payment status
\n**D. Add-On Order Confirmation**
- Success message with updated order summary (including applied promotions, discount breakdown, **and add-on items source: 'Added via Manual' or 'Added via NLP Chatbot'**)\n- Action buttons to track order or return to menu

**E. Real-Time Notifications**
- Customer, owner, and assigned waiter receive notifications about add-on items
- Waiter notification: 'Add-on items added to Order #ORD-1234 (your assigned order)'
- **If add-on items added via NLP chatbot**: Notification includes'Added via NLP Chatbot' badge
\n**F. Order Timeline Update**
- New timeline step: 'Add-On Items Added' with timestamp
- **If add-on items added via NLP chatbot**: Timeline step displays 'Add-On Items Added via NLP Chatbot' with robot icon (highlighted with neon purple)\n- If promotion applied to add-on items, timeline includes: 'Promotion Applied to Add-On Items: [Promotion Name]'\n
**G. Kitchen Display System (KDS) Integration**
- Add-on items appear in KDS with 'ADD-ON' label
- **If add-on items added via NLP chatbot**: KDS displays 'NLP ADD-ON' label with robot icon
\n**H. E-Bill Generation**
- Combined e-bill with original and add-on items sections (including promotion details, discount breakdown, **and item source indicators: 'Manual' or 'NLP Chatbot'**)
\n**I. Add-On Order Restrictions**
- Available only for active orders (Pending, Accepted, Preparing)\n- Maximum add-on limit: 3 times per order (configurable)
\n**J. Add-On Order Analytics**
- Owner analytics dashboard includes add-on order metrics (including promotion redemption on add-on orders, **and add-on orders placed via NLP chatbot**)

**K. Settings Configuration**
- Toggle: 'Enable Add-On Orders'\n- Input: 'Maximum Add-Ons Per Order'\n- Toggle: 'Allow Add-Ons After Payment'
- **Toggle: 'Allow Promotion Application on Add-On Items' (on/off, default: on)**
- **Toggle: 'Allow NLP Chatbot for Add-On Orders' (on/off, default: on)**
\n---

### 3.3 Enhanced Waiter/Agent Features

#### 3.3.1 Waiter Dashboard with Assigned Orders and Promotion Information

**Overview**:\nWaiter-facing dashboard with assigned orders, tables, and tasks, including promotion information for assigned orders, **and NLP order indicators**.

**Key Features**:
- Dashboard layout with metrics (including'Orders Assigned to You Today', **'Orders with Promotions Applied'**, **'NLP Chatbot Orders Assigned to You'**), assigned orders section (displays only orders assigned to this waiter), active tables\n- **Assigned Orders Section**:
  - Heading: 'Your Assigned Orders'\n  - Order cards grid showing orders assigned to this waiter
  - Each card displays: Order ID, table number, customer name, order items, **promotion badge (if applied)**, **order source badge ('Manual' or 'NLP Chatbot' with robot icon)**, order total (with discount breakdown if promotion applied), status badge, timestamp
  - Action buttons: 'View Details', 'Update Status', 'Chat with Customer'\n  - Real-time updates when new orders assigned or reassigned
- **New Order Notification**:
  - When owner assigns order to waiter, waiter receives notification: 'You have been assigned to Order #ORD-1234 (Table X)'
  - **If promotion applied**: Notification includes: 'Promotion [Name] applied - Discount: ₹X'\n  - **If NLP order**: Notification includes: 'Order placed via NLP Chatbot' with robot icon
- Notification bell badge increments
  - Order card slides into 'Assigned Orders' section with animation
- Order management (view details including promotion information and order source)
- Communication (chat with owner and customer)
- Notifications (including assignment and reassignment notifications, promotion application notifications, **and NLP order notifications**)

---

#### 3.3.2 Waiter Profile & Attendance

**Overview**:\nWaiter profile, clock in/out, and attendance history, including assignment performance metrics.

**Key Features**:
- Profile page (includes performance metrics: orders handled, average handling time, customer ratings, availability rate)\n- Attendance (clock in/out, history)\n- **Clock In/Out Logic**:
  - On clock in: Waiter status changes to 'Free' (if workload below threshold) or 'Busy' (if workload at/above threshold)
  - On clock out: Waiter status changes to 'Offline'\n- Leave requests\n\n---

## 4. Complete User Flows

### 4.1 Restaurant Owner Flow (Updated with Promotions Management and NLP Order Handling)

1. Sign Up/Login → Owner Dashboard\n2. Setup Restaurant Profile (including restaurant type)\n3. Add Menu Items with Database-Driven Portions and NLP Aliases
4. Edit/Delete Menu Items (real-time sync to customers)
5. Add/Edit/Delete Categories (real-time sync)\n6. Generate/Edit/Delete QR Codes (real-time table sync)
7. Add Waiters in Staff Management → Waiters appear in 'Free Waiters' section when clocked in and available
8. **Create Promotion**:
   - Navigate to Marketing → Click 'Create Promotion'
   - Fill in promotion details (name, type, discount, eligibility, validity)\n   - Preview and create promotion
   - Promotion activates and syncs to customer dashboards in real-time via WebSocket
   - Customer Home displays new promotion in Swiggy-style carousel with slide-in animation
   - Offers & Promotions page displays new promotion card with slide-in animation
9. **Manage Promotions**:
   - View active, scheduled, and expired promotions
   - Edit, deactivate, reactivate, or duplicate promotions
   - View promotion analytics\n10. **Configure NLP Chatbot Settings**:
    - Navigate to Settings → NLP Chatbot Settings
    - Enable/disable NLP ordering feature
    - Configure recognition threshold, welcome message, error message\n    - Add NLP aliases for menu items in Menu Management
11. Receive Order → Order status: 'Pending - Awaiting Waiter Assignment'
    - **If NLP order**: Order card displays 'NLP Chatbot Order' badge with robot icon
12. **Assign Waiter (Mandatory)**:
    - Open order details or click 'Assign Waiter' on order card
    - Assignment modal displays only active and free waiters
    - Select waiter from filtered list
    - Confirm assignment
    - Waiter status automatically updates from 'Free' to 'Busy' in Staff Management
    - System updates order status to 'Pending - Waiter Assigned'
    - Real-time WebSocket event 'waiter_assigned' sent to customer
    - Customer dashboard automatically updates to display assigned waiter name, avatar, and contact info
    - Waiter receives notification\n13. **Receive Notification: 'Promotion [Name] applied to Order #ORD-1234'** (if customer applied promotion)
14. **Receive Notification: 'NLP Order #ORD-1234 placed via chatbot'** (if NLP order)
15. Track Order (including promotion details and order source)
16. Manage Staff (including waiter assignment tracking and free waiter visibility)
17. View Analytics (including waiter performance metrics, availability rate, promotion performance analytics, **and NLP chatbot performance analytics**)
18. Configure Settings (including waiter assignment settings, workload threshold, promotion settings, **and NLP chatbot settings**)
\n### 4.2 Customer Flow (Complete Checkout Flow with Add-On Order Feature, Waiter Assignment Display, Swiggy-Style Promotion Application, and NLP Natural Language Ordering)

1. Sign Up/Login → Customer Home with Swiggy-style promotions carousel and NLP Quick Order section
2. **View Promotions & Offers (Real-Time)**:
   - Customer Home displays 'Exclusive Offers for You' section with horizontal scrollable Swiggy-style promotion carousel
   - Promotions update in real-time via WebSocket:\n     - New promotions slide into carousel with animation
     - Updated promotions refresh with fade animation
     - Deactivated promotions fade out and are removed\n   - Click 'View All Offers' → Navigate to dedicated Offers & Promotions page
   - Browse available promotions with Swiggy-style cards, view details, copy promo codes
   - Promotions page updates in real-time:\n     - New promotions slide into grid from top
     - Updated promotions highlight with glow animation
     - Deactivated promotions fade out and slide out
3. **Option A: Manual Menu Browsing**:
   - Scan QR Code (Mobile-Only) → Menu displayed with restaurant type badge, Swiggy-style promotions banner, and NLP chatbot button → Table number auto-detected
   - Browse Menu → Real-time menu updates → **View Swiggy-style promotion banner with horizontal scrollable offer cards** → **View promotion badges on eligible menu items**
   - Select Item with Database-Driven Portion → Choose portion → **View applicable promotions** → Add to Cart\n   - Review Cart → Edit quantities/portions → **Apply Promotion (Swiggy-Style)**:\n     - View available offers in cart (expandable section with Swiggy-style promotion cards)
     - Click 'Apply' on promotion card or enter promo code in input field
     - System validates and applies promotion\n     - Cart updates with discount breakdown
4. **Option B: NLP Natural Language Ordering**:
   - Click 'Start Ordering with AI' button on Customer Home or NLP chatbot icon in top navigation bar
   - NLP chatbot modal opens with welcome message and example queries
   - Customer types order in natural language (e.g., 'I want to order 1daal tadka, 4 roti, 1 margherita pizza')
   - Chatbot processes input via NLP engine:\n     - Recognizes menu items, quantities, and portions
     - Uses fuzzy matching and NLP aliases for item recognition
     - Assigns confidence scores to recognized items
   - **Scenario A: All Items Recognized**:
     - Chatbot displays order summary card with recognized items, quantities, portions, and prices
     - Displays applicable promotions with 'Apply Offer' button
     - Customer clicks 'Add to Cart' button
     - Items added to cart with'Added via NLP Chatbot' indicator
     - Cart icon badge updates with bounce animation
     - Chatbot displays success message with 'Proceed to Checkout' button
   - **Scenario B: Some Items Not Recognized**:
     - Chatbot displays recognized items and unrecognized items with suggestions
     - Customer clicks suggestions or rephrases order
     - Customer clicks 'Add Recognized Items to Cart' or 'Try Again'\n   - **Scenario C: No Items Recognized**:
     - Chatbot displays error message with suggestions
     - Customer clicks 'Browse Menu' or 'Try Again'\n5. Proceed to Checkout\n6. Checkout Page → Enter customer details → Select order type → **Apply/Review Promo Code (Swiggy-Style)** → Review order summary (with discount breakdown and order source: 'Manual' or 'NLP Chatbot') → Proceed to Payment
7. Payment Page → Select payment method → Enter payment details → Place Order & Pay
8. Order Confirmation → View order details (including applied promotion, discount amount, **order source: 'Placed via Manual' or 'NLP Chatbot'**) → **Waiter assignment status: 'Your order is being assigned to a waiter'** → Download receipt → Track Order
9. **Order Tracking Page**:
   - **Applied Promotion Section displays promotion details and discount amount**
   - **Order source badge displays 'Manual Order' or 'NLP Chatbot Order' with robot icon**
   - **Waiter assignment section displays 'Assignment Pending' status with pulsing neon yellow badge**
   - Customer waits for waiter assignment
10. **Owner Assigns Waiter (from free waiters list)**:
    - **Real-time WebSocket event 'waiter_assigned' received by customer dashboard**
    - **Waiter assignment section automatically updates without page refresh**:\n      - 'Assignment Pending' transitions to 'Your Waiter' with fade-in animation
      - Waiter card slides in displaying waiter avatar, name, and contact info
      - Status badge changes to 'Handling Your Order' (neon green)
      - Timeline adds 'Waiter Assigned: [Waiter Name]' step with timestamp
    - **In-app notification displays**: 'Your order has been assigned to [Waiter Name]. They will assist you shortly.'
    - **Notification bell badge increments**
11. **Customer Views Assigned Waiter Info**:
    - Waiter name, avatar, and contact info displayed prominently
    - 'Chat with Waiter' button available for direct communication
12. **Add-On Order Flow**:
    - Customer has active order with assigned waiter and applied promotion
    - **Option A: Manual Add-On**:
      - Customer opens menu → Banner displays add-on option\n      - Customer selects additional items → Add to Cart
    - **Option B: NLP Add-On**:
      - Customer opens NLP chatbot → Chatbot displays message: 'You have an active order (#ORD-1234). I can add more items to your current order. Just tell me what you want!'
      - Customer types add-on order in natural language (e.g., 'Add 2 cokes and 1 dessert')
      - Chatbot processes input and displays add-on order summary
      - Customer clicks 'Add to Cart'\n    - **System checks if promotion applies to add-on items**:\n      - If applicable, promotion extends to add-on items
      - If not, customer can apply different promotion (if eligible)
    - Cart displays current order items and add-on items (with promotion details and source indicators: 'Manual' or 'NLP Chatbot')
    - Customer reviews and confirms add-on\n    - System adds items to existing order
    - Assigned waiter receives notification about add-on items
    - Order tracking page updates\n13. Track Order → Real-time updates → **View assigned waiter info, applied promotion details, and order source**
14. Receive Order → Rate Order (including waiter rating)\n15. Browse Restaurants → View previously scanned restaurants → Select restaurant → View menu (with Swiggy-style promotion banner, badges, and NLP chatbot button) → Add items (via manual browsing or NLP chatbot) → **Apply promotions** → Complete order
16. Reorder → Previous portion names and promotions auto-selected (if still valid) → **Option to reorder via NLP chatbot: 'Reorder with AI' button opens chatbot with pre-filled order**
17. View Loyalty Points\n18. **Browse Offers & Promotions Page (Real-Time)** → View all available offers with Swiggy-style cards → Real-time updates via WebSocket → Apply offers to cart or order via NLP chatbot
\n### 4.3 Waiter Flow (Updated with Promotion Information and NLP Order Indicators)

1. Login → Waiter Dashboard
2. **Clock In → Waiter status changes to 'Free' (appears in Free Waiters section in Staff Management)**
3. **Receive Notification: 'You have been assigned to Order #ORD-1234 (Table X)'**
   - **If promotion applied**: Notification includes promotion details\n   - **If NLP order**: Notification includes 'Order placed via NLP Chatbot' with robot icon
4. **Waiter status automatically updates to 'Busy' (removed from Free Waiters section)**\n5. **View Assigned Orders (only orders assigned to this waiter, including promotion information and order source: 'Manual' or 'NLP Chatbot')**
6. View Order Details (with portion names, applied promotions, discount breakdown, order source badge, and add-on items highlighted)
7. Update Order Status (Accept → Preparing → Ready → Completed)
8. **Receive Notification: 'Add-on items added to Order #ORD-1234 (your assigned order)'**
   - If promotion applied to add-on items, notification includes promotion details
   - If add-on items added via NLP chatbot, notification includes 'Added via NLP Chatbot' badge
9. Communicate with customer or owner\n10. **Complete Order → If no other active orders, waiter status changes back to 'Free' (reappears in Free Waiters section)**
11. Clock Out → **Waiter status changes to 'Offline'**
\n---

## 5. Advanced Design System with Futuristic UI Specifications

### 5.1 Overall Aesthetic\n
- **Theme**: Dark-themed futuristic interface with neon accents
- **Color Scheme**: Deep charcoal grey or dark blue backgrounds with electric cyan, vibrant magenta, electric blue, **and neon purple (for NLP chatbot elements)** accents
- **Visual Effects**: Glassmorphism, smooth gradients, multi-layered UI, subtle shadows with neon glow,3D effects
\n### 5.2 Typography

- **Headings**: Orbitron Bold or Exo 2 Bold\n- **Body Text**: Poppins Regular or Inter Regular
- **Buttons & Labels**: Orbitron Medium\n- **Font Colors**: White or light grey on dark backgrounds, neon colors for emphasis

### 5.3 Color Palette

- **Background**: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A)
- **Primary Accent**: Electric cyan (#00F0FF)
- **Secondary Accent**: Vibrant magenta (#FF006E)
- **Tertiary Accent**: Electric blue (#3A86FF)
- **NLP Accent**: Neon purple (#BF40BF) - used for NLP chatbot elements (buttons, badges, borders, icons)
- **Success**: Neon green (#39FF14)
- **Warning**: Neon yellow (#FFFF00)
- **Error**: Neon red (#FF073A)
- **Text**: White (#FFFFFF) or light grey (#E0E0E0)
- **Restaurant Type Badges**: Veg (bright green #39FF14), Non-Veg (bright red #FF073A), Both (bright orange #FF8C00)
- **Portion Badges**: Full Portion (vibrant magenta #FF006E), Additional Variants (electric cyan #00F0FF or electric blue #3A86FF)\n- **Add-On Indicator**: Neon yellow (#FFFF00) badge with'ADD-ON' text
- **Waiter Assignment Status**: Unassigned (neon yellow #FFFF00), Assigned (neon green #39FF14)\n- **Waiter Availability Status**: Free (neon green #39FF14), Busy (neon yellow #FFFF00), Offline (grey #808080)
- **Promotion Badges**: Percentage Discount (electric cyan #00F0FF), Flat Discount (vibrant magenta #FF006E), Buy X Get Y (electric blue #3A86FF), Free Item (neon green #39FF14), Minimum Order Discount (neon yellow #FFFF00), First Order Discount (neon red #FF073A), Loyalty Discount (neon purple #BF40BF)
- **NLP Order Badges**: 'NLP Chatbot Order' badge (neon purple #BF40BF background, white text, robot icon)
\n### 5.4 UI Components

- **Cards**: Glassmorphism effect with neon gradient borders, rounded corners, subtle shadows with neon glow
- **Buttons**: Neon gradient backgrounds, rounded corners, bold text, hover effects
- **Inputs**: Dark background with neon border on focus\n- **Badges**: Small circular or pill-shaped elements with neon background\n- **Portion Selection Cards**: Large card-style radio buttons with glassmorphism, neon borders, checkmark icons
- **Add-On Order Banner**: Neon cyan background with white text, prominent display at top of menu page
- **Add-On Items Section**: Highlighted with neon magenta border and 'ADD-ON' label in cart and order details
- **Waiter Assignment Modal**: Glassmorphism card with neon gradient border, waiter cards display only active and free waiters with avatar, name, workload, 'Free' status badge (neon green)\n- **Free Waiters Section (Staff Management)**: Dedicated section at top with neon green heading, card grid displaying free waiters with avatar, name, 'Free' badge, current workload, 'Assign to Order' button
- **Waiter Status Badges**: Pill-shaped badges with rounded corners, bold text, icon (Free: neon green with checkmark icon, Busy: neon yellow with clock icon, Offline: grey with offline icon)
- **Waiter Info Section (Customer Dashboard)**: Large glassmorphism card with neon gradient border, waiter avatar (large, circular, neon border), waiter name (bold, large white text), contact info (medium text, light grey), status badge ('Handling Your Order' in neon green), 'Chat with Waiter' button (primary, neon gradient)\n- **Waiter Assignment Pending Section**: Glassmorphism card with waiter silhouette icon or loading spinner,'Assignment Pending' badge (neon yellow, pulsing glow animation), message text (medium, white)\n- **Swiggy-Style Promotion Cards (Customer-Facing)**:
  - **Carousel Cards (Customer Home)**:
    - Large rectangular cards (320px x 180px on desktop, 280px x 160px on mobile)
    - Glassmorphism effect with semi-transparent dark background (rgba(26, 26, 26, 0.7))
    - Neon gradient border (color based on promotion type)
    - Subtle box shadow with neon glow (04px 20px rgba(0, 240, 255, 0.3))
    - Promotion type badge (top-left, pill-shaped, neon background, white text, icon)
    - Promotion name (extra-large bold text, white,24px)
    - Discount details (large text, neon cyan, 20px, bold)
    - Promo code section (if applicable): Label, code (dashed border), copy icon
    - Validity period (small text, light grey, 12px)
    - 'Apply Offer' button (primary, neon gradient, white text, bold)
    - 'View Details' button (secondary, outline, neon cyan border)\n    - Hover effect: Card scales up (1.05) and glow intensifies\n  - **Grid Cards (Offers & Promotions Page)**:
    - Similar to carousel cards but responsive width (100% on mobile, 3columns on desktop)
    - Height auto (min200px on desktop, min 180px on mobile)
    - 20px gap between cards
  - **Compact Banner Cards (Menu Page)**:
    - Compact rectangular cards (240px x 100px on mobile)\n    - Glassmorphism effect with neon gradient border
    - Promotion type icon (top-left, small)\n    - Discount details (large bold text, neon cyan)
    - Promo code (if applicable, small text, dashed border)
    - 'Apply' button (small, neon gradient, bottom-right)
- **Promotion Cards (Owner Dashboard)**:
  - Similar to customer-facing cards\n  - Additional elements: Usage statistics, status indicator (Active/Scheduled/Expired/Deactivated), action buttons (Edit, Deactivate, View Analytics, Duplicate)
- **Promotion Badges on Menu Items**:
  - Small pill-shaped badge positioned at top-right corner of menu item card
  - Neon cyan background with white text
  - Displays discount details (e.g., '20% OFF', 'Buy 1 Get 1')
  - Pulsing glow animation
- **Applied Promotion Section (Order Tracking)**:
  - Glassmorphism card with neon cyan border
  - Promotion name (bold, large white text)
  - Discount details (medium text, neon cyan color)
  - Discount amount: 'You saved ₹X' (neon green color, bold)
- **Promo Code Input (Checkout)**:
  - Dark background text input with neon border on focus
  - 'Apply' button (primary, neon gradient)\n  - Success/error messages with neon green/red color
- **Available Offers Section (Checkout)**:
  - Expandable section with glassmorphism effect
  - Promotion cards in grid layout (2 columns on desktop, 1 column on mobile)\n  - 'Apply' button on each card
- **NLP Chatbot Modal**:
  - Full-screen overlay with semi-transparent dark background and glassmorphism effect
  - Chatbot window: Centered glassmorphism card with neon purple gradient border, rounded corners (16px), subtle box shadow with neon purple glow
  - Header: 'AI Order Assistant' heading (neon purple color, robot icon), subheading (light grey), close button (top-right,'X' icon)
  - Chat area: Scrollable message thread with customer messages (right-aligned, neon cyan bubble) and chatbot messages (left-aligned, glassmorphism bubble with neon purple border)
  - Order summary card: Glassmorphism effect with neon purple border, item list with icons, subtotal in bold neon cyan, applicable promotions section\n  - Input area: Large textarea (dark background, neon purple border on focus), send button (primary, neon purple gradient, paper plane icon), voice input button (optional, microphone icon, neon purple outline)
  - Typing indicator: Animated dots in glassmorphism bubble
  - Success/error messages: Neon green for success (checkmark icon), neon red for errors (exclamation icon)
- **NLP Chatbot Button (Menu Page)**:
  - Floating action button (bottom-right corner, neon purple gradient, robot icon, pulsing glow animation)
  - Button label: 'Order with AI' (small text, white)\n- **NLP Chatbot Icon (Top Navigation Bar)**:
  - Robot icon with neon purple glow, positioned next to search bar
  - Clicking icon opens NLP chatbot modal
- **NLP Quick Order Section (Customer Home)**:
  - Section heading: 'Order with AI Assistant' (medium bold text, neon purple color, robot icon)
  - Description text (small, light grey)
  - 'Start Ordering with AI' button (large primary button, neon purple gradient, white text, bold, robot icon)
  - Example queries display: Horizontal scrollable pills with glassmorphism effect and neon purple border
- **NLP Order Badges**:
  - 'NLP Chatbot Order' badge: Pill-shaped badge with neon purple background, white text, robot icon
  - Positioned on order cards, order details modal, order tracking page, and order history
  - Pulsing glow animation
- **Order Source Indicators**:
  - 'Manual Order' badge: Pill-shaped badge with neon cyan background, white text\n  - 'NLP Chatbot Order' badge: Pill-shaped badge with neon purple background, white text, robot icon
  - Displayed on order cards, cart items, checkout page, order confirmation, order tracking, and order history
\n### 5.5 Animations

- **Slide-in**: New order cards, menu items, add-on items, assigned orders, waiter info card, free waiter cards, promotion cards, **NLP chatbot messages** slide in with bounce animation
- **Pulsing Glow**: Notification badges, updated items, add-on indicators, unassigned order badges, waiter assignment pending badge, 'Free' status badges, promotion badges on menu items, **NLP chatbot button, NLP order badges** have pulsing glow\n- **Shake**: Notification bell shakes on new notification (including waiter assignment notifications, promotion notifications, **and NLP order notifications**)
- **Ripple Effect**: Button clicks trigger ripple effect\n- **Smooth Transitions**: All state changes use ease-in-out transitions
- **Loading Animations**: Neon spinners or skeleton screens
- **Page Transitions**: Smooth fade or slide transitions\n- **Real-Time Update Animations**: New items slide in, edited items highlight, deleted items fade out, add-on items appear with highlight animation, assigned orders slide into waiter dashboard, waiter info section transitions from'Assignment Pending' to 'Your Waiter' with fade-in animation, waiter status badges change color with fade transition (Free↔ Busy ↔ Offline), promotion cards slide in when new promotions created (slide-down + fade-in, duration 0.5s), promotion cards fade out when deactivated (fade-out + slide-up, duration 0.5s), updated promotion cards highlight with neon glow animation (duration 1s), **NLP chatbot messages slide in from right (customer) or left (chatbot) with fade-in animation (duration 0.3s)**
- **Portion Selection Animations**: Selected cards scale up and glow\n- **Waiter Assignment Animations**: Selected waiter card scales up and glows, assignment confirmation with checkmark animation, waiter card slides into customer dashboard with bounce animation, waiter card slides out of Free Waiters section when status changes to Busy\n- **Promotion Application Animations**:
  - When promotion applied: Success checkmark animation, discount amount highlights with neon green glow\n  - When promotion removed: Fade-out animation\n  - Promo code copy: Copy icon animates with scale and rotation, success toast appears\n- **Promotion Card Hover**: Card scales up slightly (1.05), neon glow intensifies, subtle rotation effect
- **Swiggy-Style Carousel Animations**:
  - Horizontal scroll with smooth snap points
  - Auto-scroll every 5 seconds (optional)
  - Navigation arrows fade in on hover (desktop)\n  - Touch/swipe gestures on mobile
- **NLP Chatbot Animations**:\n  - **Message Slide-In**: New messages slide in from right (customer) or left (chatbot) with fade-in animation (duration 0.3s)
  - **Typing Indicator**: Dots bounce up and down in loop
  - **Order Summary Card**: Slides down with fade-in animation (duration 0.5s)
  - **Button Hover**: Scale up (1.05) and glow intensifies
  - **Success Checkmark**: Checkmark icon animates with scale and rotation (duration 0.5s)
  - **Chatbot Modal Open**: Modal fades in with scale animation (duration 0.3s)
  - **Chatbot Modal Close**: Modal fades out with scale animation (duration 0.3s)
\n### 5.6 Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices first\n- **Breakpoints**: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- **Collapsible Sidebar**: Sidebar collapses to hamburger menu on mobile
- **Adaptive Grids**: Grid layouts adjust column count based on screen size
- **Touch-Friendly**: Buttons and interactive elements have minimum44px height
- **Optimized Images**: Responsive images with appropriate sizes
- **Portion Selection on Mobile**: Portion cards stack vertically for easy thumb navigation
- **Add-On Order UI on Mobile**: Banner and cart sections optimized for mobile view
- **Waiter Assignment Modal on Mobile**: Waiter cards stack vertically, full-screen modal\n- **Free Waiters Section on Mobile**: Cards stack vertically, full-width display
- **Waiter Info Section on Mobile**: Card displays full-width, waiter avatar and info stack vertically,'Chat with Waiter' button full-width
- **Swiggy-Style Promotion Cards on Mobile**:
  - **Carousel (Customer Home)**: Horizontal scroll with snap points, cards280px x 160px, touch/swipe enabled
  - **Grid (Offers & Promotions Page)**: Cards stack vertically in single column, full-width, height auto (min 180px)
  - **Banner (Menu Page)**: Horizontal scroll with snap points, compact cards 240px x 100px\n  - Filter options display as horizontal scrollable pills
  - Promo code section displays full-width with large copy button
  - 'Apply Offer' and 'View Details' buttons stack vertically or display full-width
  - Promotion details modal displays full-screen\n- **NLP Chatbot on Mobile**:
  - Full-screen chatbot modal\n  - Input area fixed at bottom\n  - Chat area scrollable\n  - Touch-friendly buttons and input fields (minimum 44px height)
  - Example queries display as horizontal scrollable pills
  - Order summary card displays full-width
  - Buttons stack vertically or display full-width
\n### 5.7 Accessibility

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Sufficient contrast for readability
- **Focus Indicators**: Clear focus outlines on interactive elements
- **Portion Selection Accessibility**: Clear focus states, keyboard navigation, screen reader labels
- **Add-On Order Accessibility**: Banner and sections have clear labels for screen readers
- **Waiter Assignment Accessibility**: Modal and waiter cards have clear labels, keyboard navigation support
- **Waiter Status Accessibility**: Status badges have ARIA labels ('Free', 'Busy', 'Offline') for screen readers
- **Waiter Info Section Accessibility**: Clear ARIA labels for waiter name, contact info, status badge, and chat button
- **Promotion Cards Accessibility**:
  - ARIA labels for promotion type, discount details, promo code, validity period
  - Keyboard navigation support for'Apply Offer' and 'View Details' buttons
  - Screen reader announces promotion details when card is focused
  - Copy promo code button has ARIA label: 'Copy promo code [CODE]'
- **Promo Code Input Accessibility**:
  - Input field has clear label: 'Enter promo code'
  - Success/error messages announced by screen reader
  - Keyboard shortcut: Enter key applies promo code
- **Carousel Accessibility**:
  - Keyboard navigation: Arrow keys to navigate between cards
  - Screen reader announces current card position (e.g., 'Card 1 of 5')
  - Auto-scroll pauses on hover or focus
- **NLP Chatbot Accessibility**:
  - **Keyboard Navigation**: Tab key to navigate buttons, Enter key to send message, Escape key to close chatbot
  - **Screen Reader Support**: ARIA labels for chatbot messages, buttons, input field, order summary card
  - **Focus Indicators**: Clear focus outlines on input field, buttons, and interactive elements
  - **Message Announcements**: Screen reader announces new chatbot messages when received
  - **Order Summary Accessibility**: Screen reader announces item list, quantities, portions, prices, and subtotal
  - **Button Labels**: Clear ARIA labels for 'Add to Cart', 'Modify Order', 'Cancel', 'Proceed to Checkout', 'Add More Items', 'View Cart', 'Browse Menu', 'Try Again' buttons
  - **Typing Indicator**: Screen reader announces 'Chatbot is typing' when typing indicator appears
  - **Success/Error Messages**: Screen reader announces success and error messages with appropriate tone

---

## 6. Technical Considerations

### 6.1 Technology Stack

- **Frontend**: React.js or Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js with Express.js or Django, WebSocket (Socket.io)
- **Database**: PostgreSQL or MongoDB (with restaurant_type field, menu_items table with price field and nlp_aliases field, price_variants table, orders table with assigned_waiter_id field, add_on_items field, and order_source field ('manual' or 'nlp_chatbot'), waiters table with current_workload field, availability_status field (Free/Busy/Offline), and workload_threshold field, promotions table with promotion_id, promotion_name, promotion_type, discount_value, promo_code, eligibility_criteria, applicable_items, validity_period, usage_limits, status fields, order_promotions table linking orders to applied promotions, **nlp_orders table with nlp_order_id, order_id, customer_input, recognized_items, unrecognized_items, confidence_scores, processing_status, timestamp fields**)
- **Authentication**: JWT tokens, OAuth 2.0 (OSS Google login), OTP via Twilio or Firebase
- **Payment Gateway**: Stripe, Razorpay, or PayPal\n- **Cloud Storage**: AWS S3 or Cloudinary\n- **Hosting**: AWS, Google Cloud, or Vercel
- **Device Detection**: User agent parsing or screen size detection
- **NLP Engine**: Python with spaCy, NLTK, or Hugging Face Transformers for natural language processing
- **Fuzzy Matching**: FuzzyWuzzy or RapidFuzz library for fuzzy string matching
- **Voice Input** (optional): Browser's Web Speech API or third-party service (e.g., Google Speech-to-Text, Azure Speech Service)

### 6.2 Real-Time Features with WebSocket Implementation

- **WebSocket Connection**: Persistent connection for instant updates (orders, notifications, chat, menu, categories, tables, add-on orders, waiter assignments, waiter availability status, promotions, **NLP chatbot messages**)
- **Event-Driven Architecture**: Backend emits events, frontend listens and updates UI
- **Optimistic UI Updates**: UI updates immediately, syncs with backend in background
- **Real-Time Menu Synchronization**: Events for item and category changes
- **Real-Time Table Synchronization**: Events for table changes\n- **Real-Time Add-On Order Updates**: Events for add-on items added to orders
- **Real-Time Waiter Assignment Updates**: Events for waiter assignment and reassignment
- **Real-Time Waiter Availability Updates**: Events for waiter status changes (Free ↔ Busy ↔ Offline)
- **Real-Time Promotion Updates**: Events for promotion creation, update, activation, deactivation\n- **Real-Time NLP Chatbot Updates**: Events for NLP order processing status, recognized items, unrecognized items\n- **Event Types**:
  - **'waiter_assigned'**: Emitted when owner assigns waiter to order
    - Payload: { order_id, waiter_id, waiter_name, waiter_avatar, waiter_contact, timestamp }
    - Recipients: Customer (order owner), Assigned Waiter, Restaurant Owner
  - **'waiter_reassigned'**: Emitted when owner reassigns waiter\n    - Payload: { order_id, old_waiter_id, new_waiter_id, new_waiter_name, new_waiter_avatar, new_waiter_contact, timestamp }
    - Recipients: Customer (order owner), Old Waiter, New Waiter, Restaurant Owner
  - **'waiter_status_changed'**: Emitted when waiter availability status changes
    - Payload: { waiter_id, old_status, new_status, current_workload, timestamp }
    - Recipients: Restaurant Owner, Staff Management Dashboard
  - **'promotion_created'**: Emitted when owner creates new promotion
    - Payload: { promotion_id, promotion_name, promotion_type, discount_type, discount_value, promo_code, validity_period, applicable_items, eligibility_criteria, timestamp }
    - Recipients: All Customers (broadcast)\n    - **Customer Dashboard Action**: New promotion card slides into carousel on Customer Home (slide-in + fade-in animation, duration 0.5s), promotion card slides into grid on Offers & Promotions page (slide-down + fade-in animation, duration 0.5s), in-app notification displays, notification bell shakes and badge increments
  - **'promotion_updated'**: Emitted when owner edits promotion
    - Payload: { promotion_id, updated_fields, timestamp }
    - Recipients: All Customers (broadcast)
    - **Customer Dashboard Action**: Existing promotion card updates with fade animation (fade-out, update content, fade-in, duration 0.3s), updated card highlights with neon glow animation (duration 1s)\n  - **'promotion_activated'**: Emitted when owner activates or reactivates promotion
    - Payload: { promotion_id, promotion_name, promotion_type, discount_type, discount_value, promo_code, validity_period, applicable_items, eligibility_criteria, timestamp }
    - Recipients: All Customers (broadcast)
    - **Customer Dashboard Action**: Promotion card slides into carousel and grid (slide-in + fade-in animation, duration 0.5s), in-app notification displays: 'Offer [Name] is now available again!'\n  - **'promotion_deactivated'**: Emitted when owner deactivates promotion
    - Payload: { promotion_id, timestamp }
    - Recipients: All Customers (broadcast)
    - **Customer Dashboard Action**: Promotion card fades out and slides out (fade-out + slide-up animation, duration 0.5s), card removed from carousel and grid, if promotion was applied to cart, notification displays: 'Offer [Name] is no longer available and has been removed from your cart'\n  - **'promotion_applied'**: Emitted when customer applies promotion to order
    - Payload: { order_id, promotion_id, promotion_name, discount_amount, timestamp }
    - Recipients: Restaurant Owner, Assigned Waiter (if assigned)\n  - **'nlp_order_processing'**: Emitted when NLP engine starts processing customer input
    - Payload: { customer_id, customer_input, timestamp }
    - Recipients: Customer (order owner)
    - **Customer Dashboard Action**: Chatbot displays typing indicator (animated dots)
  - **'nlp_order_recognized'**: Emitted when NLP engine successfully recognizes items
    - Payload: { customer_id, recognized_items, confidence_scores, applicable_promotions, timestamp }
    - Recipients: Customer (order owner)
    - **Customer Dashboard Action**: Chatbot displays order summary card with recognized items, quantities, portions, prices, and applicable promotions
  - **'nlp_order_failed'**: Emitted when NLP engine fails to recognize items or confidence below threshold
    - Payload: { customer_id, unrecognized_items, suggestions, timestamp }
    - Recipients: Customer (order owner)
    - **Customer Dashboard Action**: Chatbot displays clarification message with unrecognized items and suggestions
  - **'nlp_order_placed'**: Emitted when customer confirms NLP order and adds to cart
    - Payload: { order_id, customer_id, recognized_items, order_total, order_source: 'nlp_chatbot', timestamp }
    - Recipients: Restaurant Owner, Customer (order owner)
    - **Owner Dashboard Action**: New order card slides into order list with'NLP Chatbot Order' badge, notification displays: 'New NLP Order #ORD-1234 placed via chatbot'
- **Event Payload Structure**: Includes restaurant_id, item_id, order_id, add_on_items, assigned_waiter_id, waiter_availability_status, promotion_id, nlp_order_id, customer_input, recognized_items, unrecognized_items, confidence_scores, order_source, etc.
- **Customer Dashboard WebSocket Listeners**:
  - Listen for 'waiter_assigned' event → Update active order card and order tracking page with waiter info
  - Listen for 'waiter_reassigned' event → Update waiter info section with new waiter details
  - Listen for 'order_status_update' event → Update order timeline and status badge
  - Listen for 'promotion_created' event → Add new promotion card to Customer Home carousel and Offers & Promotions page with slide-in animation
  - Listen for 'promotion_updated' event → Update existing promotion card with fade animation and highlight with glow\n  - Listen for 'promotion_activated' event → Add promotion card to carousel and grid with slide-in animation (for reactivated promotions)
  - Listen for 'promotion_deactivated' event → Remove promotion card from carousel and grid with fade-out and slide-out animation
  - **Listen for 'nlp_order_processing' event → Display typing indicator in chatbot**
  - **Listen for 'nlp_order_recognized' event → Display order summary card in chatbot with recognized items and applicable promotions**
  - **Listen for 'nlp_order_failed' event → Display clarification message in chatbot with unrecognized items and suggestions**
- **Owner Dashboard WebSocket Listeners**:
  - Listen for 'waiter_status_changed' event → Update Free Waiters section and Staff Management dashboard\n  - Listen for 'new_order' event → Display notification and update order list
  - Listen for 'promotion_applied' event → Display notification and update order card with promotion badge
  - **Listen for 'nlp_order_placed' event → Display notification and update order list with'NLP Chatbot Order' badge**

### 6.3 Security\n
- **Data Encryption**: HTTPS, encrypted storage\n- **Input Validation**: Server-side validation (including promo code validation, **NLP input sanitization**)
- **Rate Limiting**: Prevent abuse (including rate limiting on promo code application to prevent brute-force attacks, **rate limiting on NLP chatbot requests to prevent spam**)
- **Secure Authentication**: Password hashing, secure token storage
- **Promo Code Security**: Unique code generation, usage limit enforcement, expiration validation
- **NLP Security**: Input sanitization to prevent injection attacks, rate limiting on NLP requests, validation of recognized items against menu database
\n### 6.4 Performance Optimization

- **Lazy Loading**: Load images and components on demand (including promotion cards, **NLP chatbot modal**)
- **Code Splitting**: Split JavaScript bundles\n- **Caching**: Cache static assets and API responses (including promotion data, **NLP aliases, menu item data**)
- **Database Indexing**: Optimize queries with proper indexing (including index on assigned_waiter_id, add_on_items, availability_status, current_workload, promotion_id, promo_code, validity_period, status fields, **nlp_aliases field, order_source field**)
- **CDN**: Use CDN for static assets
- **WebSocket Connection Management**: Efficient connection pooling, automatic reconnection, heartbeat mechanism
- **NLP Engine Optimization**: Use pre-trained models for faster inference, cache frequently recognized items, optimize fuzzy matching algorithm

### 6.5 Scalability
\n- **Microservices Architecture**: Separate services for orders, payments, notifications, menu management, waiter assignment, waiter availability tracking, promotions management, **NLP processing**
- **Load Balancing**: Distribute traffic across servers
- **Database Sharding**: Partition database for horizontal scaling
- **Auto-Scaling**: Automatically scale resources\n- **WebSocket Scaling**: Use Redis pub/sub for broadcasting events (including promotion events, **NLP chatbot events**)
- **NLP Engine Scaling**: Deploy NLP engine as separate microservice, use message queue (e.g., RabbitMQ, Kafka) for asynchronous processing, scale NLP workers based on demand

---

## 7. Future Enhancements

- AI-Powered Recommendations (including portion type recommendations, personalized promotion recommendations, **and NLP-based menu item recommendations**)
- Voice Ordering with portion selection **and NLP chatbot integration**
- Augmented Reality Menu with portion size visualization
- Multi-Language Support **for NLP chatbot (multilingual NLP models)**
- Advanced Analytics (including add-on order analytics, waiter performance analytics, availability rate trends, promotion performance analytics, **and NLP chatbot performance analytics with detailed recognition accuracy metrics**)
- Integration with Delivery Platforms\n- Table Reservation System
- Kitchen Display System (KDS) with add-on item indicators, waiter assignment info, **and NLP order indicators**
- Customer Feedback Analysis (including waiter ratings, **NLP chatbot satisfaction ratings**)
- Gamification\n- AI-Powered Waiter Assignment: Machine learning algorithm to optimize waiter assignment based on historical performance, customer preferences, real-time workload, and availability patterns
- Predictive Waiter Availability: AI predicts when waiters will become free based on order preparation times and historical data
- **AI-Powered Promotion Optimization**: Machine learning algorithm to suggest optimal promotion types, discount values, and target audiences based on historical data and customer behavior
- **Dynamic Pricing with Promotions**: AI adjusts promotion discount values in real-time based on demand, inventory levels, and competitor pricing
- **Personalized Promotion Recommendations**: AI recommends promotions to individual customers based on order history, preferences, and loyalty status
- **Promotion A/B Testing**: Test multiple promotion variants simultaneously to determine which performs best
- **Automated Promotion Scheduling**: AI automatically schedules promotions for optimal times (e.g., lunch specials during lunch hours, weekend offers on Fridays)
- **Advanced NLP Features**:
  - **Contextual Understanding**: NLP engine understands context from previous messages in conversation (e.g., 'Add 2 more rotis' after orderingdaal tadka)
  - **Multi-Turn Conversations**: Support for multi-turn conversations where customer can refine order through multiple messages
  - **Sentiment Analysis**: Analyze customer sentiment in NLP input to detect frustration or satisfaction
  - **Intent Recognition**: Recognize customer intents beyond ordering (e.g., 'What are your veg options?', 'Do you have gluten-free items?')
  - **Entity Linking**: Link recognized entities to menu database with higher accuracy using knowledge graphs
  - **Personalized NLP Responses**: Chatbot responses personalized based on customer order history and preferences
  - **NLP-Powered Menu Search**: Customers can search menu using natural language queries (e.g., 'Show me spicy vegetarian dishes')
  - **NLP-Based Dietary Filters**: Customers can filter menu using natural language (e.g., 'Show me gluten-free options', 'I want vegan dishes')
  - **NLP Order Modification**: Customers can modify existing orders using natural language (e.g., 'Change my pizza to large size', 'Remove onions from my burger')
  - **NLP Promotion Discovery**: Customers can ask chatbot about available promotions (e.g., 'What offersdo you have?', 'Show me discounts on pizzas')
\n---

## 8. Design Style\n
**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan, vibrant magenta, electric blue, **neon purple for NLP elements**), glassmorphism effects, smooth gradients, multi-layered UI, subtle shadows, and 3D effects.\n
**Typography**: Orbitron Bold/Exo 2 Bold for headings, Poppins Regular/Inter Regular for body text, Orbitron Medium for buttons. Font colors: White or light grey on dark backgrounds, neon colors for emphasis.

**Color Palette**: Deep charcoal grey or dark blue backgrounds, electric cyan, vibrant magenta, electric blue, **neon purple (for NLP chatbot elements)** accents, neon green (success), neon yellow (warning), neon red (error), white or light grey text. Restaurant type badges: Veg (bright green), Non-Veg (bright red), Both (bright orange). Portion badges: Full Portion (vibrant magenta), Additional Variants (electric cyan or electric blue). Add-On indicator: Neon yellow badge. Waiter assignment status: Unassigned (neon yellow), Assigned (neon green). Waiter availability status: Free (neon green), Busy (neon yellow), Offline (grey). Promotion badges: Percentage Discount (electric cyan), Flat Discount (vibrant magenta), Buy X Get Y (electric blue), Free Item (neon green), Minimum Order Discount (neon yellow), First Order Discount (neon red), Loyalty Discount (neon purple). **NLP Order Badges:'NLP Chatbot Order' badge (neon purple background, white text, robot icon).**

**UI Components**: Glassmorphism cards with neon gradient borders, futuristic buttons with neon gradients and hover effects, animated counters, smooth transitions, interactive elements with neon borders and glow. Restaurant type badges are pill-shaped with rounded corners, bold text, and icon. Portion badges are pill-shaped with rounded corners, medium text. Portion selection cards feature large card-style radio buttons with glassmorphism, neon borders, checkmark icons. Add-On order banner has neon cyan background with white text. Add-On items section highlighted with neon magenta border and 'ADD-ON' label. Waiter assignment modal features glassmorphism card with waiter selection cards displaying only active and free waiters with avatar, name, workload, and 'Free' status badge (neon green). Free Waiters section (Staff Management) displays dedicated section at top with neon green heading, card grid showing free waiters with avatar, name, 'Free' badge, current workload, and 'Assign to Order' button. Waiter status badges are pill-shaped with rounded corners, bold text, and icon (Free: neon green with checkmark, Busy: neon yellow with clock, Offline: grey with offline icon). Waiter info section (customer dashboard) displays large glassmorphism card with waiter avatar (large, circular, neon border), waiter name (bold, large white text), contact info (medium text, light grey), status badge ('Handling Your Order' in neon green), and 'Chat with Waiter' button (primary, neon gradient). Waiter assignment pending section displays glassmorphism card with waiter silhouette icon or loading spinner,'Assignment Pending' badge (neon yellow, pulsing glow animation), and message text (medium, white). Swiggy-style promotion cards (customer-facing) feature glassmorphism effect with neon gradient border (color based on promotion type), promotion type badge at top-left corner with icon and neon color, promotion name (bold, large white text), discount details (medium text, neon cyan color), promo code section (if applicable) with code displayed withdashed border and copy icon, validity period (small text, light grey), 'Apply Offer' button (primary, neon gradient), 'View Details' button (secondary, outline), and hover effect (card scales up and glow intensifies). Promotion cards (owner dashboard) similar to customer-facing cards with additional elements: usage statistics, status indicator (Active/Scheduled/Expired/Deactivated), action buttons (Edit, Deactivate, View Analytics, Duplicate). Promotion badges on menu items are small pill-shaped badges positioned at top-right corner of menu item card with neon cyan background, white text, discount details, and pulsing glow animation. Applied promotion section (order tracking) displays glassmorphism card with neon cyan border, promotion name (bold, large white text), discount details (medium text, neon cyan color), and discount amount: 'You saved ₹X' (neon green color, bold). Promo code input (checkout) features dark background text input with neon border on focus, 'Apply' button (primary, neon gradient), and success/error messages with neon green/red color. Available offers section (checkout) displays expandable section with glassmorphism effect, promotion cards in grid layout, and 'Apply' button on each card. **NLP Chatbot Modal: Full-screen overlay with semi-transparent dark background and glassmorphism effect, chatbot window (centered glassmorphism card with neon purple gradient border, rounded corners, subtle box shadow with neon purple glow), header ('AI Order Assistant' heading in neon purple with robot icon, subheading in light grey, close button), chat area (scrollable message thread with customer messages in right-aligned neon cyan bubbles and chatbot messages in left-aligned glassmorphism bubbles with neon purple border), order summary card (glassmorphism effect with neon purple border, item list with icons, subtotal in bold neon cyan, applicable promotions section), input area (large textarea with dark background and neon purple border on focus, send button with neon purple gradient and paper plane icon, optional voice input button with microphone icon and neon purple outline), typing indicator (animated dots in glassmorphism bubble), success/error messages (neon green for success with checkmark icon, neon red for errors with exclamation icon). NLP Chatbot Button (Menu Page): Floating action button (bottom-right corner, neon purple gradient, robot icon, pulsing glow animation), button label'Order with AI' (small text, white). NLP Chatbot Icon (Top Navigation Bar): Robot icon with neon purple glow, positioned next to search bar. NLP Quick Order Section (Customer Home): Section heading'Order with AI Assistant' (medium bold text, neon purple color, robot icon), description text (small, light grey), 'Start Ordering with AI' button (large primary button, neon purple gradient, white text, bold, robot icon), example queries display (horizontal scrollable pills with glassmorphism effect and neon purple border). NLP Order Badges: 'NLP Chatbot Order' badge (pill-shaped badge with neon purple background, white text, robot icon, pulsing glow animation), displayed on order cards, order details modal, order tracking page, and order history. Order Source Indicators: 'Manual Order' badge (pill-shaped badge with neon cyan background, white text), 'NLP Chatbot Order' badge (pill-shaped badge with neon purple background, white text, robot icon), displayed on order cards, cart items, checkout page, order confirmation, order tracking, and order history.**

**Animations**: Slide-in animations for new orders, menu items, add-on items, assigned orders, waiter info card, free waiter cards, promotion cards, **and NLP chatbot messages**, pulsing glow for notification badges, updated items, unassigned order badges, waiter assignment pending badge, 'Free' status badges, promotion badges on menu items, **NLP chatbot button, and NLP order badges**, shake animation for notification bell, ripple effect for button clicks, smooth page transitions, loading animations with neon spinners, real-time update animations (new items slide in, edited items highlight, deleted items fade out, add-on items appear with highlight, assigned orders slide into waiter dashboard, waiter info section transitions from'Assignment Pending' to 'Your Waiter' with fade-in animation, waiter status badges change color with fade transition, promotion cards slide in when new promotions created with slide-down + fade-in animation (duration0.5s), promotion cards fade out when deactivated with fade-out + slide-up animation (duration 0.5s), updated promotion cards highlight with neon glow animation (duration 1s), **NLP chatbot messages slide in from right (customer) or left (chatbot) with fade-in animation (duration 0.3s)**), portion selection animations (selected cards scale up and glow), waiter assignment animations (selected waiter card scales up and glows, assignment confirmation with checkmark animation, waiter card slides into customer dashboard with bounce animation, waiter card slides out of Free Waiters section when status changes to Busy), promotion application animations (when promotion applied: success checkmark animation, discount amount highlights with neon green glow; when promotion removed: fade-out animation; promo code copy: copy icon animates with scale and rotation, success toast appears), promotion card hover (card scales up slightly to1.05, neon glow intensifies, subtle rotation effect), Swiggy-style carousel animations (horizontal scroll with smooth snap points, auto-scroll every 5 seconds optional, navigation arrows fade in on hover on desktop, touch/swipe gestures on mobile), **and NLP chatbot animations (message slide-in from right/left with fade-in (duration 0.3s), typing indicator with bouncing dots, order summary card slides down with fade-in (duration 0.5s), button hover with scale up (1.05) and glow intensifies, success checkmark animates with scale and rotation (duration 0.5s), chatbot modal open/close with fade and scale animation (duration 0.3s)).**

**Responsive Design**: Mobile-first approach, collapsible sidebar on mobile, adaptive grid layouts, touch-friendly buttons and inputs, optimized for all screen sizes. QR code scanning feature exclusively available on mobile devices. Portion selection cards stack vertically on mobile. Add-On order UI optimized for mobile view. Waiter assignment modal displays full-screen on mobile with vertically stacked waiter cards. Free Waiters section on mobile displays cards stacked vertically with full-width layout. Waiter info section on mobile displays full-width card with waiter avatar and info stacked vertically, and full-width 'Chat with Waiter' button. Swiggy-style promotion cards on mobile: Carousel (Customer Home) uses horizontal scroll with snap points, cards280px x 160px, touch/swipe enabled; Grid (Offers & Promotions Page) displays cards stacked vertically in single column, full-width, height auto (min180px); Banner (Menu Page) uses horizontal scroll with snap points, compact cards240px x 100px. Filter options display as horizontal scrollable pills. Promo code section displays full-width with large copy button.'Apply Offer' and 'View Details' buttons stack vertically or display full-width. Promotion details modal displays full-screen. **NLP Chatbot on Mobile: Full-screen chatbot modal, input area fixed at bottom, chat area scrollable, touch-friendly buttons and input fields (minimum 44px height), example queries display as horizontal scrollable pills, order summary card displays full-width, buttons stack vertically or display full-width.**

---

**End of Requirements Document**