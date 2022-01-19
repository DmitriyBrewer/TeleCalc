import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: { type: String, required: "true" },
  title: { type: String, required: "true" },
  content: { type: String, required: "true" },
  picture: { type: String }
});

export default mongoose.model("Post", Post); //название 'Post' модель Post

// {
//   "author": "s",
//    "title": "sd",
//    "content": "2",
//    "picture": "1"
//  }