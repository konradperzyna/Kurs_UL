/*jshint node:true */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src('*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        //.pipe(jshint.reporter('fail'))
        ;
});

gulp.task('concat', function() {
    gulp.src(['hello.txt', 'world.txt'])
        .pipe(concat('helloworld.txt'))
        .pipe(gulp.dest('./build'));
});
