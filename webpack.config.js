const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
require('dotenv').config();
const appName = process.env.REACT_APP_NAME;

module.exports = {
    entry: `./src/react-apps/${appName}/index.${process.env.REACT_APP_ENTRY_POINT_FILE_EXTENSION}`, // Your entry point
    output: {
        path: path.resolve(__dirname, './assets'), // Output directory
        filename: `${appName}.min.js`, // Output file
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Added for TypeScript files
                use: 'ts-loader', // Using ts-loader for TypeScript files
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/, // Target .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use babel-loader for JS and JSX files
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            }
        ],
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, `./src/react-apps/${appName}/components/`),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, // This prevents the generation of the LICENSE.txt file
            }),
        ],
    },
};
