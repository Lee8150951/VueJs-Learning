const path = require('path')
// 插件的使用
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 解决版本冲突导致[object, Object]的问题
                            esModule: false,
                            // 图片小于limit时，会将图片编译成base64字符串
                            // 图片大于limit时，使用file-loader进行加载
                            limit: 1300,
                            // 避免名字过长
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                // 将项目打包成es5适配更多浏览器
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                // 配置vue-loader
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    // 在此处配置有关vue的编译问题
    resolve: {
        alias: {
            // 以后在代码里面使用了import后会先找vue是否指向了一个具体的文件夹
            // 指定vue下面的vue.esm.js文件执行，而不是默认的执行方式
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 使用插件
    plugins: [
        // 版权插件，在bundle.js上面展示
        new webpack.BannerPlugin('最终版权归Jacob所有'),
        // 打包html插件
        new HtmlWebpackPlugin({
            // 传入模板为index.html
            template: 'index.html'
        }),
        // 丑化压缩js插件
        new UglifyJsPlugin()
    ]
}