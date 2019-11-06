//parser 方法解析请求对象，其实就是请求信息，然后解析出请求头,返回请求对象
let fs = require('fs');
let { stringDecoder } = require('string_decoder'); //可以保证不乱码
let decoder = new stringDecoder();
function parser(reqStream, requestListener) {
    reqStream.on('readable', function() {
        let buf;
        while(null != (buf = reqStream.read())) {
            let str = decoder.write(buf);
            if(str.match(/\r\n\r\n/)) {
                let values = str.split(/\r\n\r\n/);//split 正则
                let headers = values.shift();
                let body = values.join('\r\n\r\n');
                //readable.unshift
                //Object.assign
            }
        }
    })
}

let rs = fs.createReadStream()