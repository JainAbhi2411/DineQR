import { useEffect, useState, useRef } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { restaurantApi, menuCategoryApi, menuItemApi } from '@/db/api';
import { Restaurant, MenuCategory, MenuItem } from '@/types/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Search, 
  MapPin, 
  Phone, 
  Star,
  Clock,
  Leaf,
  Flame,
  Filter,
  SlidersHorizontal,
  Heart,
  Info,
  ChevronRight,
  X,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
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
  const [showFilters, setShowFilters] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  
  // Filters
  const [vegOnly, setVegOnly] = useState(false);
  const [veganOnly, setVeganOnly] = useState(false);
  const [glutenFreeOnly, setGlutenFreeOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');

  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
      title: '✓ Added to cart',
      description: `${item.name} added successfully`,
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

  const toggleFavorite = (itemId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
      toast({ title: 'Removed from favorites' });
    } else {
      newFavorites.add(itemId);
      toast({ title: '❤️ Added to favorites' });
    }
    setFavorites(newFavorites);
  };

  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      categoryRefs.current[categoryId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category_id === selectedCategory;
    const matchesVeg = !vegOnly || item.is_vegetarian;
    const matchesVegan = !veganOnly || item.is_vegan;
    const matchesGlutenFree = !glutenFreeOnly || item.is_gluten_free;
    
    return matchesSearch && matchesCategory && matchesVeg && matchesVegan && matchesGlutenFree;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const groupedItems = categories.reduce((acc, category) => {
    const items = sortedItems.filter((item) => item.category_id === category.id);
    if (items.length > 0) {
      acc[category.id] = { category, items };
    }
    return acc;
  }, {} as Record<string, { category: MenuCategory; items: MenuItem[] }>);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-background">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary/40 rounded-full animate-spin" style={{ animationDuration: '0.8s' }} />
        </div>
        <p className="mt-4 text-muted-foreground animate-pulse">Loading delicious menu...</p>
      </div>
    );
  }

  const activeFiltersCount = [vegOnly, veganOnly, glutenFreeOnly].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Restaurant Header with Gradient */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6bS04IDBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMnMyIC45IDIgMi0uOSAyLTIgMi0yLS45LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl xl:text-4xl font-bold mb-3 animate-fade-in">{restaurant?.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm opacity-90">
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
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span>4.5 (200+ ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30-40 mins</span>
                </div>
              </div>
              {restaurant?.business_info && (
                <p className="mt-3 text-sm opacity-90 max-w-2xl">{restaurant.business_info}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Search and Filters Bar */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 text-base border-2 focus:border-primary"
              />
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowFilters(true)}
              className="relative"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {activeFiltersCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>
          
          {/* Category Pills - Horizontal Scroll */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => scrollToCategory('all')}
              className="whitespace-nowrap"
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => scrollToCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {Object.keys(groupedItems).length === 0 ? (
          <Card className="border-2 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Search className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Try adjusting your search or filters to find what you're looking for
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.values(groupedItems).map(({ category, items }) => (
              <div 
                key={category.id} 
                ref={(el) => { if (el) categoryRefs.current[category.id] = el; }}
                className="scroll-mt-32"
              >
                <div className="mb-6">
                  <h2 className="text-2xl xl:text-3xl font-bold mb-2">{category.name}</h2>
                  {category.description && (
                    <p className="text-muted-foreground">{category.description}</p>
                  )}
                  <Separator className="mt-3" />
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {items.map((item) => {
                    const quantity = getCartItemQuantity(item.id);
                    const isFavorite = favorites.has(item.id);
                    
                    return (
                      <Card 
                        key={item.id} 
                        className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer"
                      >
                        <div className="flex h-full">
                          {/* Item Image */}
                          {item.image_url && (
                            <div className="relative w-32 xl:w-40 flex-shrink-0 overflow-hidden">
                              <img
                                src={item.image_url}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFavorite(item.id);
                                }}
                                className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                              >
                                <Heart 
                                  className={cn(
                                    "w-4 h-4 transition-colors",
                                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                                  )} 
                                />
                              </button>
                              
                              {/* Dietary Badges on Image */}
                              <div className="absolute bottom-2 left-2 flex gap-1">
                                {item.is_vegetarian && (
                                  <Badge className="bg-green-500 text-white border-0 h-6 px-2">
                                    <Leaf className="w-3 h-3" />
                                  </Badge>
                                )}
                                {item.spice_level && Number(item.spice_level) > 0 && (
                                  <Badge className="bg-red-500 text-white border-0 h-6 px-2">
                                    <Flame className="w-3 h-3" />
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Item Details */}
                          <div 
                            className="flex-1 p-4 flex flex-col"
                            onClick={() => setSelectedItem(item)}
                          >
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1">
                                  <h3 className="font-bold text-lg xl:text-xl leading-tight group-hover:text-primary transition-colors">
                                    {item.name}
                                  </h3>
                                  {item.preparation_time && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                      <Clock className="w-3 h-3" />
                                      <span>{item.preparation_time} mins</span>
                                    </div>
                                  )}
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                  }}
                                  className="text-primary hover:text-primary/80"
                                >
                                  <Info className="w-5 h-5" />
                                </button>
                              </div>
                              
                              {item.description && (
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                  {item.description}
                                </p>
                              )}
                              
                              {/* Dietary Info Badges */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {item.is_vegan && (
                                  <Badge variant="secondary" className="text-xs">
                                    Vegan
                                  </Badge>
                                )}
                                {item.is_gluten_free && (
                                  <Badge variant="secondary" className="text-xs">
                                    Gluten-Free
                                  </Badge>
                                )}
                                {item.calories && (
                                  <Badge variant="outline" className="text-xs">
                                    {item.calories} cal
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            {/* Price and Add Button */}
                            <div className="flex items-center justify-between gap-3 mt-auto">
                              <div className="text-2xl font-bold text-primary">
                                ${item.price.toFixed(2)}
                              </div>
                              
                              {quantity === 0 ? (
                                <Button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(item);
                                  }}
                                  size="sm"
                                  className="font-semibold"
                                >
                                  <Plus className="w-4 h-4 mr-1" />
                                  Add
                                </Button>
                              ) : (
                                <div className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg p-1">
                                  <Button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeFromCart(item.id);
                                    }}
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 hover:bg-primary-foreground/20"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </Button>
                                  <span className="font-bold min-w-[2rem] text-center">{quantity}</span>
                                  <Button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      addToCart(item);
                                    }}
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 hover:bg-primary-foreground/20"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                </div>
                              )}
                            </div>
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

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-bounce-subtle">
          <Button
            onClick={() => setShowCart(true)}
            size="lg"
            className="h-14 px-8 rounded-full shadow-2xl text-lg font-bold hover:scale-105 transition-transform"
          >
            <ShoppingCart className="w-6 h-6 mr-3" />
            <span>{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
            <Separator orientation="vertical" className="mx-4 h-8 bg-primary-foreground/30" />
            <span>${getTotalAmount().toFixed(2)}</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}

      {/* Filters Sheet */}
      <Sheet open={showFilters} onOpenChange={setShowFilters}>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle className="text-2xl">Filters & Sort</SheetTitle>
            <SheetDescription>
              Customize your menu browsing experience
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            {/* Dietary Filters */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Dietary Preferences</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setVegOnly(!vegOnly)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all",
                    vegOnly ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      vegOnly ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Vegetarian Only</span>
                  </div>
                  {vegOnly && <Check className="w-5 h-5 text-primary" />}
                </button>

                <button
                  onClick={() => setVeganOnly(!veganOnly)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all",
                    veganOnly ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      veganOnly ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Vegan Only</span>
                  </div>
                  {veganOnly && <Check className="w-5 h-5 text-primary" />}
                </button>

                <button
                  onClick={() => setGlutenFreeOnly(!glutenFreeOnly)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all",
                    glutenFreeOnly ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      glutenFreeOnly ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Gluten-Free Only</span>
                  </div>
                  {glutenFreeOnly && <Check className="w-5 h-5 text-primary" />}
                </button>
              </div>
            </div>

            <Separator />

            {/* Sort Options */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Sort By</h3>
              <div className="space-y-2">
                {[
                  { value: 'default', label: 'Default' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'name', label: 'Name: A to Z' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value as typeof sortBy)}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-lg border transition-all",
                      sortBy === option.value 
                        ? "border-primary bg-primary/5 font-medium" 
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <span>{option.label}</span>
                    {sortBy === option.value && <Check className="w-5 h-5 text-primary" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setVegOnly(false);
                  setVeganOnly(false);
                  setGlutenFreeOnly(false);
                  setSortBy('default');
                }}
              >
                Clear All
              </Button>
              <Button
                className="flex-1"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Cart Sheet */}
      <Sheet open={showCart} onOpenChange={setShowCart}>
        <SheetContent side="bottom" className="h-[90vh]">
          <SheetHeader>
            <SheetTitle className="text-2xl">Your Order</SheetTitle>
            <SheetDescription>
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} • Table {tableId}
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 flex flex-col h-[calc(100%-8rem)]">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {cart.map((cartItem) => (
                <Card key={cartItem.menuItem.id} className="overflow-hidden">
                  <div className="flex gap-4 p-4">
                    {cartItem.menuItem.image_url && (
                      <img
                        src={cartItem.menuItem.image_url}
                        alt={cartItem.menuItem.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{cartItem.menuItem.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        ${cartItem.menuItem.price.toFixed(2)} each
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => removeFromCart(cartItem.menuItem.id)}
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-bold min-w-[2rem] text-center">{cartItem.quantity}</span>
                        <Button
                          onClick={() => addToCart(cartItem.menuItem)}
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        ${(cartItem.menuItem.price * cartItem.quantity).toFixed(2)}
                      </p>
                      <Button
                        onClick={() => setCart(cart.filter(item => item.menuItem.id !== cartItem.menuItem.id))}
                        size="sm"
                        variant="ghost"
                        className="mt-2 text-destructive hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="border-t pt-4 mt-4 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold">Subtotal</span>
                <span className="font-bold">${getTotalAmount().toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full h-14 text-lg font-bold"
              >
                Proceed to Checkout
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Item Details Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedItem.name}</DialogTitle>
                <DialogDescription>
                  Detailed information about this dish
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                {selectedItem.image_url && (
                  <img
                    src={selectedItem.image_url}
                    alt={selectedItem.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
                
                <div className="flex flex-wrap gap-2">
                  {selectedItem.is_vegetarian && (
                    <Badge className="bg-green-500">
                      <Leaf className="w-3 h-3 mr-1" />
                      Vegetarian
                    </Badge>
                  )}
                  {selectedItem.is_vegan && (
                    <Badge className="bg-green-600">Vegan</Badge>
                  )}
                  {selectedItem.is_gluten_free && (
                    <Badge variant="secondary">Gluten-Free</Badge>
                  )}
                  {selectedItem.spice_level && Number(selectedItem.spice_level) > 0 && (
                    <Badge className="bg-red-500">
                      <Flame className="w-3 h-3 mr-1" />
                      Spicy Level {selectedItem.spice_level}
                    </Badge>
                  )}
                </div>

                {selectedItem.description && (
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  </div>
                )}

                {selectedItem.ingredients && (
                  <div>
                    <h4 className="font-semibold mb-2">Ingredients</h4>
                    <p className="text-muted-foreground">{selectedItem.ingredients}</p>
                  </div>
                )}

                {selectedItem.allergens && (
                  <div>
                    <h4 className="font-semibold mb-2">Allergens</h4>
                    <p className="text-destructive">{selectedItem.allergens}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  {selectedItem.preparation_time && (
                    <div>
                      <h4 className="font-semibold mb-1">Prep Time</h4>
                      <p className="text-muted-foreground">{selectedItem.preparation_time} mins</p>
                    </div>
                  )}
                  {selectedItem.calories && (
                    <div>
                      <h4 className="font-semibold mb-1">Calories</h4>
                      <p className="text-muted-foreground">{selectedItem.calories} cal</p>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-primary">
                    ${selectedItem.price.toFixed(2)}
                  </div>
                  <Button
                    onClick={() => {
                      addToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                    size="lg"
                    className="font-semibold"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
