# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Owner Home Screen Redesign)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced schema support (including half/full portion options), AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, and personalized restaurant dashboard for quick reordering - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface.\n
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
  - **Post-Login Redirect**: Upon successful authentication, owners are immediately redirected to the **Owner Home Screen** (redesigned with Zomato-style layout)
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

- **Restaurant Owner (Logged-In)**:
  - **Interface**: Redirect to or display **Owner Home Screen** immediately after login (redesigned with Zomato-style layout)
  - **Home Screen Content** (NEW DESIGN):
    - **Main Content Area** (center panel with scrollable content):
      - **Active Orders Section** (explorable, Zomato-style):
        - Horizontal scrollable carousel or grid layout of active order cards
        - Each order card displays:\n          - Order ID and timestamp (digital style with neon glow)
          - Table number with floor/section\n          - Customer name (real name from profile or'Guest')
          - Order status badge (color-coded with neon glow)
          - Order items summary (first 2 items +'X more')
          - Total amount (bold with currency symbol in neon cyan)
          - Quick action buttons: 'View Details', 'Update Status' (futuristic buttons with neon gradient)
        - Tap on order card to expand full details in modal or slide-out panel
        - Filter options: All Orders, New, Acknowledged, Preparing, Ready, Served, Payment Pending\n        - Sort options: Recent, Table Number, Amount\n        - Real-time updates: New orders appear instantly with slide-in animation and neon orange highlight
      - **Restaurant Menu Section** (explorable, Zomato-style):
        - Category tabs (horizontal scrollable with glassmorphism design)
        - Food item cards in grid layout (2-3 columns on desktop, 1-2 on mobile)
        - Each item card displays:
          - Item image (16:9 aspect ratio with rounded corners)
          - Item type indicator (Veg/Non-Veg icon with neon glow)
          - Item name (Orbitron font, white color)
          - Price (neon cyan with glow)
          - Rating (neon yellow stars)\n          - Availability status (In Stock/Out of Stock badge)
          - Quick action: 'Edit' icon (tap to edit item details)
        - Search bar at top (glassmorphism design with neon border on focus)
        - Filter options: Item Type, Category, Availability, Price Range
        - Add New Item button (floating action button with neon gradient)
        - Tap on item card to view full details and edit\n      - **Quick Stats Overview** (compact cards at top of main content area):
        - Today's Revenue (animated counter with neon cyan color)
        - Active Orders Count (live count with pulsing badge)
        - Table Occupancy Rate (circular progress indicator)
        - Popular Items Today (top 3 items with sales count)
    - **Sidebar Navigation Menu** (left sidebar with futuristic design, collapsible):
      - **Logo and Restaurant Name** at top
      - **Navigation Items** (vertical list with icons and labels):
        - Home (default active, icon with neon glow)
        - Orders (view all orders, order history, analytics)
        - Menu Management (add, edit, categorize items, manage half/full portions)
        - Inventory (stock levels, supplier management, reorder alerts)
        - Staff Management (add/remove staff, assign roles, view schedules)
        - Table Management (view and manage table statuses, QR code generation)
        - Analytics & Reports (sales trends, menu performance, customer insights)
        - Payments (payment history, COC payments, reconciliation)
        - Settings (restaurant profile, operating hours, payment methods)
        - Notifications (bell icon with unread count badge)
        - Logout\n      - Each navigation item with icon (24px) and label (Orbitron font)
      - Active item highlighted with neon orange background and glow
      - Hover effect: neon border and glow\n      - Collapse/expand button at bottom of sidebar (hamburger icon)
    - **Top Header Bar** (sticky, glassmorphism design):
      - Restaurant logo (left)\n      - Search bar (center, global search for orders, items, customers)
      - Notification bell icon (right, with unread count badge and real-time alerts)
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
      - Display current active orders with real-time status updates
      - Order cards showing: Restaurant name, order items summary, total amount, status badge, estimated time
      - Tap to expand full order details and timeline
    - **Order History Section**:
      - Recent orders displayed as cards (last 5 orders)
      -'Reorder' button for quick reordering
      - 'View All' link to full order history
    - **My Restaurants Section**:
      - Grid of saved restaurant cards (recently visited)
      - Quick access to favorite restaurants
      - 'View All' link to full My Restaurants dashboard
    - **Loyalty & Rewards Section**:
      - Current points balance with animated counter
      - Progress bar towards next reward\n      - Available rewards display\n    - **Personalized Recommendations**:
      - AI-suggested restaurants based on dining history
      - Trending items from favorite restaurants
    - **Navigation Menu** (bottom tab bar or sidebar):
      - Home (active)\n      - Menu (browse all restaurants)\n      - Orders (active and history)
      - My Restaurants\n      - Profile\n      - Logout
  - **Navigation Flow**: Customers cannot access the Owner Dashboard; attempting to navigate to owner routes redirects to Customer Homepage
\n**Technical Implementation**:
- **Authentication System**: Robust JWT-based authentication with role identification (roles: 'owner', 'customer', 'staff', 'guest')
- **Front-End Conditional Rendering**:
  - React/Vue/Angular router guards check user role upon navigation
  - Conditional component rendering based on authenticated user's role
  - Immediate redirect after login based on role:\n    - Owner → `/owner/home` (redesigned home screen)
    - Customer → `/customer/home`
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
\n## 3. Enhanced Core Features

### 3.1 Advanced Restaurant Owner Features

#### 3.1.1 Owner Home Screen with Zomato-Style Layout and Real-Time Notification System (REDESIGNED)

**Futuristic UI Design Specifications**:
\n- **Overall Aesthetic**:
  - **Dark-Themed Base**: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A) background for main home screen
  - **Neon Accents**: Electric cyan (#00F0FF), vibrant magenta (#FF006E), electric blue (#3A86FF) for highlights, CTAs, and interactive elements
  - **Glassmorphism Effects**: Frosted glass cards with background blur (backdrop-filter: blur(10px)), semi-transparent backgrounds (rgba(255,255,255,0.1)), subtle borders with gradient overlays
  - **Gradients**: Smooth color transitions for hero sections, buttons, and cards
  - **Depth & Layering**: Multi-layered UI with floating elements, subtle shadows, and 3D effects

- **Typography**:
  - **Headings**: Orbitron Bold or Exo 2 Bold for main titles and section labels
  - **Body Text**: Poppins Regular or Inter Regular for readability
  - **Accent Text**: Orbitron Medium for buttons and interactive labels
  - **Font Sizes**: H1: 36px, H2: 28px, H3: 22px, Body: 16px, Small: 13px
  - **Font Colors**: White (#FFFFFF) or light grey (#E0E0E0) for text on dark backgrounds, neon colors for emphasis

**Redesigned Owner Home Screen Layout (Zomato-Style)**:\n
- **Left Sidebar Navigation** (collapsible, 240px width when expanded, 60px when collapsed):
  - **Logo and Restaurant Name** at top (centered when expanded, icon only when collapsed)
  - **Navigation Items** (vertical list with icons and labels):
    - Home (icon: house, active by default with neon orange background and glow)
    - Orders (icon: receipt, badge showing active order count)
    - Menu Management (icon: utensils)\n    - Inventory (icon: box)
    - Staff Management (icon: users)
    - Table Management (icon: table)
    - Analytics & Reports (icon: chart)\n    - Payments (icon: credit card)
    - Settings (icon: gear)
    - Notifications (icon: bell, badge showing unread count)
    - Logout (icon: sign-out)
  - Each item: Icon (24px) + Label (Orbitron font, 14px, white color)
  - Active item: Neon orange background (#FF6B35) with glow, white text
  - Hover effect: Neon border (2px solid cyan) and subtle glow
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
    - Notification bell icon (28px, neon cyan on hover with glow):
      - Unread count badge (neon red circle, 20px diameter, pulsing glow)
      - Shake animation on new notification
      - Click to open notification dropdown panel
    - Profile avatar (40px diameter, circular with neon border):
      - Click to open dropdown menu: Profile, Settings, Logout
\n- **Main Content Area** (center panel, scrollable, full height minus header):
  - **Quick Stats Overview** (top section, horizontal row of compact cards):
    - 4 stat cards in row (responsive: 2x2 grid on mobile)\n    - Each card (glassmorphism design,200px width, 100px height):
      - Icon (32px, neon glow) at left
      - Label (Orbitron font, 14px, light grey) at top-right
      - Value (Orbitron Bold, 28px, neon cyan with glow) at bottom-right\n      - Animated counter effect on page load
    - Cards:\n      - Today's Revenue (icon: dollar sign, value with currency symbol)
      - Active Orders (icon: receipt, live count with pulsing badge)
      - Table Occupancy (icon: table, percentage with circular progress indicator)
      - Popular Item (icon: star, top item name with sales count)
    - Spacing: 16px gap between cards
\n  - **Active Orders Section** (below stats, explorable Zomato-style):
    - **Section Header**:
      - Title: 'Active Orders' (Orbitron SemiBold, 24px, white color with neon glow)
      - Filter buttons (horizontal row, glassmorphism chips):
        - All, New, Acknowledged, Preparing, Ready, Served, Payment Pending
        - Active filter: Neon orange background with glow
        - Tap to filter orders
      - Sort dropdown (right-aligned): Recent, Table Number, Amount
- **Order Cards** (horizontal scrollable carousel or grid layout):
      - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
      - Each order card (glassmorphism design, 320px width, 180px height):
        - **Card Header**:
          - Order ID (Orbitron Bold, 16px, white color) at top-left
          - Timestamp (digital style,12px, light grey) below order ID
          - Status badge (top-right, color-coded with neon glow):
            - Orange: New Order
            - Blue: Acknowledged
            - Yellow: Preparing
            - Green: Ready
            - Purple: Served
            - Teal: Payment Pending
        - **Card Body**:
          - Table number (Orbitron SemiBold, 18px, neon cyan) with icon
          - Customer name (Poppins Regular, 14px, light grey)\n          - Order items summary (first 2 items + 'X more', 13px, light grey)
          - Total amount (Orbitron Bold, 20px, neon cyan with glow) at bottom-left
        - **Card Footer**:
          - Quick action buttons (horizontal row):
            - 'View Details' (futuristic button, neon gradient, 80px width)
            - 'Update Status' (futuristic button, glassmorphism, neon border, 100px width)
          - Buttons:32px height, rounded corners\n        - **Hover effect**: Scale(1.03) with glow intensifies\n        - **Tap to expand**: Full order details in modal or slide-out panel
      - **Real-time updates**:
        - New orders appear instantly with slide-in animation from top and neon orange highlight border for3 seconds
        - Order status updates automatically with smooth transition animation
        - Order cards reorder based on status change
      - **Empty state** (if no active orders):
        - Illustration: Empty plate or checkmark icon with neon glow
        - Message: 'No active orders at the moment' (Orbitron font, white color)
        - Subtext: 'New orders will appear here in real-time' (light grey)
    - **View All Orders Button** (at bottom of section):
      - Futuristic button with neon gradient\n      - Text: 'View All Orders'
      - Navigates to full Orders page
\n  - **Restaurant Menu Section** (below active orders, explorable Zomato-style):
    - **Section Header**:
      - Title: 'Restaurant Menu' (Orbitron SemiBold, 24px, white color with neon glow)\n      - Category tabs (horizontal scrollable, glassmorphism design):
        - Each tab: Category name + icon (if available)
        - Active tab: Neon orange underline animation
        - Tap to filter items by category
      - Search bar (right-aligned, 200px width, glassmorphism design):
        - Placeholder: 'Search menu items...'
        - Neon border on focus
      - Filter button (icon: filter, opens filter panel)
      - Add New Item button (floating action button, neon gradient, '+' icon)
    - **Menu Item Cards** (grid layout):
      - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
      - Each item card (glassmorphism design, 280px width, 320px height):
        - **Item Image** (top, 16:9 aspect ratio, rounded top corners):
          - High-quality food photo
          - Item type indicator (top-left overlay,36px diameter, neon glow):
            - Veg: Neon green circle with leaf icon
            - Non-Veg: Neon red circle with chicken leg icon
            - Vegan: Neon green circle with 'VG' icon
          - Availability badge (top-right overlay):
            - In Stock: Neon green badge\n            - Out of Stock: Neon red badge with semi-transparent dark overlay on image
        - **Card Body** (below image, 12px padding):
          - Item name (Orbitron SemiBold, 18px, white color, truncated to 2 lines)
          - Rating (neon yellow stars, 16px) with count (light grey, 12px)
          - Price (Orbitron Bold, 20px, neon cyan with glow):
            - Single price or price range (for quantity-based or half/full)\n          - Quick action: 'Edit' icon (top-right of card body,24px, neon cyan on hover)
        - **Hover effect**: Scale(1.05) with glow intensifies
        - **Tap to expand**: Full item details in modal for editing
      - **Empty state** (if no items in category):
        - Illustration: Empty plate icon with neon glow
        - Message: 'No items in this category' (Orbitron font, white color)
        -'Add Item' button (futuristic button with neon gradient)
    - **View All Menu Button** (at bottom of section):\n      - Futuristic button with neon gradient
      - Text: 'View Full Menu'
      - Navigates to full Menu Management page

- **Real-Time Notification Bell with Advanced Futuristic Features** (in top header bar):
  - **Bell icon** positioned in top-right corner of header:\n    - Futuristic bell icon with neon outline (cyan or magenta)
    - Icon size: 28px
  - **Live notification badge**:
    - Neon red circular badge (20px diameter) with unread count
    - Pulsing glow animation (box-shadow with red neon)\n  - **Shake animation**:
    - Bell shakes with bounce effect when new order arrives (500ms animation)
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
    - **Panel displays list of recent notifications** (last 10):
      - Each notification card shows:\n        - **Notification icon** (order icon, payment icon, etc.) with neon glow
        - **Notification title** (e.g., 'New Order Received') in bold white text
        - **Brief message** (e.g., 'Table 12 placed an order for $45.50') in light grey
        - **Timestamp** (e.g., '2 minutes ago') in small cyan text
        - **Unread indicator**: Neon blue dot (8px diameter) for unread notifications
      - **Hover effect**: Card background lightens with subtle glow
      - Click on notification to navigate to relevant order details
    - **'Mark All as Read' button** at bottom of panel:\n      - Futuristic button with neon gradient background
      - Hover effect: glow intensifies
    - **'View All Notifications' link** to open full notification history page:\n      - Neon cyan text with underline animation on hover
  - **Notification types** (with color-coded icons):
    - New Order Received (neon orange icon)
    - Order Status Updated (neon blue icon)
    - Payment Completed (neon green icon)
    - Payment Pending (neon yellow icon)
    - Customer Message (neon purple icon)
    - Low Stock Alert (neon red icon)
    - Staff Activity (neon grey icon)
  - **Auto-dismiss**: Notification badge count updates automatically when notifications are read
  - **Persistent notifications**: Notifications remain in panel until manually dismissed or marked as read
\n- **Performance Optimizations**:
  - CSS animations with GPU acceleration (transform, opacity) for smooth 60fps performance
  - Lottie animations loaded asynchronously\n  - Reduced motion mode for accessibility (respects prefers-reduced-motion)
  - Lazy loading for non-critical animations
  - Efficient rendering with React.memo or Vue computed properties

- **Responsive Design**:
  - Mobile: Sidebar collapses to hamburger menu, main content full width, stats in2x2 grid, order and menu cards in single column
  - Tablet: Sidebar collapsible, main content adjusts, stats in row, order and menu cards in 2columns
  - Desktop: Full sidebar visible, main content with optimal spacing, stats in row, order and menu cards in 3 columns

**Multi-Restaurant Support**:
- Manage unlimited restaurant locations from single account
- Switch between restaurants with dropdown selector in top header (animated transition with slide effect)
- Consolidated analytics across all locations
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
  - Number of tables\n  - Floor plan upload (optional, PDF or image)
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

(Content remains the same as original document)
\n#### 3.1.4 Enhanced QR Code Management

(Content remains the same as original document)

#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards and Real-Time Auto-Refresh

(Content remains the same as original document, accessible from sidebar navigation)

#### 3.1.6 Enhanced Payment Management for Restaurant Owners

(Content remains the same as original document)

#### 3.1.7 Waiter/Agent Assignment System

(Content remains the same as original document)

#### 3.1.8 Real-Time Communication Hub

(Content remains the same as original document)

#### 3.1.9 Advanced Analytics & Reports

(Content remains the same as original document, accessible from sidebar navigation)

### 3.2 Enhanced Customer Features

(All customer features remain the same as original document)

## 4. Complete User Flows

### 4.1 Restaurant Owner Complete Flow (Updated)

**Phase 1: Registration & Setup**
1. Visit DineQR website/app and click 'Register as Restaurant Owner'
2. Enter email and phone number
3. Receive OTP on both email and phone, verify
4. Create strong password (12+ characters with complexity requirements)
5. Set up two-factor authentication (2FA) with authenticator app
6. Upload business license and tax ID for verification
7. Complete profile setup: name, role, profile photo\n8. Account approved after verification (24-48 hours)
9. **Upon first login, automatically redirected to Owner Home Screen** (redesigned with Zomato-style layout)

**Phase 2: Restaurant Profile Creation**
1. Click 'Settings' from sidebar navigation
2. Navigate to 'Restaurant Profile' section\n3. Enter restaurant details (name, tagline, logo, banner images, restaurant type, images gallery, contact, location, operating hours, classification, capacity, amenities, description, certifications, additional information)
4. Preview restaurant profile\n5. Publish restaurant\n\n**Phase 3: Menu Creation**
1. Navigate to 'Menu Management' from sidebar navigation
2. Create food categories (name, description, category type, icon, display order, time-based availability)
3. Add food items (name, description, item type, images, pricing including half/full plate options, preparation time, dietary indicators, allergen information, nutritional information, ingredients, customization options, availability status, badges, tags, pairing suggestions)
4. Bulk import items via CSV (optional)
5. Preview menu in customer view
6. Publish menu\n
**Phase 4: Inventory Setup**
1. Navigate to 'Inventory' from sidebar navigation
2. Create ingredient master list\n3. Link ingredients to menu items with quantities (including separate quantities for half and full portions)
4. Set minimum stock levels and alerts
5. Add supplier information
6. Log initial stock levels

**Phase 5: QR Code Generation**
1. Navigate to 'Table Management' from sidebar navigation
2. Enter number of tables
3. Customize QR code design with logo and colors
4. Generate QR codes for all tables (each QR code embeds unique table number and restaurant ID)
5. Download QR codes in print-ready PDF format
6. Print and place QR codes on tables with table numbers

**Phase 6: Staff Management**
1. Navigate to 'Staff Management' from sidebar navigation
2. Add staff members (name, email, phone, employee ID, role, shift schedule)
3. Send invitation email for account setup
4. Staff members complete registration and login
\n**Phase 7: Daily Operations with Real-Time Notifications (ENHANCED)**
1. Login to Owner Home Screen (automatically redirected upon login)
2. **Dashboard automatically connects via WebSocket** for real-time updates
3. **View Active Orders Section** on home screen:\n   - Monitor real-time order board with futuristic design
   - **When new order arrives**:
     - **Order appears instantly on home screen without manual refresh**
     - **Visual notification**: New order card slides in from top with bounce animation, neon orange highlight border for3 seconds
     - **Audio notification**: Futuristic notification sound plays (if enabled in settings)
     - **Notification bell alert**: Bell icon shakes, red badge count increments, notification added to dropdown panel
     - **Desktop notification**: System notification appears (if browser permissions granted)
     - **Mobile push notification**: Push notification sent to owner's device (if app installed)
   - System validates restaurant ID from QR scan
   - View customer's real name (or'Guest' if not logged in)\n   - Click on order card to expand full details in modal or slide-out panel
   - View complete order information (including item types, portion sizes - half/full, ratings)\n   - View timeline and payment status
   - Acknowledge order\n   - System auto-assigns waiter based on table location
   - Waiter receives notification and confirms\n   - Kitchen receives order and starts preparation
   - Update order status: Preparing → Ready → Served
   - **Timeline automatically updates with timestamps for each stage**
   - **Customer app automatically receives real-time timeline updates without manual refresh**
4. **Explore Restaurant Menu Section** on home screen:
   - Browse menu items by category\n   - Search for specific items
   - View item details (image, name, price, rating, availability)
   - Quick edit items by tapping 'Edit' icon
   - Add new items by tapping floating '+' button
5. Navigate to 'Orders' from sidebar for full order management dashboard
6. Monitor customer chats (accessible from sidebar or order details)
7. **Handle COC Payments** (navigate to 'Payments' from sidebar or from order details)
8. **Print E-Bills** (from order details)\n9. Manage inventory (navigate to 'Inventory' from sidebar)\n10. Review daily analytics and reports (navigate to 'Analytics & Reports' from sidebar)

**Phase 8: Ongoing Management**
1. Update menu based on inventory and customer feedback (via'Menu Management' in sidebar)
2. Analyze sales trends and adjust pricing (via 'Analytics & Reports' in sidebar)
3. Monitor item ratings and reviews\n4. Respond to customer reviews\n5. Manage staff schedules and performance (via 'Staff Management' in sidebar)
6. Run promotional campaigns\n7. Export financial reports for accounting (via 'Analytics & Reports' in sidebar)
\n### 4.2 Customer Complete Flow\n
(Content remains the same as original document)

### 4.3 Waiter/Agent Complete Flow

(Content remains the same as original document)

## 5. Advanced Design System with Futuristic UI Specifications

(All design system specifications remain the same as original document, with additional components for Owner Home Screen)

### 5.4 Component Design (Updated for Owner Home Screen)

**Owner Home Screen Components**:\n\n- **Sidebar Navigation** (Futuristic Design):
  - **Width**: 240px (expanded), 60px (collapsed)
  - **Background**: Glassmorphism design with frosted glass effect (backdrop-filter: blur(10px), background: rgba(26,26,26,0.9))
  - **Border**: 2px solid with neon gradient (right edge)
  - **Logo Section** (top,80px height):
    - Restaurant logo (40px height) centered when expanded, icon only when collapsed
    - Restaurant name (Orbitron SemiBold, 16px, white color) below logo when expanded
  - **Navigation Items** (vertical list, 48px height each):
    - Icon (24px, left-aligned,16px padding from left)
    - Label (Orbitron Regular, 14px, white color, left-aligned, 12px padding from icon)
    - Active item: Neon orange background (#FF6B35) with glow, white text
    - Hover effect: Neon cyan border (2px solid) on left edge, subtle glow
    - Badge (for Orders and Notifications): Neon red circle (18px diameter) with count, positioned top-right of item
  - **Collapse/Expand Button** (bottom, 48px height):
    - Hamburger icon (24px) centered
    - Tap to toggle sidebar width
    - Smooth transition animation (300ms ease-in-out)
\n- **Top Header Bar** (Futuristic Design):
  - **Height**: 60px\n  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with neon gradient (bottom edge)
  - **Left Section**:
    - Sidebar toggle button (visible on mobile, hamburger icon, 24px)
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
    - Notification bell icon (28px, neon cyan on hover with glow):
      - Unread count badge (neon red circle, 20px diameter, pulsing glow)
      - Click to open notification dropdown panel
    - Profile avatar (40px diameter, circular with neon border):
      - Click to open dropdown menu: Profile, Settings, Logout
\n- **Quick Stats Cards** (Futuristic Design):
  - **Card Size**: 200px width x 100px height (desktop), full width on mobile
  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with neon gradient\n  - **Border Radius**: 12px
  - **Shadow**: 04px 12px rgba(0,0,0,0.3) with subtle neon glow
  - **Layout**:
    - Icon (32px, neon glow) at left,16px padding from left edge
    - Label (Orbitron Regular, 14px, light grey) at top-right, 16px padding from top\n    - Value (Orbitron Bold, 28px, neon cyan with glow) at bottom-right, 16px padding from bottom\n  - **Animation**: Animated counter effect on page load (2s ease-out from0 to target value)
  - **Hover effect**: Scale(1.03) with glow intensifies\n
- **Active Order Cards** (Futuristic Design):
  - **Card Size**: 320px width x 180px height\n  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with color-coded neon gradient based on status
  - **Border Radius**: 16px
  - **Shadow**: 0 4px 12px rgba(0,0,0,0.3) with subtle neon glow\n  - **Layout**:
    - Header (top, 40px height):
      - Order ID (Orbitron Bold, 16px, white color) at left\n      - Timestamp (digital style, 12px, light grey) below order ID
      - Status badge (top-right, color-coded with neon glow)
    - Body (middle, 80px height):
      - Table number (Orbitron SemiBold, 18px, neon cyan) with icon
      - Customer name (Poppins Regular, 14px, light grey)\n      - Order items summary (13px, light grey, truncated to 2 lines)
      - Total amount (Orbitron Bold, 20px, neon cyan with glow) at bottom-left
    - Footer (bottom, 40px height):
      - Quick action buttons:'View Details' and 'Update Status'
      - Buttons:32px height, rounded corners, futuristic design
  - **Hover effect**: Scale(1.03) with glow intensifies
- **Tap to expand**: Full order details in modal or slide-out panel
- **Real-time update animation**: Slide-in from top with bounce (500ms) and neon orange highlight border for 3 seconds

- **Menu Item Cards** (Futuristic Design):
  - **Card Size**: 280px width x 320px height
  - **Background**: Glassmorphism design with frosted glass effect
  - **Border**: 2px solid with neon gradient
  - **Border Radius**: 16px\n  - **Shadow**: 0 4px 12px rgba(0,0,0,0.3) with subtle neon glow
  - **Layout**:\n    - Image (top, 16:9 aspect ratio, rounded top corners):
      - High-quality food photo\n      - Item type indicator (top-left overlay, 36px diameter, neon glow)
      - Availability badge (top-right overlay)\n    - Body (below image, 12px padding):
      - Item name (Orbitron SemiBold, 18px, white color, truncated to 2 lines)
      - Rating (neon yellow stars, 16px) with count (light grey, 12px)
      - Price (Orbitron Bold, 20px, neon cyan with glow)\n      - Quick action: 'Edit' icon (top-right of card body, 24px, neon cyan on hover)
  - **Hover effect**: Scale(1.05) with glow intensifies
  - **Tap to expand**: Full item details in modal for editing
\n(All other component designs remain the same as original document)

## 6. Technical Considerations

(Content remains the same as original document)

## 7. Future Enhancements

(Content remains the same as original document)

## 8. Design Style\n
(Content remains the same as original document)

---

**End of Requirements Document**