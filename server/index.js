const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = new http.Server(app);
const socket = io(server);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

socket.on("connection", function (socket) {
  console.log("a user connected");
});

server.listen(3000, function () {
  console.log("listening on *: 4200");
});
