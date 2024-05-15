"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _express["default"].Router().post("/placeOrder", _middleware.customerAuth, _controllers.orderController.addOrder).get("/getOrder", _middleware.customerAuth, _controllers.orderController.getOrder).post("/updateOrder", _middleware.customerAuth, _controllers.orderController.updateOrder)["delete"]("/deleteOrder", _middleware.customerAuth, _controllers.orderController.deleteOrder);