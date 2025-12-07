# 🗄️ Supabase Setup Guide - DineQR

Complete guide for setting up Supabase backend for the DineQR Restaurant Menu System.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step 1: Create Supabase Account](#step-1-create-supabase-account)
- [Step 2: Create New Project](#step-2-create-new-project)
- [Step 3: Get API Credentials](#step-3-get-api-credentials)
- [Step 4: Configure Environment Variables](#step-4-configure-environment-variables)
- [Step 5: Run Database Migrations](#step-5-run-database-migrations)
- [Step 6: Configure Authentication](#step-6-configure-authentication)
- [Step 7: Set Up Storage Buckets](#step-7-set-up-storage-buckets)
- [Step 8: Configure Row Level Security](#step-8-configure-row-level-security)
- [Step 9: Test Database Connection](#step-9-test-database-connection)
- [Step 10: Deploy Edge Functions (Optional)](#step-10-deploy-edge-functions-optional)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

---

## Overview

DineQR uses Supabase as its Backend-as-a-Service (BaaS) platform, providing:

- **PostgreSQL Database** - Store restaurant, menu, order, and user data
- **Authentication** - User registration and login (email/password)
- **Storage** - Image uploads for menu items
- **Real-time Subscriptions** - Live order updates
- **Row Level Security** - Data access control
- **Edge Functions** - Serverless functions (if needed)

---

## Prerequisites

Before starting, ensure you have:

- ✅ A valid email address
- ✅ Modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ DineQR project cloned locally
- ✅ Node.js and pnpm installed
- ✅ Basic understanding of SQL (helpful but not required)

---

## Step 1: Create Supabase Account

### 1.1 Sign Up

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"Sign Up"**
3. Choose sign-up method:
   - **GitHub** (recommended for developers)
   - **Email/Password**
   - **Google**
   - **GitLab**

4. Complete the sign-up process
5. Verify your email (if using email/password)

### 1.2 Login

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign in with your credentials
3. You'll see the Supabase dashboard

---

## Step 2: Create New Project

### 2.1 Create Project

1. Click **"New Project"** button
2. Select your organization (or create a new one)
3. Fill in project details:

   **Project Name**: `dineqr-restaurant` (or your preferred name)
   
   **Database Password**: 
   - Generate a strong password
   - **IMPORTANT**: Save this password securely
   - You'll need it for direct database access
   
   **Region**: Choose the closest region to your users
   - `US East (North Virginia)` - For US East Coast
   - `US West (Oregon)` - For US West Coast
   - `Europe (Frankfurt)` - For Europe
   - `Asia Pacific (Singapore)` - For Asia
   - `Asia Pacific (Sydney)` - For Australia
   
   **Pricing Plan**: 
   - **Free** - For development and testing (recommended to start)
   - **Pro** - For production with more resources
   - **Team** - For team collaboration
   - **Enterprise** - For large-scale applications

4. Click **"Create new project"**
5. Wait 2-3 minutes for project initialization

### 2.2 Project Created

Once created, you'll see:
- ✅ Project dashboard
- ✅ Database status: Active
- ✅ API status: Active
- ✅ Storage status: Active

---

## Step 3: Get API Credentials

### 3.1 Navigate to Settings

1. In your project dashboard, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings

### 3.2 Copy Credentials

You'll need two values:

#### Project URL
```
https://your-project-id.supabase.co
```
- Located under **"Project URL"**
- Example: `https://abcdefghijklmnop.supabase.co`

#### API Keys

**anon (public) key**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
- Located under **"Project API keys"** → **"anon public"**
- This key is safe to use in your frontend
- Used for client-side operations

**service_role (secret) key**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
- Located under **"Project API keys"** → **"service_role"**
- ⚠️ **NEVER expose this key in frontend code**
- Only use in backend/server-side code
- Has full database access

### 3.3 Save Credentials

**IMPORTANT**: Save these credentials securely:
1. Copy to a password manager
2. Store in a secure note
3. You'll use them in the next step

---

## Step 4: Configure Environment Variables

### 4.1 Create .env File

In your DineQR project root directory:

```bash
# Navigate to project directory
cd /path/to/app-7x1ojvae4075

# Create .env file
touch .env
```

### 4.2 Add Supabase Credentials

Open `.env` file and add:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here

# App Configuration
VITE_APP_ID=dineqr
VITE_API_ENV=development
```

**Replace**:
- `your-project-id` with your actual project ID
- `your-anon-public-key-here` with your anon public key

**Example**:
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDAwMDAwMCwiZXhwIjoxOTQ1NTc2MDAwfQ.abcdefghijklmnopqrstuvwxyz1234567890
VITE_APP_ID=dineqr
VITE_API_ENV=development
```

### 4.3 Verify .gitignore

Ensure `.env` is in `.gitignore`:

```bash
# Check if .env is ignored
cat .gitignore | grep .env
```

If not present, add it:

```bash
echo ".env" >> .gitignore
```

---

## Step 5: Run Database Migrations

### 5.1 Understanding Migrations

DineQR includes pre-written SQL migrations that create:
- Database tables (profiles, restaurants, menu_items, orders, etc.)
- Row Level Security policies
- Database functions
- Indexes for performance

### 5.2 Locate Migration Files

Migrations are in:
```
supabase/migrations/
├── 001_initial_schema.sql
├── 002_menu_management.sql
├── 003_order_system.sql
└── ... (other migrations)
```

### 5.3 Run Migrations via SQL Editor

#### Method 1: Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Click **"SQL Editor"** in the left sidebar
3. Click **"New query"**
4. Open first migration file: `supabase/migrations/001_initial_schema.sql`
5. Copy the entire SQL content
6. Paste into SQL Editor
7. Click **"Run"** (or press Ctrl+Enter / Cmd+Enter)
8. Wait for success message: ✅ "Success. No rows returned"
9. Repeat for each migration file in order

#### Method 2: Using Supabase CLI (Advanced)

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-id

# Run migrations
supabase db push
```

### 5.4 Verify Tables Created

1. In Supabase dashboard, click **"Table Editor"**
2. You should see tables:
   - `profiles`
   - `restaurants`
   - `categories`
   - `menu_items`
   - `tables`
   - `orders`
   - `order_items`
   - `bills`
   - `qr_codes`

3. Click on each table to verify structure

---

## Step 6: Configure Authentication

### 6.1 Enable Email Authentication

1. Go to **"Authentication"** in left sidebar
2. Click **"Providers"**
3. Ensure **"Email"** is enabled (should be by default)

### 6.2 Configure Email Settings

#### Email Templates

1. Go to **"Authentication"** → **"Email Templates"**
2. Customize templates (optional):
   - **Confirm signup** - Welcome email
   - **Invite user** - Team invitations
   - **Magic Link** - Passwordless login
   - **Change Email Address** - Email change confirmation
   - **Reset Password** - Password reset

#### Email Auth Settings

1. Go to **"Authentication"** → **"Settings"**
2. Configure:

   **Site URL**: `http://localhost:5173` (for development)
   - Change to your production URL when deploying
   - Example: `https://dineqr.netlify.app`

   **Redirect URLs**: Add allowed redirect URLs
   - `http://localhost:5173/**`
   - `https://yourdomain.com/**`

   **Email Confirmation**: 
   - ✅ Enable if you want users to verify email
   - ❌ Disable for faster testing (not recommended for production)

   **Password Requirements**:
   - Minimum length: 8 characters (recommended)
   - Require uppercase: Optional
   - Require lowercase: Optional
   - Require numbers: Optional
   - Require special characters: Optional

### 6.3 Configure User Roles

DineQR uses three roles:
- **customer** - Regular customers
- **owner** - Restaurant owners
- **admin** - System administrators

Roles are managed in the `profiles` table via the `role` column.

---

## Step 7: Set Up Storage Buckets

### 7.1 Create Storage Bucket

1. Go to **"Storage"** in left sidebar
2. Click **"Create a new bucket"**
3. Configure bucket:

   **Name**: `menu-images`
   
   **Public bucket**: ✅ Enable
   - Allows public access to menu images
   - Required for displaying images to customers
   
   **File size limit**: `1 MB` (default)
   - Adjust if you need larger images
   - Recommended: Keep under 2 MB for performance
   
   **Allowed MIME types**: 
   - `image/jpeg`
   - `image/png`
   - `image/webp`
   - `image/gif`

4. Click **"Create bucket"**

### 7.2 Configure Bucket Policies

1. Click on the `menu-images` bucket
2. Go to **"Policies"** tab
3. Add policies:

#### Policy 1: Public Read Access

```sql
-- Allow anyone to read images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'menu-images');
```

#### Policy 2: Authenticated Upload

```sql
-- Allow authenticated users to upload
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'menu-images');
```

#### Policy 3: Owner Update/Delete

```sql
-- Allow users to update/delete their own images
CREATE POLICY "Owner Update Delete"
ON storage.objects FOR UPDATE, DELETE
TO authenticated
USING (bucket_id = 'menu-images' AND auth.uid() = owner);
```

### 7.3 Test Storage

1. Click **"Upload file"** in the bucket
2. Select a test image
3. Upload and verify it appears
4. Copy the public URL
5. Open URL in browser to verify public access

---

## Step 8: Configure Row Level Security

### 8.1 Understanding RLS

Row Level Security (RLS) controls who can access which rows in your tables.

DineQR RLS policies:
- **Customers** can only see their own orders
- **Owners** can see all data for their restaurants
- **Admins** can see all data
- **Public** can view menus and restaurant info

### 8.2 Verify RLS is Enabled

1. Go to **"Table Editor"**
2. Click on a table (e.g., `profiles`)
3. Check if RLS is enabled (shield icon should be green)
4. If not enabled, click **"Enable RLS"**

### 8.3 View Existing Policies

1. In **"Table Editor"**, click on a table
2. Go to **"Policies"** tab
3. You should see policies created by migrations

### 8.4 Test RLS Policies

#### Test as Anonymous User

1. Go to **"SQL Editor"**
2. Run query:

```sql
-- Should return only public data
SELECT * FROM restaurants WHERE is_active = true;
```

#### Test as Authenticated User

1. Create a test user in **"Authentication"** → **"Users"**
2. Use SQL Editor with user context:

```sql
-- Set user context
SET LOCAL role TO authenticated;
SET LOCAL request.jwt.claims TO '{"sub": "user-id-here"}';

-- Test query
SELECT * FROM orders WHERE user_id = 'user-id-here';
```

---

## Step 9: Test Database Connection

### 9.1 Test in Application

1. Start your DineQR application:

```bash
cd /path/to/app-7x1ojvae4075
pnpm install
pnpm run dev
```

2. Open browser: `http://localhost:5173`
3. Try to register a new user
4. Check if registration succeeds

### 9.2 Verify in Supabase Dashboard

1. Go to **"Authentication"** → **"Users"**
2. You should see the newly registered user
3. Go to **"Table Editor"** → **"profiles"**
4. You should see a profile entry for the user

### 9.3 Test Database Queries

In your application, open browser console (F12) and run:

```javascript
// Test Supabase connection
const { data, error } = await window.supabase
  .from('restaurants')
  .select('*')
  .limit(5);

console.log('Restaurants:', data);
console.log('Error:', error);
```

Expected result:
- `data`: Array of restaurants (or empty array)
- `error`: null

---

## Step 10: Deploy Edge Functions (Optional)

### 10.1 When to Use Edge Functions

Use Edge Functions for:
- Payment processing
- Sending emails
- Third-party API calls with secrets
- Complex business logic
- Scheduled tasks (cron jobs)

### 10.2 Create Edge Function

1. Go to **"Edge Functions"** in left sidebar
2. Click **"Create a new function"**
3. Enter function name: `process-payment`
4. Write function code:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { amount, orderId } = await req.json()
  
  // Process payment logic here
  
  return new Response(
    JSON.stringify({ success: true, orderId }),
    { headers: { "Content-Type": "application/json" } }
  )
})
```

5. Click **"Deploy"**

### 10.3 Test Edge Function

```bash
# Using curl
curl -X POST https://your-project-id.supabase.co/functions/v1/process-payment \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"amount": 100, "orderId": "123"}'
```

---

## Troubleshooting

### Issue 1: "Invalid API Key" Error

**Problem**: Application shows "Invalid API key" error

**Solutions**:

1. **Verify API key is correct**:
   - Go to Supabase dashboard → Settings → API
   - Copy the anon public key again
   - Update `.env` file

2. **Check for extra spaces**:
   ```env
   # Wrong (has spaces)
   VITE_SUPABASE_ANON_KEY= eyJhbGci...
   
   # Correct (no spaces)
   VITE_SUPABASE_ANON_KEY=eyJhbGci...
   ```

3. **Restart development server**:
   ```bash
   # Stop server (Ctrl+C)
   # Start again
   pnpm run dev
   ```

### Issue 2: "Failed to Fetch" Error

**Problem**: Application can't connect to Supabase

**Solutions**:

1. **Check project URL**:
   - Verify URL in `.env` matches Supabase dashboard
   - Should be: `https://your-project-id.supabase.co`

2. **Check internet connection**:
   - Ensure you're online
   - Try accessing Supabase dashboard

3. **Check CORS settings**:
   - Go to Settings → API → CORS
   - Add your local URL: `http://localhost:5173`

### Issue 3: "Row Level Security" Error

**Problem**: "new row violates row-level security policy"

**Solutions**:

1. **Check if RLS is enabled**:
   - Go to Table Editor → Select table
   - If RLS is enabled but no policies exist, add policies

2. **Verify user is authenticated**:
   ```javascript
   const { data: { user } } = await supabase.auth.getUser()
   console.log('Current user:', user)
   ```

3. **Check policy conditions**:
   - Go to Table Editor → Policies tab
   - Verify policies allow the operation

### Issue 4: "Storage Upload Failed"

**Problem**: Image upload fails

**Solutions**:

1. **Check bucket exists**:
   - Go to Storage
   - Verify `menu-images` bucket exists

2. **Check file size**:
   - Ensure file is under 1 MB (or your limit)
   - Compress image if needed

3. **Check MIME type**:
   - Ensure file type is allowed
   - Supported: JPEG, PNG, WebP, GIF

4. **Check storage policies**:
   - Verify upload policy exists
   - Test with SQL Editor

### Issue 5: "Migration Failed"

**Problem**: SQL migration returns error

**Solutions**:

1. **Check for syntax errors**:
   - Review SQL carefully
   - Look for missing semicolons

2. **Run migrations in order**:
   - Start with `001_initial_schema.sql`
   - Run each migration sequentially

3. **Check for existing objects**:
   - If table already exists, drop it first:
   ```sql
   DROP TABLE IF EXISTS table_name CASCADE;
   ```

4. **View error details**:
   - SQL Editor shows detailed error messages
   - Read error carefully for clues

---

## Best Practices

### Security

1. **Never commit `.env` file**:
   ```bash
   # Verify .env is in .gitignore
   cat .gitignore | grep .env
   ```

2. **Use environment variables**:
   - Never hardcode API keys in code
   - Always use `import.meta.env.VITE_SUPABASE_URL`

3. **Rotate keys regularly**:
   - Generate new API keys every 6 months
   - Update in all environments

4. **Use service_role key carefully**:
   - Only in backend/server code
   - Never in frontend
   - Store in secure environment variables

### Performance

1. **Use indexes**:
   ```sql
   -- Add indexes for frequently queried columns
   CREATE INDEX idx_orders_user_id ON orders(user_id);
   CREATE INDEX idx_menu_items_restaurant_id ON menu_items(restaurant_id);
   ```

2. **Optimize queries**:
   ```javascript
   // Good: Select only needed columns
   const { data } = await supabase
     .from('menu_items')
     .select('id, name, price')
   
   // Bad: Select all columns
   const { data } = await supabase
     .from('menu_items')
     .select('*')
   ```

3. **Use pagination**:
   ```javascript
   const { data } = await supabase
     .from('orders')
     .select('*')
     .range(0, 9) // First 10 items
   ```

4. **Enable caching**:
   - Use React Query or SWR for client-side caching
   - Reduce unnecessary API calls

### Database Design

1. **Use foreign keys**:
   ```sql
   CREATE TABLE orders (
     id UUID PRIMARY KEY,
     user_id UUID REFERENCES profiles(id),
     restaurant_id UUID REFERENCES restaurants(id)
   );
   ```

2. **Add constraints**:
   ```sql
   ALTER TABLE menu_items
   ADD CONSTRAINT price_positive CHECK (price > 0);
   ```

3. **Use enums for fixed values**:
   ```sql
   CREATE TYPE order_status AS ENUM ('pending', 'preparing', 'ready', 'delivered');
   ```

4. **Add timestamps**:
   ```sql
   CREATE TABLE orders (
     id UUID PRIMARY KEY,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

### Monitoring

1. **Enable logging**:
   - Go to Settings → Logs
   - Monitor API requests
   - Check for errors

2. **Set up alerts**:
   - Configure email alerts for errors
   - Monitor database size
   - Track API usage

3. **Review metrics**:
   - Go to Home → Project metrics
   - Check database size
   - Monitor API requests
   - Review bandwidth usage

---

## Production Checklist

Before deploying to production:

### Database
- [ ] All migrations run successfully
- [ ] RLS policies tested and working
- [ ] Indexes created for performance
- [ ] Foreign keys and constraints added
- [ ] Backup strategy in place

### Authentication
- [ ] Email confirmation enabled
- [ ] Password requirements set
- [ ] Site URL updated to production domain
- [ ] Redirect URLs configured
- [ ] Email templates customized

### Storage
- [ ] Buckets created
- [ ] Policies configured
- [ ] File size limits set
- [ ] MIME types restricted
- [ ] CDN configured (if needed)

### Security
- [ ] API keys rotated
- [ ] Environment variables secured
- [ ] RLS enabled on all tables
- [ ] Service role key protected
- [ ] CORS configured correctly

### Performance
- [ ] Indexes optimized
- [ ] Queries optimized
- [ ] Caching implemented
- [ ] Connection pooling configured
- [ ] Database size monitored

### Monitoring
- [ ] Logging enabled
- [ ] Alerts configured
- [ ] Metrics dashboard set up
- [ ] Error tracking implemented
- [ ] Backup schedule verified

---

## Quick Reference

### Essential URLs

- **Supabase Dashboard**: https://app.supabase.com
- **Documentation**: https://supabase.com/docs
- **API Reference**: https://supabase.com/docs/reference
- **Community**: https://github.com/supabase/supabase/discussions

### Common Commands

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-id

# Run migrations
supabase db push

# Generate types
supabase gen types typescript --local > src/types/database.ts

# Start local development
supabase start

# Stop local development
supabase stop
```

### Environment Variables

```env
# Development
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APP_ID=dineqr
VITE_API_ENV=development

# Production
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APP_ID=dineqr
VITE_API_ENV=production
```

---

## Support

### Getting Help

1. **Supabase Documentation**: https://supabase.com/docs
2. **Supabase Discord**: https://discord.supabase.com
3. **GitHub Discussions**: https://github.com/supabase/supabase/discussions
4. **Stack Overflow**: Tag questions with `supabase`

### Reporting Issues

1. Check existing issues: https://github.com/supabase/supabase/issues
2. Create new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Error messages
   - Environment details

---

## Summary

### What You've Accomplished

✅ Created Supabase account and project
✅ Configured API credentials
✅ Set up environment variables
✅ Ran database migrations
✅ Configured authentication
✅ Set up storage buckets
✅ Configured Row Level Security
✅ Tested database connection
✅ Deployed Edge Functions (optional)

### Next Steps

1. **Test your application**:
   ```bash
   pnpm run dev
   ```

2. **Register a test user**:
   - Open http://localhost:5173
   - Create account
   - Verify in Supabase dashboard

3. **Add sample data**:
   - Create a restaurant
   - Add menu items
   - Test ordering flow

4. **Deploy to production**:
   - Follow DEPLOYMENT_GUIDE.md
   - Update environment variables
   - Test production deployment

---

**Last Updated**: December 7, 2025  
**Version**: 1.0  
**Status**: ✅ Complete  
**Project**: DineQR Restaurant Menu System

---

**🗄️ Your Supabase backend is ready! 🗄️**

Follow this guide to set up Supabase for your DineQR application. Your backend will be configured and ready to handle all restaurant menu management and ordering operations!
