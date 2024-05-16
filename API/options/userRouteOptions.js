const name = { type: "string", minLength: 3 };
const email = { type: "string", format: "email" };
const phone = { type: "string", minLength: 11, maxLength: 15 };
const password = { type: "string", minLength: 4 };


const User = {
  type: "object",
  properties: {
    _id: { type: "string" },
    name,
    email,
    phone,
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
        name,
        email,
        password,
        phone,
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


const loginUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email,
        password,
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          user: User,
          token: { type: "string" },
        },
      },
      401: {
        type: "object",
        properties: {
          error: { type: "string" },
        },
      },
    },
  },
};

const getUserOpts = {
  schema: {
    params: {
      type: "object",
      properties: {
        userId: { type: "string" },
      },
    },
    response: {
      200: User,
      404: {
        type: "object",
        properties: {
          message: { type: "string" },
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

export { signupUserOpts, loginUserOpts, getUserOpts};
