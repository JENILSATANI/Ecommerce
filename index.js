import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
    userRoute,
    adminRoute,
    productRoute,
    categoryRoute,
    tagRoute,
    cartRoute,
    reviewRoute,
    orderRoute
  } from "./src/routes";
import errorHandler from "./src/error/handler";

require("dotenv").config({ path: ".env" });
require("./src/config/connection");

let corsOptions = {
  AllowHeaders: "*",
  AllowOrigin: "*",
  AllowMethods: "*",
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/uploads", express.static("./uploads"));


app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/category", categoryRoute);
app.use("/tag", tagRoute);
app.use("/cart", cartRoute);
app.use("/review", reviewRoute);
app.use("/order", orderRoute);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
