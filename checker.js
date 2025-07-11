const scopes = [
    { name: 'login', flags: ['a11y', 'keyboard'] },
    { name: 'signup', flags: ['a11y'] },
    { name: 'checkout', flags: ['keyboard', 'perf'] }
  ];
  
  const filters = ['a11y'];
  
  let checker = (arr, target) => target.every(v => arr.includes(v));
  let scopedConfigurations = [];
  
  for (let scope of scopes) {
    if (checker(scope.flags, filters)) {
      scopedConfigurations.push(scope);
    }
  }
  
  console.log(scopedConfigurations);
  