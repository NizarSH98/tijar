const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

const categories = [
  {
    id: 1,
    name: "Category 1",
    products: [
      { id: 1, name: "Product 1", description: "Description for Product 1", img: "/images/product1.jpg", price: 10 },
      { id: 2, name: "Product 2", description: "Description for Product 2", img: "/images/product2.jpg", price: 150 }
    ]
  },
  {
    id: 2,
    name: "Category 2",
    products: [
      { id: 3, name: "Product 3", description: "Description for Product 3", img: "/images/product3.jpg", price: 120 }
    ]
  }
];

app.get("/categories", (req, res) => {
  res.json(categories);
});

exports.api = functions.https.onRequest(app);
