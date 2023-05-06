const isProduction = process.argv.includes('--production');
const isDevelopment = !isProduction;

export default {
	isProduction,
	isDevelopment,
	htmlmin: { collapseWhitespace: true },
	webpack: { mode: isProduction ? 'production' : 'development' },
	imagemin: { verbose: true },
	fonter: { formats: ['ttf', 'woff', 'eot', 'svg'] }
};