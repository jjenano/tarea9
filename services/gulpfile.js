const gulp = require('gulp')
const zip = require('gulp-zip')

gulp.task('zipper', function () {
  return gulp.src('../*')
    .pipe(zip('artifact.zip'))
    .pipe(gulp.dest('../dist'))
})

gulp.task('default', gulp.series('zipper'))
