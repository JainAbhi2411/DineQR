import type { ReactNode } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PaymentSuccess from './pages/PaymentSuccess';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import ScanQR from './pages/customer/ScanQR';
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
];

export default routes;
