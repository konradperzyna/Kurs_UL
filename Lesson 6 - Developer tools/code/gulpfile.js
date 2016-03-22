var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    gulp.src(['*', 'src/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(jshint.reporter('fail'))
        ;
});

gulp.task('concat', function() {
    gulp.src('src/*.js')
        .pipe(concat('calc.js'))
        .pipe(gulp.dest('./build'));
});
