import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// This script checks SEO optimizations
// Run with: node scripts/seo-check.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function checkSEOOptimizations() {
  console.log('🔍 Checking SEO Optimizations...\n');

  const checks = [];

  // Check 1: HTML Meta Tags
  const htmlPath = path.join(__dirname, '../index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  console.log('📄 HTML Meta Tags Check:');
  
  const metaChecks = [
    { name: 'Title Tag', pattern: /<title>.*<\/title>/, required: true },
    { name: 'Meta Description', pattern: /<meta name="description"/, required: true },
    { name: 'Meta Keywords', pattern: /<meta name="keywords"/, required: true },
    { name: 'Canonical URL', pattern: /<link rel="canonical"/, required: true },
    { name: 'Open Graph Title', pattern: /<meta property="og:title"/, required: true },
    { name: 'Open Graph Description', pattern: /<meta property="og:description"/, required: true },
    { name: 'Open Graph Image', pattern: /<meta property="og:image"/, required: true },
    { name: 'Twitter Card', pattern: /<meta name="twitter:card"/, required: true },
    { name: 'Structured Data', pattern: /<script type="application\/ld\+json">/, required: true },
    { name: 'Viewport Meta', pattern: /<meta name="viewport"/, required: true },
    { name: 'Robots Meta', pattern: /<meta name="robots"/, required: true },
  ];

  metaChecks.forEach(check => {
    const found = check.pattern.test(htmlContent);
    const status = found ? '✅' : '❌';
    console.log(`  ${status} ${check.name}`);
    checks.push({ category: 'HTML Meta Tags', name: check.name, passed: found, required: check.required });
  });

  // Check 2: SEO Files
  console.log('\n📁 SEO Files Check:');
  
  const seoFiles = [
    { name: 'robots.txt', path: '../public/robots.txt' },
    { name: 'sitemap.xml', path: '../public/sitemap.xml' }
  ];

  seoFiles.forEach(file => {
    const filePath = path.join(__dirname, file.path);
    const exists = fs.existsSync(filePath);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${file.name}`);
    checks.push({ category: 'SEO Files', name: file.name, passed: exists, required: true });
  });

  // Check 3: Semantic HTML
  console.log('\n🏗️ Semantic HTML Check:');
  
  const semanticTags = [
    { name: 'Main Tag', pattern: /<main[\s>]/ },
    { name: 'Header Tag', pattern: /<header[\s>]/ },
    { name: 'Footer Tag', pattern: /<footer[\s>]/ },
    { name: 'Section Tags', pattern: /<section[\s>]/ },
    { name: 'Article Tags', pattern: /<article[\s>]/ },
    { name: 'Nav Tag', pattern: /<nav[\s>]/ },
    { name: 'H1 Tag', pattern: /<h1[\s>]/ },
    { name: 'H2 Tags', pattern: /<h2[\s>]/ },
    { name: 'H3 Tags', pattern: /<h3[\s>]/ },
  ];

  // Check component files for semantic HTML
  const componentsDir = path.join(__dirname, '../src/components');
  const componentFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.jsx'));
  
  let allComponentsContent = '';
  componentFiles.forEach(file => {
    const componentPath = path.join(componentsDir, file);
    const content = fs.readFileSync(componentPath, 'utf8');
    allComponentsContent += content;
  });

  semanticTags.forEach(tag => {
    const found = tag.pattern.test(allComponentsContent);
    const status = found ? '✅' : '❌';
    console.log(`  ${status} ${tag.name}`);
    checks.push({ category: 'Semantic HTML', name: tag.name, passed: found, required: false });
  });

  // Check 4: Image Optimization
  console.log('\n🖼️ Image Optimization Check:');
  
  const imageChecks = [
    { name: 'Alt Text Usage', pattern: /alt="[^"]*"/, required: true },
    { name: 'Image Dimensions', pattern: /width="\d+".*height="\d+"/, required: true },
    { name: 'Lazy Loading', pattern: /loading="lazy"/, required: false },
    { name: 'Preload Critical Images', pattern: /<link rel="preload".*as="image"/, required: true },
  ];

  const allContent = htmlContent + allComponentsContent;
  
  imageChecks.forEach(check => {
    const found = check.pattern.test(allContent);
    const status = found ? '✅' : '❌';
    console.log(`  ${status} ${check.name}`);
    checks.push({ category: 'Image Optimization', name: check.name, passed: found, required: check.required });
  });

  // Check 5: Accessibility
  console.log('\n♿ Accessibility Check:');
  
  const accessibilityChecks = [
    { name: 'ARIA Labels', pattern: /aria-label="[^"]*"/, required: true },
    { name: 'ARIA Roles', pattern: /role="[^"]*"/, required: true },
    { name: 'Focus Management', pattern: /focus:/, required: false },
    { name: 'Screen Reader Support', pattern: /sr-only/, required: false },
  ];

  accessibilityChecks.forEach(check => {
    const found = check.pattern.test(allContent);
    const status = found ? '✅' : '❌';
    console.log(`  ${status} ${check.name}`);
    checks.push({ category: 'Accessibility', name: check.name, passed: found, required: check.required });
  });

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 SEO OPTIMIZATION SUMMARY\n');

  const categories = [...new Set(checks.map(check => check.category))];
  
  categories.forEach(category => {
    const categoryChecks = checks.filter(check => check.category === category);
    const passed = categoryChecks.filter(check => check.passed).length;
    const total = categoryChecks.length;
    const percentage = Math.round((passed / total) * 100);
    
    console.log(`${category}: ${passed}/${total} (${percentage}%) ✅`);
  });

  const totalPassed = checks.filter(check => check.passed).length;
  const totalChecks = checks.length;
  const overallPercentage = Math.round((totalPassed / totalChecks) * 100);
  
  console.log(`\nOverall SEO Score: ${totalPassed}/${totalChecks} (${overallPercentage}%)`);
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS:\n');
  
  const failedRequired = checks.filter(check => check.required && !check.passed);
  if (failedRequired.length > 0) {
    console.log('🚨 Critical Issues (Fix Immediately):');
    failedRequired.forEach(check => {
      console.log(`  • ${check.category}: ${check.name}`);
    });
  }
  
  const failedOptional = checks.filter(check => !check.required && !check.passed);
  if (failedOptional.length > 0) {
    console.log('\n⚠️ Optional Improvements:');
    failedOptional.forEach(check => {
      console.log(`  • ${check.category}: ${check.name}`);
    });
  }
  
  if (overallPercentage >= 90) {
    console.log('\n🎉 Excellent! Your SEO optimization is very good.');
  } else if (overallPercentage >= 70) {
    console.log('\n👍 Good SEO optimization. Consider implementing the recommendations above.');
  } else {
    console.log('\n⚠️ Your SEO needs improvement. Please implement the critical fixes.');
  }
  
  console.log('\n📋 Next Steps:');
  console.log('1. Fix any critical issues listed above');
  console.log('2. Update domain URLs in all files');
  console.log('3. Test with Google Search Console');
  console.log('4. Run Lighthouse audit for performance');
  console.log('5. Submit sitemap to search engines');
}

checkSEOOptimizations(); 