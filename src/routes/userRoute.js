import express from "express";
import { userController } from "../controllers";

export default express

  .Router()

  .post("/signup", userController.signUp)
  .post("/logIn", userController.logIn)
  .post("/updateProfile", userController.updateProfileData);
  
