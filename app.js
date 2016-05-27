/**
 * Created by kej on 23/05/2016.
 */
var express = require("express");
var app = express();
app.use(express.static(__dirname));
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendfile('index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

var id = 0;
var tanks = [];
io.on('connection', function(socket){
    socket.on('player_created', function (data) {
        id++;
        console.log("New player: ", data.x+"-"+data.y);
        socket.emit('player_id',{id:id, tanks:tanks});
        socket.broadcast.emit('new_player_connected',{id:id,x:data.x,y:data.y}); //gui thong diep cho tat ca cac client khac tru chinh no
        tanks.push({id:id, x:data.x, y:data.y});
    });
    socket.on('player_update', function (data) {
        // for(var i =0; i < tanks.length; i++){
        //     if (tanks[i].id == data.id){
        //         tanks[i].x = data.x;
        //         tanks[i].y = data.y;
        socket.broadcast.emit('enemy_update', data);
        console.log(data.id);
            //     break;
            // }

    })
});