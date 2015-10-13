// gulpfile.js

// include gulp
var gulp = require('gulp');

// include plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// lint task
/*
gulp.task('lint', function() {
	return gulp.src('js/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('default'));
})
*/

// compile sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// concatenate & minify js
gulp.task('scripts', function() {
	return gulp.src('js/*.js')
	    .pipe(concat('all.js'))
	    .pipe(gulp.dest('dist'))
	    .pipe(rename('all.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('dist'));
});

// watch files for changes
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/*.scss', ['sass']);
});

// default
gulp.task('default', ['sass', 'scripts', 'watch']);
