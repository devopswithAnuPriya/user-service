const express = require("express");

const app = express();
const PORT = process.env.PORT || 3003;

// These defaults are useful when running all services directly on your machine.
// In Docker Compose, override them with http://user-service:3000 and
// http://product-service:3001 so containers communicate over the Compose network.
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:3000";
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || "http://localhost:3001";

app.get("/health", (req, res) => {
  res.status(200).json({ service: "gateway-service", status: "UP" });
});

app.get("/users", async (req, res) => {
  try {
    const response = await fetch(`${USER_SERVICE_URL}/users`);
    const data = await response.json();
    res.status(response.status).json({ source: "gateway", data });
  } catch (error) {
    res.status(502).json({ error: "User Service is unavailable", details: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const response = await fetch(`${PRODUCT_SERVICE_URL}/products`);
    const data = await response.json();
    res.status(response.status).json({ source: "gateway", data });
  } catch (error) {
    res.status(502).json({ error: "Product Service is unavailable", details: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Gateway Service listening on port ${PORT}`);
});
