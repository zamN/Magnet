const babelify   = require("babelify");
const browserify = require("browserify");
const buffer     = require("vinyl-buffer")
const eslint     = require('gulp-eslint');
const gulp       = require('gulp');
const concatCss  = require('gulp-concat-css');
const nodemon    = require('gulp-nodemon')
const path       = require('path');
const source     = require("vinyl-source-stream");

const paths = {
  es6: ['!./app/bundle.js',
        '!./app/bundle.css',
        'app/**/*.js',
        'app/**/*.css']
}

// babelify
gulp.task("buildJS", function(){
  return browserify("./app/index.module.js", {debug: true})
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(gulp.dest("./"))
});

gulp.task('buildCSS', function () {
  return gulp.src('./app/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./'));
});

gulp.task('lint', function() {
  return gulp.src(paths.es6)
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('start', function () {
  nodemon({
    script: 'app/server.js',
    env: { 'NODE_ENV': 'development' }
  })
})

// watchify
gulp.task('watch', function(){
  gulp.watch(paths.es6, ['lint', 'buildJS', 'buildCSS'])
});

gulp.task('default', ['start', 'watch']);
