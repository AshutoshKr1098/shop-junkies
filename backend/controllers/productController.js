const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");
module.exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json({
    status: "success",
    response: products.length,
    data: {
      products,
    },
  });
});
module.exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    imageUrl: req.body.imageUrl,
  });
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});
module.exports.getSingleProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  return res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});
