const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const browserify = require()

gulp.task('default', function(){
  return gulp.src('client/app/*.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(browserify())
    .pipe(concat('production.js'))
    .pipe(gulp.dest('./dist/'));
});