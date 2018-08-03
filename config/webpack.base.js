const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        build: process.cwd() + '/src/main.js'
    },
    output: {
        path: process.cwd() + '/dist',
        filename: '[name].js',
        chunkFilename:"[name][hash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            "@": process.cwd() + '/src',
        },
        extensions: [".js", ".css", ".jsx"]
    },
    // 分离js
    externals: {
        react: 'React',
        reactDom: 'ReactDOM',
        moment:'moment',
        antd: 'antd',
        echarts:'echarts'
    },
    plugins:[
        // 分类css
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}