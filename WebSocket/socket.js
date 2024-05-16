import { WebSocketServer } from "ws";
import app from "../API/app.js";
import userSocket from "./sokets/userSocket.js";

const wss = new WebSocketServer({ server: app.server });

wss.on("connection", function connection(ws) {
  ws.send("connected");
    ws.on("message", (message) => userSocket(ws, message));
});

export default app;
