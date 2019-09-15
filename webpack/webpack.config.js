const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let cssExtract = new ExtractTextWebpackPlugin('css/css.css');
let lessExtract = new ExtractTextWebpackPlugin('css/less.css');
let sassExtract = new ExtractTextWebpackPlugin('css/sass.css');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: cssExtract.extract({
                    use:['css-loader', 'postcss-loader']
                })
                //loader: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                loader: sassExtract.extract({
                    use: ['css-loader', 'sass-loader']
                })
                //loader: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.less$/,
                loader: lessExtract.extract({
                    use:['css-loader', 'less-loader']
                })
                // loader: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,
                        outputPath: 'asset/'
                    }
                }
            }, {
                test: /\.(html|htm|ejs)/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'hello-webpack',
            hash: true,
        }),
        cssExtract,
        lessExtract,
        sassExtract
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8002,
        compress: true,
    }

}