import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';
import gulpLoadPlugins from 'gulp-load-plugins';

const gp = gulpLoadPlugins();
import browserSync from 'browser-sync';

export default () => {
	return gulp.src(path.fonts.src)
		.pipe(gp.plumber({
			errorHandler: gp.notify.onError(error => ({
				title: 'FONTS',
				message: error.message
			}))
		}))
		.pipe(gp.newer(path.fonts.dest))
		.pipe(gp.fonterFix(app.fonter))
		.pipe(gulp.dest(path.fonts.dest))
		.pipe(gp.ttf2woff2())
		.pipe(gulp.dest(path.fonts.dest))
		.pipe(browserSync.stream());
};