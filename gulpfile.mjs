// Importing modules using ES Module syntax
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import open from 'gulp-open';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// The rest of your gulpfile.mjs remains the same
const Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/now-ui-kit.scss',
  SCSS: './assets/scss/**/**'
};

// Dynamically import gulp-autoprefixer
const autoprefixer = () => import('gulp-autoprefixer').then(module => module.default);

// Compile SCSS task
export const compileScss = async () => {
  const autoprefixerModule = await autoprefixer();
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixerModule())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
};

// Watch task
export function watch() {
  gulp.watch(Paths.SCSS, compileScss);
}

// Open task
export function openApp() {
  return gulp.src('index.html')
    .pipe(open());
}

// Open-app task combining open and watch
export const openAppTask = gulp.series(openApp, watch);

// Default task for compatibility
export default openAppTask;

