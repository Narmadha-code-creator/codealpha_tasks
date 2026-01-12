const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/order", (req, res) => {
  res.json({ message: "Order placed successfully!" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});