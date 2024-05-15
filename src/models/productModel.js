import { Schema, model } from "mongoose";

const ProductSchema = Schema({
  productName: {
    type: String,
    required: true,
  },
  tagId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  productImages:{
    type: String,
  },

}, 
{ timestamps: true, versionKey: false }
);
const Product = model("Product", ProductSchema);

export default Product;
