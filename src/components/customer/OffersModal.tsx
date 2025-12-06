import { useState, useEffect } from 'react';
import { promotionApi } from '@/db/api';
import type { Promotion } from '@/types/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tag, Copy, Calendar, DollarSign, Percent, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface OffersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restaurantId: string;
  onApplyPromo?: (code: string) => void;
}

export default function OffersModal({ open, onOpenChange, restaurantId, onApplyPromo }: OffersModalProps) {
  const { toast } = useToast();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open && restaurantId) {
      loadPromotions();
    }
  }, [open, restaurantId]);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await promotionApi.getActivePromotionsForCustomer(restaurantId);
      setPromotions(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load offers',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: 'Copied!',
      description: 'Promo code copied to clipboard',
    });
  };

  const handleApplyPromo = (code: string) => {
    if (onApplyPromo) {
      onApplyPromo(code);
      onOpenChange(false);
    } else {
      copyPromoCode(code);
    }
  };

  const getDiscountDisplay = (promotion: Promotion) => {
    if (promotion.discount_type === 'PERCENTAGE') {
      return (
        <div className="flex items-center gap-1 text-primary font-bold text-2xl">
          <Percent className="w-6 h-6" />
          {promotion.discount_value}% OFF
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 text-primary font-bold text-2xl">
        <DollarSign className="w-6 h-6" />
        ${promotion.discount_value} OFF
      </div>
    );
  };

  const isExpiringSoon = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysLeft <= 3 && daysLeft > 0;
  };

  const getDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Tag className="w-6 h-6 text-primary" />
            Available Offers
          </DialogTitle>
          <DialogDescription>
            Choose from our exclusive offers and save on your order
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="py-12 text-center text-muted-foreground">
            Loading offers...
          </div>
        ) : promotions.length === 0 ? (
          <div className="py-12 text-center">
            <Tag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No offers available</h3>
            <p className="text-muted-foreground">
              Check back later for exciting deals and discounts
            </p>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            {promotions.map((promotion) => (
              <Card
                key={promotion.id}
                className={cn(
                  "relative overflow-hidden border-2 transition-all hover:shadow-lg",
                  isExpiringSoon(promotion.end_date) && "border-orange-500"
                )}
              >
                {isExpiringSoon(promotion.end_date) && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                    Expiring Soon!
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg p-6 md:w-48">
                      {getDiscountDisplay(promotion)}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{promotion.title}</h3>
                        {promotion.description && (
                          <p className="text-muted-foreground text-sm">
                            {promotion.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="font-mono font-bold text-lg">{promotion.code}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyPromoCode(promotion.code)}
                          className="ml-auto"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {promotion.min_order_amount > 0 && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <DollarSign className="w-4 h-4" />
                            <span>Min. order: ${promotion.min_order_amount}</span>
                          </div>
                        )}
                        {promotion.max_discount && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Info className="w-4 h-4" />
                            <span>Max. discount: ${promotion.max_discount}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            Valid till {new Date(promotion.end_date).toLocaleDateString()}
                            {getDaysLeft(promotion.end_date) > 0 && (
                              <span className="ml-1 text-primary font-medium">
                                ({getDaysLeft(promotion.end_date)} days left)
                              </span>
                            )}
                          </span>
                        </div>
                      </div>

                      {promotion.terms && (
                        <div className="text-xs text-muted-foreground pt-2 border-t">
                          <span className="font-semibold">Terms:</span> {promotion.terms}
                        </div>
                      )}

                      {promotion.usage_limit_per_customer && (
                        <div className="text-xs text-muted-foreground">
                          Limited to {promotion.usage_limit_per_customer} use(s) per customer
                        </div>
                      )}

                      {promotion.total_usage_limit && (
                        <div className="flex items-center gap-2 text-xs">
                          <Badge variant="secondary">
                            {promotion.total_usage_limit - promotion.used_count} left
                          </Badge>
                        </div>
                      )}

                      <Button
                        className="w-full mt-4"
                        onClick={() => handleApplyPromo(promotion.code)}
                      >
                        {onApplyPromo ? 'Apply Offer' : 'Copy Code'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
