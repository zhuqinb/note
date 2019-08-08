# gulp编译scss出现的问题

## gulp热编译scss出现问题
```log
events.js:174
      throw er; // Unhandled 'error' event
      ^
Error: app\styles\index.scss
Error: File to import not found or unreadable: mixin.scss.
        on line 4 of app/styles/index.scss
>> @import "mixin.scss";
```

### 解决方式
编译scss的时候，出现的问题用on监听一下错误，只打印日志，不退出进程[参考](https://github.com/dlmanning/gulp-sass/issues/1)
```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src('./app/frontend/styles/all.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({includePaths: ['./app/frontend/styles']}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./app/assets/stylesheets/bundles'));
});

gulp.task('default', function() {
  gulp.watch('./app/frontend/styles/**/*.scss', ['styles']);
});
```