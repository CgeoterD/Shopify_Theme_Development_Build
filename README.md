
| Related Repository                                                                                                                                       | Description                                                                                                                                                                                                                                                                                |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Theme development build with React Apps compilation](https://github.com/CgeoterD/Shopify_Theme_Development/tree/theme-build-with-react-app-compilation) | This branch provides a specialized setup for Shopify theme development incorporating React compilation. It offers a detailed workflow and the tools necessary for integrating React components seamlessly into Shopify themes, enhancing the interactivity and dynamism of a store's development. | | Description of the third related repository. |

# Shopify Theme Build

This project is a build setup for a Shopify theme. It utilizes Gulp for task automation, providing a streamlined workflow for compiling styles and scripts. Tailwind CSS is integrated for utility-first styling, along with SCSS support for more traditional CSS pre-processing. JavaScript files are minified for optimal performance.

## Features

- <b>Tailwind CSS Integration:</b> Automated compilation of Tailwind CSS.
- <b>SCSS Support:</b> Compile SCSS files into CSS with ease.
- <b>JavaScript Minification:</b> Minify JavaScript files for better performance.
- <b>Plain CSS Minification:</b> Ability to minify plain CSS files, enhancing load times and performance.
- <b>Live Watching:</b> Automatically watch and compile files during development.


#### <b>Tailwind CSS with Prefix:</b><br>
 Tailwind CSS is configured with the prefix `tw-` for all its classes to avoid conflicts and ensure better integration with existing styles. This means that every Tailwind class should be used with the `tw-` prefix (e.g., `tw-text-center, tw-p-4`).

#### <b>Folder Structure and Compilation</b><br>
In this setup, users have the flexibility to create nested folders within the src directory for better organization. This is particularly useful for managing Styles and JavaScript files in a structured manner. For instance, you can have a structure like `src/scss/components/` or `src/scripts/modules/`.

When these files are compiled, they are output directly into the assets folder, without retaining the nested directory structure. This means that no matter how you organize your files within the src directory, the compiled CSS and JavaScript files will all be placed flatly in the assets folder. This feature simplifies the final structure and ensures a clean and organized output in the assets directory.

For example, a file located at `src/scss/components/my-component.scss` will be compiled and placed as `assets/my-component.min.css`. This ensures ease of reference and cleaner integration with your project's overall structure.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Shopify CLI](https://shopify.dev/themes/getting-started/create#step-1-install-shopify-cli)

### Installation

   ```bash
   npm install
   ```

### Usage

The following npm scripts are available:

Starts the Gulp default task which includes all compilers and watchers.
```bash
npm run dev
```
Watch and compile style-related changes only.

```bash
npm run dev:style
```
Watch and compile script-related changes only.

```bash
npm run dev:script
```
Run a build process to compile all styles and scripts.

```bash
npm run build
```
Run tests using Cypress.
```bash
npm run test
```

### Gulp Tasks
- <b>tailwindStyleCompiler:</b> Compiles Tailwind CSS.
- <b>scssStyleCompiler:</b> Compiles SCSS files to CSS.
- <b>regularStylesMinificator:</b> Minifies regular CSS files.
- <b>regularScriptsMinificator:</b> Minifies JavaScript files.
- <b>watchFiles:</b> Watches all files and runs respective compilers.
- <b>watchStyleFilesOnly:</b> Watches only style-related files.
- <b>watchScriptFilesOnly:</b> Watches only script-related files.

### Structure
- `src/tailwind-style/`: Source folder for Tailwind CSS files.
- `src/scss/`: Source folder for SCSS files.
- `src/styles-minification/`: Source folder for regular CSS files to be minified.
- `src/scripts-minification/`: Source folder for JavaScript files to be minified.
- `assets/`: Destination folder for compiled and minified styles and scripts.

### Workflow

1. Start Watching for Local Changes

To begin development, start by watching for changes in your local files. Use one of the following npm scripts depending on your focus:

To watch all files (including styles and scripts):
```bash
npm run dev
```

If you are working only with styles:
```bash
npm run dev:style
```
After you have finished making changes during your development session, run the following command to create a production build:
```bash
npm run build
```
This command compiles and minifies all styles and scripts, preparing them for deployment.

2. Serve Your Shopify Theme

Once you are ready to view your theme in action, use the Shopify CLI to serve your theme:
```bash
shopify theme dev --store=YOUR_STORE_URL
```

### Using shopify.theme.toml for Convenient Development
For a more convenient development experience, especially when working with multiple environments or stores, consider using a <b>shopify.theme.toml</b> file. This file can store various configuration settings for your Shopify theme allowing you to quickly switch between different development environments.

Example shopify.theme.toml:
```bash
[environments.env1]
store = "heo-test"
path = "./"
ignore = []
```
Example command
```bash
shopify theme dev -e env1
```

