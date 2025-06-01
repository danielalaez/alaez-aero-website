
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Deploying to GitHub Pages...');
  
  // Deploy using gh-pages to main branch for personal GitHub Pages
  execSync(`npx gh-pages -d dist -b main`, { stdio: 'inherit' });
  
  console.log(`Successfully deployed to GitHub Pages!`);
  console.log(`Your site will be available at: https://danielalaez.github.io/`);
  
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
