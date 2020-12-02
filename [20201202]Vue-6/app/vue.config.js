module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://djhotel.sh-service.cn/',
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/api2': {
                target: 'http://localhost:7777',
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}