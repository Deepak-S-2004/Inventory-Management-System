
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import routes
const productRoutes = require("./routers/productroutes");

// Use routes
app.use("/api", productRoutes);

// Error handling
const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

// Invalid URL handling
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
