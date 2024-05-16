import fastify from "fastify";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import connectDB from "./db.js"; 
import userRoutes from "./routes/userRoutes.js";

const app = fastify({ logger: true });


app.register(cors, {
  origin: "*", 
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

app.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "Fastify App Documentation", version: "1.0.0" },
  },
});

connectDB(); 
app.register(userRoutes);

export default app;