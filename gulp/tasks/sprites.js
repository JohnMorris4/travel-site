var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
del = require('del'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template:'./gulp/template/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', ()=>{
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], ()=>{
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], ()=>{
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));  

})

gulp.task('copySpriteCSS',['createSprite'], ()=>{
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules')); 
});

gulp.task('endClean', ['copySpriteGraphic','copySpriteCSS'], ()=>{
    return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean','createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);