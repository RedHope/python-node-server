const sequelize = require("../db");
const Sequelizeer = require("sequelize");

const Exams = sequelize.define("exam", {
  title: Sequelizeer.STRING,
  description: Sequelizeer.STRING
});

console.log("exams");

Exams.sync({ force: false });

module.exports = Exams;
