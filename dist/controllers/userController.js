"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
var _models = require("../models");
var _enum = require("../utils/enum");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _index = require("../error/index.js");
var _service = _interopRequireDefault(require("../utils/service.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require("dotenv").config({
  path: ".env"
});
var secret = process.env.SECRET_KEY;
var logIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var _req$body, email, password, checkUserRole, verifyPassword, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          if (email) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).send("Email Id Required"));
        case 4:
          if (password) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(400).send("Password Required"));
        case 6:
          _context.next = 8;
          return _models.userModel.findOne({
            email: email
          });
        case 8:
          checkUserRole = _context.sent;
          if (checkUserRole) {
            _context.next = 11;
            break;
          }
          throw new Error("Not a Valid User!");
        case 11:
          _context.next = 13;
          return (0, _utils.comparePassword)(password, checkUserRole.password);
        case 13:
          verifyPassword = _context.sent;
          if (verifyPassword) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            success: false,
            message: "Invalid Password"
          }));
        case 16:
          token = _jsonwebtoken["default"].sign({
            email: checkUserRole.email,
            _id: checkUserRole._id
          }, secret, {
            expiresIn: "10d"
          });
          res.status(200).send({
            success: true,
            message: "User Login Successfully",
            data: checkUserRole,
            token: token
          });
          _context.next = 23;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
  }));
  return function logIn(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var signUp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var _req$body2, email, name, password, phoneNumber, checkUser, hashed, createUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (req.body) {
            _context2.next = 3;
            break;
          }
          throw new _index.NotFoundError("please pass data");
        case 3:
          _req$body2 = req.body, email = _req$body2.email, name = _req$body2.name, password = _req$body2.password, phoneNumber = _req$body2.phoneNumber;
          if (!(!email || !name || !password || !phoneNumber)) {
            _context2.next = 6;
            break;
          }
          throw new _index.NotFoundError("enter required valid filed");
        case 6:
          if (!(req.body.phoneNumber.toString().length != 10)) {
            _context2.next = 8;
            break;
          }
          throw new _index.NotFoundError("PhoneNumber is not valid");
        case 8:
          _context2.next = 10;
          return _models.userModel.findOne({
            $or: [{
              email: email
            }, {
              phoneNumber: phoneNumber
            }]
          });
        case 10:
          checkUser = _context2.sent;
          if (!((checkUser === null || checkUser === void 0 ? void 0 : checkUser.email) === email)) {
            _context2.next = 13;
            break;
          }
          throw new _index.NotFoundError("email is Already Used");
        case 13:
          if (!((checkUser === null || checkUser === void 0 ? void 0 : checkUser.phoneNumber) === phoneNumber)) {
            _context2.next = 15;
            break;
          }
          throw new _index.NotFoundError("Phone Number Already Used");
        case 15:
          _context2.next = 17;
          return (0, _utils.hashPassword)(password);
        case 17:
          hashed = _context2.sent;
          _context2.next = 20;
          return _models.userModel.create({
            email: email,
            phoneNumber: phoneNumber,
            name: name,
            password: hashed
          });
        case 20:
          createUser = _context2.sent;
          if (createUser) {
            _context2.next = 23;
            break;
          }
          throw new _index.NotFoundError("something went wrong!");
        case 23:
          return _context2.abrupt("return", _service["default"].sendResponse(res, 200, "User Created Successfully", createUser));
        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 26]]);
  }));
  return function signUp(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var forgotPassword = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var _req$body3, email, newPassword, confirmPassword, checkEmail, hashed, userData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body3 = req.body, email = _req$body3.email, newPassword = _req$body3.newPassword, confirmPassword = _req$body3.confirmPassword;
          if (!(!email || !newPassword || !confirmPassword)) {
            _context3.next = 4;
            break;
          }
          throw new _index.NotFoundError("please pass required valid data");
        case 4:
          _context3.next = 6;
          return _models.userModel.findOne({
            email: email,
            role: "CUSTOMER"
          });
        case 6:
          checkEmail = _context3.sent;
          if (checkEmail) {
            _context3.next = 9;
            break;
          }
          throw new _index.NotFoundError("email is not found");
        case 9:
          if (!(newPassword == confirmPassword)) {
            _context3.next = 20;
            break;
          }
          _context3.next = 12;
          return (0, _utils.hashPassword)(newPassword);
        case 12:
          hashed = _context3.sent;
          checkEmail.password = hashed;
          _context3.next = 16;
          return checkEmail.save();
        case 16:
          userData = _context3.sent;
          return _context3.abrupt("return", _service["default"].sendResponse(res, 200, "Reset Password Successfully", userData));
        case 20:
          throw new _index.NotFoundError("Conform Password Not match");
        case 21:
          _context3.next = 26;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 23]]);
  }));
  return function forgotPassword(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var updateProfileData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var userId, userExits, _updateProfileData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          userId = req.body.userId;
          if (userId) {
            _context4.next = 4;
            break;
          }
          throw new _index.NotFoundError("please enter userId");
        case 4:
          _context4.next = 6;
          return _models.userModel.findOne({
            _id: userId,
            role: "CUSTOMER"
          });
        case 6:
          userExits = _context4.sent;
          if (userExits) {
            _context4.next = 9;
            break;
          }
          throw new _index.NotFoundError("user not found");
        case 9:
          userExits.email = req.body.email ? req.body.email : userExits.email;
          userExits.phoneNumber = req.body.phoneNumber ? req.body.phoneNumber : userExits.phoneNumber;
          userExits.name = req.body.name ? req.body.name : userExits.name;
          _context4.next = 14;
          return userExits.save();
        case 14:
          _updateProfileData = _context4.sent;
          if (_updateProfileData) {
            _context4.next = 17;
            break;
          }
          throw new Error("User Profile Not Updated");
        case 17:
          return _context4.abrupt("return", _service["default"].sendResponse(res, 200, "User Profile Updated Successfully", _updateProfileData));
        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 23:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 20]]);
  }));
  return function updateProfileData(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  logIn: logIn,
  signUp: signUp,
  forgotPassword: forgotPassword,
  updateProfileData: updateProfileData
};