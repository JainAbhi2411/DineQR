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
        order_items(*),
        table:tables(*),
        restaurant:restaurants(*)
      `)
      .eq('customer_id', customerId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getOrdersByRestaurant(restaurantId: string): Promise<OrderWithItems[]> {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items(*),
        table:tables(*),
        staff(*),
        customer:profiles!customer_id(*)
      `)
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  async getOrderById(id: string): Promise<OrderWithItems | null> {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items(*),
        table:tables(*),
        restaurant:restaurants(*)
      `)
      .eq('id', id)
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

  async createOrderItems(items: Omit<OrderItem, 'id' | 'created_at' | 'menu_item_name' | 'notes'>[]): Promise<OrderItem[]> {
    const { data, error } = await supabase
      .from('order_items')
      .insert(items.map(item => ({
        ...item,
        menu_item_name: '',
        notes: null,
      })))
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
