import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed, QrCode, ShoppingCart, Receipt, Store, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <UtensilsCrossed className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">Welcome to DineQR</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart Restaurant Menu System - Connecting restaurants and customers through digital innovation
          </p>
        </div>

        {user && profile ? (
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Welcome back, {profile.full_name}!</h2>
            <Button size="lg" asChild>
              <Link to={profile.role === 'owner' ? '/owner/dashboard' : '/customer/dashboard'}>
                Go to Dashboard
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Restaurant Owners</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Manage your restaurant profile and menu items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Generate unique QR codes for each table</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Receive and manage orders in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Track order status and generate bills</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Customers</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Scan QR codes to view restaurant menus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Browse menu items with images and descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Place orders directly from your phone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Track order status and view order history</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-6">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">QR Code System</h4>
            <p className="text-sm text-muted-foreground">Unique codes for each table</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Digital Menu</h4>
            <p className="text-sm text-muted-foreground">Beautiful, easy-to-browse menus</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Easy Ordering</h4>
            <p className="text-sm text-muted-foreground">Place orders with a few taps</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
