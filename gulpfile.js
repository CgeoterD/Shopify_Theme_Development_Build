const fs = require('fs');
require('dotenv').config();
const path = require('path');
const {src, dest, series, parallel, watch} = require('gulp');
const rename = require('gulp-rename');

// Styles
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
const cssnano = require('cssnano');
const scss = require('gulp-sass')(require('sass'));

// Scripts
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

// Executors
function tailwindStyleCompiler() {
    return src('src/tailwind-style/*.css')
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            autoprefixer(),
            cssnano()
        ]))
        .pipe(rename(function (path) {
            path.dirname = '';
            path.extname = '.min.css';
        }))
        .pipe(dest('assets/'));
}
function scssStyleCompiler() {
    return src('src/scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
        .pipe(rename(function (path) {
            path.dirname = '';
            path.extname = '.min.css';
        }))
        .pipe(dest('assets/'));
}
function regularStylesMinificator() {
    return src('src/styles-minification/**/*.css')
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
        .pipe(rename(function (path) {
            path.dirname = '';
            path.extname = '.min.css';
        }))
        .pipe(dest('assets/'));
}
function regularScriptsMinificator() {
    return src(`src/scripts-minification/**/*.js`)
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.dirname = '';
            path.extname = '.min.js';
        }))
        .pipe(dest('assets/'))
}

// Watchers
function watchFiles() {
    watch('src/tailwind-style/**/*.css', tailwindStyleCompiler);
    watch(['./templates/*.liquid', './layout/*.liquid', './sections/*.liquid', './snippets/*.liquid'], tailwindStyleCompiler);
    watch('src/styles-minification/**/*.css', regularStylesMinificator);
    watch('src/scripts-minification/**/*.js', regularScriptsMinificator);
    watch('src/scss/**/*.scss', scssStyleCompiler);
}
function watchStyleFilesOnly() {
    watch('src/tailwind-style/**/*.css', tailwindStyleCompiler);
    watch(['./templates/*.liquid', './layout/*.liquid', './sections/*.liquid', './snippets/*.liquid'], tailwindStyleCompiler);
    watch('src/styles-minification/**/*.css', regularStylesMinificator);
    watch('src/scss/**/*.scss', scssStyleCompiler);
}
function watchScriptFilesOnly() {
    watch('src/scripts-minification/**/*.js', regularScriptsMinificator);
}

// React projects compilation
function compileReactApp() {
    const projectName = process.env.REACT_PROJECT_NAME;
    if (!projectName) {
        throw new Error('REACT_PROJECT_NAME is not set in .env file.');
    }
    const projectPath = path.join(__dirname, 'src', 'react-apps', projectName);
    if (!fs.existsSync(projectPath)) {
        throw new Error(`Project folder for '${projectName}' does not exist.`);
    }

    return src(`${projectPath}/**/*.{js,jsx,ts,tsx}`)
        .pipe(babel({
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }))
        .pipe(concat(`${projectName}.js`))
        .pipe(dest('assets/'));
}
exports.compileReactApp = compileReactApp;


// Exports
exports.default = series(tailwindStyleCompiler, regularStylesMinificator, regularScriptsMinificator,scssStyleCompiler, watchFiles);
exports.watchStyles = series(tailwindStyleCompiler, regularStylesMinificator,scssStyleCompiler, watchStyleFilesOnly);
exports.watchScripts = series(regularScriptsMinificator, watchScriptFilesOnly);
exports.build = series(tailwindStyleCompiler, regularStylesMinificator, scssStyleCompiler, regularScriptsMinificator);