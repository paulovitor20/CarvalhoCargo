const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/pendencias", (req, res) => {
  db.query("SELECT * FROM pendencias", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(3006, () => {
  console.log("Servidor rodando na porta 3000");
});
