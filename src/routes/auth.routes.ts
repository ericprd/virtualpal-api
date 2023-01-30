import { Router, Request, Response } from "express";
import authHandler from "../handler/auth.handler";

const router = Router();

router.post("/register", authHandler.register);
router.post("/router", authHandler.login);

export default router;
