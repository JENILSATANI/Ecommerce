import { Schema, model } from "mongoose";

const ReviewSchema = Schema({
  product: { type: Schema.Types.ObjectId, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
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

const Review = model("Review", ReviewSchema);

export default Review;
