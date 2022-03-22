const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

let soc = require("socket.io")(app.listen(9000), {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
soc.on("connection", (socket) => {
  socket.emit("messageFromServer", { okay: "mama" },console.log(socket.id));
  socket.on("messageToServer", (msg,ack) => {
    console.log('message is: ',msg);
    ack(200);

  });
});
