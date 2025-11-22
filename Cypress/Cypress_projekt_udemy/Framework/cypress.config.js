const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',                // Adresár na ukladanie reportov
      overwrite: true,
      html: true,
      json: true,
      reportFilename: 'report-[name]-[datetime]',  // Názvy reportovaných súborov
      timestamp: 'mmddyyyy_HHMMss',                // Časová pečiatka na formátovanie reportov
      charts: true,                                // Povolí grafy v reporte
      embeddedScreenshots: true,
    },
    setupNodeEvents(on, config) {                  // Tu môžeme definovať, ako sa majú správať Node event listenery
      
    },
  },
});
