import { hashPassword, comparePassword } from "../utils";
import { userModel } from "../models";
import { ROLE } from "../utils/enum";
import jwt from "jsonwebtoken";
require("dotenv").config({ path: ".env" });
let secret = process.env.SECRET_KEY;
  import { BadRequestError, NotFoundError } from "../error/index.js";
import services from "../utils/service.js";

const logIn = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email) {
      return res.status(400).send("Email Id Required");
    }
    if (!password) {
      return res.status(400).send("Password Required");
    }
    const checkUserRole = await userModel.findOne({
      email: email,
    });
    if (!checkUserRole) throw new Error("Not a Valid User!");

    const verifyPassword = await comparePassword(
      password,
      checkUserRole.password
    );
    if (!verifyPassword)
      return res
        .status(400)
        .send({ success: false, message: "Invalid Password" });

    let token = jwt.sign(
      { email: checkUserRole.email, _id: checkUserRole._id },
      secret,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).send({
      success: true,
      message: "User Login Successfully",
      data: checkUserRole,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const signUp = async (req, res, next) => {
  try {

    if (!req.body) {
      throw new BadRequestError("please pass data");
    }

    let { email, name, password, phoneNumber, confirmPassword } = req.body;

    console.log(req.body)
    if (['email', 'name', 'password', 'phoneNumber', "confirmPassword"].some(field => !req.body[field])) {
      throw new BadRequestError("Enter all required valid fields.");
    }

    if (phoneNumber.toString().length !== 10) {
      throw new BadRequestError("Phone number is not valid");
    }

    if (password !== confirmPassword) {
      throw new BadRequestError("Password and Confirm Password not match");
    }

    const checkUser = await userModel.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (checkUser?.email === email) {
      throw new BadRequestError("email is Already Used");
    }

    if (checkUser?.phoneNumber === phoneNumber) {
      throw new BadRequestError("Phone Number Already Used");
    }

    const hashed = await hashPassword(password);

    let createUser = await userModel.create({
      email,
      phoneNumber,
      name,
      password: hashed,
    });

    if (!createUser) {
      throw new BadRequestError("something went wrong!");
    }
    return services.sendResponse(
      res,
      200,
      "User Created Successfully",
      createUser
    );
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    let { email, newPassword, confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
      throw new BadRequestError("please pass required valid data");
    }

    const checkEmail = await userModel.findOne({
      email: email,
      role: "USER",
    });
    if (!checkEmail) {
      throw new NotFoundError("email is not found");
    }

    if (newPassword == confirmPassword) {
      const hashed = await hashPassword(newPassword);
      checkEmail.password = hashed;
      const userData = await checkEmail.save();
      return services.sendResponse(
        res,
        200,
        "Reset Password Successfully",
        userData
      );
    } else {
      throw new NotFoundError("Conform Password Not match");
    }
  } catch (error) {
    next(error);
  }
};

const updateProfileData = async (req, res, next) => {
  try {
    let { userId } = req.body;
    if (!userId) {
      throw new BadRequestError("please enter userId");
    }

    let userExits = await userModel.findOne({ _id: userId, role: "CUSTOMER" });
    if (!userExits) {
      throw new NotFoundError("user not found");
    }

    userExits.email = req.body.email ? req.body.email : userExits.email;
    userExits.phoneNumber = req.body.phoneNumber
      ? req.body.phoneNumber
      : userExits.phoneNumber;
    userExits.name = req.body.name ? req.body.name : userExits.name;

    const updateProfileData = await userExits.save();
    if (!updateProfileData) throw new Error("User Profile Not Updated");
    return services.sendResponse(
      res,
      200,
      "User Profile Updated Successfully",
      updateProfileData
    );
  } catch (error) {
    next(error);
  }
};

const userLogout = async (req, res, next) => {
  try {
    const invalidTokens = new Set();

    const token = req.headers['authorization']?.split(' ')[1];
    
    if (token) {
      invalidTokens.add(token); 
      console.log('Token added to blacklist:', token);
      console.log('Current invalidTokens:', Array.from(invalidTokens));    }

    return services.sendResponse(
      res,
      200,
      "Logged out successfully"
    );


  } catch (error) {
    next(error);
  }
};



export default { logIn, signUp, forgotPassword, updateProfileData, userLogout };
