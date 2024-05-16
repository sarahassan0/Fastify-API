import UserService from "../services/userService.js";

export const signupUser = async (req, reply) => {
  try {
    const { body } = req;
    const { user, token } = await UserService.signupUser(body);
    reply.code(201).send({ user, token });
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};