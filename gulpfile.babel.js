'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import browserSyncServer from 'browser-sync';

const g = gulpLoadPlugins();
const browserSync = browserSyncServer.create();

/**
 * Clean build file
 */
gulp.task('clean', (cb) => {
  del(['public/js/'], cb);
});

/**
 * Run all tests
 */
gulp.task('test', ['lint'], () => {
  return gulp.src(['test/*.js'], {
      read: false
    })
    .pipe(g.mocha())
    .on('error', g.util.log);
});

/**
 * Run all tests when files change
 */
gulp.task('test:auto', ['test'], () => {
  gulp.watch(['src/**', 'test/**'], ['test']);
});

/**
 * Run ESLint static code analyzer
 */
gulp.task('lint', () => {
  return gulp.src(['./src/**/*.js', './src/**/*.jsx', './test/**/*.js'])
    .pipe(g.eslint())
    .pipe(g.eslint.format())
    .pipe(g.eslint.failOnError());
});

/**
 * Build js file with Babel and Browserify
 */
gulp.task('js', () => {
  return gulp.src('src/main/index.js')
    .pipe(g.browserify({
      transform: ['babelify'],
      debug: true
    }))
    .pipe(g.rename({
      basename: "main",
    }))
    .pipe(gulp.dest('public/js/'));
});

/**
 * Serve public folder and watch all changes
 */
gulp.task('serve', ['js'], () => {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });

  gulp.watch(['src/main/*.*', 'public/index.html'], ['js-watch']);
});

/**
 * Build JS when source files change and reload browser
 */
gulp.task('js-watch', ['js'], () => {
  browserSync.reload();
});

gulp.task('default', ['serve']);
