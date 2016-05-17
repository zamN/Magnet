/**
 * Module dependencies.
 */
const gulp   = require('gulp');
const watch  = require('gulp-watch');
const babel  = require('gulp-babel');
const eslint = require('gulp-eslint');
const path   = require('path');

/**
 * Paths to be watched by 'watch' task. 
 */ 
const paths = {
  es6: ['app/**/*.js', 'index.js']
}

/**
 * called when a file changes, outputs es5 code to app/index.js.
 */
gulp.task('babel', () => {
  return gulp.src('index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('app'));
});

/**
 * Checks to make sure bad JS isn't being written. 
 */
gulp.task('lint', function() {
  return gulp.src(paths.es6)
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

/**
 * Watches files to see if any changes have been saved. 
 */
gulp.task('watch', function(){
  gulp.watch(paths.es6, ['babel'])
});

/**
 * Default gulp task. 
 */
gulp.task('default', ['watch']);
