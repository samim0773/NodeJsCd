const express = require("express");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const mongoose = require('mongoose');

const app = express();

// getting-started.js

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Blood_Bank');
  console.log('DB Connected...')
}

// middleware for read json data
app.use(express.json());
app.use(express.static('public'))
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

app.listen(process.env.PORT, () => {
  console.log("server is running on port 8000....");
});
