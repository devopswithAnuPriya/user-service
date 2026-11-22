const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const products = [
  { id: 101, name: "Laptop", price: 55000 },
  { id: 102, name: "Keyboard", price: 1200 },
  { id: 103, name: "Mouse", price: 650 }
];

app.get("/health", (req, res) => {
  res.status(200).json({ service: "product-service", status: "UP" });
});

app.get("/products", (req, res) => {
  res.json({ count: products.length, products });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Product Service listening on port ${PORT}`);
});
