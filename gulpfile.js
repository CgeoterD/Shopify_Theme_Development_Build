const {src, dest, series, watch} = require('gulp');
const rename = require('gulp-rename');

// Styles
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
const cssnano = require('cssnano');
const scss = require('gulp-sass')(require('sass'));

// Scripts
const uglify = require('gulp-uglify-es').default;
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

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
function typeScriptCompiler() {
    return src(`src/ts-compilation/**/*.ts`)
        .pipe(tsProject())
        .pipe(rename(function (path) {
            path.dirname = '';
            path.extname = '.min.js';
        }))
        .pipe(dest('assets/'));
}

// Watchers
function watchFiles() {
    watch('src/tailwind-style/**/*.css', tailwindStyleCompiler);
    watch(['./templates/*.liquid', './layout/*.liquid', './sections/*.liquid', './snippets/*.liquid'], tailwindStyleCompiler);
    watch('src/styles-minification/**/*.css', regularStylesMinificator);
    watch('src/scripts-minification/**/*.js', regularScriptsMinificator);
    watch('src/ts-compilation/**/*.ts', typeScriptCompiler);
    watch('src/scss/**/*.scss', scssStyleCompiler);
}

exports.default = series(tailwindStyleCompiler, regularStylesMinificator, regularScriptsMinificator,typeScriptCompiler, scssStyleCompiler, watchFiles);
exports.build = series(tailwindStyleCompiler, regularStylesMinificator, scssStyleCompiler, regularScriptsMinificator, typeScriptCompiler);