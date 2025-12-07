# 🚀 DineQR - Deployment Guide

## Overview

This guide provides step-by-step instructions for running the DineQR Restaurant Menu System locally and deploying it to Netlify.

---

## 📋 Prerequisites

### Required Software

- **Node.js**: Version 18.x or higher
- **pnpm**: Version 8.x or higher (recommended) or npm
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Check Installed Versions

```bash
# Check Node.js version
node --version

# Check pnpm version
pnpm --version

# Check npm version (alternative)
npm --version

# Check Git version
git --version
```

### Install pnpm (if not installed)

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using Scoop (Windows)
scoop install pnpm
```

---

## 🏠 Running Locally

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to project directory
cd app-7x1ojvae4075
```

### Step 2: Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

**Note**: The project uses cached dependencies, so installation should be fast.

### Step 3: Environment Setup

The project uses environment variables for configuration.

#### 3.1 Set Up Supabase Backend

**IMPORTANT**: Before running the app, you need to set up Supabase backend.

Follow the complete guide: [SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md)

Quick steps:
1. Create Supabase account at https://supabase.com
2. Create new project
3. Get API credentials (URL and anon key)
4. Run database migrations
5. Configure authentication

#### 3.2 Create .env File

Create `.env` file in project root:

```bash
# Create .env file
touch .env
```

#### 3.3 Add Environment Variables

Open `.env` and add your Supabase credentials:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
VITE_APP_ID=dineqr
VITE_API_ENV=development
```

**Replace**:
- `your_supabase_url` with your Supabase project URL
- `your_supabase_anon_key` with your Supabase anon public key

**Example**:
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_APP_ID=dineqr
VITE_API_ENV=development
```

**Note**: See [SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md) for detailed instructions on getting these credentials.

### Step 4: Start Development Server

```bash
# Using pnpm
pnpm run dev

# Or using npm
npm run dev
```

**Expected Output**:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Step 5: Open in Browser

1. Open your browser
2. Navigate to: `http://localhost:5173/`
3. The app should load with the splash screen

### Step 6: Test PWA Features Locally

#### Install as PWA (Chrome/Edge)

1. Click the install icon in the address bar
2. Or: Menu → Install DineQR
3. Launch the installed app
4. Test splash screen and offline features

#### Test Service Worker

1. Open DevTools (F12)
2. Go to Application tab
3. Check Service Workers section
4. Verify service worker is registered

---

## 🔧 Development Commands

### Available Scripts

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Run linter
pnpm run lint

# Type check
pnpm run type-check
```

### Build the Project

```bash
# Build for production
pnpm run build
```

**Output**: Built files will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
pnpm run preview
```

This serves the built files from `dist/` directory.

### Lint and Fix Issues

```bash
# Run linter
pnpm run lint

# Fix auto-fixable issues
pnpm run lint --fix
```

---

## 🌐 Deploying to Netlify

### Method 1: Deploy via Netlify CLI (Recommended)

#### Step 1: Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Verify installation
netlify --version
```

#### Step 2: Login to Netlify

```bash
# Login to your Netlify account
netlify login
```

This will open a browser window for authentication.

#### Step 3: Initialize Netlify Site

```bash
# Initialize Netlify in your project
netlify init
```

Follow the prompts:
1. **Create & configure a new site**: Choose this option
2. **Team**: Select your team
3. **Site name**: Enter a unique name (e.g., `dineqr-restaurant-menu`)
4. **Build command**: `pnpm run build` or `npm run build`
5. **Publish directory**: `dist`

#### Step 4: Deploy to Netlify

```bash
# Deploy to production
netlify deploy --prod
```

Or deploy to draft first:

```bash
# Deploy to draft URL for testing
netlify deploy

# If everything looks good, deploy to production
netlify deploy --prod
```

#### Step 5: Verify Deployment

After deployment, Netlify will provide:
- **Live URL**: Your production site URL
- **Admin URL**: Dashboard to manage your site

Example output:
```
✔ Deployed to production site URL:
   https://dineqr-restaurant-menu.netlify.app

✔ Site admin URL:
   https://app.netlify.com/sites/dineqr-restaurant-menu
```

---

### Method 2: Deploy via Netlify Dashboard

#### Step 1: Build the Project

```bash
# Build for production
pnpm run build
```

#### Step 2: Login to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up or log in

#### Step 3: Create New Site

1. Click **"Add new site"** → **"Deploy manually"**
2. Drag and drop the `dist` folder
3. Wait for deployment to complete

#### Step 4: Configure Site

1. Go to **Site settings**
2. Change site name (optional)
3. Configure custom domain (optional)

---

### Method 3: Deploy via Git (Continuous Deployment)

#### Step 1: Push to Git Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin <your-git-repo-url>

# Push to repository
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Authorize Netlify
5. Select your repository

#### Step 3: Configure Build Settings

**Build settings**:
- **Base directory**: (leave empty)
- **Build command**: `pnpm run build` or `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 or higher

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for build and deployment to complete
3. Your site will be live at the provided URL

#### Step 5: Enable Continuous Deployment

Now, every time you push to your repository:
1. Netlify automatically builds your site
2. Deploys the new version
3. Updates are live within minutes

---

## ⚙️ Netlify Configuration

### Create netlify.toml

Create a `netlify.toml` file in the project root for advanced configuration:

```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/manifest.json"
  [headers.values]
    Content-Type = "application/manifest+json"

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
    Service-Worker-Allowed = "/"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/icons/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Environment Variables on Netlify

#### Add Environment Variables

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_ID=your_app_id
VITE_API_ENV=production
```

4. Click **"Save"**
5. Trigger a new deployment

---

## 🔒 Custom Domain Setup

### Step 1: Add Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `dineqr.com`)
4. Click **"Verify"**

### Step 2: Configure DNS

#### Option A: Use Netlify DNS (Recommended)

1. Netlify will provide nameservers
2. Update nameservers at your domain registrar
3. Wait for DNS propagation (up to 48 hours)

#### Option B: Use External DNS

Add these records at your DNS provider:

**For root domain** (e.g., `dineqr.com`):
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain**:
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### Step 3: Enable HTTPS

1. Netlify automatically provisions SSL certificate
2. Wait a few minutes for certificate activation
3. Enable **"Force HTTPS"** in domain settings

---

## 📊 Post-Deployment Checklist

### Verify Deployment

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images and assets load
- [ ] PWA features work
- [ ] Service worker registers
- [ ] Splash screen appears
- [ ] Update notifications work
- [ ] Offline mode functions
- [ ] Install prompt appears

### Test PWA Features

#### On Desktop

1. Visit your deployed site
2. Click install button in address bar
3. Launch installed app
4. Verify splash screen
5. Test offline mode (disconnect internet)
6. Check update notifications

#### On Mobile

1. Open site in mobile browser
2. Add to home screen
3. Launch from home screen
4. Verify splash screen
5. Test all features
6. Check responsive design

### Performance Testing

#### Run Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
   - PWA
4. Click **"Analyze page load"**
5. Review scores and recommendations

**Target Scores**:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 90
- PWA: 100

### Monitor Deployment

#### Netlify Analytics

1. Go to **Analytics** tab in Netlify dashboard
2. Monitor:
   - Page views
   - Unique visitors
   - Top pages
   - Bandwidth usage

#### Error Monitoring

1. Check **Deploys** tab for build errors
2. Review **Functions** logs (if using)
3. Monitor browser console for errors

---

## 🔄 Updating Your Deployment

### Update via Git (Continuous Deployment)

```bash
# Make changes to your code
# ...

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to repository
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Build the new version
3. Deploy to production
4. Users will see update notification

### Manual Update via CLI

```bash
# Build the project
pnpm run build

# Deploy to production
netlify deploy --prod
```

### Rollback to Previous Version

1. Go to **Deploys** tab in Netlify dashboard
2. Find the previous successful deploy
3. Click **"Publish deploy"**
4. Confirm rollback

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Issue**: Build command fails

**Solutions**:

1. **Check Node version**:
   ```toml
   # In netlify.toml
   [build.environment]
     NODE_VERSION = "18"
   ```

2. **Check build command**:
   - Ensure it's `pnpm run build` or `npm run build`
   - Verify package.json has build script

3. **Check dependencies**:
   ```bash
   # Locally test the build
   pnpm run build
   ```

4. **View build logs**:
   - Go to Deploys tab
   - Click on failed deploy
   - Review error messages

### Service Worker Not Working

**Issue**: PWA features don't work after deployment

**Solutions**:

1. **Check service worker path**:
   - Ensure `sw.js` is in `public/` directory
   - Verify it's copied to `dist/` after build

2. **Check headers**:
   - Add service worker headers in `netlify.toml`
   - Clear browser cache

3. **Force update**:
   ```javascript
   // In browser console
   navigator.serviceWorker.getRegistrations().then(regs => {
     regs.forEach(reg => reg.unregister());
   });
   location.reload();
   ```

### Routing Issues (404 on Refresh)

**Issue**: Page refresh returns 404 error

**Solution**: Add redirect rule in `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables Not Working

**Issue**: Environment variables are undefined

**Solutions**:

1. **Check variable names**:
   - Must start with `VITE_`
   - Example: `VITE_SUPABASE_URL`

2. **Add to Netlify**:
   - Site settings → Environment variables
   - Add all required variables

3. **Rebuild site**:
   - Trigger new deployment after adding variables

### Slow Build Times

**Issue**: Builds take too long

**Solutions**:

1. **Use build cache**:
   ```toml
   [build]
     command = "pnpm run build"
     publish = "dist"
   
   [build.processing]
     skip_processing = false
   ```

2. **Optimize dependencies**:
   - Remove unused packages
   - Use production builds

3. **Enable build plugins**:
   - Use Netlify build plugins for optimization

---

## 📈 Performance Optimization

### Enable Netlify Features

#### Asset Optimization

1. Go to **Site settings** → **Build & deploy** → **Post processing**
2. Enable:
   - **Asset optimization**: Minify CSS, JS, images
   - **Pretty URLs**: Remove .html extensions
   - **Bundle CSS**: Combine CSS files

#### Prerendering

For better SEO and performance:

```toml
# In netlify.toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"

[plugins.inputs]
  output_path = "lighthouse-report.html"
```

#### Caching Strategy

Optimize caching in `netlify.toml`:

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

---

## 🔐 Security Best Practices

### Enable Security Headers

Already configured in `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

### Enable HTTPS

1. Netlify provides free SSL certificates
2. Enable **"Force HTTPS"** in domain settings
3. All HTTP traffic redirects to HTTPS

### Protect Environment Variables

1. Never commit `.env` files to Git
2. Add `.env` to `.gitignore`
3. Use Netlify environment variables
4. Rotate keys regularly

---

## 📱 PWA Deployment Checklist

### Before Deployment

- [ ] Icons generated (all sizes)
- [ ] Manifest.json configured
- [ ] Service worker tested
- [ ] Splash screen working
- [ ] Update notifications functional
- [ ] Offline mode tested
- [ ] Build successful locally

### After Deployment

- [ ] PWA installable on desktop
- [ ] PWA installable on mobile
- [ ] Splash screen appears
- [ ] Service worker registers
- [ ] Offline mode works
- [ ] Update notifications appear
- [ ] Icons display correctly
- [ ] Lighthouse PWA score: 100

---

## 📞 Support and Resources

### Netlify Documentation

- [Netlify Docs](https://docs.netlify.com/)
- [Build Configuration](https://docs.netlify.com/configure-builds/overview/)
- [Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

### DineQR Documentation

- `PWA_GUIDE.md` - PWA features guide
- `PWA_ICON_SPLASH_GUIDE.md` - Icon and splash screen guide
- `UPDATE_NOTIFICATION_GUIDE.md` - Update notification guide
- `SPLASH_SCREEN_TEST.md` - Splash screen testing

### Community Support

- [Netlify Community](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

---

## 🎯 Quick Reference

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

### Common Commands

```bash
# Check build locally
pnpm run build

# Run linter
pnpm run lint

# Test service worker
# Open DevTools → Application → Service Workers

# Clear cache
# DevTools → Application → Clear storage
```

---

## ✅ Summary

### Local Development Setup

1. ✅ Install Node.js and pnpm
2. ✅ Clone repository
3. ✅ Install dependencies: `pnpm install`
4. ✅ Start dev server: `pnpm run dev`
5. ✅ Open browser: `http://localhost:5173/`

### Netlify Deployment

1. ✅ Build project: `pnpm run build`
2. ✅ Install Netlify CLI: `npm install -g netlify-cli`
3. ✅ Login: `netlify login`
4. ✅ Initialize: `netlify init`
5. ✅ Deploy: `netlify deploy --prod`

### Post-Deployment

1. ✅ Verify site loads
2. ✅ Test PWA features
3. ✅ Run Lighthouse audit
4. ✅ Configure custom domain (optional)
5. ✅ Enable HTTPS
6. ✅ Monitor analytics

---

**Last Updated**: December 7, 2025  
**Version**: 1.0  
**Status**: ✅ Complete  
**Project**: DineQR Restaurant Menu System

---

**🚀 Your app is ready to deploy! 🚀**

Follow this guide to run locally and deploy to Netlify with ease. Your PWA will be live and accessible to users worldwide!
