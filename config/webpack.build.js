const path = require('path')
// 合并对象
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = merge(base, {
    mode: 'production',
    devtool: "source-map",
    
})