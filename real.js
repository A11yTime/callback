const scopeData = {
    scope: [
      {
        experienceName: "latest",
        scopeName: "defaultScope",
        multiplePageExperience: false,
        url: "https://www.walgreens.com/",
        postLogin: false,
        flags: ["domain3", "simple"]
      }
    ]
  };

const getScopesFromData = () => {
    return scopeData.scope
};

const filterScopedByExperience = (configs, filters) => {
    if(!filters.length) return configs;
    return configs.filter(config => filters.includes(config.experienceName));
}

const getScopedConfigurations = (filterString) => {
    const filter = filterString ? filterString.split(',') : [];
    return filterScopedByExperience(getScopesFromData(), filter)
}
