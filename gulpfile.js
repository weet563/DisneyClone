//Add requisitos dos plugins 
const gulp = require('gulp'); //Gulp 
const sass = require('gulp-sass')(require('sass')); //Sass

//Compilar o sass
function styles() {
    return gulp.src('./src/styles/*.scss') //Local de origem - antes add 'Gulp'
        .pipe(sass({ outputStyle: 'compressed' })) //Function para comprimir
        .pipe(gulp.dest('./dist/css')); //Local de destino - antes add 'Gulp'
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}