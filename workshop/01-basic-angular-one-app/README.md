# Angular 1 and webpack

based on http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/

After looking around and explaining what all this ugly configuration is for, we are going to transform this application from JS to TS progressively.

## Running the app locally
* [Install node](https://nodejs.org)
* run `$ npm install`
* run `$ npm install -g webpack-dev-server`
* run `$ npm run dev`


# Modifying karma configuration

```
    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },
```
