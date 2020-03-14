var gulp = require('gulp');
var twig = require('gulp-twig');

gulp.task('twig', function () {
    return gulp.src('./src/pages/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
    gulp.watch('./src/pages/*.twig', gulp.series('twig'));
});
