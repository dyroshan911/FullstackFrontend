const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },
    devtool:'source-map',
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env',  '@babel/react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                ],
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    // devServer: {
    //     contentBase: './dist',
    //     host: 'localhost',
    //     port: 8002,
    //     compress: true,
    // },
    resolve: {
        extensions: ['.js', '.jsx','.json'],
    },
}