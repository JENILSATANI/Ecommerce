"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _express["default"].Router().post("/addToCart", _middleware.customerAuth, _controllers.cartController.addToCart).get("/getCart", _middleware.customerAuth, _controllers.cartController.getCart)["delete"]("/removeCart", _middleware.customerAuth, _controllers.cartController.removeFromCart);