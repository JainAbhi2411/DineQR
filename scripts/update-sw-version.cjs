#!/usr/bin/env node

/**
 * Auto-update Service Worker Version
 * 
 * This script automatically updates the service worker version
 * based on the current timestamp to ensure users get updates
 * when new code is deployed.
 */

const fs = require('fs');
const path = require('path');

const SW_PATH = path.join(__dirname, '../public/sw.js');

try {
  // Read the service worker file
  let swContent = fs.readFileSync(SW_PATH, 'utf8');
  
  // Generate new version based on timestamp
  const now = new Date();
  const version = `${now.getFullYear()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')}.${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
  const buildTime = now.toISOString();
  
  // Update VERSION constant
  swContent = swContent.replace(
    /const VERSION = ['"][\d.]+['"];/,
    `const VERSION = '${version}';`
  );
  
  // Update BUILD_TIME constant
  swContent = swContent.replace(
    /const BUILD_TIME = ['"][^'"]+['"];/,
    `const BUILD_TIME = '${buildTime}';`
  );
  
  // Write back to file
  fs.writeFileSync(SW_PATH, swContent, 'utf8');
  
  console.log('✅ Service Worker version updated successfully!');
  console.log(`   Version: ${version}`);
  console.log(`   Build Time: ${buildTime}`);
  
} catch (error) {
  console.error('❌ Failed to update service worker version:', error.message);
  process.exit(1);
}
