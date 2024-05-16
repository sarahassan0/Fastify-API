async function notFoundEventHandler(ws) {
  ws.send(
    JSON.stringify({
      message:
        "Event not found in the server. Please check the valid events below.",
      validEvents: [
        {
          description: "Says hi to the client",
          request: {
            event: "say_hi",
            data: {},
          },
        },
        {
          description: "Signup a new user",
          request: {
            event: "signupUser",
            data: {
              name: "string",
              email: "string",
              password: "string",
              phone: "string",
            },
          },
        },
        {
          description: "Login user",
          request: {
            event: "loginUser",
            data: {
              email: "string",
              password: "string",
            },
          },
        },
        {
          description: "Gets a user by id",
          request: {
            event: "getUser",
            data: {
              userId: "string",
            },
          },
        },
        {
          description: "Updates a user",
          request: {
            event: "updateUser",
            data: {
              userId: "string",
              name: "string",
              email: "string",
              password: "string",
              token: "string",
            },
          },
        },
        {
          description: "Deletes a user",
          request: {
            event: "deleteUser",
            data: {
              userId: "string",
              token: "string",
            },
          },
        },
        {
          description: "Gets all users",
          request: {
            event: "getUsers",
            data: {},
          },
        },
      ],
    })
  );
}

export default notFoundEventHandler;
