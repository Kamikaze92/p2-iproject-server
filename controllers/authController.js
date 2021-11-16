const { User } = require("../models");

class AuthController {
  static async login(req, res, next) {
    try {
    } catch (err) {}
  }
  static async register(req, res, next) {
    try {
      let { username, email, password } = req.body;
      const created = await User.create({
        username,
        email,
        password,
      });
      res
        .status(201)
        .json({
          id: created.id,
          username: created.username,
          email: created.email,
        });
    } catch (err) {
      console.log(err);
      switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
          res.status(400).json(err.errors[0].message);
          break;

        default:
          res.status(500).json(err.message);
          break;
      }
    }
  }
}

module.exports = AuthController;
