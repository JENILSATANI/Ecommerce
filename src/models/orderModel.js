import { Schema, model } from "mongoose";
import {ORDER_STATUS} from '../utils/enum'

const orderSchema = Schema(
  {
    status: {
      type: String,
      enum: [ORDER_STATUS.PENDING,ORDER_STATUS.CONFIRMED,ORDER_STATUS.SHIPPED,ORDER_STATUS.DELIVERED],
      default: ORDER_STATUS.PENDING,
    },
    cartId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isCancel: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);
const order = model("order", orderSchema);

export default order;
