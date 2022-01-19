import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      console.log(post);
      res.json(
        (parseFloat(post.min)||0)
         + (parseFloat(post.sms) ||0)
         + (parseFloat(post.gb) ||0)
         + (parseFloat(post.facebook)||0)
         + (parseFloat(post.instagram)||0)
         + (parseFloat(post.vk)||0)
         + (parseFloat(post.pinterest)||0)
         + (parseFloat(post.linkedin)||0)
         + (parseFloat(post.whatsapp)||0)
         + (parseFloat(post.telegram)||0)
         + (parseFloat(post.message)||0)
         + (parseFloat(post.mail)||0)
         + (parseFloat(post.inbox)||0)
         + " р/месяц");
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.create(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
