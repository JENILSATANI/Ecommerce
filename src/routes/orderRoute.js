import express from "express";
import {orderController } from "../controllers";
import {adminAuth,customerAuth} from '../middleware'

export default express
  .Router()
  .post("/placeOrder",customerAuth,orderController.addOrder)
  .get("/getOrder",customerAuth,orderController.getOrder)
  .post("/updateOrder",customerAuth,orderController.updateOrder)
  .delete("/deleteOrder",customerAuth,orderController.deleteOrder);
  
