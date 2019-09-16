/**
 * immutable 可以基于共享部分对象来创建新的对象
 */
let {Map} = require('immutable');
let m1 = Map({a:1, b:2, c:3});
console.log(m1.get('a'));
let m2 = m1.set('a','11');
console.log(m2.get('a'));
console.log(m1.get('a'));

//seamless-immutable