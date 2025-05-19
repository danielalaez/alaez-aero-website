
// Simple script to deploy to GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');

// Get repository name from package.json or git
let repoName = '';
try {
  const gitRemote = execSync('git remote get-url origin').toString().trim();
  const repoMatch = gitRemote.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
  if (repoMatch && repoMatch[2]) {
    repoName = repoMatch[2];
    console.log(`Detected repository name: ${repoName}`);
  }
} catch (error) {
  console.error("Couldn't detect repository name from git:", error.message);
}

// Update vite.config.ts with the correct base
if (repoName) {
  try {
    let viteConfig = fs.readFileSync('./vite.config.ts', 'utf8');
    viteConfig = viteConfig.replace(/base: '\/[^\/]*\/'/g, `base: '/${repoName}/'`);
    fs.writeFileSync('./vite.config.ts', viteConfig);
    console.log(`Updated vite.config.ts with base: '/${repoName}/'`);
  } catch (error) {
    console.error("Couldn't update vite.config.ts:", error.message);
  }
}

// Run build and deploy
try {
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  
  console.log('Deployment complete! 🚀');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
