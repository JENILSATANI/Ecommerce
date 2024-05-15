"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _middleware = require("../middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _express["default"].Router().post("/addReview", _middleware.customerAuth, _controllers.reviewController.addReview).get("/getReview", _middleware.customerAuth, _controllers.reviewController.getReviewsByProduct).post("/updateReview", _middleware.customerAuth, _controllers.reviewController.updateReview)["delete"]("/deleteReview", _middleware.customerAuth, _controllers.reviewController.deleteReview);