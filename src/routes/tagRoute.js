import express from "express";
import { tagController } from "../controllers";
import {adminAuth,customerAuth} from '../middleware'
export default express

  .Router()
  .post("/addTag",adminAuth, tagController.addTagData)
  .get("/getTag",customerAuth,tagController.getTag)
  .post("/updateTag", adminAuth,tagController.updateTag)
  .delete("/deleteTag",adminAuth,tagController.deleteTag)
  
