const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.reddit.com/'
    })
  );

  app.use(
    '/image',
    createProxyMiddleware({
      target: 'https://v.redd.it/',
      changeOrigin: true,
    })
  );
};