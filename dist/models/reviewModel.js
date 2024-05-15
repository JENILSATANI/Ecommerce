"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var ReviewSchema = (0, _mongoose.Schema)({
  product: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  isDeleted: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var Review = (0, _mongoose.model)("Review", ReviewSchema);
var _default = exports["default"] = Review;