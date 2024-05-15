"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cartSchema = (0, _mongoose.Schema)(_defineProperty(_defineProperty(_defineProperty({
  userId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  totalPrice: {
    type: Number,
    require: true
  },
  productId: {
    type: [_mongoose.Schema.Types.ObjectId],
    require: true
  },
  isCheckout: {
    type: Boolean,
    "default": false
  }
}, "isCheckout", {
  type: Boolean,
  "default": false
}), "isActive", {
  type: Boolean,
  "default": true
}), "isDeleted", {
  type: Boolean,
  "default": false
}), {
  timestamps: true,
  versionKey: false
});
var cart = (0, _mongoose.model)("cart", cartSchema);
var _default = exports["default"] = cart;