var gulp = require('gulp'); // 載入 gulp
var gulpLivereload = require('gulp-livereload'); // 載入 gulp-livereload

gulp.task('watch', function () {
  gulpLivereload.listen(); // 在執行 gulp watch 指令後，順便啟動 livereload 伺服器
  gulp.watch('*.html', ['html']); // 在 html 檔案有異動時，執行名為 html 的任務(task)
});

gulp.task('html', function () { // 名為 html 的任務(task)
  gulp.src('*.html')
    .pipe(gulpLivereload());
});
