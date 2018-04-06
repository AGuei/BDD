var gulp = require('gulp'),               // 載入 gulp
    gulpLivereload = require('gulp-livereload');  // 載入 gulp-livereload

gulp.task('watch', function () {
    gulpLivereload.listen();
    gulp.watch('*.html', ['html']);    
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(gulpLivereload());
})