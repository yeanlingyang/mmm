const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const rename = require('gulp-rename')
const less = require('gulp-less')
const minifycss = require('gulp-minify-css')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const del = require('del')
const connect = require('gulp-connect')
const extender = require('gulp-html-extend') // 合并html
const minifyHTML = require('gulp-minify-html') // 压缩html
const { task, src, pipe, dest } = require('gulp')

// 参数1： 任务名
// 参数2： 任务需要执行的内容
task('html', function() {
  return gulp
    .src('./src/**/*.html')
    .pipe(extender())
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

// js任务
task('js', function() {
  return src('./src/js/*.js')
    .pipe(dest('./dist/js'))
    .pipe(uglify())
    .pipe(
      rename({
        // 配置重命名的后缀名
        suffix: '.min'
      })
    )
    .pipe(dest('./dist/js'))
    .pipe(connect.reload())
})

// less任务
task('less', function() {
  return src('./src/less/*.less')
    .pipe(less())
    .pipe(
      rename({
        extname: '.css'
      })
    )
    .pipe(dest('./dist/css'))
    .pipe(minifycss())
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(dest('./dist/css'))
    .pipe(connect.reload())
})

// 图片
task('img', function() {
  return src('./src/img/*')
    .pipe(cache(imagemin()))
    .pipe(dest('./dist/img'))
    .pipe(connect.reload())
})

// 拷贝lib
task('lib', function() {
  return src('./src/lib/**/*.*')
    .pipe(dest('./dist/lib'))
    .pipe(connect.reload())
})

gulp.task('watch', function() {
  gulp.watch('./src/less/*.less', gulp.series('less'))
  gulp.watch('./src/js/*.js', gulp.series('js'))
  gulp.watch('./src/**/*.html', gulp.series('html'))
  gulp.watch('./src/img/*', gulp.series('img'))
  gulp.watch('./src/lib/**/*.*', gulp.series('lib'))
})

// gulp clean
task('clean', function() {
  return del('./dist')
})

gulp.task('connect', function() {
  // 使用connect启动服务
  return connect.server({
    root: 'dist',
    port: 9999,
    livereload: true
  })
})

// gulp build
task(
  'default',
  gulp.series(
    'clean',
    'html',
    'less',
    'js',
    'img',
    'lib',
    gulp.parallel('watch', 'connect')
  )
)
