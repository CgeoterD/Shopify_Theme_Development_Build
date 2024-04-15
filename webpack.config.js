const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
require('dotenv').config();
const appName = process.env.REACT_APP_NAME;

module.exports = {
    entry: `./src/react-apps/${appName}/index.${process.env.REACT_APP_ENTRY_POINT_FILE_EXTENSION}`, // Your entry point
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: `${appName}.min.js`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
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
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    // Watcher settings for Windows OS users
    // watch: true,
    // watchOptions: {
    //     poll: 1000,
    // },
};
