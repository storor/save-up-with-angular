'use strict'

var conf = require('./conf');
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('deploy-aws', ['build'], () => {
  const publisher = $.awspublish.create(conf.aws);
  
  const headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('dist/**/*.*')
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe($.awspublish.reporter());
});

gulp.task('deploy-gh', ['build'], () => {
  var ghPages =  $.ghPages;
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
