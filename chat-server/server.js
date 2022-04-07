const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { onNewConnection, chatMessageHandler } = require('./controllers/');
const routes = require('./routes/');
const path = require('path');

const startServer = function() {
    // initialize express, create an http server and wrap the express app, bind socket.io to the server
    const app = express();
    const PORT = process.env.PORT || 8080;
    const origin = process.env.ORIGIN || "http://localhost:3000"
    // app.use(cors());
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: origin
        }
    });

    io.on('connection', socket => {
        onNewConnection(socket, io)
    });
    // io.on('goblinhours', msg => {
    //     console.log(msg);
    // });
    // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chat-server-db', () => {
    //     console.log('Database connected')
    // })
    httpServer.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
    // middleware
    app.use('/api', routes);
    let root = path.join(__dirname, 'build/')
    app.use(express.static(root))
    app.use(function(req, res, next) {
    if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
        res.sendFile('index.html', { root })
    } else next()
    })
};    

startServer();