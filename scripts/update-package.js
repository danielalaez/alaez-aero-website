
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add homepage field for personal GitHub Pages
packageJson.homepage = 'https://danielalaez.github.io';

// Add deployment scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'predeploy': 'npm run build',
  'deploy': 'node deploy.js'
};

// Add gh-pages as dev dependency if not present
if (!packageJson.devDependencies['gh-pages']) {
  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    'gh-pages': '^6.0.0'
  };
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json for personal GitHub Pages deployment');
