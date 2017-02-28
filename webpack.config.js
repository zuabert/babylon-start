var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './source/bootstrap.ts'
        ]
    },
    output: {
        path: '/build',
        filename: 'game.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ],
    module: {
        loaders: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, 'source'),
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    devServer: {
        contentBase: '/build',
        hot: true,
        inline: true
    }
}