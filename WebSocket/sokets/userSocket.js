import userEvents from "./../events/userEvents.js";

export default async function (ws, message) {
  const { event, data } = JSON.parse(message);
  const events = {
    signupUser: userEvents.signupUser
  };
  if (!events[event]) {
   console.log("Event not found");
    return;
  }
  await events[event](ws, data);
}
