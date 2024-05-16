import { WebSocketServer } from "ws";
import app from "../API/app.js";

const wss = new WebSocketServer({ server: app.server });

wss.on("connection", function connection(ws) {
  ws.send("connected");
  
});

export default app;
