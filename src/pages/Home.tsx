import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed, QrCode, ShoppingCart, Receipt, Store, User, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Animations */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 animate-float shadow-lg shadow-primary/50">
            <UtensilsCrossed className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground animate-fade-in-up animation-delay-200">
            Welcome to DineQR
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Smart Restaurant Menu System - Connecting restaurants and customers through digital innovation
          </p>
          <div className="flex justify-center gap-2 mt-4 animate-fade-in-up animation-delay-600">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <Sparkles className="w-4 h-4 text-primary animate-pulse animation-delay-200" />
            <Sparkles className="w-5 h-5 text-primary animate-pulse animation-delay-400" />
          </div>
        </div>

        {user && profile ? (
          <div className="text-center mb-12 animate-fade-in-up animation-delay-800">
            <h2 className="text-2xl font-semibold mb-4">Welcome back, {profile.full_name}!</h2>
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <Link to={profile.role === 'owner' ? '/owner/dashboard' : '/customer/dashboard'}>
                Go to Dashboard
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex justify-center gap-4 mb-16 animate-fade-in-up animation-delay-800">
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8 mb-16">
          <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-slide-in-left animation-delay-1000 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Restaurant Owners</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1200">
                  <span className="text-primary mt-1">✓</span>
                  <span>Manage your restaurant profile and menu items</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1300">
                  <span className="text-primary mt-1">✓</span>
                  <span>Generate unique QR codes for each table</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1400">
                  <span className="text-primary mt-1">✓</span>
                  <span>Receive and manage orders in real-time</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1500">
                  <span className="text-primary mt-1">✓</span>
                  <span>Track order status and generate bills</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-slide-in-right animation-delay-1000 border-2 hover:border-primary/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-slow">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Customers</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1200">
                  <span className="text-primary mt-1">✓</span>
                  <span>Scan QR codes to view restaurant menus</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1300">
                  <span className="text-primary mt-1">✓</span>
                  <span>Browse menu items with images and descriptions</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1400">
                  <span className="text-primary mt-1">✓</span>
                  <span>Place orders directly from your phone</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in animation-delay-1500">
                  <span className="text-primary mt-1">✓</span>
                  <span>Track order status and view order history</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-6">
          <Card className="text-center p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-fade-in-up animation-delay-1600 cursor-pointer group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:rotate-12 duration-300">
              <QrCode className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">QR Code System</h4>
            <p className="text-sm text-muted-foreground">Unique codes for each table</p>
          </Card>

          <Card className="text-center p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-fade-in-up animation-delay-1700 cursor-pointer group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:rotate-12 duration-300">
              <UtensilsCrossed className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Digital Menu</h4>
            <p className="text-sm text-muted-foreground">Beautiful, easy-to-browse menus</p>
          </Card>

          <Card className="text-center p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-fade-in-up animation-delay-1800 cursor-pointer group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:rotate-12 duration-300">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Easy Ordering</h4>
            <p className="text-sm text-muted-foreground">Place orders with a few taps</p>
          </Card>

          <Card className="text-center p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-fade-in-up animation-delay-1900 cursor-pointer group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:rotate-12 duration-300">
              <Receipt className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Payment Integration</h4>
            <p className="text-sm text-muted-foreground">Secure online payments</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
