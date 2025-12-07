# ⚡ Quick Start Guide - DineQR

Get your DineQR Restaurant Menu System up and running in minutes!

---

## 🎯 Overview

This guide will help you:
1. Set up Supabase backend (10 minutes)
2. Configure local environment (2 minutes)
3. Run the application (1 minute)
4. Deploy to Netlify (5 minutes)

**Total Time**: ~20 minutes

---

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ Node.js 18+ installed
- ✅ pnpm installed (`npm install -g pnpm`)
- ✅ Git installed
- ✅ Modern web browser
- ✅ Email address (for Supabase account)

---

## 🚀 Step-by-Step Setup

### Step 1: Clone the Repository (1 min)

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to project directory
cd app-7x1ojvae4075

# Install dependencies
pnpm install
```

---

### Step 2: Set Up Supabase Backend (10 min)

#### 2.1 Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Sign Up"**
3. Sign up with GitHub, Google, or Email
4. Verify your email

#### 2.2 Create New Project

1. Click **"New Project"**
2. Fill in details:
   - **Name**: `dineqr-restaurant`
   - **Database Password**: Generate strong password (save it!)
   - **Region**: Choose closest to your users
   - **Plan**: Free (for development)
3. Click **"Create new project"**
4. Wait 2-3 minutes for setup

#### 2.3 Get API Credentials

1. Go to **Settings** → **API**
2. Copy two values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...`

#### 2.4 Run Database Migrations

1. Go to **SQL Editor** in Supabase dashboard
2. Click **"New query"**
3. Open `supabase/migrations/001_initial_schema.sql` from your project
4. Copy and paste the SQL
5. Click **"Run"**
6. Repeat for all migration files in order

**Detailed instructions**: See [SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md)

---

### Step 3: Configure Environment (2 min)

#### 3.1 Create .env File

```bash
# In project root directory
touch .env
```

#### 3.2 Add Credentials

Open `.env` and add:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# App Configuration
VITE_APP_ID=dineqr
VITE_API_ENV=development
```

**Replace**:
- `your-project-id` with your actual Supabase project ID
- `your-anon-key-here` with your anon public key

---

### Step 4: Run the Application (1 min)

```bash
# Start development server
pnpm run dev
```

**Expected output**:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Open browser**: http://localhost:5173/

---

### Step 5: Test the Application (2 min)

#### 5.1 Register a User

1. Click **"Sign Up"** or **"Register"**
2. Fill in:
   - Email
   - Password
   - User type (Customer or Owner)
3. Click **"Register"**

#### 5.2 Verify in Supabase

1. Go to Supabase dashboard
2. Click **"Authentication"** → **"Users"**
3. You should see your new user

#### 5.3 Test Features

**As Customer**:
- Scan QR code (use test QR code)
- Browse menu
- Place order

**As Owner**:
- Create restaurant
- Add menu items
- Generate QR codes
- View orders

---

### Step 6: Deploy to Netlify (5 min)

#### 6.1 Build the Project

```bash
# Build for production
pnpm run build
```

#### 6.2 Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Login
netlify login
```

#### 6.3 Deploy

```bash
# Initialize Netlify site
netlify init

# Follow prompts:
# - Create & configure a new site
# - Build command: pnpm run build
# - Publish directory: dist

# Deploy to production
netlify deploy --prod
```

#### 6.4 Add Environment Variables

1. Go to Netlify dashboard
2. Click your site
3. Go to **Site settings** → **Environment variables**
4. Add variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_APP_ID`
   - `VITE_API_ENV=production`
5. Trigger new deployment

**Detailed instructions**: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## ✅ Verification Checklist

After setup, verify everything works:

### Local Development
- [ ] Application loads at http://localhost:5173/
- [ ] Splash screen appears
- [ ] Can register new user
- [ ] Can login
- [ ] Can view pages without errors
- [ ] PWA install prompt appears

### Supabase Backend
- [ ] Project created and active
- [ ] All migrations run successfully
- [ ] Tables visible in Table Editor
- [ ] User appears in Authentication
- [ ] Storage bucket created

### Netlify Deployment
- [ ] Site deployed successfully
- [ ] Live URL accessible
- [ ] Environment variables set
- [ ] Application loads correctly
- [ ] Can register/login on live site
- [ ] PWA installable on live site

---

## 🎨 Next Steps

### Add Sample Data

1. **Create a Restaurant**:
   - Login as owner
   - Go to "My Restaurant"
   - Fill in restaurant details
   - Save

2. **Add Menu Categories**:
   - Go to "Menu Management"
   - Add categories (Appetizers, Main Course, Desserts, Beverages)

3. **Add Menu Items**:
   - Select a category
   - Add items with:
     - Name
     - Description
     - Price
     - Image (optional)

4. **Generate QR Codes**:
   - Go to "QR Codes"
   - Add tables
   - Generate QR codes
   - Download and print

### Test Customer Flow

1. **Scan QR Code**:
   - Open app as customer
   - Use QR scanner
   - Scan table QR code

2. **Browse Menu**:
   - View menu items
   - See images and prices
   - Read descriptions

3. **Place Order**:
   - Select items
   - Add to cart
   - Customize order
   - Submit order

4. **Track Order**:
   - View order status
   - Receive updates
   - View bill

### Customize Your App

1. **Branding**:
   - Update app name in `manifest.json`
   - Change colors in `tailwind.config.mjs`
   - Replace icons in `public/icons/`

2. **Features**:
   - Enable/disable features
   - Customize menu categories
   - Adjust pricing

3. **Settings**:
   - Configure email templates
   - Set up payment gateway
   - Customize notifications

---

## 📚 Documentation

For detailed information, see:

- **[SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md)** - Complete Supabase setup
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Deployment instructions
- **[README.md](./README.md)** - Project overview
- **[PWA_GUIDE.md](./PWA_GUIDE.md)** - PWA features
- **[COMPLETE_PROJECT_SUMMARY.md](./COMPLETE_PROJECT_SUMMARY.md)** - Full project details

---

## 🆘 Troubleshooting

### Issue: "Invalid API Key"

**Solution**:
1. Check `.env` file has correct credentials
2. Verify no extra spaces in API key
3. Restart dev server: `pnpm run dev`

### Issue: "Failed to Fetch"

**Solution**:
1. Check Supabase project URL is correct
2. Verify internet connection
3. Check Supabase project is active

### Issue: "Row Level Security Error"

**Solution**:
1. Verify all migrations ran successfully
2. Check RLS policies in Supabase dashboard
3. Ensure user is authenticated

### Issue: "Build Failed"

**Solution**:
1. Run `pnpm install` again
2. Clear cache: `rm -rf node_modules .vite`
3. Reinstall: `pnpm install`
4. Build again: `pnpm run build`

### Issue: "Deployment Failed"

**Solution**:
1. Check environment variables in Netlify
2. Verify build command: `pnpm run build`
3. Verify publish directory: `dist`
4. Check build logs for errors

---

## 💡 Tips

### Development

1. **Use React DevTools**:
   - Install React DevTools extension
   - Inspect components
   - Debug state

2. **Check Browser Console**:
   - Open DevTools (F12)
   - Look for errors
   - Check network requests

3. **Test on Mobile**:
   - Use Chrome DevTools device emulation
   - Test on real devices
   - Check responsive design

### Production

1. **Monitor Performance**:
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Optimize images

2. **Test PWA Features**:
   - Install app on devices
   - Test offline mode
   - Verify update notifications

3. **Collect Feedback**:
   - Add feedback form
   - Monitor user behavior
   - Iterate based on feedback

---

## 🎉 Success!

Congratulations! Your DineQR Restaurant Menu System is now:

✅ **Running locally** at http://localhost:5173/  
✅ **Connected to Supabase** backend  
✅ **Deployed to Netlify** (if completed Step 6)  
✅ **Ready for testing** and customization  

---

## 🚀 What's Next?

1. **Customize** your restaurant details
2. **Add** menu items and categories
3. **Generate** QR codes for tables
4. **Test** the complete ordering flow
5. **Share** with your team for feedback
6. **Deploy** to production when ready

---

## 📞 Need Help?

- **Documentation**: Check the guides in this repository
- **Supabase Help**: https://supabase.com/docs
- **Netlify Help**: https://docs.netlify.com
- **Issues**: Create an issue in the repository

---

**Last Updated**: December 7, 2025  
**Version**: 1.0  
**Status**: ✅ Complete  

---

**⚡ Happy coding! ⚡**

Your DineQR application is ready to revolutionize restaurant ordering!
