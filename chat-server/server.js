const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config()
const { onNewConnection } = require('./controllers/');

const startServer = function() {
    // initialize express, create an http server and wrap the express app, bind socket.io to the server
    const app = express();
    const PORT = process.env.PORT || 3001;
    const origin = process.env.ORIGIN || "http://localhost:3000"
    // app.use(cors());
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: origin
        }
    });
    
    io.on('connection', onNewConnection);
    // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chat-server-db', () => {
    //     console.log('Database connected')
    // })
    httpServer.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
};

startServer();