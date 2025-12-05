import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { OrderWithItems, CartItem } from '@/types/types';
import { useFormatters } from '@/hooks/useFormatters';
import { Plus, ShoppingCart, Receipt, AlertCircle } from 'lucide-react';

interface AddToExistingOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  existingOrder: OrderWithItems;
  newItems: CartItem[];
  onAddToExisting: () => void;
  onCreateNew: () => void;
}

export default function AddToExistingOrderDialog({
  open,
  onOpenChange,
  existingOrder,
  newItems,
  onAddToExisting,
  onCreateNew,
}: AddToExistingOrderDialogProps) {
  const { formatCurrency } = useFormatters();

  const getItemPrice = (item: CartItem) => {
    if (item.menu_item.has_portions && item.portionSize && item.menu_item.variants) {
      const portionVariant = item.menu_item.variants.find(
        v => v.name.toLowerCase() === item.portionSize?.toLowerCase()
      );
      if (portionVariant) {
        return portionVariant.price;
      }
    }
    return item.selectedVariant?.price || item.menu_item.price;
  };

  const newItemsTotal = newItems.reduce((sum, item) => {
    return sum + (getItemPrice(item) * item.quantity);
  }, 0);

  const updatedTotal = existingOrder.total_amount + newItemsTotal;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            You Have an Active Order
          </DialogTitle>
          <DialogDescription>
            You already have an order in progress. Would you like to add these items to your existing order or create a new separate order?
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Existing Order */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Receipt className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold">Current Order</h3>
              <Badge variant="secondary" className="ml-auto">
                {existingOrder.status}
              </Badge>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              {existingOrder.order_items?.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.quantity}x {item.menu_item_name}
                    {item.portion_size && ` (${item.portion_size})`}
                    {item.variant_name && ` (${item.variant_name})`}
                  </span>
                  <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Current Total</span>
                <span>{formatCurrency(existingOrder.total_amount)}</span>
              </div>
            </div>
          </div>

          {/* New Items */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-primary">Items to Add</h3>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 space-y-2">
              {newItems.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {item.quantity}x {item.menu_item.name}
                    {item.portionSize && ` (${item.portionSize})`}
                    {item.selectedVariant && ` (${item.selectedVariant.name})`}
                  </span>
                  <span className="font-medium">{formatCurrency(getItemPrice(item) * item.quantity)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-semibold text-primary">
                <span>New Items Total</span>
                <span>{formatCurrency(newItemsTotal)}</span>
              </div>
            </div>
          </div>

          {/* Updated Total */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Updated Order Total</span>
              <span className="text-2xl font-bold text-primary">{formatCurrency(updatedTotal)}</span>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button
            onClick={onAddToExisting}
            size="lg"
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add to Existing Order
          </Button>
          <Button
            onClick={onCreateNew}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Create New Separate Order
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            variant="ghost"
            size="sm"
            className="w-full"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
