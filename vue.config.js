// vue.config.js
module.exports = {
    devServer:{
        //登录接口
        // 解决跨域原理
        // 上面的参数列表中有一个changeOrigin参数, 是一个布尔值, 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,
        proxy:{
            '/login/user':{
                target: 'http://localhost:10086/' , 
                changeOrigin:true,
            },
        },
        disableHostCheck : true,
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
        } else {
        // 为开发环境修改配置...
        }

        
    }
}