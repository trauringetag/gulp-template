import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';
import gulpLoadPlugins from 'gulp-load-plugins';

const gp = gulpLoadPlugins();
import browserSync from 'browser-sync';

export default () => {
	return gulp.src(path.img.src)
		.pipe(gp.plumber({
			errorHandler: gp.notify.onError(error => ({
				title: 'IMG',
				message: error.message
			}))
		}))
		.pipe(gp.newer(path.img.dest))
		.pipe(gp.webp())
		.pipe(gulp.dest(path.img.dest))
		.pipe(gulp.src(path.img.src))
		.pipe(gp.newer(path.img.dest))
		.pipe(gp.imagemin(app.imagemin))
		.pipe(gulp.dest(path.img.dest))
		.pipe(browserSync.stream());
};