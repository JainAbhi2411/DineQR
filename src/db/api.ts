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

  async createCategory(category: Omit<MenuCategory, 'id' | 'created_at'>): Promise<MenuCategory | null> {
    const { data, error } = await supabase
      .from('menu_categories')
      .insert(category)
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

  async createTable(table: Omit<Table, 'id' | 'created_at'>): Promise<Table | null> {
    const { data, error } = await supabase
      .from('tables')
      .insert(table)
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
        table:tables(*)
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
