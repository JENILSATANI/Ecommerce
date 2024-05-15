import mongoose from "mongoose";

const tagSchema = mongoose.Schema(
  {
    tagName: {
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

const tag = mongoose.model("tag", tagSchema);

export default tag;
