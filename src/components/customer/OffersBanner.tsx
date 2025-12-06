import { useState, useEffect } from 'react';
import { promotionApi } from '@/db/api';
import type { Promotion } from '@/types/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tag, Percent, DollarSign, Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OffersBannerProps {
  restaurantId: string;
  onOfferClick?: (code: string) => void;
  onViewAllClick?: () => void;
  promotions?: Promotion[];
}

export default function OffersBanner({ 
  restaurantId, 
  onOfferClick, 
  onViewAllClick,
  promotions: externalPromotions 
}: OffersBannerProps) {
  const [promotions, setPromotions] = useState<Promotion[]>(externalPromotions || []);
  const [loading, setLoading] = useState(!externalPromotions);

  useEffect(() => {
    if (externalPromotions) {
      setPromotions(externalPromotions);
    } else if (restaurantId) {
      loadPromotions();
    }
  }, [restaurantId, externalPromotions]);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await promotionApi.getActivePromotionsForCustomer(restaurantId);
      setPromotions(data.slice(0, 5)); // Show max 5 offers in banner
    } catch (error) {
      console.error('Failed to load promotions:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDiscountBadge = (promotion: Promotion) => {
    if (promotion.discount_type === 'PERCENTAGE') {
      return (
        <div className="flex items-center gap-1 text-white font-bold text-lg">
          {promotion.discount_value}%
          <Percent className="w-4 h-4" />
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 text-white font-bold text-lg">
        <DollarSign className="w-4 h-4" />
        {promotion.discount_value}
      </div>
    );
  };

  const getDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  if (loading) {
    return (
      <div className="w-full overflow-hidden">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shrink-0 w-[280px] xl:w-[320px] animate-pulse">
              <CardContent className="p-4">
                <div className="h-20 bg-muted rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (promotions.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base xl:text-lg font-bold flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary" />
          Offers for You
        </h3>
        {promotions.length > 0 && onViewAllClick && (
          <button
            onClick={onViewAllClick}
            className="text-sm text-primary hover:underline flex items-center gap-1 font-semibold"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-3 xl:-mx-6 px-3 xl:px-6">
        {promotions.map((promotion) => {
          const daysLeft = getDaysLeft(promotion.end_date);
          const isExpiringSoon = daysLeft <= 3 && daysLeft > 0;

          return (
            <Card
              key={promotion.id}
              onClick={() => onOfferClick?.(promotion.code)}
              className={cn(
                "shrink-0 w-[280px] xl:w-[320px] cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] border-2",
                isExpiringSoon ? "border-orange-500" : "border-primary/30"
              )}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
                  
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                  </div>

                  {/* Content */}
                  <div className="relative p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      {/* Discount Badge */}
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
                        {getDiscountBadge(promotion)}
                      </div>

                      {/* Expiring Soon Badge */}
                      {isExpiringSoon && (
                        <Badge variant="destructive" className="shrink-0">
                          <Clock className="w-3 h-3 mr-1" />
                          {daysLeft}d left
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-bold text-sm xl:text-base mb-1 line-clamp-2 min-h-[2.5rem]">
                      {promotion.title}
                    </h4>

                    {/* Code */}
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1.5 mb-2">
                      <Tag className="w-3 h-3 text-primary" />
                      <span className="font-mono font-bold text-xs xl:text-sm text-primary">
                        {promotion.code}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center justify-between text-xs text-white/90">
                      {promotion.min_order_amount > 0 && (
                        <span>Min. ${promotion.min_order_amount}</span>
                      )}
                      {promotion.max_discount && (
                        <span>Max. ${promotion.max_discount}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* View All Card */}
        {onViewAllClick && promotions.length > 0 && (
          <Card
            onClick={onViewAllClick}
            className="shrink-0 w-[140px] xl:w-[160px] cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] border-2 border-dashed border-primary/50 bg-primary/5"
          >
            <CardContent className="p-0 h-full flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <ChevronRight className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-primary">View All Offers</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
