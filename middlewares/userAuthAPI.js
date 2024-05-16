import jwt from "jsonwebtoken";
import User from "../API/models/User.js";
import dotenv from "dotenv";

dotenv.config();

const userAuthAPI = async (req, reply, done) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      reply.code(401).send({ error: "Unauthorized: Missing token" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const user = await User.findById(userId);

    if (!user) {
      reply.code(401).send({ error: "Unauthorized: Invalid token" });
      return;
    }
    
    done();
  } catch (error) {
    reply.code(401).send({ error: "Unauthorized: Invalid token" });
  }
};
export default userAuthAPI;
