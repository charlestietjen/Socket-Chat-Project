const onlineClients = new Set();

const onNewWebsocketConnection = function(socket){
    console.info(`Socket ${socket.id} has connected.`);
    onlineClients.add(socket.id);

    socket.on('disconnect', () => {
        onlineClients.delete(socket.id);
        console.info(`Socket ${socket.id} has disconnected.`);
    });

    socket.on('hello', helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));
    socket.emit('welcome', 'Welcome to the chat server!');
};

module.exports = onNewWebsocketConnection;