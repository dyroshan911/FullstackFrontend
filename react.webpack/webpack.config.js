const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        //noParse: ['xxxx'] //设置不需要递归解析的模块
        rules:[
            {
                test:/\.jsx?$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/env', '@babel/react']//
                        }
                    }
                ],
                include:path.resolve('./src'),
                exclude: /node_modules/ 
            }
        ]
    },
    resolve: {
        // alias :{
        //     //指定别名
        //     react: path.resolve('./cjs/react.production.min.js')
        // },
        modules: [path.resolve('node_modules'), path.resolve('lib')],
        //extentions:['.js', '.json'],
        mainFields:['main', 'browser', 'node'],//指定node_modules的中package的入口路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'webpack-2',
            hash: true
        }),
        new webpack.DllReferencePlugin({ //引用动态链接库
            manifest: path.join(__dirname, 'dist', 'manifest.json')
        })
    ]
}