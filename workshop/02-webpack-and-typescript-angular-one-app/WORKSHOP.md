# Workshop

## Setting up the app locally
* [Install node](https://nodejs.org)
* run `$ npm install`

## Commands
* Run app for local development: `$ npm run dev`
* Build for production: `$ npm run build`

## When your app is working fine:

**Exercises**

1. Replace all `.js` extensions on files in `src` with `.ts` extensions and fix the type issue you have with violent casts (i.e: `<any>` or so)
2. Adapt your previous code with the new ES6 way of writing dependencies
3. Transform `home.controller.ts` and `randomName.service.ts` using classes instead of functions
4. Go in the typescript configuration file `tsconfig.json` at the root of the project and change `noImplicitAny` to `true`, try fixing the build.