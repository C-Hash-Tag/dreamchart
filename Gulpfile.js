const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', function(){
  return gulp.src('client/app/*.jsx')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});