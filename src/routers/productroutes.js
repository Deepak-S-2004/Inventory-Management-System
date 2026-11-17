
const express = require("express");

const router = express.Router();

// Import controller
const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require("../controller/productcontroller");

// Import validation
const validateProduct = require("../schema/validateProduct");

// GET all products
router.get("/products", getProducts);

// GET single product
router.get("/products/:id", getProductById);

// POST new product
router.post("/add-product", validateProduct, addProduct);

// PUT update product
router.put("/update-product/:id", validateProduct, updateProduct);

// DELETE product
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
