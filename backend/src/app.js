import express from "express"
import userAuthRouter from "./Routes/userAuth.route.js"
import cookieParser from "cookie-parser"
import postRouter from "./Routes/post.route.js"
const app = express()
app.use(express.json())
app.use(cookieParser())
//api for user register login and logout
app.use("/api/auth",userAuthRouter)
app.use("/api/post",postRouter)
export default app;