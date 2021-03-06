const express = require("express");

const app = express();
const router = express.Router();

app.use(require('body-parser').json());
router.use('/', require('./controllers/exams'));

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
