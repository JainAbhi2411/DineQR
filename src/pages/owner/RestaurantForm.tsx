import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { restaurantApi } from '@/db/api';
import { Restaurant } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

export default function RestaurantForm() {
  const { id } = useParams();
  const { profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact_details: '',
    business_info: '',
  });

  useEffect(() => {
    if (id) {
      loadRestaurant();
    }
  }, [id]);

  const loadRestaurant = async () => {
    if (!id) return;
    try {
      const restaurant = await restaurantApi.getRestaurantById(id);
      if (restaurant) {
        setFormData({
          name: restaurant.name,
          location: restaurant.location || '',
          contact_details: restaurant.contact_details || '',
          business_info: restaurant.business_info || '',
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load restaurant',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: 'Error',
        description: 'Restaurant name is required',
        variant: 'destructive',
      });
      return;
    }

    if (!profile) return;

    setLoading(true);
    try {
      if (id) {
        await restaurantApi.updateRestaurant(id, formData);
        toast({
          title: 'Success',
          description: 'Restaurant updated successfully',
        });
      } else {
        await restaurantApi.createRestaurant({
          ...formData,
          owner_id: profile.id,
          restaurant_type: 'both',
          cuisine_types: null,
          images: null,
          description: null,
          phone: null,
          address: null,
          average_rating: 0,
          opening_hours: null,
        });
        toast({
          title: 'Success',
          description: 'Restaurant created successfully',
        });
      }
      navigate('/owner/restaurants');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save restaurant',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => navigate('/owner/restaurants')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Restaurants
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{id ? 'Edit Restaurant' : 'Create New Restaurant'}</CardTitle>
            <CardDescription>
              {id ? 'Update your restaurant information' : 'Add your restaurant details to get started'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Restaurant Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter restaurant name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter restaurant address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Details</Label>
                <Input
                  id="contact"
                  value={formData.contact_details}
                  onChange={(e) => setFormData({ ...formData, contact_details: e.target.value })}
                  placeholder="Phone number, email, etc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business_info">Business Information</Label>
                <Textarea
                  id="business_info"
                  value={formData.business_info}
                  onChange={(e) => setFormData({ ...formData, business_info: e.target.value })}
                  placeholder="Describe your restaurant, cuisine type, specialties..."
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? 'Saving...' : id ? 'Update Restaurant' : 'Create Restaurant'}
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate('/owner/restaurants')}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
