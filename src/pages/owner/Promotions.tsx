import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, Plus, Calendar, Percent, TrendingUp, Edit, Trash2, Power, PowerOff } from 'lucide-react';
import { promotionApi, menuItemApi } from '@/db/api';
import type { Promotion, MenuItem, DiscountType } from '@/types/types';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface PromotionWithItems extends Promotion {
  menu_item_ids?: string[];
}

export default function Promotions() {
  const { restaurantId } = useParams();
  const { toast } = useToast();
  const [promotions, setPromotions] = useState<PromotionWithItems[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<PromotionWithItems | null>(null);
  const [selectedMenuItems, setSelectedMenuItems] = useState<string[]>([]);
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    discount_type: DiscountType;
    discount_value: string;
    start_date: string;
    end_date: string;
  }>({
    title: '',
    description: '',
    discount_type: 'percentage',
    discount_value: '',
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    if (restaurantId) {
      loadPromotions();
      loadMenuItems();
    }
  }, [restaurantId]);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await promotionApi.getPromotionsByRestaurant(restaurantId!);
      
      // Load menu items for each promotion
      const promotionsWithItems = await Promise.all(
        data.map(async (promo) => {
          const menuItemIds = await promotionApi.getPromotionMenuItems(promo.id);
          return { ...promo, menu_item_ids: menuItemIds };
        })
      );
      
      setPromotions(promotionsWithItems);
    } catch (error) {
      console.error('Failed to load promotions:', error);
      toast({
        title: 'Error',
        description: 'Failed to load promotions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const loadMenuItems = async () => {
    try {
      const data = await menuItemApi.getItemsByRestaurant(restaurantId!);
      setMenuItems(data);
    } catch (error) {
      console.error('Failed to load menu items:', error);
    }
  };

  const handleAddPromotion = async () => {
    try {
      if (!formData.title || !formData.discount_value || !formData.start_date || !formData.end_date) {
        toast({
          title: 'Validation Error',
          description: 'Please fill in all required fields',
          variant: 'destructive',
        });
        return;
      }

      const discountValue = parseFloat(formData.discount_value);
      if (isNaN(discountValue) || discountValue < 0) {
        toast({
          title: 'Validation Error',
          description: 'Please enter a valid discount value',
          variant: 'destructive',
        });
        return;
      }

      if (formData.discount_type === 'percentage' && discountValue > 100) {
        toast({
          title: 'Validation Error',
          description: 'Percentage discount cannot exceed 100%',
          variant: 'destructive',
        });
        return;
      }

      const newPromotion = await promotionApi.createPromotion({
        restaurant_id: restaurantId!,
        title: formData.title,
        description: formData.description || null,
        discount_type: formData.discount_type,
        discount_value: discountValue,
        start_date: formData.start_date,
        end_date: formData.end_date,
        status: 'active',
      });

      // Set menu items for the promotion
      await promotionApi.setPromotionMenuItems(newPromotion.id, selectedMenuItems);

      toast({
        title: 'Success',
        description: 'Promotion created successfully',
      });

      setShowAddDialog(false);
      resetForm();
      loadPromotions();
    } catch (error) {
      console.error('Failed to create promotion:', error);
      toast({
        title: 'Error',
        description: 'Failed to create promotion',
        variant: 'destructive',
      });
    }
  };

  const handleEditPromotion = async () => {
    try {
      if (!editingPromotion || !formData.title || !formData.discount_value || !formData.start_date || !formData.end_date) {
        toast({
          title: 'Validation Error',
          description: 'Please fill in all required fields',
          variant: 'destructive',
        });
        return;
      }

      const discountValue = parseFloat(formData.discount_value);
      if (isNaN(discountValue) || discountValue < 0) {
        toast({
          title: 'Validation Error',
          description: 'Please enter a valid discount value',
          variant: 'destructive',
        });
        return;
      }

      if (formData.discount_type === 'percentage' && discountValue > 100) {
        toast({
          title: 'Validation Error',
          description: 'Percentage discount cannot exceed 100%',
          variant: 'destructive',
        });
        return;
      }

      await promotionApi.updatePromotion(editingPromotion.id, {
        title: formData.title,
        description: formData.description || null,
        discount_type: formData.discount_type,
        discount_value: discountValue,
        start_date: formData.start_date,
        end_date: formData.end_date,
      });

      // Update menu items for the promotion
      await promotionApi.setPromotionMenuItems(editingPromotion.id, selectedMenuItems);

      toast({
        title: 'Success',
        description: 'Promotion updated successfully',
      });

      setShowEditDialog(false);
      setEditingPromotion(null);
      resetForm();
      loadPromotions();
    } catch (error) {
      console.error('Failed to update promotion:', error);
      toast({
        title: 'Error',
        description: 'Failed to update promotion',
        variant: 'destructive',
      });
    }
  };

  const handleDeletePromotion = async (id: string) => {
    if (!confirm('Are you sure you want to delete this promotion?')) {
      return;
    }

    try {
      await promotionApi.deletePromotion(id);
      toast({
        title: 'Success',
        description: 'Promotion deleted successfully',
      });
      loadPromotions();
    } catch (error) {
      console.error('Failed to delete promotion:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete promotion',
        variant: 'destructive',
      });
    }
  };

  const handleToggleStatus = async (promotion: Promotion) => {
    try {
      const newStatus = promotion.status === 'active' ? 'inactive' : 'active';
      await promotionApi.updatePromotion(promotion.id, { status: newStatus });
      toast({
        title: 'Success',
        description: `Promotion ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully`,
      });
      loadPromotions();
    } catch (error) {
      console.error('Failed to toggle promotion status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update promotion status',
        variant: 'destructive',
      });
    }
  };

  const openEditDialog = (promotion: PromotionWithItems) => {
    setEditingPromotion(promotion);
    setFormData({
      title: promotion.title,
      description: promotion.description || '',
      discount_type: promotion.discount_type,
      discount_value: promotion.discount_value.toString(),
      start_date: promotion.start_date,
      end_date: promotion.end_date,
    });
    setSelectedMenuItems(promotion.menu_item_ids || []);
    setShowEditDialog(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      discount_type: 'percentage',
      discount_value: '',
      start_date: '',
      end_date: '',
    });
    setSelectedMenuItems([]);
  };

  const toggleMenuItem = (menuItemId: string) => {
    setSelectedMenuItems(prev =>
      prev.includes(menuItemId)
        ? prev.filter(id => id !== menuItemId)
        : [...prev, menuItemId]
    );
  };

  const activePromotions = promotions.filter(p => p.status === 'active');
  const totalUsage = promotions.reduce((acc, p) => acc + (p.usage_count || 0), 0);
  const avgDiscount = promotions.length > 0
    ? Math.round(promotions.reduce((acc, p) => acc + p.discount_value, 0) / promotions.length)
    : 0;

  if (loading) {
    return (
      <OwnerLayout title="Promotions">
        <div className="p-8 flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        </div>
      </OwnerLayout>
    );
  }

  const getDiscountDisplay = (promo: Promotion) => {
    if (promo.discount_type === 'percentage') return `${promo.discount_value}% OFF`;
    if (promo.discount_type === 'fixed') return `$${promo.discount_value} OFF`;
    return 'BOGO';
  };

  const getAppliedItemsText = (promo: PromotionWithItems) => {
    if (!promo.menu_item_ids || promo.menu_item_ids.length === 0) {
      return 'All items';
    }
    return `${promo.menu_item_ids.length} item(s)`;
  };

  return (
    <OwnerLayout title="Promotions">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text-primary mb-2">Promotions & Offers</h1>
            <p className="text-muted-foreground">Create and manage special offers for your customers</p>
          </div>
          <Button className="morph-button hover-glow-orange" onClick={() => setShowAddDialog(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create Promotion
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Promotions</p>
                  <p className="text-3xl font-bold gradient-text-primary">{activePromotions.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Tag className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Usage</p>
                  <p className="text-3xl font-bold gradient-text-secondary">{totalUsage}</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Discount</p>
                  <p className="text-3xl font-bold text-green-500">{avgDiscount}%</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Percent className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Inactive</p>
                  <p className="text-3xl font-bold gradient-text-electric">
                    {promotions.filter(p => p.status !== 'active').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promotions List */}
        <Card className="glass border-2 border-border">
          <CardHeader>
            <CardTitle>All Promotions</CardTitle>
            <CardDescription>Manage your promotional offers</CardDescription>
          </CardHeader>
          <CardContent>
            {promotions.length > 0 ? (
              <div className="space-y-4">
                {promotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="p-6 rounded-lg border border-border hover:border-primary/50 transition-all bg-muted/30"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{promo.title}</h3>
                          <Badge variant={promo.status === 'active' ? 'default' : 'secondary'}>
                            {promo.status}
                          </Badge>
                          <Badge variant="outline">
                            {getDiscountDisplay(promo)}
                          </Badge>
                        </div>
                        {promo.description && (
                          <p className="text-muted-foreground mb-3">{promo.description}</p>
                        )}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{promo.start_date} to {promo.end_date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>{promo.usage_count} uses</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            <span>Applies to: {getAppliedItemsText(promo)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="morph-button" onClick={() => openEditDialog(promo)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="morph-button" 
                          onClick={() => handleToggleStatus(promo)}
                        >
                          {promo.status === 'active' ? <PowerOff className="w-4 h-4" /> : <Power className="w-4 h-4" />}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="morph-button text-destructive" 
                          onClick={() => handleDeletePromotion(promo.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Tag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No promotions yet</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add Promotion Dialog */}
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create Promotion</DialogTitle>
              <DialogDescription>Create a new promotional offer for your restaurant</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Summer Special"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your promotion"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="discount_type">Discount Type *</Label>
                  <Select 
                    value={formData.discount_type} 
                    onValueChange={(value) => setFormData({ ...formData, discount_type: value as DiscountType })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed Amount</SelectItem>
                      <SelectItem value="bogo">Buy One Get One</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount_value">Discount Value *</Label>
                  <Input
                    id="discount_value"
                    type="number"
                    placeholder={formData.discount_type === 'percentage' ? '0-100' : '0.00'}
                    value={formData.discount_value}
                    onChange={(e) => setFormData({ ...formData, discount_value: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date *</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end_date">End Date *</Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Apply to Menu Items (leave empty for all items)</Label>
                <div className="border rounded-lg p-4 max-h-60 overflow-y-auto space-y-2">
                  {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`menu-item-${item.id}`}
                          checked={selectedMenuItems.includes(item.id)}
                          onCheckedChange={() => toggleMenuItem(item.id)}
                        />
                        <label
                          htmlFor={`menu-item-${item.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {item.name} - ${item.price}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No menu items available</p>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedMenuItems.length === 0 
                    ? 'This promotion will apply to all menu items' 
                    : `Selected ${selectedMenuItems.length} item(s)`}
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setShowAddDialog(false); resetForm(); }}>Cancel</Button>
              <Button onClick={handleAddPromotion}>Create Promotion</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Promotion Dialog */}
        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Promotion</DialogTitle>
              <DialogDescription>Update promotion details</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title *</Label>
                <Input
                  id="edit-title"
                  placeholder="e.g., Summer Special"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  placeholder="Describe your promotion"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-discount_type">Discount Type *</Label>
                  <Select 
                    value={formData.discount_type} 
                    onValueChange={(value) => setFormData({ ...formData, discount_type: value as DiscountType })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed Amount</SelectItem>
                      <SelectItem value="bogo">Buy One Get One</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-discount_value">Discount Value *</Label>
                  <Input
                    id="edit-discount_value"
                    type="number"
                    placeholder={formData.discount_type === 'percentage' ? '0-100' : '0.00'}
                    value={formData.discount_value}
                    onChange={(e) => setFormData({ ...formData, discount_value: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-start_date">Start Date *</Label>
                  <Input
                    id="edit-start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-end_date">End Date *</Label>
                  <Input
                    id="edit-end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Apply to Menu Items (leave empty for all items)</Label>
                <div className="border rounded-lg p-4 max-h-60 overflow-y-auto space-y-2">
                  {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`edit-menu-item-${item.id}`}
                          checked={selectedMenuItems.includes(item.id)}
                          onCheckedChange={() => toggleMenuItem(item.id)}
                        />
                        <label
                          htmlFor={`edit-menu-item-${item.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {item.name} - ${item.price}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No menu items available</p>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedMenuItems.length === 0 
                    ? 'This promotion will apply to all menu items' 
                    : `Selected ${selectedMenuItems.length} item(s)`}
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setShowEditDialog(false); setEditingPromotion(null); resetForm(); }}>Cancel</Button>
              <Button onClick={handleEditPromotion}>Update Promotion</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </OwnerLayout>
  );
}
