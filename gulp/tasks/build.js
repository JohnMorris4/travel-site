var gulp = require ('gulp'),
del = require('del'),
imagemin = require('gulp-imagemin'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


gulp.task('previewDocs', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('deleteDocsFolder', ['icons'] , function(){
    return del("./docs");
});

gulp.task('optimizedImages', ['deleteDocsFolder'], function(){
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))    
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDocsFolder'], function(){
    gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'],function(){
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [function(){return rev()}, function(){return cssnano()}],
        js: [function (){return rev()}, function (){return uglify()}]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDocsFolder','optimizedImages', 'useminTrigger']);