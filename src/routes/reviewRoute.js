import express from "express";
import { reviewController } from "../controllers";
import {adminAuth,customerAuth} from '../middleware'
export default express

  .Router()
  .post("/addReview",customerAuth, reviewController.addReview)
  .get("/getReview",customerAuth,reviewController.getReviewsByProduct)
  .post("/updateReview", customerAuth,reviewController.updateReview)
  .delete("/deleteReview",customerAuth,reviewController.deleteReview)
  
