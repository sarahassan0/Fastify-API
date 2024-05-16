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

export const loginUser = async (req, reply) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await UserService.loginUser(email, password);
    reply.code(200).send({ user, token });
  } catch (error) {
    reply.code(401).send({ error: error.message });
  }
};

export const getUserById = async (req, reply) => {
  try {
    const { userId } = req.params;
    const user = await UserService.getUserById(userId);
    if (!user) {
      reply.code(404).send({ message: "User not found" });
    } else {
      reply.code(200).send(user);
    }
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const updateUser = async (req, reply) => {
  try {
    const { userId } = req.params;
    const { body } = req;
    const updatedUser = await UserService.updateUser(userId, body);
    reply.code(200).send(updatedUser);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const deleteUser = async (req, reply) => {
  try {
    const { userId } = req.params;
    await UserService.deleteUser(userId);
    reply.code(200).send({ message: "User deleted" });
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};

export const getUsers = async (req, reply) => {
  try {
    const users = await UserService.getUsers();
    reply.code(200).send(users);
  } catch (error) {
    reply.code(500).send({ error: error.message });
  }
};
