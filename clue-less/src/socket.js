import io from 'socket.io-client';

var socket

export function init_socket()  {
    socket = io(`http://${window.location.hostname}:5000`, {});
    socket.onAny((event) => {console.log(event)})
    //socket.close() 
}

export function get_socket() {
    return socket
}

export function register_callback(message,cb) {
    socket.on(message,cb)
}

export function join_game(gameId) {
    socket.emit('join_game', { 'room': gameId });
}