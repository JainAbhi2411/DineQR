# DineQR - Advanced Restaurant Digital Menu & Order Management System Requirements Document (Updated - Complete Staff Management, Promotions & Settings)\n
## 1. Application Overview

### 1.1 Application Name
DineQR - Enterprise-Grade Smart Restaurant Management & Customer Engagement Platform

### 1.2 Application Description
A comprehensive, enterprise-level digital restaurant ecosystem with a cutting-edge futuristic UI that revolutionizes the complete dining experience. The platform provides advanced authentication, real-time notifications with automatic page updates, real-time communication, intelligent order management, and seamless coordination between restaurant owners, staff (waiters/agents), and customers. Features include multi-level user authentication with role-based conditional homepage/dashboard rendering, dynamic menu management with enhanced schema support (including half/full portion options), AI-powered recommendations, real-time chat system, waiter assignment automation, advanced inventory tracking, integrated payment processing, instant order notifications without page refresh, automatic real-time order timeline updates on both customer and owner dashboards, detailed order tracking with complete timelines, e-bill generation, personalized restaurant dashboard for quick reordering, **complete staff management with attendance tracking and performance analytics**, **advanced marketing and promotions system with campaign management**, and **comprehensive settings module for restaurant configuration** - creating a unified platform that manages every aspect from customer arrival to post-dining feedback, all wrapped in a sleek, modern, futuristic interface. **All data displayed across the platform is real-time and dynamically calculated from the live database, including revenue, sales analytics, order statistics, inventory levels, staff performance metrics, and campaign analytics.**

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

(Content remains the same as previous document)
\n#### 3.1.6 Enhanced Payment Management for Restaurant Owners

(Content remains the same as previous document)

#### 3.1.7 Waiter/Agent Assignment System\n
(Content remains the same as previous document)

#### 3.1.8 Real-Time Communication Hub

(Content remains the same as previous document)

#### 3.1.9 Advanced Analytics & Reports with Real-Time Data\n
(Content remains the same as previous document)

#### 3.1.10 Complete Staff Management System (FULLY FUNCTIONAL)

**Overview**:
Comprehensive staff management module accessible from sidebar navigation, providing restaurant owners with complete control over employee lifecycle management, attendance tracking, shift scheduling, performance monitoring, payroll integration, and role-based access control. **All staff data is real-time from the live database with automatic updates.**

**Key Features**:
\n**A. Staff Database & Profile Management (Real-Time)**\n\n- **All Staff View**:
  - **Data Grid Display** (real-time from database):
    - Database query: SELECT staff.*, roles.role_name, departments.department_name, COUNT(DISTINCT shifts.shift_id) as total_shifts, AVG(performance_reviews.rating) as avg_rating FROM staff LEFT JOIN roles ON staff.role_id = roles.role_id LEFT JOIN departments ON staff.department_id = departments.department_id LEFT JOIN shifts ON staff.staff_id = shifts.staff_id LEFT JOIN performance_reviews ON staff.staff_id = performance_reviews.staff_id WHERE staff.restaurant_id = CURRENT_RESTAURANT GROUP BY staff.staff_id\n    - Columns: Profile Photo, Employee ID, Name, Role, Department, Contact, Status (Active/Inactive/On Leave), Hire Date, Total Shifts, Avg Rating, Actions
    - **Real-time status updates**: Staff status changes reflect immediately via WebSocket
    - Sortable columns (click header to sort)
    - Search bar (search by name, employee ID, role, department)
    - Filter options: Role, Department, Status, Hire Date Range
    - Pagination (50 staff per page)
  - **Staff Cards View** (alternative layout, grid of cards):
    - Each card displays: Profile photo, name, role, employee ID, contact, status badge, quick actions (View, Edit, Delete)
    - Glassmorphism design with neon borders\n    - Hover effect: Scale and glow\n  - **Quick Actions**:
    - View Profile (opens detailed profile modal)
    - Edit Staff (opens edit form)
    - Deactivate/Activate Staff (toggle status)
    - Delete Staff (with confirmation dialog)
  - **Bulk Actions**:
    - Select multiple staff (checkboxes)
    - Bulk operations: Send Message, Assign Shift, Export Data, Deactivate\n  - **Export Options**: Export staff list to CSV, Excel, or PDF
\n- **Add New Staff**:
  - **Registration Form** (multi-step wizard with futuristic design):
    - **Step 1: Basic Information**:\n      - Profile photo upload (drag-and-drop, recommended size: 400x400px)
      - First name (required, max 50 characters)
      - Last name (required, max 50 characters)
      - Employee ID (auto-generated or manual, unique, required)
      - Date of birth (date picker)\n      - Gender (dropdown: Male, Female, Other, Prefer not to say)
      - Nationality (dropdown with country list)
    - **Step 2: Contact Information**:
      - Email address (required, unique, with validation)
      - Phone number (required, with country code selector)
      - Emergency contact name (required)\n      - Emergency contact phone (required)
      - Current address (text area, max 200 characters)
      - City, State, Postal Code, Country\n    - **Step 3: Employment Details**:
      - Role (dropdown: Waiter, Chef, Manager, Cashier, Bartender, Host, Kitchen Staff, Cleaner, Security, Other)
      - Department (dropdown: Front of House, Kitchen, Bar, Management, Administration, Maintenance)\n      - Hire date (date picker, default: today)
      - Employment type (dropdown: Full-Time, Part-Time, Contract, Temporary, Intern)
      - Salary type (dropdown: Hourly, Monthly, Fixed)\n      - Salary amount (number input with currency symbol)
      - Probation period (number input, days)
      - Reporting manager (dropdown, select from existing staff)
    - **Step 4: Access & Permissions**:
      - Login credentials setup:\n        - Username (auto-generated from email or manual)\n        - Temporary password (auto-generated, sent via email)
        - Require password change on first login (checkbox, default: checked)
      - Role-based permissions (checkboxes):
        - View Orders\n        - Update Order Status
        - Access Customer Chat
        - View Menu
        - Edit Menu (Manager only)
        - View Inventory
        - Update Inventory (Manager only)
        - View Reports (Manager only)
        - Manage Staff (Manager only)
      - Access level (dropdown: Basic, Standard, Advanced, Admin)
    - **Step 5: Documents & Certifications** (optional):
      - ID proof upload (PDF, JPG, PNG, max 5MB)
      - Resume/CV upload (PDF, DOC, max 10MB)
      - Certifications upload (Food Safety, Hygiene, etc., multiple files)
      - Background check status (dropdown: Pending, Completed, Not Required)
    - **Step 6: Additional Information** (optional):
      - Skills (multi-select tags: Customer Service, Cooking, Bartending, Cash Handling, etc.)
      - Languages spoken (multi-select)\n      - Previous experience (text area, max 500 characters)
      - Notes (text area, max 500 characters)
  - **Form Validation**: Real-time validation with error messages
  - **Save as Draft**: Save incomplete form and resume later
  - **Submit**: Insert staff record into database, send invitation email with login credentials
  - **Success Notification**: Confirmation message with staff details, option to add another staff or view staff list

- **Staff Profile View** (Detailed Modal or Page):
  - **Profile Header** (glassmorphism card with neon gradient border):
    - Large profile photo (200x200px, circular with neon border)
    - Name (Orbitron Bold, 28px, white color)
    - Role & Department (Poppins Regular, 16px, light grey)
    - Employee ID (digital style, 14px, neon cyan)
    - Status badge (Active/Inactive/On Leave, color-coded with glow)
    - Quick actions: Edit Profile, Send Message, View Schedule, Deactivate
  - **Profile Tabs** (horizontal tabs with glassmorphism design):
    - **Overview Tab**:
      - Personal Information: DOB, Gender, Nationality, Contact, Address
      - Employment Information: Hire Date, Employment Type, Salary, Reporting Manager
      - Emergency Contact: Name, Phone\n      - Documents: List of uploaded documents with download links
    - **Attendance Tab** (real-time from database):
      - **Monthly Attendance Calendar** (visual calendar with color-coded days):
        - Database query: SELECT attendance_date, clock_in_time, clock_out_time, total_hours, status FROM attendance WHERE staff_id = CURRENT_STAFF_ID AND MONTH(attendance_date) = CURRENT_MONTH
        - Green: Present, Red: Absent, Yellow: Half Day, Blue: Leave, Grey: Off Day
        - Click on date to view detailed attendance record
      - **Attendance Summary** (real-time calculated):
        - Total working days (real-time count from database)
        - Days present (real-time count)\n        - Days absent (real-time count)
        - Leaves taken (real-time count)
        - Total hours worked (real-time sum from database)
        - Average hours per day (real-time calculated)
      - **Attendance Records Table** (real-time from database):
        - Columns: Date, Clock In, Clock Out, Total Hours, Status, Notes
        - Sortable and filterable
        - Export to CSV/Excel
    - **Shifts Tab** (real-time from database):
      - **Upcoming Shifts** (real-time from database):
        - Database query: SELECT shifts.*, shift_types.shift_name FROM shifts JOIN shift_types ON shifts.shift_type_id = shift_types.shift_type_id WHERE shifts.staff_id = CURRENT_STAFF_ID AND shifts.shift_date >= CURDATE() ORDER BY shifts.shift_date ASC
        - List of upcoming shifts with date, time, shift type, location\n      - **Shift History** (real-time from database):
        - Past shifts with date, time, shift type, hours worked
        - Filter by date range
      - **Shift Calendar View**: Visual calendar showing assigned shifts
      - **Request Shift Change**: Button to request shift swap or time-off
    - **Performance Tab** (real-time from database):
      - **Performance Metrics** (real-time calculated):
        - **Average Rating** (real-time from performance reviews in database):
          - Database query: SELECT AVG(rating) FROM performance_reviews WHERE staff_id = CURRENT_STAFF_ID\n          - Display as star rating with neon yellow glow
        - **Total Orders Handled** (real-time count from database):
          - Database query: SELECT COUNT(order_id) FROM orders WHERE assigned_waiter_id = CURRENT_STAFF_ID
        - **Customer Feedback Score** (real-time average from customer reviews):
          - Database query: SELECT AVG(rating) FROM customer_feedback WHERE staff_id = CURRENT_STAFF_ID
        - **Punctuality Score** (real-time calculated from attendance):
          - Database query: SELECT (COUNT(CASE WHEN clock_in_time <= shift_start_time THEN 1 END) * 100.0 / COUNT(attendance_id)) as punctuality FROM attendance WHERE staff_id = CURRENT_STAFF_ID
      - **Performance Reviews** (real-time from database):
        - List of performance reviews with date, reviewer, rating, comments
        - Add new review button (for managers)
      - **Performance Chart**: Line graph showing performance trend over time (real-time data)
    - **Payroll Tab** (real-time from database):
      - **Salary Information**: Current salary, salary type, payment frequency\n      - **Payroll History** (real-time from database):
        - Database query: SELECT payroll_date, gross_salary, deductions, net_salary, payment_status FROM payroll WHERE staff_id = CURRENT_STAFF_ID ORDER BY payroll_date DESC
        - Table with columns: Date, Gross Salary, Deductions, Net Salary, Payment Status
        - Download payslip button (PDF generation)
      - **Bonus & Incentives** (real-time from database):
        - List of bonuses received with date, amount, reason
    - **Leave Tab** (real-time from database):
      - **Leave Balance** (real-time calculated):
        - Database query: SELECT leave_type, total_leaves, leaves_taken, leaves_remaining FROM leave_balance WHERE staff_id = CURRENT_STAFF_ID\n        - Display leave types (Sick Leave, Casual Leave, Annual Leave, etc.) with remaining balance
      - **Leave History** (real-time from database):
        - Database query: SELECT leave_date, leave_type, status, reason FROM leave_requests WHERE staff_id = CURRENT_STAFF_ID ORDER BY leave_date DESC
        - Table with columns: Date, Leave Type, Status (Approved/Pending/Rejected), Reason
      - **Request Leave**: Button to open leave request form
    - **Activity Log Tab** (real-time from database):
      - **Recent Activities** (real-time from database):\n        - Database query: SELECT activity_type, activity_description, timestamp FROM activity_logs WHERE staff_id = CURRENT_STAFF_ID ORDER BY timestamp DESC LIMIT 50
        - List of recent actions: Login, Order Updated, Shift Completed, etc.
        - Timestamp with relative time (e.g., '2 hours ago')
\n- **Edit Staff**:
  - Pre-filled form with existing staff data
  - Same fields as Add New Staff form
  - Update button to save changes to database
  - Real-time validation\n  - Success notification on update

- **Deactivate/Activate Staff**:
  - Toggle staff status between Active and Inactive
  - Confirmation dialog before deactivation
  - Inactive staff cannot login but data is retained
  - Reactivation restores access\n
- **Delete Staff**:
  - Permanent deletion with confirmation dialog
  - Warning: All associated data (attendance, shifts, performance) will be deleted
  - Soft delete option: Mark as deleted but retain data for records
\n**B. Roles & Permissions Management (Real-Time)**

- **Roles List** (real-time from database):
  - Database query: SELECT roles.*, COUNT(staff.staff_id) as staff_count FROM roles LEFT JOIN staff ON roles.role_id = staff.role_id WHERE roles.restaurant_id = CURRENT_RESTAURANT GROUP BY roles.role_id
  - Table displaying: Role Name, Description, Staff Count, Permissions Summary, Actions
  - Default roles: Owner, Manager, Waiter, Chef, Cashier, Bartender, Host, Kitchen Staff\n  - Custom roles can be created\n\n- **Add/Edit Role**:
  - Role name (required, max 50 characters)
  - Role description (optional, max 200 characters)
  - **Permissions Matrix** (checkboxes for granular permissions):
    - **Orders**: View Orders, Create Orders, Update Order Status, Cancel Orders, View Order History
    - **Menu**: View Menu, Add Menu Items, Edit Menu Items, Delete Menu Items, Manage Categories
    - **Inventory**: View Inventory, Update Stock Levels, Add Suppliers, Manage Inventory
    - **Staff**: View Staff, Add Staff, Edit Staff, Delete Staff, Manage Roles, View Attendance, Manage Shifts
    - **Customers**: View Customers, Manage Loyalty Program, View Feedback, Respond to Reviews
    - **Payments**: View Payments, Process Payments, View Payment History, Manage Payment Methods
    - **Reports**: View Sales Reports, View Analytics, Export Data, View Financial Reports
    - **Settings**: Manage Restaurant Profile, Update Operating Hours, Configure Payment Settings, Manage Notifications
    - **Marketing**: Create Campaigns, Manage Offers, Send Emails/SMS, View Campaign Analytics
  - Save role to database\n  - Assign role to staff members
\n- **Delete Role**:
  - Confirmation dialog
  - Cannot delete role if assigned to active staff (must reassign first)
\n**C. Shift Scheduling & Management (Real-Time)**

- **Shift Calendar View** (real-time from database):
  - **Visual Calendar** (monthly or weekly view):
    - Database query: SELECT shifts.*, staff.name, shift_types.shift_name, shift_types.start_time, shift_types.end_time FROM shifts JOIN staff ON shifts.staff_id = staff.staff_id JOIN shift_types ON shifts.shift_type_id = shift_types.shift_type_id WHERE shifts.restaurant_id = CURRENT_RESTAURANT AND MONTH(shifts.shift_date) = CURRENT_MONTH
    - Each day shows assigned shifts with staff names and shift times
    - Color-coded by shift type (Morning: Yellow, Afternoon: Orange, Evening: Purple, Night: Blue)
    - Click on shift to view details or edit
    - Drag-and-drop to reassign shifts
  - **Filter Options**: Filter by staff, shift type, department\n  - **View Modes**: Month, Week, Day, List
\n- **Shift Types Management**:
  - **Predefined Shift Types** (real-time from database):\n    - Database query: SELECT * FROM shift_types WHERE restaurant_id = CURRENT_RESTAURANT
    - Morning Shift (e.g., 6:00 AM - 2:00 PM)
    - Afternoon Shift (e.g., 2:00 PM - 10:00 PM)
    - Evening Shift (e.g., 10:00 AM - 6:00 PM)\n    - Night Shift (e.g., 10:00 PM - 6:00 AM)
    - Split Shift (e.g., 11:00 AM - 3:00 PM, 6:00 PM - 10:00 PM)
  - **Add Custom Shift Type**:
    - Shift name (required)\n    - Start time (time picker)
    - End time (time picker)
    - Break duration (minutes)
    - Color code (color picker for calendar display)
    - Save to database
  - **Edit/Delete Shift Type**: Modify existing shift types
\n- **Create Shift Schedule**:
  - **Manual Assignment**:
    - Select date (date picker)
    - Select staff (dropdown with search)
    - Select shift type (dropdown)
    - Add notes (optional, max 200 characters)
    - Save shift to database
  - **Bulk Assignment**:
    - Select date range (start date, end date)
    - Select multiple staff (multi-select dropdown)
    - Select shift type\n    - Repeat pattern (daily, weekly, custom days)
    - Generate shifts for all selected staff and dates
  - **Auto-Scheduling** (AI-powered):
    - Set scheduling rules:\n      - Minimum staff per shift
      - Maximum consecutive days\n      - Preferred days off
      - Skill requirements per shift
    - AI algorithm generates optimal schedule based on:\n      - Staff availability
      - Historical order volume
      - Staff preferences
      - Labor cost optimization
    - Review and approve generated schedule
    - Publish schedule to staff (sends notifications)

- **Shift Swap Requests** (real-time from database):\n  - **Staff-Initiated Swap**:
    - Staff can request to swap shift with another staff member
    - Swap request form: Select shift to swap, select staff to swap with, reason\n    - Request sent to manager for approval
  - **Manager Approval**:
    - View pending swap requests (real-time from database)
    - Database query: SELECT swap_requests.*, staff1.name as requester_name, staff2.name as swapper_name, shifts.shift_date, shift_types.shift_name FROM swap_requests JOIN staff as staff1 ON swap_requests.requester_id = staff1.staff_id JOIN staff as staff2 ON swap_requests.swapper_id = staff2.staff_id JOIN shifts ON swap_requests.shift_id = shifts.shift_id JOIN shift_types ON shifts.shift_type_id = shift_types.shift_type_id WHERE swap_requests.status = 'Pending' AND swap_requests.restaurant_id = CURRENT_RESTAURANT
    - Approve or reject swap request
    - Update shifts in database upon approval
    - Send notifications to both staff members
\n- **Time-Off Requests** (real-time from database):
  - **Staff-Initiated Request**:
    - Staff can request time-off (leave)\n    - Request form: Select date range, leave type (Sick, Casual, Annual, etc.), reason
    - Request sent to manager for approval
  - **Manager Approval**:
    - View pending time-off requests (real-time from database)
    - Database query: SELECT leave_requests.*, staff.name, leave_types.leave_name FROM leave_requests JOIN staff ON leave_requests.staff_id = staff.staff_id JOIN leave_types ON leave_requests.leave_type_id = leave_types.leave_type_id WHERE leave_requests.status = 'Pending' AND leave_requests.restaurant_id = CURRENT_RESTAURANT
    - Approve or reject request
    - Update leave balance in database upon approval
    - Automatically remove shifts for approved leave dates
    - Send notification to staff

- **Shift Notifications**:
  - **Automatic Notifications** (sent via email, SMS, and in-app):
    - Shift assigned: Notify staff when new shift is assigned
    - Shift reminder: Remind staff 24 hours before shift
    - Shift change: Notify staff when shift is modified or swapped
    - Shift cancellation: Notify staff when shift is cancelled
  - **Notification Settings**: Staff can configure notification preferences
\n**D. Attendance Tracking (Real-Time)**

- **Clock In/Out System**:
  - **Staff App/Web Interface**:
    - Clock In button (tap to record clock-in time)
    - Clock Out button (tap to record clock-out time)\n    - GPS location capture (optional, for verification)
    - Photo capture (optional, for facial recognition)
    - Insert attendance record into database with timestamp
  - **Manager Override**:
    - Managers can manually add/edit attendance records
    - Useful for missed clock-ins or system errors
\n- **Attendance Dashboard** (real-time from database):\n  - **Today's Attendance** (real-time from database):
    - Database query: SELECT staff.name, staff.employee_id, attendance.clock_in_time, attendance.clock_out_time, attendance.status FROM attendance JOIN staff ON attendance.staff_id = staff.staff_id WHERE attendance.attendance_date = CURDATE() AND staff.restaurant_id = CURRENT_RESTAURANT
    - List of staff with clock-in/out times and status (Present, Absent, Late, On Leave)
    - Color-coded status badges
    - Real-time updates when staff clock in/out
  - **Attendance Summary** (real-time calculated):
    - Total staff scheduled today (real-time count from shifts)
    - Staff present (real-time count from attendance)
    - Staff absent (real-time count)\n    - Staff on leave (real-time count from leave requests)
    - Late arrivals (real-time count, clock-in time > shift start time + grace period)
  - **Attendance Calendar**: Monthly view showing attendance for all staff
  - **Attendance Reports**: Generate reports for payroll processing

- **Late Arrival & Early Departure Tracking**:
  - **Grace Period**: Configurable grace period (e.g., 15 minutes)
  - **Late Arrival**: Flag attendance if clock-in time > shift start time + grace period
  - **Early Departure**: Flag attendance if clock-out time < shift end time - grace period
  - **Notifications**: Send alerts to managers for late arrivals and early departures
  - **Deductions**: Automatic salary deductions for excessive late arrivals (configurable)

- **Leave Management Integration**:
  - Approved leaves automatically marked in attendance\n  - Leave balance deducted upon approval
  - Attendance status shows'On Leave' for approved leave dates
\n**E. Performance Monitoring & Reviews (Real-Time)**
\n- **Performance Metrics Dashboard** (real-time from database):
  - **Individual Staff Performance** (real-time calculated):
    - **Orders Handled** (real-time count from database):
      - Database query: SELECT COUNT(order_id) FROM orders WHERE assigned_waiter_id = CURRENT_STAFF_ID AND order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
    - **Average Order Value** (real-time calculated):
      - Database query: SELECT AVG(order_total) FROM orders WHERE assigned_waiter_id = CURRENT_STAFF_ID AND order_status = 'Completed'
    - **Customer Ratings** (real-time average from customer feedback):
      - Database query: SELECT AVG(rating) FROM customer_feedback WHERE staff_id = CURRENT_STAFF_ID
    - **Order Accuracy** (real-time calculated, percentage of orders without errors):
      - Database query: SELECT (COUNT(CASE WHEN order_errors = 0 THEN 1 END) * 100.0 / COUNT(order_id)) as accuracy FROM orders WHERE assigned_waiter_id = CURRENT_STAFF_ID
    - **Response Time** (real-time average time to acknowledge orders):
      - Database query: SELECT AVG(TIMESTAMPDIFF(MINUTE, created_at, acknowledged_at)) as avg_response_time FROM orders WHERE assigned_waiter_id = CURRENT_STAFF_ID
    - **Attendance Rate** (real-time calculated):
      - Database query: SELECT (COUNT(CASE WHEN status = 'Present' THEN 1 END) * 100.0 / COUNT(attendance_id)) as attendance_rate FROM attendance WHERE staff_id = CURRENT_STAFF_ID
  - **Team Performance** (real-time calculated):
    - Average performance metrics across all staff
    - Top performers (ranked by rating, orders handled, etc.)
    - Bottom performers (for coaching and improvement)
  - **Performance Trends**: Line graphs showing performance over time (real-time data)

- **Performance Reviews**:
  - **Create Review**:
    - Select staff (dropdown)
    - Review period (date range)
    - Rating (1-5 stars for multiple criteria: Customer Service, Punctuality, Teamwork, Quality of Work, etc.)
    - Comments (text area, max 1000 characters)
    - Goals for next period (text area)\n    - Reviewer name (auto-filled, current manager)
    - Save review to database
  - **View Reviews** (real-time from database):
    - Database query: SELECT performance_reviews.*, staff.name, reviewers.name as reviewer_name FROM performance_reviews JOIN staff ON performance_reviews.staff_id = staff.staff_id JOIN staff as reviewers ON performance_reviews.reviewer_id = reviewers.staff_id WHERE performance_reviews.restaurant_id = CURRENT_RESTAURANT ORDER BY review_date DESC
    - List of all reviews with date, staff, reviewer, rating, comments
    - Filter by staff, date range, rating
  - **Review Reminders**: Automatic reminders to managers for pending reviews (quarterly, annually)

- **Customer Feedback Integration**:
  - Customers can rate staff service after order completion
  - Feedback linked to staff profile
  - Real-time display of customer ratings in staff performance metrics

**F. Payroll Integration (Real-Time)**
\n- **Payroll Dashboard** (real-time from database):
  - **Upcoming Payroll** (real-time calculated):
    - Database query: SELECT staff.name, staff.employee_id, staff.salary_amount, SUM(attendance.total_hours) as total_hours, SUM(bonuses.amount) as total_bonuses, SUM(deductions.amount) as total_deductions FROM staff LEFT JOIN attendance ON staff.staff_id = attendance.staff_id AND MONTH(attendance.attendance_date) = CURRENT_MONTH LEFT JOIN bonuses ON staff.staff_id = bonuses.staff_id AND MONTH(bonuses.bonus_date) = CURRENT_MONTH LEFT JOIN deductions ON staff.staff_id = deductions.staff_id AND MONTH(deductions.deduction_date) = CURRENT_MONTH WHERE staff.restaurant_id = CURRENT_RESTAURANT GROUP BY staff.staff_id
    - List of staff with calculated gross salary, bonuses, deductions, net salary
    - Total payroll amount (real-time sum)\n  - **Payroll History** (real-time from database):
    - Database query: SELECT payroll_date, COUNT(staff_id) as staff_count, SUM(net_salary) as total_payout FROM payroll WHERE restaurant_id = CURRENT_RESTAURANT GROUP BY payroll_date ORDER BY payroll_date DESC
    - List of past payroll runs with date, staff count, total payout
\n- **Generate Payroll**:
  - Select payroll period (month, custom date range)
  - System automatically calculates:\n    - Gross salary (based on salary type: hourly rate × hours worked or fixed monthly salary)
    - Bonuses (performance bonuses, incentives)
    - Deductions (late arrival penalties, advance payments, taxes)
    - Net salary (gross salary + bonuses - deductions)
  - Review payroll summary
  - Approve and process payroll
  - Generate payslips (PDF) for each staff member
  - Send payslips via email\n  - Mark payroll as paid in database

- **Bonuses & Incentives**:
  - **Add Bonus**:
    - Select staff (dropdown or multi-select for bulk)
    - Bonus amount (number input)
    - Bonus reason (dropdown: Performance, Festival, Referral, Other)
    - Bonus date (date picker)
    - Save to database
  - **View Bonuses** (real-time from database):
    - List of all bonuses with staff, amount, reason, date
\n- **Deductions**:
  - **Add Deduction**:
    - Select staff\n    - Deduction amount\n    - Deduction reason (dropdown: Late Arrival, Advance Payment, Loan Repayment, Other)
    - Deduction date\n    - Save to database
  - **View Deductions** (real-time from database):\n    - List of all deductions with staff, amount, reason, date

- **Payslip Generation**:
  - Automated PDF generation with restaurant branding
  - Payslip includes: Staff details, payroll period, gross salary, bonuses, deductions, net salary, payment date, payment method
  - Download or email payslip

**G. Staff Communication & Notifications**

- **Broadcast Messages**:
  - Send messages to all staff or selected groups
  - Message types: Announcement, Reminder, Alert, Congratulations\n  - Delivery channels: In-app notification, email, SMS\n  - Schedule messages for future delivery
\n- **Individual Messages**:
  - Send direct messages to individual staff members
  - Real-time chat interface (similar to customer chat)
  - Message history stored in database

- **Notification Center**:
  - Staff can view all notifications in centralized notification center
  - Notification types: Shift assigned, shift reminder, shift change, leave approved, payroll processed, performance review, etc.
  - Mark as read/unread
  - Filter by type and date

**H. Staff Reports & Analytics (Real-Time)**

- **Staff Performance Report** (real-time from database):
  - Comprehensive report with all performance metrics for each staff member
  - Export to PDF, Excel, CSV
\n- **Attendance Report** (real-time from database):
  - Detailed attendance records for selected period
  - Summary: Total days, present, absent, leaves, late arrivals
  - Export for payroll processing

- **Shift Report** (real-time from database):
  - Total shifts assigned, completed, missed\n  - Shift coverage analysis (understaffed/overstaffed periods)
\n- **Payroll Report** (real-time from database):
  - Payroll summary for selected period
  - Breakdown by staff, department, role
  - Total payroll cost

- **Turnover Report** (real-time from database):
  - Staff turnover rate (real-time calculated)
  - Database query: (COUNT(staff WHERE status = 'Inactive' AND deactivation_date BETWEEN START_DATE AND END_DATE) / AVG(total_active_staff)) * 100
  - Reasons for leaving (exit interview data)
  - Retention rate\n
**I. Staff Mobile App Integration**

- **Staff Mobile App Features**:
  - Login with employee credentials
  - View assigned shifts (real-time from database)
  - Clock in/out with GPS and photo capture
  - Request shift swap or time-off
  - View attendance and leave balance (real-time from database)
  - View payslips\n  - Receive push notifications for shifts and announcements
  - Chat with manager and team members
  - View performance metrics and reviews
\n**J. Staff Settings & Preferences**

- **Staff can configure**:
  - Notification preferences (email, SMS, push notifications)
  - Preferred shift times
  - Availability calendar (mark unavailable dates)
  - Language preference
  - Profile photo and contact information
\n---

#### 3.1.11 Complete Marketing & Promotions System (FULLY FUNCTIONAL)

**Overview**:\nAdvanced marketing and promotions module accessible from sidebar navigation, enabling restaurant owners to create, manage, and analyze marketing campaigns, offers, discounts, loyalty programs, email/SMS marketing, and social media integration. **All campaign data and analytics are real-time from the live database with automatic updates.**

**Key Features**:
\n**A. Campaign Management (Real-Time)**

- **Campaigns Dashboard** (real-time from database):
  - **Active Campaigns** (real-time from database):
    - Database query: SELECT campaigns.*, COUNT(campaign_customers.customer_id) as reach, SUM(orders.order_total) as revenue_generated FROM campaigns LEFT JOIN campaign_customers ON campaigns.campaign_id = campaign_customers.campaign_id LEFT JOIN orders ON campaign_customers.customer_id = orders.customer_id AND orders.order_date BETWEEN campaigns.start_date AND campaigns.end_date WHERE campaigns.status = 'Active' AND campaigns.restaurant_id = CURRENT_RESTAURANT GROUP BY campaigns.campaign_id
    - Grid of campaign cards displaying: Campaign name, type, start/end date, reach (number of customers), revenue generated (real-time), status badge\n    - Real-time updates when campaign metrics change
  - **Upcoming Campaigns** (real-time from database):
    - Campaigns scheduled to start in future
  - **Past Campaigns** (real-time from database):
    - Completed campaigns with final analytics
  - **Campaign Performance Summary** (real-time calculated):
    - Total campaigns run (real-time count)
    - Total revenue from campaigns (real-time sum)
    - Average campaign ROI (real-time calculated)
    - Best performing campaign (real-time ranked by revenue)
\n- **Create Campaign**:
  - **Campaign Setup Form** (multi-step wizard with futuristic design):
    - **Step 1: Campaign Basics**:
      - Campaign name (required, max 100 characters)
      - Campaign type (dropdown: Discount Offer, BOGO, Free Item, Loyalty Bonus, Seasonal Promotion, Flash Sale, Referral Program, Birthday Special, Other)
      - Campaign description (rich text editor, max 500 characters)
      - Campaign banner image (upload, recommended size: 1200x628px)
      - Start date and time (date-time picker)
      - End date and time (date-time picker)\n      - Campaign status (dropdown: Draft, Scheduled, Active, Paused, Completed)
    - **Step 2: Target Audience**:
      - Target customer segment (dropdown: All Customers, New Customers, Returning Customers, Loyalty Members, VIP Customers, Inactive Customers, Custom Segment)
      - Custom segment filters (if Custom Segment selected):
        - Order frequency (dropdown: First-time, 2-5 orders, 6-10 orders, 10+ orders)
        - Average order value (range slider)
        - Last order date (date range)\n        - Location (city, area)\n        - Age group (range)\n        - Gender (dropdown)\n      - Estimated reach (real-time calculated based on filters)
      - Database query: COUNT(customer_id) FROM customers WHERE [filter conditions]
    - **Step 3: Offer Details**:
      - Offer type (dropdown: Percentage Discount, Fixed Amount Discount, BOGO, Free Item, Free Delivery, Loyalty Points Multiplier)\n      - Discount value (number input, percentage or fixed amount based on offer type)
      - Applicable items (dropdown: All Items, Specific Categories, Specific Items)
      - Select categories/items (multi-select dropdown if applicable)
      - Minimum order value (number input, optional)
      - Maximum discount cap (number input, optional)
      - Usage limit per customer (number input, optional)
      - Total usage limit (number input, optional)
      - Promo code (text input, auto-generated or manual, unique)\n      - Auto-apply offer (checkbox, if checked, offer applies automatically without promo code)
    - **Step 4: Marketing Channels**:
      - Delivery channels (checkboxes: Email, SMS, Push Notification, In-App Banner, Social Media)\n      - Email settings (if Email selected):
        - Email subject line (text input)\n        - Email template (select from predefined templates or custom HTML)
        - Preview email\n      - SMS settings (if SMS selected):
        - SMS message (text area, max 160 characters)
        - Preview SMS
      - Push notification settings (if Push Notification selected):\n        - Notification title (text input)
        - Notification message (text area, max 100 characters)
        - Preview notification
      - In-app banner settings (if In-App Banner selected):
        - Banner position (dropdown: Top, Bottom, Popup)
        - Banner design (upload image or use template)
      - Social media settings (if Social Media selected):
        - Platforms (checkboxes: Facebook, Instagram, Twitter)\n        - Post content (text area with image upload)
        - Schedule post (date-time picker)
    - **Step 5: Budget & Goals**:
      - Campaign budget (number input, optional)
      - Expected revenue (number input, optional)
      - Expected ROI (auto-calculated: (expected revenue - budget) / budget * 100)
      - Campaign goals (text area, e.g., increase sales by 20%, acquire 100 new customers)\n    - **Step 6: Review & Launch**:
      - Review all campaign details
      - Preview campaign materials (email, SMS, banner)
      - Save as draft or launch campaign
      - If scheduled, campaign will auto-activate at start date/time
  - **Form Validation**: Real-time validation with error messages\n  - **Save as Draft**: Save incomplete campaign and resume later
  - **Launch Campaign**: Insert campaign into database, send notifications to target audience, activate offer

- **Edit Campaign**:
  - Pre-filled form with existing campaign data
  - Modify campaign details (cannot change start date if campaign is active)
  - Update campaign in database
  - Send update notifications to customers if significant changes

- **Pause/Resume Campaign**:
  - Pause active campaign (offer becomes inactive)
  - Resume paused campaign (offer reactivates)
  - Update campaign status in database
\n- **Delete Campaign**:
  - Confirmation dialog\n  - Soft delete (mark as deleted but retain data for analytics)
  - Cannot delete active campaigns (must pause first)

- **Campaign Analytics** (real-time from database):\n  - **Campaign Performance Dashboard** (for each campaign):
    - **Reach** (real-time count from database):
      - Database query: SELECT COUNT(DISTINCT customer_id) FROM campaign_customers WHERE campaign_id = CURRENT_CAMPAIGN_ID
      - Number of customers who received campaign\n    - **Engagement** (real-time calculated):
      - Email open rate (real-time percentage)
      - Database query: (COUNT(email_opens) / COUNT(emails_sent)) * 100
      - Click-through rate (real-time percentage)
      - Database query: (COUNT(email_clicks) / COUNT(emails_sent)) * 100
      - SMS delivery rate (real-time percentage)
- **Conversions** (real-time count from database):
      - Database query: SELECT COUNT(DISTINCT order_id) FROM orders WHERE promo_code = CURRENT_CAMPAIGN_PROMO_CODE AND order_date BETWEEN CAMPAIGN_START_DATE AND CAMPAIGN_END_DATE
      - Number of orders placed using campaign offer
    - **Revenue Generated** (real-time sum from database):
      - Database query: SELECT SUM(order_total) FROM orders WHERE promo_code = CURRENT_CAMPAIGN_PROMO_CODE AND order_status = 'Completed' AND order_date BETWEEN CAMPAIGN_START_DATE AND CAMPAIGN_END_DATE
      - Total revenue from campaign orders
    - **Discount Given** (real-time sum from database):
      - Database query: SELECT SUM(discount_amount) FROM orders WHERE promo_code = CURRENT_CAMPAIGN_PROMO_CODE\n      - Total discount amount applied\n    - **Net Revenue** (real-time calculated):
      - Revenue generated - discount given
    - **ROI** (real-time calculated):
      - ((Net revenue - campaign budget) / campaign budget) * 100
    - **Customer Acquisition** (real-time count):
      - Number of new customers acquired through campaign
- Database query: SELECT COUNT(DISTINCT customer_id) FROM orders WHERE promo_code = CURRENT_CAMPAIGN_PROMO_CODE AND customer_id IN (SELECT customer_id FROM customers WHERE registration_date BETWEEN CAMPAIGN_START_DATE AND CAMPAIGN_END_DATE)
    - **Repeat Orders** (real-time count):
      - Number of customers who placed multiple orders during campaign
    - **Performance Charts**:
      - Line graph: Daily revenue during campaign period (real-time data)
      - Bar chart: Orders by day (real-time data)
      - Pie chart: Revenue by customer segment (real-time data)
  - **Export Analytics**: Export campaign report to PDF, Excel, CSV

**B. Offers & Discounts Management (Real-Time)**
\n- **Offers Dashboard** (real-time from database):
  - **Active Offers** (real-time from database):
    - Database query: SELECT offers.*, COUNT(order_offers.order_id) as usage_count, SUM(order_offers.discount_amount) as total_discount FROM offers LEFT JOIN order_offers ON offers.offer_id = order_offers.offer_id WHERE offers.status = 'Active' AND offers.restaurant_id = CURRENT_RESTAURANT GROUP BY offers.offer_id
    - List of active offers with name, type, discount value, usage count (real-time), total discount given (real-time), expiry date
  - **Upcoming Offers** (real-time from database):
    - Offers scheduled to activate in future
  - **Expired Offers** (real-time from database):
    - Past offers with final usage statistics
\n- **Create Offer**:\n  - **Offer Setup Form**:
    - Offer name (required, max 100 characters)\n    - Offer type (dropdown: Percentage Discount, Fixed Amount Discount, BOGO, Free Item, Free Delivery, Loyalty Points Bonus)\n    - Discount value (number input)\n    - Applicable items (dropdown: All Items, Specific Categories, Specific Items)
    - Select categories/items (multi-select dropdown if applicable)
    - Minimum order value (number input, optional)\n    - Maximum discount cap (number input, optional)
    - Start date and time (date-time picker)
    - End date and time (date-time picker)
    - Promo code (text input, auto-generated or manual, unique)
    - Auto-apply (checkbox)\n    - Usage limit per customer (number input, optional)
    - Total usage limit (number input, optional)
    - Terms and conditions (text area, max 500 characters)
    - Offer banner image (upload, optional)
  - **Save Offer**: Insert offer into database\n  - **Activate Offer**: Set status to active, offer becomes available for customers
\n- **Edit Offer**:\n  - Pre-filled form with existing offer data
  - Modify offer details\n  - Update offer in database\n\n- **Deactivate/Activate Offer**:
  - Toggle offer status between Active and Inactive
  - Inactive offers cannot be used by customers
\n- **Delete Offer**:
  - Confirmation dialog
  - Soft delete (retain data for analytics)
\n- **Offer Analytics** (real-time from database):
  - **Usage Statistics** (for each offer):
    - Total usage count (real-time from database)
    - Total discount given (real-time sum from database)
    - Revenue generated (real-time sum from orders using offer)
    - Average order value with offer (real-time calculated)
    - Customer segments using offer (real-time breakdown)
  - **Performance Comparison**: Compare multiple offers side-by-side
\n**C. Loyalty Program Management (Real-Time)**

- **Loyalty Program Dashboard** (real-time from database):
  - **Program Overview** (real-time calculated):
    - Total loyalty members (real-time count from database)
    - Database query: SELECT COUNT(customer_id) FROM customers WHERE loyalty_member = TRUE AND restaurant_id = CURRENT_RESTAURANT
    - Total points issued (real-time sum from database)\n    - Database query: SELECT SUM(points_earned) FROM loyalty_transactions WHERE restaurant_id = CURRENT_RESTAURANT
    - Total points redeemed (real-time sum from database)
    - Database query: SELECT SUM(points_redeemed) FROM loyalty_transactions WHERE transaction_type = 'Redemption' AND restaurant_id = CURRENT_RESTAURANT
    - Active points balance (real-time calculated: points issued - points redeemed)
    - Redemption rate (real-time calculated: points redeemed / points issued * 100)
  - **Top Loyalty Members** (real-time from database):
    - Database query: SELECT customers.name, customers.email, SUM(loyalty_transactions.points_earned) as total_points FROM customers JOIN loyalty_transactions ON customers.customer_id = loyalty_transactions.customer_id WHERE customers.restaurant_id = CURRENT_RESTAURANT GROUP BY customers.customer_id ORDER BY total_points DESC LIMIT 10
    - List of top10 customers by points earned
\n- **Loyalty Program Settings**:
  - **Points Earning Rules**:
    - Points per currency unit spent (e.g., 1 point per $1 spent)
    - Bonus points for specific actions:\n      - Sign-up bonus (e.g., 100 points on registration)
      - Birthday bonus (e.g., 50 points on birthday)
      - Referral bonus (e.g., 200 points for referring a friend)
      - Review bonus (e.g., 20 points for leaving a review)
    - Multiplier events (e.g., double points on weekends)
  - **Points Redemption Rules**:
    - Points value (e.g., 100 points = $1 discount)
    - Minimum points for redemption (e.g., 500 points)
    - Maximum points per order (e.g., 2000 points)
    - Redemption options:\n      - Discount on order\n      - Free item
      - Free delivery
  - **Loyalty Tiers** (optional):
    - Create multiple tiers (e.g., Silver, Gold, Platinum)
    - Tier benefits:\n      - Higher points earning rate
      - Exclusive offers
      - Priority support
      - Free items
    - Tier upgrade criteria (e.g., spend $500 to reach Gold tier)
  - **Points Expiry**:
    - Enable/disable points expiry
    - Expiry period (e.g., points expire after 12 months of inactivity)
\n- **Loyalty Rewards Catalog**:
  - **Create Reward**:
    - Reward name (e.g., Free Dessert, $5 Discount)\n    - Reward type (dropdown: Discount, Free Item, Free Delivery)\n    - Points required (number input)\n    - Reward description (text area)\n    - Reward image (upload)
    - Availability (always available or limited quantity)
    - Expiry date (optional)
  - **View Rewards** (real-time from database):\n    - List of all rewards with name, points required, redemption count (real-time)\n  - **Edit/Delete Reward**\n\n- **Loyalty Transactions** (real-time from database):
  - **Transaction History** (real-time from database):
    - Database query: SELECT loyalty_transactions.*, customers.name, customers.email FROM loyalty_transactions JOIN customers ON loyalty_transactions.customer_id = customers.customer_id WHERE loyalty_transactions.restaurant_id = CURRENT_RESTAURANT ORDER BY transaction_date DESC
    - List of all loyalty transactions with customer, transaction type (Earned/Redeemed), points, date\n    - Filter by customer, transaction type, date range
    - Export to CSV/Excel
\n- **Loyalty Program Analytics** (real-time from database):
  - **Engagement Metrics**:
    - Active members (real-time count of members with activity in last 30 days)
    - Inactive members (real-time count of members with no activity in last 90 days)
    - Average points per member (real-time calculated)\n    - Redemption frequency (real-time calculated: average redemptions per member per month)
  - **Revenue Impact**:
    - Revenue from loyalty members vs. non-members (real-time comparison)
    - Average order value: loyalty members vs. non-members (real-time comparison)
    - Repeat order rate: loyalty members vs. non-members (real-time comparison)
  - **Tier Performance** (if tiers enabled):
    - Members per tier (real-time count)\n    - Revenue per tier (real-time sum)\n    - Average spend per tier (real-time calculated)\n\n**D. Email Marketing (Real-Time)**

- **Email Campaigns Dashboard** (real-time from database):
  - **Sent Campaigns** (real-time from database):
    - Database query: SELECT email_campaigns.*, COUNT(email_logs.email_id) as emails_sent, COUNT(CASE WHEN email_logs.opened = TRUE THEN 1 END) as emails_opened, COUNT(CASE WHEN email_logs.clicked = TRUE THEN 1 END) as emails_clicked FROM email_campaigns LEFT JOIN email_logs ON email_campaigns.campaign_id = email_logs.campaign_id WHERE email_campaigns.restaurant_id = CURRENT_RESTAURANT GROUP BY email_campaigns.campaign_id ORDER BY sent_date DESC
    - List of email campaigns with name, sent date, emails sent (real-time), open rate (real-time), click rate (real-time)
  - **Scheduled Campaigns** (real-time from database):
    - Campaigns scheduled for future delivery
  - **Draft Campaigns** (real-time from database):
    - Incomplete campaigns saved as drafts
\n- **Create Email Campaign**:
  - **Campaign Setup**:
    - Campaign name (required)\n    - Email subject line (required, max 100 characters)
    - Sender name (default: restaurant name, editable)
    - Sender email (default: restaurant email, editable)
    - Reply-to email (optional)
  - **Email Template**:
    - Select from predefined templates (Welcome Email, Promotional Email, Newsletter, Event Invitation, etc.)
    - Or create custom HTML email
    - Drag-and-drop email builder:\n      - Add sections: Header, Hero Image, Text Block, Button, Image, Footer
      - Customize colors, fonts, images
      - Insert dynamic fields: Customer Name, Restaurant Name, Offer Details, etc.
    - Preview email (desktop and mobile view)
  - **Recipient Selection**:
    - Target audience (dropdown: All Customers, Loyalty Members, New Customers, Inactive Customers, Custom Segment)
    - Custom segment filters (same as campaign filters)
    - Estimated recipients (real-time count from database)
  - **Schedule Delivery**:
    - Send now or schedule for later (date-time picker)
    - Time zone selection\n  - **Test Email**: Send test email to owner's email for review
  - **Launch Campaign**: Insert campaign into database, send emails to recipients

- **Email Analytics** (real-time from database):
  - **Campaign Performance** (for each email campaign):
    - Emails sent (real-time count)
    - Emails delivered (real-time count, sent - bounced)
    - Bounce rate (real-time percentage)
    - Open rate (real-time percentage)
    - Click-through rate (real-time percentage)\n    - Unsubscribe rate (real-time percentage)
    - Conversions (real-time count, orders placed after email click)
    - Revenue generated (real-time sum from orders attributed to email)
  - **Email Engagement Over Time**: Line graph showing open and click rates over time (real-time data)
  - **Top Performing Emails**: Ranked by open rate, click rate, conversions (real-time)\n\n- **Email List Management**:
  - **Subscribers List** (real-time from database):
    - Database query: SELECT customers.name, customers.email, customers.email_subscribed, customers.registration_date FROM customers WHERE customers.restaurant_id = CURRENT_RESTAURANT
    - List of all customers with email subscription status
    - Filter by subscription status (Subscribed, Unsubscribed)\n  - **Unsubscribe Management**:
    - Customers can unsubscribe via link in email footer
    - Unsubscribe requests automatically update database
    - Unsubscribed customers excluded from future email campaigns
  - **Import/Export**:
    - Import email list from CSV\n    - Export email list to CSV
\n**E. SMS Marketing (Real-Time)**

- **SMS Campaigns Dashboard** (real-time from database):
  - **Sent Campaigns** (real-time from database):
    - Database query: SELECT sms_campaigns.*, COUNT(sms_logs.sms_id) as sms_sent, COUNT(CASE WHEN sms_logs.delivered = TRUE THEN 1 END) as sms_delivered FROM sms_campaigns LEFT JOIN sms_logs ON sms_campaigns.campaign_id = sms_logs.campaign_id WHERE sms_campaigns.restaurant_id = CURRENT_RESTAURANT GROUP BY sms_campaigns.campaign_id ORDER BY sent_date DESC
    - List of SMS campaigns with name, sent date, SMS sent (real-time), delivery rate (real-time)\n  - **Scheduled Campaigns** (real-time from database)\n  - **Draft Campaigns** (real-time from database)

- **Create SMS Campaign**:
  - **Campaign Setup**:
    - Campaign name (required)
    - SMS message (required, max 160 characters for single SMS,306 for concatenated)
    - Character counter (real-time)\n    - Insert dynamic fields: Customer Name, Offer Code, Restaurant Name, etc.
    - Preview SMS\n  - **Recipient Selection**:
    - Target audience (same as email campaigns)
    - Estimated recipients (real-time count from database)
  - **Schedule Delivery**:
    - Send now or schedule for later\n  - **Launch Campaign**: Insert campaign into database, send SMS to recipients via SMS gateway

- **SMS Analytics** (real-time from database):
  - **Campaign Performance** (for each SMS campaign):\n    - SMS sent (real-time count)
    - SMS delivered (real-time count)\n    - Delivery rate (real-time percentage)
    - Failed deliveries (real-time count)\n    - Opt-outs (real-time count)
    - Conversions (real-time count, orders placed after SMS)\n    - Revenue generated (real-time sum)\n  - **SMS Engagement Over Time**: Line graph showing delivery rates over time (real-time data)
\n- **SMS List Management**:\n  - **Subscribers List** (real-time from database):\n    - List of customers with phone numbers and SMS subscription status
  - **Opt-Out Management**:
    - Customers can opt-out by replying STOP\n    - Opt-out requests automatically update database
\n**F. Social Media Integration**

- **Connected Accounts**:
  - Connect restaurant's social media accounts (Facebook, Instagram, Twitter)\n  - OAuth authentication for secure connection
  - Display connected accounts with profile info
\n- **Social Media Posting**:
  - **Create Post**:
    - Select platforms (checkboxes: Facebook, Instagram, Twitter)\n    - Post content (text area with character limit per platform)
    - Upload images/videos (multiple files)\n    - Add hashtags\n    - Preview post for each platform
    - Schedule post (date-time picker) or post immediately
  - **Post History** (real-time from database):
    - List of all posts with platform, content, post date, engagement metrics (likes, comments, shares)
\n- **Social Media Analytics** (real-time from connected platforms):
  - **Engagement Metrics**:
    - Total followers (real-time count from platform API)
    - Post reach (real-time from platform API)
    - Engagement rate (real-time calculated: (likes + comments + shares) / reach * 100)
    - Top performing posts (ranked by engagement)\n  - **Follower Growth**: Line graph showing follower count over time (real-time data)
\n**G. Referral Program**

- **Referral Program Settings**:
  - Enable/disable referral program
  - Referral reward for referrer (e.g., $5 discount, 100 loyalty points)
  - Referral reward for referee (e.g., $5 discount on first order)
  - Referral code generation (auto-generated unique code for each customer)
  - Referral link generation (shareable link with referral code)
\n- **Referral Dashboard** (real-time from database):
  - **Referral Statistics** (real-time calculated):
    - Total referrals (real-time count from database)
    - Database query: SELECT COUNT(referral_id) FROM referrals WHERE restaurant_id = CURRENT_RESTAURANT
    - Successful referrals (real-time count, referee placed order)
    - Database query: SELECT COUNT(referral_id) FROM referrals WHERE referee_order_placed = TRUE AND restaurant_id = CURRENT_RESTAURANT
    - Conversion rate (real-time calculated: successful referrals / total referrals * 100)
    - Revenue from referrals (real-time sum from orders by referred customers)
  - **Top Referrers** (real-time from database):
    - Database query: SELECT customers.name, customers.email, COUNT(referrals.referral_id) as referral_count FROM customers JOIN referrals ON customers.customer_id = referrals.referrer_id WHERE customers.restaurant_id = CURRENT_RESTAURANT GROUP BY customers.customer_id ORDER BY referral_count DESC LIMIT 10
    - List of top 10 customers by number of successful referrals

- **Referral Tracking** (real-time from database):\n  - **Referral History** (real-time from database):
    - Database query: SELECT referrals.*, referrers.name as referrer_name, referees.name as referee_name, referees.registration_date FROM referrals JOIN customers as referrers ON referrals.referrer_id = referrers.customer_id JOIN customers as referees ON referrals.referee_id = referees.customer_id WHERE referrals.restaurant_id = CURRENT_RESTAURANT ORDER BY referrals.referral_date DESC
    - List of all referrals with referrer, referee, referral date, status (Pending, Successful)\n    - Filter by status, date range
\n**H. Push Notifications**

- **Push Notification Dashboard** (real-time from database):
  - **Sent Notifications** (real-time from database):
    - Database query: SELECT push_notifications.*, COUNT(push_logs.notification_id) as notifications_sent, COUNT(CASE WHEN push_logs.delivered = TRUE THEN 1 END) as notifications_delivered, COUNT(CASE WHEN push_logs.opened = TRUE THEN 1 END) as notifications_opened FROM push_notifications LEFT JOIN push_logs ON push_notifications.notification_id = push_logs.notification_id WHERE push_notifications.restaurant_id = CURRENT_RESTAURANT GROUP BY push_notifications.notification_id ORDER BY sent_date DESC
    - List of push notifications with title, sent date, notifications sent (real-time), delivery rate (real-time), open rate (real-time)
  - **Scheduled Notifications** (real-time from database)
\n- **Create Push Notification**:
  - **Notification Setup**:
    - Notification title (required, max 50 characters)
    - Notification message (required, max 100 characters)
    - Notification icon (upload, optional)
    - Action URL (optional, deep link to specific page in app)
    - Preview notification (iOS and Android style)
  - **Recipient Selection**:
    - Target audience (same as email/SMS campaigns)
    - Estimated recipients (real-time count from database, customers with app installed)
  - **Schedule Delivery**:
    - Send now or schedule for later
  - **Launch Notification**: Insert notification into database, send push notifications via Firebase Cloud Messaging (FCM) or Apple Push Notification Service (APNS)

- **Push Notification Analytics** (real-time from database):
  - **Notification Performance** (for each push notification):
    - Notifications sent (real-time count)
    - Notifications delivered (real-time count)\n    - Delivery rate (real-time percentage)
    - Open rate (real-time percentage)
    - Conversions (real-time count, orders placed after notification click)
\n**I. Marketing Analytics & Reports (Real-Time)**

- **Overall Marketing Performance** (real-time from database):\n  - **Total Campaigns Run** (real-time count from database):
    - Database query: SELECT COUNT(campaign_id) FROM campaigns WHERE restaurant_id = CURRENT_RESTAURANT
  - **Total Revenue from Marketing** (real-time sum from database):
    - Database query: SELECT SUM(orders.order_total) FROM orders JOIN campaigns ON orders.promo_code = campaigns.promo_code WHERE orders.order_status = 'Completed' AND campaigns.restaurant_id = CURRENT_RESTAURANT
  - **Total Marketing Spend** (real-time sum from campaign budgets)
  - **Overall ROI** (real-time calculated: (total revenue - total spend) / total spend * 100)\n  - **Customer Acquisition Cost** (real-time calculated: total spend / new customers acquired)
\n- **Channel Performance Comparison** (real-time from database):
  - Compare performance across channels: Email, SMS, Push Notifications, Social Media\n  - Metrics: Reach, engagement rate, conversions, revenue, ROI
  - Bar charts and pie charts for visual comparison (real-time data)

- **Campaign ROI Report** (real-time from database):
  - List of all campaigns with ROI (real-time calculated)
  - Sort by ROI (highest to lowest)
  - Export to PDF, Excel, CSV

- **Customer Segmentation Analysis** (real-time from database):
  - Analyze performance by customer segment\n  - Metrics: Response rate, conversion rate, revenue per segment
  - Identify high-value segments for targeted marketing

**J. Marketing Automation (Advanced Feature)**

- **Automated Campaigns**:
  - **Trigger-Based Campaigns**:
    - Welcome email (triggered on customer registration)
    - Birthday email/SMS (triggered on customer birthday)
    - Abandoned cart reminder (triggered if customer adds items but doesn't order)
    - Re-engagement campaign (triggered if customer inactive for 30 days)
    - Post-order follow-up (triggered 24 hours after order delivery, request review)
  - **Campaign Setup**:
    - Select trigger event\n    - Define delay (e.g., send 1 day after trigger)
    - Create email/SMS/push notification content
    - Activate automation\n  - **Automation Analytics** (real-time from database):\n    - Track performance of each automated campaign
    - Metrics: Trigger count, emails sent, open rate, conversions\n\n- **Drip Campaigns**:
  - **Multi-Step Email Sequences**:
    - Create series of emails sent over time (e.g., Day 1: Welcome, Day 3: Offer, Day 7: Reminder)
    - Define email content for each step
    - Set delay between emails
    - Activate drip campaign
  - **Drip Campaign Analytics** (real-time from database):
    - Track progression through sequence
    - Identify drop-off points
    - Optimize sequence based on performance

---

#### 3.1.12 Complete Settings Module (FULLY FUNCTIONAL)

**Overview**:\nComprehensive settings module accessible from sidebar navigation, providing restaurant owners with complete control over restaurant configuration, operating hours, payment settings, notification preferences, security settings, user preferences, and system settings. **All settings are stored in the database and applied in real-time across the platform.**

**Key Features**:
\n**A. Restaurant Profile Settings**
\n(Content same as section 2.4'Restaurant Profile' in previousdocument, with additional settings below)

- **Restaurant Profile Management**:
  - Edit all restaurant details (name, tagline, logo, banner images, restaurant type, images gallery, contact, location, operating hours, classification, capacity, amenities, description, certifications, additional information)
  - Upload/replace images with drag-and-drop support
  - Preview restaurant profile as customers see it
  - Save changes to database
  - Publish/unpublish restaurant (toggle visibility to customers)
\n- **Multi-Location Management** (if owner has multiple restaurants):
  - Add new restaurant location
  - Switch between locations (dropdown selector in top header)
  - Each location has independent settings and data
  - Consolidated analytics across all locations (optional view)

**B. Operating Hours Settings**

- **Business Hours Configuration**:
  - **Day-Wise Timings** (real-time from database):\n    - For each day of week (Monday to Sunday):
      - Open/Closed toggle
      - Opening time (time picker)
      - Closing time (time picker)
      - Add multiple time slots (e.g., 11:00 AM - 3:00 PM, 6:00 PM - 11:00 PM for split shifts)
      - Break times (optional, e.g., 3:00 PM - 6:00 PM closed for break)
  - **Special Hours**:
    - Add special hours for specific dates (e.g., extended hours on New Year's Eve)
    - Date picker to select date
    - Custom opening and closing times
  - **Holiday Schedule**:
    - Mark holidays (restaurant closed)
    - Add holiday name and date
    - Recurring holidays (e.g., every Sunday)\n  - **Delivery Hours** (if delivery service enabled):
    - Separate timings for delivery service\n    - Can differ from dine-in hours
  - **Takeout Hours** (if takeout service enabled):
    - Separate timings for takeout service
- **Save Changes**: Update operating hours in database
  - **Display on Customer App**: Operating hours displayed on restaurant profile, customers cannot place orders outside operating hours

- **Timezone Settings**:
  - Select restaurant timezone (dropdown with all timezones)
  - All timestamps displayed in selected timezone
\n**C. Payment Settings**
\n- **Payment Methods Configuration**:
  - **Enable/Disable Payment Methods** (checkboxes):
    - Cash on Delivery (COD)
    - Credit/Debit Card
    - Digital Wallets (PayPal, Google Pay, Apple Pay, etc.)
    - UPI (for India)
    - Bank Transfer
    - Cryptocurrency (optional, advanced feature)
  - **Payment Gateway Integration**:
    - Select payment gateway (dropdown: Stripe, PayPal, Razorpay, Square, etc.)
    - Enter API keys (secure input fields)
    - Test connection (button to verify API keys)
    - Enable live mode (toggle between test and live mode)
  - **COD Settings**:
    - Enable/disable COD\n    - COD fee (optional, fixed amount or percentage)
    - COD availability (all orders or orders below certain amount)
  - **Minimum Order Value**:
    - Set minimum order value for online payment (number input)
    - Set minimum order value for COD (number input)
  - **Payment Confirmation**:
    - Auto-confirm payment (toggle, if enabled, orders auto-confirmed upon payment)
    - Manual confirmation (if disabled, owner must manually confirm payment)

- **Tax Settings**:
  - **Tax Configuration**:
    - Enable/disable tax\n    - Tax name (e.g., GST, VAT, Sales Tax)
    - Tax rate (percentage, number input)
    - Tax type (dropdown: Inclusive, Exclusive)\n      - Inclusive: Tax included in item price
      - Exclusive: Tax added on top of item price
    - Tax registration number (text input)
  - **Multiple Tax Rates** (optional):
    - Add multiple tax rates for different item categories
    - E.g., 5% tax on food, 18% tax on alcohol
\n- **Service Charge Settings**:
  - Enable/disable service charge
  - Service charge rate (percentage or fixed amount)
  - Service charge type (dropdown: Mandatory, Optional)
    - Mandatory: Automatically added to all orders
    - Optional: Customer can choose to add or remove\n\n- **Delivery Fee Settings** (if delivery service enabled):
  - Enable/disable delivery fee
  - Delivery fee calculation method (dropdown: Fixed, Distance-Based, Order Value-Based)
    - Fixed: Same fee for all orders (number input)
    - Distance-Based: Fee based on delivery distance (define fee per km)
    - Order Value-Based: Fee based on order total (define fee tiers)
  - Free delivery threshold (number input, free delivery if order value exceeds this amount)
\n- **Tipping Settings**:
  - Enable/disable tipping
  - Suggested tip percentages (e.g., 10%, 15%, 20%)
  - Custom tip option (allow customers to enter custom tip amount)
  - Tip distribution (dropdown: All to waiter, Split among staff, To restaurant)\n
- **Currency Settings**:
  - Select currency (dropdown with all currencies)
  - Currency symbol (auto-filled based on selected currency)
  - Currency format (e.g., $1,234.56 or1.234,56 €)

**D. Notification Settings**

- **Owner Notification Preferences**:
  - **New Order Notifications**:
    - Enable/disable (toggle)
    - Delivery channels (checkboxes: In-App, Email, SMS, Push Notification, Desktop Notification)
    - Sound notification (toggle, enable/disable notification sound)
    - Notification frequency (dropdown: Instant, Every 5 minutes, Every 15 minutes)\n  - **Order Status Update Notifications**:
    - Enable/disable\n    - Delivery channels\n  - **Payment Notifications**:
    - Enable/disable
    - Delivery channels
    - Notify for: All payments, Failed payments only, Large payments (above certain amount)
  - **Customer Message Notifications**:
    - Enable/disable
    - Delivery channels
  - **Low Stock Alerts**:
    - Enable/disable
    - Delivery channels\n    - Alert threshold (notify when stock level falls below X units)
  - **Staff Activity Notifications**:
    - Enable/disable
    - Delivery channels
    - Notify for: Clock in/out, shift changes, leave requests
  - **Review & Feedback Notifications**:
    - Enable/disable
    - Delivery channels
  - **System Alerts**:
    - Enable/disable
    - Delivery channels\n    - Notify for: System maintenance, security alerts, account changes

- **Customer Notification Preferences** (default settings for all customers, customers can override in their profile):
  - **Order Confirmation**:
    - Enable/disable\n    - Delivery channels (Email, SMS, Push Notification)
- **Order Status Updates**:
    - Enable/disable
    - Delivery channels
    - Notify for: Order acknowledged, preparing, ready, out for delivery, delivered
  - **Promotional Notifications**:
    - Enable/disable
    - Delivery channels
    - Frequency (dropdown: Daily, Weekly, Monthly, Never)
  - **Loyalty Program Notifications**:
    - Enable/disable
    - Delivery channels
    - Notify for: Points earned, points redeemed, tier upgrade, reward available
\n- **Staff Notification Preferences** (default settings for all staff, staff can override in their profile):
  - **Shift Notifications**:
    - Enable/disable
    - Delivery channels
    - Notify for: Shift assigned, shift reminder, shift change, shift cancellation
  - **Order Assignment Notifications**:
    - Enable/disable
    - Delivery channels
  - **Announcement Notifications**:
    - Enable/disable
    - Delivery channels
\n- **Email Notification Settings**:
  - **SMTP Configuration** (for sending emails):
    - SMTP server (text input)
    - SMTP port (number input)
    - SMTP username (text input)
    - SMTP password (secure input)
    - Encryption (dropdown: None, SSL, TLS)
    - Test email (button to send test email)
  - **Email Templates**:
    - Customize email templates for different notification types
    - Use drag-and-drop email builder or HTML editor
    - Insert dynamic fields (customer name, order details, etc.)
    - Preview email templates\n\n- **SMS Notification Settings**:
  - **SMS Gateway Configuration**:
    - Select SMS provider (dropdown: Twilio, Nexmo, AWS SNS, etc.)
    - Enter API credentials (secure input)
    - Test SMS (button to send test SMS)
  - **SMS Templates**:
    - Customize SMS templates for different notification types
    - Character limit: 160 characters per SMS
    - Insert dynamic fields\n\n- **Push Notification Settings**:
  - **Push Notification Service**:
    - Select service (dropdown: Firebase Cloud Messaging, OneSignal, etc.)
    - Enter API credentials\n    - Test push notification\n  - **Push Notification Templates**:
    - Customize push notification title and message for different notification types
\n**E. Security Settings**
\n- **Password Policy**:
  - Minimum password length (number input, default: 12)
  - Require uppercase letters (toggle)
  - Require lowercase letters (toggle)
  - Require numbers (toggle)
  - Require special characters (toggle)
  - Password expiry (toggle, force password change every X days)
  - Password history (number input, prevent reuse of last X passwords)

- **Two-Factor Authentication (2FA)**:
  - Enable/disable 2FA for owner account (toggle, mandatory for owners)
  - 2FA method (dropdown: Authenticator App, SMS, Email)\n  - Setup 2FA (button to configure 2FA)
  - Backup codes (generate and download backup codes for account recovery)

- **Session Management**:
  - Session timeout (number input, auto-logout after X minutes of inactivity)
  - Maximum concurrent sessions (number input, limit number of devices logged in simultaneously)
  - Force logout on password change (toggle)

- **Login Security**:
  - Account lockout (toggle, lock account after X failed login attempts)
  - Lockout duration (number input, minutes)
  - Login alerts (toggle, send email/SMS alert on new device login)
  - Suspicious activity detection (toggle, AI-powered detection of unusual login patterns)

- **Data Privacy**:
  - GDPR compliance (toggle, enable GDPR-compliant data handling)
  - Data retention policy (number input, delete customer data after X days of inactivity)
  - Right to be forgotten (toggle, allow customers to request data deletion)
  - Cookie consent (toggle, display cookie consent banner on website)

- **API Security**:
  - API key management (generate, revoke, regenerate API keys)
  - API rate limiting (number input, limit API requests per minute)
  - IP whitelisting (text area, allow API access only from specific IP addresses)
\n- **Audit Logs**:
  - Enable/disable audit logging (toggle)
  - Log retention period (number input, days)
  - View audit logs (button to open audit log viewer)
  - Audit log includes: User actions, login attempts, data changes, system events

**F. User Preferences**

- **Language Settings**:
  - Select interface language (dropdown: English, Spanish, French, German, Chinese, Hindi, etc.)
  - Date format (dropdown: MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)\n  - Time format (dropdown: 12-hour, 24-hour)\n  - Number format (dropdown: 1,234.56 or 1.234,56)\n\n- **Theme Settings**:
  - Select theme (dropdown: Dark Mode, Light Mode, Auto - based on system preference)
  - Accent color (color picker, customize primary accent color)
  - Font size (dropdown: Small, Medium, Large, Extra Large)
\n- **Dashboard Preferences**:
  - Default dashboard view (dropdown: Owner Home Screen, Orders, Analytics, etc.)
  - Widget customization (drag-and-drop to rearrange dashboard widgets)
  - Show/hide widgets (checkboxes to toggle visibility of specific widgets)

- **Accessibility Settings**:
  - High contrast mode (toggle)\n  - Reduce motion (toggle, disable animations for users with motion sensitivity)
  - Screen reader support (toggle)\n  - Keyboard navigation (toggle, enable keyboard shortcuts)

**G. Integration Settings**

- **Third-Party Integrations**:\n  - **Accounting Software** (QuickBooks, Xero, etc.):
    - Connect account (OAuth authentication)
    - Sync settings (auto-sync orders, payments, expenses)
    - Sync frequency (dropdown: Real-time, Hourly, Daily)\n  - **Delivery Partners** (Uber Eats, DoorDash, etc.):
    - Connect account\n    - Sync menu and orders
  - **POS Systems**:
    - Connect POS system (enter API credentials)
    - Sync orders and inventory
  - **CRM Systems** (Salesforce, HubSpot, etc.):
    - Connect account
    - Sync customer data
  - **Analytics Tools** (Google Analytics, Mixpanel, etc.):
    - Enter tracking ID
    - Enable event tracking

- **API Access**:
  - Generate API keys for custom integrations
  - API documentation link
  - Webhook configuration (enter webhook URL for real-time event notifications)

**H. System Settings**

- **Backup & Restore**:
  - **Automated Backups**:
    - Enable/disable automated backups (toggle)
    - Backup frequency (dropdown: Daily, Weekly, Monthly)\n    - Backup retention (number input, keep backups for X days)
    - Backup storage location (dropdown: Cloud Storage, Local Server)
  - **Manual Backup**:
    - Create backup now (button to trigger immediate backup)
    - Download backup (button to download backup file)\n  - **Restore from Backup**:
    - Upload backup file (file upload)\n    - Restore data (button to restore from uploaded backup)
    - Warning: Restoring will overwrite current data

- **Data Export**:
  - Export all data (button to export complete database)
  - Export format (dropdown: JSON, CSV, SQL)
  - Download exported data\n
- **System Maintenance**:
  - **Maintenance Mode**:
    - Enable/disable maintenance mode (toggle)\n    - Maintenance message (text area, message displayed to users during maintenance)
    - Scheduled maintenance (date-time picker, schedule maintenance for future)\n  - **Clear Cache**:
    - Clear application cache (button)\n    - Clear database cache (button)
  - **System Logs**:
    - View system logs (button to open log viewer)
    - Download logs (button to download log files)

- **Software Updates**:
  - Check for updates (button to check for new software versions)
  - Current version (display current software version)
  - Available updates (display list of available updates)
  - Install updates (button to install updates)
  - Auto-update (toggle, enable automatic updates)

**I. Billing & Subscription Settings** (if platform uses subscription model)\n
- **Subscription Plan**:
  - Current plan (display current subscription plan: Free, Basic, Pro, Enterprise)
  - Plan features (list of features included in current plan)
  - Upgrade plan (button to upgrade to higher plan)
  - Downgrade plan (button to downgrade to lower plan)
  - Cancel subscription (button to cancel subscription)

- **Billing Information**:
  - Billing name (text input)
  - Billing address (text area)
  - Payment method (display saved payment method)
  - Update payment method (button to update credit card or payment method)
\n- **Billing History**:
  - List of past invoices with date, amount, status (Paid, Pending, Failed)
  - Download invoice (button to download PDF invoice)
\n- **Usage Statistics**:
  - Current usage (display current usage metrics: orders processed, storage used, API calls, etc.)
  - Usage limits (display limits based on subscription plan)
  - Overage charges (display additional charges if usage exceeds plan limits)

**J. Help & Support Settings**

- **Support Contact**:
  - Support email (display support email address)
  - Support phone (display support phone number)
  - Live chat (button to open live chat with support team)
\n- **Documentation**:
  - User manual (link to comprehensive user manual)
  - Video tutorials (link to video tutorial library)
  - FAQs (link to frequently asked questions)

- **Feature Requests**:
  - Submit feature request (form to submit new feature ideas)
  - View feature roadmap (link to public roadmap showing upcoming features)

- **Bug Reports**:
  - Report a bug (form to submit bug reports)
  - Bug tracking (link to bug tracker to view status of reported bugs)

**K. Advanced Settings**

- **Developer Mode**:
  - Enable/disable developer mode (toggle, enables advanced features for developers)
  - API playground (interactive API testing tool)
  - Webhook logs (view logs of webhook events)

- **Experimental Features**:
  - Enable/disable experimental features (toggle, opt-in to beta features)
  - List of experimental features with descriptions
\n- **Custom CSS/JavaScript**:
  - Add custom CSS (text area, inject custom CSS for advanced UI customization)
  - Add custom JavaScript (text area, inject custom JavaScript for advanced functionality)
  - Warning: Use with caution, incorrect code may break the application

---

### 3.2 Enhanced Customer Features

(All customer features remain the same as previousdocument, with all data real-time from database)

## 4. Complete User Flows

(All user flows remain the same as previous document, with all data real-time from database)

## 5. Advanced Design System with Futuristic UI Specifications

(All design system specifications remain the same as previous document)\n
## 6. Technical Considerations

(All technical considerations remain the same as previous document)

## 7. Future Enhancements

(Content remains the same as previous document)
\n## 8. Design Style\n
**Overall Aesthetic**: Dark-themed futuristic interface with neon accents (electric cyan, vibrant magenta, electric blue), glassmorphism effects (frosted glass cards with background blur and semi-transparent backgrounds), smooth gradients, multi-layered UI with floating elements, subtle shadows, and 3D effects.

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