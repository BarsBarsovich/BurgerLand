'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');


var paths = {
    styles: {
        src: './css/**/**.scss',
        build: './dist'
    }
};
gulp.task('scss', function() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.build));
});


gulp.task('watch', function() {    
    gelp.watch(paths.styles.src, 'scss');
    livereload.listen();
});


gulp.task('default', function() {
    gulp.watch(paths.styles.src, gulp.series(        
        gulp.parallel('scss')
    ));
});