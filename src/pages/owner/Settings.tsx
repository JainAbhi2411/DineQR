import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Settings as SettingsIcon, Bell, Lock, Globe, CreditCard, Save } from 'lucide-react';
import { settingsApi } from '@/db/api';
import type { RestaurantSettings } from '@/types/types';
import { useToast } from '@/hooks/use-toast';

interface BusinessHours {
  [key: string]: { open: string; close: string; closed: boolean };
}

export default function Settings() {
  const { restaurantId } = useParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<RestaurantSettings | null>(null);
  const [businessHours, setBusinessHours] = useState<BusinessHours>({
    monday: { open: '09:00', close: '22:00', closed: false },
    tuesday: { open: '09:00', close: '22:00', closed: false },
    wednesday: { open: '09:00', close: '22:00', closed: false },
    thursday: { open: '09:00', close: '22:00', closed: false },
    friday: { open: '09:00', close: '22:00', closed: false },
    saturday: { open: '09:00', close: '22:00', closed: false },
    sunday: { open: '09:00', close: '22:00', closed: false },
  });

  useEffect(() => {
    if (restaurantId) {
      loadSettings();
    }
  }, [restaurantId]);

  const loadSettings = async () => {
    try {
      setLoading(true);
      const data = await settingsApi.getRestaurantSettings(restaurantId!);
      if (data) {
        setSettings(data);
        // Parse business hours if available
        if (data.business_hours && typeof data.business_hours === 'object') {
          setBusinessHours(data.business_hours as BusinessHours);
        }
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load settings',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    if (!settings) return;

    try {
      setSaving(true);
      await settingsApi.updateRestaurantSettings(settings.id, {
        ...settings,
        business_hours: businessHours,
      });
      toast({
        title: 'Success',
        description: 'Settings saved successfully',
      });
    } catch (error) {
      console.error('Failed to save settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to save settings',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = <K extends keyof RestaurantSettings>(
    key: K,
    value: RestaurantSettings[K]
  ) => {
    if (settings) {
      setSettings({ ...settings, [key]: value });
    }
  };

  const updateBusinessHours = (day: string, field: 'open' | 'close', value: string) => {
    setBusinessHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  if (loading) {
    return (
      <OwnerLayout title="Settings">
        <div className="p-8 flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        </div>
      </OwnerLayout>
    );
  }

  if (!settings) {
    return (
      <OwnerLayout title="Settings">
        <div className="p-8 flex items-center justify-center min-h-[400px]">
          <p className="text-muted-foreground">Settings not found</p>
        </div>
      </OwnerLayout>
    );
  }

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
                <Input 
                  id="timezone" 
                  value={settings.timezone} 
                  onChange={(e) => updateSetting('timezone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Input 
                  id="currency" 
                  value={settings.currency} 
                  onChange={(e) => updateSetting('currency', e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-accept orders</Label>
                  <p className="text-sm text-muted-foreground">Automatically accept incoming orders</p>
                </div>
                <Switch 
                  checked={settings.auto_accept_orders} 
                  onCheckedChange={(checked) => updateSetting('auto_accept_orders', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Online ordering</Label>
                  <p className="text-sm text-muted-foreground">Enable online ordering for customers</p>
                </div>
                <Switch 
                  checked={settings.online_ordering} 
                  onCheckedChange={(checked) => updateSetting('online_ordering', checked)}
                />
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
                <Switch 
                  checked={settings.email_notifications} 
                  onCheckedChange={(checked) => updateSetting('email_notifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive order updates via SMS</p>
                </div>
                <Switch 
                  checked={settings.sms_notifications} 
                  onCheckedChange={(checked) => updateSetting('sms_notifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications</p>
                </div>
                <Switch 
                  checked={settings.push_notifications} 
                  onCheckedChange={(checked) => updateSetting('push_notifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New review alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified of new reviews</p>
                </div>
                <Switch 
                  checked={settings.review_alerts} 
                  onCheckedChange={(checked) => updateSetting('review_alerts', checked)}
                />
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
              {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <Label className="w-24 capitalize">{day}</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="time" 
                      value={businessHours[day]?.open || '09:00'} 
                      onChange={(e) => updateBusinessHours(day, 'open', e.target.value)}
                      className="w-32" 
                    />
                    <span className="text-muted-foreground">to</span>
                    <Input 
                      type="time" 
                      value={businessHours[day]?.close || '22:00'} 
                      onChange={(e) => updateBusinessHours(day, 'close', e.target.value)}
                      className="w-32" 
                    />
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
              <div className="space-y-2">
                <Label htmlFor="tax">Tax Rate (%)</Label>
                <Input 
                  id="tax" 
                  type="number" 
                  value={settings.tax_rate} 
                  onChange={(e) => updateSetting('tax_rate', parseFloat(e.target.value) || 0)}
                  step="0.1" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Charge (%)</Label>
                <Input 
                  id="service" 
                  type="number" 
                  value={settings.service_charge} 
                  onChange={(e) => updateSetting('service_charge', parseFloat(e.target.value) || 0)}
                  step="0.1" 
                />
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Configure tax rates and service charges that will be applied to orders.
                </p>
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
                  <Input id="current-password" type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="Enter new password" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-factor authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch 
                  checked={settings.two_factor_auth} 
                  onCheckedChange={(checked) => updateSetting('two_factor_auth', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button 
            className="morph-button hover-glow-orange" 
            onClick={handleSaveSettings}
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>
    </OwnerLayout>
  );
}
