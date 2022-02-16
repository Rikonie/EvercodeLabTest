const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.cryptingup.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/daily_json.js',
        createProxyMiddleware({
            target: 'https://www.cbr-xml-daily.ru/',
            changeOrigin: true,
        })
    );
};