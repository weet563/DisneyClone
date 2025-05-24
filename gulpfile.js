//Add requisitos dos plugins 
const gulp = require('gulp'); //Gulp 
const sass = require('gulp-sass')(require('sass')); //Sass
const imagemin = require('gulp-imagemin'); //Imagemin

//Compilar o sass
function styles() {
    return gulp.src('./src/styles/*.scss') //Local de origem - antes add 'Gulp'
        .pipe(sass({ outputStyle: 'compressed' })) //Function para compilar
        .pipe(gulp.dest('./dist/css')); //Local de destino - antes add 'Gulp'
}

//Comprimir images
function images() {
    return gulp.src('./src/img/**/*') //Local de origem - antes add 'Gulp'
        .pipe(imagemin()) //Function para comprimir
        .pipe(gulp.dest('./dist/img')); //Local de destino - antes add 'Gulp'
}

exports.default = gulp.parallel(styles, images);

//Assistir o CSS ao-vivo
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}