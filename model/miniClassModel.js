const Sequelize = require("sequelize");
const db = require("../config/database");

const miniClass = db.define(
  "MiniClass",
  {
    ProgramId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namaMiniClass: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateClass: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    targetProgramId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    posterMiniClass: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsiMiniClass: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    materi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    persiapan: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    biaya: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isShow: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    isActived: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = miniClass;
