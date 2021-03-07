const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config("../config.env");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
