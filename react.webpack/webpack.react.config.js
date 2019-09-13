const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_dll.js', //链接库的文件名称
        library: '_dll_[name]' //全局变量的名字，导出变量的名字，其他模块会从此变量上获取到里面的模块
    },
    plugins:[
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, 'dist', 'manifest.json') //manifest 表示一个描述文件
        })
    ]
}