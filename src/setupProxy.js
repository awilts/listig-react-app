const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const conf = require('./devlocal').conf;
    app.use(
        '/backend',
        createProxyMiddleware({
                target: conf.proxy,
                changeOrigin: true
            },
        ),
    );
};