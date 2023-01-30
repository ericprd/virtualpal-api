import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/auth.routes";

const app = express();

app.use(json());

dotenv.config();
async function connectDB() {
  await mongoose.connect(process.env.DB_URI!, () => {
    console.log("connected");
  });
}

const PORT: number = 3000;
const HOST: string = "localhost";

connectDB();

app.use("/auth", router);

app.listen(PORT, HOST, () => {
  console.log(`server listen to http://${HOST}:${PORT}`);
});
