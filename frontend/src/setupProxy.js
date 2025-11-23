const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://194.163.173.179:3300',
            changeOrigin: true,
        })
    );
};
