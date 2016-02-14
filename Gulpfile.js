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

gulp.task('default', function() {

    var b = browserify(bConfig);
    b = watchify(b);
    console.log("running watcher");

    b.on('update', function() {
        console.log('updating');
        bundleShare(b);
    });
    b.on('log', function(msg){
    	console.log(msg);
    })
    bundleShare(b);

});

gulp.task('browserify', function() {
    return bundleShare(browserify(bConfig));
});

function bundleShare(b) {
    b.transform('babelify', {
            presets: ["es2015", "react"]
        })
        .bundle()
        .pipe(source('production.js'))
        .pipe(gulp.dest('client/dist'));
}
