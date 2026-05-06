const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API - Get all products
app.get("/api/products", (req, res) => {
  res.json({ success: true, count: 12, message: "ShopAWT API is running!" });
});

// API - Place order
app.post("/api/order", (req, res) => {
  const { items } = req.body;
  console.log("New order received:", items);
  res.json({
    success: true,
    message: "Order placed successfully!",
    orderId: Date.now(),
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ ShopAWT running at http://localhost:${PORT}`);
});
