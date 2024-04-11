# Shopify Theme Build

This project is a build setup for a Shopify theme. It utilizes Gulp for task automation, providing a streamlined workflow for compiling styles and scripts. Tailwind CSS is integrated for utility-first styling, along with SCSS support for more traditional CSS pre-processing. JavaScript files are minified for optimal performance.

In addition to Gulp, this setup employs Webpack for bundling React components, enabling the development and deployment of dynamic, client-side interfaces within the Shopify theme. The webpack configuration is designed to support both development and production environments, with optimizations such as minification and dead code elimination through Terser for efficient loading times. Support for TypeScript is also included, allowing developers to leverage strong typing for better code quality and maintainability.

## Features

- <b>Tailwind CSS Integration:</b> Automated compilation of Tailwind CSS.
- <b>SCSS Support:</b> Compile SCSS files into CSS with ease.
- <b>JavaScript Minification:</b> Minify JavaScript files for better performance.
- <b>Plain CSS Minification:</b> Ability to minify plain CSS files, enhancing load times and performance.
- <b>Live Watching:</b> Automatically watch and compile files during development.
- <b>React Component Bundling with Webpack:</b> Utilizes Webpack to bundle React components, enabling the development of complex and dynamic user interfaces within the Shopify theme.

#### <b>Tailwind CSS with Prefix:</b><br>
 Tailwind CSS is configured with the prefix `tw-` for all its classes to avoid conflicts and ensure better integration with existing styles. This means that every Tailwind class should be used with the `tw-` prefix (e.g., `tw-text-center, tw-p-4`).

#### <b>Folder Structure and Compilation</b><br>
In this setup, users have the flexibility to create nested folders within the src directory for better organization. This is particularly useful for managing Styles and JavaScript files in a structured manner. For instance, you can have a structure like `src/scss/components/` or `src/scripts-minification/modules/`.

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

Run a build process to compile all styles and scripts.

```bash
npm run build
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
```easycode
shopify theme dev --store=YOUR_STORE_URL
```

### Using shopify.theme.toml for Convenient Development
For a more convenient development experience, especially when working with multiple environments or stores, consider using a <b>shopify.theme.toml</b> file. This file can store various configuration settings for your Shopify theme allowing you to quickly switch between different development environments.

Example shopify.theme.toml:
```easycode
[environments.env1]
store = "heo-test"
path = "./"
ignore = []
```
Example command
```easycode
shopify theme dev -e env1
```

## Getting Started with React Application Development
For integrating React components into Shopify sections, this setup leverages a webpack configuration designed specifically for this purpose. You can explore a basic implementation example located in the `src/react-apps/custom-app` directory.
## Configuration
Before initiating your React application development or build process, it's crucial to configure the necessary environment variables. These variables are essential for determining the structure and behavior of the webpack compilation. Set up these variables in a `.env` file situated at the root of your project:

- `REACT_APP_NAME`: Specifies the name of your React application. This name influences the output filename and determines the directory structure for your compiled assets. 
- `REACT_APP_ENTRY_POINT_FILE_EXTENSION`: Defines the file extension for the entry point of your React application. This could be either tsx for TypeScript or jsx for JavaScript.

Example:
```easycode
REACT_APP_NAME="custom-app"
REACT_APP_ENTRY_POINT_FILE_EXTENSION="tsx"
```

### Structure
Your React application should reside within the `src/react-apps/` directory, under a subdirectory named after your app (as defined by `REACT_APP_NAME` in your `.env` file). For instance, the example application can be found at `src/react-apps/custom-app/`. This organizational structure is designed to support multiple React applications within the same project, each with its own distinct configuration and assets.

### Workflow
To start the development server with live reloading, use the following npm script:
```easycode
npm run dev:react
```
This command compiles your React application in development mode, enabling features like hot module replacement for a more efficient development experience.

After you have finished making changes during your development session, run the following command to create a production build:
```easycode
npm run react:build
```
This script triggers the webpack to bundle your application in production mode, optimizing the output through minification and potentially other optimizations defined in your webpack configuration. The compiled assets will be output to a directory structured according to the `REACT_APP_NAME` variable, ensuring that they are correctly organized for deployment.