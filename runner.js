const fs = require('fs');

function runJsonScript(jsonFilePath) {
  if (!fs.existsSync(jsonFilePath)) {
    console.error('JSON file not found:', jsonFilePath);
    return;
  }

  const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
  let data;

  try {
    data = JSON.parse(rawData);
  } catch (err) {
    console.error('Failed to parse JSON:', err);
    return;
  }

  if (!data.scope || !Array.isArray(data.scope)) {
    console.error('Invalid JSON format: missing "scope" array.');
    return;
  }

  data.scope.forEach(experience => {
    console.log(`Experience: ${experience.experienceName}`);

    if (!experience.steps || !Array.isArray(experience.steps)) {
      console.warn('No steps found for', experience.experienceName);
      return;
    }

    experience.steps.forEach((step, index) => {
      console.log(` Step ${index + 1}:`);
      console.log(`  Selector: ${step.cssSelector}`);
      console.log(`  Action: ${step.action}`);
      // You can add code here to "run" each step,
      // e.g., execute an automated browser action with Puppeteer or Playwright.
    });
  });
}

module.exports = runJsonScript;
