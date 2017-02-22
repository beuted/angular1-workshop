// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec'
    ],

    files: [
      //
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/services/randomNames.service.js',
      'src/directives/greeting.directive.js',
      'src/features/home/index.js',
      'src/features/home/home.controller.js',
      'src/app.js',
      
      // Grab all files in the app folder that ends with .test.js
      'src/**/*.test.js' 
    ],

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true
  });
};
