const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/' // 以后任何涉及URL的东西都会拼接这个头
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
            }
        ]
    }
}