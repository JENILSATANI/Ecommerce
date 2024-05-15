import express from "express";
import { productController } from "../controllers";
import {adminAuth,customerAuth} from '../middleware'
export default express

  .Router()
  .post("/addProduct", adminAuth,productController.addProduct)
  .post("/updateProduct",adminAuth ,productController.updateProduct)
  .get("/getProduct", customerAuth,productController.getProduct)
  .delete("/deleteProduct", adminAuth,productController.deleteProduct)
  
