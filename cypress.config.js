const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/",
    watchForFileChanges: false,

    retries: {
      runMode: 2,
      openMode: 1,
    },
    defaultCommandTimeout: 10000,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});
