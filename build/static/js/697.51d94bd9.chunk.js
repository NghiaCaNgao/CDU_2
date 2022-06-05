"use strict";
(self["webpackChunkcountdown2uni"] = self["webpackChunkcountdown2uni"] || []).push([[697],{

/***/ 5759:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Popup; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(9388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2791);
// EXTERNAL MODULE: ./src/extensions/config.ts
var extensions_config = __webpack_require__(8661);
// EXTERNAL MODULE: ./src/api/getTime.ts
var getTime = __webpack_require__(1827);
// EXTERNAL MODULE: ./src/extensions/common.ts
var common = __webpack_require__(5489);
// EXTERNAL MODULE: ./src/api/common.ts
var api_common = __webpack_require__(9419);
;// CONCATENATED MODULE: ./src/api/getNoti.ts
var Host=(0,api_common/* getAbsoluteURL */.C)("/data/notification.json");/* Get general notification from server
* @returns {Promise<NotificationItem[]>}: The notification list or empty array if error
*/function getNotification(){return _getNotification.apply(this,arguments);}function _getNotification(){_getNotification=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var response,data;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return fetch(Host,{method:"GET",mode:"cors"// for external requests (avoid CORS error)
});case 3:response=_context.sent;_context.next=6;return response.json();case 6:data=_context.sent;console.log(data);if(!data){_context.next=12;break;}return _context.abrupt("return",data.data);case 12:throw new Error("Invalid response data");case 13:_context.next=19;break;case 15:_context.prev=15;_context.t0=_context["catch"](0);console.log(_context.t0);return _context.abrupt("return",[]);case 19:case"end":return _context.stop();}}},_callee,null,[[0,15]]);}));return _getNotification.apply(this,arguments);}
;// CONCATENATED MODULE: ./src/components/icon.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var icon = ({});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/components/LinkIcon.tsx
var LinkIcon=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(LinkIcon,_React$Component);var _super=(0,createSuper/* default */.Z)(LinkIcon);function LinkIcon(){(0,classCallCheck/* default */.Z)(this,LinkIcon);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(LinkIcon,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{id:this.props.id,href:this.props.to,target:"_blank",rel:"noreferrer",className:"icon p-1 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-violet-300 hover:drop-shadow-lg",children:this.props.icon});}}]);return LinkIcon;}(react.Component);
;// CONCATENATED MODULE: ./src/components/ButtonIcon.tsx
var ButtonIcon=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(ButtonIcon,_React$Component);var _super=(0,createSuper/* default */.Z)(ButtonIcon);function ButtonIcon(){(0,classCallCheck/* default */.Z)(this,ButtonIcon);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(ButtonIcon,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{id:this.props.id,onClick:this.props.onClick,className:"icon p-1 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-violet-300 hover:drop-shadow-lg",children:this.props.icon});}}]);return ButtonIcon;}(react.Component);
;// CONCATENATED MODULE: ./src/assets/icons/arrowcircleup.svg
var _path, _path2, _path3;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgArrowcircleup(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M12 7V17",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M16 11L12 7L8 11",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var ForwardRef = /*#__PURE__*/react.forwardRef(SvgArrowcircleup);
/* harmony default export */ var arrowcircleup = (__webpack_require__.p + "static/media/arrowcircleup.cfe0765b9f92cf33470b5ba9db791539.svg");

;// CONCATENATED MODULE: ./src/assets/icons/flag3.svg
var flag3_path, flag3_path2;

var flag3_excluded = ["title", "titleId"];

function flag3_extends() { flag3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return flag3_extends.apply(this, arguments); }

function flag3_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = flag3_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function flag3_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgFlag3(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = flag3_objectWithoutProperties(_ref, flag3_excluded);

  return /*#__PURE__*/react.createElement("svg", flag3_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, flag3_path || (flag3_path = /*#__PURE__*/react.createElement("path", {
    d: "M6 21V3V17",
    stroke: "#BBA137",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), flag3_path2 || (flag3_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M6 3L17.1164 8.18763C18.6553 8.90582 18.6553 11.0942 17.1164 11.8124L6 17",
    stroke: "#BBA137",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var flag3_ForwardRef = /*#__PURE__*/react.forwardRef(SvgFlag3);
/* harmony default export */ var flag3 = (__webpack_require__.p + "static/media/flag3.f0d1536ec44a9d55bf0cbe76a2cf1ca8.svg");

;// CONCATENATED MODULE: ./src/screens/popup/components/noti.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var noti = ({});
;// CONCATENATED MODULE: ./src/screens/popup/components/NotiItem.tsx
var NotiIcon=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(NotiIcon,_React$Component);var _super=(0,createSuper/* default */.Z)(NotiIcon);function NotiIcon(){(0,classCallCheck/* default */.Z)(this,NotiIcon);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(NotiIcon,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"noti-item flex items-center rounded-xl px-3 py-2 transition-all cursor-pointer "+(this.props.type==="update"?"hover:bg-violet-50":"hover:bg-yellow-50"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"noti-item__icon h-10 w-10 flex items-center justify-center rounded-full "+(this.props.type==="update"?"bg-violet-100":"bg-yellow-100"),children:this.props.type==="update"?/*#__PURE__*/(0,jsx_runtime.jsx)(ForwardRef,{className:"stroke-violet-200"}):/*#__PURE__*/(0,jsx_runtime.jsx)(flag3_ForwardRef,{className:"stroke-yellow-200"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-col pl-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"font-lexend font-bold text-lg "+(this.props.type==="update"?"text-violet-400":"text-yellow-400"),children:this.props.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"font-nunito font-semibold text-sm text-gray-600 ",children:this.props.description})]})]});}}]);return NotiIcon;}(react.Component);
;// CONCATENATED MODULE: ./src/assets/icons/bell.svg
var bell_path, bell_path2;

var bell_excluded = ["title", "titleId"];

function bell_extends() { bell_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bell_extends.apply(this, arguments); }

function bell_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = bell_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function bell_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgBell(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = bell_objectWithoutProperties(_ref, bell_excluded);

  return /*#__PURE__*/react.createElement("svg", bell_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, bell_path || (bell_path = /*#__PURE__*/react.createElement("path", {
    d: "M12 3.5C8.68628 3.5 5.99999 5.18629 5.99999 8.5C5.99999 10.4392 5.29493 12.6133 4.56842 14.3389C3.96518 15.7717 4.97778 17.5 6.53237 17.5H17.4676C19.0222 17.5 20.0348 15.7717 19.4316 14.3389C18.705 12.6133 18 10.4392 18 8.5C18 5.18629 15.3137 3.5 12 3.5Z",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), bell_path2 || (bell_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M9 17.5V18.5C9 20.1569 10.3431 21 12 21C13.6569 21 15 20.1569 15 18.5V17.5",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var bell_ForwardRef = /*#__PURE__*/react.forwardRef(SvgBell);
/* harmony default export */ var bell = (__webpack_require__.p + "static/media/bell.4f5c16f74d7168953d828e28a2d2c319.svg");

;// CONCATENATED MODULE: ./src/assets/icons/settings.svg
var settings_path, settings_path2;

var settings_excluded = ["title", "titleId"];

function settings_extends() { settings_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return settings_extends.apply(this, arguments); }

function settings_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = settings_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function settings_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgSettings(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = settings_objectWithoutProperties(_ref, settings_excluded);

  return /*#__PURE__*/react.createElement("svg", settings_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, settings_path || (settings_path = /*#__PURE__*/react.createElement("path", {
    d: "M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10H20C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10H4.56877C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z",
    stroke: "white",
    strokeWidth: 2
  })), settings_path2 || (settings_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",
    stroke: "white",
    strokeWidth: 2
  })));
}

var settings_ForwardRef = /*#__PURE__*/react.forwardRef(SvgSettings);
/* harmony default export */ var settings = (__webpack_require__.p + "static/media/settings.a190c657c18b01af6e6f02c888b57676.svg");

;// CONCATENATED MODULE: ./src/assets/icons/rotateleft.svg
var rotateleft_path, rotateleft_path2;

var rotateleft_excluded = ["title", "titleId"];

function rotateleft_extends() { rotateleft_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return rotateleft_extends.apply(this, arguments); }

function rotateleft_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = rotateleft_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function rotateleft_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgRotateleft(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = rotateleft_objectWithoutProperties(_ref, rotateleft_excluded);

  return /*#__PURE__*/react.createElement("svg", rotateleft_extends({
    width: 25,
    height: 25,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, rotateleft_path || (rotateleft_path = /*#__PURE__*/react.createElement("path", {
    d: "M3.60803 8.53549C5.93549 6.44691 8.09095 4.08225 11.3534 3.62328C13.2857 3.35142 15.2541 3.7149 16.9619 4.65892C18.6697 5.60295 20.0245 7.0764 20.822 8.85726C21.6195 10.6381 21.8166 12.6299 21.3836 14.5325C20.9506 16.4351 19.911 18.1455 18.4213 19.4059C16.9317 20.6663 15.0727 21.4085 13.1245 21.5206C11.1764 21.6327 9.24455 21.1087 7.62011 20.0275C5.99568 18.9463 4.76665 17.3665 4.11821 15.5262",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), rotateleft_path2 || (rotateleft_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M3.60803 2.53549V8.53549H9.60803",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var rotateleft_ForwardRef = /*#__PURE__*/react.forwardRef(SvgRotateleft);
/* harmony default export */ var rotateleft = (__webpack_require__.p + "static/media/rotateleft.dea70d274c78b93b3bd5008ca3c23597.svg");

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(1830);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/screens/popup/components/HeaderPopup.tsx
var HeaderPopup=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(HeaderPopup,_React$Component);var _super=(0,createSuper/* default */.Z)(HeaderPopup);function HeaderPopup(props){var _this;(0,classCallCheck/* default */.Z)(this,HeaderPopup);_this=_super.call(this,props);_this.ref=void 0;_this.state={isVisibleNotification:false,notifications:[]};_this.ref=/*#__PURE__*/react.createRef();return _this;}(0,createClass/* default */.Z)(HeaderPopup,[{key:"toggleVisibleNotification",value:function toggleVisibleNotification(){this.setState({isVisibleNotification:!this.state.isVisibleNotification});}},{key:"setVisibleNotification",value:function setVisibleNotification(state){this.setState({isVisibleNotification:state});}},{key:"restoreData",value:function(){var _restoreData=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var config;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:config=new extensions_config/* default */.Z();_context.next=3;return config.load();case 3:_context.next=5;return config.resetData();case 5:sweetalert2_all_default().fire('Clear data','All data has been reset to default','success');this.props.onChange&&this.props.onChange();case 7:case"end":return _context.stop();}}},_callee,this);}));function restoreData(){return _restoreData.apply(this,arguments);}return restoreData;}()},{key:"handleClickOutside",value:function handleClickOutside(event){// Check if clicked target is inside the ref
if(this.ref.current&&!this.ref.current.contains(event.target)){this.setVisibleNotification(false);}}},{key:"componentDidMount",value:function(){var _componentDidMount=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.t0=this;_context2.next=3;return getNotification();case 3:_context2.t1=_context2.sent;_context2.t2={notifications:_context2.t1};_context2.t0.setState.call(_context2.t0,_context2.t2);// Setup event listener for outside click
document.addEventListener("mousedown",this.handleClickOutside.bind(this));case 7:case"end":return _context2.stop();}}},_callee2,this);}));function componentDidMount(){return _componentDidMount.apply(this,arguments);}return componentDidMount;}()},{key:"componentWillUnmount",value:function componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside.bind(this));}},{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"p-5 py-0 relative",ref:this.ref,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between relative z-50 transition-all "+(this.state.isVisibleNotification?"mt-2":""),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"text-xl font-lexend font-black text-violet-pastel",children:"Countdown2uni"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonIcon,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(rotateleft_ForwardRef,{}),id:"btn-restore",onClick:this.restoreData.bind(this)}),/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonIcon,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell_ForwardRef,{}),id:"btn-notification",onClick:this.toggleVisibleNotification.bind(this)}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkIcon,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(settings_ForwardRef,{}),id:"btn-settings",to:"#/options"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"notification bg-white rounded-2xl w-full p-3 absolute -top-2 left-0 shadow-2xl transition-all "+(this.state.isVisibleNotification?"opacity-100 z-40":"opacity-0 z-0"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"h-10"}),this.state.notifications.map(function(noti,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(NotiIcon,{title:noti.title,type:noti.type,description:noti.description},index);})]})]});}}]);return HeaderPopup;}(react.Component);
;// CONCATENATED MODULE: ./src/api/def.ts
var CountType;(function(CountType){CountType["Day"]="0";CountType["Month"]="1";CountType["Year"]="2";CountType["Hour"]="3";CountType["Minute"]="4";CountType["Second"]="5";CountType["Week"]="6";})(CountType||(CountType={}));;var FieldType;(function(FieldType){FieldType[FieldType["isFloatCountdown"]=0]="isFloatCountdown";FieldType[FieldType["isSyncWithServer"]=1]="isSyncWithServer";FieldType[FieldType["finishDate"]=2]="finishDate";FieldType[FieldType["countBy"]=3]="countBy";FieldType[FieldType["background"]=4]="background";FieldType[FieldType["textColor"]=5]="textColor";FieldType[FieldType["yearBornID"]=6]="yearBornID";})(FieldType||(FieldType={}));
;// CONCATENATED MODULE: ./src/api/calcTime.ts
/*
* Calculate time left and return formatted string
* @param 
    format: CountType - The type of countdown: (by day, month,...)
    endTime: number - The end time of the countdown
    delimiter: string - The delimiter between the time parts
@ returns {string}: The formatted string
*/function calcTime(format,endTime){var delimiter=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"-";var now=new Date();var time=endTime-now.getTime();if(time<0)return"Done";var formatNumber=new Intl.NumberFormat();switch(format){case CountType.Second:return"".concat(formatNumber.format(Math.floor(time/1000))).concat(delimiter,"s");case CountType.Minute:return"".concat(formatNumber.format(Math.floor(time/(1000*60)))).concat(delimiter,"m");case CountType.Hour:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60)))).concat(delimiter,"h");case CountType.Day:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24)))).concat(delimiter,"D");case CountType.Week:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24*7)))).concat(delimiter,"W");case CountType.Month:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24*30)))).concat(delimiter,"M");case CountType.Year:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24*30*12)))).concat(delimiter,"Y");default:return"";}}
;// CONCATENATED MODULE: ./src/screens/popup/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var popup = ({});
;// CONCATENATED MODULE: ./src/screens/popup/components/CountdownCard.tsx
var CountdownCard=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(CountdownCard,_React$Component);var _super=(0,createSuper/* default */.Z)(CountdownCard);function CountdownCard(){(0,classCallCheck/* default */.Z)(this,CountdownCard);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(CountdownCard,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card-countdown p-3 m-3 rounded-2xl bg-white drop-shadow-xl relative z-10",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{backgroundImage:"url(".concat(this.props.background.url,")"),color:this.props.textColor},className:"container background p-3 rounded-2xl h-40 flex items-center justify-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"font-lexend font-bold text-7xl text-shadow truncate",children:calcTime(this.props.countType,this.props.finishDate)})})});}}]);return CountdownCard;}(react.Component);
;// CONCATENATED MODULE: ./src/components/switcher.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var switcher = ({});
;// CONCATENATED MODULE: ./src/components/Switcher.tsx
var Switcher=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(Switcher,_React$Component);var _super=(0,createSuper/* default */.Z)(Switcher);function Switcher(){(0,classCallCheck/* default */.Z)(this,Switcher);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(Switcher,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"switcher flex justify-between mx-3 my-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"switcher__title font-semibold text-gray-500 text-lg",children:this.props.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"switcher__switch",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"switcher__switch-fake "+(this.props.checked?"active":""),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"switcher__switch-fake__slider "+(this.props.checked?"active":"")}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{id:this.props.id,type:"checkbox",className:"switcher__switch-input",defaultChecked:this.props.checked,onChange:this.props.onChange})]})})]});}}]);return Switcher;}(react.Component);
// EXTERNAL MODULE: ./src/components/Input.tsx
var Input = __webpack_require__(6681);
// EXTERNAL MODULE: ./src/screens/popup/components/SelectBackground.tsx
var SelectBackground = __webpack_require__(6407);
;// CONCATENATED MODULE: ./src/screens/popup/components/Setting.tsx
var countTypeOptions=Object.keys(CountType).map(function(key){return{value:CountType[key],label:key};});var Setting=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(Setting,_React$Component);var _super=(0,createSuper/* default */.Z)(Setting);function Setting(){(0,classCallCheck/* default */.Z)(this,Setting);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(Setting,[{key:"handleChange",value:function handleChange(field,event){this.props.onChange&&this.props.onChange(field,event);}},{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"setting-section m-3 mt-5 font-nunito",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"relative z-10",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Switcher,{title:"Float countdown",checked:this.props.data.isFloatCountdown,onChange:this.handleChange.bind(this,FieldType.isFloatCountdown)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Switcher,{title:"Sync with server",checked:this.props.data.isSyncWithServer,onChange:this.handleChange.bind(this,FieldType.isSyncWithServer)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.Z,{title:"Custom date",value:this.props.data.finishDate,type:Input/* InputType.Date */.n.Date,disabled:this.props.data.isSyncWithServer,onChange:this.handleChange.bind(this,FieldType.finishDate)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.Z,{title:"Count by",value:this.props.data.countBy,type:Input/* InputType.Select */.n.Select,disabled:false,dataSet:countTypeOptions,onChange:this.handleChange.bind(this,FieldType.countBy)}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.Z,{title:"Text color",value:this.props.data.textColor,type:Input/* InputType.Color */.n.Color,disabled:false,onChange:this.handleChange.bind(this,FieldType.textColor)})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectBackground/* default */.Z,{background:this.props.data.background,onChange:this.handleChange.bind(this,FieldType.background)})]});}}]);return Setting;}(react.Component);
;// CONCATENATED MODULE: ./src/screens/popup/index.tsx
// import FooterPopup from "./components/FooterPopup";
var Popup=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(Popup,_React$Component);var _super=(0,createSuper/* default */.Z)(Popup);function Popup(props){var _this;(0,classCallCheck/* default */.Z)(this,Popup);_this=_super.call(this,props);_this.state=(0,api_common/* getDefaultAppData */.t)();return _this;}(0,createClass/* default */.Z)(Popup,[{key:"loadAppData",value:function(){var _loadAppData=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){var _this2=this;var isEmitEvent,config,_args2=arguments;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:isEmitEvent=_args2.length>0&&_args2[0]!==undefined?_args2[0]:true;// Load data from extension storage
config=new extensions_config/* default */.Z();_context2.next=4;return config.load();case 4:// Update state
this.setState(config.get(),/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!_this2.state.isSyncWithServer){_context.next=3;break;}_context.next=3;return _this2.updateFinishDate();case 3:case"end":return _context.stop();}}},_callee);})));// Send message to every current tab if isEmitEvent is true
if(isEmitEvent)(0,common/* emitCountdownChanged */.ZZ)();case 6:case"end":return _context2.stop();}}},_callee2,this);}));function loadAppData(){return _loadAppData.apply(this,arguments);}return loadAppData;}()},{key:"updateFinishDate",value:function(){var _updateFinishDate=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(){var finishDate;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return (0,getTime/* getTime */.h)(this.state);case 2:finishDate=_context3.sent;this.setState({finishDate:finishDate});case 4:case"end":return _context3.stop();}}},_callee3,this);}));function updateFinishDate(){return _updateFinishDate.apply(this,arguments);}return updateFinishDate;}()},{key:"saveConfig",value:function(){var _saveConfig=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee4(eventEmitType){var config;return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:// Load and save data to extension storage
config=new extensions_config/* default */.Z();config.set(this.state);_context4.next=4;return config.save();case 4:// Send message to every current tab 
(0,common/* emitCountdownChanged */.ZZ)(eventEmitType||common/* EventEmitType.ALL */.KF.ALL,this.state);case 5:case"end":return _context4.stop();}}},_callee4,this);}));function saveConfig(_x){return _saveConfig.apply(this,arguments);}return saveConfig;}()},{key:"componentDidMount",value:function(){var _componentDidMount=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee5(){return regenerator_default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return this.loadAppData(false);case 2:case"end":return _context5.stop();}}},_callee5,this);}));function componentDidMount(){return _componentDidMount.apply(this,arguments);}return componentDidMount;}()},{key:"handleChange",value:function(){var _handleChange=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee6(field,event){var isChecked;return regenerator_default().wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.t0=field;_context6.next=_context6.t0===FieldType.isFloatCountdown?3:_context6.t0===FieldType.isSyncWithServer?5:_context6.t0===FieldType.finishDate?11:_context6.t0===FieldType.countBy?13:_context6.t0===FieldType.background?15:_context6.t0===FieldType.textColor?17:18;break;case 3:this.setState({isFloatCountdown:event.target.checked},this.saveConfig);return _context6.abrupt("break",18);case 5:isChecked=event.target.checked;if(!isChecked){_context6.next=9;break;}_context6.next=9;return this.updateFinishDate();case 9:this.setState({isSyncWithServer:isChecked},this.saveConfig);return _context6.abrupt("break",18);case 11:this.setState({finishDate:event.target.valueAsNumber},this.saveConfig);return _context6.abrupt("break",18);case 13:this.setState({countBy:event.target.value},this.saveConfig);return _context6.abrupt("break",18);case 15:this.setState({background:event},this.saveConfig);return _context6.abrupt("break",18);case 17:this.setState({textColor:event.target.value},this.saveConfig.bind(this,common/* EventEmitType.TEXT_COLOR */.KF.TEXT_COLOR));case 18:case"end":return _context6.stop();}}},_callee6,this);}));function handleChange(_x2,_x3){return _handleChange.apply(this,arguments);}return handleChange;}()},{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"popup-app bg-violet-50 p-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderPopup,{onChange:this.loadAppData.bind(this)}),/*#__PURE__*/(0,jsx_runtime.jsx)(CountdownCard,{textColor:this.state.textColor,background:this.state.background,countType:this.state.countBy,finishDate:this.state.finishDate}),/*#__PURE__*/(0,jsx_runtime.jsx)(Setting,{data:this.state,onChange:this.handleChange.bind(this)})]});}}]);return Popup;}(react.Component);

/***/ })

}]);
//# sourceMappingURL=697.51d94bd9.chunk.js.map