"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcrypt = require("bcrypt");
var comparePassword = function comparePassword(passwordAttempt, hashedPassword) {
  return (0, _bcrypt.compare)(passwordAttempt, hashedPassword);
};
var _default = exports["default"] = comparePassword;