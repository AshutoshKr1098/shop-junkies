const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");
module.exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
});

module.exports.getSingleProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById({ _id: req.params.id });
  return res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
});
