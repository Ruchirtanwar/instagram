import express from "express"
import { addCommentController, createPostController, deleteCommentController, getAllPostController, getAllUserPostController, likePostController } from "../controllers/post.controller.js";
import { identifyUser } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.js";

const postRouter = express.Router()
// Frontend → Multer → Buffer → Base64 → Cloudinary → URL → MongoDB
postRouter.post("/create",identifyUser,upload.array("images", 5),createPostController)
postRouter.get("/getalluserpost",identifyUser,getAllUserPostController)
postRouter.get("/allposts",getAllPostController)
postRouter.post("/like/:postId",identifyUser,likePostController)
postRouter.post("/addcomment/:postId",identifyUser,addCommentController)
postRouter.post("/deletecomment/:commentId",identifyUser,deleteCommentController)
export default postRouter;