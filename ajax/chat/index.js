const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});

const server = http.createServer(app);
const socketIo = io(server);

socketIo.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    socketIo.emit('chat message', socket.handshake.address + ": " + msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});