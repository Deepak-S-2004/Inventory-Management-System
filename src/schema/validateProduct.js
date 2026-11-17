
const validateProduct = (req, res, next) => {

    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    if (isNaN(price) || price < 0) {
        return res.status(400).json({
            message: "Invalid price"
        });
    }

    if (isNaN(quantity) || quantity < 0) {
        return res.status(400).json({
            message: "Invalid quantity"
        });
    }

    next();
};

module.exports = validateProduct;
