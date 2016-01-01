/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

exports.aws = {
  region: 'us-west-1',
  params:{
    Bucket: 'realtime-dm-site'    
  },
  accessKeyId: 'nope',
  secretAccessKey: 'nope'
};

exports.defaultEnv = 'local';

exports.generateConfig = function(environment){
  return gulp.src('env.conf.json')
    .pipe($.ngConfig('saveUp.config', {
      environment: environment
    }))
    .pipe(gulp.dest(this.paths.tmp));
}

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/jquery/, /\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
  directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
