const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
module.exports = {
    entry:'./src/index.js',  //入口文件
    mode:'production', //开发模式
    output:{
        filename:'main.[hash:8].js',
        //设置打包的路径
        path:path.resolve(__dirname,'./dist')  
    },
    /* 使用插件 */
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            //打包后文件的名字
            filename:'index.html',
            //是否压缩
            minify:true
        }),
        new MiniCssExtractPlugin({
            //打包后CSS文件名字
            filename:'main.[hash:8].css',

        })
    ],
    
    module: {
        rules: [{
            test: /\.(css|less)$/, //基于正则匹配：哪些文件是我们需要处理的
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', 
                'css-loader', //处理特殊语法
                'postcss-loader', //配合autoprefixer&browserslist给CSS3属性设置前缀「兼容」
                'less-loader' //把less编译为css
            ]
        },{
            test:/\.js$/,
            use:[
                "babel-loader"
            ],
            exclude:/node_modules/
        }]
    },
    
    devServer: {
        host: '127.0.0.1',
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        proxy: {
            "/jian": {
                target: "https://www.jianshu.com/asimov",
                changeOrigin: true,
                ws: true,
                pathRewrite: { "^/jian": "" }
            },
            "/zhi": {
                target: "https://news-at.zhihu.com/api/4",
                changeOrigin: true,
                ws: true,
                pathRewrite: { "^/zhi": "" }
            }
        }
    }
}