const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './js/Index.js',
        cover: './js/components/Cover.js',
        group_box: './js/components/GroupBox.js',
        introduction_section: './js/components/IntroductionSection.js',
        navbar: './js/components/Navbar.js',
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [
                 {
                    loader: 'file-loader',
                    options: {
                        outputPath: path.resolve(__dirname, 'dist'),
                    },
                },
            ],
        },
        {
            test: /\.html$/,
            use: [
                'html-loader',
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        {
            test: /\.(sass|scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                'sass-loader',
            ],
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
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new MiniCssExtractPlugin({
            allChunks: true,
            filename: "css/[name].css",
            chunkFilename: "css/[name].css",
            path: path.resolve(__dirname, 'js/dist/css'),
        }),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename:"templates/cover.html",
            template: "templates/cover.html"
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename:"templates/group_box.html",
            template: "templates/group_box.html"
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename:"templates/introduction_section.html",
            template: "templates/introduction_section.html"
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename:"templates/navbar.html",
            template: "templates/navbar.html"
        }),
    ],
}
