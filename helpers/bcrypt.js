const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashedPassword) {
  return jwt.verify(password, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
