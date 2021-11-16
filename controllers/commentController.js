const { User, Post, Comment } = require("../models");

class CommentController {
  static async createComment(req, res, next) {
    try {
      const { PostId } = req.body;
      if (!PostId) {
        throw { name: "not found" };
      }
      const newComment = {
          UserId: req.user.id,
          PostId,
          description: req.body.description
      }
      await Comment.create(newComment)
      res.status(201).json({ message: "Adding your reply" });
    } catch (err) {
      console.log(err.name);
      switch (err.name) {
        case 'not found':
          res.status(401).json({ message: "data not found" });
          break;
        default:
          res.status(500).json(err.message);
          break;
      }
    }
  }
  static async getComment(req, res, next) {
    try {
    } catch (err) {}
  }
}

module.exports = CommentController;
