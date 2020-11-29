module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7777/',
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/api2': {
                target: 'http://baidu.com/',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}