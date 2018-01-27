var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var responsive = require('gulp-responsive');
var run = require('gulp-run');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var size = require('gulp-size');
var uglify = require('gulp-uglify');

var config = require('./_app/gulp/config');
var paths = require('./_app/gulp/paths');

// Styles zone
var styleOutput = 'main.css';

gulp.task('build:styles', () => {
  return gulp.src(paths.appCssFilesGlob)
    .pipe(cleanCSS({ compatibility: 'ie8', keepBreaks: false }))
    .pipe(concatCss(styleOutput))
    .pipe(gulp.dest(paths.jekyllDir))
    .pipe(gulp.dest(paths.siteDir))
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});

gulp.task('clean:styles', function (cb) {
  del([paths.jekyllDir + styleOutput, paths.siteDir + styleOutput], cb);
});

gulp.task('update:styles', ['build:styles'], function (cb) {
  browserSync.reload();
  cb();
});

// Scripts zone
var scriptsMainOutput = 'main.js';
var scriptsGalleryOutput = 'gallery.js';
var scriptsReservationOutput = 'reservation.js';

gulp.task('build:scripts', function (cb) {
  runSequence('build:scripts:main', 'build:scripts:gallery', 'build:scripts:reservation', cb);
});

gulp.task('build:scripts:main', function () {
 return gulp.src([
        paths.appJsFiles + '/main/*.js'     
    ])
    .pipe(concat(scriptsMainOutput))
    .pipe(uglify())
    .pipe(gulp.dest(paths.jekyllDir))
    .pipe(gulp.dest(paths.siteDir))
    .on('error', gutil.log);
});

gulp.task('build:scripts:gallery', function () {
  return gulp.src([
      paths.appJsFiles + '/gallery/*.js'     
    ])
     .pipe(concat(scriptsGalleryOutput))
     .pipe(uglify())
     .pipe(gulp.dest(paths.jekyllDir))
     .pipe(gulp.dest(paths.siteDir))
     .on('error', gutil.log);
 });

 gulp.task('build:scripts:reservation', function () {
  return gulp.src([
      paths.appJsFiles + '/reservation/*.js'     
    ])
     .pipe(concat(scriptsReservationOutput))
     .pipe(uglify())
     .pipe(gulp.dest(paths.jekyllDir))
     .pipe(gulp.dest(paths.siteDir))
     .on('error', gutil.log);
 });

 gulp.task('clean:scripts', function (cb) {
  runSequence('clean:scripts:main', 'clean:scripts:gallery', 'clean:scripts:reservation', cb);
});

gulp.task('clean:scripts:main', function (cb) {
  del([paths.jekyllDir + scriptsMainOutput, paths.siteDir + scriptsMainOutput], cb);
});

gulp.task('clean:scripts:gallery', function (cb) {
  del([paths.jekyllDir + scriptsGalleryOutput, paths.siteDir + scriptsGalleryOutput], cb);
});

gulp.task('clean:scripts:reservation', function (cb) {
  del([paths.jekyllDir + scriptsReservationOutput, paths.siteDir + scriptsReservationOutput], cb);
});

gulp.task('update:scripts', ['build:scripts'], function (cb) {
  browserSync.reload();
  cb();
});

// Images zone
gulp.task('build:images', function () {
  return gulp.src(paths.appImageFilesGlob)
    .pipe(responsive(
      {
        '*.*': [{ width: '100%', height: '100%' }],
        '*.png': [{ width: '100%', height: '100%' }],
        'home/award*.*': [{ width: 250 }],
        'header/*.*': [{ width: '100%', height: '100%', quality: 40 }],
        'news/*.*': [{ width: 360 }],
      },
      { errorOnUnusedImage: false, progressive: true , errorOnEnlargement: false }
    ))
    .pipe(gulp.dest(paths.jekyllImageFiles))
    .pipe(gulp.dest(paths.siteImageFiles))
    .pipe(browserSync.stream())
    .pipe(size({ showFiles: true }));
});

gulp.task('clean:images', function (cb) {
  del([paths.jekyllImageFiles, paths.siteImageFiles], cb);
});

gulp.task('update:images', ['build:images'], function (cb) {
  browserSync.reload();
  cb();
});


// Jekyll zone
gulp.task('build:jekyll', function () {
  var shellCommand = 'bundle exec jekyll build --config _config.yml,_app/localhost_config.yml';
  if (config.drafts) { shellCommand += ' --drafts'; };

  return gulp.src(paths.jekyllDir)
    .pipe(run(shellCommand))
    .on('error', gutil.log);
});

gulp.task('clean:jekyll', function (cb) {
  del([paths.siteDir], cb);
});

gulp.task('update:jekyll', ['build:jekyll'], function (cb) {
  browserSync.reload();
  cb();
});

// Updates Ruby gems
gulp.task('update:bundle', function () {
  return gulp.src('')
    .pipe(run('bundle install'))
    .pipe(run('bundle update'))
    .pipe(notify({ message: 'Bundle Update Complete' }))
    .on('error', gutil.log);
});

// Static Server + watching files
gulp.task('serve', ['build'], function () {

  browserSync.init({
    server: paths.siteDir,
    ghostMode: false, // do not mirror clicks, reloads, etc. (performance)
    logFileChanges: true,
    logLevel: 'debug',
    open: false       // do not open the browser
  });

  // Watch app .js files
  gulp.watch('_app/scripts/**/*.js', ['update:scripts']);

  // Watch app .css files
  gulp.watch('_app/styles/**/*.jpg', ['update:images']);

  // Watch app image files
  gulp.watch('_app/images/**/*.css', ['update:styles']);

  // Watch site settings
  gulp.watch(['_config.yml', '_app/localhost_config.yml'], ['update:jekyll']);

  // Watch Jekyll posts
  gulp.watch('_posts/**/*.+(md|markdown|MD)', ['update:jekyll']);

  // Watch Jekyll drafts if --drafts flag was passed
  if (config.drafts) {
    gulp.watch('_drafts/*.+(md|markdown|MD)', ['update:jekyll']);
  }

  // Watch Jekyll html files
  gulp.watch(['**/*.html', '**/*.md', '!_site/**/*.*'], ['update:jekyll']);

  // Watch Jekyll RSS feed XML file
  gulp.watch('feed.xml', ['update:jekyll']);

  // Watch Jekyll data files
  gulp.watch('_data/**.*+(yml|yaml|csv|json)', ['update:jekyll']);

  // Watch Jekyll favicon.ico
  gulp.watch('favicon.ico', ['update:jekyll']);
});

// General Zone
gulp.task('clean',
  ['clean:images', 'clean:scripts', 'clean:styles', 'clean:jekyll']
);

gulp.task('build', function (cb) {
  runSequence('clean', ['build:scripts', 'build:images', 'build:styles'], 'build:jekyll', cb);
});

gulp.task('default', ['build']);

