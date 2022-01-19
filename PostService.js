import Post from "./Post.js";

class PostService {
  async create(post, picture) {
    const createdPost = await Post.create(post);
    return createdPost;
  }
}

export default new PostService();
