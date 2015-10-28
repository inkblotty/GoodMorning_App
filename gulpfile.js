// gulpfile

// include gulp
var gulp = require('gulp');

// include plug-ins
var autoprefix = require('gulp-autoprefixer'), // automatically adds vender prefixes
	//browserSync = require('browser-sync').create(),
	changed = require('gulp-changed'), // checks to see what needs updating -- only the changed files
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	minifyCSS = require('gulp-minify-css'),
	minifyHTML = require('gulp-minify-html'),
	ngAnnotate = require('gulp-ng-annotate'), // helps with proper minification of angular
	sass = require('gulp-sass'),
	stripDebug = require('gulp-strip-debug'), // removes console and debug statements
	uglify = require('gulp-uglify');

// static server
/*gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});
*/

// JS hint task
gulp.task('jshint', function() {
	gulp.src('./src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function() {
	var imgSrc = './src/styles/images/**/*',
		imgDst = './build/styles/images';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});

// minify html
gulp.task('htmlpage', function() {
	var htmlSrc = './src/*.html',
		htmlDst = './build';

	gulp.src(htmlSrc)
		.pipe(changed(htmlDst))
		.pipe(minifyHTML())
		.pipe(gulp.dest(htmlDst));
});

// JS concat, strip debugging, and minify
// when concatenating angular files, make sure they are processed in order: 
// first angular library, then module, then servies, then controllers, etc.

gulp.task('scripts', function() {
	gulp.src(['./src/scripts/libraries/angular.min.js', './src/scripts/libraries/*.js'])
		.pipe(gulp.dest('./build/scripts/libraries/'));
	gulp.src(['./src/scripts/app.js', './src/scripts/services/*.js', './src/scripts/controllers/*.js', './src/scripts/directives/*.js', './src/scripts/filters/*.js', '.src/scripts/*.js']) /* library scripts */
		.pipe(ngAnnotate())
		.pipe(concat('script.js'))
		//.pipe(stripDebug())
		//.pipe(uglify())
		.pipe(gulp.dest('./build/scripts/'));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
	gulp.src(['./src/styles/*.scss'])
		.pipe(sass().on('error', sass.logError)) // double check this
		.pipe(concat('styles.css'))
		.pipe(autoprefix('last 2 versions'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./build/styles/'));
});

// default task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
	// watch for HTML changes
	gulp.watch('./src/*.html', function() {
		gulp.run('htmlpage');
	});

	// watch for JS changes
	gulp.watch('./src/scripts/*.js', function() {
		gulp.run('jshint', 'scripts');
	});

	// watch for CSS changes
	gulp.watch('./src/styles/*.scss', function() {
		gulp.run('styles');
	});
});