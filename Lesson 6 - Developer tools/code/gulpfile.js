/*jshint node:true */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src(['*', 'src/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        //.pipe(jshint.reporter(.jshintrc'fail'))
        ;
});

gulp.task('concat', function() {
    gulp.src('src/*.js')
        .pipe(concat('calc.js'))
        .pipe(gulp.dest('./build'));
});
