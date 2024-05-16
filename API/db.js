import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/fastify-app");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
