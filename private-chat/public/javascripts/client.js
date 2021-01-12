/**
 * Created by LEGEND on 21-01-2017.
 */
var app = angular.module('myApp', []);

/* Controllers */
app.controller('AppCtrl', function ($scope) {

    $scope.users = [];
    $scope.curtrentUser = '';
    $scope.sendData={};

var socket = io();
$scope.sendChat= function(){
    console.log("send message ",$scope.msg);
    $scope.sendData.msg=$scope.msg;
    $scope.sendData.username=$scope.curtrentUser;
    socket.emit('send-msg', $scope.sendData);
    $scope.msg='';
    $scope.sendData={};
};
$scope.joinRoom = function () {
    console.log("joining user: ",$scope.username);
    $scope.curtrentUser = $scope.username;
    $scope.sendData.username=$scope.username;
    $scope.sendData.roomCode=$scope.roomCode;
    if($scope.username!=='' && $scope.roomCode!=='')
    socket.emit('join-user', $scope.sendData);
    else
        alert('please enter correct username or room code');
    $scope.sendData={};
};
    $scope.createRoom = function () {
        console.log("creating room for : ",$scope.newUsername);
        $scope.curtrentUser = $scope.newUsername;
        $scope.sendData.username=$scope.newUsername;
        if($scope.newUsername!=='')
        socket.emit('create-room', $scope.sendData);
        $scope.sendData={};
    };

    socket.on('room-created', function (data) {

        socket.emit('join-user',data);
    });
    
    socket.on('update-chat',function (data) {
        console.log('data', data);
        var user = {};
        user.username = data.username;
        user.msg = data.msg;
        user.date = new Date().getTime();
        user.image = '';
        $scope.users.push(user);
        $scope.$apply();
        console.log("users: ",user);
    });

});