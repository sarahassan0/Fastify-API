import {
  signupUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import {
  signupUserOpts,
  loginUserOpts,
  getUserOpts,
  updateUserOpts,
  deleteUserOpts,
} from "../options/userRouteOptions.js";
import userAuth from "../middlewares/userAuth.js"; 

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
    preHandler: userAuth,
    handler: updateUser,
  });

  // Delete user by ID
  fastify.delete("/users/:userId", {
    ...deleteUserOpts,
    preHandler: userAuth,
    handler: deleteUser,
  });

  done();
};

export default userRoutes;
