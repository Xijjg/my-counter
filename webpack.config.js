const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // 匹配js和jsx文件 
                exclude: '/node_modules/',
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // 匹配所有 .css 文件
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        static: './dist',
        port: 3003,
    },
};