import express from "express";
import { cartController } from "../controllers";
import {adminAuth,customerAuth} from '../middleware'
export default express

  .Router()
  .post("/addToCart",customerAuth, cartController.addToCart)
  .get("/getCart",customerAuth,cartController.getCart)
  .delete("/removeCart", customerAuth,cartController.removeFromCart)
  
