const express = require("express");
const cors = require("cors");
const jsonServer = require("json-server");

const app = express();

app.use(cors());

app.use("/api", jsonServer.router("db.json"));
app.use("/login", (req, res) => {
  res.send({
    token: "login",
  });
});

app.listen(3001);
