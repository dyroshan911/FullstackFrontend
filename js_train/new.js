// function Base(text) {
//     let obj = {};
//     obj.__proto__ = Base.prototype;
//     obj.text = text;
//     return obj;
// }

// Base.prototype.hello = function() {
//     console.log(this.text)
// }

// let a = Base('hahah');
// a.hello()

// let aa = Base('aaa');
// aa.hello()

// aa = true;

// console.log(Object.prototype.toString.call(aa));
// console.log.bind(null, 'hahaha')('111');
const debug = console.log.bind(null, '__my__log__:');
debug('test')

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    debug(this.name);
}


function myNew( inClass, ...args ) {
    let obj = {};
    obj.__proto__ = inClass.prototype;
    inClass.apply(obj, args);
    return obj;
}

let bb = myNew(Person, 'jack');
bb.sayHello();