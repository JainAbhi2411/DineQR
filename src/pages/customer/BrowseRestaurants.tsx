import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { visitedRestaurantApi } from '@/db/api';
import { VisitedRestaurantWithDetails } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Store, Search, X, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useFormatters } from '@/hooks/useFormatters';
import CustomerLayout from '@/components/customer/CustomerLayout';
import { Badge } from '@/components/ui/badge';

export default function BrowseRestaurants() {
  const { profile } = useAuth();
  const [restaurants, setRestaurants] = useState<VisitedRestaurantWithDetails[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<VisitedRestaurantWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const { formatDateTime } = useFormatters();
  const navigate = useNavigate();

  useEffect(() => {
    loadRestaurants();
  }, [profile]);

  useEffect(() => {
    // Filter restaurants based on search query
    if (searchQuery.trim() === '') {
      setFilteredRestaurants(restaurants);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = restaurants.filter(r => 
        r.restaurant?.name?.toLowerCase().includes(query) ||
        r.restaurant?.location?.toLowerCase().includes(query) ||
        r.restaurant?.contact_details?.toLowerCase().includes(query)
      );
      setFilteredRestaurants(filtered);
    }
  }, [searchQuery, restaurants]);

  const loadRestaurants = async () => {
    if (!profile) return;
    
    try {
      setLoading(true);
      const data = await visitedRestaurantApi.getVisitedRestaurants(profile.id);
      setRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load restaurants',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveRestaurant = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await visitedRestaurantApi.deleteVisitedRestaurant(id);
      setRestaurants(prev => prev.filter(r => r.id !== id));
      toast({
        title: 'Success',
        description: 'Restaurant removed from your list',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to remove restaurant',
        variant: 'destructive',
      });
    }
  };

  const handleRestaurantClick = (restaurantId: string) => {
    navigate(`/customer/menu/${restaurantId}`);
  };

  if (loading) {
    return (
      <CustomerLayout title="Browse Restaurants">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-secondary border-t-transparent glow-purple"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-secondary opacity-20"></div>
          </div>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout title="Browse Restaurants">
      <div className="max-w-7xl mx-auto px-3 xl:px-6 py-4 xl:py-8">
        {/* Search Section */}
        <div className="mb-6 xl:mb-8 animate-fade-in-up">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search restaurants by name, location, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-base"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setSearchQuery('')}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Restaurants Grid */}
        {filteredRestaurants.length === 0 ? (
          <Card className="glass border-2 border-border animate-fade-in-up">
            <CardContent className="p-8 xl:p-12 text-center">
              <div className="w-16 h-16 xl:w-20 xl:h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 xl:w-10 xl:h-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg xl:text-xl font-semibold mb-2">
                {searchQuery ? 'No restaurants found' : 'No visited restaurants yet'}
              </h3>
              <p className="text-muted-foreground text-sm xl:text-base mb-4">
                {searchQuery 
                  ? 'Try adjusting your search terms'
                  : 'Scan a QR code at a restaurant to get started'
                }
              </p>
              {!searchQuery && (
                <Button 
                  onClick={() => navigate('/customer/scan')}
                  className="morph-button hover-glow-orange"
                >
                  Scan QR Code
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-6">
            {filteredRestaurants.map((visited, index) => (
              <Card 
                key={visited.id} 
                className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleRestaurantClick(visited.restaurant_id)}
              >
                <div className="scan-line" />
                <CardHeader className="p-4 xl:p-6 relative z-10">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {visited.restaurant?.name?.charAt(0) || 'R'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base xl:text-lg mb-1 truncate">
                          {visited.restaurant?.name || 'Restaurant'}
                        </CardTitle>
                        <CardDescription className="text-xs xl:text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Last visited: {formatDateTime(visited.last_visited_at)}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 h-8 w-8"
                      onClick={(e) => handleRemoveRestaurant(visited.id, e)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4 xl:p-6 pt-0 space-y-2 relative z-10">
                  {visited.restaurant?.location && (
                    <div className="flex items-start gap-2 text-xs xl:text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{visited.restaurant.location}</span>
                    </div>
                  )}
                  {visited.restaurant?.phone && (
                    <div className="flex items-center gap-2 text-xs xl:text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>{visited.restaurant.phone}</span>
                    </div>
                  )}
                  {visited.restaurant?.contact_details && (
                    <div className="flex items-center gap-2 text-xs xl:text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 shrink-0" />
                      <span className="truncate">{visited.restaurant.contact_details}</span>
                    </div>
                  )}
                  <div className="pt-2 mt-2 border-t">
                    <Badge variant="secondary" className="text-xs">
                      Visited {visited.visit_count} time{visited.visit_count !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </CustomerLayout>
  );
}
