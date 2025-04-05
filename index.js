import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session  from "express-session"


  
import {
    userRoute,
    adminRoute
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
app.use(errorHandler);


app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
