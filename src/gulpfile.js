'use strict'

const env = require('./env')
const gulp = require('gulp')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const gulpif = require('gulp-if')
const runSequence = require('run-sequence')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-symbols')
const svgmin = require('gulp-svgmin')

gulp.task('clean', () => {
  return gulp.src(env.public.build.path).pipe(clean())
})

gulp.task('js', () => {
  return gulp.src(env.public.build.js.src + '/**/*.js')
    .pipe(gulpif(env.isProduction, concat('application.js')))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulpif(env.isProduction, uglify()))
    .pipe(gulp.dest(env.public.build.js.target))
})

gulp.task('css', () => {
  return gulp.src(env.public.build.css.src + '/**/*.css')
    .pipe(gulpif(env.isProduction, concat('style.css')))
    .pipe(gulpif(env.isProduction, cleanCSS()))
    .pipe(gulp.dest(env.public.build.css.target))
})

gulp.task('imgs', () => {
  return gulp.src([env.public.build.imgs.src + '/**/*', '!' + env.public.build.icons.src + '/*.svg'])
    .pipe(gulpif(/[.]svg$/, svgmin()))
    .pipe(gulp.dest(env.public.build.imgs.target))
})

gulp.task('icons', function () {
  return gulp.src(env.public.build.icons.src + '/*.svg')
        .pipe(svgmin())
        .pipe(svgSprite())
        .pipe(gulpif(/[.]svg$/, gulp.dest(env.public.build.icons.target)))
})

gulp.task('fonts', () => {
  return gulp.src(env.public.build.fonts.src + '/**/*')
    .pipe(gulp.dest(env.public.build.fonts.target))
})

gulp.task('vendor:js', () => {
  return gulp.src(env.public.build.vendor.js.src + '/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(env.public.build.vendor.js.target))
})

gulp.task('vendor:css', () => {
  return gulp.src(env.public.build.vendor.css.src + '/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(env.public.build.vendor.css.target))
})

gulp.task('build', cb => {
  return runSequence('clean', ['js', 'css', 'imgs', 'icons', 'fonts', 'vendor:js', 'vendor:css'], cb)
})
