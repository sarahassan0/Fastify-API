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

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new Error("Invalid email or password");
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return { user, token };
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },

  async getUserById(userId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Failed to get user: ${error.message}`);
    }
  },

  async updateUser(userId, userData) {
    try {
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      if (userData.name) user.name = userData.name;
      if (userData.email) user.email = userData.email;
      if (userData.password) user.password = userData.password;
      if (userData.phone) user.phone = userData.phone;

      const updatedUser = await user.save({ runValidators: true });

      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  },

  async deleteUser(userId) {
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        throw new Error("User not found");
      }
    } catch (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  },
};

export default UserService;
