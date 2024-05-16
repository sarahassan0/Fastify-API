import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, minLength: 3, trim: true, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, minLength: 4, required: true, trim: true },
    phone: { type: String, minLength: 11, maxLength: 15 },
  },
  {
    timestamps: true,
  }
);



userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(
      this.password,
      bcrypt.genSaltSync(15)
    );
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
