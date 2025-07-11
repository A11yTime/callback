const fs = require('fs');
const path = require('path');
const runJsonScript = require('./runner');

const folderPath = path.join(__dirname, 'data');

// Read all files in the folder
const files = fs.readdirSync(folderPath);

// Filter only `.json` files
const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

jsonFiles.forEach(file => {
  const fullPath = path.join(folderPath, file);
  console.log(`\nProcessing file: ${file}`);

  runJsonScript(fullPath);
});
