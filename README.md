# Shopify Theme Development Build

## Workflow

- Create a feature branch
- Edit theme locally
- Commit changes to the feature branch
- Make a PR to the staging branch
## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Shopify CLI](https://shopify.dev/themes/getting-started/create#step-1-install-shopify-cli)

### Installation

   ```bash
   cd white-claw-shopify-theme
   npm install
   ```

### Development

You will need 2 terminal windows:

1. Start watching for local changes

   ```bash
   npm run dev
   ```
   or 
   ```bash
   npm run dev:style
   ```
   If you will work only with tailwindCSS styles


   After finishing the dev task run following command
   ```bash
   npm run build
   ```

2. Serve your Shopify theme

   ```bash
   shopify theme dev --store=white-claw-uk.myshopify.com
   ```

