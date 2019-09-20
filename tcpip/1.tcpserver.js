let net = require('net'); //tcp模块， node里面的核心模块，无需安装使用

/* socket其实是一个可读可写流 */
/* 当客户端链接上来的时候会执行对应的回调函数 */
let server = net.createServer({}, function(socket) {
    server.getConnections((err, count) => {
        server.maxConnections = 2; //最多允许连接数量
        console.log(`有一个新的连接，现在的客户端总数量是${count}个`)
    });
    console.log('客户端已经链接');
    console.log(socket.address());
    socket.setEncoding('utf8')
    /* 收到消息的时的回调函数 */
    socket.on('data', function(data) {
        console.log('接收到客户端发过来的数据: %s %s', data, 1);
    });
    /* 客户端关闭连接 */
    socket.on('end', function(){
        console.log('end');
    });
    /* 连接正式关闭 */
    socket.on('close', function(/* hasError */) {
        console.log('客户端真正关闭');
    });
    socket.on('error', function(err){
        console.log(err);
    });
    /* 执行了close，不再接受新的连接，但是已经开始的连接不会因此断掉
     * 当所有的连接关闭后，将关闭服务器
    **/
    //socket.close()
});


server.on('error', function(err){
    console.log(err);
});

server.listen(8009, function(socket) {
    console.log(server.address());
    console.log('服务器启动成功');
})