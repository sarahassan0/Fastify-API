import userEvents from "./../events/userEvents.js";

export default async function (ws, message) {
  const { event, data } = JSON.parse(message);
  const events = {
    signupUser: userEvents.signupUser,
    loginUser: userEvents.loginUser,
    getUser: userEvents.getUser,
  };
  if (!events[event]) {
   console.log("Event not found");
    return;
  }
  await events[event](ws, data);
}
