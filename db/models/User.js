module.exports = (sequelize, DataTypes) =>
  sequelize.define("User", {

    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
    },

    username: { type: DataTypes.STRING,
         allowNull: false, unique: true },

    password: { type: DataTypes.STRING,
         allowNull: false },
         
  });