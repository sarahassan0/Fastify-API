import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const UserService = {
  async signupUser(userData) {
    try {
      const newUser = new User(userData);
      await newUser.save();
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "10 days",
      });
      return { user: newUser, token };
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  },
};

export default UserService;
