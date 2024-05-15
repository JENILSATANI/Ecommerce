import jwt from "jsonwebtoken";
require("dotenv").config();
let secret = process.env.SECRET_KEY;
import { userModel } from "../models";
import { ROLE } from "../utils/enum";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("token is required");
    const matchToken = token.split(" ")[1];
    const decoded = jwt.verify(matchToken, secret);
    if (!decoded) throw new Error("id is not match");

    const user = await userModel.findOne({
      _id: decoded._id,
    });
    if (!user) throw new Error("user is not found ");
    if (user.role !== ROLE.ADMIN) throw new Error("you are unAuthorized")

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(401).send({ success: false, message: error.message });
  }
};

const customerAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("token is required");
    const matchToken = token.split(" ")[1];
    const decoded = jwt.verify(matchToken, secret);
    if (!decoded) throw new Error("id is not match");

    const user = await userModel.findOne({
      _id: decoded._id,
    });
    if (!user) throw new Error("user is not found ");
    if (user.role !== ROLE.CUSTOMER) throw new Error("you are unAuthorized")
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(401).send({ success: false, message: error.message });
  }
};

export  {adminAuth,customerAuth};
