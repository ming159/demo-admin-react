const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/apiLocal',{
            target: 'http://127.0.0.1:8888', //  xx
            changeOrigin: true,
            pathRewrite: {
                '^/apiLocal': '/apiLocal'
            }
        })
    );
    app.use( 
        '/sugrec',
         createProxyMiddleware({
            target: 'https://www.baidu.com',
            changeOrigin: true,
            secure: true,
            pathRewrite: {
                '^/sugrec': '/sugrec'
            }
        })
    );
}