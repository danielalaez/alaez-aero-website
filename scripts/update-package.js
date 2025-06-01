
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add homepage field
packageJson.homepage = 'https://your-username.github.io/alaez-aero-website';

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
console.log('Updated package.json for GitHub Pages deployment');
