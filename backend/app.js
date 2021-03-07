const express = require("express");
const app = express();

const AppError = require("./utils/appError");
const productRoutes = require("./routes/productRoutes");
//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Webpage loaded",
  });
});

//Route Middleware

app.use("/products", productRoutes);
app.all("*", (req, res, next) => {
  next(new AppError(`This route ${req.originalUrl} does not exist`, 404));
});

//Error Handling Middleware

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
