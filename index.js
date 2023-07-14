const express = require("express");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const app = express();

// middleware for read json data
app.use(express.json());
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

app.listen(process.env.PORT, () => {
  console.log("server is running on port 8000....");
});
