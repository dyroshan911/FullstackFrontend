
let middleware = [(ctx, next)=> {
    console.log(1);
    next();
    console.log(2);
},(ctx, next)=> {
    console.log(3);
    next();
    console.log(4);
},(ctx, next)=> {
    console.log(5);
    next();
    console.log(6);
}];

let ctx = {
    req: '',
    res: ''
}
function dispatch(idx) {
    if (middleware[idx]) {
        middleware[idx](ctx, () => dispatch(idx + 1));
    }
    
}
dispatch(0);


let fn = middleware.reduceRight((val, item) => {
    return item.bind(null, ctx, val);
}, (function () { }))
fn();