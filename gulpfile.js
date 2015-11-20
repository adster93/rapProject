var gulp = require('gulp');
var livereload = require('gulp-livereload');
gulp.task('default', function() {
    gulp.src('*.js').pipe(gulp.dest('./test'))
})
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['*.js', '*.scss']);
});