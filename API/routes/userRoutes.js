import {
  signupUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
  getUsers,
} from "../controllers/userController.js";
import {
  signupUserOpts,
  loginUserOpts,
  getUserOpts,
  updateUserOpts,
  deleteUserOpts,
  getUsersOpts,
} from "../options/userRouteOptions.js";
import userAuthAPI from "../../middlewares/userAuthAPI.js";

const userRoutes = async (fastify, options, done) => {
  // Create a new user
  fastify.post("/users", { ...signupUserOpts, handler: signupUser });

  // Login user
  fastify.post("/users/login", { ...loginUserOpts, handler: loginUser });

  // Get user by ID
  fastify.get("/users/:userId", { ...getUserOpts, handler: getUserById });

  // Update user by ID
  fastify.put("/users/:userId", {
    ...updateUserOpts,
    preHandler: userAuthAPI,
    handler: updateUser,
  });

  // Delete user by ID
  fastify.delete("/users/:userId", {
    ...deleteUserOpts,
    preHandler: userAuthAPI,
    handler: deleteUser,
  });

  // Get all users
  fastify.get("/users", { ...getUsersOpts, handler: getUsers });
  done();
};

export default userRoutes;
