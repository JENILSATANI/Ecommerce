"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _enum = require("../utils/enum");
var orderSchema = (0, _mongoose.Schema)({
  status: {
    type: String,
    "enum": [_enum.ORDER_STATUS.PENDING, _enum.ORDER_STATUS.CONFIRMED, _enum.ORDER_STATUS.SHIPPED, _enum.ORDER_STATUS.DELIVERED],
    "default": _enum.ORDER_STATUS.PENDING
  },
  cartId: {
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  isDeleted: {
    type: Boolean,
    "default": false
  },
  isCancel: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var order = (0, _mongoose.model)("order", orderSchema);
var _default = exports["default"] = order;