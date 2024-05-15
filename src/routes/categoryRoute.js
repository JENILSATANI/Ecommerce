import express from "express";
import { categoryController } from "../controllers";
import {adminAuth,customerAuth} from '../middleware'
export default express

  .Router()
  .post("/addCategory",adminAuth, categoryController.addCategory)
  .get("/getCategory",customerAuth,categoryController.getCategory)
  .post("/updateCategory", adminAuth,categoryController.updateCategory)
  .delete("/deleteCategory",adminAuth,categoryController.deleteCategory)
  
