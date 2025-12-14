import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Author from "./Author.js";

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "id"
      }
    }
  },
  {
    tableName: "posts",
    timestamps: true
  }
);

// Relationships
Author.hasMany(Post, {
  foreignKey: "author_id",
  onDelete: "CASCADE"
});

Post.belongsTo(Author, {
  foreignKey: "author_id"
});

export default Post;
