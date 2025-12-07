// Node.js script to generate PWA icons with futuristic dark theme
// Run with: node scripts/generate-icons.cjs

const fs = require('fs');
const path = require('path');

// Futuristic dark theme SVG icon generator with QR code and dining elements
const generateFuturisticIcon = (size, isMaskable = false) => {
  const padding = isMaskable ? size * 0.1 : 0;
  const contentSize = size - (padding * 2);
  const contentOffset = padding;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Dark gradient background -->
    <linearGradient id="darkGrad${size}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D1B2A;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1A1A1A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0D1B2A;stop-opacity:1" />
    </linearGradient>
    
    <!-- Neon cyan glow -->
    <filter id="neonGlow${size}">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Stronger glow for emphasis -->
    <filter id="strongGlow${size}">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background with rounded corners -->
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="url(#darkGrad${size})"/>
  
  <!-- Outer neon border glow -->
  <rect x="${size * 0.05}" y="${size * 0.05}" width="${size * 0.9}" height="${size * 0.9}" 
        rx="${size * 0.15}" fill="none" stroke="#00F0FF" stroke-width="${size * 0.008}" 
        opacity="0.6" filter="url(#neonGlow${size})"/>
  
  <!-- QR Code stylized element (top-left) -->
  <g transform="translate(${contentOffset + contentSize * 0.15}, ${contentOffset + contentSize * 0.15})">
    <rect width="${contentSize * 0.12}" height="${contentSize * 0.12}" fill="#00F0FF" filter="url(#neonGlow${size})"/>
    <rect x="${contentSize * 0.04}" y="${contentSize * 0.04}" width="${contentSize * 0.04}" height="${contentSize * 0.04}" fill="#0D1B2A"/>
  </g>
  
  <!-- QR Code stylized element (top-right) -->
  <g transform="translate(${contentOffset + contentSize * 0.73}, ${contentOffset + contentSize * 0.15})">
    <rect width="${contentSize * 0.12}" height="${contentSize * 0.12}" fill="#00F0FF" filter="url(#neonGlow${size})"/>
    <rect x="${contentSize * 0.04}" y="${contentSize * 0.04}" width="${contentSize * 0.04}" height="${contentSize * 0.04}" fill="#0D1B2A"/>
  </g>
  
  <!-- QR Code stylized element (bottom-left) -->
  <g transform="translate(${contentOffset + contentSize * 0.15}, ${contentOffset + contentSize * 0.73})">
    <rect width="${contentSize * 0.12}" height="${contentSize * 0.12}" fill="#00F0FF" filter="url(#neonGlow${size})"/>
    <rect x="${contentSize * 0.04}" y="${contentSize * 0.04}" width="${contentSize * 0.04}" height="${contentSize * 0.04}" fill="#0D1B2A"/>
  </g>
  
  <!-- Central dining element: Fork and Knife -->
  <g transform="translate(${size * 0.5}, ${size * 0.5})" filter="url(#strongGlow${size})">
    <!-- Plate circle -->
    <circle cx="0" cy="0" r="${contentSize * 0.18}" fill="none" stroke="#FF006E" stroke-width="${contentSize * 0.015}" opacity="0.8"/>
    
    <!-- Fork (left) -->
    <g transform="translate(${-contentSize * 0.08}, 0)">
      <rect x="${-contentSize * 0.015}" y="${-contentSize * 0.12}" width="${contentSize * 0.03}" height="${contentSize * 0.24}" rx="${contentSize * 0.01}" fill="#00F0FF"/>
      <rect x="${-contentSize * 0.025}" y="${-contentSize * 0.12}" width="${contentSize * 0.015}" height="${contentSize * 0.08}" fill="#00F0FF"/>
      <rect x="${contentSize * 0.01}" y="${-contentSize * 0.12}" width="${contentSize * 0.015}" height="${contentSize * 0.08}" fill="#00F0FF"/>
    </g>
    
    <!-- Knife (right) -->
    <g transform="translate(${contentSize * 0.08}, 0)">
      <rect x="${-contentSize * 0.015}" y="${-contentSize * 0.12}" width="${contentSize * 0.03}" height="${contentSize * 0.24}" rx="${contentSize * 0.01}" fill="#00F0FF"/>
      <path d="M ${-contentSize * 0.015} ${-contentSize * 0.12} L ${contentSize * 0.015} ${-contentSize * 0.12} L 0 ${-contentSize * 0.15} Z" fill="#00F0FF"/>
    </g>
  </g>
  
  <!-- DQ monogram at bottom -->
  <text x="50%" y="${size * 0.88}" font-family="Arial, sans-serif" font-size="${contentSize * 0.15}" 
        font-weight="bold" fill="#00F0FF" text-anchor="middle" filter="url(#neonGlow${size})">DQ</text>
</svg>`;
};

// Generate shortcut icon with specific symbol
const generateShortcutIcon = (size, symbol, color) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="darkGradShortcut${size}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D1B2A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:1" />
    </linearGradient>
    <filter id="neonGlowShortcut${size}">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="url(#darkGradShortcut${size})"/>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="${size * 0.5}" 
        font-weight="bold" fill="${color}" text-anchor="middle" dominant-baseline="central" 
        filter="url(#neonGlowShortcut${size})">${symbol}</text>
</svg>`;
};

// Create icons directory
const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate icons for different sizes
const sizes = [48, 72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512];

console.log('🎨 Generating futuristic dark theme PWA icons...\n');

sizes.forEach(size => {
  const svg = generateFuturisticIcon(size);
  const filename = `icon-${size}x${size}.png`;
  const filepath = path.join(iconsDir, filename);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Generated: ${filename}`);
});

// Generate maskable icon (with safe zone padding)
const maskableSvg = generateFuturisticIcon(512, true);
const maskableFilepath = path.join(iconsDir, 'icon-512x512-maskable.png');
fs.writeFileSync(maskableFilepath, maskableSvg);
console.log(`✓ Generated: icon-512x512-maskable.png (maskable)`);

// Generate shortcut icons with specific symbols
const shortcuts = [
  { name: 'scan-icon.png', symbol: '📷', color: '#00F0FF', size: 192 },
  { name: 'orders-icon.png', symbol: '📋', color: '#FF006E', size: 192 },
  { name: 'dashboard-icon.png', symbol: '📊', color: '#00F0FF', size: 192 }
];

console.log('\n🎯 Generating shortcut icons...\n');

shortcuts.forEach(({ name, symbol, color, size }) => {
  const svg = generateShortcutIcon(size, symbol, color);
  const filepath = path.join(iconsDir, name);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Generated: ${name}`);
});

console.log('\n✅ All futuristic dark theme PWA icons generated successfully!');
console.log(`📁 Location: ${iconsDir}`);
console.log(`🎨 Theme: Dark futuristic with neon cyan (#00F0FF) and magenta (#FF006E) accents`);
console.log(`📱 Total icons: ${sizes.length + 4} files`);
