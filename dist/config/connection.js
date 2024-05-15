"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var databaseUrl = process.env.DATABASE_URL;
console.log('databaseUrl :>> ', databaseUrl);
_mongoose["default"].set("strictQuery", true).connect(databaseUrl).then(function () {
  console.log("DB connection established successfully");
})["catch"](function (err) {
  console.log("Error occured in db connection", err);
});