import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Settings as SettingsIcon, Bell, Lock, Globe, CreditCard, Save } from 'lucide-react';

export default function Settings() {
  const { restaurantId } = useParams();

  return (
    <OwnerLayout title="Settings">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold gradient-text-primary mb-2">Restaurant Settings</h1>
          <p className="text-muted-foreground">Manage your restaurant preferences and configurations</p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Settings */}
          <Card className="glass border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-primary" />
                General Settings
              </CardTitle>
              <CardDescription>Basic restaurant configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="America/New_York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Input id="currency" defaultValue="USD" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-accept orders</Label>
                  <p className="text-sm text-muted-foreground">Automatically accept incoming orders</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Online ordering</Label>
                  <p className="text-sm text-muted-foreground">Enable online ordering for customers</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="glass border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>Manage notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive order updates via SMS</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New review alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified of new reviews</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="glass border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Business Hours
              </CardTitle>
              <CardDescription>Set your operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <Label className="w-24">{day}</Label>
                  <div className="flex items-center gap-2">
                    <Input type="time" defaultValue="09:00" className="w-32" />
                    <span className="text-muted-foreground">to</span>
                    <Input type="time" defaultValue="22:00" className="w-32" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <Card className="glass border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Payment Settings
              </CardTitle>
              <CardDescription>Configure payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Cash on delivery</Label>
                  <p className="text-sm text-muted-foreground">Accept cash payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Credit/Debit cards</Label>
                  <p className="text-sm text-muted-foreground">Accept card payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Digital wallets</Label>
                  <p className="text-sm text-muted-foreground">Accept Apple Pay, Google Pay</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax">Tax Rate (%)</Label>
                <Input id="tax" type="number" defaultValue="8.5" step="0.1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Charge (%)</Label>
                <Input id="service" type="number" defaultValue="10" step="0.1" />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="glass border-2 border-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Security
              </CardTitle>
              <CardDescription>Manage security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-factor authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="morph-button hover-glow-orange">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </OwnerLayout>
  );
}
