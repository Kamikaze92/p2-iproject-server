const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function Authenticate(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "JsonWebTokenError" };
    }
    console.log("masuk");
    const payload = verifyToken(access_token);
    const response = await User.findOne({ where: { email: payload.email } });
    if (!response) {
      throw { name: "unauthorized" };
    }
    req.user = {
      id: response.id,
      email: response.email,
      username: response.username,
    };
    next();
  } catch (err) {
    console.log(err.name);
    switch (err.name) {
      case "JsonWebTokenError":
        res.status(401).json({ message: "invalid token" });
        break;
      case "unauthorized":
        res.status(401).json({ message: "unauthorized" });
        break;
      default:
        break;
    }
    res.status(500).json(err);
  }
}

module.exports = Authenticate;
