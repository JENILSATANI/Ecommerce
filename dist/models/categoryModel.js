"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var categorySchema = _mongoose["default"].Schema({
  categoryName: {
    type: String,
    require: true
  },
  isDeleted: {
    type: Boolean,
    "default": false
  },
  isActive: {
    type: Boolean,
    "default": true
  }
}, {
  timestamps: true,
  versionKey: false
});
var category = _mongoose["default"].model("category", categorySchema);
var _default = exports["default"] = category;