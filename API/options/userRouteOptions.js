const User = {
  type: "object",
  properties: {
    _id: { type: "string" },
    name: { type: "string", minLength: 3 },
    email: { type: "string", format: "email" },
    phone: { type: "string", minLength: 10, maxLength: 15 },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
};

const signupUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "email", "password"],
      properties: {
        name: { type: "string", minLength: 3 },
        email: { type: "string", format: "email" },
        password: { type: "string", minLength: 4 },
        phone: { type: "string", minLength: 10, maxLength: 15 },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          user: User,
          token: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          error: { type: "string" },
        },
      },
    },
  },
};

export { signupUserOpts };
