var gulp = require('gulp');
gulp.task('css', () => {
  const postcss    = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')
  const rtl = require('postcss-onlyrtl')
  return gulp.src('styles/*.css')
    // .pipe( sourcemaps.init() )
    .pipe( postcss([ 
        rtl({})
    ]) )
    //.pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') )
})