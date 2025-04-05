import express from "express";
import { userController } from "../controllers";
import {userAuth} from '../middleware'

export default express

  .Router()

  .post("/signup", userController.signUp)
  .post("/login", userController.logIn)
  .post("/updateProfile", userController.updateProfileData)
  .post("/logout",userAuth, userController.userLogout);
  
