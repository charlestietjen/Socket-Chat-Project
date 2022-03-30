const onlineClients = new Set();

const onNewConnection = function(socket){
    const chatMessageHandler = function(msg){
        console.info(msg);
        socket.emit('goblinhours', msg);
    };
    console.info(`Socket ${socket.id} has connected.`);
    onlineClients.add(socket.id);

    socket.on('disconnect', () => {
        onlineClients.delete(socket.id);
        console.info(`Socket ${socket.id} has disconnected.`);
    });

    socket.on('hello', helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));
    socket.emit('welcome', 'Welcome to the chat server!');
    socket.on('goblinhours', chatMessageHandler)
    // socket.on('chatMessage', msg => console.info(msg))
};

module.exports = { onNewConnection };