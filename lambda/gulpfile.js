var gulp   = require('gulp');
var lambda = require('gulp-awslambda');
var zip    = require('gulp-zip');

gulp.task('deploy-lambda', function() {
    return gulp.src('dist/**')
        .pipe(zip('archive.zip'))
        .pipe(lambda('iotbutton-blink-arm-system', {region: 'us-east-1'}))
        .pipe(gulp.dest('dist'));
});
