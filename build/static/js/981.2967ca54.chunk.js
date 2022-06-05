"use strict";
(self["webpackChunkcountdown2uni"] = self["webpackChunkcountdown2uni"] || []).push([[981],{

/***/ 5981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Options; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(9388);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2791);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(3504);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6871);
// EXTERNAL MODULE: ./src/assets/images/logo.png
var logo = __webpack_require__(4427);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/components/Logo/index.tsx
function Logo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.rU,{to:"/",className:"flex mx-3 my-3 h-8",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:logo,className:"object-scale-down"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"font-lexend text-[#08508e] mx-2 text-xl font-bold mt-1",children:"Countdown2Uni"})]})});}
;// CONCATENATED MODULE: ./src/screens/options/components/Nav/index.tsx
var NavLinks=[{name:"Bookmarks",to:"bookmarks"},{name:"New tab",to:"newtab"}];function Nav(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mx-5 ml-8 flex items-center",children:NavLinks.map(function(item,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU,{to:item.to,className:"block mx-5 text-gray-400 hover:text-gray-800 transition-all\r font-bold font-nunito text-[14px]",children:item.name},index);})});}
;// CONCATENATED MODULE: ./src/screens/options/components/Header/index.tsx
function Header(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bg-white flex border-b-2 border-b-gray-200",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Logo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Nav,{})]});}
;// CONCATENATED MODULE: ./src/screens/options/index.tsx
var OptionTabLinks=[{name:"Countdown",to:"/options"},{name:"Notifications",to:"/options/notifications"}];var Options=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(Options,_React$Component);var _super=(0,createSuper/* default */.Z)(Options);function Options(){(0,classCallCheck/* default */.Z)(this,Options);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(Options,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"min-h-screen bg-gray-50 min-w-[600px] overflow-scroll",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Header,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"max-w-[900px] w-full mx-auto mt-20 px-10 sm:px-20 lg:px-0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"text-gray-700 text-4xl font-lexend font-bold",children:"Settings"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex mt-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-10 w-44 overflow-hidden mr-3 flex-none",children:OptionTabLinks.map(function(item,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL,{to:item.to,end:true,className:function className(_ref){var isActive=_ref.isActive;return"block font-nunito text-[16px] truncate font-semibold rounded-2xl px-4 py-1 hover:text-gray-700 hover:bg-indigo-100 my-1 "+(isActive?"bg-indigo-100 text-gray-700":"text-gray-400");},children:item.name},index);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bg-white rounded-2xl shadow-lg h-40 w-full flex-shrink p-10",children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Outlet */.j3,{})})]})]})]});}}]);return Options;}(react.Component);

/***/ }),

/***/ 4427:
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 7326:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 5671:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 3144:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 9388:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1120);
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8814);
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2963);



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, result);
  };
}

/***/ }),

/***/ 1120:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9611);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 8814:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ 2963:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7326);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(self);
}

/***/ }),

/***/ 9611:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 1002:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=981.2967ca54.chunk.js.map