import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "fullname is required"],
  },
  username: {
    type: String,
    unique: [true, "username must be unique"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email must be unique"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dzsenwinh/image/upload/v1776794006/defaultprofileimage_kspxkk.jpg",
  },
  bio: {
    type: String,
    required: true,
  },
});
const userModel = mongoose.model("User", userSchema);
export default userModel;
