import gulp from 'gulp';
import path from './config/path.js';
import app from './config/app.js';

import clear from './tasks/clear.js';
import fonts from './tasks/fonts.js';
import html from './tasks/html.js';
import img from './tasks/img.js';
import js from './tasks/js.js';
import scss from './tasks/scss.js';
import server from './tasks/server.js';

const watcher = () => {
	gulp.watch([path.html.watch], html);
	gulp.watch([path.scss.watch], scss);
	gulp.watch([path.js.watch], js);
	gulp.watch([path.img.watch], img);
	gulp.watch([path.fonts.watch], fonts);
};

const build = gulp.series(
	clear,
	gulp.parallel(html, scss, js, img, fonts)
);

const dev = gulp.series(
	build,
	gulp.parallel(watcher, server)
);

export { html };
export { scss };
export { js };
export { img };
export { fonts };
export { server };

export default app.isProduction ? build : dev;