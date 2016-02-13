const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');


gulp.task('default', function(){
  return browserify({entries: 'client/app/app.jsx', extensions: ['.jsx'], debug: true})
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('production.js'))
    .pipe(gulp.dest('client/dist'));
});