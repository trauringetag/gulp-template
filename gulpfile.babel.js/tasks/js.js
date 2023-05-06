import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';
import gulpLoadPlugins from 'gulp-load-plugins';

const gp = gulpLoadPlugins();
import webpackStream from 'webpack-stream';
import browserSync from 'browser-sync';

export default () => {
	return gulp.src(path.js.src, { sourcemaps: app.isDevelopment })
		.pipe(gp.plumber({
			errorHandler: gp.notify.onError(error => ({
				title: 'JS',
				message: error.message
			}))
		}))
		.pipe(gp.babel())
		.pipe(webpackStream(app.webpack))
		.pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDevelopment }))
		.pipe(browserSync.stream());
};