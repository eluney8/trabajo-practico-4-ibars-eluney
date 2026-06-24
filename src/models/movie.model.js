import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const movie = sequelize.define("movie", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1888,
      max: new Date().getFullYear(),
    },
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
