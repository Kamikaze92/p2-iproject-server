const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt')
const { User } = require("../models");
class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if(!email || !password){
          throw {name: "empty input"}
      }
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user || !comparePassword(password, user.password)) {
        //username:fy@gmail.com  password:farhad
        throw { name: "invalid input" };
      } else {
        let tokenUser = { id: user.id, email: user.email, username: user.username };
        let access_token = signToken(tokenUser);
        res.status(200).json({ id: user.id, email: user.email, username: user.username, access_token });
      }
    } catch (err) {
      console.log(err);
      switch (err.name) {
        case "invalid input":
          res.status(400).json({message: "invalid email/password"});
          break;
        case "empty input":
        res.status(400).json({message: "fill all the field required"});
        break;

        default:
          res.status(500).json(err.message);
          break;
      }
    }
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
