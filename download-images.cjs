// Image Download Script for Fintrex Blog and Case Studies
// Run: node download-images.cjs

const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash/Pexels style images - using placeholder service that provides real images
const IMAGES_TO_DOWNLOAD = {
  // Blog covers - business/technology themed
  'public/blog/covers/ai-vs-manual.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
  'public/blog/covers/future-ca-2025.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
  'public/blog/covers/whatsapp-accounting.jpg': 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=630&fit=crop',
  'public/blog/covers/gst-automation.jpg': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop',
  
  // Blog author avatars - use abstract/logo style
  'public/blog/authors/fintrex-team.png': 'https://ui-avatars.com/api/?name=Fintrex+Team&size=128&background=00ff88&color=000&bold=true',
  'public/blog/authors/ai-lab.png': 'https://ui-avatars.com/api/?name=AI+Lab&size=128&background=00ff88&color=000&bold=true',
  
  // Case study covers - professional/business
  'public/case-studies/covers/scaling-100-clients.jpg': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&fit=crop',
  'public/case-studies/covers/gst-automation.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
  'public/case-studies/covers/mehta-associates.jpg': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop',
  'public/case-studies/covers/zero-touch-tax.jpg': 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=1200&h=630&fit=crop',
  
  // Case study avatars - professional headshots style
  'public/case-studies/avatars/rajesh-kumar.jpg': 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=128&background=1a1a1a&color=00ff88&bold=true',
  'public/case-studies/avatars/priya-sharma.jpg': 'https://ui-avatars.com/api/?name=Priya+Sharma&size=128&background=1a1a1a&color=00ff88&bold=true',
  'public/case-studies/avatars/hitesh-mehta.jpg': 'https://ui-avatars.com/api/?name=Hitesh+Mehta&size=128&background=1a1a1a&color=00ff88&bold=true',
  'public/case-studies/avatars/arun-sharma.jpg': 'https://ui-avatars.com/api/?name=Arun+Sharma&size=128&background=1a1a1a&color=00ff88&bold=true',
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(__dirname, filepath);
    const dir = path.dirname(fullPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(fullPath);
    
    const request = (urlToFetch) => {
      https.get(urlToFetch, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          request(response.headers.location);
          return;
        }
        
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
          return;
        }
        
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(fullPath, () => {});
        reject(err);
      });
    };
    
    request(url);
  });
};

const downloadAll = async () => {
  console.log('📥 Starting image downloads...\n');
  
  for (const [filepath, url] of Object.entries(IMAGES_TO_DOWNLOAD)) {
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(`✗ Failed: ${filepath} - ${error.message}`);
    }
  }
  
  console.log('\n✅ Image download complete!');
  console.log('\nNote: For production, consider using higher quality images from:');
  console.log('- Unsplash (https://unsplash.com)');
  console.log('- Pexels (https://pexels.com)');
  console.log('- Or your own branded images');
};

downloadAll();
