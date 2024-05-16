import UserService from "../../API/services/userService.js";
import userAuthSocket from "../../middlewares/userAuthSocket.js";

async function say_hi(ws, data) {
  ws.send(JSON.stringify({ event: "say-hiSuccess", data: "Hi!" }));
}
async function signupUser(ws, data) {
  try {
    if (!data.name || !data.email || !data.password) {
      ws.send(
        JSON.stringify({
          event: "createUserError",
          error: "Missing required fields",
        })
      );
      return;
    }
    const newUser = await UserService.signupUser(data);
    ws.send(JSON.stringify({ event: "createUserSuccess", data: newUser }));
  } catch (error) {
    ws.send(JSON.stringify({ event: "createUserError", error: error.message }));
  }
}

async function loginUser(ws, data) {
  try {
    if (!data.email || !data.password) {
      ws.send(
        JSON.stringify({
          event: "loginUserError",
          error: "Missing required fields",
        })
      );
      return;
    }
    const newUser = await UserService.loginUser(data.email, data.password);
    ws.send(JSON.stringify({ event: "loginUserSuccess", data: newUser }));
  } catch (error) {
    ws.send(JSON.stringify({ event: "loginUserError", error: error.message }));
  }
}

async function getUser(ws, data) {
  try {
    if (!data.userId) {
      ws.send(
        JSON.stringify({
          event: "getUserError",
          error: "Missing required fields",
        })
      );
      return;
    }
    const user = await UserService.getUserById(data.userId);
    ws.send(JSON.stringify({ event: "getUserSuccess", data: user }));
  } catch (error) {
    ws.send(JSON.stringify({ event: "getUserError", error: error.message }));
  }
}

async function updateUser(ws, data) {
  try {
    const authenticatedUser = await userAuthSocket(ws, data.token, data.userId);

    const { userId, ...userData } = data;
    const updatedUser = await UserService.updateUser(userId, userData);
    ws.send(JSON.stringify({ event: "updateUserSuccess", data: updatedUser }));
  } catch (error) {
    ws.send(JSON.stringify({ event: "updateUserError", error: error.message }));
  }
}

async function deleteUser(ws, data) {
  try {
    const authenticatedUser = await userAuthSocket(ws, data.token, data.userId);

    await UserService.deleteUser(data.userId);
    ws.send(JSON.stringify({ event: "deleteUserSuccess" }));
  } catch (error) {
    ws.send(JSON.stringify({ event: "deleteUserError", error: error.message }));
  }
}

async function getUsers(ws, _) {
  try {
    const users = await UserService.getUsers();
    ws.send(JSON.stringify({ event: "getUsersSuccess", data: users }));
  } catch (error) {
    ws.send(JSON.stringify({ event: "getUsersError", error: error.message }));
  }
}

export default {
  say_hi,
  signupUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
};
