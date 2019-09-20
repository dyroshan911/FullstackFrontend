// // process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// var arr = [];
// process.stdin.on('data', function (data) {
//     console.log(data);
//     var number = data.slice(0, -1);
//     if (number == 'end') {
//         process.stdin.emit('end');
//     } else {
//         arr.push(number);
//     }
// });
// process.stdin.on('end', function () {
//     console.log(arr);
// });

// return;
let net = require('net');

let socket = new net.Socket();
socket.connect(8009, 'localhost', function() {
    process.stdin.on('data', function (data) {
        socket.write(data);
    })
});
socket.setEncoding('utf8')
socket.on('data', function(data) {
    console.log(data);
});

// setTimeout(() => {
//     /* 5秒后关闭服务器的连接 */
//     socket.end();
// }, 5 * 1000);