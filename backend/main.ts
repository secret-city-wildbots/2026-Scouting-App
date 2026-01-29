import express from "npm:express@5.2.1";
import { Server } from "npm:socket.io@4.8.3";
import http from "node:http";

const PORT = 8000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("./frontend/public"));

io.on("connection", (socket: any) => {
  console.log("a user connected:", socket.id);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});