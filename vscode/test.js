// let reg = /2.+3/;
// console.log(reg.test('2....3'));
// console.log(reg.test('253'));

// let str = '\\d';
// let reg2 = /^\\d/;
// console.log(reg2.test(str));


let numreg = /^[+-]?(\d|([1-9]\d))(.\d+)?$/;
console.log(numreg.test('0.9'));


let url = '/a/:aId/b/:bId'.replace(/:([^/]+)/g, (...args) => {
    // console.log(args);
    return '([^/]+)';
});

let reg4 = '/a/1/b/3'.match(new RegExp(url))
console.log(reg4);