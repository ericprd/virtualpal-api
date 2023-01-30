import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  birthdate: string;
  isVerified: boolean;
  otp: number;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: Number,
    required: true,
  },
});

const User = model<IUser>("user", UserSchema);

export default User;
