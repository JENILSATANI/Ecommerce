import { Schema, model } from "mongoose";

const cartSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    totalPrice: {
      type: Number,
      require: true,
    },
    productId: {
      type: [Schema.Types.ObjectId],
      require: true,
    },
    isCheckout: {
      type: Boolean,
      default: false,
    },
    isCheckout: {
      type: Boolean,
      default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
  },
  { timestamps: true, versionKey: false }
);

const cart = model("cart", cartSchema);
export default cart;
