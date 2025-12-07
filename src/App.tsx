import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { RestaurantProvider } from './contexts/RestaurantContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/common/Header';
import Chatbot from './components/common/Chatbot';
import InstallPWA from './components/common/InstallPWA';
import OfflineIndicator from './components/common/OfflineIndicator';
import UpdateNotification from './components/common/UpdateNotification';
import SplashScreen from './components/common/SplashScreen';
import ProtectedRoute from './components/common/ProtectedRoute';
import routes from './routes';

function AppContent() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent glow-orange"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-primary opacity-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          {routes.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <ProtectedRoute allowedRoles={route.allowedRoles}>
                      <Component />
                    </ProtectedRoute>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Toaster />
      <Chatbot />
      <InstallPWA />
      <OfflineIndicator />
      <UpdateNotification />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds on initial load
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    // Mark app as ready after a short delay
    const readyTimer = setTimeout(() => {
      setIsAppReady(true);
    }, 100);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  // Show splash screen during initial load
  if (showSplash) {
    return <SplashScreen />;
  }

  // Don't render app content until ready
  if (!isAppReady) {
    return null;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <RestaurantProvider>
          <SettingsProvider>
            <AppContent />
          </SettingsProvider>
        </RestaurantProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
