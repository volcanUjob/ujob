var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);

var methodOverride = require('method-override');
//var app = express();
http.listen(8000);
var io = require('socket.io').listen(http);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride());

app.get('*',function (req, res) {
    console.log("landing page");
    res.sendFile(__dirname +'/public/index.html');
});
var usernames = {};
var rooms = [];
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('create-room', function (data) {
        var new_room = ("" + Math.random()).substring(2, 7);
        rooms.push(new_room);
        data.roomCode = new_room;
        data.msg='New room created, invite frndz using this ID:' + new_room;
        socket.emit('update-chat', data);
        socket.emit('room-created', data);
    });
    socket.on('join-user', function (data) {
        var username = data.username;
        var room = data.roomCode;

        if (rooms.indexOf(room) != -1) {
            socket.username = username;
            socket.room = room;
            usernames[username] = username;
            socket.join(room);
            data.msg='Server >> You are connected.';
            socket.emit('update-chat', data);
            data.msg=username+' has connected';
            socket.broadcast.to(room).emit('update-chat',data);
        } else {
            data.msg='Room code invalid';
            socket.emit('update-chat', data);
        }
    });
    socket.on('send-msg', function (data) {
        io.sockets.in(socket.room).emit('update-chat', data);
    });

    socket.on('disconnect', function () {
        delete usernames[socket.username];
        io.sockets.emit('updateusers', usernames);
        if (socket.username !== undefined) {

            socket.broadcast.emit('update-chat', {msg: socket.username + ' has disconnected'});
            socket.leave(socket.room);
        }
    });
   /* socket.on('chat message', function(msg){
        console.log("server send chat message");
        io.emit('chat message', msg);
        console.log("msg: ",msg);
    });
    */

});
/*http.listen(8080, function(){
    console.log('listening on *:8080');
});*/

console.log('listening on port *:8000');
module.exports = app;