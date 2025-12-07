import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";

// Register Service Worker for PWA with auto-update support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ Service Worker registered successfully:', registration.scope);
        
        // Check for updates immediately
        registration.update();
        
        // Check for updates every 30 seconds (more frequent for faster updates)
        setInterval(() => {
          console.log('🔄 Checking for updates...');
          registration.update();
        }, 30 * 1000); // 30 seconds
        
        // Also check when page becomes visible (user returns to tab)
        document.addEventListener('visibilitychange', () => {
          if (!document.hidden) {
            console.log('👀 Page visible, checking for updates...');
            registration.update();
          }
        });
        
        // Check when online status changes
        window.addEventListener('online', () => {
          console.log('🌐 Back online, checking for updates...');
          registration.update();
        });
      })
      .catch((error) => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
