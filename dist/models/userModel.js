"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _enum = require("../utils/enum");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var userSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "enum": [_enum.ROLE.ADMIN, _enum.ROLE.USER],
    "default": _enum.ROLE.USER
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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