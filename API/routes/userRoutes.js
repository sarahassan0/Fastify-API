import { signupUser } from "../controllers/userController.js"; 
import { signupUserOpts } from "../options/userRouteOptions.js"; 

const userRoutes = async (fastify, options, done) => {

  // Create a new user
  fastify.post("/users", { ...signupUserOpts, handler: signupUser });

  done();
};

export default userRoutes;
