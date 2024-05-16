import { signupUser, loginUser, getUserById } from "../controllers/userController.js"; 
import { signupUserOpts, loginUserOpts, getUserOpts } from "../options/userRouteOptions.js"; 

const userRoutes = async (fastify, options, done) => {
  // Create a new user
  fastify.post("/users", { ...signupUserOpts, handler: signupUser });

  // Login user
  fastify.post("/users/login", { ...loginUserOpts, handler: loginUser });

  // Get user by ID
  fastify.get("/users/:userId", { ...getUserOpts, handler: getUserById });

  done();
};

export default userRoutes;
