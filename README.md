| Related Repository                                                                                                          | Description                                                                                                      |
|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [Theme development build with Docker](https://github.com/CgeoterD/Shopify_Theme_Development/tree/shopify-build-with-docker) | This branch provides a specialized setup for Shopify theme development, incorporating the Dockerization of the codebase to ensure consistency and ease of deployment across different devices.  | | Description of the third related repository. |



# Shopify Theme Build
This project setup is tailored for developing a Shopify theme. It utilizes a combination of Gulp and Webpack to facilitate a streamlined workflow for automating tasks and bundling assets. This configuration supports both traditional and modern web technologies, including SCSS for CSS pre-processing and Tailwind CSS for utility-first styling. The setup also ensures that JavaScript and TypeScript files are efficiently processed for optimal performance.

## Features

- <b>Tailwind CSS Compilation</b>
- <b>SCSS Support</b> 
- <b>JavaScript Minification</b>
- <b>TypeScript Compilation</b> 
- <b>Plain CSS Minification</b> 
- <b>Live Watching</b>
- <b>React Component Bundling with Webpack</b> 

#### <b>Tailwind CSS with Prefix:</b><br>
Tailwind CSS is configured with the prefix `tw-` for all its classes to avoid conflicts and ensure better integration with existing styles. This means that every Tailwind class should be used with the `tw-` prefix (e.g., `tw-text-center, tw-p-4`).

#### <b>Folder Structure and Compilation</b><br>
In this setup, users have the flexibility to create nested folders within the src directory for better organization. This is particularly useful for managing JavaScript and TypesScript files in a structured manner. For instance, you can have a structure like `src/ts-compilation/interfaces/` or `src/scripts-minification/modules/`.

Upon compilation, the files are output to the assets folder without retaining the original nested directory structure. No matter how the files are organized within the src directory, all compiled files, including JavaScript, TypeScript, CSS  are placed flatly in the assets folder.

For example, a file located at `src/ts-compilation/export-example/export-example-file.ts` will be compiled and placed as `assets/export-example-file.min.js`. This ensures ease of reference and cleaner integration with your project's overall structure.

Additionally, during the compilation, any `import/export` references within the JavaScript and TypeScript files are automatically adjusted. For instance, if a TypeScript file located at `src/ts-compilation/export-example/export-example-file.ts` includes an import statement referencing another module within src, this path will be automatically rewritten in the compiled output to correctly reference the flattened structure in the assets folder, such as `./export-example-file.min.js`.
You can find examples in the project folders

### Gulp Tasks
- <b>tailwindStyleCompiler:</b> Compiles Tailwind CSS.
- <b>scssStyleCompiler:</b> Compiles SCSS files to CSS.
- <b>regularStylesMinificator:</b> Minifies regular CSS files.
- <b>regularScriptsMinificator:</b> Minifies JavaScript files.
- <b>typeScriptCompiler:</b> Compiles TypeScript files.
- <b>watchFiles:</b> Watches all files and runs respective compilers.

### Structure
- `src/tailwind-style/`: Source folder for Tailwind CSS files.
- `src/scss/`: Source folder for SCSS files.
- `src/styles-minification/`: Source folder for regular CSS files to be minified.
- `src/scripts-minification/`: Source folder for JavaScript files to be minified.
- `src/ts-compilation/`: Source folder for TypeScript files to be compiled.
- `assets/`: Destination folder for compiled and minified styles and scripts.


---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Shopify CLI](https://shopify.dev/themes/getting-started/create#step-1-install-shopify-cli)

### Installation

   ```bash
   npm install
   ```

### Workflow

1. Start Watching for Local Changes

To begin development, start by watching for changes in your local files. Use one of the following npm scripts depending on your focus:

To watch all files:
```bash
npm run dev
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
For integrating React components into Shopify sections, this setup leverages a webpack configuration designed specifically for this purpose. You can explore a basic implementation example located in the `src/react-apps/example-react-app` directory.
## Configuration
Before initiating your React application development or build process, it's crucial to configure the necessary environment variables. These variables are essential for determining the structure and behavior of the webpack compilation. Set up these variables in a `.env` file situated at the root of your project:

- `REACT_APP_NAME`: Specifies the name of your React application. This name influences the output filename and determines the directory structure for your compiled assets.
- `REACT_APP_ENTRY_POINT_FILE_EXTENSION`: Defines the file extension for the entry point of your React application. This could be either tsx for TypeScript or jsx for JavaScript.

Example:
```easycode
REACT_APP_NAME="example-react-app"
REACT_APP_ENTRY_POINT_FILE_EXTENSION="tsx"
```

### Structure
Your React application should reside within the `src/react-apps/` directory, under a subdirectory named after your app (as defined by `REACT_APP_NAME` in your `.env` file). For instance, the example application can be found at `src/react-apps/example-react-app/`. This organizational structure is designed to support multiple React applications within the same project, each with its own distinct configuration and assets.

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