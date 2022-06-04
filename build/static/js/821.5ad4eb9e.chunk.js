"use strict";
(self["webpackChunkcountdown2uni"] = self["webpackChunkcountdown2uni"] || []).push([[821],{

/***/ 6045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ FinishPage; }
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
// EXTERNAL MODULE: ./src/extensions/config.ts
var extensions_config = __webpack_require__(8661);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2791);
;// CONCATENATED MODULE: ./src/assets/icons/checkcircle.svg
var _path, _path2;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgCheckcircle(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M10 17.5C14.1422 17.5 17.5 14.1422 17.5 10C17.5 5.85787 14.1422 2.5 10 2.5C5.85787 2.5 2.5 5.85787 2.5 10C2.5 14.1422 5.85787 17.5 10 17.5Z",
    fill: "#4F6EF9",
    stroke: "#4F6EF9",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M14.1668 7.5L8.33341 13.3333L5.83337 10.8333",
    stroke: "white",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var ForwardRef = /*#__PURE__*/react.forwardRef(SvgCheckcircle);
/* harmony default export */ var checkcircle = (__webpack_require__.p + "static/media/checkcircle.1ce0a14021c0f630306b9c81f21726fd.svg");

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/screens/splash/components/InfoButton.tsx
var InfoButton=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(InfoButton,_React$Component);var _super=(0,createSuper/* default */.Z)(InfoButton);function InfoButton(){(0,classCallCheck/* default */.Z)(this,InfoButton);return _super.apply(this,arguments);}(0,createClass/* default */.Z)(InfoButton,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{onClick:this.props.onClick,className:"box-border rounded-xl overflow-hidden w-36 p-2 cursor-pointer relative m-2 border-2 transition-all "+(this.props.checked?"bg-blue-100 border-blue-600":"bg-gray-50 hover:bg-gray-100"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"font-lexend text-center select-none text-3xl "+(this.props.checked?"text-blue-600 font-black":"text-gray-500 font-bold"),children:this.props.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"font-lexend font-normal text-center select-none "+(this.props.checked?"text-blue-500":"text-gray-400"),children:this.props.description}),/*#__PURE__*/(0,jsx_runtime.jsx)(ForwardRef,{className:"absolute top-1 right-1 transition-all "+(this.props.checked?"opacity-1":"opacity-0")})]});}}]);return InfoButton;}(react.Component);
// EXTERNAL MODULE: ./src/extensions/common.ts
var common = __webpack_require__(5489);
// EXTERNAL MODULE: ./src/api/getTime.ts
var getTime = __webpack_require__(1827);
// EXTERNAL MODULE: ./src/api/common.ts
var api_common = __webpack_require__(9419);
;// CONCATENATED MODULE: ./src/api/getEvent.ts
var Host=(0,api_common/* getAbsoluteURL */.C)("data/data.json");/*
* Get Time events from server
* @returns {Promise<EventType[]>}: The event list or empty array if error
*/function getEvent(){return _getEvent.apply(this,arguments);}function _getEvent(){_getEvent=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var response,data;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return fetch(Host,{method:"GET",mode:"cors"// for external requests (avoid CORS error)
});case 3:response=_context.sent;_context.next=6;return response.json();case 6:data=_context.sent;if(!data){_context.next=11;break;}return _context.abrupt("return",data.events);case 11:throw new Error("Invalid response data");case 12:_context.next=18;break;case 14:_context.prev=14;_context.t0=_context["catch"](0);console.log(_context.t0);return _context.abrupt("return",[]);case 18:case"end":return _context.stop();}}},_callee,null,[[0,14]]);}));return _getEvent.apply(this,arguments);}
;// CONCATENATED MODULE: ./src/screens/splash/pages/start.tsx
var FinishPage=/*#__PURE__*/function(_React$Component){(0,inherits/* default */.Z)(FinishPage,_React$Component);var _super=(0,createSuper/* default */.Z)(FinishPage);function FinishPage(props){var _this;(0,classCallCheck/* default */.Z)(this,FinishPage);_this=_super.call(this,props);_this.state={yearBornID:"yb-2k4",yearBornList:[]};return _this;}(0,createClass/* default */.Z)(FinishPage,[{key:"handleChangeInfoButton",value:function(){var _handleChangeInfoButton=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(yearBornID){var config;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:config=new extensions_config/* default */.Z();_context.next=3;return config.load();case 3:config.setByKey("yearBornID",yearBornID);_context.t0=config;_context.next=7;return (0,getTime/* getTime */.h)(config.get());case 7:_context.t1=_context.sent;_context.t0.setByKey.call(_context.t0,"finishDate",_context.t1);_context.next=11;return config.save();case 11:(0,common/* emitChangeFromInject */.bf)(common/* EventEmitType.ALL */.KF.ALL);this.setState({yearBornID:yearBornID});case 13:case"end":return _context.stop();}}},_callee,this);}));function handleChangeInfoButton(_x){return _handleChangeInfoButton.apply(this,arguments);}return handleChangeInfoButton;}()},{key:"componentDidMount",value:function(){var _componentDidMount=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){var config,c,e;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:config=new extensions_config/* default */.Z();_context2.next=3;return config.load();case 3:c=config.get();_context2.next=6;return getEvent();case 6:e=_context2.sent;this.setState({yearBornID:c.yearBornID,yearBornList:e});case 8:case"end":return _context2.stop();}}},_callee2,this);}));function componentDidMount(){return _componentDidMount.apply(this,arguments);}return componentDidMount;}()},{key:"render",value:function render(){var _this2=this;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex overflow-hidden w-full h-full",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bg-[#eddda2] w-64 rounded-2xl shadow-sm m-3 p-3 flex flex-none flex-col justify-end items-center",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"m-3 my-8",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"font-lexend text-2xl font-semibold text-white",children:"Getting started"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"font-lexend text-sm font-normal text-white mt-3",children:"Start config something to initial app"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:"my-12",src:"./images/items/love1.png",alt:"deco"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"#/splash/finish",className:"my-5 font-lexend font-bold p-3 py-1 text-white bg-blue-500 hover:bg-blue-400 rounded-md shadow-md transition-all",children:"Finish"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"p-14 shrink",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"font-lexend font-medium text-gray-700 text-3xl",children:"Choose your birth year"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"font-lexend font-light text-gray-500 text-sm mt-2",children:"We use this to calculate the year you will take part in National High School Exam"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt-8 flex flex-wrap justify-center",children:this.state.yearBornList.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(InfoButton,{title:item.title,description:item.description,checked:item.id===_this2.state.yearBornID,onClick:_this2.handleChangeInfoButton.bind(_this2,item.id)},item.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"./images/items/love2.png",alt:"deco 2"})]})]});}}]);return FinishPage;}(react.Component);

/***/ })

}]);
//# sourceMappingURL=821.5ad4eb9e.chunk.js.map