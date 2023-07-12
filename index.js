const express = require("express");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const app = express();

// middleware for read json data
app.use(express.json());

// base url , API ROOT - http://localhost:8000

// -----------  create POST /products ----------
app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
  });

// ------------  Read GET  /products ---------
app.get("/products", (req, res) => {
  res.json(products);
});

// Read GET  /products - perticular product
app.get("/products/:id", (req, res) => {
  const id = +req.params.id; // here + conver string to number
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// --------- Update PUT /products/:id ---------------- ( put delect all the data and save new data)
app.put("/products/:id", (req, res) => {
    const id = +req.params.id; // here + conver string to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json();
  });

//   Update PATCH /products/:id ( keep other data as it is)
app.patch("/products/:id", (req, res) => {
    const id = +req.params.id; // here + conver string to number
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
  });



app.listen(8000, () => {
  console.log("server is running on port 8000....");
});
