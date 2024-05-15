"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _models = require("../models");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _service = _interopRequireDefault(require("../utils/service"));
var _index = require("../error/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addToCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var _req$body, productId, userId, productExits, userExits, crateCart, cartFind, updateCart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (req.body) {
            _context.next = 3;
            break;
          }
          throw new Error("Please Enter Data");
        case 3:
          _req$body = req.body, productId = _req$body.productId, userId = _req$body.userId;
          if (productId) {
            _context.next = 6;
            break;
          }
          throw new _index.NotFoundError("Please Pass ProjectId");
        case 6:
          if (userId) {
            _context.next = 8;
            break;
          }
          throw new _index.NotFoundError("Please Pass userId");
        case 8:
          _context.next = 10;
          return _models.productModel.findOne({
            _id: productId
          });
        case 10:
          productExits = _context.sent;
          if (productExits) {
            _context.next = 13;
            break;
          }
          throw new _index.NotFoundError("Product not found.");
        case 13:
          _context.next = 15;
          return _models.userModel.aggregate([{
            $match: {
              _id: new _mongoose["default"].Types.ObjectId(userId)
            }
          }, {
            $lookup: {
              from: "carts",
              "let": {
                user_id: "$_id"
              },
              pipeline: [{
                $match: {
                  $expr: {
                    $and: [{
                      $eq: ["$isCheckout", false]
                    }, {
                      $eq: ["$userId", "$$user_id"]
                    }]
                  }
                }
              }],
              as: "cartData"
            }
          }]);
        case 15:
          userExits = _context.sent;
          if (userExits[0]) {
            _context.next = 18;
            break;
          }
          throw new _index.BadRequestError("User Not Found");
        case 18:
          if (!(userExits && userExits[0].cartData.length == 0 || !userId)) {
            _context.next = 27;
            break;
          }
          _context.next = 21;
          return _models.cartModel.create({
            totalPrice: productExits.price ? productExits.price : 0,
            productId: productId,
            userId: userId
          });
        case 21:
          crateCart = _context.sent;
          if (crateCart) {
            _context.next = 24;
            break;
          }
          throw new _index.BadRequestError("Something Went Wrong");
        case 24:
          return _context.abrupt("return", _service["default"].sendResponse(res, 200, "Cart Add Success", crateCart));
        case 27:
          cartFind = userExits[0].cartData[0];
          cartFind.productId.push(productId);
          cartFind.totalPrice = cartFind.totalPrice && productExits.price ? cartFind.totalPrice + productExits.price : cartFind.totalPrice;
          _context.next = 32;
          return _models.cartModel.findOneAndUpdate({
            _id: cartFind._id
          }, cartFind);
        case 32:
          updateCart = _context.sent;
          return _context.abrupt("return", _service["default"].sendResponse(res, 200, "cart add success", updateCart));
        case 34:
          _context.next = 39;
          break;
        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 39:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 36]]);
  }));
  return function addToCart(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var getCart = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var _req$query, userId, cartId, checkCart, findCartId, userCart;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, userId = _req$query.userId, cartId = _req$query.cartId;
          if (!(!userId && !cartId)) {
            _context2.next = 4;
            break;
          }
          throw new _index.NotFoundError("please pass required field");
        case 4:
          if (!userId) {
            _context2.next = 12;
            break;
          }
          _context2.next = 7;
          return _models.cartModel.findOne({
            userId: userId
          });
        case 7:
          checkCart = _context2.sent;
          if (checkCart) {
            _context2.next = 10;
            break;
          }
          throw new _index.NotFoundError("User Not Found");
        case 10:
          _context2.next = 20;
          break;
        case 12:
          if (!cartId) {
            _context2.next = 20;
            break;
          }
          _context2.next = 15;
          return _models.cartModel.findOne({
            _id: cartId
          });
        case 15:
          findCartId = _context2.sent;
          if (findCartId) {
            _context2.next = 18;
            break;
          }
          throw new _index.NotFoundError("Cart Not Found");
        case 18:
          if (!findCartId.isCheckout) {
            _context2.next = 20;
            break;
          }
          throw new _index.BadRequestError("Payment Done For This Cart");
        case 20:
          if (!(userId || cartId)) {
            _context2.next = 25;
            break;
          }
          _context2.next = 23;
          return _models.cartModel.aggregate([{
            $match: {
              $or: [{
                userId: new _mongoose["default"].Types.ObjectId(userId)
              }, {
                _id: new _mongoose["default"].Types.ObjectId(cartId)
              }],
              isCheckout: false
            }
          }, {
            $lookup: {
              from: "products",
              "let": {
                productId: "$productId"
              },
              pipeline: [{
                $match: {
                  $expr: {
                    $and: [{
                      $eq: ["$isActive", true]
                    }, {
                      $in: ["$_id", "$$productId"]
                    }]
                  }
                }
              }],
              as: "productData"
            }
          }, {
            $lookup: {
              from: "categories",
              localField: "productData.categoryId",
              foreignField: "_id",
              as: "categoriesData"
            }
          }, {
            $lookup: {
              from: "tags",
              localField: "productData.tagId",
              foreignField: "_id",
              as: "tagData"
            }
          }, {
            $lookup: {
              from: "productimages",
              localField: "productData._id",
              foreignField: "productId",
              as: "imagesData"
            }
          }, {
            $project: {
              _id: 1,
              productId: 1,
              userId: 1,
              totalPrice: 1,
              productName: {
                $arrayElemAt: ["$productData.productName", 0]
              },
              productPrice: {
                $arrayElemAt: ["$productData.price", 0]
              },
              categoryName: {
                $arrayElemAt: ["$categoriesData.categoryName", 0]
              },
              tagName: {
                $arrayElemAt: ["$tagData.tagName", 0]
              },
              images: {
                $map: {
                  input: "$imagesData",
                  as: "image",
                  "in": {
                    $concat: [process.env.BASE_URL, "$$image.imagePath"]
                  }
                }
              },
              isCheckout: 1,
              isDeleted: 1,
              price: 1,
              isActive: 1,
              createdAt: 1,
              updatedAt: 1
            }
          }]);
        case 23:
          userCart = _context2.sent;
          return _context2.abrupt("return", _service["default"].sendResponse(res, 200, "Get Data SuccessFully", userCart));
        case 25:
          _context2.next = 30;
          break;
        case 27:
          _context2.prev = 27;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 30:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 27]]);
  }));
  return function getCart(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var removeFromCart = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var _req$body2, productId, cartId, cartExist, productExist, index, updateCart;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, productId = _req$body2.productId, cartId = _req$body2.cartId;
          console.log("🚀 ~ removeFromCart ~ req.body:", req.body.cartId);
          if (!(!cartId || !productId)) {
            _context3.next = 5;
            break;
          }
          throw new _index.NotFoundError("please enter valid data");
        case 5:
          _context3.next = 7;
          return _models.cartModel.findOne({
            _id: cartId,
            isCheckout: false
          });
        case 7:
          cartExist = _context3.sent;
          console.log("🚀 ~ removeFromCart ~ cartExist:", cartExist);
          if (cartExist) {
            _context3.next = 11;
            break;
          }
          throw new _index.NotFoundError("Cart not found");
        case 11:
          _context3.next = 13;
          return _models.productModel.findOne({
            _id: productId
          });
        case 13:
          productExist = _context3.sent;
          if (productExist) {
            _context3.next = 16;
            break;
          }
          throw new _index.NotFoundError("Product not found.");
        case 16:
          if (!cartExist.productId.includes(productId)) {
            _context3.next = 22;
            break;
          }
          index = cartExist.productId.indexOf(productId);
          if (index !== -1) {
            cartExist.productId.splice(index, 1);
          }
          cartExist.totalPrice = cartExist.totalPrice - productExist.price;
          _context3.next = 23;
          break;
        case 22:
          throw new _index.NotFoundError("Product not found");
        case 23:
          _context3.next = 25;
          return _models.cartModel.findOneAndUpdate({
            _id: cartId
          }, cartExist);
        case 25:
          updateCart = _context3.sent;
          if (updateCart) {
            _context3.next = 28;
            break;
          }
          throw new _index.BadRequestError("Something went wrong while remove cart");
        case 28:
          return _context3.abrupt("return", _service["default"].sendResponse(res, 200, "Item Removed", updateCart));
        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 31]]);
  }));
  return function removeFromCart(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  addToCart: addToCart,
  getCart: getCart,
  removeFromCart: removeFromCart
};