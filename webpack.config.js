const path = require('path');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new DynamicCdnWebpackPlugin()
    ]
};
