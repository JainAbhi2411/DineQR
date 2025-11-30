import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { restaurantApi, menuCategoryApi, menuItemApi, imageApi } from '@/db/api';
import { Restaurant, MenuCategory, MenuItem } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, ArrowLeft, Upload, X, Save } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function MenuManagement() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [itemDialogOpen, setItemDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<MenuCategory | null>(null);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);

  const [categoryForm, setCategoryForm] = useState({ name: '', description: '' });
  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    is_available: true,
    image_url: '',
  });

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
      setMenuItems(itemsData);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantId) return;

    try {
      if (editingCategory) {
        await menuCategoryApi.updateCategory(editingCategory.id, categoryForm);
        toast({ title: 'Success', description: 'Category updated successfully' });
      } else {
        await menuCategoryApi.createCategory({
          ...categoryForm,
          restaurant_id: restaurantId,
        });
        toast({ title: 'Success', description: 'Category created successfully' });
      }
      setCategoryDialogOpen(false);
      setCategoryForm({ name: '', description: '' });
      setEditingCategory(null);
      loadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save category',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await menuCategoryApi.deleteCategory(id);
      toast({ title: 'Success', description: 'Category deleted successfully' });
      loadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete category',
        variant: 'destructive',
      });
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'Image size must be less than 1MB',
        variant: 'destructive',
      });
      return;
    }

    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleItemSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantId) return;

    try {
      setUploading(true);
      let imageUrl = itemForm.image_url;

      if (imageFile) {
        imageUrl = await imageApi.uploadImage(imageFile, restaurantId);
      }

      const itemData = {
        ...itemForm,
        price: parseFloat(itemForm.price),
        image_url: imageUrl,
        restaurant_id: restaurantId,
      };

      if (editingItem) {
        await menuItemApi.updateItem(editingItem.id, itemData);
        toast({ title: 'Success', description: 'Menu item updated successfully' });
      } else {
        await menuItemApi.createItem(itemData);
        toast({ title: 'Success', description: 'Menu item created successfully' });
      }

      setItemDialogOpen(false);
      resetItemForm();
      loadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save menu item',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await menuItemApi.deleteItem(id);
      toast({ title: 'Success', description: 'Menu item deleted successfully' });
      loadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete menu item',
        variant: 'destructive',
      });
    }
  };

  const resetItemForm = () => {
    setItemForm({
      name: '',
      description: '',
      price: '',
      category_id: '',
      is_available: true,
      image_url: '',
    });
    setImageFile(null);
    setImagePreview('');
    setEditingItem(null);
  };

  const openEditCategory = (category: MenuCategory) => {
    setEditingCategory(category);
    setCategoryForm({
      name: category.name,
      description: category.description || '',
    });
    setCategoryDialogOpen(true);
  };

  const openEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setItemForm({
      name: item.name,
      description: item.description || '',
      price: item.price.toString(),
      category_id: item.category_id,
      is_available: item.is_available,
      image_url: item.image_url || '',
    });
    setImagePreview(item.image_url || '');
    setItemDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => navigate('/owner/restaurants')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Restaurants
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{restaurant?.name} - Menu Management</h1>
          <p className="text-muted-foreground">Manage your menu categories and items</p>
        </div>

        <Tabs defaultValue="items" className="space-y-6">
          <TabsList>
            <TabsTrigger value="items">Menu Items</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Categories</h2>
              <Dialog open={categoryDialogOpen} onOpenChange={setCategoryDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => { setEditingCategory(null); setCategoryForm({ name: '', description: '' }); }}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingCategory ? 'Edit Category' : 'Add New Category'}</DialogTitle>
                    <DialogDescription>
                      Create categories to organize your menu items
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCategorySubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cat-name">Category Name *</Label>
                      <Input
                        id="cat-name"
                        value={categoryForm.name}
                        onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                        placeholder="e.g., Appetizers, Main Course"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cat-desc">Description</Label>
                      <Textarea
                        id="cat-desc"
                        value={categoryForm.description}
                        onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                        placeholder="Optional description"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Save className="w-4 h-4 mr-2" />
                      {editingCategory ? 'Update' : 'Create'} Category
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {categories.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <p className="text-muted-foreground mb-4">No categories yet</p>
                  <Button onClick={() => setCategoryDialogOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add First Category
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <Card key={category.id}>
                    <CardHeader>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription>{category.description || 'No description'}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => openEditCategory(category)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteCategory(category.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="items" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Menu Items</h2>
              <Dialog open={itemDialogOpen} onOpenChange={(open) => { setItemDialogOpen(open); if (!open) resetItemForm(); }}>
                <DialogTrigger asChild>
                  <Button disabled={categories.length === 0}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Menu Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}</DialogTitle>
                    <DialogDescription>
                      Add food items with images, prices, and descriptions
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleItemSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="item-image">Food Image</Label>
                      <div className="flex flex-col gap-4">
                        {imagePreview && (
                          <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => { setImageFile(null); setImagePreview(''); }}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                        <Input
                          id="item-image"
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                          onChange={handleImageSelect}
                        />
                        <p className="text-xs text-muted-foreground">Max size: 1MB. Formats: JPEG, PNG, WEBP, GIF, AVIF</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="item-name">Item Name *</Label>
                      <Input
                        id="item-name"
                        value={itemForm.name}
                        onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                        placeholder="e.g., Margherita Pizza"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="item-category">Category *</Label>
                      <Select value={itemForm.category_id} onValueChange={(value) => setItemForm({ ...itemForm, category_id: value })} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="item-price">Price ($) *</Label>
                      <Input
                        id="item-price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={itemForm.price}
                        onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })}
                        placeholder="0.00"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="item-desc">Description</Label>
                      <Textarea
                        id="item-desc"
                        value={itemForm.description}
                        onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
                        placeholder="Describe the dish, ingredients, etc."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="item-available">Available</Label>
                      <Switch
                        id="item-available"
                        checked={itemForm.is_available}
                        onCheckedChange={(checked) => setItemForm({ ...itemForm, is_available: checked })}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={uploading}>
                      <Save className="w-4 h-4 mr-2" />
                      {uploading ? 'Uploading...' : editingItem ? 'Update Item' : 'Add Item'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {categories.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <p className="text-muted-foreground mb-4">Create categories first to add menu items</p>
                  <Button onClick={() => setCategoryDialogOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Category
                  </Button>
                </CardContent>
              </Card>
            ) : menuItems.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <p className="text-muted-foreground mb-4">No menu items yet</p>
                  <Button onClick={() => setItemDialogOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add First Item
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {categories.map((category) => {
                  const categoryItems = menuItems.filter((item) => item.category_id === category.id);
                  if (categoryItems.length === 0) return null;

                  return (
                    <div key={category.id}>
                      <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryItems.map((item) => (
                          <Card key={item.id} className="overflow-hidden">
                            {item.image_url && (
                              <div className="h-48 overflow-hidden">
                                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                            )}
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-lg">{item.name}</CardTitle>
                                <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                              </div>
                              <CardDescription className="line-clamp-2">
                                {item.description || 'No description'}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => openEditItem(item)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleDeleteItem(item.id)}>
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                              <div className="ml-auto flex items-center gap-2">
                                <span className={`text-xs px-2 py-1 rounded-full ${item.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                  {item.is_available ? 'Available' : 'Unavailable'}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
