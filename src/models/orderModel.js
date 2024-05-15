import { Schema, model } from "mongoose";
import {ORDERSTATUS} from '../utils/enum'

const orderSchema = Schema(
  {
    status: {
      type: String,
      enum: [ORDERSTATUS.PENDING,ORDERSTATUS.CONFIRMED,ORDERSTATUS.SHIPPED,ORDERSTATUS.DELIVERED],
      default: ORDERSTATUS.PENDING,
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
