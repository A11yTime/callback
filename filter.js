// Simulate reading JSON files
function getJsonFiles() {
  return [
    { name: 'login' },
    { name: 'signup' },
    { name: 'checkout' },
    { name: 'profile' },
  ];
}

// Filter configs by name using a filter array
function filterScopes(configs, filters) {
  if (!filters.length) return configs; // return all if no filters
  return configs.filter(config => filters.includes(config.name));
}

// Main function
function getScopedConfigurations(filterString) {
  const filters = filterString ? filterString.split(',') : [];
  return filterScopes(getJsonFiles(), filters);
}

// ---------------------------
// Try it out:

console.log('Test with filters "login,signup":');
console.log(getScopedConfigurations("login,signup"));
// → [{ name: 'login' }, { name: 'signup' }]

console.log('\nTest with empty string (no filters):');
console.log(getScopedConfigurations(""));
// → returns all configs
