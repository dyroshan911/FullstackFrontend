let dgram = require('dgram');
let socket = dgram.createSocket('udp4');

//发消息 send (buffer)
//收消息 bind -> on message