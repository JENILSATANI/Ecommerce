"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _express["default"].Router().post("/addCategory", _middleware.adminAuth, _controllers.categoryController.addCategory).get("/getCategory", _middleware.customerAuth, _controllers.categoryController.getCategory).post("/updateCategory", _middleware.adminAuth, _controllers.categoryController.updateCategory)["delete"]("/deleteCategory", _middleware.adminAuth, _controllers.categoryController.deleteCategory);