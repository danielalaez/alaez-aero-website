
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const REPO_NAME = 'alaez-aero-website';

try {
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Deploying to GitHub Pages...');
  
  // Create CNAME file for custom domain (if needed)
  const distPath = path.join(process.cwd(), 'dist');
  
  // Deploy using gh-pages
  execSync(`npx gh-pages -d dist`, { stdio: 'inherit' });
  
  console.log(`Successfully deployed to GitHub Pages!`);
  console.log(`Your site will be available at: https://danielalaez.github.io/${REPO_NAME}/`);
  
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
