const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.reddit.com/'
    })
  );

  app.use(
    'https://v.redd.it/',
    createProxyMiddleware({
      target: 'https://v.redd.it/',
      changeOrigin: true,
    })
  );
};