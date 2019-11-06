// require('./index.css');
// require('./less.less');
// require('./sass.scss');
// document.getElementById('app').innerHTML = "hello";
// console.log('aaaa');    

// let str = 'adfa222sdfk3434safd32324lll';
// let str2 = 'adfa222sdfk3434safd32324lll';
// let reg = /\d+/g;
// let result = reg.exec(str);
/* console.log(reg.exec(str));
console.log(reg.lastIndex);
reg.exec(str);
console.log(reg.lastIndex);
reg.exec(str2);
console.log(reg.lastIndex); */
// aa;

// let url = '/domain/:domainId/link/:linkId';
// // /:([^\/]+)/g
// let newurl = url.replace(/:([^\/]+)/g, (...[, $1])=>{
//     console.log($1)
//     return '([^\/]+)';
// })
// console.log(newurl);


// let urls = '/domain/123123/link/787787787';
// let newRegExp = new RegExp(newurl);
// let matchers = urls.match(newRegExp)
// console.log(matchers);


// let aa;


var sentence = "this is a pen ,this is a pencil , what's your name";
// var sentence = sentence.split('').sort((a,b)=> a.localeCompare(b)).join('');
// console.log(sentence);
// let flag = false;
// for(let i = sentence.length; i > 0; i--) {
//     sentence.replace(new RegExp('(\\w)\\1{'+ (i - 1) + '}', 'g') , (...[$0])=>{
//         console.log($0);
//         flag = true;
//     })
//     if(flag) break;
// }

sentence = sentence.replace(/\b([a-zA-Z])[a-zA-Z]*\b/g, (...[$1, $2])=> {
    //console.log(args);
    var aa = $2.toUpperCase() + $1.substring(1);
    return aa;
})

console.log(sentence);

let aa;
