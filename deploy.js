
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_NAME = 'alaez-aero-website';

try {
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Deploying to GitHub Pages...');
  
  // Create CNAME file for custom domain (if needed)
  const distPath = path.join(__dirname, 'dist');
  
  // Deploy using gh-pages
  execSync(`npx gh-pages -d dist`, { stdio: 'inherit' });
  
  console.log(`Successfully deployed to GitHub Pages!`);
  console.log(`Your site will be available at: https://your-username.github.io/${REPO_NAME}/`);
  
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
