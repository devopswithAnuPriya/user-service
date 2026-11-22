const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Anu", role: "DevOps Learner" },
  { id: 2, name: "Rahul", role: "Developer" }
];

app.get("/health", (req, res) => {
  res.status(200).json({ service: "user-service", status: "UP" });
});

app.get("/users", (req, res) => {
  res.json({ count: users.length, users });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`User Service listening on port ${PORT}`);
});
