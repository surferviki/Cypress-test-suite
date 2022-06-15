const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl:'https://dummy.restapiexample.com/api/v1',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": [
    "**/*.*"
  ]
});
