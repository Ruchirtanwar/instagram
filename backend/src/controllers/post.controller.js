import express from "express";
import postModel from "../models/post.model.js";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinaryUploads.js";
import likeModel from "../models/like.model.js";
import commentModel from "../models/comments.model.js";

export async function createPostController(req, res) {
  try {
    const userId = req.user.id;
    const { caption } = req.body;
    //this is how the req.files are introduced ,basically the multer adds the req.files not us
    //     Where does req.files come from?
    // 👉 This line:
    // upload.array("images", 5)
    // Ye hi magic hai 🔥
    // 🧩 What upload.array("images", 5) does
    // "images" → form-data key name
    // 5 → max files
    // 👉 Agar frontend/Postman se aisa bhejo:
    // Key	Type
    // images	file
    // images	file
    // images	file
    // 👉 Then Multer converts it into:
    // req.files = [
    //   {
    //     originalname: "img1.png",
    //     mimetype: "image/png",
    //     buffer: <Buffer>,
    //   },
    //   {
    //     originalname: "img2.jpg",
    //     mimetype: "image/jpeg",
    //     buffer: <Buffer>,
    //   }
    // ];

    //     Frontend (form-data)
    //         ↓
    // images → file1, file2
    // caption → "hello"
    //         ↓
    // Multer processes
    //         ↓
    // req.files → [file1, file2]
    // req.body → { caption: "hello" }
    //         ↓
    // Controller gets both
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "At least one image is required",
      });
    }

    // Upload all images in parallel 🔥
    const uploadPromises = files.map(async (file) => {
      const b64 = file.buffer.toString("base64");

      const dataURI = `data:${file.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "posts",
      });
      return result.secure_url;
    });

    const imageUrls = await Promise.all(uploadPromises);

    const post = await postModel.create({
      user: userId,
      caption,
      imageUrl: imageUrls,
    });

    return res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
export async function editPostController(req,res){
  try {
    const userId = req.user.id;
    const { postId } = req.params;
    const { caption, imageUrl } = req.body;

    const post = await postModel.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔐 ownership check
    if (post.user.toString() !== userId) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      { caption, imageUrl },
      { new: true }
    );

    return res.json({
      message: "Post updated",
      post: updatedPost,
    });

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getAllPostController(req, res) {
  try {
    const allPost = await postModel
      .find({})
      .populate("user")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Posts fetched successfully",
      count: allPost.length,
      allPost,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function getAllUserPostController(req, res) {
  const userId = req.user.id;

  const post = await postModel.find({ user: userId });
  return res.status(200).json({
    message: "all post of the user fetched",
    post,
  });
}
export async function likePostController(req, res) {
  const userId = req.user.id;
  const { postId } = req.params;
  // console.log(req.user, userId, postId);
  const exisitingLike = await likeModel.findOne({ user: userId, post: postId });
  if (exisitingLike) {
    await likeModel.deleteOne({ _id: exisitingLike._id });
    return res.json({ message: "Unliked" });
  }
  {
    await likeModel.create({ user: userId, post: postId });

    return res.json({ message: "liked" });
  }
}

export async function addCommentController(req, res) {
  const userId = req.user.id;
  const { postId } = req.params;
  const { text } = req.body;
// console.log(req.body)
  if (!text) {
    return res.status(400).json({ message: "Text required" });
  }

  const comment = await commentModel.create({
    user: userId,
    post: postId,
    text,
  });

  return res.json(comment);
}
export async function deleteCommentController(req, res) {
  const userId = req.user.id;
  const { commentId } = req.params;
  const comment = await commentModel.findById(commentId);
  // console.log(comment)
  if (!comment) {
    return res.status(404).json({ message: "Not found" });
  }
  // only owner can delete
  if (comment.user.toString() !== userId) {
    return res.status(403).json({ message: "Not allowed" });
  }
  await commentModel.deleteOne({ _id: commentId });
  return res.json({ message: "Deleted" });
}
