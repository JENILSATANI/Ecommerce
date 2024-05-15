"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "comparePassword", {
  enumerable: true,
  get: function get() {
    return _comparePassword["default"];
  }
});
Object.defineProperty(exports, "hashPassword", {
  enumerable: true,
  get: function get() {
    return _hashPassword["default"];
  }
});
var _hashPassword = _interopRequireDefault(require("./hashPassword"));
var _comparePassword = _interopRequireDefault(require("./comparePassword"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }