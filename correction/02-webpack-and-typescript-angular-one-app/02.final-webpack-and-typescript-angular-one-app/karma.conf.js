var webpackConfig = require('./webpack.test');

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
      // Grab all files in the app folder that contain .test.
      'src/tests.webpack.ts'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/**/*.ts': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // This is needed for chrome to understand that .ts extension match typescript files and not video files
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },

    webpack: webpackConfig
  });
};
