# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://medo.dev/projects/app-7x1ojvae4075

# 🍽️ DineQR - Smart Restaurant Menu System

A comprehensive Progressive Web App (PWA) for restaurant menu management and customer ordering, featuring a futuristic dark theme with neon accents.

---

## ✨ Features

### For Restaurant Owners
- 🏪 Restaurant profile management
- 📋 Menu management with categories
- 💰 Price and availability control
- 📱 QR code generation for tables
- 📊 Order management and tracking
- 💵 Bill generation
- 📈 Analytics and reports

### For Customers
- 👤 User account management
- 📷 QR code scanner
- 🍽️ Menu browsing with images
- 🛒 Order placement
- 💳 Payment integration
- 📍 Order tracking
- ⚙️ Profile management

### PWA Features
- 📱 Installable on all devices
- 🔄 Automatic update notifications
- 🌐 Offline mode support
- ⚡ Fast loading with service workers
- 🎨 Animated splash screen
- 🔔 Real-time notifications
- 🎯 App shortcuts

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **PWA**: Service Workers, Web App Manifest
- **Routing**: React Router
- **Icons**: Lucide React

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher (or npm)

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd app-7x1ojvae4075

# Install dependencies
pnpm install

# Set up environment variables
# Create .env file with your Supabase credentials

# Start development server
pnpm run dev
```

Open `http://localhost:5173/` in your browser.

### Available Scripts

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run lint         # Run linter
```

---

## 🌐 Deployment

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

## 📚 Documentation

- [SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md) - Complete Supabase backend setup
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Local setup and Netlify deployment
- [PWA_GUIDE.md](./PWA_GUIDE.md) - PWA features and capabilities
- [PWA_ICON_SPLASH_GUIDE.md](./PWA_ICON_SPLASH_GUIDE.md) - Custom icons and splash screen
- [UPDATE_NOTIFICATION_GUIDE.md](./UPDATE_NOTIFICATION_GUIDE.md) - Update notification system
- [SPLASH_SCREEN_TEST.md](./SPLASH_SCREEN_TEST.md) - Splash screen testing

---

## 📁 Project Structure

```
app-7x1ojvae4075/
├── public/                      # Static assets
│   ├── icons/                   # PWA icons
│   ├── manifest.json            # PWA manifest
│   └── sw.js                    # Service worker
├── src/
│   ├── components/              # React components
│   ├── contexts/                # React contexts
│   ├── db/                      # Database layer
│   ├── pages/                   # Page components
│   ├── types/                   # TypeScript types
│   ├── utils/                   # Utility functions
│   └── App.tsx                  # Main app component
├── supabase/
│   └── migrations/              # Database migrations
├── netlify.toml                 # Netlify configuration
└── README.md                    # This file
```

---

## 🎨 Design System

**Futuristic Dark Theme**:
- Background: `#0D1B2A` (Deep charcoal blue)
- Primary Accent: `#00F0FF` (Electric cyan)
- Secondary Accent: `#FF006E` (Vibrant magenta)
- Typography: Poppins, Exo 2, Orbitron

---

## 🔒 Security

- Supabase Auth for user management
- Row Level Security (RLS)
- HTTPS-only communication
- Security headers configured
- Environment variable protection

---

## 📱 PWA Features

### Installation
Install on desktop (Chrome, Edge, Safari) and mobile (Android, iOS)

### Offline Support
- Full offline functionality
- Cached menu data
- Automatic sync when online

### Update Notifications
- Automatic update detection
- One-click updates
- No data loss

### Splash Screen
- Animated splash screen
- Futuristic dark theme
- 2.5-second display

---

## 🧪 Testing

### Lighthouse Scores (Target)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 90
- PWA: 100

---

## 🗺️ Roadmap

### Version 1.0 (Current)
- ✅ Restaurant and customer management
- ✅ Menu management
- ✅ QR code generation
- ✅ Order management
- ✅ PWA features
- ✅ Offline support
- ✅ Update notifications

### Version 1.1 (Planned)
- [ ] Push notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Table reservation system

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Netlify](https://www.netlify.com/) - Hosting
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

---

**Made with ❤️ by the DineQR Team**

**Last Updated**: December 7, 2025  
**Version**: 1.0.0  
**Status**: Production Ready
