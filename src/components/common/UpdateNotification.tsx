import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, RefreshCw, Sparkles } from 'lucide-react';

export default function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Check if service workers are supported
    if (!('serviceWorker' in navigator)) {
      return;
    }

    // Listen for service worker updates
    const checkForUpdates = async () => {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        
        if (!registration) {
          return;
        }

        // Check if there's a waiting service worker
        if (registration.waiting) {
          setWaitingWorker(registration.waiting);
          setShowUpdate(true);
          console.log('🎉 Update available! Waiting service worker found.');
        }

        // Listen for new service worker installing
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (!newWorker) {
            return;
          }

          console.log('📦 New service worker installing...');

          newWorker.addEventListener('statechange', () => {
            console.log('🔄 Service worker state changed:', newWorker.state);
            
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker is installed and waiting
              setWaitingWorker(newWorker);
              setShowUpdate(true);
              console.log('✅ New service worker installed! Update notification shown.');
            }
          });
        });

        // Listen for controller change (when new SW takes over)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('🔄 New service worker activated! Reloading page...');
          // Reload the page to load the new version
          window.location.reload();
        });

      } catch (error) {
        console.error('❌ Error checking for updates:', error);
      }
    };

    checkForUpdates();

    // Check for updates more frequently (every 30 seconds)
    const interval = setInterval(() => {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration) {
          registration.update();
        }
      });
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleUpdate = () => {
    if (!waitingWorker) {
      return;
    }

    setIsUpdating(true);

    // Tell the waiting service worker to skip waiting and become active
    waitingWorker.postMessage({ type: 'SKIP_WAITING' });

    // The page will reload automatically when the new SW takes control
    // due to the controllerchange event listener
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  if (!showUpdate) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 xl:left-auto xl:right-8 xl:bottom-8 z-[9998] animate-slide-up">
      <div className="relative max-w-md mx-auto xl:mx-0">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF006E] opacity-20 blur-xl rounded-2xl"></div>
        
        {/* Main notification card */}
        <div className="relative bg-gradient-to-br from-[#0D1B2A] to-[#1A1A1A] border-2 border-[#00F0FF] rounded-2xl p-4 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Dismiss update notification"
          >
            <X className="w-4 h-4 text-[#00F0FF]" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-3 pr-6">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00F0FF] opacity-30 blur-md rounded-full"></div>
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#FF006E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-[#00F0FF] mb-1">
                Update Available
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                A new version of DineQR is ready. Update now to get the latest features and improvements.
              </p>

              {/* Action buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={handleUpdate}
                  disabled={isUpdating}
                  className="flex-1 bg-gradient-to-r from-[#00F0FF] to-[#00D0DD] hover:from-[#00D0DD] hover:to-[#00F0FF] text-[#0D1B2A] font-semibold shadow-lg shadow-[#00F0FF]/30 transition-all duration-300"
                >
                  {isUpdating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Update Now
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleDismiss}
                  variant="outline"
                  className="border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10"
                >
                  Later
                </Button>
              </div>
            </div>
          </div>

          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent animate-scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
