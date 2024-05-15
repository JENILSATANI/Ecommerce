import mongoose from "mongoose";

const imageproduct = new mongoose.Schema(
  {
    imagePath: {
      type: String,
    },
    productId: {
      type: mongoose.ObjectId,
    },
    createdAt: {
      type: Number,
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
  {
    timestamps: true,
  }
);

const productImage = new mongoose.model("productImage", imageproduct);

export default productImage;
