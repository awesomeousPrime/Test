//var elixir = require('laravel-elixir');
var gulp = require('gulp');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
//var browserSync = require('browser-sync');
var imageop = require('gulp-image-optimization');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */


gulp.task('image', function(){
    gulp.src(['resources/assets/img/*.png', 'resources/assets/img/*.jpg', 'resources/assets/img/*.jpeg', 'resources/assets/img/*.gif'])
    .pipe(imageop({
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
        }))
    .pipe(gulp.dest('public/img'))
    .on('end', cb)
    .on('error', cb);
});

gulp.task('css', function(){
    return gulp.src('resources/assets/css/*.css')
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('public/css'))
});

gulp.task('js', function(){
    return gulp.src('resources/assets/js/*.js')
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('public/js'))
});

gulp.task('watch', function(){
    gulp.watch('resources/assets/css/*.css', ['css']);
    gulp.watch('resources/assets/js/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'image', 'watch']);
