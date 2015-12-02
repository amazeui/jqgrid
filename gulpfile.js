'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var docUtil = require('amazeui-doc-util');
var runSequence = require('run-sequence');
var tasks = require('amazeui-gulp-tasks');

var config = {
  pkg: require('./package.json'),

  // release task
  ghPages: {
    src: 'dist/**/*'
  },

  // remote branch
  git: {
    branch: 'master'
  },

  browserSync: {
    notify: false,
    server: 'dist',
    logPrefix: 'AMP'
  },

  // watch files and reload browserSync
  bsWatches: 'dist/**/*',

  less: {
    src: './less/amazeui.jqgrid.less',
    autoPrefixer: docUtil.autoprefixerBrowsers,
    dist: './dist',
    watches: './less/**/*.less'
  },

  // docs:md
  md: {
    src: ['README.md', 'docs/*.md'],
    data: {
      pluginTitle: 'Amaze UI jqGrid',
      pluginDesc: 'jqGrid Amaze UI 样式扩展',
      buttons: 'amazeui/jqgrid',
      head: '<link rel="stylesheet" href="http://www.guriddo.net/demo/css/trirand/ui.jqgrid-bootstrap.css">' +
      '<link rel="stylesheet" href="../amazeui.jqgrid.css"/>'
    },
    rename: function(file) {
      file.basename = file.basename.toLowerCase();
      if (file.basename === 'readme') {
        file.basename = 'index';
      }
      file.extname = '.html';
    },
    dist: function(file) {
      if (file.relative === 'index.html') {
        return 'dist'
      }
      return 'dist/docs';
    }
  },

  // browserify
  browserify: {
    bundleOptions: {
      entries: './lib/amazeui.jqgrid.js',
      cache: {},
      packageCache: {}
    },
    filename: 'amazeui.jqgrid.js',
    transforms: [['browserify-shim', {global: true}]],
    plugins: [],
    dist: 'dist'
  },

  // clean path
  clean: 'dist'
};

// init tasks
tasks(gulp, config);

gulp.task('build', function(cb) {
  runSequence('clean', ['browserify', 'less', 'markdown'], cb);
});

gulp.task('dev', ['build', 'server']);
