
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 10
    },
    {
        id: 2,
        name: "Mobile",
        price: 15000,
        quantity: 20
    }
];

// GET - Get all products
const getProducts = (req, res) => {
    res.status(200).json({
        message: "All products",
        products: products
    });
};

// GET - Get product by ID
const getProductById = (req, res) => {

    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
};

// POST - Add new product
const addProduct = (req, res) => {

    const newProduct = {
        id: products.length > 0
            ? Math.max(...products.map(item => item.id)) + 1
            : 1,
        name: req.body.name.trim(),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity)
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
};

// PUT - Update product
const updateProduct = (req, res) => {

    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name.trim();
    product.price = Number(req.body.price);
    product.quantity = Number(req.body.quantity);

    res.status(200).json({
        message: "Product updated successfully",
        product: product
    });
};

// DELETE - Delete product
const deleteProduct = (req, res) => {

    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products = products.filter((item) => item.id !== id);

    res.status(200).json({
        message: "Product deleted successfully"
    });
};

// Export functions
module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};
