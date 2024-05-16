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


export default {
  signupUser
};