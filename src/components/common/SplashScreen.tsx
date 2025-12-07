export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0D1B2A] via-[#1A1A1A] to-[#0D1B2A] animate-fade-in">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F0FF] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF006E] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* App icon with glow effect */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00F0FF] to-[#FF006E] opacity-30 blur-2xl animate-pulse"></div>
          
          {/* Icon container */}
          <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-[#0D1B2A] via-[#1A1A1A] to-[#0D1B2A] p-1 shadow-2xl">
            {/* Neon border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#00F0FF] opacity-60 animate-pulse"></div>
            
            {/* Icon content */}
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#0D1B2A] to-[#1A1A1A] flex items-center justify-center overflow-hidden">
              {/* QR code corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF]"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF]"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF]"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00F0FF]"></div>
              
              {/* Fork and knife icon */}
              <div className="relative flex items-center justify-center gap-2">
                {/* Fork */}
                <svg width="24" height="48" viewBox="0 0 24 48" className="text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                  <rect x="10" y="0" width="4" height="48" rx="2" fill="currentColor" />
                  <rect x="6" y="0" width="3" height="16" fill="currentColor" />
                  <rect x="15" y="0" width="3" height="16" fill="currentColor" />
                </svg>
                
                {/* Plate circle */}
                <svg width="48" height="48" viewBox="0 0 48 48" className="absolute">
                  <circle cx="24" cy="24" r="18" fill="none" stroke="#FF006E" strokeWidth="2" opacity="0.8" className="drop-shadow-[0_0_8px_rgba(255,0,110,0.6)]" />
                </svg>
                
                {/* Knife */}
                <svg width="24" height="48" viewBox="0 0 24 48" className="text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                  <rect x="10" y="0" width="4" height="48" rx="2" fill="currentColor" />
                  <path d="M 10 0 L 14 0 L 12 -6 Z" fill="currentColor" />
                </svg>
              </div>
              
              {/* DQ monogram */}
              <div className="absolute bottom-2 text-[#00F0FF] font-bold text-sm tracking-wider drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]">
                DQ
              </div>
            </div>
          </div>
        </div>

        {/* App name with neon effect */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF006E] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)] animate-pulse">
            DineQR
          </h1>
          <p className="text-[#00F0FF] text-sm font-medium opacity-80">
            Smart Restaurant Menu System
          </p>
        </div>

        {/* Loading animation */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50 animate-scan-line"></div>
      </div>
    </div>
  );
}
