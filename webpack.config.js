const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './app/public/assets/js/main.js',
        user: './app/public/assets/js/user.js',
        home: './app/public/assets/js/home.js',
        article: './app/public/assets/js/article.js',
        category: './app/public/assets/js/category.js',
        payment: './app/public/assets/js/payment.js',
        styles: [
            './app/public/assets/css/style.css',
            './app/public/assets/css/hdn-sign.css',
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'app/public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
    ],
};