/*! For license information please see inject.js.LICENSE.txt */
!function(){var t={7757:function(t,e,r){t.exports=r(8937)},5918:function(t,e,r){"use strict";var n=r(7313),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,r){var n,i={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(l=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:s,ref:l,props:i,_owner:u.current}}e.jsx=s,e.jsxs=s},306:function(t,e){"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function m(t,e,r){this.props=t,this.context=e,this.refs=v,this.updater=r||d}function g(){}function b(t,e,r){this.props=t,this.context=e,this.refs=v,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=m.prototype;var w=b.prototype=new g;w.constructor=b,y(w,m.prototype),w.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,n){var o,i={},a=null,u=null;if(null!=e)for(o in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(a=""+e.key),e)k.call(e,o)&&!_.hasOwnProperty(o)&&(i[o]=e[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:t,key:a,ref:u,props:i,_owner:j.current}}function E(t){return"object"===typeof t&&null!==t&&t.$$typeof===r}var L=/\/+/g;function S(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function C(t,e,o,i,a){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=t),t=""===i?"."+S(c,0):i,x(a)?(o="",null!=t&&(o=t.replace(L,"$&/")+"/"),C(a,e,o,"",(function(t){return t}))):null!=a&&(E(a)&&(a=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(L,"$&/")+"/")+t)),e.push(a)),1;if(c=0,i=""===i?".":i+":",x(t))for(var s=0;s<t.length;s++){var l=i+S(u=t[s],s);c+=C(u,e,o,l,a)}else if(l=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=h&&t[h]||t["@@iterator"])?t:null}(t),"function"===typeof l)for(t=l.call(t),s=0;!(u=t.next()).done;)c+=C(u=u.value,e,o,l=i+S(u,s++),a);else if("object"===u)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function B(t,e,r){if(null==t)return t;var n=[],o=0;return C(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function D(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var P={current:null},R={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:R,ReactCurrentOwner:j};e.Children={map:B,forEach:function(t,e,r){B(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return B(t,(function(){e++})),e},toArray:function(t){return B(t,(function(t){return t}))||[]},only:function(t){if(!E(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=m,e.Fragment=o,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,e.cloneElement=function(t,e,n){if(null===t||void 0===t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=y({},t.props),i=t.key,a=t.ref,u=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,u=j.current),void 0!==e.key&&(i=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in e)k.call(e,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===e[s]&&void 0!==c?c[s]:e[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:t.type,key:i,ref:a,props:o,_owner:u}},e.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:t},t.Consumer=t},e.createElement=O,e.createFactory=function(t){var e=O.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:s,render:t}},e.isValidElement=E,e.lazy=function(t){return{$$typeof:p,_payload:{_status:-1,_result:t},_init:D}},e.memo=function(t,e){return{$$typeof:f,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=R.transition;R.transition={};try{t()}finally{R.transition=e}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(t,e){return P.current.useCallback(t,e)},e.useContext=function(t){return P.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return P.current.useDeferredValue(t)},e.useEffect=function(t,e){return P.current.useEffect(t,e)},e.useId=function(){return P.current.useId()},e.useImperativeHandle=function(t,e,r){return P.current.useImperativeHandle(t,e,r)},e.useInsertionEffect=function(t,e){return P.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return P.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return P.current.useMemo(t,e)},e.useReducer=function(t,e,r){return P.current.useReducer(t,e,r)},e.useRef=function(t){return P.current.useRef(t)},e.useState=function(t){return P.current.useState(t)},e.useSyncExternalStore=function(t,e,r){return P.current.useSyncExternalStore(t,e,r)},e.useTransition=function(){return P.current.useTransition()},e.version="18.0.0-fc46dba67-20220329"},7313:function(t,e,r){"use strict";t.exports=r(306)},6417:function(t,e,r){"use strict";t.exports=r(5918)},8937:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return B()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=g.prototype=v.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:B}}function B(){return{value:e,done:!0}}return m.prototype=g,c(k,"constructor",g),c(g,"constructor",m),m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},j(_.prototype),c(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),c(k,u,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",function(){"use strict";function t(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function u(e){t(a,o,i,u,c,"next",e)}function c(e){t(a,o,i,u,c,"throw",e)}u(void 0)}))}}var n,o,i=r(7757),a=r.n(i);function u(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",o=new Date,i=e-o.getTime();if(i<0)return"Done";var a=new Intl.NumberFormat;switch(t){case n.Second:return"".concat(a.format(Math.floor(i/1e3))).concat(r,"s");case n.Minute:return"".concat(a.format(Math.floor(i/6e4))).concat(r,"m");case n.Hour:return"".concat(a.format(Math.floor(i/36e5))).concat(r,"h");case n.Day:return"".concat(a.format(Math.floor(i/864e5))).concat(r,"D");case n.Week:return"".concat(a.format(Math.floor(i/6048e5))).concat(r,"W");case n.Month:return"".concat(a.format(Math.floor(i/2592e6))).concat(r,"M");case n.Year:return"".concat(a.format(Math.floor(i/31104e6))).concat(r,"Y");default:return""}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(){return(f=e(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",chrome.storage.sync.get(e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=e(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",chrome.storage.sync.set(e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:chrome.storage.sync.clear();case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){t.Day="0",t.Month="1",t.Year="2",t.Hour="3",t.Minute="4",t.Second="5",t.Week="6"}(n||(n={})),function(t){t[t.isFloatCountdown=0]="isFloatCountdown",t[t.isSyncWithServer=1]="isSyncWithServer",t[t.finishDate=2]="finishDate",t[t.countBy=3]="countBy",t[t.background=4]="background",t[t.textColor=5]="textColor",t[t.yearBornID=6]="yearBornID"}(o||(o={}));var d={get:function(t){return f.apply(this,arguments)},set:function(t){return p.apply(this,arguments)},clear:function(){return h.apply(this,arguments)}},y=d,v="https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main/data/data.json",m=Date.now()+6048e5;function g(t){return b.apply(this,arguments)}function b(){return(b=e(a().mark((function t(e){var r,n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(v,{method:"GET",mode:"cors"});case 2:return r=t.sent,t.next=5,r.json();case 5:if(!(n=t.sent)){t.next=13;break}if(!e||!e.yearBornID){t.next=10;break}return o=n.events.find((function(t){return t.id===e.yearBornID})),t.abrupt("return",o?o.end_time:n.end_time);case 10:return t.abrupt("return",n.end_time);case 13:if(!e||!e.finishDate){t.next=17;break}return t.abrupt("return",e.finishDate);case 17:return t.abrupt("return",m);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t,e){if(e&&("object"===j(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=k(t);if(e){var o=k(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}var L,S,C,B,D=r(7313),P=["title","titleId"];function R(){return R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},R.apply(this,arguments)}function I(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function T(t,e){var r=t.title,n=t.titleId,o=I(t,P);return D.createElement("svg",R({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},o),r?D.createElement("title",{id:n},r):null,L||(L=D.createElement("path",{d:"M14.5062 2.5V6.5",stroke:"#B8B8B8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),S||(S=D.createElement("path",{d:"M8.70367 2.5V6.5",stroke:"#B8B8B8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),C||(C=D.createElement("path",{d:"M3.40155 11.5H19.8083",stroke:"#B8B8B8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),B||(B=D.createElement("path",{d:"M3.38477 12.5C3.38477 19 5.31892 21 11.6049 21C17.8909 21 19.8251 19 19.8251 12.5C19.8251 12.154 19.8196 11.8208 19.8083 11.5C19.6069 5.79277 17.5563 4 11.6049 4C5.65349 4 3.60298 5.79277 3.40156 11.5C3.39025 11.8208 3.38477 12.154 3.38477 12.5Z",stroke:"#B8B8B8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var N,M=D.forwardRef(T),$=(r.p,["title","titleId"]);function W(){return W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},W.apply(this,arguments)}function F(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function H(t,e){var r=t.title,n=t.titleId,o=F(t,$);return D.createElement("svg",W({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},o),r?D.createElement("title",{id:n},r):null,N||(N=D.createElement("path",{d:"M4 9L12 17L20 9",stroke:"#7381B1",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var U,A,V,Y=D.forwardRef(H),G=(r.p,["title","titleId"]);function q(){return q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},q.apply(this,arguments)}function X(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function z(t,e){var r=t.title,n=t.titleId,o=X(t,G);return D.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},o),r?D.createElement("title",{id:n},r):null,U||(U=D.createElement("path",{d:"M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H15",stroke:"#7381B1",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),A||(A=D.createElement("path",{d:"M8 12H16",stroke:"#7381B1",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),V||(V=D.createElement("path",{d:"M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9",stroke:"#7381B1",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var Z,K=D.forwardRef(z),J=(r.p,["title","titleId"]);function Q(){return Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Q.apply(this,arguments)}function tt(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function et(t,e){var r=t.title,n=t.titleId,o=tt(t,J);return D.createElement("svg",Q({width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},o),r?D.createElement("title",{id:n},r):null,Z||(Z=D.createElement("path",{d:"M20.3043 11.1435L12.2671 18.7236C11.2825 19.6522 9.94706 20.1739 8.5546 20.1739C7.16214 20.1739 5.82671 19.6522 4.84209 18.7236C3.85747 17.795 3.30432 16.5355 3.30432 15.2222C3.30432 13.909 3.85747 12.6495 4.84209 11.7209L12.8793 4.14077C13.5357 3.52169 14.426 3.1739 15.3543 3.1739C16.2826 3.1739 17.1729 3.52169 17.8293 4.14077C18.4857 4.75985 18.8545 5.5995 18.8545 6.47501C18.8545 7.35052 18.4857 8.19018 17.8293 8.80925L9.78336 16.3893C9.45515 16.6989 9.01001 16.8728 8.54586 16.8728C8.0817 16.8728 7.63656 16.6989 7.30835 16.3893C6.98015 16.0798 6.79576 15.66 6.79576 15.2222C6.79576 14.7845 6.98015 14.3646 7.30835 14.0551L14.7333 7.06064",stroke:"#7381B1",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var rt,nt,ot=D.forwardRef(et),it=(r.p,["title","titleId"]);function at(){return at=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},at.apply(this,arguments)}function ut(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function ct(t,e){var r=t.title,n=t.titleId,o=ut(t,it);return D.createElement("svg",at({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},o),r?D.createElement("title",{id:n},r):null,rt||(rt=D.createElement("path",{d:"M11 13L4 20",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),nt||(nt=D.createElement("path",{d:"M18 6.00001C20.4537 8.45369 17.9927 12.8732 16.3019 15.2964C15.6377 16.2482 14.3019 16.3019 13.4812 15.4812L8.51882 10.5188C7.69809 9.69811 7.75174 8.36225 8.70361 7.69808C11.1268 6.00734 15.5463 3.54633 18 6.00001Z",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var st,lt=D.forwardRef(ct),ft=(r.p,r(6417));!function(t){t.Text="text",t.Select="select",t.Date="date",t.Button="button",t.Color="color"}(st||(st={}));var pt=function(t){x(r,t);var e=E(r);function r(){return c(this,r),e.apply(this,arguments)}return l(r,[{key:"formatDate",value:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1))+"-"+(e.getDate()>9?e.getDate():"0"+e.getDate())}},{key:"handleTextLinkChange",value:function(t){this.props.onChangeTextLink&&this.props.onChangeTextLink(t.target.value)}},{key:"renderText",value:function(){return(0,ft.jsxs)("div",{className:"input__text flex items-center px-3 active",children:[(0,ft.jsx)("input",{id:this.props.id,type:"text",value:this.props.value,onChange:this.handleTextLinkChange.bind(this)}),(0,ft.jsx)("div",{children:(0,ft.jsx)(ot,{})})]})}},{key:"renderDate",value:function(){return(0,ft.jsxs)("div",{className:"input__date transition-all",children:[(0,ft.jsx)("input",{id:this.props.id,type:this.props.type,defaultValue:this.formatDate(Number(this.props.value)),disabled:this.props.disabled,onChange:this.props.onChange}),(0,ft.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 "+(this.props.disabled?"":"active"),children:[(0,ft.jsx)("span",{className:"font-nunito font-semibold text-lg "+(this.props.disabled?"":"active"),children:new Date(this.props.value).toLocaleDateString("vi")}),(0,ft.jsx)("div",{children:(0,ft.jsx)(M,{})})]})]})}},{key:"renderSelect",value:function(){var t=this;return(0,ft.jsxs)("div",{className:"input__select",children:[(0,ft.jsx)("select",{id:this.props.id,defaultValue:this.props.value,disabled:this.props.disabled,onChange:this.props.onChange,children:this.props.dataSet?this.props.dataSet.map((function(t,e){return(0,ft.jsx)("option",{value:t.value,children:t.label},e)})):null}),(0,ft.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 "+(this.props.disabled?"":"active"),children:[(0,ft.jsx)("span",{className:"font-nunito font-semibold text-lg "+(this.props.disabled?"":"active"),children:this.props.dataSet.filter((function(e){return e.value===t.props.value}))[0].label}),(0,ft.jsx)("div",{children:this.props.type===st.Select?(0,ft.jsx)(Y,{}):null})]})]})}},{key:"renderButton",value:function(){return(0,ft.jsxs)("div",{className:"input__button",children:[(0,ft.jsx)("button",{id:this.props.id,disabled:this.props.disabled,onClick:this.props.onClick}),(0,ft.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 transition-all "+(this.props.disabled?"":"active"),children:[(0,ft.jsx)("span",{className:"font-nunito font-semibold text-lg truncate "+(this.props.disabled?"":"active"),children:this.props.data?this.props.data.label:null}),(0,ft.jsx)("div",{children:this.props.type===st.Button?(0,ft.jsx)(K,{}):null})]})]})}},{key:"renderColor",value:function(){return(0,ft.jsxs)("div",{className:"input__color transition-all",children:[(0,ft.jsx)("input",{id:this.props.id,type:"color",defaultValue:this.props.value,disabled:this.props.disabled,onChange:this.props.onChange}),(0,ft.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 "+(this.props.disabled?"":"active"),children:[(0,ft.jsx)("span",{className:"font-nunito font-semibold text-lg "+(this.props.disabled?"":"active"),children:this.props.value}),(0,ft.jsx)("div",{children:(0,ft.jsx)(lt,{})})]})]})}},{key:"switchType",value:function(){switch(this.props.type){case st.Date:return this.renderDate();case st.Text:return this.renderText();case st.Select:return this.renderSelect();case st.Button:return this.renderButton();case st.Color:return this.renderColor();default:return}}},{key:"render",value:function(){return(0,ft.jsxs)("div",{className:"input flex justify-between items-center mx-3 my-4",children:[(0,ft.jsx)("div",{className:"input__title font-semibold text-gray-500 text-lg truncate",children:this.props.title}),this.switchType()]})}}]),r}(D.Component);var ht=function(t){x(r,t);var e=E(r);function r(t){var n;return c(this,r),(n=e.call(this,t)).imgElm=void 0,n.state={loaded:!1},n.handleScroll=n.handleScroll.bind(_(n)),n}return l(r,[{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var t=this;if(!this.state.loaded){var e=new Image;e.src=this.props.src,e.onload=function(){t.imgElm.setAttribute("src","".concat(t.props.src)),t.imgElm.classList.add("".concat(t.props.effect)),t.setState({loaded:!0})}}}},{key:"render",value:function(){var t=this,e=this.props.width||"100%",r=this.props.height||"100%";return(0,ft.jsx)("img",{src:this.props.placeHolder?this.props.placeHolder:"https://dummyimage.com/600x400/000000/dedede.png&text=c2u",width:e,height:r,ref:function(e){return t.imgElm=e},className:"lazy-image"+(this.props.className?" ".concat(this.props.className):""),alt:this.props.alt})}}]),r}(D.Component),dt=function(t){x(r,t);var e=E(r);function r(){return c(this,r),e.apply(this,arguments)}return l(r,[{key:"render",value:function(){return(0,ft.jsx)("div",{className:"m-2 w-20 h-12 rounded-xl transition-all cursor-pointer object-scale-down overflow-hidden "+(this.props.selected?"border-2 border-violet-500 p-1":""),onClick:this.props.onClick,children:(0,ft.jsx)(ht,{src:this.props.imgSrc,width:"100%",height:"auto",effect:"opacity",className:"rounded-lg w-full h-full overflow-hidden saturate-150 transition-all cursor-pointer hover:shadow-lg ",alt:"Background"})})}}]),r}(D.Component),yt=[{name:"Water",url:chrome.runtime.getURL("/images/background/bg1.jpg"),id:"water"},{name:"Dark Sky",url:chrome.runtime.getURL("/images/background/bg2.jpg"),id:"dark-sky"},{name:"Blue Mine",url:chrome.runtime.getURL("/images/background/bg3.jpg"),id:"blue-mine"},{name:"Hero",url:chrome.runtime.getURL("/images/background/bg4.jpg"),id:"hero"},{name:"Step",url:chrome.runtime.getURL("/images/background/bg5.jpg"),id:"step"},{name:"Gas",url:chrome.runtime.getURL("/images/background/bg6.jpg"),id:"gas"}];D.Component;function vt(t){return{isFloatCountdown:!0,isSyncWithServer:!0,finishDate:t||(new Date).getTime()+6048e5,countBy:"0",background:yt[0],textColor:"#ffffff",yearBornID:"yb-2k4"}}var mt,gt,bt,wt=function(){function t(){c(this,t),this.data=void 0,this.data=vt()}return l(t,[{key:"load",value:function(){var t=e(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("config");case 2:(e=t.sent.config)?this.data=e:this.resetData();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(){return this.data}},{key:"set",value:function(t){this.data=t}},{key:"setByKey",value:function(t,e){this.data[t]=e}},{key:"resetData",value:function(){var t=e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.clear();case 2:this.save();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clear",value:function(){var t=e(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:r=t.sent,this.data=vt(r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"save",value:function(){var t=e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.set({config:this.data});case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}],[{key:"clear",value:function(){var r=e(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new t,e.next=3,r.resetData();case 3:case"end":return e.stop()}}),e)})));return function(){return r.apply(this,arguments)}}()}]),t}();function xt(t){var e=0,r=0,n=0,o=0;function i(i){(i=i||window.event).preventDefault(),e=n-i.clientX,r=o-i.clientY,n=i.clientX,o=i.clientY,t.style.top=t.offsetTop-r+"px",t.style.left=t.offsetLeft-e+"px"}function a(){document.onmouseup=null,document.onmousemove=null}t.onmousedown=function(t){(t=t||window.event).preventDefault(),n=t.clientX,o=t.clientY,document.onmouseup=a,document.onmousemove=i}}function kt(){var t=document.getElementById("c2u-text"),e=u(gt.countBy,gt.finishDate," ");t&&(t.innerText=e)}function jt(){var t=0;switch(gt.countBy){case n.Day:case n.Month:case n.Year:case n.Week:case n.Hour:t=36e5;break;case n.Minute:t=6e4;break;case n.Second:t=1e3}bt=window.setInterval(kt,t)}function _t(){window.clearInterval(bt)}function Ot(){return Et.apply(this,arguments)}function Et(){return(Et=e(a().mark((function t(){var e,r,n,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=u(gt.countBy,gt.finishDate," "),r=gt.background.url,n=gt.textColor,o=document.querySelector("body"),(i=document.createElement("div")).id="c2u-container",i.style.backgroundImage="url(".concat(r,")"),i.style.color=n,i.innerHTML='\n        <div>\n            <h1 class="c2u-text" id="c2u-text">'.concat(e,"</h1>\n        </div>\n    "),xt(i),o.insertBefore(i,o.firstChild);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Lt(){return St.apply(this,arguments)}function St(){return(St=e(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(e=document.getElementById("c2u-container"))||void 0===e||e.remove(),_t(),!document.getElementById("c2u-app")){t.next=4;break}return t.abrupt("return");case 4:return r=new wt,t.next=7,r.load();case 7:if(!(gt=r.get()).isFloatCountdown){t.next=12;break}return jt(),t.next=12,Ot();case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){t.TEXT_COLOR="cg-color",t.ALL="cg-all"}(mt||(mt={})),chrome.runtime.onMessage.addListener((function(t,e,r){switch(t.eventEmitType){case mt.ALL:Lt();break;case mt.TEXT_COLOR:!function(t){gt.textColor=t;var e=document.getElementById("c2u-container");e&&e.style.color&&(e.style.color=t)}(t.property.textColor)}r({data:t.property})})),function(){var t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.innerHTML="\n        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@700;800;900&display=swap');",t.appendChild(e)}(),Lt()}()}();