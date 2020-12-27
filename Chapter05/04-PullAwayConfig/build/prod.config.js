/* 生产环境 */
// 使用webpack-merge进行合并（需要下载）
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 使用webpack-merge打包导出
module.exports = WebpackMerge(baseConfig, {
    plugins: [
        new UglifyJsPlugin()
    ]
})