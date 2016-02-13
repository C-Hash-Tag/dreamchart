const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const nodemon = require('nodemon');

gulp.task('compile', function(){

  var bundler = browserify({entries: 'client/app/app.jsx', extensions: ['.jsx'], debug: true})
  var watcher = watchify(bundler)



  return watcher.on('update', function() {
    console.log('updating');
    watcher.transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('production.js'))
    .pipe(gulp.dest('client/dist'))
  })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('production.js'))
    .pipe(gulp.dest('client/dist'))
});

gulp.task('default', ['compile'], function() {
  var stream = nodemon({
    script: 'server/index.js',
    watch: 'client/app',
    tasks: ['compile']
  });
  return stream;
})
