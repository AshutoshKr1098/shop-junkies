const express = require("express");
const app = express();

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Webpage loaded",
  });
});

module.exports = app;
