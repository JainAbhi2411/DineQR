import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { restaurantApi } from '@/db/api';
import { Restaurant } from '@/types/types';

interface RestaurantContextType {
  restaurant: Restaurant | null;
  restaurantId: string | null;
  loading: boolean;
  refreshRestaurant: () => Promise<void>;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const { profile } = useAuth();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  const loadRestaurant = async () => {
    if (!profile) {
      setLoading(false);
      return;
    }

    try {
      const restaurants = await restaurantApi.getRestaurantsByOwner(profile.id);
      if (restaurants.length > 0) {
        setRestaurant(restaurants[0]);
      } else {
        setRestaurant(null);
      }
    } catch (error) {
      console.error('Failed to load restaurant:', error);
      setRestaurant(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurant();
  }, [profile?.id]);

  const refreshRestaurant = async () => {
    setLoading(true);
    await loadRestaurant();
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        restaurantId: restaurant?.id || null,
        loading,
        refreshRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);
  if (context === undefined) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
}
