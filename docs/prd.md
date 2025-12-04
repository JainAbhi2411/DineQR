# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Currency & Timezone Auto-Application)

## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced schema support (including half/full portion options), AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, personalized restaurant dashboard for quick reordering, complete staff management with attendance tracking and performance analytics, advanced marketing and promotions system with campaign management, and comprehensive settings module for restaurant configuration with automatic currency and timezone application across the entire platform - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface. **All data displayed across the platform is real-time and dynamically calculated from the live database, including revenue, sales analytics, order statistics, inventory levels, staff performance metrics, and campaign analytics. Currency and timezone settings are automatically applied system-wide upon changes.**

## 2. Advanced Authentication System

(Content remains the same as previous document)

## 3. Enhanced Core Features

### 3.1 Advanced Restaurant Owner Features

#### 3.1.1 Owner Home Screen with Zomato-Style Layout and Real-Time Data Integration

(Content remains the same as previous document)\n
#### 3.1.2 Advanced Menu Management System\n
(Content remains the same as previous document)

#### 3.1.3 Advanced Inventory Management

(Content remains the same as previous document)

#### 3.1.4 Enhanced QR Code Management

(Content remains the same as previous document)

#### 3.1.5 Advanced Order Management Dashboard with Enhanced Order Cards and Real-Time Auto-Refresh

(Content remains the same as previous document)\n
#### 3.1.6 Enhanced Payment Management for Restaurant Owners

(Content remains the same as previous document)

#### 3.1.7 Waiter/Agent Assignment System\n
(Content remains the same as previous document)

#### 3.1.8 Real-Time Communication Hub

(Content remains the same as previous document)

#### 3.1.9 Advanced Analytics & Reports with Real-Time Data\n
(Content remains the same as previous document)

#### 3.1.10 Complete Staff Management System (FULLY FUNCTIONAL)

(Content remains the same as previous document)

#### 3.1.11 Complete Marketing & Promotions System (FULLY FUNCTIONAL)

(Content remains the same as previous document)

#### 3.1.12 Complete Settings Module (FULLY FUNCTIONAL) - Updated with Auto-Application

**Overview**:
Comprehensive settings module accessible from sidebar navigation, providing restaurant owners with complete control over restaurant configuration, operating hours, payment settings, notification preferences, security settings, user preferences, and system settings. **All settings are stored in the database and applied in real-time across the platform. Currency and timezone changes are automatically propagated to all modules, displays, and calculations throughout the entire application without requiring page refresh or manual updates.**

**Key Features**:
\n**A. Restaurant Profile Settings**\n\n(Content same as previous document)

**B. Operating Hours Settings**

(Content same as previous document)

**C. Payment Settings**
\n(Content same as previous document, with updated Currency Settings below)

- **Currency Settings (Auto-Application Enabled)**:
  - Select currency (dropdown with all currencies: USD, EUR, GBP, INR, JPY, CNY, AUD, CAD, etc.)
  - Currency symbol (auto-filled based on selected currency, e.g., $, €, £, ₹, ¥)\n  - Currency format (auto-filled based on selected currency, e.g., $1,234.56 or 1.234,56 €)
  - Decimal places (number input, default: 2, configurable for currencies like JPY with 0 decimal places)
  - **Auto-Application Mechanism**:
    - Upon saving currency changes, system immediately updates currency display across all modules:\n      - **Menu Management**: All item prices displayed in new currency symbol and format
      - **Order Management**: Order totals, subtotals, taxes, discounts displayed in new currency
      - **Payment Dashboard**: All payment amounts, revenue figures displayed in new currency
      - **Analytics & Reports**: All financial metrics, charts, revenue graphs displayed in new currency
      - **Staff Management**: Salary amounts, bonuses, deductions, payroll displayed in new currency
      - **Marketing & Promotions**: Campaign budgets, revenue generated, discount amounts displayed in new currency
      - **Customer App**: All prices, order totals, payment amounts displayed in new currency
      - **E-Bills & Invoices**: All generated bills and invoices use new currency\n      - **Email/SMS Notifications**: All monetary values in notifications use new currency
    - **Real-Time Update**: Currency change triggers WebSocket broadcast to all active sessions (owner, staff, customers), causing immediate UI update without page refresh
    - **Database Update**: All currency-related display logic queries the restaurant's currency setting from database in real-time
    - **Conversion Handling**: If owner changes currency, system does NOT auto-convert existing prices (e.g., $10 does not become €9.20). Owner must manually update prices if needed. System only updates the display symbol and format.\n    - **Historical Data**: Past orders and transactions retain their original currency for record-keeping, but can be viewed with conversion rates if needed (optional feature)
  - **Currency Conversion Tool** (optional):
    - If owner changes currency, system offers optional bulk price conversion tool
    - Owner can choose to convert all menu prices using current exchange rates
    - Confirmation dialog before applying conversion
    - Conversion history logged for audit\n
**D. Notification Settings**

(Content same as previous document)

**E. Security Settings**

(Content same as previous document)

**F. User Preferences (Updated with Timezone Auto-Application)**

- **Language Settings**:
  - Select interface language (dropdown: English, Spanish, French, German, Chinese, Hindi, etc.)
  - Date format (dropdown: MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)\n  - Time format (dropdown:12-hour, 24-hour)\n  - Number format (dropdown: 1,234.56 or 1.234,56)\n\n- **Timezone Settings (Auto-Application Enabled)**:
  - Select restaurant timezone (dropdown with all timezones: UTC, EST, PST, IST, GMT, CET, JST, AEST, etc.)
  - Display timezone name and UTC offset (e.g., 'Eastern Standard Time (UTC-5)')
  - **Auto-Application Mechanism**:
    - Upon saving timezone changes, system immediately updates all timestamps across all modules:
      - **Order Management**: Order creation time, status update times, delivery times displayed in new timezone
      - **Staff Management**: Clock-in/out times, shift timings, attendance records displayed in new timezone
      - **Analytics & Reports**: All date-time filters, report timestamps, chart x-axis labels displayed in new timezone\n      - **Marketing & Promotions**: Campaign start/end times, email send times, notification schedules displayed in new timezone
      - **Operating Hours**: Restaurant opening/closing times displayed in new timezone
      - **Customer App**: Order history timestamps, estimated delivery times displayed in new timezone
      - **Notifications**: All email, SMS, push notification timestamps displayed in new timezone
      - **Audit Logs**: All system logs and activity timestamps displayed in new timezone
    - **Real-Time Update**: Timezone change triggers WebSocket broadcast to all active sessions, causing immediate UI update without page refresh\n    - **Database Storage**: All timestamps stored in database in UTC format for consistency. Display conversion to selected timezone happens at query/render time.
    - **Relative Time Display**: Relative time labels (e.g., '2 hours ago', 'Just now') automatically recalculate based on new timezone
    - **Scheduled Tasks**: All scheduled tasks (campaign launches, shift reminders, automated emails) automatically adjust to new timezone
    - **Calendar Views**: All calendar components (shift calendar, attendance calendar, campaign calendar) automatically update to display dates/times in new timezone
  - **Daylight Saving Time (DST) Handling**:
    - System automatically adjusts for DST transitions based on selected timezone
    - No manual intervention required during DST changes
    - Historical timestamps remain accurate across DST transitions

- **Theme Settings**:
  - Select theme (dropdown: Dark Mode, Light Mode, Auto - based on system preference)
  - Accent color (color picker, customize primary accent color)
  - Font size (dropdown: Small, Medium, Large, Extra Large)
\n- **Dashboard Preferences**:
  - Default dashboard view (dropdown: Owner Home Screen, Orders, Analytics, etc.)
  - Widget customization (drag-and-drop to rearrange dashboard widgets)
  - Show/hide widgets (checkboxes to toggle visibility of specific widgets)
\n- **Accessibility Settings**:\n  - High contrast mode (toggle)\n  - Reduce motion (toggle, disable animations for users with motion sensitivity)
  - Screen reader support (toggle)
  - Keyboard navigation (toggle, enable keyboard shortcuts)

**G. Integration Settings**

(Content same as previous document)

**H. System Settings**

(Content same as previous document)

**I. Billing & Subscription Settings**

(Content same as previous document)\n
**J. Help & Support Settings**

(Content same as previous document)
\n**K. Advanced Settings**\n
(Content same as previous document)

---

### 3.2 Enhanced Customer Features

(All customer features remain the same as previous document, with all data real-time from database. **All prices and timestamps displayed to customers automatically reflect the restaurant's selected currency and timezone settings.**)

## 4. Complete User Flows

(All user flows remain the same as previous document, with all data real-time from database)

## 5. Advanced Design System with Futuristic UI Specifications

(All design system specifications remain the same as previous document)
\n## 6. Technical Considerations

**6.1 Currency and Timezone Implementation**

- **Currency Handling**:
  - Store restaurant's selected currency in'restaurants' table (currency_code, currency_symbol, currency_format, decimal_places)
  - All monetary values in database stored as DECIMAL type for precision
  - Display layer queries restaurant's currency settings and formats values accordingly
  - Use JavaScript Intl.NumberFormat API for client-side currency formatting
  - Server-side formatting using locale-aware libraries (e.g., Python's babel, Node.js's Intl)
  - WebSocket event'currency_updated' broadcast to all active sessions on currency change
  - Client-side listeners update all displayed monetary values without page refresh

- **Timezone Handling**:
  - Store restaurant's selected timezone in 'restaurants' table (timezone_name, timezone_offset)
  - All timestamps in database stored in UTC format (DATETIME or TIMESTAMP type)
  - Display layer converts UTC timestamps to restaurant's timezone using timezone libraries (e.g., moment-timezone, date-fns-tz, pytz)
  - Use JavaScript Intl.DateTimeFormat API for client-side date/time formatting
  - WebSocket event 'timezone_updated' broadcast to all active sessions on timezone change
  - Client-side listeners recalculate and update all displayed timestamps without page refresh
  - Scheduled tasks (cron jobs) use restaurant's timezone for execution timing

- **Real-Time Synchronization**:
  - WebSocket connection maintains live sync between server and all clients
  - Settings changes trigger immediate broadcast to all connected sessions
  - Client-side state management (e.g., Redux, Vuex) updates global currency/timezone state
  - All components reactively re-render with new currency/timezone settings
\n- **Performance Optimization**:
  - Cache restaurant settings in memory (Redis) for fast access
  - Minimize database queries by fetching settings once per session
  - Use efficient date/time libraries to avoid performance bottlenecks
  - Lazy load timezone data to reduce initial bundle size
\n(Other technical considerations remain the same as previous document)
\n## 7. Future Enhancements

(Content remains the same as previous document)\n
## 8. Design Style\n
**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan, vibrant magenta, electric blue), glassmorphism effects (frosted glass cards with background blur and semi-transparent backgrounds), smooth gradients, multi-layered UI with floating elements, subtle shadows, and 3D effects.\n
**Typography**: Orbitron Bold/Exo 2 Bold for headings, Poppins Regular/Inter Regular for body text, Orbitron Medium for buttons and interactive labels. Font colors: White or light grey on dark backgrounds, neon colors for emphasis.

**Color Palette**:
- Background: Deep charcoal grey (#1A1A1A) or dark blue (#0D1B2A)
- Primary Accent: Electric cyan (#00F0FF)\n- Secondary Accent: Vibrant magenta (#FF006E)
- Tertiary Accent: Electric blue (#3A86FF)
- Success: Neon green (#39FF14)
- Warning: Neon yellow (#FFFF00)
- Error: Neon red (#FF073A)
- Text: White (#FFFFFF) or light grey (#E0E0E0)
\n**UI Components**: Glassmorphism cards with frosted glass effect, neon gradient borders, rounded corners (12-16px border radius), subtle shadows with neon glow, futuristic buttons with neon gradients and hover effects (scale and glow), animated counters for real-time data updates, smooth transitions (300ms ease-in-out), interactive elements with neon borders and glow on hover/focus.

**Animations**: Slide-in animations for new orders (500ms bounce), pulsing glow for notification badges, shake animation for notification bell (500ms rotation keyframes), ripple effect for button clicks, smooth page transitions without full reload (client-side routing), loading animations with neon spinners, skeleton screens for data loading.\n
**Responsive Design**: Mobile-first approach, collapsible sidebar on mobile (hamburger menu), adaptive grid layouts (3columns on desktop, 2 on tablet, 1 on mobile), touch-friendly buttons and inputs (minimum 44px height), optimized for all screen sizes.

---

**End of Requirements Document**