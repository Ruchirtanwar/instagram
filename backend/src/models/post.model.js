import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    
    caption: {
      type: String,
      default: "",
    },
    imageUrl: [{
      type: String,
      required:true,
    }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true },
);

const postModel = mongoose.model("Post",postSchema)

export default postModel;
