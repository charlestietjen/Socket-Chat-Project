import io from 'socket.io-client';

export const socket = io('http://localhost:8080/');

socket.on('connect', () => socket.emit('hello', `${socket.id} has arrived!`));
socket.on('welcome', msg => {console.log(msg)})
socket.on('chatMessage', msg => {
    console.info(msg);
});

// export default { socket };