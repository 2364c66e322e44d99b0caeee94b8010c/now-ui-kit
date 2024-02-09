import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import open from 'gulp-open';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);

const Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/now-ui-kit.scss',
  SCSS: './assets/scss/**/**'
};

const autoprefixer = () => import('gulp-autoprefixer').then(module => module.default);

// Modified compileScss task without sourcemaps.init()
export const compileScss = async () => {
  const autoprefixerModule = await autoprefixer();
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixerModule())
    .pipe(gulp.dest(Paths.CSS));
};

// New compileScssMin task
export const compileScssMin = async () => {
  const autoprefixerModule = await autoprefixer();
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixerModule())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.CSS));
};

export function watch() {
  gulp.watch(Paths.SCSS, compileScss);
  gulp.watch(Paths.SCSS, compileScssMin);
}

export function openApp() {
  return gulp.src('index.html')
    .pipe(open());
}

export const openAppTask = gulp.series(openApp, watch);

export default openAppTask;
