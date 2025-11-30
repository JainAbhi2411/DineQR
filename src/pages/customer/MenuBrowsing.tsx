import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { restaurantApi, menuCategoryApi, menuItemApi } from '@/db/api';
import { Restaurant, MenuCategory, MenuItem } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Plus, Minus, Search, MapPin, Phone, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export default function MenuBrowsing() {
  const { restaurantId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const tableId = searchParams.get('table');
  
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadData();
  }, [restaurantId]);

  const loadData = async () => {
    if (!restaurantId) return;
    
    try {
      setLoading(true);
      const [restaurantData, categoriesData, itemsData] = await Promise.all([
        restaurantApi.getRestaurantById(restaurantId),
        menuCategoryApi.getCategoriesByRestaurant(restaurantId),
        menuItemApi.getItemsByRestaurant(restaurantId),
      ]);
      
      setRestaurant(restaurantData);
      setCategories(categoriesData);
      setMenuItems(itemsData.filter(item => item.is_available));
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load menu',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.menuItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.menuItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { menuItem: item, quantity: 1 }]);
    }
    
    toast({
      title: 'Added to cart',
      description: `${item.name} added to your order`,
    });
  };

  const removeFromCart = (itemId: string) => {
    const existingItem = cart.find((cartItem) => cartItem.menuItem.id === itemId);
    
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map((cartItem) =>
        cartItem.menuItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter((cartItem) => cartItem.menuItem.id !== itemId));
    }
  };

  const getCartItemQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.menuItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: 'Cart is empty',
        description: 'Please add items to your cart',
        variant: 'destructive',
      });
      return;
    }
    
    navigate(`/customer/checkout/${restaurantId}?table=${tableId}`, {
      state: { cart, restaurant },
    });
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedItems = categories.reduce((acc, category) => {
    const items = filteredItems.filter((item) => item.category_id === category.id);
    if (items.length > 0) {
      acc[category.id] = { category, items };
    }
    return acc;
  }, {} as Record<string, { category: MenuCategory; items: MenuItem[] }>);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">{restaurant?.name}</h1>
          <div className="flex flex-col gap-2 text-sm opacity-90">
            {restaurant?.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{restaurant.location}</span>
              </div>
            )}
            {restaurant?.contact_details && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{restaurant.contact_details}</span>
              </div>
            )}
          </div>
          {restaurant?.business_info && (
            <p className="mt-4 text-sm opacity-90">{restaurant.business_info}</p>
          )}
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.keys(groupedItems).length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <p className="text-muted-foreground">No menu items found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.values(groupedItems).map(({ category, items }) => (
              <div key={category.id}>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  {category.description && (
                    <p className="text-muted-foreground">{category.description}</p>
                  )}
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((item) => {
                    const quantity = getCartItemQuantity(item.id);
                    
                    return (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="flex">
                          {item.image_url && (
                            <div className="w-32 h-32 flex-shrink-0">
                              <img
                                src={item.image_url}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-lg">{item.name}</h3>
                              <span className="text-lg font-bold text-primary ml-2">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                            {item.description && (
                              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                {item.description}
                              </p>
                            )}
                            
                            {quantity === 0 ? (
                              <Button
                                size="sm"
                                onClick={() => addToCart(item)}
                                className="w-full"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Add to Cart
                              </Button>
                            ) : (
                              <div className="flex items-center justify-between bg-primary/10 rounded-md p-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-semibold">{quantity}</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => addToCart(item)}
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{getTotalItems()} items</p>
                <p className="text-2xl font-bold">${getTotalAmount().toFixed(2)}</p>
              </div>
              <Button size="lg" onClick={handleCheckout}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
