import type { ReactNode } from 'react';
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
import ProtectedRoute from './components/common/ProtectedRoute';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
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
    element: (
      <ProtectedRoute>
        <PaymentSuccess />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Owner Dashboard',
    path: '/owner/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <OwnerDashboard />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Restaurants',
    path: '/owner/restaurants',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <RestaurantList />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'New Restaurant',
    path: '/owner/restaurants/new',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <RestaurantForm />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Edit Restaurant',
    path: '/owner/restaurants/:id',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <RestaurantForm />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Menu Management',
    path: '/owner/menu/:restaurantId',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <MenuManagement />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Table Management',
    path: '/owner/tables/:restaurantId',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <TableManagement />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Order Management',
    path: '/owner/orders/:restaurantId',
    element: (
      <ProtectedRoute allowedRoles={['owner']}>
        <OrderManagement />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Customer Dashboard',
    path: '/customer/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <CustomerDashboard />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Scan QR',
    path: '/customer/scan',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <ScanQR />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Menu Browsing',
    path: '/customer/menu/:restaurantId',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <MenuBrowsing />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Checkout',
    path: '/customer/checkout/:restaurantId',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <Checkout />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Order History',
    path: '/customer/orders',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <OrderHistory />
      </ProtectedRoute>
    ),
    visible: false,
  },
  {
    name: 'Customer Profile',
    path: '/customer/profile',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <CustomerProfile />
      </ProtectedRoute>
    ),
    visible: false,
  },
];

export default routes;
