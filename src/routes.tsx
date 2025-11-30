import type { ReactNode } from 'react';
import type { UserRole } from './types/types';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PaymentSuccess from './pages/PaymentSuccess';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import RestaurantList from './pages/owner/RestaurantList';
import RestaurantForm from './pages/owner/RestaurantForm';
import MenuManagement from './pages/owner/MenuManagement';
import TableManagement from './pages/owner/TableManagement';
import OrderManagement from './pages/owner/OrderManagement';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import CustomerProfile from './pages/customer/CustomerProfile';
import ScanQR from './pages/customer/ScanQR';
import MenuBrowsing from './pages/customer/MenuBrowsing';
import Checkout from './pages/customer/Checkout';
import OrderHistory from './pages/customer/OrderHistory';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  protected?: boolean;
  allowedRoles?: UserRole[];
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: false,
  },
  {
    name: 'Login',
    path: '/login',
    element: <Login />,
    visible: false,
  },
  {
    name: 'Register',
    path: '/register',
    element: <Register />,
    visible: false,
  },
  {
    name: 'Payment Success',
    path: '/payment-success',
    element: <PaymentSuccess />,
    visible: false,
    protected: true,
  },
  {
    name: 'Owner Dashboard',
    path: '/owner/dashboard',
    element: <OwnerDashboard />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'Restaurants',
    path: '/owner/restaurants',
    element: <RestaurantList />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'New Restaurant',
    path: '/owner/restaurants/new',
    element: <RestaurantForm />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'Edit Restaurant',
    path: '/owner/restaurants/:id',
    element: <RestaurantForm />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'Menu Management',
    path: '/owner/menu/:restaurantId',
    element: <MenuManagement />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'Table Management',
    path: '/owner/tables/:restaurantId',
    element: <TableManagement />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'Order Management',
    path: '/owner/orders/:restaurantId',
    element: <OrderManagement />,
    visible: false,
    protected: true,
    allowedRoles: ['owner'],
  },
  {
    name: 'Customer Dashboard',
    path: '/customer/dashboard',
    element: <CustomerDashboard />,
    visible: false,
    protected: true,
    allowedRoles: ['customer'],
  },
  {
    name: 'Scan QR',
    path: '/customer/scan',
    element: <ScanQR />,
    visible: false,
    protected: true,
    allowedRoles: ['customer'],
  },
  {
    name: 'Menu Browsing',
    path: '/customer/menu/:restaurantId',
    element: <MenuBrowsing />,
    visible: false,
    protected: true,
    allowedRoles: ['customer'],
  },
  {
    name: 'Checkout',
    path: '/customer/checkout/:restaurantId',
    element: <Checkout />,
    visible: false,
    protected: true,
    allowedRoles: ['customer'],
  },
  {
    name: 'Order History',
    path: '/customer/orders',
    element: <OrderHistory />,
    visible: false,
    protected: true,
    allowedRoles: ['customer'],
  },
  {
    name: 'Customer Profile',
    path: '/customer/profile',
    element: <CustomerProfile />,
    visible: false,
    protected: true,
    allowedRoles: ['customer'],
  },
];

export default routes;
