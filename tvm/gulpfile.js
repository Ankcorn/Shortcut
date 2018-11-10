var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('./styles/**/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('default', ['styles', 'connect', 'watch']);

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('reload', function() {
   connect.reload();
});

gulp.task('watch', function() {
   gulp.watch(['./styles/**/*.less'], ['styles']);
   gulp.watch(['*.html'], ['reload'])
});