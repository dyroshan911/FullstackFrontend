//当客户端访问服务器的时候，服务器会发送一个文件给客户端

let net = require('net');
let rs = require('fs').createReadStream();

net.createServer(function(socket) {
    rs.on('data', function(data) {
        let flag = socket.write(data); //可写是否已经满了
        console.log('flag=', flag);
        console.log('缓冲区字节数=', socket.bufferSize)
    })

    socket.on('drain', function(){
        
    })
})