import path from '../config/path.js';
import browserSync from "browser-sync";

export default () => {
	return browserSync.init({
		server: { baseDir: path.root }
	});
};