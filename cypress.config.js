const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewports: ['iphone-4', 'iphone-x', 'ipad-2', 'macbook-13'],
  "video": false,
  e2e: {
    baseUrl: 'https://test-dev-ht.myshopify.com/',
  },
});
