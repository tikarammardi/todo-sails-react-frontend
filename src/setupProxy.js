const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
	// app.use(
	// 	createProxyMiddleware('/api/*', {
	// 		target: 'http://localhost:1337'
	// 	})
	// );

	app.use(
		'/api/*',
		createProxyMiddleware({
			target: 'http://localhost:1337'
		})
	);
};
