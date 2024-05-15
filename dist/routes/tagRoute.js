"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _express["default"].Router().post("/addTag", _middleware.adminAuth, _controllers.tagController.addTagData).get("/getTag", _middleware.customerAuth, _controllers.tagController.getTag).post("/updateTag", _middleware.adminAuth, _controllers.tagController.updateTag)["delete"]("/deleteTag", _middleware.adminAuth, _controllers.tagController.deleteTag);