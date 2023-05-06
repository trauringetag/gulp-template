import gulp from 'gulp';
import path from '../config/path.js';
import app from '../config/app.js';
import gulpLoadPlugins from 'gulp-load-plugins';

const gp = gulpLoadPlugins();
import browserSync from 'browser-sync';

export default () => {
	return gulp.src(path.html.src)
		.pipe(gp.plumber({
			errorHandler: gp.notify.onError(error => ({
				title: 'HTML',
				message: error.message
			}))
		}))
		.pipe(gp.fileInclude())
		.pipe(gp.webpHtml())
		.pipe(gp.size({ title: '.html' }))
		.pipe(gp.htmlmin(app.htmlmin))
		.pipe(gp.size({ title: '.min.html' }))
		.pipe(gulp.dest(path.html.dest))
		.pipe(browserSync.stream());
};