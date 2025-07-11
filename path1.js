const fs = require('fs');
const path = require('path');

const runJsonScript = require('./runner');

const folderPath = path.join(__dirname, 'data', 'jsonFiles');

const files = fs.readdirSync(folderPath);

const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

jsonFiles.forEach(file => {
    const fullPath = path.join(folderPath, file)

    console.log(`/nProcessing file: ${file};`);
    runJsonScript(fullPath)
})