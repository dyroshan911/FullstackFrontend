// resume pause
let net = require('net');
let path = require('path')
let ws = require('fs').createWriteStream(path.join(__dirname, 'msg.txt'));

let server = net.createServer(function(socket) {
    /* socket.pause();
    setTimeout(() => {
        //默认情况下，当可读流读到末尾的时候，关闭可写流
        socket.pipe(ws, {end: false});
    }, 10 * 1000); */

    /* 设置客户端的超时时间 */
    socket.setTimeout(3*1000);
    socket.on('timeout', function(){
        socket.pipe(ws, {end: false});
    });

    
})

server.listen(8080);