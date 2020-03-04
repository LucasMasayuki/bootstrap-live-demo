const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './js/index.js',
    },
    module: {
        rules: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                    },
                },
            ],
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                failOnError: true,
            },
        }],
    },
    externals: {
        $: 'jQuery',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]_min.css',
            chunkFilename: 'css/[id].css',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'generated'),
        publicPath: 'generated',
    },
}
