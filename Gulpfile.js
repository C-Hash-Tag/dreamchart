const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const bConfig = {
	entries: 'client/app/app.jsx',
	extensions: ['.jsx'],
	debug: true,
	cache: {},
	packageCache: {},
	fullPaths: true
};
gulp.task('default', function(){

  var bundler = browserify(bConfig);
  var watcher = watchify(bundler);
  console.log("running watcher");

  return watcher.on('update', function() {
    console.log('updating');
    return watcher.transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('production.js'))
    .pipe(gulp.dest('client/dist'))
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('production.js'))
  .pipe(gulp.dest('client/dist'));

});

gulp.task('browserify', function(){
	return browserify(bConfig)
	.transform('babelify', {presets: ["es2015", "react"]})
	.bundle()
	.pipe(source('production.js'))
	.pipe(gulp.dest('client/dist'));
});
