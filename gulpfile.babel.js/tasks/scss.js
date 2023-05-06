import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';
import gulpLoadPlugins from 'gulp-load-plugins';

const gp = gulpLoadPlugins();
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);

export default () => {
	return gulp.src(path.scss.src, { sourcemaps: app.isDevelopment })
		.pipe(gp.plumber({
			errorHandler: gp.notify.onError(error => ({
				title: 'SCSS',
				message: error.message
			}))
		}))
		.pipe(gp.sassGlob())
		.pipe(sass())
		.pipe(gp.webpCss())
		.pipe(gp.autoprefixer())
		.pipe(gp.shorthand())
		.pipe(gp.groupCssMediaQueries())
		.pipe(gp.size({ title: '.css' }))
		.pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDevelopment }))
		.pipe(gp.rename({ suffix: '.min' }))
		.pipe(gp.csso())
		.pipe(gp.size({ title: '.min.css' }))
		.pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDevelopment }))
		.pipe(browserSync.stream());
};