var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('minify', function() {
  return gulp.src('www/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
    return gulp.src('www/img/**/*')
        .pipe(gulp.dest('dist/img'));
});
gulp.task('copy-icons', function () {
    return gulp.src(['www/*.png', 'www/*.ico'])
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    watch('www/*.html', batch(function (events, done) {
        gulp.start('minify', done);
    }));
});

gulp.task('default', ['minify', 'copy', 'copy-icons']);
