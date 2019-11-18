//let { injectBabelPlugin } = require('react-app-rewired');
const { 
    override, 
    fixBabelImports, 
    addLessLoader,
    addDecoratorsLegacy,
    disableEsLint
} = require('customize-cra');
// const rewireLess  = require('react-app-rewire-less');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
    }),
    addDecoratorsLegacy(),
);
// module.exports = function (config, env) {
//     //执行对config的修改
//     //config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
//     config = rewireLess(config, env);
//     return config;
// } 