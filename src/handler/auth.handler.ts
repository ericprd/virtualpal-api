import { Request, Response } from "express";
import User from "../model/user.schema";
import { otpGenerator } from "../utils/otp.handler";

async function register(req: Request, res: Response) {
  const { username, email, password, birthdate } = req.body;

  try {
    const isExist = await User.find({ username, email });

    const otp = otpGenerator();

    console.log(isExist);

    if (isExist)
      throw new Error("Username or email exist, please use another one.");

    const data = await User.create({
      username,
      email,
      password,
      birthdate: new Date(birthdate).toString(),
      otp,
    });

    res.status(200).json({ message: "success", data });
  } catch (error) {
    console.log(error);
  }
}

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const isUser = await User.findOne({ email });

    if (isUser?.password !== password) throw new Error("Wrong Password");

    return res.status(200).json({ message: "Logged in." });
  } catch (error) {
    res.status(400).json({ error: 1, message: "Wrong password!" });
  }
}

export default {
  register,
  login,
};
