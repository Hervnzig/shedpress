// Include gulp
var gulp = require('gulp');

var appUrl = "shed.app";

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browsersync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');


gulp.task('browser-sync', function() {
    browsersync.init({
        proxy: appUrl,
        open: false
    });
    gulp.watch('*.php').on( 'change', browsersync.reload);
});

// Lint Task
gulp.task('scripts', function() {
    return gulp.src([ 'assets/js/**/*.js', '!assets/js/all.js', '!assets/js/min/valoisa.min.js' ])
        .pipe(jshint())
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('valoisa.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min'));
        //.pipe(notify({message: "Javascript linted and compiled", title: "Compilation Successful"}));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/styles/scss/**/*.scss')
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(sass())
        .pipe(gulp.dest('./assets/styles/css/'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(browsersync.stream());
        //.pipe(notify({message: "Sass compilation complete", title: "Compilation Successful"}));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/js/min/valoisa.min.js').on( 'change', browsersync.reload);
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('assets/styles/scss/**/*.scss', ['sass']).on( 'change', browsersync.stream );
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch', 'browser-sync']);


function errorAlert(error){
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
};
