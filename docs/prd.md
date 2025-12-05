# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Real-Time Menu & Table Synchronization)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced schema support (including half/full portion options), AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, personalized restaurant dashboard for quick reordering, complete staff management with attendance tracking and performance analytics, advanced marketing and promotions system with campaign management, comprehensive settings module for restaurant configuration with automatic currency and timezone application across the entire platform, restaurant type classification (Veg/Non-Veg/Both) with prominent display in browse restaurants and menu pages, QR code scanning functionality exclusively available on mobile devices, fully functional sidebar navigation with complete features for all menu items including browse restaurants functionality, **and real-time synchronization of menu updates (new items, category changes, item modifications, deletions) and table updates to customer dashboards without page refresh** - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface. **All data displayed across the platform is real-time and dynamically calculated from the live database, including revenue, sales analytics, order statistics, inventory levels, staff performance metrics, campaign analytics, menu items, categories, and table information. Currency and timezone settings are automatically applied system-wide upon changes.**

## 2. Advanced Authentication System

### 2.1 Multi-Level User Authentication

**User Roles**:
- **Restaurant Owner**: Full administrative access to restaurant management, menu, orders, staff, inventory, analytics, settings\n- **Waiter/Agent**: Access to assigned orders, customer communication, order status updates, table management\n- **Customer**: Access to menu browsing, ordering, order tracking, chat with restaurant, payment, order history, browse previously scanned restaurants

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
   - **Owner**: Redirected to Owner Dashboard (Zomato-style layout with real-time analytics)
   - **Waiter**: Redirected to Waiter Dashboard (assigned orders, active tables, pending tasks)
   - **Customer**: Redirected to Customer Home (browse restaurants, order history, active orders)
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
The Owner Home Screen serves as the central command center, displaying real-time business metrics, order status, revenue analytics, and quick access to all management functions. The layout is inspired by Zomato's clean, card-based design with a futuristic dark theme, neon accents, and glassmorphism effects.

**Layout Structure**:
\n**A. Top Navigation Bar**
- Restaurant logo and name (left)\n- Search bar (center) for quick navigation to orders, menu items, staff\n- Notification bell icon with real-time badge count (right)
- User profile dropdown (right) with options: Profile Settings, Logout

**B. Sidebar Navigation (Collapsible)**
- **Dashboard** (home icon) - Active by default
- **Menu Management** (utensils icon) - Fully functional menu CRUD operations
- **Orders** (clipboard icon) - Real-time order management dashboard
- **Inventory** (box icon) - Complete inventory tracking and management
- **QR Codes** (qr-code icon) - QR code generation and table management
- **Staff** (users icon) - Complete staff management with attendance and performance\n- **Analytics** (chart icon) - Advanced analytics and reports with real-time data
- **Marketing** (megaphone icon) - Complete marketing and promotions system
- **Payments** (credit-card icon) - Payment management and transaction history
- **Chat** (message icon) - Real-time communication hub with customers and staff
- **Settings** (gear icon) - Complete settings module with auto-application\n
**C. Main Dashboard Content Area**
\n**Top Metrics Cards Row** (4 cards in a row, responsive grid):
1. **Today's Revenue Card**
   - Large number display with currency symbol (e.g., '$1,234.56')
   - Percentage change vs yesterday (green up arrow or red down arrow)
   - Mini line chart showing hourly revenue trend
   - Glassmorphism card with neon cyan border glow
\n2. **Active Orders Card**
   - Large number display (e.g., '12')
   - Breakdown: Pending (3), Preparing (5), Ready (4)\n   - Pulsing animation on number when new order arrives
   - Glassmorphism card with neon magenta border glow

3. **Total Orders Today Card**
   - Large number display (e.g., '47')
   - Percentage change vs yesterday\n   - Small bar chart showing orders by hour
   - Glassmorphism card with neon blue border glow

4. **Customer Satisfaction Card**
   - Average rating (e.g., '4.8⭐')
   - Total reviews count
   - Trend indicator (improving/declining)
   - Glassmorphism card with neon green border glow

**Recent Orders Section**:\n- Heading: 'Recent Orders' with 'View All' link (navigates to Orders page)
- Display last 5 orders in compact card format:\n  - Order ID, Table number, Customer name\n  - Order items summary (e.g., '2x Burger, 1x Fries')
  - Order status badge (Pending/Preparing/Ready/Completed)
  - Order time (e.g., '5mins ago')
  - Quick action buttons: View Details, Update Status\n- Real-time updates: New orders slide in from top with animation, status changes update instantly

**Quick Actions Section**:
- Grid of 6 quick action buttons:
  1. '+ Add Menu Item' - Opens menu item creation modal
  2. 'Generate QR Code' - Opens QR code generation modal
  3. 'Add Staff Member' - Opens staff registration form
  4. 'Create Promotion' - Opens promotion creation modal
  5. 'View Inventory' - Navigates to inventory page
  6. 'Download Reports' - Opens report generation modal
- Each button styled with glassmorphism, neon gradient border, hover glow effect

**Sales Analytics Chart**:
- Heading: 'Sales Overview'\n- Interactive line/bar chart showing revenue over last 7 days/30 days (toggle option)
- Hover tooltips showing exact values
- Smooth animations on data load
- Neon gradient colors for chart lines/bars

**Popular Menu Items Section**:
- Heading: 'Top Selling Items'
- Horizontal scrollable cards showing top 5 menu items:\n  - Item image\n  - Item name
  - Total orders count
  - Revenue generated
- Glassmorphism cards with neon borders\n
**D. Real-Time Notification System**
- **Notification Bell**: Positioned in top-right navigation bar
- **Badge Count**: Red circular badge with number of unread notifications
- **Notification Types**:
  1. New Order Placed (with order ID and table number)
  2. Order Status Update Request from Waiter
  3. Low Inventory Alert (item name and current stock)
  4. New Customer Review/Feedback
  5. Staff Attendance Update
  6. Payment Received Confirmation
- **Notification Dropdown**:
  - Click bell icon to open dropdown panel
  - List of recent notifications (last 10)
  - Each notification shows: Icon, message, timestamp,'Mark as Read' option
  - 'View All Notifications' link at bottom (navigates to dedicated notifications page)
- **Real-Time Updates Without Page Refresh**:
  - WebSocket connection for instant notification delivery
  - Notification bell shakes with animation when new notification arrives
  - Badge count updates automatically
  - Toast notification appears at top-right corner for critical alerts (e.g., new order)\n  - Dashboard metrics and order cards update automatically when relevant notifications arrive

---

#### 3.1.2 Advanced Menu Management System with Real-Time Customer Synchronization

**Overview**:
Comprehensive menu management interface allowing restaurant owners to create, edit, organize, and manage menu items with advanced categorization, pricing options (half/full portions), inventory linking, availability scheduling, and real-time preview. **All menu changes (new items, category additions, item modifications, deletions) are instantly synchronized to customer dashboards without page refresh via WebSocket.**

**Key Features**:
\n**A. Menu Item Management Interface**
\n- **Action Buttons Section**:
  - **'+ Add Menu Item' Button**: Primary action button positioned at top-right of menu management page, opens modal/slide-in panel for creating new menu item
  - **'View Menu' Button**: Secondary action button positioned directly below the '+ Add Menu Item' button, styled with glassmorphism effect and neon border. When clicked, displays the complete menu in a Zomato-style layout showing all categories and items with images, prices, descriptions, and availability status. Provides customer-facing preview of how the menu appears when accessed via QR code.
\n- **Menu Categories Section**:
  - Display all menu categories in expandable/collapsible accordion or tab layout
  - Each category shows: Category name, item count, category image (optional), edit/delete icons\n  - Drag-and-drop functionality to reorder categories
  - '+ Add Category' button to create new categories
\n- **Menu Items Grid/List View**:
  - Toggle between grid view (cards with images) and list view (compact table)\n  - Each menu item card displays:
    - Item image (placeholder if no image uploaded)
    - Item name
    - Category tag
    - Price (shows both half/full if applicable, e.g., 'Half: $8| Full: $12')
    - Availability status (toggle switch: Available/Out of Stock)
    - Quick action icons: Edit (pencil icon), Delete (trash icon), Duplicate (copy icon)
  - Search bar to filter items by name or category
  - Filter options: All Items, Available, Out of Stock, By Category
  - Sort options: Name (A-Z), Price (Low to High), Recently Added
\n**B. Add/Edit Menu Item Modal**

**Modal Layout**:
- Full-screen overlay with glassmorphism panel sliding in from right
- Close button (X icon) at top-right\n- Form sections organized in tabs or accordion:
\n**1. Basic Information Tab**:\n- **Item Name**: Text input (required)
- **Category**: Dropdown select from existing categories or '+ Create New Category' option (required)
- **Description**: Textarea (optional, max 500 characters)
- **Item Image**: Image upload with drag-and-drop or file browser, preview thumbnail,'Remove Image' option
\n**2. Pricing & Portions Tab**:
- **Pricing Type**: Radio buttons\n  - Single Price (default)
  - Half/Full Portions\n- **If Single Price**:
  - Price input field (required, number with currency symbol)
- **If Half/Full Portions**:
  - Half Portion Price input (required)
  - Full Portion Price input (required)
- **Discount**: Optional percentage or fixed amount discount input
\n**3. Inventory & Availability Tab**:
- **Link to Inventory**: Toggle switch\n  - If enabled: Dropdown to select inventory item(s) and quantity consumed per order
  - Auto-deduct inventory on order placement
- **Availability Schedule**: Toggle switch
  - If enabled: Time range picker (e.g., available only during lunch12 PM - 3 PM)
- **Stock Status**: Toggle switch (Available/Out of Stock)
\n**4. Additional Details Tab**:
- **Dietary Tags**: Multi-select checkboxes (Vegetarian, Vegan, Gluten-Free, Spicy, etc.)
- **Allergen Information**: Text input (e.g., 'Contains nuts, dairy')
- **Preparation Time**: Number input (minutes)
- **Nutritional Information**: Optional fields (Calories, Protein, Carbs, Fat)\n\n**Action Buttons**:
- 'Save' button (primary, neon gradient)
- 'Save & Add Another' button (secondary)\n- 'Cancel' button (tertiary, outline style)
\n**Real-Time Synchronization on Save**:
- When owner saves new menu item, edits existing item, or deletes item:\n  - Backend emits WebSocket event: `menu:item:created`, `menu:item:updated`, or `menu:item:deleted`\n  - Event payload includes: restaurant_id, item_id, item_data (name, category, price, image, availability, etc.)
  - All connected customer clients subscribed to this restaurant receive event instantly
  - Customer dashboards automatically update menu display without page refresh:\n    - New items appear in respective category with slide-in animation
    - Updated items refresh data (price, image, description, availability) with smooth transition
    - Deleted items fade out and remove from display
  - If customer is currently viewing menu page or has restaurant in'Browse Restaurants' list, changes reflect immediately

**C. Zomato-Style Menu View**

- **Layout**:
  - Full-screen overlay or dedicated page displaying menu in customer-facing format
  - Sticky category navigation bar at top (horizontal scrollable tabs for each category)
  - Vertical scrolling layout with category sections
  - Each category section displays:
    - Category name as section header
    - Grid of menu item cards (2-3 columns on desktop, 1-2 on mobile)
  - Each menu item card shows:
    - High-quality item image
    - Item name (bold, prominent)
    - Item description (truncated with'Read more' if long)
    - Price display (half/full portions if applicable)
    - Dietary tags (veg/non-veg icons, spicy level indicators)
    - Availability badge (if out of stock, greyed out with 'Currently Unavailable' label)
  - Smooth scroll-to-category when clicking category tabs
  - Close button (X icon) at top-right to exit menu view and return to management interface

- **Interactive Features**:
  - Click on item card to view full details in modal (larger image, complete description, nutritional info, allergen warnings)
  - Real-time availability updates (if item goes out of stock, card updates immediately)
  - Responsive design optimized for all devices
\n**D. Bulk Actions**

- Select multiple menu items via checkboxes
- Bulk actions toolbar appears at bottom:\n  - 'Mark as Out of Stock'\n  - 'Mark as Available'
  - 'Apply Discount'
  - 'Delete Selected'
  - 'Export to CSV'
\n**E. Menu Analytics**

- 'View Analytics' button in menu management page
- Opens analytics panel showing:
  - Most ordered items (bar chart)
  - Revenue by category (pie chart)
  - Items with low orders (table)\n  - Average order value per item
  - Customer favorites (based on ratings)
\n**F. Category Management with Real-Time Synchronization**\n
- **Add New Category**:
  - '+ Add Category' button opens modal\n  - Form fields: Category Name (required), Category Image (optional), Display Order (number)
  - On save: Backend emits `menu:category:created` event
  - Customer dashboards instantly display new category in menu navigation

- **Edit/Delete Category**:
  - Edit icon opens modal with pre-filled data
  - Delete icon triggers confirmation dialog
  - On save/delete: Backend emits `menu:category:updated` or `menu:category:deleted` event
  - Customer dashboards update category name/image or remove category with smooth animation

---

#### 3.1.3 Advanced Inventory Management\n
**Overview**:
Complete inventory tracking system with real-time stock monitoring, low stock alerts, automatic deductions on order placement, supplier management, and inventory reports.\n
**Key Features**:\n
**A. Inventory Dashboard**

- **Top Metrics Cards**:
  1. Total Inventory Items
  2. Low Stock Items (count with alert badge)
  3. Out of Stock Items\n  4. Total Inventory Value
\n- **Inventory Items Table**:
  - Columns: Item Name, Category, Current Stock, Unit, Reorder Level, Supplier, Last Updated, Actions
  - Search and filter by category, stock status\n  - Sort by name, stock level, last updated
  - Color-coded rows: Red for out of stock, yellow for low stock, green for sufficient stock
\n**B. Add/Edit Inventory Item**

- Modal form with fields:
  - Item Name (required)
  - Category (dropdown: Vegetables, Meat, Dairy, Beverages, etc.)
  - Current Stock Quantity (number input)
  - Unit (dropdown: kg, liters, pieces, etc.)
  - Reorder Level (minimum stock threshold)
  - Supplier Name (text input or dropdown from saved suppliers)
  - Supplier Contact (phone/email)\n  - Cost per Unit (for cost tracking)
  - Notes (optional)

**C. Stock Adjustment**

- 'Adjust Stock' button for each item
- Modal with options:
  - Add Stock (e.g., new delivery received)
  - Reduce Stock (e.g., wastage, damage)
  - Set Stock (manual correction)
- Reason for adjustment (dropdown: Delivery, Wastage, Correction, etc.)
- Adjustment logged with timestamp and user

**D. Low Stock Alerts**

- Automatic notifications when stock falls below reorder level
- Alert displayed in notification bell and inventory dashboard
- Option to send email/SMS to owner
\n**E. Inventory Reports**

- 'Generate Report' button\n- Report types:\n  - Stock Valuation Report (total inventory value)
  - Stock Movement Report (additions/deductions over time)
  - Low Stock Report\n  - Supplier-wise Inventory Report
- Export to PDF/CSV\n
**F. Supplier Management**

- 'Manage Suppliers' section
- Add/edit/delete suppliers
- Supplier details: Name, contact, email, address, items supplied
- Quick reorder functionality (send order request to supplier)

---

#### 3.1.4 Enhanced QR Code Management with Real-Time Table Synchronization

**Overview**:
Generate, manage, and track QR codes for tables, takeaway, and delivery. Each QR code links to the restaurant's digital menu and enables customers to place orders directly. **QR code scanning is exclusively available on mobile devices. Table additions, modifications, and deletions are instantly synchronized to customer dashboards.**

**Key Features**:

**A. QR Code Dashboard**

- **Top Metrics Cards**:
  1. Total QR Codes Generated
  2. Active QR Codes (currently in use)
  3. Total Scans Today
  4. Total Orders via QR

- **QR Code List**:
  - Table view with columns: QR Code ID, Table Number/Name, Type (Dine-in/Takeaway), Status (Active/Inactive), Total Scans, Last Scanned, Actions
  - Search and filter by type, status
  - Sort by scans, last scanned
\n**B. Generate QR Code**

- '+ Generate QR Code' button\n- Modal form:\n  - QR Code Type: Radio buttons (Dine-in Table, Takeaway, Delivery)
  - Table Number/Name (ifdine-in)
  - Custom URL (optional, defaults to restaurant menu page)
  - Design Options: QR code color, logo overlay (restaurant logo in center)
- Generate button creates QR code\n- Preview QR code in modal
- Download options: PNG, SVG, PDF\n- Print option (opens print dialog)

**Real-Time Synchronization on Table Creation**:
- When owner generates new QR code for dine-in table:
  - Backend emits WebSocket event: `table:created`
  - Event payload includes: restaurant_id, table_id, table_number, qr_code_url, status
  - All connected customer clients subscribed to this restaurant receive event\n  - If customer is viewing order placement page or checkout page, new table number appears in table selection dropdown instantly
\n**C. QR Code Actions**

- **View**: Opens modal showing QR code image, scan count, recent scans
- **Edit**: Modify table number, status\n  - On save: Backend emits `table:updated` event
  - Customer dashboards update table information in real-time
- **Download**: Download QR code image
- **Print**: Print QR code with table number label
- **Deactivate/Activate**: Toggle QR code status
- On status change: Backend emits `table:updated` event
  - Customer dashboards reflect table availability status instantly
- **Delete**: Remove QR code (with confirmation)
  - On delete: Backend emits `table:deleted` event
  - Customer dashboards remove table from selection options with fade-out animation

**D. QR Code Analytics**

- 'View Analytics' button\n- Analytics panel showing:
  - Scans over time (line chart)
  - Orders per QR code (bar chart)
  - Peak scan times (heatmap)
  - Conversion rate (scans to orders)
\n**E. Bulk QR Code Generation**

- 'Bulk Generate' button
- Modal with options:
  - Number of QR codes to generate
  - Starting table number
  - QR code type\n- Generates multiple QR codes at once
- Download all as ZIP file
- Print all option (generates PDF with all QR codes)
- On bulk creation: Backend emits multiple `table:created` events
- Customer dashboards receive all new tables instantly

---
\n#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards and Real-Time Auto-Refresh

**Overview**:\nCentralized order management interface displaying all orders with real-time status updates, detailed order information, timeline tracking, waiter assignment, and instant notifications without page refresh.

**Key Features**:

**A. Order Dashboard Layout**

- **Top Filters & Search**:
  - Search bar (search by order ID, customer name, table number)\n  - Filter buttons: All Orders, Pending, Preparing, Ready, Completed, Cancelled
  - Date range picker (Today, Yesterday, Last 7 Days, Custom Range)
  - Sort dropdown: Newest First, Oldest First, Table Number\n\n- **Order Cards Grid**:
  - Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
  - Each order displayed as a glassmorphism card with neon border (color-coded by status)
\n**B. Enhanced Order Card Design**

**Card Header**:
- Order ID (bold, large font, e.g., '#ORD-1234')
- Order timestamp (e.g., '10:30 AM, Dec 5, 2025')
- Status badge (Pending/Preparing/Ready/Completed/Cancelled) with color coding:\n  - Pending: Yellow
  - Preparing: Blue
  - Ready: Green\n  - Completed: Grey
  - Cancelled: Red
\n**Card Body**:
- **Customer Information**:
  - Customer name (if available)
  - Table number (for dine-in) or 'Takeaway'/'Delivery' label
  - Contact number (if provided)
\n- **Order Items List**:
  - Each item displayed as: Quantity x Item Name (Portion if applicable)
  - Example: '2x Margherita Pizza (Full)', '1x Caesar Salad (Half)'
  - Special instructions (if any) displayed below items in italics

- **Order Total**:
  - Subtotal, taxes, discounts (if applicable), grand total
  - Displayed in bold with currency symbol

- **Assigned Waiter**:
  - Waiter name and profile picture (small circular avatar)
  - If not assigned: 'Assign Waiter' button
\n**Card Footer**:
- **Action Buttons** (conditional based on status):
  - **If Pending**: 'Accept Order' (green button), 'Reject Order' (red button)
  - **If Preparing**: 'Mark as Ready' (green button)\n  - **If Ready**: 'Mark as Completed' (green button)
  - **All Statuses**: 'View Details' (secondary button), 'Chat with Customer' (icon button)
\n**C. Real-Time Auto-Refresh & Notifications**

- **WebSocket Integration**:
  - Persistent WebSocket connection for real-time order updates
  - No page refresh required\n\n- **New Order Notification**:
  - When new order placed: Toast notification appears at top-right with sound alert
  - Notification bell badge count increments
  - New order card slides into grid from top with animation
  - Order card has pulsing glow effect for 5 seconds

- **Order Status Update**:
  - When order status changes (by owner or waiter): Card updates instantly
  - Status badge color changes with smooth transition
  - Timeline updates automatically
\n- **Order Timeline Auto-Update**:
  - Timeline displayed in 'View Details' modal
  - Shows: Order Placed → Accepted → Preparing → Ready → Completed\n  - Each step shows timestamp and user who performed action
  - Updates in real-time without closing modal

**D. Order Details Modal**

- Click'View Details' button to open full-screen modal
- **Modal Sections**:
  1. **Order Summary**: Order ID, timestamp, status, customer info, table number
  2. **Order Items**: Detailed list with item images, quantities, portions, prices, special instructions
  3. **Order Timeline**: Visual timeline with steps and timestamps (auto-updates in real-time)
  4. **Payment Information**: Payment method, payment status (Paid/Pending), transaction ID
  5. **Assigned Waiter**: Waiter details with option to reassign
  6. **Customer Communication**: Chat interface to message customer directly
  7. **Actions**: Update status, print order, generate e-bill, cancel order

**E. Bulk Order Actions**

- Select multiple orders via checkboxes
- Bulk actions toolbar:
  - 'Mark as Preparing'\n  - 'Mark as Ready'
  - 'Assign Waiter'
  - 'Print Selected'
  - 'Export to CSV'

**F. Order Analytics**

- 'View Analytics' button\n- Analytics panel:\n  - Average order preparation time
  - Orders by status (pie chart)
  - Peak order times (bar chart)
  - Revenue by order type (dine-in/takeaway/delivery)
\n---

#### 3.1.6 Enhanced Payment Management for Restaurant Owners

**Overview**:
Comprehensive payment tracking and management system with transaction history, payment method analytics, refund processing, and financial reports.

**Key Features**:

**A. Payment Dashboard**

- **Top Metrics Cards**:
  1. Total Revenue Today (real-time)
  2. Pending Payments (count and amount)
  3. Completed Payments Today
  4. Refunds Processed Today

- **Payment Transactions Table**:
  - Columns: Transaction ID, Order ID, Customer Name, Amount, Payment Method, Status (Paid/Pending/Refunded), Timestamp, Actions
  - Search by transaction ID, order ID, customer name
  - Filter by payment method (Cash, Card, UPI, Wallet), status, date range
  - Sort by amount, timestamp

**B. Payment Details Modal**

- Click on transaction to view details
- Modal displays:
  - Transaction ID, order ID, customer info
  - Payment method, amount, taxes, discounts
  - Payment timestamp\n  - Payment gateway response (if online payment)
  - Receipt download option (PDF)
\n**C. Refund Processing**

- 'Process Refund' button for completed payments
- Modal form:
  - Refund amount (full or partial)
  - Refund reason (dropdown: Customer request, Order cancelled, Item unavailable, etc.)
  - Notes (optional)
- Refund confirmation with email/SMS notification to customer
- Refund logged in transaction history

**D. Payment Method Analytics**

- 'View Analytics' button
- Analytics panel:
  - Revenue by payment method (pie chart)
  - Payment trends over time (line chart)
  - Average transaction value\n  - Payment success rate (for online payments)

**E. Financial Reports**

- 'Generate Report' button\n- Report types:
  - Daily Sales Report
  - Weekly/Monthly Revenue Report
  - Payment Method Breakdown Report
  - Tax Summary Report
  - Refunds Report
- Export to PDF/CSV
- Email report option

**F. Payment Settings**

- Configure accepted payment methods (Cash, Card, UPI, Wallets)
- Payment gateway integration settings (API keys, merchant ID)
- Tax configuration (GST, service charge percentages)
- Receipt customization (restaurant logo, footer text)

---
\n#### 3.1.7Waiter/Agent Assignment System

**Overview**:\nAutomatic and manual waiter assignment to orders and tables with workload balancing, performance tracking, and real-time communication.

**Key Features**:

**A. Waiter Management Dashboard**

- **Active Waiters List**:
  - Card view showing each waiter:\n    - Profile picture, name, employee ID
    - Current status (Available, Busy, On Break)
    - Assigned orders count
    - Assigned tables list
    - Performance rating (based on order completion time, customer feedback)
\n**B. Automatic Assignment**

- Toggle switch: 'Enable Auto-Assignment'\n- When enabled:\n  - New orders automatically assigned to available waiter with least workload
  - Assignment algorithm considers: Current orders, table proximity, waiter rating
- Notification sent to assigned waiter instantly

**C. Manual Assignment**

- 'Assign Waiter' button on order card
- Modal with dropdown list of available waiters
- Shows each waiter's current workload
- Select waiter and confirm assignment
- Notification sent to waiter

**D. Waiter Performance Tracking**

-'View Performance' button for each waiter
- Performance metrics:
  - Total orders handled today/week/month
  - Average order completion time
  - Customer ratings and feedback
  - Tips received (if applicable)
  - Attendance record\n
**E. Waiter Communication**

- 'Message Waiter' button\n- Opens chat interface for direct communication
- Send instructions, updates, or queries\n- Real-time message delivery\n\n---

#### 3.1.8 Real-Time Communication Hub

**Overview**:\nCentralized messaging system for communication between restaurant owner, waiters, and customers with real-time chat, broadcast messages, and notification management.

**Key Features**:

**A. Chat Dashboard**

- **Sidebar**: List of conversations\n  - Tabs: All, Customers, Waiters\n  - Each conversation shows: Contact name, last message preview, timestamp, unread count badge
  - Search bar to find conversations

- **Main Chat Area**:
  - Selected conversation displayed\n  - Message history with timestamps
  - Text input box at bottom
  - Send button, emoji picker, attachment option

**B. Real-Time Messaging**
\n- WebSocket-based instant message delivery
- Typing indicators ('Waiter is typing...')
- Message read receipts (double tick)
- Message delivery status (sent, delivered, read)
\n**C. Broadcast Messages**

- 'Send Broadcast' button
- Modal to compose message
- Select recipients: All Customers, All Waiters, Specific Group
- Send promotional messages, announcements, alerts

**D. Quick Replies**

- Predefined message templates for common responses
- Examples: 'Your order is being prepared', 'Table is ready', 'Thank you for your feedback'
- One-click send\n
**E. Notification Settings**

- Configure notification preferences\n- Enable/disable sound alerts, desktop notifications
- Set quiet hours (no notifications during specific times)
\n---

#### 3.1.9 Advanced Analytics & Reports with Real-Time Data\n
**Overview**:
Comprehensive analytics dashboard with real-time data visualization, customizable reports, and actionable insights for business growth.

**Key Features**:

**A. Analytics Dashboard**

- **Top Metrics Cards** (real-time data):
  1. Total Revenue (Today, This Week, This Month)
  2. Total Orders (Today, This Week, This Month)
  3. Average Order Value\n  4. Customer Retention Rate
\n- **Revenue Analytics**:
  - Line chart: Revenue over time (daily, weekly, monthly view)
  - Bar chart: Revenue by order type (dine-in, takeaway, delivery)
  - Pie chart: Revenue by payment method
\n- **Order Analytics**:
  - Bar chart: Orders by hour (peak times)
  - Line chart: Orders trend over time
  - Pie chart: Orders by status\n
- **Menu Analytics**:
  - Bar chart: Top10 selling items
  - Table: Items with low sales (recommendations to remove or promote)
  - Pie chart: Revenue by category

- **Customer Analytics**:
  - Total customers, new customers, returning customers
  - Customer demographics (if data available)
  - Customer feedback summary (average rating, review count)

- **Staff Analytics**:
  - Waiter performance comparison (bar chart)
  - Average order handling time per waiter
  - Staff attendance summary

**B. Custom Reports**

- 'Create Custom Report' button
- Select report type: Sales, Orders, Inventory, Staff, Customers
- Choose date range, filters, grouping options
- Generate report with charts and tables
- Export to PDF/CSV/Excel
- Schedule automated reports (daily, weekly, monthly email delivery)

**C. Predictive Analytics (Future Enhancement)**

- Sales forecasting based on historical data
- Inventory demand prediction
- Peak time predictions
\n---

#### 3.1.10 Complete Staff Management System (FULLY FUNCTIONAL)

**Overview**:\nComprehensive staff management module for adding, managing, and tracking restaurant staff (waiters, chefs, managers) with attendance tracking, performance analytics, shift scheduling, and payroll management.

**Key Features**:

**A. Staff Dashboard**

- **Top Metrics Cards**:
  1. Total Staff Members
  2. Staff On Duty Today
  3. Staff On Leave\n  4. Pending Leave Requests
\n- **Staff List Table**:
  - Columns: Profile Picture, Name, Employee ID, Role (Waiter/Chef/Manager), Contact, Status (Active/On Leave/Inactive), Actions
  - Search by name, employee ID\n  - Filter by role, status\n  - Sort by name, join date

**B. Add/Edit Staff Member**

- '+ Add Staff' button
- Modal form with fields:
  - Profile Picture Upload
  - Full Name (required)
  - Employee ID (auto-generated or manual)
  - Role (dropdown: Waiter, Chef, Manager, Cashier, etc.)
  - Contact Number (required)
  - Email Address
  - Date of Birth
  - Address
  - Join Date
  - Salary (optional)
  - Emergency Contact\n  - Notes\n- Save button creates staff account with login credentials (email/phone + auto-generated password sent via email/SMS)

**C. Attendance Tracking**

- 'Attendance' tab in staff management
- **Daily Attendance View**:
  - List of all staff with check-in/check-out status
  - 'Mark Attendance' button for manual entry
  - Clock-in/Clock-out time display
  - Total hours worked
- **Attendance History**:
  - Calendar view showing attendance for selected month
  - Color-coded: Green (present), Red (absent), Yellow (half-day), Blue (leave)
- **Attendance Reports**:
  - Generate monthly attendance report
  - Export to PDF/CSV
\n**D. Leave Management**

- 'Leave Requests' tab
- **Pending Requests**:
  - List of leave requests awaiting approval
  - Each request shows: Staff name, leave type (sick, casual, vacation), dates, reason\n  - 'Approve' and 'Reject' buttons
- **Leave History**:
  - Table showing all approved/rejected leaves
  - Filter by staff, leave type, date range
- **Leave Balance**:
  - Display remaining leave balance for each staff member
\n**E. Shift Scheduling**

- 'Shifts' tab
- **Weekly Schedule View**:
  - Calendar grid showing staff shifts for the week
  - Drag-and-drop to assign shifts\n  - Color-coded by role\n- **Create Shift**:
  - Modal form: Select staff, shift date, start time, end time, role
  - Save and notify staff via notification/SMS
- **Shift Swap Requests**:
  - Staff can request shift swaps\n  - Owner approves/rejects requests
\n**F. Performance Analytics**

- 'Performance' tab
- **Individual Performance**:
  - Select staff member to view detailed performance metrics:\n    - Total orders handled
    - Average order completion time
    - Customer ratings and feedback
    - Attendance percentage
    - Punctuality score
- **Team Performance**:
  - Comparison chart showing performance of all staff
  - Top performers highlighted
\n**G. Payroll Management**

- 'Payroll' tab
- **Salary Records**:
  - Table showing monthly salary for each staff member
  - Columns: Name, Role, Base Salary, Deductions, Bonuses, Net Salary, Payment Status
- **Generate Payslip**:
  - Select staff and month
  - Auto-generate payslip PDF with salary breakdown
  - Send via email\n- **Payment Tracking**:
  - Mark salary as paid\n  - Payment history log
\n**H. Staff Communication**

- 'Message Staff' button for each staff member
- Opens chat interface for direct communication
- Broadcast messages to all staff or specific roles
\n---

#### 3.1.11 Complete Marketing & Promotions System (FULLY FUNCTIONAL)

**Overview**:
Advanced marketing module for creating, managing, and tracking promotional campaigns, discounts, loyalty programs, and customer engagement initiatives.

**Key Features**:

**A. Marketing Dashboard**

- **Top Metrics Cards**:
  1. Active Campaigns
  2. Total Customers Reached
  3. Campaign Conversion Rate
  4. Revenue from Promotions

- **Active Campaigns List**:
  - Card view showing each campaign:\n    - Campaign name, type (discount, loyalty, referral)\n    - Start and end dates
    - Target audience\n    - Performance metrics (views, clicks, conversions)
    - 'Edit', 'Pause', 'Delete' buttons

**B. Create Promotion Campaign**

- '+ Create Campaign' button
- Modal form with tabs:
\n**1. Campaign Details Tab**:
- Campaign Name (required)
- Campaign Type (dropdown: Discount Offer, Loyalty Program, Referral Program, Flash Sale, Happy Hours)\n- Description\n- Start Date & Time
- End Date & Time\n- Campaign Image/Banner Upload
\n**2. Offer Configuration Tab**:
- **If Discount Offer**:
  - Discount Type: Percentage or Fixed Amount
  - Discount Value\n  - Minimum Order Value (optional)
  - Applicable Items: All Items or Select Specific Items/Categories
  - Promo Code (auto-generated or custom)
- **If Loyalty Program**:
  - Points per order
  - Redemption rules (e.g., 100 points = $10 discount)
- **If Referral Program**:\n  - Referrer reward (discount/points)
  - Referee reward\n\n**3. Target Audience Tab**:
- All Customers or Specific Segments
- Segment options: New Customers, Returning Customers, High-Value Customers, Customers who haven't ordered in X days
\n**4. Notification Settings Tab**:
- Send campaign notification via: Push Notification, Email, SMS\n- Schedule notification time
\n**Action Buttons**:
- 'Launch Campaign' (activates immediately)
- 'Schedule Campaign' (activates at specified time)
- 'Save as Draft'\n\n**C. Discount Code Management**

- 'Discount Codes' tab\n- **Active Codes List**:
  - Table showing: Code, Discount, Usage Limit, Times Used, Expiry Date, Status
- **Create Discount Code**:
  - Modal form: Code name, discount type, value, usage limit, expiry date
  - Generate unique code or custom code
- **Bulk Code Generation**:
  - Generate multiple unique codes for distribution
  - Export codes to CSV
\n**D. Loyalty Program**

- 'Loyalty Program' tab
- **Program Configuration**:
  - Enable/disable loyalty program
  - Set points earning rate (e.g., 1 point per $1 spent)
  - Set redemption rate (e.g., 100 points = $10 discount)\n  - Bonus points for specific actions (e.g., first order, referral, review)
- **Customer Loyalty Dashboard**:
  - Table showing customers with loyalty points
  - Columns: Customer Name, Total Points, Points Redeemed, Current Balance\n  - Search and filter options

**E. Referral Program**

- 'Referral Program' tab
- **Program Configuration**:
  - Enable/disable referral program
  - Set referrer reward (discount/points)
  - Set referee reward\n- **Referral Tracking**:
  - Table showing referrals: Referrer Name, Referee Name, Referral Date, Status (Pending/Completed), Reward Given
\n**F. Campaign Analytics**

- 'Analytics' tab
- **Campaign Performance**:
  - Table showing each campaign with metrics: Views, Clicks, Conversions, Revenue Generated, ROI
- **Charts**:
  - Campaign reach over time (line chart)
  - Conversion rate by campaign type (bar chart)
  - Revenue from promotions vs regular orders (pie chart)
\n**G. Customer Engagement**

- 'Engagement' tab
- **Send Promotional Messages**:
  - Compose message with offer details
  - Select target audience
  - Send via push notification, email, SMS
- **Feedback Requests**:
  - Automated feedback request after order completion
  - Collect ratings and reviews
- **Birthday/Anniversary Offers**:
  - Automatic special offers sent on customer birthdays/anniversaries

---

#### 3.1.12 Complete Settings Module (FULLY FUNCTIONAL) - Updated with Auto-Application

**Overview**:\nComprehensive settings module for configuring restaurant profile, operational settings, payment gateways, notifications, user preferences, currency, timezone, and system configurations with automatic application across the entire platform.

**Key Features**:

**A. Settings Dashboard**

- Sidebar navigation with sections:
  1. Restaurant Profile
  2. Operational Settings
  3. Payment Settings
  4. Notification Settings
  5. User Preferences
  6. Currency & Timezone
  7. Security Settings
  8. Integrations
  9. System Settings

**B. Restaurant Profile**

- **Basic Information**:
  - Restaurant Name (editable)
  - Restaurant Logo Upload (with preview)
  - Cover Image Upload\n  - Description/About Us (textarea)
  - **Restaurant Type** (dropdown: Veg, Non-Veg, Both)
  - Cuisine Type (multi-select: Italian, Chinese, Indian, etc.)
  - Contact Number
  - Email Address
  - Website URL (optional)
- **Address**:
  - Street Address
  - City, State, ZIP Code
  - Country
  - Map Location (Google Maps integration for pin location)
- **Operating Hours**:
  - Set opening and closing times for each day of the week
  - Option to mark specific days as closed
  - Special hours for holidays
- **Social Media Links**:
  - Facebook, Instagram, Twitter, YouTube URLs
- Save button applies changes\n
**C. Operational Settings**

- **Order Settings**:
  - Enable/disable dine-in, takeaway, delivery
  - Minimum order value for delivery
  - Delivery radius (km)
  - Estimated preparation time (default)\n  - Auto-accept orders (toggle)
- **Table Management**:
  - Number of tables
  - Table capacity configuration
  - Table layout map (optional)
- **Kitchen Display Settings**:
  - Enable kitchen display system (KDS)
  - Order grouping preferences
- Save button applies changes

**D. Payment Settings**
\n- **Accepted Payment Methods**:
  - Checkboxes: Cash, Credit/Debit Card, UPI, Wallets (Paytm, PhonePe, etc.)
- **Payment Gateway Integration**:
  - Select gateway: Stripe, Razorpay, PayPal, etc.
  - API Key and Secret Key input fields
  - Test Mode toggle
  - 'Test Connection' button to verify integration
- **Tax Configuration**:
  - GST/VAT percentage
  - Service charge percentage
  - Apply tax on: All items or specific categories
- **Receipt Settings**:
  - Receipt header text
  - Receipt footer text
  - Include restaurant logo on receipt (toggle)
- Save button applies changes

**E. Notification Settings**

- **Owner Notifications**:
  - Checkboxes for notification types:\n    - New order placed
    - Order status updated
    - Low inventory alert
    - New customer review
    - Staff attendance update
    - Payment received
  - Notification channels: In-app, Email, SMS
- **Customer Notifications**:
  - Order confirmation\n  - Order status updates
  - Promotional messages
  - Notification channels: In-app, Email, SMS
- **Waiter Notifications**:
  - Order assigned\n  - Order status change request
  - Notification channels: In-app, SMS
- Save button applies changes

**F. User Preferences**

- **Language**:
  - Dropdown to select interface language (English, Spanish, French, etc.)
- **Theme**:
  - Toggle: Dark Mode (default) or Light Mode
- **Dashboard Layout**:
  - Customize dashboard widget arrangement (drag-and-drop)
- **Date Format**:
  - Dropdown: MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD
- **Time Format**:
  - Radio buttons: 12-hour or 24-hour\n- Save button applies changes

**G. Currency & Timezone (Auto-Application Feature)**

- **Currency Settings**:
  - Dropdown to select currency (USD, EUR, INR, GBP, etc.)
  - Currency symbol display position: Before amount ($100) or After amount (100$)
  - Decimal places (0, 2)\n- **Timezone Settings**:
  - Dropdown to select timezone (e.g., UTC, EST, IST, PST, etc.)
  - Display current time in selected timezone
- **Auto-Application**:
  - Upon saving currency or timezone changes, the system automatically applies the new settings across the entire platform:\n    - All prices, revenue, and financial data display in selected currency
    - All timestamps, order times, analytics date ranges, and reports use selected timezone
    - Real-time data (dashboard metrics, order timestamps, analytics charts) updates immediately without page refresh
    - No manual refresh or re-login required
- Save button applies changes and triggers system-wide update

**H. Security Settings**
\n- **Password Management**:
  - Change password form (current password, new password, confirm password)
- **Two-Factor Authentication**:
  - Enable/disable 2FA (toggle)
  - Setup2FA with authenticator app or SMS
- **Active Sessions**:
  - List of active login sessions with device info and location
  - 'Revoke' button to log out from specific devices
- **Login History**:
  - Table showing recent login attempts with timestamp, device, location, status (success/failed)
- Save button applies changes

**I. Integrations**

- **Third-Party Integrations**:
  - Google Analytics (tracking ID input)
  - Facebook Pixel (pixel ID input)
  - Zomato/Swiggy API integration (for order sync)
  - Accounting software integration (QuickBooks, Xero)\n- **Webhook Configuration**:
  - Add webhook URLs for external system notifications
  - Test webhook button\n- Save button applies changes

**J. System Settings**
\n- **Data Backup**:
  - 'Backup Now' button to create manual backup
  - Automated backup schedule (daily, weekly)\n  - Download backup files
- **Data Export**:
  - Export all data (orders, customers, menu, inventory) to CSV/JSON
- **System Logs**:
  - View system activity logs (user actions, errors, API calls)
  - Filter by date, user, action type
- **App Version**:
  - Display current app version
  - 'Check for Updates' button
- Save button applies changes\n
---

### 3.2 Enhanced Customer Features with Real-Time Menu & Table Synchronization

#### 3.2.1 Customer Home Screen with Complete Sidebar Functionality and Real-Time Updates

**Overview**:
Customer-facing home screen providing access to all customer features including browsing previously scanned restaurants, viewing order history, tracking active orders, accessing profile settings, and more. **All menu and table data is synchronized in real-time via WebSocket.**

**Layout Structure**:
\n**A. Top Navigation Bar**
- DineQR logo (left)\n- Search bar (center) for searching menu items or restaurants
- Notification bell icon with badge count (right)
- User profile icon (right) with dropdown: Profile, Settings, Logout

**B. Sidebar Navigation (Collapsible, Fully Functional)**
- **Home** (home icon) - Customer dashboard
- **Browse Restaurants** (restaurant icon) - View previously scanned restaurants with search functionality
- **Active Orders** (clipboard icon) - Track current orders in real-time
- **Order History** (history icon) - View past orders with reorder option
- **Favorites** (heart icon) - Saved favorite menu items and restaurants
- **Loyalty & Rewards** (gift icon) - View loyalty points, rewards, and referral program
- **Profile** (user icon) - Edit profile information
- **Settings** (gear icon) - Notification preferences, language, theme
- **Help & Support** (question icon) - FAQs, contact support, chat with restaurant\n
**C. Main Dashboard Content Area**
\n**Welcome Banner**:\n- Personalized greeting (e.g., 'Welcome back, John!')
- Quick action buttons: **'Scan QR Code' (visible only on mobile devices)**,'Browse Restaurants', 'View Active Orders'\n\n**Active Orders Section**:
- Display current active orders (if any)
- Each order card shows: Restaurant name, order ID, status, estimated time, 'Track Order' button
- Real-time status updates without page refresh

**Recently Scanned Restaurants Section**:
- Horizontal scrollable cards showing last 5 scanned restaurants
- Each card displays: Restaurant logo, name, cuisine type, 'View Menu' button
- Click to open restaurant menu

**Recommended for You Section**:
- AI-powered recommendations based on order history
- Display menu items or restaurants\n- 'Order Now' button\n
**Promotions & Offers Section**:
- Display active promotional campaigns
- Banner cards with offer details
- 'Claim Offer' button

**Real-Time WebSocket Connection**:
- Customer dashboard establishes persistent WebSocket connection on page load
- Subscribes to events for all restaurants in'Browse Restaurants' list
- Listens for: `menu:item:created`, `menu:item:updated`, `menu:item:deleted`, `menu:category:created`, `menu:category:updated`, `menu:category:deleted`, `table:created`, `table:updated`, `table:deleted`
- When events received, dashboard updates relevant data instantly without page refresh

---

#### 3.2.2 Browse Restaurants (Complete Functionality with Restaurant Type Display and Real-Time Menu Updates)

**Overview**:\nDedicated page displaying all restaurants previously scanned by the customer with search and filter functionality for easy access. **Restaurant type (Veg/Non-Veg/Both) is prominently displayed on each restaurant card. Menu changes from restaurant owner are reflected in real-time.**
\n**Key Features**:

**A. Restaurant List Layout**
\n- **Search Bar**:
  - Positioned at top of page
  - Search by restaurant name, cuisine type, or location
  - Real-time search results as user types
\n- **Filter Options**:
  - Filter by cuisine type (Italian, Chinese, Indian, etc.)
  - **Filter by restaurant type (Veg, Non-Veg, Both)**
  - Filter by location/area
  - Sort by: Recently Scanned, Name (A-Z), Rating\n
- **Restaurant Cards Grid**:
  - Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
  - Each restaurant card displays:\n    - Restaurant logo/cover image
    - Restaurant name (bold)
    - **Restaurant type badge (Veg/Non-Veg/Both) displayed prominently below restaurant name with color coding:**
      - **Veg: Bright green (#39FF14) badge with white text and leaf icon**
      - **Non-Veg: Bright red (#FF073A) badge with white text and meat icon**
      - **Both: Bright orange (#FF8C00) badge with white text and dual icon (leaf + meat)**
    - Cuisine type tags\n    - Average rating (stars) and review count
    - Last scanned date (e.g., 'Scanned 2 days ago')
    - 'View Menu' button (primary action)
    - 'Favorite' icon (heart) to save restaurant
  - Glassmorphism card design with neon border on hover

**B. Restaurant Details**

- Click'View Menu' to open restaurant's digital menu
- Menu displayed in Zomato-style layout with categories and items
- Customer can browse menu, add items to cart, and place order
\n**C. Empty State**

- If no restaurants scanned yet:\n  - Display message: 'You haven't scanned any restaurants yet'\n  - **'Scan QR Code' button (visible only on mobile devices) to scan first restaurant**
\n**D. Real-Time Menu Synchronization**

- When customer opens'Browse Restaurants' page:
  - WebSocket connection subscribes to menu update events for all listed restaurants
  - Events: `menu:item:created`, `menu:item:updated`, `menu:item:deleted`, `menu:category:created`, `menu:category:updated`, `menu:category:deleted`
- When restaurant owner adds/edits/deletes menu items or categories:
  - Customer's'Browse Restaurants' page receives event instantly
  - If customer clicks 'View Menu' for that restaurant, menu displays latest data
  - No page refresh required

---

#### 3.2.3 QR Code Scanning & Menu Access (Mobile-Only Feature with Restaurant Type Display in Header and Real-Time Menu Updates)
\n**Overview**:
Customers scan restaurant QR codes to access digital menu, browse items, and place orders. **QR code scanning functionality is exclusively available on mobile devices.** **Restaurant type (Veg/Non-Veg/Both) is displayed in the menu page header next to the restaurant name. Menu updates from restaurant owner are reflected in real-time.**

**Key Features**:

**A. QR Code Scanner (Mobile-Only)**

- **'Scan QR Code' button on customer home screen**
  - **Button visibility**: Displayed only when accessed from mobile devices (smartphones, tablets)
  - **Device detection**: System automatically detects device type using user agent or screen size
  - **Desktop behavior**: Button is hidden on desktop/laptop devices. Desktop users can only access restaurants via'Browse Restaurants' section
- Opens camera interface for scanning\n- Automatic QR code detection and validation
- On successful scan:\n  - Restaurant added to 'Browse Restaurants' list
  - Redirected to restaurant's digital menu
- **Error handling**: If user attempts to access QR scanner from desktop (via direct URL), display message: 'QR code scanning is only available on mobile devices. Please use a smartphone or tablet to scan QR codes.'

**B. Digital Menu Display (with Restaurant Type in Header and Real-Time Updates)**

- **Menu Header:**
  - Restaurant logo (left)
  - Restaurant name (center, bold, large font)
  - **Restaurant type badge (Veg/Non-Veg/Both) displayed immediately after restaurant name with color coding:**
    - **Veg: Bright green (#39FF14) badge with white text and leaf icon**
    - **Non-Veg: Bright red (#FF073A) badge with white text and meat icon**\n    - **Both: Bright orange (#FF8C00) badge with white text and dual icon (leaf + meat)**
  - Average rating and review count (right)
  - 'Favorite' icon (heart) to save restaurant
\n- **Menu Layout:**
  - Zomato-style layout with sticky category navigation
  - Display all menu categories and items
  - Each item card shows:
    - Item image\n    - Item name and description
    - Price (half/full portions if applicable)
    - Dietary tags (veg/non-veg, spicy level)
    - Availability status\n    - 'Add to Cart' button
\n**Real-Time Menu Synchronization**:\n- When customer opens menu page:
  - WebSocket connection subscribes to menu update events for this restaurant
  - Events: `menu:item:created`, `menu:item:updated`, `menu:item:deleted`, `menu:category:created`, `menu:category:updated`, `menu:category:deleted`
- **When restaurant owner adds new menu item**:
  - Backend emits `menu:item:created` event\n  - Customer's menu page receives event instantly
  - New item card slides into respective category with smooth animation
  - Toast notification appears: 'New item added: [Item Name]' (optional, can be disabled in settings)
- **When restaurant owner edits menu item**:
  - Backend emits `menu:item:updated` event
  - Customer's menu page receives event\n  - Item card updates data (name, price, image, description, availability) with smooth transition
  - If price changed, highlight price with pulsing glow for 3 seconds
- **When restaurant owner deletes menu item**:
  - Backend emits `menu:item:deleted` event
  - Customer's menu page receives event
  - Item card fades out and removes from display with animation
- **When restaurant owner adds/edits/deletes category**:
  - Backend emits `menu:category:created`, `menu:category:updated`, or `menu:category:deleted` event
  - Customer's menu page updates category navigation bar instantly
  - New categories appear with slide-in animation
  - Deleted categories fade out\n  - Edited categories update name/image with smooth transition
- **No page refresh required** - all updates happen in real-time

**C. Item Details Modal**

- Click on item card to view full details
- Modal displays:
  - Large item image
  - Complete description
  - Nutritional information
  - Allergen warnings
  - Portion selection (half/full)
  - Quantity selector
  - Special instructions text area
  - 'Add to Cart' button
\n**D. Cart Management**\n
- Floating cart icon with item count badge
- Click to open cart sidebar
- Cart displays:
  - List of added items with quantities and prices
  - Subtotal, taxes, total
  - 'Proceed to Checkout' button
  - Option to edit quantities or remove items
\n---

#### 3.2.4 Complete Order Placement & Checkout Flow (FULLY DETAILED) - Updated with Table Number Entry for Browse Orders and Real-Time Table Synchronization

**Overview**:
Streamlined, multi-step checkout process for placing orders with customer information collection, promo code application, multiple payment options, order confirmation, and seamless transition to order tracking. **Updated to include mandatory table number entry for dine-in orders placed via Browse Restaurants (without QR code scan). Table list is synchronized in real-time when restaurant owner adds/edits/deletes tables.**

---

**STEP 1: Cart Review & Proceed to Checkout**

**A. Cart Sidebar/Page**

- **Location**: Accessible via floating cart icon (bottom-right corner) or dedicated cart page
- **Layout**: Glassmorphism panel sliding in from right (sidebar) or full-page view
\n**Cart Header**:
- Title: 'Your Cart' (bold, large font)
- Restaurant name and logo (if single restaurant order)
- Close button (X icon) for sidebar view
\n**Cart Items Section**:
- **Each cart item displayed as a card**:\n  - Item image (small thumbnail, left)
  - Item name (bold)\n  - Portion type (if applicable): 'Half' or 'Full' badge
  - Special instructions (if added): Displayed below item name in italics
  - Quantity selector: '-' button, quantity number, '+' button (inline)
  - Item price (right): Unit price x quantity = total (e.g., '$12x 2 = $24')
  - 'Remove' icon (trash icon, top-right of card)
- **Empty Cart State**:
  - If cart is empty: Display message 'Your cart is empty' with'Browse Menu' button
\n**Price Breakdown Section**:
- **Subtotal**: Sum of all item prices (e.g., 'Subtotal: $48.00')
- **Taxes**: Calculated based on restaurant settings (e.g., 'GST (5%): $2.40')
- **Discount**: If promo code applied, show discount amount (e.g., 'Discount (SAVE10): -$5.00')
- **Delivery Fee**: If delivery order, show fee (e.g., 'Delivery Fee: $3.00')
- **Grand Total**: Final amount in bold, large font with currency symbol (e.g., 'Total: $48.40')

**Action Buttons**:
- **'Continue Shopping' Button**: Secondary button (outline style), returns to menu page
- **'Proceed to Checkout' Button**: Primary button (neon gradient, prominent), navigates to checkout page
  - Button disabled if cart is empty
  - On click: Smooth transition to checkout page (no full page reload)
\n---

**STEP 2: Checkout Page - Customer Information & Order Details (Updated with Table Number Entry Logic and Real-Time Table Synchronization)**

**A. Checkout Page Layout**

- **Page Structure**: Two-column layout on desktop (left: form, right: order summary), single column on mobile (form on top, summary below)
- **Progress Indicator**: Stepper at top showing: 1. Cart → **2. Checkout** → 3. Payment → 4. Confirmation (current step highlighted)
\n**B. Left Column: Checkout Form**

**Section 1: Customer Information**
\n- **Heading**: 'Customer Details' (bold, with user icon)
- **Form Fields**:
  1. **Full Name**:\n     - Text input (required)
     - Pre-filled if user is logged in
     - Placeholder: 'Enter your full name'
     - Validation: Cannot be empty, minimum 2 characters
  2. **Contact Number**:
     - Phone number input with country code dropdown (required)
     - Pre-filled if user is logged in\n     - Placeholder: '+1 (555) 123-4567'
     - Validation: Valid phone number format
  3. **Email Address** (optional):
     - Email input\n     - Pre-filled if user is logged in
     - Placeholder: 'your.email@example.com'
     - Validation: Valid email format if provided
\n**Section 2: Order Type & Delivery Details (Updated with Table Number Entry Logic and Real-Time Table Synchronization)**

- **Heading**: 'Order Type' (bold, with location icon)
- **Order Type Selection**: Radio buttons (large, card-style)
  1. **Dine-In** (default if QR code scanned from table):
     - Icon: Table icon
     - Label: 'Dine-In'
     - Sub-label: 'Enjoy your meal at the restaurant'
     - **If selected**:
       - **Case A: Order placed via QR code scan (table number auto-detected)**:\n         - Display table number as badge below radio button (e.g., 'Table 5')
         - Table number is read-only and auto-filled from QR code data
       - **Case B: Order placed via Browse Restaurants (no QR code scan)**:
         - Display dropdown: 'Select Table Number' (required)
         - Dropdown populated with active tables from restaurant's QR code system
         - Options format: 'Table 1', 'Table 2', 'Table 3', etc.
         - Validation: Cannot be empty, must select a table
         - Error message if not selected: 'Please select your table number for dine-in orders'
         - **Real-Time Table Synchronization**:
           - When checkout page loads, WebSocket subscribes to `table:created`, `table:updated`, `table:deleted` events for this restaurant
           - **If restaurant owner adds new table**: Backend emits `table:created` event → Dropdown instantly adds new table option with slide-in animation
           - **If restaurant owner edits table**: Backend emits `table:updated` event → Dropdown updates table name/number instantly
           - **If restaurant owner deletes table**: Backend emits `table:deleted` event → Dropdown removes table option with fade-out animation. If customer had selected deleted table, show warning: 'Selected table is no longer available. Please choose another table.' and reset selection.\n           - **If restaurant owner deactivates table**: Backend emits `table:updated` event with status 'inactive' → Dropdown disables that table option and shows '(Unavailable)' label. If customer had selected deactivated table, show warning and reset selection.
  2. **Takeaway**:
     - Icon: Bag icon
     - Label: 'Takeaway'
     - Sub-label: 'Pick up your order from the restaurant'
     - **If selected**: Display estimated pickup time (e.g., 'Ready in 20 mins')
  3. **Delivery** (if enabled by restaurant):
     - Icon: Delivery truck icon
     - Label: 'Delivery'
     - Sub-label: 'Get your order delivered to your doorstep'
     - **If selected**: Show delivery address form:\n       - **Street Address**: Text input (required)
       - **Apartment/Suite** (optional): Text input
       - **City**: Text input (required)
       - **State/Province**: Dropdown (required)
       - **ZIP/Postal Code**: Text input (required)
       - **Delivery Instructions** (optional): Textarea (e.g., 'Ring the doorbell twice')
       - Display delivery fee and estimated delivery time (e.g., 'Delivery Fee: $3.00 | Estimated Time: 45 mins')
\n**Section 3: Special Instructions**

- **Heading**: 'Special Instructions' (bold, with note icon)
- **Textarea**: Multi-line text input (optional)
  - Placeholder: 'Any special requests for your order? (e.g., extra spicy, no onions)'
  - Character limit: 500 characters
  - Character counter displayed below textarea (e.g., '0/500')
\n**Section 4: Promo Code**

- **Heading**: 'Have a Promo Code?' (bold, with tag icon)
- **Promo Code Input**:
  - Text input with'Apply' button inline (right side)
  - Placeholder: 'Enter promo code'
  - On click 'Apply': Validate promo code via API\n    - **If valid**: Display success message 'Promo code applied! You saved $X' (green text with checkmark icon), update order summary with discount\n    - **If invalid**: Display error message 'Invalid or expired promo code' (red text with X icon)\n  - If promo code already applied: Show applied code with 'Remove' button (e.g., 'SAVE10 applied | Remove')

**C. Right Column: Order Summary (Sticky on Desktop)**

- **Heading**: 'Order Summary' (bold)\n- **Restaurant Info**:
  - Restaurant logo and name
  - Restaurant type badge (Veg/Non-Veg/Both)
  - Order type badge (Dine-In/Takeaway/Delivery)
\n**Order Items List**:
- Compact list of cart items:\n  - Each item: Quantity x Item Name (Portion) - Price\n  - Example: '2x Margherita Pizza (Full) - $24.00'
- Special instructions (if any) displayed below item in smaller font
- 'Edit Cart' link (navigates back to cart)\n
**Price Breakdown**:
- Subtotal\n- Taxes (with percentage)
- Discount (if promo code applied, with code name)\n- Delivery Fee (if delivery order)
- **Grand Total** (bold, large font, highlighted with neon border)

**Estimated Time**:
- Display estimated preparation/delivery time (e.g., 'Estimated Time: 25 mins')
\n**Action Button**:
- **'Proceed to Payment' Button**: Primary button (neon gradient, full-width)\n  - On click: Validate all required fields
    - **If validation fails**: Scroll to first error field, display error messages below respective fields (red text)\n    - **Validation includes**:
      - Customer name and contact number must be filled
      - **If Dine-In selected and order placed via Browse Restaurants (no QR scan)**: Table number must be selected from dropdown
      - If Delivery selected: All delivery address fields must be filled
    - **If validation passes**: Smooth transition to payment page

---

**STEP 3: Payment Page - Payment Method Selection & Processing**

**A. Payment Page Layout**

- **Progress Indicator**: Stepper showing: 1. Cart → 2. Checkout → **3. Payment** → 4. Confirmation
- **Page Structure**: Single column layout with payment options
\n**B. Payment Method Selection**

- **Heading**: 'Select Payment Method' (bold, with credit card icon)
- **Payment Options**: Large card-style radio buttons (one option selected at a time)
\n**Option 1: Cash on Delivery/Cash at Counter**
- Icon: Cash icon
- Label: 'Cash' (for dine-in/takeaway) or 'Cash on Delivery' (for delivery)
- Sub-label: 'Pay with cash when you receive your order'
- **If selected**: No additional fields required

**Option 2: Credit/Debit Card**
- Icon: Credit card icon
- Label: 'Credit/Debit Card'
- Sub-label: 'Pay securely with your card'
- **If selected**: Display card input form:
  - **Card Number**: Input with card type detection (Visa/Mastercard/Amex icons)
    - Placeholder: '1234 5678 9012 3456'
    - Validation: Valid card number (Luhn algorithm)
  - **Cardholder Name**: Text input\n    - Placeholder: 'Name on card'
  - **Expiry Date**: Input with format MM/YY\n    - Placeholder: 'MM/YY'
    - Validation: Valid future date
  - **CVV**: Input (3-4 digits)
    - Placeholder: 'CVV'
    - Tooltip: 'Last 3 digits on back of card'
  - **Save Card for Future**: Checkbox (optional, if user is logged in)
  - **Security Badge**: Display'Secured by Stripe/Razorpay' logo and SSL lock icon

**Option 3: UPI (Unified Payments Interface)**
- Icon: UPI icon
- Label: 'UPI'\n- Sub-label: 'Pay using UPI apps like Google Pay, PhonePe, Paytm'\n- **If selected**: Display UPI ID input:\n  - **UPI ID**: Text input
    - Placeholder: 'yourname@upi'\n    - Validation: Valid UPI ID format (e.g., name@bank)\n  - **OR**: Display QR code for UPI payment
    - 'Scan QR Code with your UPI app' instruction
    - QR code image (generated with payment details)
\n**Option 4: Digital Wallets**
- Icon: Wallet icon
- Label: 'Digital Wallets'
- Sub-label: 'Pay using Paytm, PhonePe, Amazon Pay, etc.'
- **If selected**: Display wallet selection:\n  - Radio buttons or dropdown: Paytm, PhonePe, Amazon Pay, Google Pay\n  - On selection: Redirect to respective wallet app/website for payment authorization
\n**C. Order Summary (Sticky Sidebar on Desktop)**

- Same as checkout page: Restaurant info, order items, price breakdown, grand total
\n**D. Action Buttons**

- **'Back to Checkout' Button**: Secondary button (outline style), navigates back to checkout page
- **'Place Order & Pay' Button**: Primary button (neon gradient, full-width, prominent)
  - Button text changes based on payment method:\n    - Cash: 'Place Order'\n    - Card/UPI/Wallet: 'Pay $XX.XX & Place Order'
  - On click:\n    - **If Cash**: Skip payment processing, directly place order
    - **If Card/UPI/Wallet**: Process payment via payment gateway
      - Display loading spinner with message 'Processing payment...'
      - **If payment successful**: Place order and navigate to confirmation page
      - **If payment failed**: Display error message 'Payment failed. Please try again or choose another method' (red alert banner), allow user to retry or change payment method

**E. Payment Processing Flow**

1. **User clicks 'Place Order & Pay'**:\n   - Frontend validates payment details (card number, UPI ID, etc.)
   - If validation fails: Display error messages\n   - If validation passes: Send payment request to backend
\n2. **Backend processes payment**:
   - Integrate with payment gateway (Stripe, Razorpay, PayPal)\n   - Create payment intent/transaction
   - Return payment status to frontend

3. **Frontend handles payment response**:
   - **Success**: Create order in database, send confirmation to customer and restaurant, navigate to confirmation page
   - **Failure**: Display error, allow retry\n
4. **For UPI QR Code**:
   - Display QR code and wait for payment confirmation
   - Poll backend every 5 seconds to check payment status
   - Once payment confirmed: Proceed to order placement

5. **For Wallet Redirect**:
   - Redirect user to wallet app/website
   - After payment, wallet redirects back to app with payment status
   - Handle redirect and proceed accordingly

---

**STEP 4: Order Confirmation Page**

**A. Confirmation Page Layout**

- **Progress Indicator**: Stepper showing: 1. Cart → 2. Checkout → 3. Payment → **4. Confirmation** (all steps completed with checkmarks)
\n**B. Success Message**

- **Large Success Icon**: Animated checkmark icon (green, pulsing glow)
- **Heading**: 'Order Placed Successfully!' (bold, large font, neon green color)
- **Sub-heading**: 'Thank you for your order, [Customer Name]!' (personalized)
\n**C. Order Details Card**

- **Glassmorphism card with neon border**:
  - **Order ID**: Large, bold (e.g., '#ORD-1234')
  - **Restaurant Name**: With logo and restaurant type badge
  - **Order Type**: Badge (Dine-In/Takeaway/Delivery)
  - **Table Number** (if dine-in): Displayed prominently (whether auto-detected from QR or manually selected from dropdown)
  - **Estimated Time**: 'Your order will be ready in approximately 25 minutes' (dynamic based on order type)
  - **Order Timestamp**: Date and time order was placed
\n**D. Order Summary**

- **Order Items List**: Same as previous pages
- **Price Breakdown**: Subtotal, taxes, discount, delivery fee, grand total
- **Payment Method**: Display selected payment method (e.g., 'Paid via Credit Card ending in 1234')
- **Payment Status**: Badge (Paid/Pending)\n\n**E. Action Buttons**

- **'Track Your Order' Button**: Primary button (neon gradient)\n  - On click: Navigate to real-time order tracking page
- **'Download Receipt' Button**: Secondary button (outline style)
  - On click: Generate and download PDF receipt/e-bill
- **'Back to Home' Button**: Tertiary button (text link)
  - On click: Navigate to customer home screen

**F. Additional Information**

- **Notification Message**: 'We've sent a confirmation to your email/phone number'\n- **Customer Support**: 'Need help? Chat with us' button (opens chat interface)
\n**G. Post-Order Actions**

1. **Send Confirmation Notifications**:
   - Email: Order confirmation with details and receipt
   - SMS: Order ID and estimated time
   - Push Notification: 'Your order has been placed!'

2. **Notify Restaurant**:
   - Real-time notification to restaurant owner dashboard (new order alert)
   - Notification to assigned waiter (if auto-assignment enabled)
   - Order appears in restaurant's order management dashboard

3. **Update Database**:
   - Create order record with all details (including table number whether from QR or manual selection)
   - Update inventory (deduct items if linked)\n   - Log transaction in payment records
   - Add order to customer's order history

4. **Initiate Order Tracking**:
   - Create order timeline with initial status'Order Placed'
   - Enable real-time WebSocket connection for status updates
\n---

**STEP 5: Transition to Order Tracking**

**A. Automatic Redirect (Optional)**

- After5 seconds on confirmation page, display countdown: 'Redirecting to order tracking in 5... 4... 3...'
- Auto-navigate to order tracking page
- User can click 'Track Your Order' button anytime to skip countdown

**B. Order Tracking Page**

- Detailed order tracking interface (as described in section 3.2.5)
- Real-time status updates\n- Order timeline with progress indicators
- Estimated time remaining
- Chat with restaurant option

---

**Additional Checkout Features**

**A. Guest Checkout**

- Allow users to place orders without creating an account
- Collect only essential information (name, contact number)\n- After order placement, prompt user to create account: 'Create an account to track your orders and earn rewards'
- If user creates account: Link order to new account

**B. Saved Addresses & Payment Methods (for Logged-In Users)**

- **Saved Addresses**:
  - Display list of saved delivery addresses
  - 'Use this address' button for quick selection
  - 'Add New Address' option\n- **Saved Payment Methods**:
  - Display saved cards (last 4 digits)
  - 'Use this card' button\n  - CVV input required for security
  - 'Add New Card' option

**C. Order Modifications**

- 'Edit Order' button on checkout page (navigates back to cart)
- Allow quantity changes, item removal, special instructions update
- Recalculate totals in real-time
\n**D. Accessibility & UX Enhancements**

- **Loading States**: Display skeleton screens or spinners during data fetching
- **Error Handling**: Clear error messages with suggestions (e.g., 'Payment failed. Please check your card details or try another method')
- **Form Validation**: Real-time validation with inline error messages
- **Keyboard Navigation**: All form fields and buttons accessible via keyboard
- **Mobile Optimization**: Touch-friendly buttons, optimized input fields (numeric keyboard for phone/card numbers)
- **Auto-Save**: Save form data in local storage to prevent data loss on accidental page close

**E. Security Measures**

- **SSL Encryption**: All payment data transmitted over HTTPS
- **PCI Compliance**: Payment gateway handles sensitive card data (no card details stored on app servers)
- **Tokenization**: Use payment tokens instead of raw card data
- **Fraud Detection**: Integrate with payment gateway's fraud detection tools
- **Session Timeout**: Expire checkout session after 15 minutes of inactivity

---

####3.2.5 Real-Time Order Tracking
\n**Overview**:\nCustomers can track their orders in real-time with automatic status updates and estimated time.\n
**Key Features**:\n\n**A. Order Tracking Page**

- **Order Details Card**:
  - Order ID, restaurant name, table number\n  - Order items list with quantities
  - Order total\n\n- **Order Timeline**:
  - Visual timeline showing order progress:\n    - Order Placed ✓
    - Order Accepted ✓
    - Preparing (current step, animated)\n    - Ready for Pickup/Serving\n    - Completed\n  - Each step shows timestamp\n  - Current step highlighted with pulsing animation

- **Estimated Time**:
  - Display estimated time remaining (e.g., 'Ready in 15 mins')
  - Updates in real-time as order progresses\n\n- **Real-Time Updates**:
  - WebSocket connection for instant status updates
  - No page refresh required
  - Push notification sent on status change

**B. Chat with Restaurant**

- 'Chat' button on order tracking page
- Opens chat interface to message restaurant\n- Real-time messaging for queries or special requests

---

#### 3.2.6 Order History & Reordering

**Overview**:
View past orders with detailed information and quick reorder functionality.

**Key Features**:

**A. Order History Page**

- **Order List**:
  - Display all past orders in reverse chronological order
  - Each order card shows:
    - Restaurant name and logo
    - Order ID and date
    - Order items summary (e.g., '2x Burger, 1x Fries')
    - Order total
    - Order status (Completed/Cancelled)
    - 'View Details' and 'Reorder' buttons\n
- **Search & Filter**:
  - Search by restaurant name or order ID
  - Filter by date range, restaurant, status
\n**B. Order Details Modal**

- Click'View Details' to open modal\n- Modal displays:
  - Complete order information (items, quantities, prices)
  - Order timeline
  - Payment details
  - E-bill download option (PDF)
  - 'Rate Order' button (if not rated yet)

**C. Reorder Functionality**

- Click 'Reorder' button\n- All items from previous order added to cart
- Customer can modify quantities or add/remove items
- Proceed to checkout\n
---

#### 3.2.7 Favorites & Saved Items

**Overview**:\nSave favorite menu items and restaurants for quick access.

**Key Features**:

**A. Favorites Page**

- **Tabs**: Favorite Items, Favorite Restaurants\n\n- **Favorite Items Tab**:
  - Grid of saved menu items
  - Each item card shows: Image, name, restaurant name, price,'Add to Cart' button
  - 'Remove from Favorites' icon
\n- **Favorite Restaurants Tab**:
  - Grid of saved restaurants
  - Each restaurant card shows: Logo, name, cuisine type, 'View Menu' button
  - 'Remove from Favorites' icon
\n**B. Add to Favorites**

- Heart icon on menu item cards and restaurant cards
- Click to add/remove from favorites
- Instant feedback with animation

---

#### 3.2.8 Loyalty & Rewards

**Overview**:
View loyalty points, redeem rewards, and participate in referral program.

**Key Features**:

**A. Loyalty Dashboard**

- **Points Balance Card**:
  - Display total loyalty points
  - Points earned this month
  - Points expiring soon (if applicable)
\n- **Rewards Catalog**:
  - Grid of available rewards
  - Each reward card shows: Reward name, points required, 'Redeem' button
  - Redeem button disabled if insufficient points

- **Points History**:
  - Table showing points earned/redeemed with timestamps
  - Filter by date range

**B. Referral Program**\n
- **Referral Code**:
  - Display unique referral code
  - 'Copy Code' button
  - 'Share' button (share via WhatsApp, SMS, email)

- **Referral Stats**:
  - Total referrals made
  - Rewards earned from referrals
\n- **How It Works**:
  - Explanation of referral program benefits
\n---

#### 3.2.9 Profile & Settings

**Overview**:
Manage customer profile information and app preferences.

**Key Features**:

**A. Profile Page**

- **Profile Information**:
  - Profile picture upload
  - Name, email, phone number (editable)
  - Date of birth (for birthday offers)
  - Address (for delivery orders)
\n- **Change Password**:
  - Form to update password
\n- **Delete Account**:
  - Option to permanently delete account (with confirmation)

**B. Settings Page**

- **Notification Preferences**:
  - Toggle switches for notification types:\n    - Order status updates
    - Promotional offers
    - Loyalty rewards
  - Notification channels: Push, Email, SMS

- **Language**:
  - Dropdown to select preferred language
\n- **Theme**:
  - Toggle: Dark Mode or Light Mode

- **Privacy Settings**:
  - Manage data sharing preferences

---

#### 3.2.10 Help & Support

**Overview**:
Access help resources and contact support.\n
**Key Features**:\n
**A. Help Center**

- **FAQs**:
  - Accordion list of frequently asked questions
  - Categories: Ordering, Payments, Account, Technical Issues
\n- **Contact Support**:
  - Form to submit support request (name, email, issue description)
  - 'Submit' button sends request to support team

- **Live Chat**:
  - 'Chat with Support' button
  - Opens real-time chat interface with support agent

**B. Feedback**

- **Rate Your Experience**:
  - Star rating (1-5)\n  - Feedback text area
  - 'Submit Feedback' button

---

### 3.3 Enhanced Waiter/Agent Features

#### 3.3.1 Waiter Dashboard

**Overview**:\nWaiter-facing dashboard displaying assigned orders, tables, and tasks with real-time updates.

**Key Features**:

**A. Dashboard Layout**

- **Top Metrics Cards**:
  1. Assigned Orders (count)
  2. Active Tables (count)
  3. Pending Tasks (count)
  4. Orders Completed Today\n\n- **Assigned Orders Section**:
  - List of orders assigned to waiter
  - Each order card shows: Order ID, table number, items, status,'View Details' button
  - Real-time updates when new order assigned or status changes

- **Active Tables Section**:
  - Grid of assigned tables
  - Each table card shows: Table number, customer count, order status, 'View Order' button
\n**B. Order Management**
\n- **View Order Details**:
  - Click on order card to view full details
  - Modal displays: Order items, customer info, special instructions, order timeline
\n- **Update Order Status**:
  - Buttons to update status: 'Mark as Preparing', 'Mark as Ready', 'Mark as Served'
  - Status update sent to owner and customer in real-time

**C. Communication**

- **Chat with Owner**:
  - 'Message Owner' button\n  - Real-time chat interface
\n- **Chat with Customer**:
  - 'Message Customer' button on order details
  - Real-time chat for queries or updates

**D. Notifications**
\n- Notification bell with badge count
- Notifications for: New order assigned, order status change request, customer message

---

#### 3.3.2 Waiter Profile & Attendance

**Overview**:\nWaiter can view profile, clock in/out, and view attendance history.

**Key Features**:

**A. Profile Page**

- Display profile information: Name, employee ID, role, contact\n- View performance metrics: Orders handled, average completion time, customer ratings
\n**B. Attendance**

- **Clock In/Out**:
  - 'Clock In' button at start of shift
  - 'Clock Out' button at end of shift
  - Display current shift duration

- **Attendance History**:
  - Calendar view showing attendance for current month
  - Total hours worked
\n**C. Leave Requests**

- 'Request Leave' button
- Form to submit leave request (leave type, dates, reason)
- View pending and approved leave requests

---

## 4. Complete User Flows

### 4.1 Restaurant Owner Flow

1. **Sign Up/Login** → Owner Dashboard\n2. **Setup Restaurant Profile** → Settings → Restaurant Profile → Enter details (including restaurant type: Veg/Non-Veg/Both) → Save
3. **Add Menu Items** → Menu Management → + Add Menu Item → Fill form → Save → **Menu item instantly synced to all customer dashboards viewing this restaurant**
4. **Edit Menu Item** → Menu Management → Select item → Edit → Save → **Changes instantly synced to all customer dashboards**
5. **Delete Menu Item** → Menu Management → Select item → Delete → Confirm → **Item removed from all customer dashboards in real-time**
6. **Add Category** → Menu Management → + Add Category → Fill form → Save → **New category instantly appears in customer menu navigation**
7. **Generate QR Codes** → QR Codes → + Generate QR Code → Configure → Download/Print → **New table instantly available in customer checkout dropdown**
8. **Edit Table** → QR Codes → Select table → Edit → Save → **Table info updated in customer checkout dropdown in real-time**
9. **Delete Table** → QR Codes → Select table → Delete → Confirm → **Table removed from customer checkout dropdown with warning if selected**
10. **Receive Order** → Real-time notification → View order details → Accept/Reject\n11. **Assign Waiter** → Order card → Assign Waiter → Select waiter → Confirm\n12. **Track Order** → Order updates automatically in real-time\n13. **Manage Staff** → Staff → + Add Staff → Fill form → Save\n14. **Create Promotion** → Marketing → + Create Campaign → Configure → Launch\n15. **View Analytics** → Analytics → View reports and charts\n16. **Configure Settings** → Settings → Update currency/timezone → Save → Changes applied system-wide automatically

### 4.2 Customer Flow (Complete Checkout Flow with Table Number Entry, Mobile-Only QR Scanning, and Real-Time Menu/Table Synchronization)

1. **Sign Up/Login** → Customer Home\n2. **Scan QR Code (Mobile-Only)** → **'Scan QR Code' button visible only on mobile devices** → Camera opens → Scan → Restaurant menu displayed with restaurant type badge in header → Table number auto-detected → **Menu items and categories sync in real-time if owner makes changes**
3. **Browse Menu** → View categories and items → Click item for details → **If owner adds new item, it appears instantly with animation** → **If owner edits item, changes reflect immediately** → **If owner deletes item, it fades out**
4. **Add to Cart** → Select portion/quantity → Add special instructions → Add to Cart\n5. **Review Cart** → Click cart icon → View cart items → Edit quantities or remove items → Click 'Proceed to Checkout'\n6. **Checkout Page** → Enter customer details (name, contact) → Select order type:\n   - **If Dine-In via QR scan**: Table number auto-filled and displayed
   - **If Dine-In via Browse Restaurants**: Select table number from dropdown (required) → **Dropdown syncs in real-time if owner adds/edits/deletes tables** → **If selected table is deleted, show warning and reset selection**
   - **If Takeaway**: No table number needed\n   - **If Delivery**: Enter delivery address\n   → Add special instructions → Apply promo code (optional) → Review order summary → Click 'Proceed to Payment'
7. **Payment Page** → Select payment method (Cash/Card/UPI/Wallet) → Enter payment details (if online payment) → Review order summary → Click 'Place Order & Pay'
8. **Payment Processing** → System processes payment → If successful: Order placed → If failed: Display error, allow retry
9. **Order Confirmation** → View success message → View order details (Order ID, table number, estimated time) → Download receipt → Click 'Track Your Order'
10. **Track Order** → Real-time order tracking page → View timeline and estimated time → Receive notifications on status updates
11. **Receive Order** → Order status updates to'Ready' → Notification received\n12. **Rate Order** → Order History → View Details → Rate Order → Submit feedback
13. **Browse Restaurants** → Sidebar → Browse Restaurants → Search/filter (including by restaurant type) → View previously scanned restaurants with restaurant type badges → Select restaurant → View menu → **Menu syncs in real-time if owner makes changes** → Add items to cart → Proceed to checkout → **Select table number from dropdown if choosing Dine-In** → **Dropdown syncs in real-time** → Complete order\n14. **Reorder** → Order History → Select order → Reorder → Modify if needed → Checkout
15. **View Loyalty Points** → Loyalty & Rewards → View points balance → Redeem rewards\n\n### 4.3 Waiter Flow\n
1. **Login** → Waiter Dashboard
2. **Clock In** → Attendance → Clock In
3. **View Assigned Orders** → Dashboard → Assigned Orders list
4. **View Order Details** → Click order card → View items and instructions\n5. **Update Order Status** → Mark as Preparing → Mark as Ready → Mark as Served
6. **Communicate** → Chat with customer or owner for queries
7. **Clock Out** → Attendance → Clock Out
\n---

## 5. Advanced Design System with Futuristic UI Specifications

### 5.1 Overall Aesthetic

- **Theme**: Dark-themed futuristic interface with neon accents
- **Color Scheme**: Deep charcoal grey or dark blue backgrounds with electric cyan, vibrant magenta, and electric blue accents
- **Visual Effects**: Glassmorphism (frosted glass cards with background blur), smooth gradients, multi-layered UI with floating elements, subtle shadows with neon glow,3D effects\n\n### 5.2 Typography

- **Headings**: Orbitron Bold or Exo 2 Bold (futuristic, bold fonts)
- **Body Text**: Poppins Regular or Inter Regular (clean, readable)\n- **Buttons & Labels**: Orbitron Medium (consistent with headings)
- **Font Colors**: White (#FFFFFF) or light grey (#E0E0E0) on dark backgrounds, neon colors for emphasis

### 5.3 Color Palette

- **Background**: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A)
- **Primary Accent**: Electric cyan (#00F0FF)\n- **Secondary Accent**: Vibrant magenta (#FF006E)
- **Tertiary Accent**: Electric blue (#3A86FF)
- **Success**: Neon green (#39FF14)
- **Warning**: Neon yellow (#FFFF00)
- **Error**: Neon red (#FF073A)
- **Text**: White (#FFFFFF) or light grey (#E0E0E0)
- **Restaurant Type Badges:**
  - **Veg Badge**: Bright green (#39FF14) background with white text and leaf icon
  - **Non-Veg Badge**: Bright red (#FF073A) background with white text and meat icon
  - **Both Badge**: Bright orange (#FF8C00) background with white text and dual icon (leaf + meat)

### 5.4 UI Components

- **Cards**: Glassmorphism effect with frosted glass background, semi-transparent (rgba(255, 255, 255, 0.1)), backdrop blur (10px), neon gradient borders (2px), rounded corners (12-16px border radius), subtle shadows with neon glow (box-shadow: 0 8px 32px rgba(0, 240, 255, 0.3))
- **Buttons**: Neon gradient backgrounds (linear-gradient from cyan to magenta), rounded corners (8px), bold text, hover effects (scale1.05, glow intensifies), active state (scale 0.95)
- **Inputs**: Dark background with neon border on focus, rounded corners, placeholder text in light grey\n- **Badges**: Small circular or pill-shaped elements with neon background, white text, used for counts and status indicators. **Restaurant type badges are pill-shaped with rounded corners (20px border radius), bold text, and icon on left side.**
- **Icons**: Line-style icons with neon colors, consistent size (24px default)\n\n### 5.5 Animations

- **Slide-in**: New order cards and menu items slide in from top with500ms bounce animation
- **Pulsing Glow**: Notification badges and active elements have pulsing glow effect (keyframes animation)
- **Shake**: Notification bell shakes when new notification arrives (500ms rotation keyframes)
- **Ripple Effect**: Button clicks trigger ripple effect from click point\n- **Smooth Transitions**: All state changes use300ms ease-in-out transitions
- **Loading Animations**: Neon spinners or skeleton screens with shimmer effect
- **Page Transitions**: Smooth fade or slide transitions without full page reload (client-side routing)
- **Real-Time Update Animations**: New menu items slide in, edited items highlight with pulsing glow, deleted items fade out, new tables appear with slide-in, deleted tables fade out

### 5.6 Responsive Design

- **Mobile-First Approach**: Design optimized for mobile devices first, then scaled up\n- **Breakpoints**: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- **Collapsible Sidebar**: Sidebar collapses to hamburger menu on mobile
- **Adaptive Grids**: Grid layouts adjust column count based on screen size (3columns desktop, 2 tablet, 1 mobile)
- **Touch-Friendly**: Buttons and interactive elements have minimum44px height for easy tapping
- **Optimized Images**: Responsive images with appropriate sizes for different devices

### 5.7 Accessibility

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and semantic HTML\n- **Color Contrast**: Sufficient contrast between text and background for readability
- **Focus Indicators**: Clear focus outlines on interactive elements
\n---

## 6. Technical Considerations

### 6.1 Technology Stack

- **Frontend**: React.js or Next.js for dynamic UI, Tailwind CSS for styling, Framer Motion for animations
- **Backend**: Node.js with Express.js or Django for API, WebSocket (Socket.io) for real-time communication
- **Database**: PostgreSQL or MongoDB for data storage (with restaurant_type field in restaurant schema: ENUM('Veg', 'Non-Veg', 'Both')), Redis for caching and session management
- **Authentication**: JWT tokens, OAuth 2.0 for Google login (using OSS Google login method), OTP via Twilio or Firebase\n- **Payment Gateway**: Stripe, Razorpay, or PayPal integration
- **Cloud Storage**: AWS S3 or Cloudinary for image uploads
- **Hosting**: AWS, Google Cloud, or Vercel for deployment
- **Device Detection**: User agent parsing or screen size detection for mobile-only QR scanning feature

### 6.2 Real-Time Features with WebSocket Implementation

- **WebSocket Connection**: Persistent connection for instant data updates (orders, notifications, chat, menu items, categories, tables)
- **Event-Driven Architecture**: Backend emits events on data changes, frontend listens and updates UI\n- **Optimistic UI Updates**: UI updates immediately on user action, syncs with backend in background
- **Real-Time Menu Synchronization**:
  - Backend emits events: `menu:item:created`, `menu:item:updated`, `menu:item:deleted`, `menu:category:created`, `menu:category:updated`, `menu:category:deleted`
  - Customer clients subscribed to restaurant receive events instantly
  - Frontend updates menu display without page refresh (add/edit/delete items and categories with animations)
- **Real-Time Table Synchronization**:
  - Backend emits events: `table:created`, `table:updated`, `table:deleted`
  - Customer clients on checkout page receive events instantly
  - Frontend updates table dropdown without page refresh (add/edit/delete tables with animations, show warnings if selected table deleted)
- **Event Payload Structure**:
  - `menu:item:created`: {restaurant_id, item_id, item_data: {name, category, price, image, description, availability, portions, etc.}}
  - `menu:item:updated`: {restaurant_id, item_id, updated_fields: {name, price, image, availability, etc.}}
  - `menu:item:deleted`: {restaurant_id, item_id}
  - `menu:category:created`: {restaurant_id, category_id, category_data: {name, image, display_order}}
  - `menu:category:updated`: {restaurant_id, category_id, updated_fields: {name, image}}
  - `menu:category:deleted`: {restaurant_id, category_id}
  - `table:created`: {restaurant_id, table_id, table_data: {table_number, qr_code_url, status}}
  - `table:updated`: {restaurant_id, table_id, updated_fields: {table_number, status}}
  - `table:deleted`: {restaurant_id, table_id}
\n### 6.3 Security\n
- **Data Encryption**: HTTPS for all communications, encrypted storage for sensitive data
- **Input Validation**: Server-side validation to prevent SQL injection, XSS attacks
- **Rate Limiting**: Prevent abuse with rate limiting on API endpoints
- **Secure Authentication**: Password hashing (bcrypt), secure token storage
\n### 6.4 Performance Optimization

- **Lazy Loading**: Load images and components on demand
- **Code Splitting**: Split JavaScript bundles for faster initial load
- **Caching**: Cache static assets and API responses
- **Database Indexing**: Optimize database queries with proper indexing (including index on restaurant_type field for fast filtering)
- **CDN**: Use CDN for static assets to reduce latency
- **WebSocket Connection Management**: Efficient connection pooling, automatic reconnection on disconnect, heartbeat mechanism to keep connections alive

### 6.5 Scalability

- **Microservices Architecture**: Separate services for orders, payments, notifications, menu management for independent scaling
- **Load Balancing**: Distribute traffic across multiple servers
- **Database Sharding**: Partition database for horizontal scaling
- **Auto-Scaling**: Automatically scale server resources based on traffic
- **WebSocket Scaling**: Use Redis pub/sub for broadcasting events across multiple WebSocket server instances

---

## 7. Future Enhancements

- **AI-Powered Recommendations**: Machine learning algorithms to suggest menu items based on customer preferences and order history
- **Voice Ordering**: Integration with voice assistants (Alexa, Google Assistant) for hands-free ordering
- **Augmented Reality Menu**: AR feature to visualize menu items in 3D before ordering
- **Multi-Language Support**: Automatic translation of menu and interface to multiple languages
- **Advanced Analytics**: Predictive analytics for sales forecasting, inventory demand prediction, customer behavior analysis
- **Integration with Delivery Platforms**: Sync orders with Uber Eats, DoorDash, Zomato, Swiggy\n- **Table Reservation System**: Allow customers to book tables in advance\n- **Kitchen Display System (KDS)**: Dedicated screen for kitchen staff to view and manage orders
- **Customer Feedback Analysis**: Sentiment analysis of reviews to identify areas for improvement
- **Gamification**: Reward customers with badges, achievements for frequent orders, reviews\n\n---

## 8. Design Style\n
**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan, vibrant magenta, electric blue), glassmorphism effects (frosted glass cards with background blur and semi-transparent backgrounds), smooth gradients, multi-layered UI with floating elements, subtle shadows, and 3D effects.\n
**Typography**: Orbitron Bold/Exo 2 Bold for headings, Poppins Regular/Inter Regular for body text, Orbitron Medium for buttons and interactive labels. Font colors: White or light grey on dark backgrounds, neon colors for emphasis.

**Color Palette**:
- Background: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A)
- Primary Accent: Electric cyan (#00F0FF)
- Secondary Accent: Vibrant magenta (#FF006E)
- Tertiary Accent: Electric blue (#3A86FF)
- Success: Neon green (#39FF14)
- Warning: Neon yellow (#FFFF00)
- Error: Neon red (#FF073A)
- Text: White (#FFFFFF) or light grey (#E0E0E0)
- Restaurant Type Badges:\n  - Veg Badge: Bright green (#39FF14) background with white text and leaf icon\n  - Non-Veg Badge: Bright red (#FF073A) background with white text and meat icon
  - Both Badge: Bright orange (#FF8C00) background with white text and dual icon\n
**UI Components**: Glassmorphism cards with frosted glass effect, neon gradient borders, rounded corners (12-16px border radius), subtle shadows with neon glow, futuristic buttons with neon gradients and hover effects (scale and glow), animated counters for real-time data updates, smooth transitions (300ms ease-in-out), interactive elements with neon borders and glow on hover/focus. Restaurant type badges are pill-shaped with rounded corners (20px border radius), bold text, and icon on left side.\n
**Animations**: Slide-in animations for new orders and menu items (500ms bounce), pulsing glow for notification badges and updated items, shake animation for notification bell (500ms rotation keyframes), ripple effect for button clicks, smooth page transitions without full reload (client-side routing), loading animations with neon spinners, skeleton screens for data loading, real-time update animations (new items slide in, edited items highlight, deleted items fade out).

**Responsive Design**: Mobile-first approach, collapsible sidebar on mobile (hamburger menu), adaptive grid layouts (3 columns on desktop, 2 on tablet, 1 on mobile), touch-friendly buttons and inputs (minimum 44px height), optimized for all screen sizes. **QR code scanning feature exclusively available on mobile devices with automatic device detection.**

---

**End of Requirements Document**