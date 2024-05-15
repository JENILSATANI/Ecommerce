"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _express["default"].Router().post("/addProduct", _middleware.adminAuth, _controllers.productController.addProduct).post("/updateProduct", _middleware.adminAuth, _controllers.productController.updateProduct).get("/getProduct", _middleware.customerAuth, _controllers.productController.getProduct)["delete"]("/deleteProduct", _middleware.adminAuth, _controllers.productController.deleteProduct);