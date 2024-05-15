"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var imageproduct = new _mongoose["default"].Schema({
  imagePath: {
    type: String
  },
  productId: {
    type: _mongoose["default"].ObjectId
  },
  createdAt: {
    type: Number
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
  timestamps: true
});
var productImage = new _mongoose["default"].model("productImage", imageproduct);
var _default = exports["default"] = productImage;