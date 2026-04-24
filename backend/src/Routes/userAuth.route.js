import express from "express"
import { registerUserController, userLoginController } from "../controllers/userAuthcontroller.js";

const userAuthRouter = express.Router()

userAuthRouter.post("/register",registerUserController)
userAuthRouter.post("/login",userLoginController)

export default userAuthRouter;