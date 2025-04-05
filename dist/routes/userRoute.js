"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = _express["default"].Router().post("/signup", _controllers.userController.signUp).post("/logIn", _controllers.userController.logIn).post("/updateProfile", _controllers.userController.updateProfileData).post("/logout", _middleware.userAuth, _controllers.userController.userLogout);