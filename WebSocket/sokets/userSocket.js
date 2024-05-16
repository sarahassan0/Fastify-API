import userEvents from "./../events/userEvents.js";
import notFoundEventHandler from "../utils/NotFoundEventHandler.js";

export default async function (ws, message) {
  const { event, data } = JSON.parse(message);
  const events = {
    say_hi: userEvents.say_hi,
    signupUser: userEvents.signupUser,
    loginUser: userEvents.loginUser,
    getUser: userEvents.getUser,
    updateUser: userEvents.updateUser,
    deleteUser: userEvents.deleteUser,
    getUsers: userEvents.getUsers,
  };
  if (!events[event]) {
    await notFoundEventHandler(ws);
    return;
  }
  await events[event](ws, data);
}
