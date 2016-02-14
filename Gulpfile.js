const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

gulp.task('default', function(){

  var bundler = browserify({entries: 'client/app/app.jsx', extensions: ['.jsx'], debug: true, cache: {}, packageCache: {}, fullPaths: true});
  var watcher = watchify(bundler);
  console.log("running watcher");

  return bundler
    .bundle()
    .pipe(source('production.js'))
    .pipe(gulp.dest('client/dist'))
  });
});
