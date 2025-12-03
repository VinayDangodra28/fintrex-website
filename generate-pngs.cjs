const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
  console.log('✓ Sharp library found');
} catch (err) {
  console.log('Installing sharp library...');
  require('child_process').execSync('npm install sharp', { stdio: 'inherit' });
  sharp = require('sharp');
}

const publicDir = path.join(__dirname, 'public');

const sizes = [
  { name: 'fintrex-icon-16', size: 16, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-32', size: 32, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-72', size: 72, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-96', size: 96, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-128', size: 128, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-144', size: 144, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-152', size: 152, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-192', size: 192, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-384', size: 384, source: 'fintrex-logo.svg' },
  { name: 'fintrex-icon-512', size: 512, source: 'fintrex-logo.svg' },
  { name: 'fintrex-logo', size: 512, source: 'fintrex-logo.svg' },
  { name: 'fintrex-apple-touch-icon', size: 180, source: 'fintrex-logo.svg' },
  { name: 'mstile-144x144', size: 144, source: 'fintrex-logo.svg' },
  { name: 'fintrex-og-image', width: 1200, height: 630, source: 'fintrex-logo.svg' },
  { name: 'fintrex-twitter-card', width: 1200, height: 675, source: 'fintrex-logo.svg' },
  { name: 'fin-ai-assistant', size: 800, source: 'fin-ai-assistant.svg' }
];

async function generatePNG(item) {
  const svgPath = path.join(publicDir, item.source);
  const pngPath = path.join(publicDir, `${item.name}.png`);
  
  const width = item.width || item.size;
  const height = item.height || item.size;
  
  console.log(`Generating: ${item.name}.png (${width}x${height})`);
  
  try {
    await sharp(svgPath)
      .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(pngPath);
    console.log(`  ✓ Created successfully`);
    return true;
  } catch (error) {
    console.log(`  ✗ Failed: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('\nFintrex PNG Asset Generator (Node.js)\n');
  console.log('=====================================\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const item of sizes) {
    const success = await generatePNG(item);
    if (success) successCount++;
    else failCount++;
  }
  
  console.log('\n=====================================');
  console.log('Summary:');
  console.log(`  Success: ${successCount} files`);
  console.log(`  Failed: ${failCount} files`);
  console.log('\n✓ Process complete!\n');
}

main().catch(console.error);
