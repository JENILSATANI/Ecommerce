"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _enum = require("../utils/enum");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    require: true
  },
  role: {
    type: String,
    "enum": [_enum.ROLE.ADMIN, _enum.ROLE.CUSTOMER],
    "default": _enum.ROLE.CUSTOMER
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  password: {
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
var user = _mongoose["default"].model("user", userSchema);
var _default = exports["default"] = user;