const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config()
const { onNewWebsocketConnection } = require('./controllers/');

const startServer = function() {
    // initialize express, create an http server and wrap the express app, bind socket.io to the server
    const app = express();
    const PORT = process.env.PORT || 3001;
    const server = http.createServer(app);
    const io = socketio(server);

    app.use(cors({
        origin: 'http://localhost:3000/',
        optionsSuccessStatus: 200
    }));
    io.on('connection', onNewWebsocketConnection);
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chat-server-db', () => {
        console.log('Database connected')
    })
    server.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    })
};

startServer();