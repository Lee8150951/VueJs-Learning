/* 开发环境 */
// 使用webpack-merge进行合并（需要下载）
const path = require('path')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 使用webpack-merge打包导出
module.exports = WebpackMerge(baseConfig, {
    devServer: {
        // 当前服务文件夹
        contentBase: path.join(__dirname, 'dist'),
        // 配置实时监听
        inline: true
    }
})