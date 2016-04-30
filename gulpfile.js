'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var _src = './src/**/*.scss';
var _dest = './';

 
gulp.task('production', function () {
  return gulp.src(_src)
  	.pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write(_dest))
    .pipe(gulp.dest(_dest));
});

gulp.task('debug', function () {
  return gulp.src(_src)
  	.pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'expanded'})).on('error', sass.logError)
    .pipe(sourcemaps.write(_dest))
    .pipe(gulp.dest(_dest));
});

gulp.task('dev', function () {
  gulp.watch(_src, ['debug']);
});

gulp.task('default', function () {
  gulp.watch(_src, ['production']);
});
