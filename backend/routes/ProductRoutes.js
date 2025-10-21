const express = require("express");
const Product = require("../models/Product");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route POST /api/product
// @desc create a new product
// @access private/admin
router.post("/", protect, async (req, res) => {
  try {
  const {
    name,
    description,
    price,
    discountPrice,
    countInStock,
    category,
    brand,
    sizes,
    colors,
    collections,
    material,
    gender,
    images,
    isFeautured,
    isPublished,
    tags,
    dimensions,
    weight,
    sku,
  } = req.body;
  
    const product = new Product({
      name,
      description,
      discountPrice,
      price,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeautured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id  //reference to admin who created it 
    });

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
    
  }
});


module.exports = router