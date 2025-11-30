export type UserRole = 'owner' | 'customer';
export type OrderStatus = 'pending' | 'preparing' | 'served' | 'completed' | 'cancelled';
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';

export interface Profile {
  id: string;
  username: string;
  email: string | null;
  full_name: string | null;
  phone: string | null;
  role: UserRole;
  avatar_url: string | null;
  bio: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  country: string;
  preferences: Record<string, any>;
  created_at: string;
}

export interface Restaurant {
  id: string;
  owner_id: string;
  name: string;
  location: string | null;
  contact_details: string | null;
  business_info: string | null;
  created_at: string;
  updated_at: string;
}

export interface MenuCategory {
  id: string;
  restaurant_id: string;
  name: string;
  description?: string | null;
  display_order: number;
  created_at: string;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  category_id: string | null;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  is_available: boolean;
  ingredients: string | null;
  allergens: string | null;
  preparation_time: number;
  calories: number | null;
  is_vegetarian: boolean;
  is_vegan: boolean;
  is_gluten_free: boolean;
  spice_level: 'none' | 'mild' | 'medium' | 'hot' | 'extra_hot' | null;
  created_at: string;
  updated_at: string;
}

export interface Table {
  id: string;
  restaurant_id: string;
  table_number: string;
  capacity: number;
  qr_code: string;
  qr_code_data: string;
  created_at: string;
}

export interface Order {
  id: string;
  customer_id: string | null;
  restaurant_id: string;
  table_id: string | null;
  assigned_to: string | null;
  status: OrderStatus;
  payment_status: PaymentStatus;
  total_amount: number;
  currency: string;
  stripe_session_id: string | null;
  stripe_payment_intent_id: string | null;
  customer_email: string | null;
  customer_name: string | null;
  special_instructions: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Staff {
  id: string;
  restaurant_id: string;
  user_id: string | null;
  name: string;
  email: string | null;
  phone: string | null;
  role: 'waiter' | 'chef' | 'manager';
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  order_id: string | null;
  restaurant_id: string;
  sender_id: string;
  sender_type: 'customer' | 'owner' | 'staff';
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  menu_item_id: string | null;
  menu_item_name: string;
  menu_item?: MenuItem;
  quantity: number;
  price: number;
  notes: string | null;
  created_at: string;
}

export interface OrderWithItems extends Order {
  order_items?: OrderItem[];
  table?: Table;
  restaurant?: Restaurant;
  customer?: Profile;
  staff?: Staff;
}

export interface MenuItemWithCategory extends MenuItem {
  category?: MenuCategory;
}

export interface CartItem {
  menu_item: MenuItem;
  quantity: number;
  notes?: string;
}
