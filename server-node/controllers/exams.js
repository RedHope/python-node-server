const router = require("express").Router();
const model = require("../models/Exam");

router.get("/exams", (req, res) => {
  model.findAll().then(exams => {
    return res.send(exams);
  });
});

router.post("/exams", (req, res) => {
    console.log(req);
  model.create({
      title: req.body.title,
      description: req.body.description
  }).then(exam => {
    res.send(exam);
  });
});

module.exports = router;
