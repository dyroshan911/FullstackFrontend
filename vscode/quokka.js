let {inspect} = require('util');
var a = 0;
var path = 'sdfsdf/:aa/:bb/sdfsdf'
var paramsNames = [];
path = path.replace(/:([^\/]+)/g, function (match,pos,orginText) {
    console.log(inspect(arguments))
    console.log(match)
    console.log(pos)
    console.log(orginText)
    paramsNames.push(arguments[1]);
    return '([^\/]+)';
});
console.log(path)