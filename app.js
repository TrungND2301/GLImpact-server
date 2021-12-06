require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRouter = require("./src/routers/AuthRouter");
const userRouter = require("./src/routers/UserRouter");

// const customerRouter = require("./src/routers/CustomerRouter");
// const productRouter = require("./src/routers/ProductRouter");
// const searchRouter = require("./src/routers/SearchRouter");
// const orderRouter = require("./src/routers/OrderRouter");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL || "mongodb://localhost/TrungND";

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

// app.use("", authRouter);
app.use("/api/login", authRouter);
app.use("/api/users", userRouter);

// app.use("/api/customers", customerRouter);
// app.use("/api/products", productRouter);
// app.use("/api/searchs", searchRouter);
// app.use("/api/orders", orderRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
