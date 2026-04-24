import express from "express"
import { identifyUser } from "../middleware/auth.middleware"
import { followController } from "../controllers/user.controller"

const userRouter = express.Router()

userRouter.post("/user/follow/:userId",identifyUser,followController)