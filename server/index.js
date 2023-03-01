const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = new http.Server(app);
const socket = io(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

socket.on("connection", (socket) => {
  console.log("a user has connected");
});

server.listen(3000, () => {
  console.log("listening on port: 4200");
});
