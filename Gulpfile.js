const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');

gulp.task('default', function(){
  return gulp.src('client/app/*.jsx')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(concat('production.js'))
    .pipe(gulp.dest('./dist/'));
});