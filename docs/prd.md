# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Real-Time Data Integration)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced schema support (including half/full portion options), AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, and personalized restaurant dashboard for quick reordering - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface. **All data displayed across the platform is real-time and dynamically calculated from the live database, including revenue, sales analytics, order statistics, inventory levels, and performance metrics.**

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
  - **Post-Login Redirect**: Upon successful authentication, owners are immediately redirected to the **Owner Home Screen** (redesigned with Zomato-style layout)\n- **Password Management**:
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
  - **Post-Login Redirect**: Upon successful authentication, customers are redirected to the **Customer Homepage** (personalized interface with menu access, active orders, order history, loyalty points)\n- **Profile Verification**:
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
\n### 2.4 Role-Based Homepage/Dashboard Logic
\n**Conditional Rendering Based on User Role**:
\n- **Anonymous/Logged-Out User**:
  - **Interface**: Display standard **Public Homepage**
  - **Content**:
    - Hero section with restaurant branding and futuristic visuals
    - Menu highlights with appetizing food imagery
    - Promotional offers and special deals
    - Call-to-action buttons: 'Sign Up' and 'Log In'
    - Restaurant story and unique selling points
    - Customer testimonials and ratings
    - Footer with contact information and social media links
  - **Purpose**: Customer acquisition and brand awareness
\n- **Restaurant Owner (Logged-In)**:
  - **Interface**: Redirect to or display **Owner Home Screen** immediately after login (redesigned with Zomato-style layout)
  - **Home Screen Content** (NEW DESIGN WITH REAL-TIME DATA):
    - **Main Content Area** (center panel with scrollable content):
      - **Active Orders Section** (explorable, Zomato-style with real-time data):
        - Horizontal scrollable carousel or grid layout of active order cards
        - Each order card displays:
          - Order ID and timestamp (digital style with neon glow)
          - Table number with floor/section\n          - Customer name (real name from profile or'Guest')
          - Order status badge (color-coded with neon glow)
          - Order items summary (first 2 items +'X more')
          - **Total amount (real-time calculated from order items, bold with currency symbol in neon cyan)**
          - Quick action buttons: 'View Details', 'Update Status' (futuristic buttons with neon gradient)
        - Tap on order card to expand full details in modal or slide-out panel
        - Filter options: All Orders, New, Acknowledged, Preparing, Ready, Served, Payment Pending\n        - Sort options: Recent, Table Number, Amount\n        - **Real-time updates: New orders appear instantly with slide-in animation and neon orange highlight, order data fetched from live database**
      - **Restaurant Menu Section** (explorable, Zomato-style with real-time data):
        - Category tabs (horizontal scrollable with glassmorphism design)
        - Food item cards in grid layout (2-3 columns on desktop, 1-2 on mobile)
        - Each item card displays:
          - Item image (16:9 aspect ratio with rounded corners)
          - Item type indicator (Veg/Non-Veg icon with neon glow)
          - Item name (Orbitron font, white color)\n          - **Price (real-time from database, neon cyan with glow)**
          - **Rating (real-time average from customer reviews, neon yellow stars)**\n          - **Availability status (real-time from inventory, In Stock/Out of Stock badge)**
          - Quick action: 'Edit' icon (tap to edit item details)
        - Search bar at top (glassmorphism design with neon border on focus)
        - Filter options: Item Type, Category, Availability, Price Range
        - Add New Item button (floating action button with neon gradient)
        - Tap on item card to view full details and edit\n      - **Quick Stats Overview** (compact cards at top of main content area with real-time data):
        - **Today's Revenue (real-time calculated from completed orders, animated counter with neon cyan color)**:\n          - Database query: SUM(order_total) WHERE order_status = 'Completed' AND order_date = TODAY AND payment_status = 'Paid'\n          - Updates automatically when new orders are completed and paid
        - **Active Orders Count (real-time count from database, live count with pulsing badge)**:
          - Database query: COUNT(order_id) WHERE order_status IN ('New', 'Acknowledged', 'Preparing', 'Ready', 'Served') AND order_date = TODAY
          - Updates instantly when new orders arrive or status changes
        - **Table Occupancy Rate (real-time calculated from table status, circular progress indicator)**:
          - Database query: (COUNT(table_id WHERE status = 'Occupied') / COUNT(total_tables)) * 100
          - Updates when tables are assigned or cleared
        - **Popular Items Today (real-time top 3 items with sales count)**:
          - Database query: SELECT item_name, COUNT(order_item_id) as sales_count FROM order_items WHERE order_date = TODAY GROUP BY item_id ORDER BY sales_count DESC LIMIT 3
          - Updates as orders are placed throughout the day
    - **Sidebar Navigation Menu** (left sidebar with futuristic design, collapsible, persistent without refresh):
      - **Logo and Restaurant Name** at top
      - **Navigation Items** (vertical list with icons and labels, expanded with additional features):
        - **Home** (default active, icon: house with neon glow)
        - **Orders** (icon: receipt, **badge showing real-time active order count from database**)
          - Sub-menu: All Orders, Order History, Order Analytics\n        - **Menu Management** (icon: utensils)\n          - Sub-menu: View Menu, Add Item, Categories, Bulk Import
        - **Inventory** (icon: box)
          - Sub-menu: Stock Levels, Suppliers, Reorder Alerts, Inventory Reports
        - **Staff Management** (icon: users)
          - Sub-menu: All Staff, Add Staff, Roles & Permissions, Shift Schedules, Attendance, Performance
        - **Table Management** (icon: table)
          - Sub-menu: View Tables, QR Codes, Floor Plan, Table Status
        - **Customer Management** (icon: user-group)
          - Sub-menu: Customer Database, Loyalty Program, Customer Feedback, Reviews
        - **Reservations** (icon: calendar)\n          - Sub-menu: View Reservations, Add Reservation, Reservation Settings\n        - **Marketing & Promotions** (icon: megaphone)
          - Sub-menu: Campaigns, Offers & Discounts, Email/SMS Marketing, Social Media Integration
        - **Analytics & Reports** (icon: chart)\n          - Sub-menu: Sales Reports, Menu Performance, Customer Insights, Financial Reports, Export Data
        - **Payments** (icon: credit card)
          - Sub-menu: Payment History, COC Payments, Reconciliation, Payment Methods
        - **Reviews & Ratings** (icon: star)\n          - Sub-menu: Customer Reviews, Respond to Reviews, Rating Analytics\n        - **Settings** (icon: gear)
          - Sub-menu: Restaurant Profile, Operating Hours, Payment Settings, Notification Settings, Security Settings
        - **Help & Support** (icon: question-circle)
          - Sub-menu: Documentation, FAQs, Contact Support, Video Tutorials\n        - **Notifications** (icon: bell, **badge showing real-time unread count from database**)
        - **Logout** (icon: sign-out)\n      - Each navigation item with icon (24px) and label (Orbitron font)\n      - Active item highlighted with neon orange background and glow
      - Hover effect: neon border and glow\n      - **Sidebar Behavior**: Sidebar remains persistent and does not refresh on navigation clicks; content area updates dynamically using client-side routing (SPA architecture)
      - Collapse/expand button at bottom of sidebar (hamburger icon)
    - **Top Header Bar** (sticky, glassmorphism design):
      - Restaurant logo (left)\n      - Search bar (center, global search for orders, items, customers)
      - **Notification bell icon (right, with real-time unread count badge from database and real-time alerts)**
      - Profile avatar (right, dropdown menu with settings and logout)
      - Multi-restaurant selector (if owner has multiple restaurants, dropdown with animated transition)
  - **Navigation Flow**: Owners cannot access the public homepage while logged in; attempting to navigate to root URL redirects to Owner Home Screen
\n- **Customer (Logged-In)**:
  - **Interface**: Display customized **Customer Homepage**
  - **Homepage Content**:
    - **Personalized Greeting**: 'Welcome back, [Customer Name]!' with animated typewriter effect
    - **Quick Access Section**:
      - 'Browse Menu' button (primary CTA with glow effect)
      - 'Scan QR Code' button (secondary CTA with icon)
    - **Active Orders Section**:
      - **Display current active orders with real-time status updates from database**
      - Order cards showing: Restaurant name, order items summary, **total amount (real-time from database)**, status badge, **estimated time (real-time calculated)**
      - Tap to expand full order details and timeline
    - **Order History Section**:
      - **Recent orders displayed as cards (last 5 orders from database)**
      - 'Reorder' button for quick reordering
      - 'View All' link to full order history
    - **My Restaurants Section**:
      - Grid of saved restaurant cards (recently visited)
      - Quick access to favorite restaurants
      - 'View All' link to full My Restaurants dashboard
    - **Loyalty & Rewards Section**:
      - **Current points balance (real-time from database) with animated counter**
      - Progress bar towards next reward\n      - Available rewards display\n    - **Personalized Recommendations**:
      - AI-suggested restaurants based on dining history
      - Trending items from favorite restaurants
    - **Navigation Menu** (bottom tab bar or sidebar):
      - Home (active)
      - Menu (browse all restaurants)
      - Orders (active and history)
      - My Restaurants\n      - Profile\n      - Logout
  - **Navigation Flow**: Customers cannot access the Owner Dashboard; attempting to navigate to owner routes redirects to Customer Homepage

**Technical Implementation**:
- **Authentication System**: Robust JWT-based authentication with role identification (roles: 'owner', 'customer', 'staff', 'guest')
- **Front-End Conditional Rendering**:
  - React/Vue/Angular router guards check user role upon navigation
  - Conditional component rendering based on authenticated user's role
  - Immediate redirect after login based on role:\n    - Owner → `/owner/home` (redesigned home screen)\n    - Customer → `/customer/home`
    - Staff → `/staff/orders`
    - Guest → `/` (public homepage)
- **Route Protection**:
  - Owner routes (`/owner/*`) accessible only to users with 'owner' role
  - Customer routes (`/customer/*`) accessible only to users with 'customer' role
  - Unauthorized access attempts redirect to appropriate homepage
- **Session Management**:
  - User role stored in secure session/token
  - Role validation on every route change
  - Automatic logout and redirect to public homepage on session expiry
- **Sidebar Persistence**:
  - Sidebar implemented as persistent component that does not unmount on navigation
  - Client-side routing (SPA) ensures only main content area updates without full page refresh
  - Active navigation item updates dynamically based on current route
  - Sidebar state (expanded/collapsed) preserved in local storage
\n## 3. Enhanced Core Features

### 3.1 Advanced Restaurant Owner Features

#### 3.1.1 Owner Home Screen with Zomato-Style Layout and Real-Time Data Integration (REDESIGNED)

**Real-Time Data Architecture**:
\n- **Database Connection**:
  - Persistent WebSocket connection established on page load for real-time data streaming
  - Fallback to Server-Sent Events (SSE) or polling if WebSocket unavailable
  - Connection status indicator in UI (connected/disconnected with visual feedback)
\n- **Data Synchronization**:
  - All displayed data fetched from live database with automatic refresh
  - No hardcoded or mock data; all statistics, counts, and metrics calculated in real-time
  - Database queries optimized with indexing for fast retrieval
  - Caching layer (Redis) for frequently accessed data to reduce database load

- **Real-Time Updates**:
  - New orders trigger instant UI updates via WebSocket push notifications
  - Order status changes propagate immediately to all connected clients
  - Revenue and statistics recalculated automatically on order completion
  - Inventory levels update in real-time as orders are placed
  - Table occupancy updates when tables are assigned or cleared
\n**Futuristic UI Design Specifications**:
\n- **Overall Aesthetic**:
  - **Dark-Themed Base**: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A) background for main home screen
  - **Neon Accents**: Electric cyan (#00F0FF), vibrant magenta (#FF006E), electric blue (#3A86FF) for highlights, CTAs, and interactive elements
  - **Glassmorphism Effects**: Frosted glass cards with background blur (backdrop-filter: blur(10px)), semi-transparent backgrounds (rgba(255,255,255,0.1)), subtle borders with gradient overlays
  - **Gradients**: Smooth color transitions for hero sections, buttons, and cards
  - **Depth & Layering**: Multi-layered UI with floating elements, subtle shadows, and 3D effects
\n- **Typography**:
  - **Headings**: Orbitron Bold or Exo 2 Bold for main titles and section labels
  - **Body Text**: Poppins Regular or Inter Regular for readability
  - **Accent Text**: Orbitron Medium for buttons and interactive labels
  - **Font Sizes**: H1: 36px, H2: 28px, H3: 22px, Body: 16px, Small: 13px
  - **Font Colors**: White (#FFFFFF) or light grey (#E0E0E0) for text on dark backgrounds, neon colors for emphasis

**Redesigned Owner Home Screen Layout (Zomato-Style with Real-Time Data)**:
\n- **Left Sidebar Navigation** (collapsible, 240px width when expanded, 60px when collapsed, persistent without refresh):
  - **Logo and Restaurant Name** at top (centered when expanded, icon only when collapsed)
  - **Navigation Items** (vertical list with icons and labels, expanded with additional features):\n    - **Home** (icon: house, active by default with neon orange background and glow)
    - **Orders** (icon: receipt, **badge showing real-time active order count from database**)
      - Database query: COUNT(order_id) WHERE order_status IN ('New', 'Acknowledged', 'Preparing', 'Ready', 'Served') AND restaurant_id = CURRENT_RESTAURANT\n      - Badge updates instantly via WebSocket when new orders arrive or status changes
      - Sub-menu (expandable on hover or click):
        - All Orders\n        - Order History
        - Order Analytics
    - **Menu Management** (icon: utensils)
      - Sub-menu:\n        - View Menu
        - Add Item
        - Categories
        - Bulk Import\n    - **Inventory** (icon: box)
      - Sub-menu:
        - Stock Levels\n        - Suppliers
        - Reorder Alerts
        - Inventory Reports
    - **Staff Management** (icon: users)
      - Sub-menu:
        - All Staff
        - Add Staff
        - Roles & Permissions
        - Shift Schedules
        - Attendance
        - Performance
    - **Table Management** (icon: table)
      - Sub-menu:
        - View Tables
        - QR Codes
        - Floor Plan
        - Table Status
    - **Customer Management** (icon: user-group)
      - Sub-menu:
        - Customer Database
        - Loyalty Program
        - Customer Feedback\n        - Reviews
    - **Reservations** (icon: calendar)
      - Sub-menu:
        - View Reservations
        - Add Reservation
        - Reservation Settings\n    - **Marketing & Promotions** (icon: megaphone)
      - Sub-menu:\n        - Campaigns
        - Offers & Discounts\n        - Email/SMS Marketing\n        - Social Media Integration
    - **Analytics & Reports** (icon: chart)
      - Sub-menu:
        - Sales Reports
        - Menu Performance
        - Customer Insights
        - Financial Reports
        - Export Data
    - **Payments** (icon: credit card)
      - Sub-menu:
        - Payment History
        - COC Payments
        - Reconciliation
        - Payment Methods
    - **Reviews & Ratings** (icon: star)
      - Sub-menu:
        - Customer Reviews
        - Respond to Reviews
        - Rating Analytics
    - **Settings** (icon: gear)
      - Sub-menu:
        - Restaurant Profile
        - Operating Hours\n        - Payment Settings
        - Notification Settings
        - Security Settings
    - **Help & Support** (icon: question-circle)
      - Sub-menu:
        - Documentation
        - FAQs
        - Contact Support
        - Video Tutorials
    - **Notifications** (icon: bell, **badge showing real-time unread count from database**)
      - Database query: COUNT(notification_id) WHERE is_read = FALSE AND user_id = CURRENT_USER\n      - Badge updates instantly when new notifications arrive
    - **Logout** (icon: sign-out)
  - Each item: Icon (24px) + Label (Orbitron font, 14px, white color)\n  - Active item: Neon orange background (#FF6B35) with glow, white text
  - Hover effect: Neon border (2px solid cyan) and subtle glow
  - Sub-menu items: Indented with smaller font (13px), light grey color, hover effect with neon cyan underline
  - **Sidebar Behavior**: \n    - Sidebar remains mounted and visible during navigation
    - Clicking navigation items updates main content area dynamically without sidebar refresh
    - Active item and sub-menu states update based on current route
    - Smooth transitions for sub-menu expand/collapse (300ms ease-in-out)
  - Collapse/expand button at bottom (hamburger icon, tap to toggle)
  - When collapsed: Show icons only, labels hidden, width60px
  - Glassmorphism design with frosted glass effect and neon gradient border

- **Top Header Bar** (sticky, full width, 60px height, glassmorphism design):
  - **Left Section**:
    - Sidebar toggle button (hamburger icon, visible on mobile)
    - Restaurant logo (40px height)\n  - **Center Section**:
    - Global search bar (400px width on desktop, expandable on mobile)
    - Placeholder: 'Search orders, menu items, customers...'
    - Glassmorphism input with neon border on focus
    - Search icon (left) and clear icon (right)
  - **Right Section**:
    - Multi-restaurant selector (if owner has multiple restaurants):
      - Dropdown with restaurant names and logos
      - Current restaurant displayed with logo and name
      - Animated transition when switching restaurants
    - **Notification bell icon (28px, neon cyan on hover with glow)**:\n      - **Unread count badge (real-time from database, neon red circle, 20px diameter, pulsing glow)**
      - Database query: COUNT(notification_id) WHERE is_read = FALSE AND user_id = CURRENT_USER\n      - Shake animation on new notification\n      - Click to open notification dropdown panel
    - Profile avatar (40px diameter, circular with neon border):
      - Click to open dropdown menu: Profile, Settings, Logout
\n- **Main Content Area** (center panel, scrollable, full height minus header, updates dynamically without sidebar refresh):
  - **Quick Stats Overview** (top section, horizontal row of compact cards with real-time data):
    - 4 stat cards in row (responsive: 2x2 grid on mobile)\n    - Each card (glassmorphism design, 200px width, 100px height):
      - Icon (32px, neon glow) at left
      - Label (Orbitron font, 14px, light grey) at top-right
      - **Value (real-time from database, Orbitron Bold, 28px, neon cyan with glow) at bottom-right**
      - Animated counter effect on page load and when value updates
    - Cards:\n      - **Today's Revenue (real-time calculated)**:\n        - Database query: SELECT SUM(order_total) FROM orders WHERE order_status = 'Completed' AND payment_status = 'Paid' AND DATE(order_date) = CURDATE() AND restaurant_id = CURRENT_RESTAURANT
        - Updates automatically when orders are completed and payments received
        - Icon: dollar sign
        - Value format: Currency symbol + amount (e.g., $1,234.56)
      - **Active Orders (real-time count)**:
        - Database query: SELECT COUNT(order_id) FROM orders WHERE order_status IN ('New', 'Acknowledged', 'Preparing', 'Ready', 'Served') AND DATE(order_date) = CURDATE() AND restaurant_id = CURRENT_RESTAURANT
        - Updates instantly when new orders arrive or status changes\n        - Icon: receipt
        - Value: Live count with pulsing badge
      - **Table Occupancy (real-time percentage)**:
        - Database query: SELECT (COUNT(CASE WHEN status = 'Occupied' THEN 1 END) * 100.0 / COUNT(table_id)) as occupancy_rate FROM tables WHERE restaurant_id = CURRENT_RESTAURANT
        - Updates when tables are assigned or cleared
        - Icon: table
        - Value: Percentage with circular progress indicator
      - **Popular Item (real-time top item)**:
        - Database query: SELECT item_name, COUNT(order_item_id) as sales_count FROM order_items JOIN orders ON order_items.order_id = orders.order_id WHERE DATE(orders.order_date) = CURDATE() AND orders.restaurant_id = CURRENT_RESTAURANT GROUP BY item_id ORDER BY sales_count DESC LIMIT 1
        - Updates as orders are placed throughout the day
        - Icon: star
        - Value: Top item name with sales count
    - Spacing:16px gap between cards
\n  - **Active Orders Section** (below stats, explorable Zomato-style with real-time data):
    - **Section Header**:
      - Title: 'Active Orders' (Orbitron SemiBold, 24px, white color with neon glow)
      - Filter buttons (horizontal row, glassmorphism chips):
        - All, New, Acknowledged, Preparing, Ready, Served, Payment Pending
        - Active filter: Neon orange background with glow
        - Tap to filter orders
      - Sort dropdown (right-aligned): Recent, Table Number, Amount\n    - **Order Cards** (horizontal scrollable carousel or grid layout with real-time data):
      - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
      - **Data source**: Real-time query from orders table
      - Database query: SELECT orders.*, customers.name as customer_name, tables.table_number FROM orders LEFT JOIN customers ON orders.customer_id = customers.customer_id LEFT JOIN tables ON orders.table_id = tables.table_id WHERE orders.order_status IN ('New', 'Acknowledged', 'Preparing', 'Ready', 'Served', 'Payment Pending') AND orders.restaurant_id = CURRENT_RESTAURANT ORDER BY orders.created_at DESC\n      - Each order card (glassmorphism design, 320px width, 180px height):
        - **Card Header**:
          - **Order ID (real-time from database, Orbitron Bold, 16px, white color) at top-left**
          - **Timestamp (real-time from database, digital style, 12px, light grey) below order ID**
          - **Status badge (real-time from database, top-right, color-coded with neon glow)**:\n            - Orange: New Order
            - Blue: Acknowledged
            - Yellow: Preparing
            - Green: Ready
            - Purple: Served
            - Teal: Payment Pending
        - **Card Body**:
          - **Table number (real-time from database, Orbitron SemiBold, 18px, neon cyan) with icon**
          - **Customer name (real-time from database or'Guest', Poppins Regular, 14px, light grey)**
          - **Order items summary (real-time from database, first2 items + 'X more', 13px, light grey)**
          - **Total amount (real-time calculated from order items, Orbitron Bold, 20px, neon cyan with glow) at bottom-left**
            - Database query: SELECT SUM(item_price * quantity) FROM order_items WHERE order_id = CURRENT_ORDER_ID
        - **Card Footer**:
          - Quick action buttons (horizontal row):
            - 'View Details' (futuristic button, neon gradient, 80px width)\n            - 'Update Status' (futuristic button, glassmorphism, neon border, 100px width)
          - Buttons:32px height, rounded corners\n        - **Hover effect**: Scale(1.03) with glow intensifies\n        - **Tap to expand**: Full order details in modal or slide-out panel
      - **Real-time updates**:
        - **New orders appear instantly with slide-in animation from top and neon orange highlight border for 3 seconds**
        - WebSocket push notification triggers UI update when new order inserted into database
        - **Order status updates automatically with smooth transition animation**
        - WebSocket push notification triggers UI update when order status changed in database
        - Order cards reorder based on status change\n        - **Order total recalculates automatically if items are added/removed**
      - **Empty state** (if no active orders):
        - Illustration: Empty plate or checkmark icon with neon glow
        - Message: 'No active orders at the moment' (Orbitron font, white color)\n        - Subtext: 'New orders will appear here in real-time' (light grey)
    - **View All Orders Button** (at bottom of section):
      - Futuristic button with neon gradient\n      - Text: 'View All Orders'
      - Navigates to full Orders page
\n  - **Restaurant Menu Section** (below active orders, explorable Zomato-style with real-time data):
    - **Section Header**:
      - Title: 'Restaurant Menu' (Orbitron SemiBold, 24px, white color with neon glow)\n      - Category tabs (horizontal scrollable, glassmorphism design):
        - Each tab: Category name + icon (if available)
        - Active tab: Neon orange underline animation
        - Tap to filter items by category
      - Search bar (right-aligned, 200px width, glassmorphism design):
        - Placeholder: 'Search menu items...'
        - Neon border on focus
      - Filter button (icon: filter, opens filter panel)\n      - Add New Item button (floating action button, neon gradient, '+' icon)
    - **Menu Item Cards** (grid layout with real-time data):
      - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
      - **Data source**: Real-time query from menu_items table
      - Database query: SELECT menu_items.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.review_id) as review_count, inventory.stock_level FROM menu_items LEFT JOIN reviews ON menu_items.item_id = reviews.item_id LEFT JOIN inventory ON menu_items.item_id = inventory.item_id WHERE menu_items.restaurant_id = CURRENT_RESTAURANT GROUP BY menu_items.item_id\n      - Each item card (glassmorphism design, 280px width, 320px height):
        - **Item Image** (top, 16:9 aspect ratio, rounded top corners):
          - **High-quality food photo (real-time from database)**
          - Item type indicator (top-left overlay, 36px diameter, neon glow):
            - Veg: Neon green circle with leaf icon
            - Non-Veg: Neon red circle with chicken leg icon
            - Vegan: Neon green circle with 'VG' icon
          - **Availability badge (real-time from inventory, top-right overlay)**:
            - In Stock: Neon green badge (if stock_level > 0)
            - Out of Stock: Neon red badge with semi-transparent dark overlay on image (if stock_level = 0)\n        - **Card Body** (below image, 12px padding):
          - **Item name (real-time from database, Orbitron SemiBold, 18px, white color, truncated to 2 lines)**
          - **Rating (real-time average from customer reviews, neon yellow stars, 16px) with count (light grey, 12px)**
            - Database query: AVG(rating) and COUNT(review_id) from reviews table
          - **Price (real-time from database, Orbitron Bold, 20px, neon cyan with glow)**:\n            - Single price or price range (for quantity-based or half/full)\n          - Quick action: 'Edit' icon (top-right of card body,24px, neon cyan on hover)
        - **Hover effect**: Scale(1.05) with glow intensifies
        - **Tap to expand**: Full item details in modal for editing
      - **Empty state** (if no items in category):
        - Illustration: Empty plate icon with neon glow
        - Message: 'No items in this category' (Orbitron font, white color)
        - 'Add Item' button (futuristic button with neon gradient)
    - **View All Menu Button** (at bottom of section):\n      - Futuristic button with neon gradient
      - Text: 'View Full Menu'
      - Navigates to full Menu Management page

- **Real-Time Notification Bell with Advanced Futuristic Features** (in top header bar):
  - **Bell icon** positioned in top-right corner of header:\n    - Futuristic bell icon with neon outline (cyan or magenta)
    - Icon size: 28px
  - **Live notification badge**:
    - **Neon red circular badge (20px diameter) with real-time unread count from database**
    - Database query: COUNT(notification_id) WHERE is_read = FALSE AND user_id = CURRENT_USER\n    - Pulsing glow animation (box-shadow with red neon)\n  - **Shake animation**:
    - Bell shakes with bounce effect when new order arrives (500ms animation)
    - Triggered by WebSocket push notification
    - Rotation keyframes: rotate(-15deg) → rotate(15deg) → rotate(0deg)
  - **Sound notification**:
    - Futuristic beep or chime sound plays when new order received
    - Customizable in settings (enable/disable)\n  - **Visual ripple effect**:
    - Neon cyan ripple animation emanates from bell icon on new notification
    - Ripple expands with fade-out (1s duration)\n  - **Notification dropdown panel**:
    - Click bell icon to open dropdown panel (slide-down animation, 300ms)\n    - **Glassmorphism panel design**:
      - Semi-transparent background with frosted glass effect
      - Neon gradient border (cyan to magenta)
      - Width: 380px (desktop), 100% (mobile)
      - Max height: 520px with custom scrollbar
    - **Panel displays list of recent notifications (real-time from database, last 10)**:\n      - Database query: SELECT * FROM notifications WHERE user_id = CURRENT_USER ORDER BY created_at DESC LIMIT 10
      - Each notification card shows:
        - **Notification icon** (order icon, payment icon, etc.) with neon glow
        - **Notification title** (e.g., 'New Order Received') in bold white text
        - **Brief message** (e.g., 'Table 12 placed an order for $45.50') in light grey
        - **Timestamp** (e.g., '2 minutes ago', calculated from created_at) in small cyan text
        - **Unread indicator**: Neon blue dot (8px diameter) for unread notifications (is_read = FALSE)
      - **Hover effect**: Card background lightens with subtle glow
      - Click on notification to navigate to relevant order details and mark as read
    - **'Mark All as Read' button** at bottom of panel:\n      - Futuristic button with neon gradient background
      - Updates database: UPDATE notifications SET is_read = TRUE WHERE user_id = CURRENT_USER
      - Hover effect: glow intensifies
    - **'View All Notifications' link** to open full notification history page:\n      - Neon cyan text with underline animation on hover
  - **Notification types** (with color-coded icons):
    - New Order Received (neon orange icon)
    - Order Status Updated (neon blue icon)
    - Payment Completed (neon green icon)
    - Payment Pending (neon yellow icon)\n    - Customer Message (neon purple icon)
    - Low Stock Alert (neon red icon)
    - Staff Activity (neon grey icon)
  - **Auto-dismiss**: Notification badge count updates automatically when notifications are read
  - **Persistent notifications**: Notifications remain in panel until manually dismissed or marked as read
\n- **Performance Optimizations**:
  - CSS animations with GPU acceleration (transform, opacity) for smooth 60fps performance
  - Lottie animations loaded asynchronously\n  - Reduced motion mode for accessibility (respects prefers-reduced-motion)
  - Lazy loading for non-critical animations
  - Efficient rendering with React.memo or Vue computed properties
  - **Client-side routing** (React Router, Vue Router, or Angular Router) ensures sidebar persistence without full page reload
  - **Database query optimization**: Indexed columns for fast retrieval, query result caching with Redis
  - **WebSocket connection pooling**: Efficient connection management for multiple concurrent users
\n- **Responsive Design**:
  - Mobile: Sidebar collapses to hamburger menu, main content full width, stats in2x2 grid, order and menu cards in single column
  - Tablet: Sidebar collapsible, main content adjusts, stats in row, order and menu cards in 2columns
  - Desktop: Full sidebar visible, main content with optimal spacing, stats in row, order and menu cards in 3 columns

**Multi-Restaurant Support**:
- Manage unlimited restaurant locations from single account
- Switch between restaurants with dropdown selector in top header (animated transition with slide effect)
- **Consolidated analytics across all locations (real-time from database)**
- Location-specific settings and customization
\n**Restaurant Profile** (Enhanced with Additional Fields):
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
  - Number of tables
  - Floor plan upload (optional, PDF or image)
  - Private dining rooms (yes/no, if yes, specify count and capacity)
  - Outdoor seating availability (yes/no, if yes, specify capacity)
- **Amenities & Features** (multi-select):
  - Free WiFi
  - Parking (valet, self-parking, street parking)
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
\n#### 3.1.2 Advanced Menu Management System

(Content remains the same as originaldocument)\n
#### 3.1.3 Advanced Inventory Management

(Content remains the same as original document)\n
#### 3.1.4 Enhanced QR Code Management

(Content remains the same as original document)

#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards and Real-Time Auto-Refresh

(Content remains the same as original document, accessible from sidebar navigation, with all data real-time from database)

#### 3.1.6 Enhanced Payment Management for Restaurant Owners

(Content remains the same as original document, with all payment data real-time from database)\n
#### 3.1.7 Waiter/Agent Assignment System

(Content remains the same as original document)\n
#### 3.1.8 Real-Time Communication Hub

(Content remains the same as original document)\n
#### 3.1.9 Advanced Analytics & Reports with Real-Time Data

**Overview**:
Comprehensive analytics and reporting module accessible from sidebar navigation, providing restaurant owners with real-time insights into sales performance, menu analytics, customer behavior, and financial metrics. **All analytics are calculated in real-time from the live database with automatic updates.**

**Key Features**:
\n- **Sales Reports (Real-Time)**:
  - **Daily Sales Dashboard**:
    - Total revenue (real-time calculated from completed orders)
    - Database query: SELECT SUM(order_total) FROM orders WHERE order_status = 'Completed' AND payment_status = 'Paid' AND DATE(order_date) = CURDATE() AND restaurant_id = CURRENT_RESTAURANT
    - Number of orders (real-time count)\n    - Database query: SELECT COUNT(order_id) FROM orders WHERE DATE(order_date) = CURDATE() AND restaurant_id = CURRENT_RESTAURANT
    - Average order value (real-time calculated)\n    - Database query: SELECT AVG(order_total) FROM orders WHERE order_status = 'Completed' AND DATE(order_date) = CURDATE() AND restaurant_id = CURRENT_RESTAURANT
    - Peak hours analysis (real-time from order timestamps)
    - Database query: SELECT HOUR(created_at) as hour, COUNT(order_id) as order_count FROM orders WHERE DATE(order_date) = CURDATE() AND restaurant_id = CURRENT_RESTAURANT GROUP BY hour ORDER BY order_count DESC\n  - **Weekly/Monthly/Yearly Sales Trends**:
    - Revenue trend charts (line graphs with real-time data)
    - Order volume trends (bar charts with real-time data)
    - Comparison with previous periods (real-time calculated)
    - Growth rate analysis (real-time calculated)\n  - **Sales by Category**:
    - Revenue breakdown by menu category (real-time calculated)
    - Database query: SELECT categories.category_name, SUM(order_items.item_price * order_items.quantity) as category_revenue FROM order_items JOIN menu_items ON order_items.item_id = menu_items.item_id JOIN categories ON menu_items.category_id = categories.category_id JOIN orders ON order_items.order_id = orders.order_id WHERE orders.order_status = 'Completed' AND orders.restaurant_id = CURRENT_RESTAURANT GROUP BY categories.category_id\n    - Best-performing categories (real-time ranked)
    - Category-wise order count (real-time calculated)
\n- **Menu Performance (Real-Time)**:
  - **Top-Selling Items**:
    - Most ordered items (real-time ranked by order count)
    - Database query: SELECT menu_items.item_name, COUNT(order_items.order_item_id) as order_count, SUM(order_items.item_price * order_items.quantity) as total_revenue FROM order_items JOIN menu_items ON order_items.item_id = menu_items.item_id JOIN orders ON order_items.order_id = orders.order_id WHERE orders.restaurant_id = CURRENT_RESTAURANT GROUP BY menu_items.item_id ORDER BY order_count DESC LIMIT 10
    - Revenue contribution by item (real-time calculated)\n    - Order frequency trends (real-time from order history)
  - **Low-Performing Items**:
    - Least ordered items (real-time ranked)\n    - Items with low ratings (real-time from customer reviews)
    - Database query: SELECT menu_items.item_name, AVG(reviews.rating) as avg_rating FROM menu_items LEFT JOIN reviews ON menu_items.item_id = reviews.item_id WHERE menu_items.restaurant_id = CURRENT_RESTAURANT GROUP BY menu_items.item_id HAVING avg_rating < 3.0 ORDER BY avg_rating ASC\n    - Recommendations for menu optimization\n  - **Item Ratings & Reviews**:
    - Average rating per item (real-time from customer reviews)
    - Review count and sentiment analysis (real-time calculated)
    - Trending items based on recent reviews (real-time ranked)
\n- **Customer Insights (Real-Time)**:
  - **Customer Demographics**:
    - Total registered customers (real-time count)
    - Database query: SELECT COUNT(customer_id) FROM customers WHERE restaurant_id = CURRENT_RESTAURANT
    - New customers vs. returning customers (real-time calculated)
    - Customer acquisition trends (real-time from registration dates)
  - **Customer Behavior**:
    - Average order frequency (real-time calculated)
    - Database query: SELECT AVG(order_count) FROM (SELECT customer_id, COUNT(order_id) as order_count FROM orders WHERE restaurant_id = CURRENT_RESTAURANT GROUP BY customer_id) as customer_orders\n    - Average spend per customer (real-time calculated)\n    - Database query: SELECT AVG(total_spend) FROM (SELECT customer_id, SUM(order_total) as total_spend FROM orders WHERE order_status = 'Completed' AND restaurant_id = CURRENT_RESTAURANT GROUP BY customer_id) as customer_spending
    - Customer lifetime value (real-time calculated)\n  - **Loyalty Program Analytics**:
    - Total loyalty points issued (real-time from database)
    - Points redeemed (real-time from database)
    - Active loyalty members (real-time count)
    - Redemption rate (real-time calculated)\n\n- **Financial Reports (Real-Time)**:
  - **Revenue Breakdown**:
    - Total revenue (real-time calculated from completed orders)
    - Revenue by payment method (cash, card, digital wallet) (real-time calculated)
    - Database query: SELECT payment_method, SUM(order_total) as revenue FROM orders WHERE order_status = 'Completed' AND payment_status = 'Paid' AND restaurant_id = CURRENT_RESTAURANT GROUP BY payment_method\n    - Revenue by order type (dine-in, takeout, delivery) (real-time calculated)
  - **Expense Tracking** (if integrated):
    - Ingredient costs (real-time from inventory)
    - Staff salaries (real-time from payroll)
    - Operational expenses (real-time from expense records)
  - **Profit Margin Analysis**:
    - Gross profit (real-time calculated: revenue - cost of goods sold)
    - Net profit (real-time calculated: gross profit - operational expenses)
    - Profit margin percentage (real-time calculated)
  - **Tax Reports**:
    - Tax collected (real-time calculated from orders)
    - Tax breakdown by category (real-time calculated)
    - Export tax reports for filing

- **Export Data**:
  - Export reports to CSV, Excel, or PDF\n  - Scheduled report generation (daily, weekly, monthly)
  - Email reports to stakeholders
\n#### 3.1.10 Staff Management System (NEW FEATURE)

(Content remains the same as original document)\n
#### 3.1.11 Customer Management System (NEW FEATURE)
\n(Content remains the same as original document, with all customer data real-time from database)

#### 3.1.12 Reservations Management System (NEW FEATURE)
\n(Content remains the same as original document, with all reservation data real-time from database)

#### 3.1.13 Marketing & Promotions System (NEW FEATURE)

(Content remains the same as original document)\n
#### 3.1.14 Reviews & Ratings Management (NEW FEATURE)

(Content remains the same as original document, with all review data real-time from database)

#### 3.1.15 Help & Support System (NEW FEATURE)\n
(Content remains the same as original document)

### 3.2 Enhanced Customer Features

(All customer features remain the same as original document, with all data real-time from database)

## 4. Complete User Flows

### 4.1 Restaurant Owner Complete Flow (Updated with Real-Time Data)

**Phase 1: Registration & Setup**
1. Visit DineQR website/app and click 'Register as Restaurant Owner'
2. Enter email and phone number
3. Receive OTP on both email and phone, verify
4. Create strong password (12+ characters with complexity requirements)
5. Set up two-factor authentication (2FA) with authenticator app
6. Upload business license and tax ID for verification
7. Complete profile setup: name, role, profile photo\n8. Account approved after verification (24-48 hours)
9. **Upon first login, automatically redirected to Owner Home Screen** (redesigned with Zomato-style layout)
\n**Phase 2: Restaurant Profile Creation**
1. Click 'Settings' from sidebar navigation
2. Navigate to 'Restaurant Profile' section\n3. Enter restaurant details (name, tagline, logo, banner images, restaurant type, images gallery, contact, location, operating hours, classification, capacity, amenities, description, certifications, additional information)
4. Preview restaurant profile\n5. Publish restaurant\n\n**Phase 3: Menu Creation**
1. Navigate to 'Menu Management' from sidebar navigation
2. Create food categories (name, description, category type, icon, display order, time-based availability)
3. Add food items (name, description, item type, images, pricing including half/full plate options, preparation time, dietary indicators, allergen information, nutritional information, ingredients, customization options, availability status, badges, tags, pairing suggestions)\n4. Bulk import items via CSV (optional)
5. Preview menu in customer view
6. Publish menu\n
**Phase 4: Inventory Setup**
1. Navigate to 'Inventory' from sidebar navigation
2. Create ingredient master list\n3. Link ingredients to menu items with quantities (including separate quantities for half and full portions)
4. Set minimum stock levels and alerts
5. Add supplier information\n6. Log initial stock levels

**Phase 5: QR Code Generation**
1. Navigate to 'Table Management' from sidebar navigation
2. Enter number of tables
3. Customize QR code design with logo and colors
4. Generate QR codes for all tables (each QR code embeds unique table number and restaurant ID)
5. Download QR codes in print-ready PDF format
6. Print and place QR codes on tables with table numbers\n
**Phase 6: Staff Management**
1. Navigate to 'Staff Management' from sidebar navigation
2. Add staff members (name, email, phone, employee ID, role, shift schedule)\n3. Send invitation email for account setup
4. Staff members complete registration and login
\n**Phase 7: Daily Operations with Real-Time Data and Notifications (ENHANCED)**
1. Login to Owner Home Screen (automatically redirected upon login)
2. **Dashboard automatically connects via WebSocket** for real-time updates
3. **View Quick Stats Overview** on home screen:\n   - **Today's Revenue**: Real-time calculated from completed and paid orders in database
   - **Active Orders Count**: Real-time count from database, updates instantly when new orders arrive
   - **Table Occupancy Rate**: Real-time calculated from table status in database
   - **Popular Item Today**: Real-time top-selling item from database, updates as orders are placed
4. **View Active Orders Section** on home screen:
   - Monitor real-time order board with futuristic design
   - **All order data fetched from live database**: Order ID, timestamp, table number, customer name, order items, total amount, status\n   - **When new order arrives**:
     - **Order inserted into database by customer**
     - **WebSocket push notification sent to owner's dashboard**
     - **Order appears instantly on home screen without manual refresh**
     - **Visual notification**: New order card slides in from top with bounce animation, neon orange highlight border for3 seconds
     - **Audio notification**: Futuristic notification sound plays (if enabled in settings)
     - **Notification bell alert**: Bell icon shakes, red badge count increments (real-time from database), notification added to dropdown panel
     - **Desktop notification**: System notification appears (if browser permissions granted)
     - **Mobile push notification**: Push notification sent to owner's device (if app installed)
   - System validates restaurant ID from QR scan
   - View customer's real name (or'Guest' if not logged in)\n   - Click on order card to expand full details in modal or slide-out panel
   - View complete order information (including item types, portion sizes - half/full, ratings)\n   - View timeline and payment status
   - Acknowledge order\n   - System auto-assigns waiter based on table location
   - Waiter receives notification and confirms\n   - Kitchen receives order and starts preparation
   - Update order status: Preparing → Ready → Served
   - **Timeline automatically updates with timestamps for each stage in database**
   - **Customer app automatically receives real-time timeline updates via WebSocket without manual refresh**
   - **Revenue and statistics automatically recalculate when order is completed and paid**
5. **Explore Restaurant Menu Section** on home screen:
   - Browse menu items by category\n   - **All menu data fetched from live database**: Item name, image, price, rating, availability\n   - Search for specific items
   - View item details (image, name, price, rating, availability)
   - Quick edit items by tapping 'Edit' icon
   - Add new items by tapping floating '+' button
6. **Navigate to other sections from sidebar** (sidebar remains persistent without refresh):
   - Orders: Full order management dashboard with real-time data
   - Menu Management: Comprehensive menu editing with real-time data
   - Inventory: Stock management and supplier tracking with real-time data
   - Staff Management: Employee profiles, schedules, attendance, performance with real-time data
   - Table Management: Table status, QR codes, floor plan with real-time data
   - Customer Management: Customer database, loyalty program, feedback, reviews with real-time data
   - Reservations: View and manage table reservations with real-time data\n   - Marketing & Promotions: Campaigns, offers, email/SMS marketing, social media\n   - Analytics & Reports: Sales reports, menu performance, customer insights, financial reports with real-time data
   - Payments: Payment history, COC payments, reconciliation with real-time data
   - Reviews & Ratings: Customer reviews, respond to feedback, rating analytics with real-time data
   - Settings: Restaurant profile, operating hours, payment settings, notification settings, security settings
   - Help & Support: Documentation, FAQs, contact support, video tutorials
7. Monitor customer chats (accessible from sidebar or order details)
8. **Handle COC Payments** (navigate to 'Payments' from sidebar or from order details, payment data real-time from database)
9. **Print E-Bills** (from order details, bill data real-time from database)
10. Manage inventory (navigate to 'Inventory' from sidebar, inventory data real-time from database)\n11. Review daily analytics and reports (navigate to 'Analytics & Reports' from sidebar, all analytics real-time from database)
\n**Phase 8: Ongoing Management**
1. Update menu based on inventory and customer feedback (via'Menu Management' in sidebar)
2. Analyze sales trends and adjust pricing (via 'Analytics & Reports' in sidebar, all data real-time from database)
3. Monitor item ratings and reviews (real-time from database)
4. Respond to customer reviews\n5. Manage staff schedules and performance (via 'Staff Management' in sidebar, all data real-time from database)\n6. Run promotional campaigns (via 'Marketing & Promotions' in sidebar)\n7. Export financial reports for accounting (via 'Analytics & Reports' in sidebar, all data real-time from database)
\n### 4.2 Customer Complete Flow\n
(Content remains the same as original document, with all data real-time from database)
\n### 4.3 Waiter/Agent Complete Flow\n
(Content remains the same as original document, with all data real-time from database)

## 5. Advanced Design System with Futuristic UI Specifications

(All design system specifications remain the same as original document, with additional components for Owner Home Screen)

### 5.4 Component Design (Updated for Owner Home Screen)

**Owner Home Screen Components**:\n\n- **Sidebar Navigation** (Futuristic Design, Persistent without Refresh):
  - **Width**: 240px (expanded), 60px (collapsed)
  - **Background**: Glassmorphism design with frosted glass effect (backdrop-filter: blur(10px), background: rgba(26,26,26,0.9))
  - **Border**: 2px solid with neon gradient (right edge)\n  - **Logo Section** (top,80px height):
    - Restaurant logo (40px height) centered when expanded, icon only when collapsed
    - Restaurant name (Orbitron SemiBold, 16px, white color) below logo when expanded
  - **Navigation Items** (vertical list, 48px height each):
    - Icon (24px, left-aligned,16px padding from left)
    - Label (Orbitron Regular, 14px, white color, left-aligned, 12px padding from icon)
    - Active item: Neon orange background (#FF6B35) with glow, white text\n    - Hover effect: Neon cyan border (2px solid) on left edge, subtle glow\n    - **Badge (for Orders and Notifications): Neon red circle (18px diameter) with real-time count from database, positioned top-right of item**
    - Sub-menu items (if applicable): Indented with smaller font (13px), light grey color, hover effect with neon cyan underline
  - **Sidebar Behavior**:
    - Sidebar remains mounted and visible during navigation
    - Clicking navigation items updates main content area dynamically without sidebar refresh
    - Active item and sub-menu states update based on current route
    - Smooth transitions for sub-menu expand/collapse (300ms ease-in-out)
    - Client-side routing ensures no full page reload
  - **Collapse/Expand Button** (bottom, 48px height):
    - Hamburger icon (24px) centered\n    - Tap to toggle sidebar width
    - Smooth transition animation (300ms ease-in-out)\n\n- **Top Header Bar** (Futuristic Design):
  - **Height**: 60px\n  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with neon gradient (bottom edge)
  - **Left Section**:
    - Sidebar toggle button (visible on mobile, hamburger icon,24px)
    - Restaurant logo (40px height,16px padding from left)
  - **Center Section**:
    - Search bar (400px width on desktop, expandable on mobile):
      - Glassmorphism input with neon border on focus
      - Height: 40px, border radius: 20px
      - Placeholder:'Search orders, menu items, customers...'
      - Search icon (left, 20px) and clear icon (right, 20px)\n  - **Right Section**:
    - Multi-restaurant selector (if applicable):
      - Dropdown button (120px width, glassmorphism design)
      - Current restaurant logo (24px) + name (truncated)\n      - Dropdown arrow icon (16px)
      - Click to open dropdown menu with restaurant list
    - **Notification bell icon (28px, neon cyan on hover with glow)**:\n      - **Unread count badge (real-time from database, neon red circle, 20px diameter, pulsing glow)**
      - Click to open notification dropdown panel
    - Profile avatar (40px diameter, circular with neon border):
      - Click to open dropdown menu: Profile, Settings, Logout
\n- **Quick Stats Cards** (Futuristic Design with Real-Time Data):
  - **Card Size**: 200px width x 100px height (desktop), full width on mobile
  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with neon gradient\n  - **Border Radius**: 12px
  - **Shadow**: 04px 12px rgba(0,0,0,0.3) with subtle neon glow
  - **Layout**:
    - Icon (32px, neon glow) at left,16px padding from left edge
    - Label (Orbitron Regular, 14px, light grey) at top-right, 16px padding from top\n    - **Value (real-time from database, Orbitron Bold, 28px, neon cyan with glow) at bottom-right, 16px padding from bottom**\n  - **Animation**: Animated counter effect on page load and when value updates (2s ease-out from current to new value)
  - **Hover effect**: Scale(1.03) with glow intensifies\n  - **Real-time updates**: Values update automatically via WebSocket when database changes

- **Active Order Cards** (Futuristic Design with Real-Time Data):
  - **Card Size**: 320px width x 180px height\n  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with color-coded neon gradient based on status
  - **Border Radius**: 16px
  - **Shadow**: 0 4px 12px rgba(0,0,0,0.3) with subtle neon glow\n  - **Layout**:
    - Header (top, 40px height):
      - **Order ID (real-time from database, Orbitron Bold, 16px, white color) at left**
      - **Timestamp (real-time from database, digital style, 12px, light grey) below order ID**
      - **Status badge (real-time from database, top-right, color-coded with neon glow)**
    - Body (middle, 80px height):
      - **Table number (real-time from database, Orbitron SemiBold, 18px, neon cyan) with icon**
      - **Customer name (real-time from database or 'Guest', Poppins Regular, 14px, light grey)**
      - **Order items summary (real-time from database, 13px, light grey, truncated to 2 lines)**
      - **Total amount (real-time calculated from database, Orbitron Bold, 20px, neon cyan with glow) at bottom-left**
    - Footer (bottom, 40px height):
      - Quick action buttons:'View Details' and 'Update Status'
      - Buttons: 32px height, rounded corners, futuristic design
  - **Hover effect**: Scale(1.03) with glow intensifies
  - **Tap to expand**: Full order details in modal or slide-out panel
  - **Real-time update animation**: Slide-in from top with bounce (500ms) and neon orange highlight border for 3 seconds when new order arrives
  - **Real-time data updates**: Order status, items, and total update automatically via WebSocket

- **Menu Item Cards** (Futuristic Design with Real-Time Data):
  - **Card Size**: 280px width x 320px height
  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with neon gradient
  - **Border Radius**: 16px\n  - **Shadow**: 0 4px 12px rgba(0,0,0,0.3) with subtle neon glow
  - **Layout**:\n    - Image (top, 16:9 aspect ratio, rounded top corners):
      - **High-quality food photo (real-time from database)**
      - Item type indicator (top-left overlay, 36px diameter, neon glow)
      - **Availability badge (real-time from inventory database, top-right overlay)**
    - Body (below image, 12px padding):
      - **Item name (real-time from database, Orbitron SemiBold, 18px, white color, truncated to 2 lines)**
      - **Rating (real-time average from customer reviews in database, neon yellow stars, 16px) with count (light grey, 12px)**
      - **Price (real-time from database, Orbitron Bold, 20px, neon cyan with glow)**
      - Quick action: 'Edit' icon (top-right of card body, 24px, neon cyan on hover)
  - **Hover effect**: Scale(1.05) with glow intensifies
  - **Tap to expand**: Full item details in modal for editing
  - **Real-time data updates**: Price, rating, and availability update automatically via WebSocket

(All other component designs remain the same as original document)

## 6. Technical Considerations

### 6.1 Real-Time Database Architecture

**Database Technology**:
- **Primary Database**: PostgreSQL or MySQL for relational data (orders, menu items, customers, inventory, etc.)
- **Caching Layer**: Redis for frequently accessed data and session management
- **Real-Time Sync**: WebSocket server (Socket.IO or native WebSocket) for push notifications
- **Database Indexing**: Optimized indexes on frequently queried columns (order_date, restaurant_id, customer_id, item_id, etc.)

**Real-Time Data Flow**:
1. **Customer places order** → Order inserted into database with timestamp
2. **Database trigger or application logic** → Sends WebSocket event to owner's dashboard
3. **Owner's dashboard receives event** → UI updates instantly without page refresh
4. **Owner updates order status** → Status updated in database
5. **Database trigger or application logic** → Sends WebSocket event to customer's app
6. **Customer's app receives event** → Order timeline updates automatically

**WebSocket Implementation**:
- **Server-Side**: Node.js with Socket.IO or Python with WebSocket library
- **Client-Side**: Socket.IO client library or native WebSocket API
- **Connection Management**: Automatic reconnection on disconnect, heartbeat mechanism to detect connection status
- **Room-Based Broadcasting**: Separate rooms for each restaurant to ensure notifications are sent only to relevant users
- **Authentication**: JWT-based authentication for WebSocket connections

**Database Query Optimization**:
- **Prepared Statements**: Use parameterized queries to prevent SQL injection and improve performance
- **Query Caching**: Cache frequently executed queries in Redis with TTL (Time To Live)
- **Connection Pooling**: Maintain pool of database connections to reduce connection overhead
- **Batch Operations**: Use batch inserts/updates for bulk operations (e.g., inventory updates)
- **Asynchronous Queries**: Execute non-critical queries asynchronously to avoid blocking main thread

**Data Consistency**:
- **ACID Transactions**: Ensure atomicity, consistency, isolation, and durability for critical operations (order placement, payment processing)
- **Optimistic Locking**: Prevent race conditions when multiple users update same data simultaneously
- **Event Sourcing**: Log all state changes for audit trail and data recovery
\n### 6.2 Performance Optimization

**Front-End Optimization**:
- **Code Splitting**: Load only necessary JavaScript bundles for current page
- **Lazy Loading**: Load images and components on-demand\n- **Memoization**: Cache computed values to avoid redundant calculations (React.memo, useMemo, Vue computed)\n- **Virtual Scrolling**: Render only visible items in long lists (order history, menu items)
- **Debouncing/Throttling**: Limit frequency of expensive operations (search, scroll events)
\n**Back-End Optimization**:
- **API Response Caching**: Cache API responses in Redis with appropriate TTL
- **Database Query Optimization**: Use indexes, avoid N+1 queries, use joins efficiently
- **Load Balancing**: Distribute traffic across multiple servers for high availability
- **CDN for Static Assets**: Serve images, CSS, and JavaScript from CDN for faster delivery
- **Compression**: Enable Gzip or Brotli compression for API responses

**Real-Time Update Optimization**:
- **Selective Updates**: Send only changed data via WebSocket instead of full objects
- **Batch Updates**: Group multiple updates into single WebSocket message
- **Client-Side Filtering**: Filter notifications on client-side to reduce server load
- **Rate Limiting**: Limit frequency of WebSocket messages to prevent flooding
\n### 6.3 Security Considerations

**Authentication & Authorization**:
- **JWT Tokens**: Secure token-based authentication with expiration and refresh tokens
- **Role-Based Access Control (RBAC)**: Enforce permissions based on user roles
- **Two-Factor Authentication (2FA)**: Mandatory for restaurant owners\n- **Session Management**: Secure session storage with HttpOnly cookies
\n**Data Protection**:
- **Encryption**: Encrypt sensitive data at rest (passwords, payment info) and in transit (HTTPS/TLS)
- **Input Validation**: Sanitize all user inputs to prevent XSS and SQL injection
- **CSRF Protection**: Use CSRF tokens for state-changing operations
- **Rate Limiting**: Prevent brute-force attacks and API abuse

**WebSocket Security**:
- **Authentication**: Verify JWT token before establishing WebSocket connection
- **Authorization**: Ensure users can only receive notifications for their own restaurant/orders
- **Message Validation**: Validate all incoming WebSocket messages
- **Connection Limits**: Limit number of concurrent connections per user

### 6.4 Scalability Considerations

**Horizontal Scaling**:
- **Stateless Architecture**: Design application to be stateless for easy horizontal scaling
- **Load Balancer**: Distribute traffic across multiple application servers
- **Database Replication**: Use master-slave replication for read-heavy workloads
- **Microservices**: Split application into independent services (order service, payment service, notification service)

**Vertical Scaling**:
- **Database Optimization**: Upgrade database server resources (CPU, RAM, SSD)
- **Caching**: Implement multi-level caching (application cache, database cache, CDN)
- **Connection Pooling**: Optimize database connection pool size
\n**WebSocket Scaling**:
- **Redis Pub/Sub**: Use Redis for broadcasting WebSocket messages across multiple servers
- **Sticky Sessions**: Ensure WebSocket connections remain on same server
- **WebSocket Gateway**: Use dedicated WebSocket gateway for managing connections

### 6.5 Monitoring & Logging\n
**Application Monitoring**:
- **Performance Metrics**: Track response times, throughput, error rates
- **Real-Time Dashboards**: Monitor active users, orders, revenue in real-time
- **Alerting**: Set up alerts for critical issues (server down, high error rate, database slow)
\n**Database Monitoring**:
- **Query Performance**: Track slow queries and optimize\n- **Connection Pool**: Monitor connection pool usage and adjust size
- **Replication Lag**: Monitor lag between master and slave databases

**WebSocket Monitoring**:
- **Connection Count**: Track number of active WebSocket connections
- **Message Throughput**: Monitor number of messages sent/received per second
- **Connection Errors**: Track failed connections and reconnection attempts

**Logging**:
- **Structured Logging**: Use JSON format for logs with consistent fields
- **Log Levels**: Use appropriate log levels (DEBUG, INFO, WARN, ERROR)
- **Centralized Logging**: Aggregate logs from all servers in centralized system (ELK stack, Splunk)
- **Audit Logs**: Log all critical operations (order placement, payment, status changes)

### 6.6 Backup & Disaster Recovery

**Database Backup**:
- **Automated Backups**: Daily full backups and hourly incremental backups
- **Backup Retention**: Retain backups for 30 days\n- **Backup Testing**: Regularly test backup restoration process
- **Offsite Storage**: Store backups in geographically separate location

**Disaster Recovery Plan**:
- **Recovery Time Objective (RTO)**: Target 1 hour for critical systems
- **Recovery Point Objective (RPO)**: Target 15 minutes data loss maximum
- **Failover Strategy**: Automated failover to backup servers
- **Documentation**: Maintain detailed disaster recovery procedures

(All other technical considerations remain the same as original document)

## 7. Future Enhancements

(Content remains the same as original document)
\n## 8. Design Style\n
(Content remains the same as original document)\n
---

**End of Requirements Document**