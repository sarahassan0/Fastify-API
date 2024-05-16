import UserService from "../../API/services/userService.js";

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

export default {
  signupUser,
  loginUser,
  getUser
};