import express from "express";
import {adminController } from "../controllers";
import {adminAuth} from '../middleware'

export default express
  .Router()
  .get("/getUserDetails",adminAuth , adminController.getUserDetails);
  
