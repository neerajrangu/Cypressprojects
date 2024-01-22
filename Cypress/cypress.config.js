const { defineConfig } = require("cypress");

module.exports = defineConfig({


  retries: {
    runMode: 0,
    openMode: 1,
    },

    screenshotOnRunFailure: false,

    defaultCommandTimeout: 4000,

  projectId: "qjpv1a",
  //npx cypress run --record --key 4304bbeb-1b88-4435-9b12-ddbcdea7deb6

  video: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
  },
});
