import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OwnerLayout from '@/components/owner/OwnerLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, Plus, Calendar, Percent, TrendingUp } from 'lucide-react';
import { promotionApi } from '@/db/api';
import type { Promotion } from '@/types/types';
import { useToast } from '@/hooks/use-toast';

export default function Promotions() {
  const { restaurantId } = useParams();
  const { toast } = useToast();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurantId) {
      loadPromotions();
    }
  }, [restaurantId]);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await promotionApi.getPromotionsByRestaurant(restaurantId!);
      setPromotions(data);
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

  return (
    <OwnerLayout title="Promotions">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text-primary mb-2">Promotions & Offers</h1>
            <p className="text-muted-foreground">Create and manage special offers for your customers</p>
          </div>
          <Button className="morph-button hover-glow-orange">
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
                  <p className="text-sm text-muted-foreground mb-1">Expired</p>
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
                            {promo.discount_type === 'percentage' && `${promo.discount_value}% OFF`}
                            {promo.discount_type === 'fixed' && `$${promo.discount_value} OFF`}
                            {promo.discount_type === 'bogo' && 'BOGO'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{promo.description}</p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{promo.start_date} to {promo.end_date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>{promo.usage_count} uses</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="morph-button">
                          Edit
                        </Button>
                        {promo.status === 'active' && (
                          <Button variant="outline" size="sm" className="morph-button">
                            Deactivate
                          </Button>
                        )}
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
      </div>
    </OwnerLayout>
  );
}
