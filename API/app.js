import fastify from "fastify";
import cors from "@fastify/cors";
import connectDB from "./db.js"; 

const app = fastify({ logger: true });


app.register(cors, {
  origin: "*", 
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

connectDB(); 

export default app;