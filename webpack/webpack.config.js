const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const StyleLoader = require('style-loader');


module.exports = {
    entry :{
        main : './src/index.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },{
                test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
                loader: {
                    loader : 'url-loader',
                    options: {
                        limit : 5 * 1024,
                        outputPath: 'asset/'
                    }
                }
            },{
                test:/\.(html|htm|ejs)/,
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
        })
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8002,
        compress: true,
    }
        
}