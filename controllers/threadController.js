const { Post, User } = require("../models");

class ThreadController {
  static async createThread(req, res, next) {
    try {
      console.log(req.user.id);
      const { description } = req.body;
      if (!description) {
        throw { name: "invalid input" };
      }
      const newThread = {
        UserId: id,
        description: description,
      };
      console.log(newThread);
      await Post.create(newThread);
      res.status(201).json({ message: "Post has been created" });
    } catch (err) {
      switch (err.name) {
        case "invalid input":
          res.status(401).json({ message: "please input some text" });
          break;
        default:
          res.status(500).json(err.message);
          break;
      }
    }
  }
  static async getThread(req, res, next) {
    try {
      const result = await Post.findAll({
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["updatedAt"],
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ThreadController;
