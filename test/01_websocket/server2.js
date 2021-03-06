const http = require('http');
const io = require('socket.io');

//普通http服务器
let server = http.createServer();
server.listen(666);

//webSocket服务器
let wsServer = io.listen(server);

wsServer.on('connection', function (sock){
  //sock对象
  setInterval(function (){
    sock.emit('tick', Math.random());
  }, 500);
});
