/* 聊天室,可以设置昵称，可以广播 */
const net = require('net');

let clients = {};

const server = net.createServer({}, (socket) => {

    let username = '';
    socket.setEncoding('utf8');

    server.getConnections((_, number) => {
        socket.write(`welcome total:${number}\r\n`);
        socket.write('pleaseinput your name\r\n');
    })

    socket.on('data', (data) => {
        console.log(data);
        data = data.replace(/\r\n/, '');
        if (!username) {
            username = data;
            clients[username] = socket;
            broadcast(`welcome ${username} \r\n`)
        } else {
            const msg = `${username}:${data}\r\n`;
            broadcast(msg);
        }
    });
    socket.on('end', ()=> {
        socket.destroy();
        if(username) {
            delete clients[username];
            broadcast(`${username} left\r\n`)
        }
    })
});

const broadcast = (msg) => {
    for(let key in clients) {
        clients[key].write(msg);
    }
}

server.listen(8009, function(){
    console.log('聊天室已经启动');
})