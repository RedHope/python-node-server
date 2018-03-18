const sequelize = require("../db");
const Sequelizeer = require("sequelize");

const Exams = sequelize.define("exam", {
  title: Sequelizeer.STRING,
  description: Sequelizeer.STRING
});

console.log('exams');

Exams.sync({force: true}).then(() => {
  return Exams.create({
    title: "Sequelize Exam",
    description: "Created with Node js",
    last_updated_by: "Sequelize"
  });
});

module.exports = Exams;
