"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = _interopRequireDefault(require("../utils/service"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var errorHandler = function errorHandler(err, req, res, next) {
  console.log('Error :>> ', err);
  var message = err.message || "Something Went Wrong.";
  var code = err.code || 500;
  var stack = err.stack;
  var route = req.url;
  var errorMessage = {
    "stack": stack,
    "route": route
  };
  return _service["default"].sendResponse(res, code, message, errorMessage);
};
var _default = exports["default"] = errorHandler;