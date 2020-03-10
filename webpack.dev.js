const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const WebpackErrorNotificationPlugin = require('webpack-error-notification')
const path = require('path')

module.exports = merge(common, {
    optimization: {
        splitChunks: {
                cacheGroups: {
                    vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        sideEffects: false,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new WebpackErrorNotificationPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
});