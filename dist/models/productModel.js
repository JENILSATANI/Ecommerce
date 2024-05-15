"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var ProductSchema = (0, _mongoose.Schema)({
  productName: {
    type: String,
    required: true
  },
  tagId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  categoryId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  productImages: {
    type: String
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
var Product = (0, _mongoose.model)("Product", ProductSchema);
var _default = exports["default"] = Product;