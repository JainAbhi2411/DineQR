# DineQR - Progressive Web App (PWA) Requirements Document

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform (Progressive Web App)

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem delivered as a **Progressive Web App (PWA)** with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. **The system is delivered as a single Progressive Web App that works seamlessly across all devices (desktop, tablet, mobile) with native app-like capabilities including offline functionality, push notifications, home screen installation, and optimized performance.** Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced database-driven portion selection UI featuring Full Portion as default (original item price) and additional price variants stored in database with custom names and prices, advanced image upload system supporting computer upload, cloud drive integration (Google Drive, Dropbox), and direct URL insertion, AI-powered recommendations, real-time chat system, mandatory waiter assignment for every order by restaurant owner with intelligent free waiter filtering and real-time synchronization to customer dashboard displaying assigned waiter name and information, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, comprehensive e-bill generation system with professional formatting and multiple download options (PDF, print-ready format), personalized restaurant dashboard for quick reordering, complete staff management with attendance tracking, performance analytics, and real-time waiter availability status (Free/Busy/Offline), advanced marketing and promotions system with Swiggy-style real-time customer-facing offers display featuring prominent banner placement, horizontal scrollable offer cards, automatic real-time synchronization via WebSocket, automatic discount application, and promo code redemption, comprehensive settings module for restaurant configuration with automatic currency and timezone application across the entire platform, restaurant type classification (Veg/Non-Veg/Both) with prominent display in browse restaurants and menu pages, QR code scanning functionality available on all mobile devices via PWA camera access, fully functional sidebar navigation with complete features for all menu items including browse restaurants functionality, real-time synchronization of menu updates, table updates, and promotions to customer dashboards without page refresh, Add-On Order feature allowing customers to add items to their active order without creating a new order or bill, and revolutionary NLP-powered Natural Language Ordering via AI Chatbot enabling customers to place orders using conversational text (e.g., 'I want to order 1daal tadka, 4 roti, 1 margherita pizza') with automatic cart creation and intelligent menu item recognition - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface with Swiggy-inspired offer presentation. All data displayed across the platform is real-time and dynamically calculated from the live database. **As a PWA, the application provides native app-like experience with offline capabilities, push notifications, home screen installation, fast loading, and works seamlessly across all platforms without requiring separate app store downloads.**

---

## 2. Progressive Web App (PWA) Architecture

### 2.1 PWA Core Features

#### 2.1.1 Installability
- **Add to Home Screen**: Users can install DineQR PWA to their device home screen (iOS, Android, desktop) with a single tap
- **App-Like Experience**: Once installed, PWA launches in standalone mode without browser UI (no address bar, no browser tabs)
- **Custom App Icon**: DineQR branded app icon appears on home screen alongside native apps
  - **Icon Design**: Modern futuristic icon featuring a stylized QR code pattern integrated with a fork and knife silhouette, set against a gradient background transitioning from electric cyan (#00d9ff) to vibrant magenta (#ff006e)\n  - **Icon Variations**: Multiple icon sizes optimized for different devices and contexts
  - **Maskable Icon**: Adaptive icon with safe zone for Android maskable icon support, ensuring icon looks great on all Android launchers
- **Flash Screen (Splash Screen)**: Custom animated flash screen displayed during app launch
  - **Duration**: 2-3 seconds animated splash screen
  - **Animation**: Futuristic loading animation featuring:\n    + DineQR logo with neon glow effect pulsing from center
    + Animated QR code pattern particles floating and assembling into logo
    + Electric cyan and magenta gradient waves flowing across background
    + Smooth fade-in of logo followed by fade-out transition to main app
    + Loading progress indicator (circular neon ring) at bottom
  - **Background**: Deep charcoal grey (#1a1a2e) with subtle animated gradient overlay
  - **Logo**: High-resolution DineQR logo (SVG format) with neon outline effect
  - **Tagline**: 'Smart Dining Experience' appears below logo with fade-in animation
  - **Responsive Design**: Splash screen adapts to different screen sizes and orientations
- **Installation Prompt**: Smart installation banner appears after user engagement (e.g., after browsing menu, placing order)\n- **Cross-Platform**: Single PWA works on iOS (Safari), Android (Chrome), Windows (Edge), macOS (Safari/Chrome), Linux (Chrome/Firefox)
\n#### 2.1.2 Offline Functionality
- **Service Worker**: Advanced service worker implementation for offline capabilities and caching strategies
- **Offline Menu Browsing**: View restaurant menu, item details, images, and portions without internet connection (cached data)
- **Offline Order History**: Access past orders, order details, and e-bills offline
- **Offline Favorites**: View saved favorite items and restaurants offline
- **Offline E-Bill Access**: Download and view e-bills offline (stored in IndexedDB)
- **Background Sync**: Queue actions performed offline (e.g., favoriting items, viewing orders) and sync automatically when connection restored
- **Offline Indicator**: Clear visual indicator (banner or toast) when app is in offline mode
- **Cache-First Strategy**: Static assets (CSS, JS, images, fonts) served from cache for instant loading
- **Network-First Strategy**: Dynamic data (menu, orders, promotions) fetched from network with cache fallback
- **Stale-While-Revalidate**: Show cached data immediately while fetching fresh data in background

#### 2.1.3 Push Notifications
- **Web Push API**: Native push notifications via Web Push API (works on Android, Windows, macOS; limited on iOS)
- **Order Status Updates**: Real-time push notifications for order status changes (Accepted, Preparing, Ready, Completed)
- **Waiter Assignment Notifications**: Instant notification when waiter assigned or reassigned to customer's order
- **Promotion Alerts**: Push notifications for new promotions, expiring offers, and personalized deals
- **NLP Order Confirmations**: Notification when NLP chatbot successfully processes order
- **E-Bill Ready Alerts**: Notification when e-bill is generated and ready for download
- **Add-On Order Notifications**: Notification when add-on items added to active order
- **Chat Messages**: Push notifications for new messages from restaurant or waiter
- **Loyalty Rewards**: Notifications for earned loyalty points and available rewards
- **Notification Permissions**: Request notification permissions with clear explanation of benefits
- **Notification Settings**: Granular control over notification types and frequency in app settings
- **iOS Fallback**: For iOS devices (where Web Push is limited), use in-app notifications and WebSocket-based real-time updates

#### 2.1.4 Performance Optimization
- **Fast Loading**: Target< 3 seconds initial load time on3G networks
- **Lazy Loading**: Load images, components, and routes on-demand to reduce initial bundle size
- **Code Splitting**: Split JavaScript bundles by route and feature for faster loading
- **Image Optimization**: Serve responsive images (WebP format with JPEG fallback), lazy load images below the fold
- **Minification & Compression**: Minify CSS/JS, enable Gzip/Brotli compression
- **Critical CSS**: Inline critical CSS for above-the-fold content
- **Preloading**: Preload critical resources (fonts, hero images) for faster rendering
- **Resource Hints**: Use dns-prefetch, preconnect for faster API calls
- **Lighthouse Score**: Target 90+ score on Performance, Accessibility, Best Practices, SEO

#### 2.1.5 Responsive Design
- **Mobile-First Approach**: Design and develop for mobile devices first, then scale up to tablets and desktops
- **Adaptive Layouts**: Layouts adapt seamlessly to different screen sizes (320px to 4K)
- **Touch-Friendly UI**: Large touch targets (minimum 44x44px), swipe gestures, pull-to-refresh
- **Collapsible Sidebar**: Sidebar navigation collapses to hamburger menu on mobile
- **Responsive Typography**: Fluid typography scales based on viewport size
- **Responsive Images**: Serve appropriately sized images based on device resolution and screen size
- **Orientation Support**: Support both portrait and landscape orientations
\n#### 2.1.6 Device Integration
- **Camera Access**: Access device camera for QR code scanning via Web APIs (getUserMedia)
- **Geolocation**: Access device location for nearby restaurant recommendations (with user permission)
- **File System Access**: Access device file system for image uploads (File API)
- **Clipboard Access**: Copy promo codes, order IDs, e-bill links to clipboard
- **Share API**: Native share functionality to share menu items, promotions, e-bills via device share sheet
- **Payment Request API**: Streamlined checkout with Payment Request API (supports Google Pay, Apple Pay, saved cards)
- **Vibration API**: Haptic feedback for button presses and notifications (on supported devices)
- **Screen Wake Lock**: Keep screen awake during order tracking or QR code scanning

---

### 2.2 PWA Technical Implementation

#### 2.2.1 Service Worker Strategy
- **Registration**: Register service worker on app load, handle updates gracefully
- **Caching Strategies**:
  - **Cache-First**: Static assets (CSS, JS, fonts, images)\n  - **Network-First**: Dynamic data (menu, orders, promotions) with cache fallback
  - **Stale-While-Revalidate**: User profile, settings, order history
  - **Network-Only**: Payment processing, authentication\n- **Cache Management**: Implement cache versioning, automatic cache cleanup for old versions
- **Background Sync**: Queue failed API requests (e.g., order placement, favorite item) and retry when connection restored
- **Periodic Background Sync**: Fetch fresh menu data, promotions in background (when app is closed)
- **Update Strategy**: Prompt user to refresh when new version available, skip waiting for critical updates

#### 2.2.2 Manifest Configuration
- **Web App Manifest**: Comprehensive manifest.json with app metadata\n- **App Name**: 'DineQR - Smart Restaurant Manager' (for owners/waiters), 'DineQR - Order & Dine' (for customers)
- **Short Name**: 'DineQR'\n- **Description**: 'Enterprise-grade smart restaurant management and customer engagement platform'
- **Icons**: Multiple icon sizes with custom DineQR branding
  - **Icon Sizes**: 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512 (PNG format)
  - **Icon Design**: Futuristic icon with QR code pattern, fork and knife silhouette, electric cyan to magenta gradient background
  - **Maskable Icon**: 192x192 and 512x512 maskable icons with safe zone for Android adaptive icons
  - **Purpose**: 'any maskable' for adaptive icon support
- **Start URL**: '/' with query parameter to track PWA installs
- **Display Mode**: 'standalone' (app-like experience without browser UI)
- **Orientation**: 'portrait-primary' (default), support'landscape' for tablets
- **Theme Color**: Deep charcoal grey (#1a1a2e) to match futuristic dark theme
- **Background Color**: Deep charcoal grey (#1a1a2e) for splash screen background
- **Splash Screen Configuration**:
  - **Background Color**: #1a1a2e (deep charcoal grey)
  - **Icon**:512x512 icon displayed at center of splash screen
  - **Custom Splash Screen**: Implement custom animated splash screen using HTML/CSS/JS for enhanced visual experience (overrides default browser splash screen)
- **Scope**: '/' to define navigation scope\n- **Categories**: ['food', 'business', 'productivity']
\n#### 2.2.3 Offline Data Storage
- **IndexedDB**: Store large datasets (menu items, order history, e-bills, images) for offline access
- **LocalStorage**: Store small data (user preferences, settings, auth tokens)
- **Cache API**: Store static assets and API responses via service worker
- **Data Sync**: Sync offline data with server when connection restored, handle conflicts gracefully
- **Storage Quota**: Monitor storage usage, request persistent storage for critical data

#### 2.2.4 Push Notification Implementation
- **Subscription**: Request notification permissions, subscribe to push notifications via Push API
- **Server Integration**: Send push notifications from backend via Web Push protocol (VAPID keys)
- **Notification Payload**: Include title, body, icon, badge, actions (e.g., 'View Order', 'Dismiss')
- **Notification Click Handling**: Open relevant page when notification clicked (e.g., order details page)
- **iOS Fallback**: For iOS devices, use WebSocket-based real-time updates and in-app notifications (banner/toast)
\n---

### 2.3 PWA User Experience

#### 2.3.1 Installation Flow
1. **First Visit**: User visits DineQR PWA via browser (https://dineqr.com)\n2. **Browse & Engage**: User browses menu, places order, or views promotions
3. **Installation Prompt**: After engagement, browser shows'Add to Home Screen' prompt (or custom in-app prompt)
4. **Install**: User taps 'Add' → PWA installed to home screen with custom DineQR icon
5. **Launch**: User taps DineQR icon on home screen → PWA launches in standalone mode (no browser UI)
6. **Flash Screen**: Custom animated flash screen appears with:\n   - DineQR logo with neon glow pulsing animation
   - Animated QR code particles assembling into logo
   - Electric cyan and magenta gradient waves\n   - Loading progress indicator\n   - 'Smart Dining Experience' tagline fade-in
   - Duration: 2-3 seconds\n7. **App Experience**: User experiences native app-like interface with offline capabilities and push notifications

#### 2.3.2 Offline Experience
1. **Connection Lost**: User loses internet connection (airplane mode, poor network)\n2. **Offline Indicator**: Banner appears at top: 'You are offline. Some features may be limited.'
3. **Cached Content**: User can still browse cached menu, view order history, access e-bills
4. **Offline Actions**: User favorites an item → Action queued for background sync
5. **Connection Restored**: Banner updates: 'You are back online!' → Queued actions sync automatically
6. **Fresh Data**: App fetches fresh data in background, updates UI seamlessly

#### 2.3.3 Push Notification Experience
1. **Permission Request**: After first order, app requests notification permissions with clear explanation
2. **User Grants Permission**: User taps 'Allow' → Subscribed to push notifications
3. **Order Update**: Restaurant updates order status to 'Preparing'\n4. **Push Notification**: User receives push notification: 'Your order #1234 is being prepared!'
5. **Notification Click**: User taps notification → PWA opens to order tracking page
6. **Real-Time Updates**: Order timeline updates in real-time via WebSocket

---

## 3. User Roles & Dashboards (PWA)

### 3.1 Customer Dashboard (PWA)

**Home Screen**:\n- **Top Navigation**: DineQR logo, search bar, NLP chatbot icon, notification bell, profile icon
- **Swiggy-Style Promotions Carousel**: Horizontal scrollable promotion cards with real-time updates
- **NLP Quick Order Section**: 'Order with AI' button, example queries\n- **Active Orders Section**: Display active orders with waiter info, promotion badges, order source indicators,'Download E-Bill' button for completed orders
- **Recently Scanned Restaurants**: Thumbnail grid with'View Menu' buttons
- **Recommended Items**: Personalized item recommendations with promotion badges
- **Bottom Navigation Bar** (Mobile) or **Sidebar** (Desktop): Home, Browse, Offers, Orders, Profile
- **Install Prompt** (if not installed): 'Install DineQR for faster access and offline features' with 'Install' button

**QR Code Scanning** (Mobile PWA):
1. Tap'Scan QR Code' button (floating action button)
2. PWA requests camera permission → User grants permission
3. Camera opens with QR code scanner overlay (using getUserMedia API and QR code library)
4. Scan restaurant table QR code → Table number auto-detected
5. Navigate to restaurant menu page
\n**Menu Browsing**:
- **Menu Header**: Restaurant name, restaurant type badge, NLP chatbot floating button
- **Swiggy-Style Promotions Banner**: Horizontal scrollable offer cards
- **Category Navigation**: Horizontal tabs for menu categories
- **Menu Items Grid**: Item cards with primary image (lazy loaded), name, price, portion options, promotion badges
- **Item Details**: Tap item card → Full-screen modal with image carousel, description, portion selection, quantity selector, 'Add to Cart' button
- **NLP Ordering**: Tap NLP chatbot button → Full-screen chatbot modal, type order in natural language, chatbot processes and displays order summary, tap 'Add to Cart'\n\n**Cart & Checkout**:
1. Review cart → Edit quantities/portions, apply promotions (Swiggy-style promo code section)
2. Proceed to checkout → Enter customer details, select order type, review order summary
3. Payment → Select payment method (Payment Request API for Google Pay/Apple Pay, Card, UPI, Cash), complete payment
4. Order confirmation → View order details, waiter assignment status, 'Download E-Bill' button\n
**Order Tracking**:
- **Order Tracking Page**: Order ID, order source badge, applied promotion section, assigned waiter info section (with real-time updates via WebSocket), order details, order timeline, e-bill download section
- **Real-Time Updates**: Push notifications (if enabled) or in-app notifications for status changes, waiter assignments, e-bill ready\n- **Chat with Waiter**: Tap 'Chat with Waiter' button → Real-time chat interface (WebSocket)\n\n**Order History & E-Bills**:
- **Order History**: List of past orders with search/filter options (cached for offline access)
- **Order Details**: Tap order → View full order details, waiter info, promotion details, order source
- **E-Bill Download**: Tap 'Download E-Bill' → Download PDF to device (stored in IndexedDB for offline access), view in app, print, share via Share API, email\n
**Offers & Promotions**:
- **Offers Page**: Grid of promotion cards with real-time updates (WebSocket), search/filter options
- **Promotion Details**: Tap card → Full-screen modal with discount details, promo code, eligibility, validity, terms & conditions
- **Apply Offer**: Tap 'Apply Offer' → System validates and applies to cart\n\n**Profile & Settings**:
- **Profile**: View/edit profile info, change password\n- **Settings**: Notification preferences (push notifications toggle), language, theme (light/dark/auto), privacy settings
- **Install PWA** (if not installed): 'Install DineQR App' button with instructions
- **Logout**: Tap logout → Confirm → Return to login screen

---

### 3.2 Owner Dashboard (PWA)

**Dashboard**:
- **Top Metrics Cards**: Today's revenue, active orders, total orders, customer satisfaction, active promotions, NLP orders (real-time data)
- **Recent Orders Section**: Last 5 orders with waiter assignment info, promotion badges, order source indicators, 'View E-Bill' button
- **Quick Actions Grid**: Add Menu Item, Create Promotion, Generate QR Code, View Analytics, Manage Staff, Settings
- **Active Promotions Section**: Display currently active promotions with quick view cards
\n**Menu Management**:
- **Menu Items List**: Grid/list view with search/filter options
- **Add/Edit Menu Item**: Multi-tab form (Basic Info, Image Upload, Pricing & Portions, Inventory, Additional Details, Promotions, NLP Aliases)
- **Image Upload**: \n  - **Computer Upload**: File input with drag-and-drop support (File API)
  - **Cloud Drive Import**: Integrate with Google Drive Picker API, Dropbox Chooser API
  - **Direct URL**: Input field for image URL
  - **Image Preview**: Show preview before upload, crop/resize options
- **Real-Time Sync**: Menu changes sync to customer PWAs instantly via WebSocket
\n**Order Management**:
- **Order Dashboard**: Order cards grid with filters (Unassigned, Orders with Promotions, NLP Orders)\n- **Order Details**: Full-screen modal with order summary, items, timeline, payment info, waiter assignment section, promotion details, order source,'Download E-Bill' button
- **Assign Waiter**: Tap 'Assign Waiter' → Modal displays only free waiters, select waiter, confirm assignment
- **Real-Time Updates**: Push notifications (if enabled) or in-app notifications for new orders, promotion applications, NLP orders, e-bill generation

**Promotions Management**:
- **Marketing Dashboard**: Active promotions, scheduled promotions, expired promotions\n- **Create Promotion**: Multi-step form (Basic Info, Discount Details, Eligibility, Validity, Preview)\n- **Real-Time Sync**: Promotion changes sync to customer PWAs instantly via WebSocket
\n**Staff Management**:
- **Free Waiters Section**: Display free waiters with avatar, name, workload, 'Assign to Order' button
- **All Staff Section**: List of all staff with filters (All, Waiters, Free, Busy, Offline)
- **Add/Edit Staff**: Form with name, role, contact info, workload threshold\n\n**E-Bill Management**:
- **E-Bill Settings**: Configure branding, layout, content, footer, download format, auto-generate, email/SMS delivery
- **View E-Bills**: Access e-bills for all orders, download, print, share via Share API, regenerate\n- **Bulk Download**: Select multiple orders, download e-bills as ZIP file

**Analytics**:
- **Analytics Dashboard**: Revenue trends, order analytics, menu performance, customer analytics, staff analytics, promotion analytics, NLP analytics, e-bill analytics
- **Custom Reports**: Generate and export reports as PDF/CSV
\n**Settings**:
- **Restaurant Profile**: Edit restaurant info, restaurant type, currency, timezone\n- **Operational Settings**: Configure order settings, payment settings, notification settings
- **Waiter Assignment Settings**: Enable auto-assignment, set workload threshold\n- **Promotion Settings**: Enable promotions, configure stacking, auto-apply\n- **NLP Settings**: Enable NLP ordering, configure recognition threshold, customize messages
- **E-Bill Settings**: Configure branding, layout, content, download format\n- **Image Upload Settings**: Configure max file size, compression, cloud drive integrations

---

### 3.3 Waiter Dashboard (PWA)

**Dashboard**:
- **Metrics Cards**: Orders assigned today, orders with promotions, NLP orders\n- **Assigned Orders Section**: Display only orders assigned to this waiter with order details, promotion badges, order source indicators, 'View E-Bill' button
- **Clock In/Out**: Tap button to clock in/out, status changes to Free/Offline
\n**Order Management**:
- **Order Details**: Full-screen modal with order summary, items, timeline, waiter assignment info, promotion details, order source, 'View E-Bill' button
- **Update Status**: Tap status button → Select new status (Accept, Preparing, Ready, Completed)\n- **Chat with Customer**: Tap 'Chat with Customer' → Real-time chat interface (WebSocket)
\n**E-Bill Access**:
- **View E-Bill**: Tap 'View E-Bill' button → Full-screen e-bill view, download, print, share via Share API\n- **Share with Customer**: Tap 'Share E-Bill with Customer' → Send e-bill link via Share API (SMS, email, WhatsApp)
\n**Profile & Attendance**:
- **Profile**: View/edit profile info, performance metrics (orders handled, ratings, availability rate)
- **Attendance**: View attendance history, clock in/out logs\n\n---

## 4. PWA-Specific Features

### 4.1 Installation & Onboarding

#### 4.1.1 Installation Prompt
- **Trigger**: Show installation prompt after user engagement (e.g., after browsing menu, placing order, viewing3+ pages)
- **Custom Prompt**: Custom in-app banner with DineQR branding: 'Install DineQR for faster access, offline features, and push notifications' with 'Install' and 'Not Now' buttons
- **Browser Prompt**: Trigger native browser 'Add to Home Screen' prompt when user taps 'Install'
- **Defer Prompt**: If user taps 'Not Now', defer prompt and show again after 7 days or after next order
- **Installation Success**: Show success message: 'DineQR installed! You can now access it from your home screen.'

#### 4.1.2 Onboarding (First Launch)
1. **Flash Screen**: Custom animated flash screen (2-3 seconds) featuring:
   - DineQR logo with neon glow pulsing from center
   - Animated QR code particles assembling into logo\n   - Electric cyan and magenta gradient waves flowing across deep charcoal grey background
   - Circular neon loading progress indicator at bottom
   - 'Smart Dining Experience' tagline fade-in below logo
   - Smooth fade-out transition to welcome screen
2. **Welcome Screen**: 'Welcome to DineQR!' with brief description and 'Get Started' button
3. **Feature Highlights**: Swipeable carousel highlighting key features (QR Scanning, NLP Ordering, Promotions, E-Bills, Offline Access)
4. **Permission Requests**: \n   - **Notifications**: 'Enable notifications to get real-time order updates' with 'Enable' and 'Skip' buttons
   - **Camera** (if customer): 'Allow camera access to scan QR codes' with 'Allow' and 'Skip' buttons
   - **Location** (optional): 'Allow location access to find nearby restaurants' with 'Allow' and 'Skip' buttons
5. **Sign Up/Login**: Navigate to authentication screen
\n---

### 4.2 Offline Features

#### 4.2.1 Offline Menu Browsing
- **Cache Strategy**: Cache menu data (items, images, portions, promotions) when user visits restaurant menu page
- **Offline Access**: When offline, user can browse cached menu, view item details, see portions and prices\n- **Offline Indicator**: Banner at top: 'You are offline. Viewing cached menu. Some features may be unavailable.'
- **Limitations**: Cannot add to cart, place order, or see real-time promotions when offline
- **Sync on Reconnect**: When connection restored, fetch fresh menu data in background, update UI if changes detected

#### 4.2.2 Offline Order History
- **Cache Strategy**: Cache order history data (orders, items, waiter info, e-bills) when user views order history page
- **Offline Access**: When offline, user can view cached order history, order details, and downloaded e-bills
- **Offline E-Bills**: E-bills stored in IndexedDB, accessible offline for viewing and printing
- **Sync on Reconnect**: When connection restored, fetch fresh order data in background, update UI if changes detected

#### 4.2.3 Background Sync
- **Queue Actions**: When offline, queue actions like favoriting items, viewing orders, updating profile
- **Sync on Reconnect**: When connection restored, service worker automatically syncs queued actions with server
- **Conflict Resolution**: If conflicts detected (e.g., item removed from menu), show notification to user

---
\n### 4.3 Push Notifications

#### 4.3.1 Notification Types
- **Order Status Updates**: 'Your order #1234 is being prepared!' (with'View Order' action)
- **Waiter Assignment**: 'John has been assigned to your order #1234' (with 'View Order' action)
- **Promotion Alerts**: 'New offer: 20% off on all pizzas!' (with 'View Offer' action)
- **NLP Order Confirmation**: 'Your AI order has been added to cart!' (with 'View Cart' action)
- **E-Bill Ready**: 'Your e-bill for order #1234 is ready!' (with 'Download E-Bill' action)
- **Add-On Order**: '2 items added to your active order #1234' (with 'View Order' action)
- **Chat Messages**: 'New message from John (Waiter)' (with 'Open Chat' action)
- **Loyalty Rewards**: 'You earned 50 points! Redeem now.' (with 'View Rewards' action)

#### 4.3.2 Notification Handling
- **Click Action**: When user clicks notification, PWA opens to relevant page (order details, offer page, chat, etc.)
- **Action Buttons**: Notifications include action buttons (e.g., 'View Order', 'Dismiss')
- **Badge Count**: Update PWA badge count (on app icon) with unread notifications count
- **Notification History**: Store notification history in app, accessible from notification bell icon

#### 4.3.3 iOS Fallback
- **Web Push Limitation**: iOS Safari has limited Web Push support (requires iOS 16.4+, only works when PWA installed)
- **Fallback Strategy**: For iOS users, use WebSocket-based real-time updates and in-app notifications (banner/toast)
- **In-App Notifications**: Show banner at top of screen for order updates, waiter assignments, promotions\n- **Notification Bell**: Notification bell icon shows unread count, taps opens notification history

---
\n### 4.4 Device Integration

#### 4.4.1 Camera Access (QR Scanning)
- **Permission Request**: Request camera permission when user taps 'Scan QR Code' button
- **Camera UI**: Full-screen camera view with QR code scanner overlay,'Cancel' button\n- **QR Detection**: Use QR code detection library (e.g., jsQR, qr-scanner) to detect QR codes in camera feed
- **Auto-Scan**: Automatically detect and process QR code when in view
- **Fallback**: If camera access denied, show 'Upload QR Code Image' option (File API)

#### 4.4.2 Share API
- **Share Menu Items**: Tap 'Share' button on item details page → Native share sheet opens → Share item name, image, link via SMS, email, WhatsApp, etc.
- **Share Promotions**: Tap 'Share' button on promotion card → Share promotion details and promo code
- **Share E-Bills**: Tap 'Share E-Bill' button → Share e-bill PDF or link\n- **Share Restaurant**: Tap 'Share' button on restaurant page → Share restaurant name, menu link\n
#### 4.4.3 Payment Request API
- **Streamlined Checkout**: Use Payment Request API for fast checkout with saved payment methods
- **Supported Methods**: Google Pay, Apple Pay (on iOS), saved credit/debit cards\n- **Autofill**: Automatically fill shipping/billing address, contact info from browser autofill
- **Fallback**: If Payment Request API not supported, show traditional payment form

#### 4.4.4 Clipboard API
- **Copy Promo Codes**: Tap 'Copy Code' button on promotion card → Promo code copied to clipboard, show toast: 'Promo code copied!'
- **Copy Order ID**: Tap 'Copy Order ID' button on order details page → Order ID copied to clipboard\n- **Copy E-Bill Link**: Tap 'Copy Link' button on e-bill page → E-bill link copied to clipboard

#### 4.4.5 Geolocation API
- **Nearby Restaurants**: Request location permission → Fetch user's location → Show nearby restaurants on browse page
- **Distance Display**: Show distance from user's location to each restaurant
- **Optional**: Location permission is optional, users can browse all restaurants without granting permission

---
\n## 5. Technical Stack (PWA)

### 5.1 Frontend Technologies
- **Framework**: React.js 18+ with Next.js 14+ (for SSR, SSG, and optimized PWA support)
- **UI Library**: Tailwind CSS for styling, Framer Motion for animations
- **State Management**: Redux Toolkit or Zustand for global state\n- **PWA Framework**: next-pwa plugin for Next.js (service worker generation, manifest configuration)
- **Service Worker**: Workbox for advanced caching strategies and background sync
- **Push Notifications**: Web Push API with VAPID keys\n- **QR Code Scanning**: jsQR or qr-scanner library with getUserMedia API
- **Image Optimization**: Next.js Image component with WebP format, lazy loading\n- **Offline Storage**: IndexedDB (via idb library) for large datasets, LocalStorage for small data
- **Real-Time Communication**: Socket.io client for WebSocket connections
- **Payment Integration**: Payment Request API, Stripe.js, Razorpay SDK
- **PDF Generation**: jsPDF or PDFKit for e-bill generation
- **Cloud Drive Integration**: Google Drive Picker API, Dropbox Chooser API\n- **NLP Integration**: Axios for API calls to NLP backend
- **Animation Library**: Framer Motion for flash screen animations, GSAP for advanced animations

### 5.2 Backend Technologies
- **Server**: Node.js with Express.js or Django\n- **Database**: Supabase (PostgreSQL with real-time capabilities) or MongoDB
- **Authentication**: Supabase Auth (JWT tokens, OAuth 2.0 for Google/Apple), or custom JWT implementation
- **WebSocket**: Socket.io server for real-time updates, or Supabase Realtime for database changes
- **Push Notifications**: Web Push library (web-push npm package) with VAPID keys
- **Payment Gateway**: Stripe, Razorpay, PayPal APIs
- **Cloud Storage**: Supabase Storage, AWS S3, Google Cloud Storage, or Cloudinary for image storage
- **Email Service**: SendGrid, Mailgun, or AWS SES\n- **SMS Service**: Twilio or AWS SNS
- **NLP Engine**: Python with spaCy, NLTK, or Hugging Face Transformers
- **Image Processing**: Sharp or Jimp for image compression and resizing
\n### 5.3 Hosting & Deployment
- **Frontend Hosting**: Vercel (optimized for Next.js PWAs), Netlify, or AWS Amplify
- **Backend Hosting**: Supabase (managed backend), AWS EC2, Google Cloud Run, or Heroku
- **Database Hosting**: Supabase (managed PostgreSQL with real-time), AWS RDS (PostgreSQL), MongoDB Atlas
- **CDN**: Cloudflare or AWS CloudFront for static asset delivery
- **SSL Certificate**: Let's Encrypt or AWS Certificate Manager (HTTPS required for PWA)
- **Domain**: https://dineqr.com\n
---

## 6. PWA Compliance & Best Practices

### 6.1 PWA Checklist
-✅ **HTTPS**: Serve app over HTTPS (required for service workers and PWA features)
- ✅ **Service Worker**: Register service worker for offline functionality and caching
- ✅ **Web App Manifest**: Include manifest.json with app metadata, custom icons, splash screen configuration
- ✅ **Installable**: App meets installability criteria (HTTPS, manifest, service worker, engagement heuristics)
- ✅ **Responsive Design**: App works on all screen sizes (mobile, tablet, desktop)
- ✅ **Fast Loading**: Initial load < 3 seconds on3G networks
- ✅ **Offline Functionality**: Core features work offline (menu browsing, order history, e-bills)
- ✅ **Push Notifications**: Implement Web Push API for real-time notifications
- ✅ **App-Like Experience**: Standalone display mode, no browser UI, custom flash screen
- ✅ **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support\n- ✅ **SEO**: Meta tags, structured data, sitemap, robots.txt
- ✅ **Performance**: Lighthouse score90+ on Performance, Accessibility, Best Practices, SEO

### 6.2 Lighthouse Optimization
- **Performance**: \n  - Minimize JavaScript bundle size (code splitting, tree shaking)
  - Optimize images (WebP format, responsive images, lazy loading)
  - Enable compression (Gzip/Brotli)
  - Use CDN for static assets
  - Implement caching strategies (service worker)\n- **Accessibility**: 
  - Semantic HTML (headings, landmarks, lists)
  - ARIA labels for interactive elements
  - Keyboard navigation support
  - Color contrast ratio4.5:1 minimum
  - Focus indicators for interactive elements
- **Best Practices**: 
  - HTTPS only\n  - No console errors
  - Secure authentication (JWT, OAuth)
  - Content Security Policy (CSP) headers
- **SEO**: 
  - Meta tags (title, description, Open Graph, Twitter Card)
  - Structured data (JSON-LD for restaurants, menu items)
  - Sitemap.xml and robots.txt
  - Canonical URLs
\n---

## 7. User Flows (PWA)

### 7.1 Customer Flow
\n1. **First Visit**: User visits https://dineqr.com via mobile browser
2. **Browse**: User browses menu, views promotions\n3. **Installation Prompt**: After engagement, custom banner appears: 'Install DineQR for faster access and offline features'
4. **Install**: User taps 'Install' → Browser shows'Add to Home Screen' prompt → User confirms
5. **Launch**: User taps DineQR icon (custom futuristic icon with QR code pattern and gradient) on home screen → PWA launches in standalone mode
6. **Flash Screen**: Animated flash screen displays (2-3 seconds):
   - DineQR logo with neon glow pulsing from center
   - QR code particles floating and assembling into logo
   - Electric cyan and magenta gradient waves\n   - Circular neon loading indicator
   - 'Smart Dining Experience' tagline fade-in
7. **Onboarding**: Welcome screen, feature highlights, permission requests (notifications, camera)\n8. **Sign Up/Login**: User creates account or logs in
9. **QR Scanning**: User taps 'Scan QR Code' → Camera opens → Scans table QR code → Navigates to menu
10. **Menu Browsing**: User browses menu, views items, portions, promotions
11. **NLP Ordering** (optional): User taps NLP chatbot → Types order in natural language → Chatbot processes and adds to cart
12. **Checkout**: User reviews cart, applies promotions, enters details, selects payment method (Payment Request API for Google Pay/Apple Pay)
13. **Order Confirmation**: User views order details, waiter assignment status
14. **Order Tracking**: User receives push notifications for status updates, views order timeline, chats with waiter
15. **E-Bill Download**: When order completed, user taps 'Download E-Bill' → E-bill downloaded to device (stored in IndexedDB)
16. **Offline Access**: User goes offline → Can still view cached menu, order history, downloaded e-bills
17. **Reorder**: User views order history → Taps 'Reorder' → Items added to cart
\n### 7.2 Owner Flow

1. **Login**: Owner visits https://dineqr.com/owner via browser or installed PWA
2. **Dashboard**: Owner views metrics, recent orders, quick actions
3. **Menu Management**: Owner adds/edits menu items with image upload (computer, cloud drive, URL), portions, NLP aliases
4. **Order Management**: Owner views orders, assigns waiters (from free waiters list), tracks orders
5. **Promotions Management**: Owner creates/edits promotions, real-time sync to customer PWAs
6. **Staff Management**: Owner manages waiters, views free waiters, tracks availability
7. **E-Bill Management**: Owner configures e-bill settings, views/downloads e-bills
8. **Analytics**: Owner views revenue, order, menu, staff, promotion, NLP, e-bill analytics
9. **Settings**: Owner configures restaurant profile, operational settings, waiter assignment, promotions, NLP, e-bills
10. **Push Notifications**: Owner receives push notifications for new orders, promotion applications, NLP orders
\n### 7.3 Waiter Flow

1. **Login**: Waiter visits https://dineqr.com/waiter via browser or installed PWA
2. **Clock In**: Waiter taps 'Clock In' → Status changes to Free\n3. **Dashboard**: Waiter views assigned orders, metrics\n4. **Order Management**: Waiter views order details, updates status (Accept, Preparing, Ready, Completed)
5. **Chat with Customer**: Waiter taps 'Chat with Customer' → Real-time chat interface\n6. **E-Bill Access**: Waiter views e-bill, shares with customer via Share API
7. **Clock Out**: Waiter taps 'Clock Out' → Status changes to Offline
8. **Push Notifications**: Waiter receives push notifications for new assigned orders, customer messages

---

## 8. Design Style (PWA)

**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan #00d9ff, vibrant magenta #ff006e, electric blue #3a86ff, neon purple #8338ec), glassmorphism effects, smooth gradients, multi-layered UI, subtle shadows, and 3D effects. **PWA design is optimized for touch interactions, responsive layouts, and fast loading.**

**App Icon Design**:
- **Icon Concept**: Modern futuristic icon featuring a stylized QR code pattern integrated with a fork and knife silhouette
- **Background**: Gradient transitioning from electric cyan (#00d9ff) at top to vibrant magenta (#ff006e) at bottom
- **QR Code Pattern**: Simplified QR code squares arranged in geometric pattern, with neon glow effect
- **Fork & Knife**: Minimalist fork and knife silhouette overlaid on QR pattern, outlined in white with subtle neon glow
- **Border**: Thin neon outline (2px) in electric cyan\n- **Style**: Flat design with subtle depth, optimized for visibility at all sizes (72px to 512px)
- **Maskable Icon**: Safe zone version with centered elements for Android adaptive icons

**Flash Screen Design**:
- **Background**: Deep charcoal grey (#1a1a2e) with animated gradient overlay (electric cyan to magenta waves)
- **Logo**: High-resolution DineQR logo (SVG) at center with neon outline effect
- **Animation Sequence**:
  1. Background gradient waves flow from left to right (0-0.5s)
  2. QR code particles fade in and float toward center (0.5-1.5s)
  3. Particles assemble into DineQR logo with neon glow pulsing effect (1.5-2s)
  4. Logo scales up slightly with glow intensifying (2-2.5s)
  5.'Smart Dining Experience' tagline fades in below logo (2.5-2.8s)
  6. Circular neon loading indicator appears at bottom (throughout)\n  7. Entire screen fades out to main app (2.8-3s)
- **Loading Indicator**: Circular neon ring at bottom center, rotating with gradient (cyan to magenta)
- **Tagline**: 'Smart Dining Experience' in Orbitron font, white color with subtle cyan glow
- **Responsive**: Adapts to portrait and landscape orientations, scales for different screen sizes

**Typography**: \n- **Headings**: Orbitron Bold or Exo 2 Bold (futuristic, tech-inspired)
- **Body Text**: Poppins Regular or Inter Regular (clean, readable)
- **Font Loading**: Use font-display: swap for faster initial render, preload critical fonts
\n**Color Palette**: 
- **Background**: Deep charcoal grey (#1a1a2e) or dark blue (#0f0f1e)
- **Accents**: Electric cyan (#00d9ff), vibrant magenta (#ff006e), electric blue (#3a86ff), neon purple (#8338ec)
- **Status Colors**: Neon green (#39ff14) for success, neon yellow (#ffea00) for warning, neon red (#ff073a) for error
- **Text**: White (#ffffff) or light grey (#e0e0e0)
\n**UI Components**: 
- **Cards**: Glassmorphism cards with neon gradient borders (2px), backdrop blur, subtle shadows
- **Buttons**: Futuristic buttons with neon gradients, hover effects (glow, scale), active states (press animation)
- **Inputs**: Dark input fields with neon borders on focus, floating labels\n- **Modals**: Full-screen modals with slide-up animation, glassmorphism background
- **Navigation**: Bottom navigation bar (mobile) with neon active state, sidebar (desktop) with collapsible sections
- **Notifications**: Toast notifications with neon borders, slide-in animation
\n**Animations**: 
- **Page Transitions**: Fade-in, slide-in animations for page navigation
- **Loading**: Pulsing glow animation for loading states, skeleton screens for content loading
- **Interactions**: Ripple effect on button press, shake animation for errors, scale animation on hover
- **Real-Time Updates**: Smooth fade-in animation for new orders, promotions, notifications
- **Flash Screen**: Complex multi-stage animation with particles, glow effects, gradient waves

**Responsive Design**: 
- **Mobile-First**: Design for mobile (320px+) first, scale up to tablet (768px+) and desktop (1024px+)
- **Breakpoints**: 320px (small mobile), 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop)
- **Touch Targets**: Minimum 44x44px for touch targets (buttons, links, icons)
- **Gestures**: Swipe gestures for navigation (swipe left/right for tabs, swipe down for refresh)

**Accessibility**: 
- **Color Contrast**: Minimum 4.5:1 contrast ratio for text, 3:1 for large text and UI components
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Escape, Arrow keys)
- **Screen Reader**: ARIA labels, semantic HTML, focus management
- **Focus Indicators**: Visible focus indicators (neon outline) for interactive elements
\n---

## 9. Setup & Deployment Guide

### 9.1 Local Development Setup

#### 9.1.1 Prerequisites
- **Node.js**: Version 18.x or higher (LTS recommended)
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: Latest version for version control
- **Code Editor**: VS Code (recommended) or any preferred editor
- **Browser**: Chrome, Firefox, or Edge (latest version) for testing PWA features
- **Supabase Account**: Sign up at https://supabase.com (if using Supabase as backend)

#### 9.1.2 Project Structure
```
dineqr-pwa/
├── public/
│   ├── icons/              # PWA icons (72x72 to 512x512)
│   ├── manifest.json       # Web App Manifest
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # React components
│   ├── pages/              # Next.js pages\n│   ├── styles/             # Tailwind CSS styles
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Redux/Zustand store
│   ├── services/           # API services
│   └── workers/            # Service worker files
├── .env.local# Environment variables (local)\n├── .env.production         # Environment variables (production)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Dependencies
└── README.md               # Project documentation
```

#### 9.1.3 Installation Steps

**Step 1: Clone Repository**
```bash
git clone https://github.com/your-username/dineqr-pwa.git
cd dineqr-pwa
```

**Step 2: Install Dependencies**\n```bash
npm install
```

**Step 3: Configure Environment Variables**
\nCreate `.env.local` file in root directory:
```env
# Supabase Configuration (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key\nSUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
\n# API Configuration (if using custom backend)
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:5000\n
# Authentication\nNEXT_PUBLIC_JWT_SECRET=your-jwt-secret-key
NEXT_PUBLIC_OAUTH_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_OAUTH_APPLE_CLIENT_ID=your-apple-client-id
\n# Payment Gateways
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-key-id
\n# Push Notifications (VAPID Keys)
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your-vapid-public-key
VAPID_PRIVATE_KEY=your-vapid-private-key
\n# Cloud Storage
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name\nNEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-upload-preset

# Google Drive API
NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY=your-google-drive-api-key
NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_ID=your-google-drive-client-id

# Dropbox API
NEXT_PUBLIC_DROPBOX_APP_KEY=your-dropbox-app-key

# NLP Backend\nNEXT_PUBLIC_NLP_API_URL=http://localhost:8000/nlp

# Email Service
SENDGRID_API_KEY=your-sendgrid-api-key

# SMS Service
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
```

**Step 4: Generate VAPID Keys (for Push Notifications)**
```bash
npx web-push generate-vapid-keys
```
Copy the generated public and private keys to `.env.local`\n
**Step 5: Start Development Server**
```bash
npm run dev
```
App will be available at `http://localhost:3000`

**Step 6: Start Backend Server (if using custom backend, skip if using Supabase)**
```bash
cd backend
npm install
npm run dev
```
Backend API will be available at `http://localhost:5000`

**Step 7: Start NLP Service (Separate Terminal)**
```bash
cd nlp-service
pip install -r requirements.txt
python app.py
```
NLP API will be available at `http://localhost:8000`

#### 9.1.4 Testing PWA Features Locally

**Enable HTTPS for Local Development** (required for PWA features):
\n**Option1: Using mkcert (Recommended)**
```bash
# Install mkcert
brew install mkcert  # macOS
choco install mkcert # Windows

# Create local CA
mkcert -install

# Generate certificate for localhost
mkcert localhost127.0.0.1 ::1\n
# Update next.config.js to use HTTPS
```

**Option 2: Using ngrok**
```bash
# Install ngrok\nnpm install -g ngrok\n
# Start ngrok tunnel
ngrok http 3000

# Access app via HTTPS URL provided by ngrok
```

**Test PWA Installation**:\n1. Open app in Chrome/Edge (HTTPS required)
2. Open DevTools → Application → Manifest (verify manifest.json loaded)
3. Open DevTools → Application → Service Workers (verify service worker registered)
4. Click browser's install button (+ icon in address bar) or custom install prompt
5. Verify app installed to home screen/desktop

**Test Offline Functionality**:
1. Open app, browse menu, view orders
2. Open DevTools → Network → Check'Offline' checkbox
3. Refresh page → Verify cached content loads
4. Uncheck 'Offline' → Verify fresh data fetched

**Test Push Notifications**:
1. Grant notification permissions when prompted
2. Use backend API or DevTools to send test notification:\n```bash
curl -X POST http://localhost:5000/api/notifications/send \
  -H 'Content-Type: application/json' \
  -d '{\"userId\": \"123\", \"title\": \"Test\", \"body\": \"Test notification\"}'\n```
3. Verify notification appears on device

---

### 9.2 Supabase Setup Guide

#### 9.2.1 What is Supabase?
\nSupabase is an open-source Firebase alternative that provides:\n- **PostgreSQL Database**: Managed PostgreSQL database with real-time capabilities
- **Authentication**: Built-in authentication with JWT tokens, OAuth (Google, Apple, GitHub, etc.), magic links
- **Real-Time Subscriptions**: Listen to database changes in real-time via WebSocket
- **Storage**: File storage with CDN for images, videos, documents
- **Edge Functions**: Serverless functions for backend logic
- **Auto-Generated APIs**: RESTful and GraphQL APIs auto-generated from database schema

**Why Supabase for DineQR?**
- **Real-Time Features**: Perfect for real-time order updates, waiter assignments, promotions sync
- **Built-In Auth**: Simplifies authentication with OAuth support for Google/Apple login
- **File Storage**: Easy image upload for menu items with CDN delivery
- **Scalable**: Handles high traffic with auto-scaling\n- **Free Tier**: Generous free tier for development and small-scale production

---

#### 9.2.2 Create Supabase Project

**Step 1: Sign Up for Supabase**
1. Go to https://supabase.com\n2. Click 'Start your project' → Sign up with GitHub, Google, or email
3. Verify your email address
\n**Step 2: Create New Project**
1. Click 'New Project' in Supabase Dashboard
2. Fill in project details:
   - **Organization**: Select or create organization (e.g., 'DineQR')
   - **Project Name**: 'dineqr-production' (or 'dineqr-dev' for development)
   - **Database Password**: Generate strong password (save it securely)
   - **Region**: Select region closest to your users (e.g., 'US East', 'Europe West', 'Asia Southeast')
   - **Pricing Plan**: Select 'Free' for development or 'Pro' for production
3. Click 'Create new project'
4. Wait 2-3 minutes for project provisioning

**Step 3: Get API Keys**
1. Once project is ready, go to 'Settings' → 'API'\n2. Copy the following keys:
   - **Project URL**: `https://your-project.supabase.co`
   - **anon public key**: Public key for client-side requests (safe to expose)
   - **service_role key**: Secret key for server-side requests (keep secure, never expose)
3. Add these keys to `.env.local`:\n```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

#### 9.2.3 Database Schema Setup

**Step 1: Open SQL Editor**
1. Go to Supabase Dashboard → 'SQL Editor'
2. Click 'New query'
\n**Step 2: Create Database Tables**
\nRun the following SQL to create tables for DineQR:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('customer', 'owner', 'waiter')),
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Restaurants table
CREATE TABLE public.restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,\n  restaurant_type TEXT CHECK (restaurant_type IN ('veg', 'non-veg', 'both')),
  address TEXT,
  phone TEXT,
  currency TEXT DEFAULT 'USD',
  timezone TEXT DEFAULT 'UTC',
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
\n-- Menu items table
CREATE TABLE public.menu_items (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES public.restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,\n  category TEXT,
  base_price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  nlp_aliases TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Portions table (for portion variants)
CREATE TABLE public.portions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  menu_item_id UUID REFERENCES public.menu_items(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Promotions table
CREATE TABLE public.promotions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n  restaurant_id UUID REFERENCES public.restaurants(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  discount_type TEXT CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10, 2) NOT NULL,
  promo_code TEXT UNIQUE,
  valid_from TIMESTAMP WITH TIME ZONE,
  valid_until TIMESTAMP WITH TIME ZONE,\n  is_active BOOLEAN DEFAULT TRUE,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Waiters table
CREATE TABLE public.waiters (
  id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  restaurant_id UUID REFERENCES public.restaurants(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('free', 'busy', 'offline')) DEFAULT 'offline',
  workload_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n  restaurant_id UUID REFERENCES public.restaurants(id) ON DELETE CASCADE,\n  customer_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  waiter_id UUID REFERENCES public.waiters(id) ON DELETE SET NULL,
  table_number TEXT,
  order_type TEXT CHECK (order_type IN ('dine-in', 'takeaway', 'delivery')),
  order_source TEXT CHECK (order_source IN ('manual', 'nlp')) DEFAULT 'manual',
  status TEXT CHECK (status IN ('pending', 'accepted', 'preparing', 'ready', 'completed', 'cancelled')) DEFAULT 'pending',
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0,
  total_amount DECIMAL(10, 2) NOT NULL,
  promotion_id UUID REFERENCES public.promotions(id) ON DELETE SET NULL,
  payment_method TEXT,
  payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE public.order_items (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  menu_item_id UUID REFERENCES public.menu_items(id) ON DELETE SET NULL,
  portion_id UUID REFERENCES public.portions(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order timeline table (for tracking order status changes)
CREATE TABLE public.order_timeline (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,\n  status TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- E-bills table
CREATE TABLE public.ebills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  bill_number TEXT UNIQUE NOT NULL,
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat messages table
CREATE TABLE public.chat_messages (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_menu_items_restaurant ON public.menu_items(restaurant_id);
CREATE INDEX idx_orders_restaurant ON public.orders(restaurant_id);
CREATE INDEX idx_orders_customer ON public.orders(customer_id);
CREATE INDEX idx_orders_waiter ON public.orders(waiter_id);\nCREATE INDEX idx_orders_status ON public.orders(status);\nCREATE INDEX idx_promotions_restaurant ON public.promotions(restaurant_id);
CREATE INDEX idx_waiters_restaurant ON public.waiters(restaurant_id);
CREATE INDEX idx_chat_messages_order ON public.chat_messages(order_id);\n
-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portions ENABLE ROW LEVEL SECURITY;\nALTER TABLE public.promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waiters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
\n-- RLS Policies (examples - customize based on your requirements)
\n-- Users: Users can read their own data
CREATE POLICY \"Users can view own data\" ON public.users\n  FOR SELECT USING (auth.uid() = id);
\n-- Restaurants: Owners can manage their restaurants
CREATE POLICY \"Owners can manage restaurants\" ON public.restaurants
  FOR ALL USING (auth.uid() = owner_id);

-- Menu items: Public can view, owners can manage
CREATE POLICY \"Public can view menu items\" ON public.menu_items
  FOR SELECT USING (TRUE);

CREATE POLICY \"Owners can manage menu items\" ON public.menu_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.restaurants\n      WHERE restaurants.id = menu_items.restaurant_id
AND restaurants.owner_id = auth.uid()
    )
  );

-- Orders: Customers can view their orders, owners/waiters can manage
CREATE POLICY \"Customers can view own orders\" ON public.orders
  FOR SELECT USING (auth.uid() = customer_id);\n
CREATE POLICY \"Owners can manage restaurant orders\" ON public.orders
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.restaurants
      WHERE restaurants.id = orders.restaurant_id
      AND restaurants.owner_id = auth.uid()
    )
  );

CREATE POLICY \"Waiters can view assigned orders\" ON public.orders
  FOR SELECT USING (auth.uid() = waiter_id);

-- Add more RLS policies as needed for other tables
```

**Step 3: Run SQL Query**
1. Click 'Run' to execute the SQL\n2. Verify tables created: Go to 'Table Editor' → You should see all tables listed
\n---

#### 9.2.4 Authentication Setup

**Step 1: Enable Authentication Providers**
1. Go to 'Authentication' → 'Providers'
2. Enable desired providers:
   - **Email**: Already enabled by default
   - **Google OAuth**: \n     - Toggle'Enable'\n     - Enter Google OAuth Client ID and Client Secret (get from Google Cloud Console)
     - Add authorized redirect URI: `https://your-project.supabase.co/auth/v1/callback`
   - **Apple OAuth**: 
     - Toggle 'Enable'
     - Enter Apple OAuth credentials (get from Apple Developer Console)
   - **Magic Link**: Already enabled by default (passwordless email login)
\n**Step 2: Configure Email Templates (Optional)**
1. Go to 'Authentication' → 'Email Templates'
2. Customize email templates for:
   - Confirmation email (sign up)
   - Magic link email (passwordless login)
   - Password reset email
   - Email change confirmation

**Step 3: Configure Authentication Settings**
1. Go to 'Authentication' → 'Settings'\n2. Configure:
   - **Site URL**: `https://dineqr.com` (your production domain)
   - **Redirect URLs**: Add allowed redirect URLs (e.g., `https://dineqr.com/auth/callback`, `http://localhost:3000/auth/callback` for development)
   - **JWT Expiry**: Default 3600 seconds (1 hour)\n   - **Refresh Token Rotation**: Enable for better security
\n---

#### 9.2.5 Storage Setup (for Image Uploads)

**Step 1: Create Storage Bucket**
1. Go to 'Storage' → Click 'Create a new bucket'
2. Fill in bucket details:
   - **Name**: 'menu-images' (for menu item images)
   - **Public bucket**: Toggle ON (images need to be publicly accessible)
   - **File size limit**: 5 MB (adjust as needed)
   - **Allowed MIME types**: image/jpeg, image/png, image/webp
3. Click 'Create bucket'
4. Repeat for other buckets:\n   - 'restaurant-logos' (for restaurant logos)
   - 'user-avatars' (for user profile pictures)
   - 'ebills' (for e-bill PDFs, set as private)

**Step 2: Configure Storage Policies**
1. Go to 'Storage' → Select bucket (e.g., 'menu-images') → 'Policies'
2. Create policies:
\n**Policy 1: Public Read Access**
```sql
CREATE POLICY \"Public can view images\"
ON storage.objects FOR SELECT
USING (bucket_id = 'menu-images');
```

**Policy 2: Authenticated Users Can Upload**
```sql
CREATE POLICY \"Authenticated users can upload images\"
ON storage.objects FOR INSERT
WITH CHECK(
  bucket_id = 'menu-images'\n  AND auth.role() = 'authenticated'
);
```

**Policy 3: Users Can Delete Own Uploads**
```sql
CREATE POLICY \"Users can delete own images\"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'menu-images'
  AND auth.uid() = owner\n);
```
\n3. Click 'Review' → 'Save policy'
\n---

#### 9.2.6 Real-Time Subscriptions Setup

**Step 1: Enable Real-Time for Tables**
1. Go to 'Database' → 'Replication'
2. Enable real-time for tables that need live updates:
   - ✅ `orders` (for real-time order updates)
   - ✅ `order_timeline` (for order status changes)
   - ✅ `waiters` (for waiter availability status)
   - ✅ `promotions` (for real-time promotion updates)
   - ✅ `chat_messages` (for real-time chat)\n3. Click 'Save'

**Step 2: Configure Real-Time Policies**
\nReal-time subscriptions respect Row Level Security (RLS) policies. Ensure RLS policies allow users to read data they should receive real-time updates for.

**Example: Subscribe to Order Updates (Frontend)**
```javascript
import { createClient } from '@supabase/supabase-js'\n
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Subscribe to order updates for specific order\nconst subscription = supabase
  .channel('order-updates')
  .on(\n    'postgres_changes',
    {
      event: 'UPDATE',
      schema: 'public',
      table: 'orders',
      filter: `id=eq.${orderId}`
    },
    (payload) => {
      console.log('Order updated:', payload.new)\n      // Update UI with new order data
    }
  )
  .subscribe()
\n// Unsubscribe when component unmounts
return () => {
  subscription.unsubscribe()
}
```

---

#### 9.2.7 Edge Functions Setup (Optional)

Edge Functions are serverless functions for backend logic (e.g., payment processing, e-bill generation, NLP processing).

**Step 1: Install Supabase CLI**
```bash
npm install -g supabase\n```

**Step 2: Login to Supabase CLI**
```bash
supabase login
```

**Step 3: Initialize Supabase Project**
```bash
supabase init
```\n
**Step 4: Create Edge Function**
```bash
supabase functions new generate-ebill
```

This creates a new function at `supabase/functions/generate-ebill/index.ts`

**Step 5: Write Function Code**
\nExample: E-Bill Generation Function
```typescript
// supabase/functions/generate-ebill/index.ts\nimport { serve } from 'https://deno.land/std@0.168.0/http/server.ts'\nimport { createClient } from 'https://esm.sh/@supabase/supabase-js@2'\n
serve(async (req) => {
  try {
    const { orderId } = await req.json()
\n    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Fetch order data
    const { data: order, error } = await supabaseClient
      .from('orders')
      .select('*, order_items(*, menu_items(*)), restaurants(*)')
      .eq('id', orderId)
      .single()

    if (error) throw error

    // Generate PDF (use jsPDF or similar library)
    // ... PDF generation logic ...

    // Upload PDF to Supabase Storage
    const pdfBuffer = generatePDF(order) // Your PDF generation function
    const fileName = `ebill-${orderId}.pdf`
    \n    const { data: uploadData, error: uploadError } = await supabaseClient
      .storage
      .from('ebills')
      .upload(fileName, pdfBuffer, {
        contentType: 'application/pdf',
        upsert: true
      })

    if (uploadError) throw uploadError
\n    // Get public URL\n    const { data: urlData } = supabaseClient\n      .storage
      .from('ebills')
      .getPublicUrl(fileName)\n
    // Save e-bill record
    await supabaseClient
      .from('ebills')
      .insert({
        order_id: orderId,
        bill_number: `BILL-${Date.now()}`,
        pdf_url: urlData.publicUrl\n      })

    return new Response(\n      JSON.stringify({ success: true, pdfUrl: urlData.publicUrl }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
```\n
**Step 6: Deploy Edge Function**
```bash
supabase functions deploy generate-ebill
```

**Step 7: Invoke Function from Frontend**
```javascript
const { data, error } = await supabase.functions.invoke('generate-ebill', {
  body: { orderId: '123' }\n})
```
\n---

#### 9.2.8 Connect Frontend to Supabase

**Step 1: Install Supabase Client**
```bash\nnpm install @supabase/supabase-js
```

**Step 2: Create Supabase Client**
\nCreate `src/lib/supabase.js`:
```javascript
import { createClient } from '@supabase/supabase-js'\n
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY\n
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**Step 3: Use Supabase in Components**

**Example: Fetch Menu Items**
```javascript
import { supabase } from '@/lib/supabase'

const fetchMenuItems = async (restaurantId) => {
  const { data, error } = await supabase
    .from('menu_items')
    .select('*, portions(*)')
    .eq('restaurant_id', restaurantId)\n    .eq('is_available', true)
\n  if (error) {\n    console.error('Error fetching menu items:', error)
    return []
  }

  return data
}
```

**Example: User Authentication**
```javascript
import { supabase } from '@/lib/supabase'
\n// Sign up with email
const signUp = async (email, password, fullName) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: 'customer'
      }
    }
  })

  if (error) throw error
  return data
}

// Sign in with email
const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password\n  })

  if (error) throw error
  return data
}
\n// Sign in with Google OAuth
const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  })

  if (error) throw error
}\n\n// Sign out
const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
\n// Get current user
const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
```

**Example: Upload Image to Storage**
```javascript
import { supabase } from '@/lib/supabase'
\nconst uploadMenuImage = async (file, menuItemId) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${menuItemId}-${Date.now()}.${fileExt}`\n  const filePath = `menu-images/${fileName}`
\n  // Upload file\n  const { data, error } = await supabase.storage\n    .from('menu-images')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) throw error
\n  // Get public URL
  const { data: urlData } = supabase.storage
    .from('menu-images')
    .getPublicUrl(filePath)

  return urlData.publicUrl
}
```

**Example: Real-Time Order Updates**
```javascript
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

const OrderTracking = ({ orderId }) => {
  const [order, setOrder] = useState(null)
\n  useEffect(() => {\n    // Fetch initial order data
    const fetchOrder = async () => {\n      const { data } = await supabase
        .from('orders')
        .select('*, order_timeline(*)')
        .eq('id', orderId)
        .single()
      
      setOrder(data)
    }\n\n    fetchOrder()
\n    // Subscribe to real-time updates
    const subscription = supabase
      .channel(`order-${orderId}`)
      .on(\n        'postgres_changes',\n        {
          event: '*',
          schema: 'public',
          table: 'orders',
          filter: `id=eq.${orderId}`
        },
        (payload) => {
          setOrder(payload.new)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'order_timeline',
          filter: `order_id=eq.${orderId}`
        },
        (payload) => {
          setOrder(prev => ({\n            ...prev,
            order_timeline: [...prev.order_timeline, payload.new]
          }))
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [orderId])

  return (
    <div>\n      <h2>Order #{order?.id}</h2>
      <p>Status: {order?.status}</p>
      {/* Display order timeline */}
    </div>
  )
}
```

---

#### 9.2.9 Supabase Environment Variables

Add Supabase credentials to your environment variables:

**Local Development (`.env.local`)**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Production (Netlify Environment Variables)**
1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (for server-side operations)

---
\n#### 9.2.10 Supabase Best Practices

**1. Security**
- **Never expose service_role key** in client-side code (use only in server-side functions)
- **Enable Row Level Security (RLS)** on all tables
- **Write specific RLS policies** for each user role (customer, owner, waiter)
- **Use anon key** for client-side requests (respects RLS policies)

**2. Performance**
- **Create indexes** on frequently queried columns (restaurant_id, customer_id, status)
- **Use select() with specific columns** instead of selecting all columns
- **Implement pagination** for large datasets (use `.range()` method)
- **Cache frequently accessed data** (menu items, promotions) in client-side storage

**3. Real-Time**
- **Subscribe only to necessary tables** to reduce WebSocket connections
- **Unsubscribe when component unmounts** to prevent memory leaks
- **Use filters** in subscriptions to receive only relevant updates

**4. Storage**
- **Optimize images** before upload (compress, resize, convert to WebP)
- **Set file size limits** in storage bucket settings
- **Use CDN URLs** from Supabase Storage for fast image delivery
- **Implement image lazy loading** in frontend

**5. Database**
- **Use transactions** for operations that modify multiple tables
- **Implement soft deletes** (add `deleted_at` column) instead of hard deletes for important data
- **Regular backups**: Supabase Pro plan includes automatic daily backups
- **Monitor database usage**: Check'Database' → 'Usage' in Supabase Dashboard

---
\n#### 9.2.11 Supabase Pricing & Limits

**Free Tier**
- 500 MB database space
- 1 GB file storage
- 2 GB bandwidth
- 50,000 monthly active users
- Unlimited API requests
- Community support

**Pro Tier ($25/month)**
- 8 GB database space
- 100 GB file storage
- 250 GB bandwidth
- 100,000 monthly active users
- Daily backups
- Email support
- No pausing (free tier projects pause after 1 week of inactivity)

**For DineQR**: Start with Free tier for development, upgrade to Pro for production when you have active users.

---

### 9.3 Deployment to Netlify

#### 9.3.1 Prerequisites
- **Netlify Account**: Sign up at https://www.netlify.com\n- **GitHub Repository**: Push code to GitHub repository
- **Environment Variables**: Prepare production environment variables (including Supabase credentials)
\n#### 9.3.2 Deployment Steps

**Method 1: Deploy via Netlify Dashboard (Recommended for First Deployment)**
\n**Step 1: Connect Repository**
1. Log in to Netlify Dashboard
2. Click'Add new site' → 'Import an existing project'
3. Select 'GitHub' → Authorize Netlify to access your repositories
4. Select `dineqr-pwa` repository
\n**Step 2: Configure Build Settings**
- **Base directory**: Leave empty (root)\n- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: `netlify/functions` (if using Netlify Functions)
\n**Step 3: Add Environment Variables**
1. Go to 'Site settings' → 'Environment variables'
2. Click 'Add a variable' and add all production environment variables:\n```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-production-service-role-key\nNEXT_PUBLIC_VAPID_PUBLIC_KEY=your-production-vapid-public-key\nVAPID_PRIVATE_KEY=your-production-vapid-private-key
... (add all other variables from .env.local)
```

**Step 4: Deploy**
1. Click 'Deploy site'\n2. Netlify will build and deploy your app
3. Once deployed, you'll get a URL like `https://dineqr-pwa.netlify.app`

**Step 5: Configure Custom Domain (Optional)**
1. Go to 'Domain settings' → 'Add custom domain'
2. Enter your domain (e.g., `dineqr.com`)
3. Follow instructions to configure DNS records
4. Netlify will automatically provision SSL certificate (HTTPS)

**Step 6: Enable HTTPS**
- Netlify automatically provisions SSL certificate via Let's Encrypt
- Verify HTTPS is enabled: Go to 'Domain settings' → 'HTTPS' → Should show 'Certificate active'

**Step 7: Configure Redirects & Headers**
\nCreate `netlify.toml` in root directory:
```toml
[build]
  command = \"npm run build\"
  publish = \".next\"

[[redirects]]
  from = \"/*\"
  to = \"/index.html\"
  status = 200
\n[[headers]]
  for = \"/*\"
  [headers.values]
    X-Frame-Options = \"DENY\"
    X-Content-Type-Options = \"nosniff\"
    X-XSS-Protection = \"1; mode=block\"
    Referrer-Policy = \"strict-origin-when-cross-origin\"\n    Content-Security-Policy = \"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co wss://*.supabase.co;\"
\n[[headers]]
  for = \"/manifest.json\"
  [headers.values]
    Content-Type = \"application/manifest+json\"
\n[[headers]]
  for = \"/sw.js\"\n  [headers.values]
    Cache-Control = \"public, max-age=0, must-revalidate\"
Service-Worker-Allowed = \"/\"
```
\nCommit and push `netlify.toml` to trigger redeployment.

**Step 8: Verify PWA Deployment**
1. Open deployed app in Chrome/Edge
2. Open DevTools → Lighthouse → Run audit
3. Verify PWA score is 90+ (should show 'Installable' badge)
4. Test installation: Click browser's install button
5. Test offline: Enable offline mode in DevTools, verify cached content loads
6. Test push notifications: Grant permissions, send test notification from backend
7. Test Supabase integration: Verify authentication, database queries, real-time updates, storage uploads work correctly

---
\n**Method 2: Deploy via Netlify CLI**

**Step 1: Install Netlify CLI**\n```bash
npm install -g netlify-cli
```

**Step 2: Login to Netlify**
```bash
netlify login
```

**Step 3: Initialize Netlify Site**
```bash
netlify init
```
Follow prompts:\n- Create & configure a new site
- Select team\n- Enter site name (e.g., `dineqr-pwa`)
- Build command: `npm run build`\n- Publish directory: `.next`

**Step 4: Add Environment Variables**
```bash\nnetlify env:set NEXT_PUBLIC_SUPABASE_URL https://your-project.supabase.co
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY your-anon-key
netlify env:set SUPABASE_SERVICE_ROLE_KEY your-service-role-key
... (add all other variables)\n```

**Step 5: Deploy**
```bash
# Deploy to production
netlify deploy --prod

# Or deploy to preview (draft)\nnetlify deploy\n```

**Step 6: Open Deployed Site**
```bash
netlify open:site
```

---

#### 9.3.3 Continuous Deployment (Auto-Deploy on Git Push)

Netlify automatically sets up continuous deployment when you connect your GitHub repository.

**How it works**:
1. Push code to GitHub repository
2. Netlify detects changes and triggers build
3. App is automatically built and deployed
4. Deployment URL remains the same

**Configure Branch Deploys**:
1. Go to 'Site settings' → 'Build & deploy' → 'Deploy contexts'
2. Configure which branches trigger deployments:\n   - **Production branch**: `main` (deploys to production URL)
   - **Branch deploys**: `develop`, `staging` (deploys to preview URLs)
   - **Deploy previews**: Enable for pull requests

**Deploy Notifications**:
1. Go to 'Site settings' → 'Build & deploy' → 'Deploy notifications'
2. Add notifications for:
   - Deploy started
   - Deploy succeeded
   - Deploy failed
3. Configure notification channels (Email, Slack, Webhook)

---

#### 9.3.4 Post-Deployment Checklist

-✅ **HTTPS Enabled**: Verify SSL certificate active, all requests use HTTPS
- ✅ **PWA Installable**: Test installation on mobile (Android, iOS) and desktop
- ✅ **Service Worker Registered**: Check DevTools → Application → Service Workers
- ✅ **Offline Functionality**: Test offline mode, verify cached content loads
- ✅ **Push Notifications**: Test push notifications on Android, desktop (iOS fallback)
- ✅ **Manifest Valid**: Check DevTools → Application → Manifest, verify all fields correct
- ✅ **Icons Loaded**: Verify all icon sizes (72x72 to 512x512) load correctly
- ✅ **Splash Screen**: Test splash screen on mobile installation
- ✅ **Performance**: Run Lighthouse audit, verify 90+ score on all metrics
- ✅ **SEO**: Verify meta tags, structured data, sitemap, robots.txt
- ✅ **Analytics**: Set up analytics (Google Analytics, Mixpanel) to track PWA installs, usage\n- ✅ **Error Monitoring**: Set up error monitoring (Sentry, LogRocket) to track errors
- ✅ **Custom Domain**: Configure custom domain (if applicable), verify DNS records
- ✅ **Environment Variables**: Verify all production environment variables set correctly
- ✅ **Supabase Integration**: Test authentication, database queries, real-time subscriptions, storage uploads
- ✅ **Payment Gateway**: Test payment flows (Stripe, Razorpay) in production
- ✅ **Real-Time Features**: Test WebSocket connections (Supabase Realtime), real-time updates
- ✅ **Cross-Browser Testing**: Test on Chrome, Firefox, Safari, Edge
- ✅ **Cross-Device Testing**: Test on mobile (Android, iOS), tablet, desktop
\n---

#### 9.3.5 Troubleshooting Common Issues
\n**Issue 1: Service Worker Not Registering**
- **Cause**: HTTPS not enabled or service worker file not found
- **Solution**: \n  - Verify HTTPS is enabled (check for padlock icon in browser)
  - Check service worker file path in `next.config.js`
  - Clear browser cache and reload

**Issue 2: PWA Not Installable**
- **Cause**: Manifest missing, invalid, or service worker not registered
- **Solution**: \n  - Check DevTools → Application → Manifest for errors
  - Verify manifest.json includes all required fields (name, icons, start_url, display)\n  - Verify service worker registered successfully
  - Run Lighthouse audit to identify issues

**Issue 3: Push Notifications Not Working**
- **Cause**: VAPID keys missing, notification permissions denied, or iOS limitations
- **Solution**: 
  - Verify VAPID keys set in environment variables
  - Check notification permissions in browser settings
  - For iOS: Use WebSocket fallback for real-time updates
  - Test on Android/desktop first (better Web Push support)

**Issue 4: Offline Mode Not Working**
- **Cause**: Service worker caching strategy misconfigured
- **Solution**: 
  - Check service worker caching strategies in Workbox config
  - Verify static assets cached correctly
  - Test with DevTools → Network → Offline mode
  - Clear cache and re-cache assets

**Issue 5: Build Fails on Netlify**
- **Cause**: Missing dependencies, environment variables, or build command incorrect
- **Solution**: 
  - Check build logs in Netlify dashboard for errors
  - Verify all dependencies in `package.json`
  - Verify build command is `npm run build`
  - Verify environment variables set correctly
  - Test build locally: `npm run build`

**Issue 6: Supabase Connection Fails**
- **Cause**: Incorrect Supabase URL/keys, CORS issues, or RLS policies blocking requests
- **Solution**: 
  - Verify Supabase URL and keys in environment variables
  - Check Supabase Dashboard → Settings → API for correct credentials
  - Verify RLS policies allow access for authenticated users
  - Check browser console for CORS errors
  - Test Supabase connection with simple query (e.g., fetch menu items)

**Issue 7: Real-Time Subscriptions Not Working**
- **Cause**: Real-time not enabled for table, RLS policies blocking, or WebSocket connection failed
- **Solution**: 
  - Verify real-time enabled: Supabase Dashboard → Database → Replication
  - Check RLS policies allow SELECT access for subscribed table
  - Verify WebSocket connection in browser DevTools → Network → WS tab
  - Test with simple subscription (e.g., subscribe to orders table)

**Issue 8: Image Upload Fails**
- **Cause**: Storage bucket not created, storage policies missing, or file size exceeds limit
- **Solution**: 
  - Verify storage bucket exists: Supabase Dashboard → Storage\n  - Check storage policies allow INSERT for authenticated users
  - Verify file size within bucket limit (default 5MB)
  - Check browser console for upload errors
  - Test with small image file first

---

#### 9.3.6 Performance Optimization for Production

**1. Enable Netlify CDN**
- Netlify automatically serves static assets via global CDN
- Verify CDN headers: Check response headers for `x-nf-request-id`
\n**2. Enable Asset Optimization**
- Go to 'Site settings' → 'Build & deploy' → 'Post processing'
- Enable:\n  - **Bundle CSS**: Minify CSS files
  - **Minify JS**: Minify JavaScript files
  - **Compress images**: Optimize images automatically
  - **Pretty URLs**: Remove `.html` extensions
\n**3. Configure Caching Headers**
- Add caching headers in `netlify.toml`:
```toml
[[headers]]\n  for = \"/static/*\"
  [headers.values]
    Cache-Control = \"public, max-age=31536000, immutable\"
\n[[headers]]
  for = \"/*.js\"
  [headers.values]
    Cache-Control = \"public, max-age=31536000, immutable\"

[[headers]]
  for = \"/*.css\"
  [headers.values]
    Cache-Control = \"public, max-age=31536000, immutable\"
```

**4. Enable Brotli Compression**
- Netlify automatically enables Brotli compression for supported browsers
- Verify compression: Check response headers for `content-encoding: br`

**5. Optimize Images**
- Use Next.js Image component for automatic optimization
- Serve images in WebP format with JPEG fallback
- Use responsive images (srcset) for different screen sizes
- Lazy load images below the fold
- Use Supabase Storage CDN for fast image delivery

**6. Code Splitting**
- Next.js automatically code-splits by route
- Use dynamic imports for large components:\n```javascript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});
```

**7. Monitor Performance**
- Set up Netlify Analytics to track performance metrics
- Run Lighthouse audits regularly
- Monitor Core Web Vitals (LCP, FID, CLS)
- Use Netlify's built-in performance monitoring
- Monitor Supabase usage: Dashboard → Usage\n
---

## 10. Future Enhancements (PWA)\n
- **Advanced Offline Mode**: Full offline ordering with queue and sync when connection restored
- **Voice Ordering**: Voice commands for ordering via Web Speech API
- **Augmented Reality Menu**: AR view of menu items using WebXR API (experimental)
- **Wearable Support**: Smartwatch notifications via Web Bluetooth API (experimental)
- **Multi-Language Support**: Support for multiple languages with i18n
- **Advanced Analytics**: Detailed analytics dashboard with AI-powered insights
- **Integration with Delivery Platforms**: Integrate with Uber Eats, DoorDash, Swiggy, Zomato
- **Table Reservation System**: Book tables via PWA\n- **Kitchen Display System (KDS)**: Dedicated KDS PWA for kitchen staff
- **Customer Feedback Analysis**: AI-powered sentiment analysis of customer feedback
- **Gamification**: Loyalty points, badges, leaderboards
- **AI-Powered Waiter Assignment**: Machine learning algorithm for optimal waiter assignment
- **Dynamic Pricing with Promotions**: AI adjusts promotion values in real-time
- **Advanced NLP Features**: Contextual understanding, multi-turn conversations, sentiment analysis
- **Advanced E-Bill Features**: Multiple templates, multi-language e-bills, digital signatures
- **Advanced Image Upload Features**: AI-powered image tagging, quality analysis, background removal
- **Progressive Enhancement**: Gradually enhance PWA with new Web APIs as they become available (Web Bluetooth, WebXR, Web NFC, etc.)
- **Animated Icon**: Explore animated app icon for supported platforms (Android)\n- **Dynamic Flash Screen**: Personalized flash screen based on user role (customer/owner/waiter)
- **Supabase Edge Functions**: Expand use of Edge Functions for complex backend logic (payment processing, advanced analytics, AI integrations)
- **Supabase Realtime Presence**: Track online/offline status of waiters and customers in real-time
\n---

**End of Requirements Document**