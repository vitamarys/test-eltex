import gulp from "gulp";
import gulpIf from "gulp-if";
import webp from "gulp-webp";
import sass from "gulp-sass";
import * as dartSass from "sass"; 
import cleanCSS from "gulp-clean-css"; // Мініфікація CSS
import autoprefixer from "gulp-autoprefixer"; // Автопрефікси
import browsersync from "browser-sync"; // Для live-reload
import replace from "gulp-replace";
import terser from "gulp-terser"; 

const sassCompiler = sass(dartSass);
//  Задача для копіювання HTML
export const copyHtml = () => {
  return gulp.src('src/*.html')
    .pipe(replace(/\.(jpg|png)/g, '.webp')) // Змінюємо всі згадки .jpg/.png на .webp
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());
};
// Задача для конвертації зображень у WebP
export const convertToWebp = () => {
  return gulp.src('src/images/**/*.{png,jpg,svg}', { encoding: false })
    .pipe(gulpIf(
      (file) => /\.(png|jpg)$/.test(file.extname), // Умова: якщо PNG або JPG
      webp() // Конвертувати у WebP
    ))
    .pipe(gulp.dest('dist/images')); // Копіюємо всі файли у dist/images
};


// Задача для компіляції SCSS
export const compileScss = () => {
  return gulp.src('src/scss/**/styles.scss', { sourcemaps: true })
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 3 versions'], cascade: false }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css', { sourcemaps: '.' }))
    .pipe(browsersync.stream());
};
// Задача для мініфікації JS
export const minifyJs = () => {
  return gulp.src('src/js/**/*.js', { sourcemaps: true })
    .pipe(terser()) // Мініфікація JS
    .pipe(gulp.dest('dist/js', { sourcemaps: '.' }))
    .pipe(browsersync.stream());
};

// Live-reload і watch
export const serve = (done) => {
  browsersync.init({
    server: {
      baseDir: "./dist", // Запуск сервера з dist
    },
    notify: false,
    port: 3000,
  });
  done();
};

export const watchFiles = () => {
  gulp.watch('src/scss/**/*.scss', compileScss);
  gulp.watch('src/images/*.{png,jpg,svg}', convertToWebp);
  gulp.watch('src/*.html', copyHtml);
  gulp.watch('src/js/**/*.js', minifyJs);
};

// Основна задача
export const dev = gulp.series(
  gulp.parallel(copyHtml, compileScss, convertToWebp),
  gulp.parallel(watchFiles, serve)
);