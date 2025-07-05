import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// This script helps identify large images that need optimization
// Run with: node scripts/optimize-images.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../public/assets');
const maxSizeKB = 100; // Maximum recommended size in KB

async function analyzeImages() {
  console.log('📊 Analyzing images in /public/assets...\n');
  
  try {
    const files = fs.readdirSync(assetsDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    const largeImages = [];
    
    for (const file of imageFiles) {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (sizeKB > maxSizeKB) {
        largeImages.push({ file, sizeKB });
      }
      
      console.log(`${file}: ${sizeKB} KB ${sizeKB > maxSizeKB ? '❌ Too large' : '✅ Good'}`);
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('📋 OPTIMIZATION RECOMMENDATIONS:\n');
    
    if (largeImages.length > 0) {
      console.log('🔍 Large images found (>100KB):');
      largeImages.forEach(({ file, sizeKB }) => {
        console.log(`  • ${file} (${sizeKB} KB)`);
      });
      
      console.log('\n💡 Optimization suggestions:');
      console.log('1. Use online tools like TinyPNG, ImageOptim, or Squoosh');
      console.log('2. Convert to WebP format for better compression');
      console.log('3. Resize images to appropriate dimensions');
      console.log('4. Target: <100KB for project images, <200KB for hero images');
      
      console.log('\n🛠️ Quick optimization commands:');
      console.log('npm install -g imagemin-cli imagemin-webp');
      console.log('imagemin public/assets/*.{jpg,png} --out-dir=public/assets/optimized --plugin=webp');
      
      console.log('\n🌐 Online optimization tools:');
      console.log('• TinyPNG: https://tinypng.com/');
      console.log('• Squoosh: https://squoosh.app/');
      console.log('• ImageOptim: https://imageoptim.com/');
    } else {
      console.log('✅ All images are within recommended size limits!');
    }
    
  } catch (error) {
    console.error('Error analyzing images:', error.message);
  }
}

analyzeImages(); 