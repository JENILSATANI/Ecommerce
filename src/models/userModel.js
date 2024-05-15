import mongoose from "mongoose";
import {ROLE} from '../utils/enum'
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: [ROLE.ADMIN, ROLE.CUSTOMER],
      default: ROLE.CUSTOMER,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const user = mongoose.model("user", userSchema);

export default user;
