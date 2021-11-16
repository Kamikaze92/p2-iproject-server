'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, {foreignKey: 'PostId'})
      Post.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Post.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "user id required"
        },
        notNull: {
          msg: "user id required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "please input description"
        },
        notNull: {
          msg: "please input description"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};