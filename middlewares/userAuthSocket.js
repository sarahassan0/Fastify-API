import jwt from "jsonwebtoken";
import User from "../API/models/User.js";
import dotenv from "dotenv";

dotenv.config();

const userAuthSocket = async (ws, token, id) => {
 
  try {
    if (!token || !id) {
      throw new Error("Unauthorized: Missing token or id");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userByToken = await User.findById(decoded.userId);
    console.log(userByToken);

    if (!userByToken._id) {
      throw new Error("Unauthorized: Invalid token");
    }

    if (id && userByToken._id.toString() !== id) {
      throw new Error("Unauthorized: Unauthorized User");
    }

    return;
  } catch (error) {
    ws.send(JSON.stringify({ event: "authError", error: error.message }));
    throw error;
  }
};

export default userAuthSocket;
