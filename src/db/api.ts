import { supabase } from './supabase';
import type {
  Profile,
  Restaurant,
  MenuCategory,
  MenuItem,
  Table,
  Order,
  OrderItem,
  OrderWithItems,
  OrderStatus,
  Staff,
  Message,
  VisitedRestaurant,
  VisitedRestaurantWithDetails,
  Notification,
  NotificationWithOrder,
  Review,
  ReviewWithCustomer,
  Promotion,
  PromotionWithMenuItems,
  RestaurantSettings,
  AnalyticsData,
} from '@/types/types';

export const profileApi = {
  async getCurrentProfile(): Promise<Profile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', (await supabase.auth.getUser()).data.user?.id || '')
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateProfile(id: string, updates: Partial<Profile>): Promise<Profile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },
};

export const restaurantApi = {
  async getRestaurantsByOwner(ownerId: string): Promise<Restaurant[]> {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('owner_id', ownerId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getRestaurantById(id: string): Promise<Restaurant | null> {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async createRestaurant(restaurant: Omit<Restaurant, 'id' | 'created_at' | 'updated_at'>): Promise<Restaurant | null> {
    const { data, error } = await supabase
      .from('restaurants')
      .insert(restaurant)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateRestaurant(id: string, updates: Partial<Restaurant>): Promise<Restaurant | null> {
    const { data, error } = await supabase
      .from('restaurants')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async deleteRestaurant(id: string): Promise<void> {
    const { error } = await supabase
      .from('restaurants')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

export const menuCategoryApi = {
  async getCategoriesByRestaurant(restaurantId: string): Promise<MenuCategory[]> {
    const { data, error } = await supabase
      .from('menu_categories')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('display_order', { ascending: true });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async createCategory(category: Omit<MenuCategory, 'id' | 'created_at' | 'display_order'>): Promise<MenuCategory | null> {
    const { data: existingCategories } = await supabase
      .from('menu_categories')
      .select('display_order')
      .eq('restaurant_id', category.restaurant_id)
      .order('display_order', { ascending: false })
      .limit(1);
    
    const nextOrder = existingCategories && existingCategories.length > 0 
      ? existingCategories[0].display_order + 1 
      : 0;

    const { data, error } = await supabase
      .from('menu_categories')
      .insert({
        ...category,
        display_order: nextOrder,
      })
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateCategory(id: string, updates: Partial<MenuCategory>): Promise<MenuCategory | null> {
    const { data, error } = await supabase
      .from('menu_categories')
      .update(updates)
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async deleteCategory(id: string): Promise<void> {
    const { error } = await supabase
      .from('menu_categories')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

export const menuItemApi = {
  async getItemsByRestaurant(restaurantId: string): Promise<MenuItem[]> {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getItemsByCategory(categoryId: string): Promise<MenuItem[]> {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getItemById(id: string): Promise<MenuItem | null> {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async createItem(item: Omit<MenuItem, 'id' | 'created_at' | 'updated_at'>): Promise<MenuItem | null> {
    const { data, error } = await supabase
      .from('menu_items')
      .insert(item)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateItem(id: string, updates: Partial<MenuItem>): Promise<MenuItem | null> {
    const { data, error } = await supabase
      .from('menu_items')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async deleteItem(id: string): Promise<void> {
    const { error } = await supabase
      .from('menu_items')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

export const tableApi = {
  async getTablesByRestaurant(restaurantId: string): Promise<Table[]> {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('table_number', { ascending: true });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getTableById(id: string): Promise<Table | null> {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async getTableByQRCode(qrCodeData: string): Promise<Table | null> {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('qr_code_data', qrCodeData)
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async createTable(table: Omit<Table, 'id' | 'created_at' | 'qr_code' | 'qr_code_data'>): Promise<Table | null> {
    const qrCode = `${table.restaurant_id}-${table.table_number}-${Date.now()}`;
    const { data, error } = await supabase
      .from('tables')
      .insert({
        ...table,
        qr_code: qrCode,
        qr_code_data: qrCode,
      })
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateTable(id: string, updates: Partial<Omit<Table, 'id' | 'created_at' | 'qr_code' | 'qr_code_data'>>): Promise<Table | null> {
    const { data, error } = await supabase
      .from('tables')
      .update(updates)
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async deleteTable(id: string): Promise<void> {
    const { error } = await supabase
      .from('tables')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

export const orderApi = {
  async getOrdersByCustomer(customerId: string): Promise<OrderWithItems[]> {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items(*, menu_item:menu_items(*)),
        table:tables(*),
        restaurant:restaurants(*),
        status_history:order_status_history(*)
      `)
      .eq('customer_id', customerId)
      .order('created_at', { ascending: false })
      .order('created_at', { foreignTable: 'order_status_history', ascending: true });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getOrdersByRestaurant(restaurantId: string): Promise<OrderWithItems[]> {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items(*, menu_item:menu_items(*)),
        table:tables(*),
        staff(*),
        customer:profiles!customer_id(*),
        status_history:order_status_history(*)
      `)
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false })
      .order('created_at', { foreignTable: 'order_status_history', ascending: true });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getOrderById(id: string): Promise<OrderWithItems | null> {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items(*, menu_item:menu_items(*)),
        table:tables(*),
        restaurant:restaurants(*),
        customer:profiles!customer_id(*),
        staff(*),
        status_history:order_status_history(*)
      `)
      .eq('id', id)
      .order('created_at', { foreignTable: 'order_status_history', ascending: true })
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateOrderStatus(orderId: string, status: OrderStatus): Promise<void> {
    const { error } = await supabase.rpc('update_order_status', {
      order_id: orderId,
      new_status: status,
    });
    if (error) throw error;
  },

  async updatePaymentStatus(orderId: string, paymentStatus: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'): Promise<void> {
    const { error } = await supabase
      .from('orders')
      .update({ payment_status: paymentStatus })
      .eq('id', orderId);
    if (error) throw error;
  },

  async createOrder(order: Omit<Order, 'id' | 'created_at' | 'updated_at' | 'currency' | 'stripe_session_id' | 'stripe_payment_intent_id' | 'customer_email' | 'customer_name' | 'completed_at'>): Promise<Order> {
    const { data, error } = await supabase
      .from('orders')
      .insert({
        ...order,
        currency: 'USD',
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async createOrderItems(items: Omit<OrderItem, 'id' | 'created_at'>[]): Promise<OrderItem[]> {
    const { data, error } = await supabase
      .from('order_items')
      .insert(items)
      .select();
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },
};

export const imageApi = {
  async uploadImage(file: File, path: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from('app-7x1ojvae4075_food_images')
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });
    if (error) throw error;
    
    const { data: urlData } = supabase.storage
      .from('app-7x1ojvae4075_food_images')
      .getPublicUrl(data.path);
    
    return urlData.publicUrl;
  },

  async deleteImage(path: string): Promise<void> {
    const { error } = await supabase.storage
      .from('app-7x1ojvae4075_food_images')
      .remove([path]);
    if (error) throw error;
  },
};

export const staffApi = {
  async getStaffByRestaurant(restaurantId: string): Promise<Staff[]> {
    const { data, error } = await supabase
      .from('staff')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_active', true)
      .order('name', { ascending: true });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async createStaff(staff: Omit<Staff, 'id' | 'created_at' | 'updated_at'>): Promise<Staff> {
    const { data, error } = await supabase
      .from('staff')
      .insert(staff)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async updateStaff(id: string, updates: Partial<Staff>): Promise<Staff> {
    const { data, error } = await supabase
      .from('staff')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async deleteStaff(id: string): Promise<void> {
    const { error } = await supabase
      .from('staff')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async assignWaiterToOrder(orderId: string, staffId: string): Promise<void> {
    const { error } = await supabase.rpc('assign_waiter_to_order', {
      order_id: orderId,
      staff_id: staffId,
    });
    if (error) throw error;
  },
};

export const messageApi = {
  async getMessagesByOrder(orderId: string): Promise<Message[]> {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('order_id', orderId)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getMessagesByRestaurant(restaurantId: string): Promise<Message[]> {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async sendMessage(message: Omit<Message, 'id' | 'created_at' | 'is_read'>): Promise<Message> {
    const { data, error } = await supabase
      .from('messages')
      .insert({
        ...message,
        is_read: false,
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async markMessagesAsRead(orderId: string, userId: string): Promise<void> {
    const { error } = await supabase.rpc('mark_messages_as_read', {
      p_order_id: orderId,
      p_user_id: userId,
    });
    if (error) throw error;
  },
};

export const visitedRestaurantApi = {
  async upsertVisitedRestaurant(customerId: string, restaurantId: string): Promise<VisitedRestaurant | null> {
    const { data, error } = await supabase.rpc('upsert_visited_restaurant', {
      p_customer_id: customerId,
      p_restaurant_id: restaurantId,
    });
    if (error) throw error;
    return data;
  },

  async getVisitedRestaurants(customerId: string): Promise<VisitedRestaurantWithDetails[]> {
    const { data, error } = await supabase
      .from('visited_restaurants')
      .select(`
        *,
        restaurant:restaurants(*)
      `)
      .eq('customer_id', customerId)
      .order('last_visited_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async deleteVisitedRestaurant(id: string): Promise<void> {
    const { error } = await supabase
      .from('visited_restaurants')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

export const notificationApi = {
  async getNotifications(userId: string, limit = 50): Promise<Notification[]> {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getUnreadNotifications(userId: string): Promise<Notification[]> {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .eq('is_read', false)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getUnreadCount(userId: string): Promise<number> {
    const { count, error } = await supabase
      .from('notifications')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('is_read', false);
    if (error) throw error;
    return count || 0;
  },

  async markAsRead(notificationId: string): Promise<void> {
    const { error } = await supabase.rpc('mark_notification_as_read', {
      notification_id: notificationId,
    });
    if (error) throw error;
  },

  async markAllAsRead(): Promise<void> {
    const { error } = await supabase.rpc('mark_all_notifications_as_read');
    if (error) throw error;
  },

  async deleteNotification(id: string): Promise<void> {
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};

export const reviewApi = {
  async getReviewsByRestaurant(restaurantId: string): Promise<ReviewWithCustomer[]> {
    const { data, error } = await supabase
      .from('reviews')
      .select(`
        *,
        customer:profiles!customer_id(*)
      `)
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async createReview(review: Omit<Review, 'id' | 'created_at' | 'reply' | 'replied_at'>): Promise<Review> {
    const { data, error} = await supabase
      .from('reviews')
      .insert(review)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async replyToReview(reviewId: string, reply: string): Promise<Review> {
    const { data, error } = await supabase
      .from('reviews')
      .update({ 
        reply, 
        replied_at: new Date().toISOString() 
      })
      .eq('id', reviewId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getAverageRating(restaurantId: string): Promise<number> {
    const { data, error } = await supabase
      .from('reviews')
      .select('rating')
      .eq('restaurant_id', restaurantId);
    if (error) throw error;
    if (!data || data.length === 0) return 0;
    const sum = data.reduce((acc, review) => acc + review.rating, 0);
    return sum / data.length;
  },
};

export const promotionApi = {
  async getPromotionsByRestaurant(restaurantId: string): Promise<Promotion[]> {
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getActivePromotions(restaurantId: string): Promise<Promotion[]> {
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('status', 'active')
      .lte('start_date', today)
      .gte('end_date', today)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async createPromotion(promotion: Omit<Promotion, 'id' | 'created_at' | 'usage_count'>): Promise<Promotion> {
    const { data, error } = await supabase
      .from('promotions')
      .insert(promotion)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async updatePromotion(id: string, updates: Partial<Promotion>): Promise<Promotion> {
    const { data, error } = await supabase
      .from('promotions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async deletePromotion(id: string): Promise<void> {
    const { error } = await supabase
      .from('promotions')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async incrementUsageCount(id: string): Promise<void> {
    const { error } = await supabase.rpc('increment_promotion_usage', {
      promotion_id: id,
    });
    if (error) throw error;
  },

  async getPromotionMenuItems(promotionId: string): Promise<string[]> {
    const { data, error } = await supabase
      .from('promotion_menu_items')
      .select('menu_item_id')
      .eq('promotion_id', promotionId);
    if (error) throw error;
    return Array.isArray(data) ? data.map(item => item.menu_item_id) : [];
  },

  async setPromotionMenuItems(promotionId: string, menuItemIds: string[]): Promise<void> {
    // First, delete existing associations
    const { error: deleteError } = await supabase
      .from('promotion_menu_items')
      .delete()
      .eq('promotion_id', promotionId);
    if (deleteError) throw deleteError;

    // Then, insert new associations if any
    if (menuItemIds.length > 0) {
      const { error: insertError } = await supabase
        .from('promotion_menu_items')
        .insert(
          menuItemIds.map(menuItemId => ({
            promotion_id: promotionId,
            menu_item_id: menuItemId,
          }))
        );
      if (insertError) throw insertError;
    }
  },

  async getPromotionsForMenuItem(menuItemId: string): Promise<Promotion[]> {
    const today = new Date().toISOString().split('T')[0];
    
    // Get promotions that are linked to this menu item OR have no specific menu items (restaurant-wide)
    const { data: linkedPromotions, error: linkedError } = await supabase
      .from('promotion_menu_items')
      .select('promotion_id')
      .eq('menu_item_id', menuItemId);
    if (linkedError) throw linkedError;

    const linkedPromotionIds = Array.isArray(linkedPromotions) 
      ? linkedPromotions.map(p => p.promotion_id) 
      : [];

    // Get all active promotions
    const { data: allPromotions, error: allError } = await supabase
      .from('promotions')
      .select('*')
      .eq('status', 'active')
      .lte('start_date', today)
      .gte('end_date', today);
    if (allError) throw allError;

    if (!Array.isArray(allPromotions)) return [];

    // Filter promotions: include if it's linked to this item OR if it has no linked items (restaurant-wide)
    const result = [];
    for (const promo of allPromotions) {
      const { data: promoItems } = await supabase
        .from('promotion_menu_items')
        .select('id')
        .eq('promotion_id', promo.id)
        .limit(1);
      
      const hasLinkedItems = Array.isArray(promoItems) && promoItems.length > 0;
      
      if (!hasLinkedItems || linkedPromotionIds.includes(promo.id)) {
        result.push(promo);
      }
    }

    return result;
  },
};

export const settingsApi = {
  async getRestaurantSettings(restaurantId: string): Promise<RestaurantSettings | null> {
    const { data, error } = await supabase
      .from('restaurant_settings')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .maybeSingle();
    if (error) throw error;
    return data;
  },

  async updateRestaurantSettings(restaurantId: string, updates: Partial<RestaurantSettings>): Promise<RestaurantSettings> {
    const { data, error } = await supabase
      .from('restaurant_settings')
      .update(updates)
      .eq('restaurant_id', restaurantId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

export const analyticsApi = {
  async getAnalytics(restaurantId: string): Promise<AnalyticsData> {
    // Get all orders with their items for accurate calculations
    const { data: orders, error: ordersError } = await supabase
      .from('orders')
      .select(`
        id,
        total_amount,
        customer_id,
        created_at,
        status,
        payment_status
      `)
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: true });
    
    if (ordersError) throw ordersError;

    // Calculate total revenue from all orders (regardless of status for now, can filter if needed)
    const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total_amount || 0), 0) || 0;
    const totalOrders = orders?.length || 0;
    const uniqueCustomers = new Set(orders?.map(o => o.customer_id).filter(Boolean)).size;

    // Get average rating
    const averageRating = await reviewApi.getAverageRating(restaurantId);

    // Get all order items for this restaurant to calculate popular items
    const { data: allOrderItems, error: itemsError } = await supabase
      .from('order_items')
      .select(`
        id,
        menu_item_id,
        menu_item_name,
        quantity,
        price,
        order_id
      `);

    if (itemsError) throw itemsError;

    // Filter order items that belong to this restaurant's orders
    const orderIds = new Set(orders?.map(o => o.id) || []);
    const restaurantOrderItems = allOrderItems?.filter(item => orderIds.has(item.order_id)) || [];

    // Aggregate popular items by counting total quantity ordered
    const itemsMap = new Map<string, { 
      menu_item_id: string; 
      menu_item_name: string; 
      order_count: number; 
      total_revenue: number;
    }>();

    restaurantOrderItems.forEach((item) => {
      const itemId = item.menu_item_id || 'unknown';
      const existing = itemsMap.get(itemId);
      const itemRevenue = Number(item.price || 0) * Number(item.quantity || 0);
      
      if (existing) {
        existing.order_count += Number(item.quantity || 0);
        existing.total_revenue += itemRevenue;
      } else {
        itemsMap.set(itemId, {
          menu_item_id: itemId,
          menu_item_name: item.menu_item_name || 'Unknown Item',
          order_count: Number(item.quantity || 0),
          total_revenue: itemRevenue,
        });
      }
    });

    // Sort by order count (most ordered items first)
    const popularItems = Array.from(itemsMap.values())
      .sort((a, b) => b.order_count - a.order_count)
      .slice(0, 10);

    // Get revenue by date
    const revenueByDateMap = new Map<string, { revenue: number; order_count: number }>();
    orders?.forEach(order => {
      const date = order.created_at.split('T')[0];
      const existing = revenueByDateMap.get(date);
      const orderAmount = Number(order.total_amount || 0);
      
      if (existing) {
        existing.revenue += orderAmount;
        existing.order_count += 1;
      } else {
        revenueByDateMap.set(date, {
          revenue: orderAmount,
          order_count: 1,
        });
      }
    });

    const revenueByDate = Array.from(revenueByDateMap.entries())
      .map(([date, data]) => ({
        date,
        revenue: data.revenue,
        order_count: data.order_count,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return {
      totalRevenue,
      totalOrders,
      uniqueCustomers,
      averageRating,
      popularItems,
      revenueByDate,
    };
  },
};
