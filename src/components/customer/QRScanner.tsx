import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, X, AlertCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface QRScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onScanError?: (error: string) => void;
  onClose?: () => void;
}

type PermissionState = 'prompt' | 'granted' | 'denied' | 'checking';

export default function QRScanner({ onScanSuccess, onScanError, onClose }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const [permissionState, setPermissionState] = useState<PermissionState>('checking');
  const [showPermissionHelp, setShowPermissionHelp] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isInitializedRef = useRef(false);
  const hasScannedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    const checkCameraPermission = async () => {
      try {
        // Check if Permissions API is supported
        if ('permissions' in navigator) {
          try {
            const permissionStatus = await navigator.permissions.query({ name: 'camera' as PermissionName });
            setPermissionState(permissionStatus.state as PermissionState);
            
            // Listen for permission changes
            permissionStatus.onchange = () => {
              setPermissionState(permissionStatus.state as PermissionState);
              if (permissionStatus.state === 'granted') {
                initScanner();
              }
            };
          } catch (err) {
            // Permissions API might not support camera query on some browsers
            console.log('[QRScanner] Permissions API not fully supported, proceeding with camera request');
            setPermissionState('prompt');
          }
        } else {
          // Permissions API not supported, proceed directly
          setPermissionState('prompt');
        }

        // If permission is already granted or we need to prompt, initialize scanner
        if (permissionState !== 'denied') {
          await initScanner();
        }
      } catch (err) {
        console.error('[QRScanner] Permission check error:', err);
        setPermissionState('prompt');
        await initScanner();
      }
    };

    const initScanner = async () => {
      try {
        setError('');
        
        // Create scanner instance
        const scanner = new Html5Qrcode('qr-reader');
        scannerRef.current = scanner;

        // Request camera access and get devices
        const devices = await Html5Qrcode.getCameras();
        
        if (!devices || devices.length === 0) {
          const errorMsg = 'No camera found on this device';
          setError(errorMsg);
          setPermissionState('denied');
          onScanError?.(errorMsg);
          return;
        }

        // Permission granted if we got here
        setPermissionState('granted');

        // Prefer back camera on mobile
        const backCamera = devices.find(device => 
          device.label.toLowerCase().includes('back') || 
          device.label.toLowerCase().includes('rear')
        );
        const cameraId = backCamera?.id || devices[0].id;

        // Start scanning
        await scanner.start(
          cameraId,
          {
            fps: 10, // Frames per second
            qrbox: { width: 250, height: 250 }, // Scanning box size
            aspectRatio: 1.0,
          },
          (decodedText) => {
            // Success callback - only process once
            if (hasScannedRef.current) {
              console.log('[QRScanner] Already scanned, ignoring duplicate');
              return;
            }
            
            hasScannedRef.current = true;
            console.log('[QRScanner] Scanned:', decodedText);
            onScanSuccess(decodedText);
            stopScanner();
          },
          (errorMessage) => {
            // Error callback (called frequently, so we don't show all errors)
            // Only log critical errors
            if (errorMessage.includes('NotFoundException') === false) {
              console.warn('[QRScanner] Scan error:', errorMessage);
            }
          }
        );

        setIsScanning(true);
      } catch (err: any) {
        console.error('[QRScanner] Failed to start scanner:', err);
        
        // Handle specific permission errors
        if (err.name === 'NotAllowedError' || err.message?.includes('Permission denied')) {
          setPermissionState('denied');
          setError('Camera permission denied. Please allow camera access to scan QR codes.');
          setShowPermissionHelp(true);
        } else if (err.name === 'NotFoundError') {
          setError('No camera found on this device');
          setPermissionState('denied');
        } else if (err.name === 'NotReadableError') {
          setError('Camera is already in use by another application');
          setPermissionState('denied');
        } else {
          const errorMsg = err.message || 'Failed to start camera';
          setError(errorMsg);
        }
        
        onScanError?.(error || 'Failed to access camera');
      }
    };

    checkCameraPermission();

    // Cleanup on unmount
    return () => {
      stopScanner();
    };
  }, []);

  const stopScanner = async () => {
    if (scannerRef.current && isScanning) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
        setIsScanning(false);
      } catch (err) {
        console.error('[QRScanner] Failed to stop scanner:', err);
      }
    }
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    setError('');
    setShowPermissionHelp(false);
    setPermissionState('checking');
    
    try {
      // Try to request camera permission again
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Permission granted, stop the test stream
      stream.getTracks().forEach(track => track.stop());
      
      // Reset and reinitialize
      isInitializedRef.current = false;
      setPermissionState('granted');
      
      // Reinitialize scanner
      const scanner = new Html5Qrcode('qr-reader');
      scannerRef.current = scanner;

      const devices = await Html5Qrcode.getCameras();
      
      if (!devices || devices.length === 0) {
        setError('No camera found on this device');
        setPermissionState('denied');
        setIsRetrying(false);
        return;
      }

      const backCamera = devices.find(device => 
        device.label.toLowerCase().includes('back') || 
        device.label.toLowerCase().includes('rear')
      );
      const cameraId = backCamera?.id || devices[0].id;

      await scanner.start(
        cameraId,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        (decodedText) => {
          if (hasScannedRef.current) return;
          hasScannedRef.current = true;
          onScanSuccess(decodedText);
          stopScanner();
        },
        (errorMessage) => {
          if (errorMessage.includes('NotFoundException') === false) {
            console.warn('[QRScanner] Scan error:', errorMessage);
          }
        }
      );

      setIsScanning(true);
      setIsRetrying(false);
    } catch (err: any) {
      console.error('[QRScanner] Retry failed:', err);
      
      if (err.name === 'NotAllowedError' || err.message?.includes('Permission denied')) {
        setPermissionState('denied');
        setError('Camera permission is still denied. Please enable it in your browser settings.');
        setShowPermissionHelp(true);
      } else {
        setError(err.message || 'Failed to start camera');
      }
      
      setIsRetrying(false);
    }
  };

  const handleClose = async () => {
    await stopScanner();
    onClose?.();
  };

  const openBrowserSettings = () => {
    // Show instructions based on browser
    const userAgent = navigator.userAgent.toLowerCase();
    let instructions = '';

    if (userAgent.includes('chrome')) {
      instructions = 'Chrome: Click the camera icon in the address bar, then select "Allow"';
    } else if (userAgent.includes('firefox')) {
      instructions = 'Firefox: Click the camera icon in the address bar, then select "Allow"';
    } else if (userAgent.includes('safari')) {
      instructions = 'Safari: Go to Settings > Safari > Camera, then select "Allow"';
    } else {
      instructions = 'Please check your browser settings to allow camera access';
    }

    alert(instructions);
  };

  const getPermissionInstructions = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      return {
        title: 'Enable Camera on iOS',
        steps: [
          'Open Settings app',
          'Scroll down and tap Safari (or your browser)',
          'Tap Camera',
          'Select "Allow"',
          'Return to this page and refresh'
        ]
      };
    } else if (isAndroid) {
      return {
        title: 'Enable Camera on Android',
        steps: [
          'Tap the lock icon in the address bar',
          'Tap "Permissions"',
          'Enable Camera',
          'Refresh this page'
        ]
      };
    } else {
      return {
        title: 'Enable Camera Access',
        steps: [
          'Click the camera icon in the address bar',
          'Select "Allow" for camera access',
          'Refresh this page if needed'
        ]
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Camera className="w-5 h-5" />
            <span className="font-medium">Scan Q'R Code</span>
            {permissionState === 'granted' && (
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                Camera Active
              </span>
            )}
          </div>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Scanner Container */}
      <div className="flex items-center justify-center h-full p-4">
        <div className="relative w-full max-w-md">
          {/* QR Reader Element */}
          <div id="qr-reader" className="rounded-lg overflow-hidden shadow-2xl" />

          {/* Permission Checking State */}
          {permissionState === 'checking' && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <p className="text-white font-medium mb-2">Checking Camera Access</p>
                <p className="text-white/70 text-sm">Please wait...</p>
              </div>
            </div>
          )}

          {/* Permission Denied State */}
          {permissionState === 'denied' && showPermissionHelp && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/95 rounded-lg overflow-y-auto">
              <div className="text-center p-6 max-w-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">Camera Permission Required</h3>
                <p className="text-white/80 text-sm mb-4">
                  To scan QR codes, we need access to your camera. Please allow camera permission.
                </p>
                
                <Alert className="mb-4 text-left">
                  <Settings className="h-4 w-4" />
                  <AlertTitle>{getPermissionInstructions().title}</AlertTitle>
                  <AlertDescription>
                    <ol className="list-decimal list-inside space-y-2 mt-2 text-sm">
                      {getPermissionInstructions().steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </AlertDescription>
                </Alert>

                <div className="space-y-2">
                  <Button 
                    onClick={handleRetry}
                    className="w-full"
                    disabled={isRetrying}
                  >
                    {isRetrying ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Requesting Permission...
                      </>
                    ) : (
                      <>
                        <Camera className="w-4 h-4 mr-2" />
                        Try Again
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={openBrowserSettings} 
                    variant="secondary"
                    className="w-full"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    View Instructions
                  </Button>
                  {onClose && (
                    <Button 
                      onClick={handleClose} 
                      variant="outline"
                      className="w-full"
                    >
                      Close Scanner
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Error Message (Non-Permission Errors) */}
          {error && !showPermissionHelp && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <p className="text-white font-medium mb-2">Camera Error</p>
                <p className="text-white/70 text-sm mb-4">{error}</p>
                {onClose && (
                  <Button onClick={handleClose} variant="secondary">
                    Close Scanner
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Scanning Indicator */}
          {isScanning && !error && permissionState === 'granted' && (
            <div className="absolute -bottom-20 left-0 right-0 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Position QR code within the frame</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      {isScanning && !error && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-8">
          <div className="text-center text-white/80 text-sm space-y-2">
            <p>Point your camera at the QR code on your table</p>
            <p className="text-xs text-white/60">The code will be scanned automatically</p>
          </div>
        </div>
      )}
    </div>
  );
}
