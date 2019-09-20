let net = require('net'); //tcp模块， node里面的核心模块，无需安装使用

let server = net.createServer({}, function(socket) {
    console.log('客户端已经链接');
    console.log(socket.address());
    socket.setEncoding('utf8')
    socket.on('data', function(data) {
        console.log('接收到客户端发过来的数据: %s %s', data, 1);
    })
    socket.on('end', function(){
        console.log('end');
    })
    socket.on('error', function(){
        console.log('end');
    })
});

server.listen(8009, function(socket) {
    console.log(server.address());
    console.log('服务器启动成功');
})