const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = config => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config);

  singleSpaWebpackConfig.externals.push('@angular/core', '@angular/platform-browser', '@angular/router', '@angular/common', 'rxjs', 'rxjs/operators')

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
