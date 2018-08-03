const path = require('path')
const webpack = require('webpack')
// 提取共有样式 合并
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = merge(base,{
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        // 热更新依赖
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: '.',
        inline: true,
        hot: true,
        historyApiFallback: true
    },
})