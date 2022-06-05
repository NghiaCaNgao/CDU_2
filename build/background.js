/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(9727);


/***/ }),

/***/ 6374:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(2791),
    k = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, g) {
  var b,
      d = {},
      e = null,
      h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);

  for (b in a) {
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}

__webpack_unused_export__ = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ 9117:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    t = Symbol.for("react.provider"),
    u = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    z = Symbol.iterator;

function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

var B = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    C = Object.assign,
    D = {};

function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}

var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    K = {
  current: null
},
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, e) {
  var d,
      c = {},
      k = null,
      h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
    J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  }
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) {
      f[m] = arguments[m + 2];
    }

    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) {
    void 0 === c[d] && (c[d] = g[d]);
  }
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}

function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g;

function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }

  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
    k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  } else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}

function S(a, b, e) {
  if (null == a) return a;
  var d = [],
      c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}

function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }

  if (1 === a._status) return a._result.default;
  throw a._result;
}

var U = {
  current: null
},
    V = {
  transition: null
},
    W = {
  ReactCurrentDispatcher: U,
  ReactCurrentBatchConfig: V,
  ReactCurrentOwner: K
};
exports.Children = {
  map: S,
  forEach: function forEach(a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function count(a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;

exports.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
      c = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) {
      J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
  }

  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) {
      g[m] = arguments[m + 2];
    }

    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};

exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};

  try {
    a();
  } finally {
    V.transition = b;
  }
};

exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};

exports.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};

exports.useContext = function (a) {
  return U.current.useContext(a);
};

exports.useDebugValue = function () {};

exports.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};

exports.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};

exports.useId = function () {
  return U.current.useId();
};

exports.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};

exports.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};

exports.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};

exports.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};

exports.useRef = function (a) {
  return U.current.useRef(a);
};

exports.useState = function (a) {
  return U.current.useState(a);
};

exports.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};

exports.useTransition = function () {
  return U.current.useTransition();
};

exports.version = "18.0.0-fc46dba67-20220329";

/***/ }),

/***/ 2791:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(9117);
} else {}

/***/ }),

/***/ 184:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(6374);
} else {}

/***/ }),

/***/ 9727:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/extensions/notification.ts
var IconPath="./images/logo/48x.png";// get all notification Ids
function getIDs(){return _getIDs.apply(this,arguments);}// Check if notification exists
function _getIDs(){_getIDs=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",new Promise(function(resolve,reject){if(chrome.notifications){chrome.notifications.getAll(function(notifications){resolve(Object.keys(notifications));});}else{console.log("notifications not supported");}}));case 1:case"end":return _context.stop();}}},_callee);}));return _getIDs.apply(this,arguments);}function hasID(_x){return _hasID.apply(this,arguments);}// Clear one notification | array of notifications | all notifications
function _hasID(){_hasID=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(notification_id){var IDSet;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.t0=Set;_context2.next=3;return getIDs();case 3:_context2.t1=_context2.sent;IDSet=new _context2.t0(_context2.t1);return _context2.abrupt("return",IDSet.has(notification_id));case 6:case"end":return _context2.stop();}}},_callee2);}));return _hasID.apply(this,arguments);}function clear(_x2){return _clear.apply(this,arguments);}// Create a new notification
function _clear(){_clear=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3(notification_id){return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!notification_id){_context3.next=9;break;}if(!Array.isArray(notification_id)){_context3.next=6;break;}_context3.next=4;return Promise.all(notification_id.map(function(element){return clear(element);}));case 4:_context3.next=7;break;case 6:chrome.notifications.clear(notification_id);case 7:_context3.next=15;break;case 9:_context3.t0=clear;_context3.next=12;return getIDs();case 12:_context3.t1=_context3.sent;_context3.next=15;return(0,_context3.t0)(_context3.t1);case 15:case"end":return _context3.stop();}}},_callee3);}));return _clear.apply(this,arguments);}function create(_x3,_x4){return _create.apply(this,arguments);}function _create(){_create=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4(id,notification_options){return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return hasID(id);case 2:if(!_context4.sent){_context4.next=5;break;}_context4.next=5;return clear(id);case 5:chrome.notifications.create(id,{type:"basic",iconUrl:IconPath,title:notification_options.title,message:notification_options.message,buttons:notification_options.buttons});case 6:case"end":return _context4.stop();}}},_callee4);}));return _create.apply(this,arguments);}var Notification={create:create,clear:clear,getIDs:getIDs,hasID:hasID};/* harmony default export */ var notification = (Notification);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
;// CONCATENATED MODULE: ./src/extensions/storage.ts
// Return the value of the given key from the storage
function get(_x){return _get.apply(this,arguments);}// Set the value of the given key in the storage
function _get(){_get=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(keys){return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",chrome.storage.sync.get(keys));case 1:case"end":return _context.stop();}}},_callee);}));return _get.apply(this,arguments);}function set(_x2){return _set.apply(this,arguments);}// Clear all the data in the storage and set default data to it
function _set(){_set=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(data){return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",chrome.storage.sync.set(data));case 1:case"end":return _context2.stop();}}},_callee2);}));return _set.apply(this,arguments);}function storage_clear(){return extensions_storage_clear.apply(this,arguments);}function extensions_storage_clear(){extensions_storage_clear=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3(){return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:chrome.storage.sync.clear();case 1:case"end":return _context3.stop();}}},_callee3);}));return extensions_storage_clear.apply(this,arguments);}var Storage={get:get,set:set,clear:storage_clear};/* harmony default export */ var storage = (Storage);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
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
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2791);
;// CONCATENATED MODULE: ./src/assets/icons/calendar.svg
var _path, _path2, _path3, _path4;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgCalendar(_ref, svgRef) {
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
    d: "M14.5062 2.5V6.5",
    stroke: "#B8B8B8",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M8.70367 2.5V6.5",
    stroke: "#B8B8B8",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M3.40155 11.5H19.8083",
    stroke: "#B8B8B8",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M3.38477 12.5C3.38477 19 5.31892 21 11.6049 21C17.8909 21 19.8251 19 19.8251 12.5C19.8251 12.154 19.8196 11.8208 19.8083 11.5C19.6069 5.79277 17.5563 4 11.6049 4C5.65349 4 3.60298 5.79277 3.40156 11.5C3.39025 11.8208 3.38477 12.154 3.38477 12.5Z",
    stroke: "#B8B8B8",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var ForwardRef = /*#__PURE__*/react.forwardRef(SvgCalendar);
/* harmony default export */ var calendar = (__webpack_require__.p + "static/media/calendar.e73949f5bc367c9cf3f75aa3a7f7f158.svg");

;// CONCATENATED MODULE: ./src/assets/icons/chevrondown.svg
var chevrondown_path;

var chevrondown_excluded = ["title", "titleId"];

function chevrondown_extends() { chevrondown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevrondown_extends.apply(this, arguments); }

function chevrondown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = chevrondown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function chevrondown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgChevrondown(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = chevrondown_objectWithoutProperties(_ref, chevrondown_excluded);

  return /*#__PURE__*/react.createElement("svg", chevrondown_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, chevrondown_path || (chevrondown_path = /*#__PURE__*/react.createElement("path", {
    d: "M4 9L12 17L20 9",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var chevrondown_ForwardRef = /*#__PURE__*/react.forwardRef(SvgChevrondown);
/* harmony default export */ var chevrondown = (__webpack_require__.p + "static/media/chevrondown.7854b7e5b7c40053e9ee89191504aa80.svg");

;// CONCATENATED MODULE: ./src/assets/icons/link.svg
var link_path, link_path2, link_path3;

var link_excluded = ["title", "titleId"];

function link_extends() { link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return link_extends.apply(this, arguments); }

function link_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = link_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function link_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLink(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = link_objectWithoutProperties(_ref, link_excluded);

  return /*#__PURE__*/react.createElement("svg", link_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, link_path || (link_path = /*#__PURE__*/react.createElement("path", {
    d: "M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H15",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), link_path2 || (link_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M8 12H16",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), link_path3 || (link_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var link_ForwardRef = /*#__PURE__*/react.forwardRef(SvgLink);
/* harmony default export */ var icons_link = (__webpack_require__.p + "static/media/link.b2443137aa92b8f0a909c5b9b3cb9a9a.svg");

;// CONCATENATED MODULE: ./src/assets/icons/attachment.svg
var attachment_path;

var attachment_excluded = ["title", "titleId"];

function attachment_extends() { attachment_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return attachment_extends.apply(this, arguments); }

function attachment_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = attachment_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function attachment_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgAttachment(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = attachment_objectWithoutProperties(_ref, attachment_excluded);

  return /*#__PURE__*/react.createElement("svg", attachment_extends({
    width: 25,
    height: 25,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, attachment_path || (attachment_path = /*#__PURE__*/react.createElement("path", {
    d: "M20.3043 11.1435L12.2671 18.7236C11.2825 19.6522 9.94706 20.1739 8.5546 20.1739C7.16214 20.1739 5.82671 19.6522 4.84209 18.7236C3.85747 17.795 3.30432 16.5355 3.30432 15.2222C3.30432 13.909 3.85747 12.6495 4.84209 11.7209L12.8793 4.14077C13.5357 3.52169 14.426 3.1739 15.3543 3.1739C16.2826 3.1739 17.1729 3.52169 17.8293 4.14077C18.4857 4.75985 18.8545 5.5995 18.8545 6.47501C18.8545 7.35052 18.4857 8.19018 17.8293 8.80925L9.78336 16.3893C9.45515 16.6989 9.01001 16.8728 8.54586 16.8728C8.0817 16.8728 7.63656 16.6989 7.30835 16.3893C6.98015 16.0798 6.79576 15.66 6.79576 15.2222C6.79576 14.7845 6.98015 14.3646 7.30835 14.0551L14.7333 7.06064",
    stroke: "#7381B1",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var attachment_ForwardRef = /*#__PURE__*/react.forwardRef(SvgAttachment);
/* harmony default export */ var attachment = (__webpack_require__.p + "static/media/attachment.db656b2420a53efcf4352672657e466c.svg");

;// CONCATENATED MODULE: ./src/assets/icons/pin2.svg
var pin2_path, pin2_path2;

var pin2_excluded = ["title", "titleId"];

function pin2_extends() { pin2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pin2_extends.apply(this, arguments); }

function pin2_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = pin2_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function pin2_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPin2(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = pin2_objectWithoutProperties(_ref, pin2_excluded);

  return /*#__PURE__*/react.createElement("svg", pin2_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, pin2_path || (pin2_path = /*#__PURE__*/react.createElement("path", {
    d: "M11 13L4 20",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), pin2_path2 || (pin2_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M18 6.00001C20.4537 8.45369 17.9927 12.8732 16.3019 15.2964C15.6377 16.2482 14.3019 16.3019 13.4812 15.4812L8.51882 10.5188C7.69809 9.69811 7.75174 8.36225 8.70361 7.69808C11.1268 6.00734 15.5463 3.54633 18 6.00001Z",
    stroke: "#001A72",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var pin2_ForwardRef = /*#__PURE__*/react.forwardRef(SvgPin2);
/* harmony default export */ var pin2 = (__webpack_require__.p + "static/media/pin2.6ce288448350c7f2c0347fcac7f75cb8.svg");

;// CONCATENATED MODULE: ./src/components/input.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var input = ({});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/components/Input.tsx
var InputType;(function(InputType){InputType["Text"]="text";InputType["Select"]="select";InputType["Date"]="date";InputType["Button"]="button";InputType["Color"]="color";})(InputType||(InputType={}));var Input=/*#__PURE__*/function(_React$Component){_inherits(Input,_React$Component);var _super=_createSuper(Input);function Input(){_classCallCheck(this,Input);return _super.apply(this,arguments);}_createClass(Input,[{key:"formatDate",value:function formatDate(date){var d=new Date(date);return d.getFullYear()+'-'+(d.getMonth()+1>9?d.getMonth()+1:'0'+(d.getMonth()+1))+'-'+(d.getDate()>9?d.getDate():'0'+d.getDate());}//Emit event when click on fake select
},{key:"handleTextLinkChange",value:function handleTextLinkChange(event){this.props.onChangeTextLink&&this.props.onChangeTextLink(event.target.value);}},{key:"renderText",value:function renderText(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__text flex items-center px-3 active",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{id:this.props.id,type:"text",value:this.props.value,onChange:this.handleTextLinkChange.bind(this)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(attachment_ForwardRef,{})})]});}},{key:"renderDate",value:function renderDate(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__date transition-all",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{id:this.props.id,type:this.props.type,defaultValue:this.formatDate(Number(this.props.value)),disabled:this.props.disabled,onChange:this.props.onChange}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 "+(this.props.disabled?"":"active"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-nunito font-semibold text-lg "+(this.props.disabled?"":"active"),children:new Date(this.props.value).toLocaleDateString("vi")}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ForwardRef,{})})]})]});}},{key:"renderSelect",value:function renderSelect(){var _this=this;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__select",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("select",{id:this.props.id,defaultValue:this.props.value,disabled:this.props.disabled,onChange:this.props.onChange,children:this.props.dataSet?this.props.dataSet.map(function(item,index){return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:item.value,children:item.label},index);}):null}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 "+(this.props.disabled?"":"active"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-nunito font-semibold text-lg "+(this.props.disabled?"":"active"),children:this.props.dataSet.filter(function(item){return item.value===_this.props.value;})[0].label}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:this.props.type===InputType.Select?/*#__PURE__*/(0,jsx_runtime.jsx)(chevrondown_ForwardRef,{}):null})]})]});}},{key:"renderButton",value:function renderButton(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__button",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{id:this.props.id,disabled:this.props.disabled,onClick:this.props.onClick}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 transition-all "+(this.props.disabled?"":"active"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-nunito font-semibold text-lg truncate "+(this.props.disabled?"":"active"),children:this.props.data?this.props.data.label:null}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:this.props.type===InputType.Button?/*#__PURE__*/(0,jsx_runtime.jsx)(link_ForwardRef,{}):null})]})]});}},{key:"renderColor",value:function renderColor(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__color transition-all",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{id:this.props.id,type:"color",defaultValue:this.props.value,disabled:this.props.disabled,onChange:this.props.onChange}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input__fake flex items-center justify-between px-3 "+(this.props.disabled?"":"active"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"font-nunito font-semibold text-lg "+(this.props.disabled?"":"active"),children:this.props.value}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(pin2_ForwardRef,{})})]})]});}},{key:"switchType",value:function switchType(){switch(this.props.type){case InputType.Date:return this.renderDate();case InputType.Text:return this.renderText();case InputType.Select:return this.renderSelect();case InputType.Button:return this.renderButton();case InputType.Color:return this.renderColor();default:return;}}},{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"input flex justify-between items-center mx-3 my-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"input__title font-semibold text-gray-500 text-lg truncate",children:this.props.title}),this.switchType()]});}}]);return Input;}(react.Component);
;// CONCATENATED MODULE: ./src/components/lazyLoad.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var lazyLoad = ({});
;// CONCATENATED MODULE: ./src/components/LazyImage.tsx
function elementInViewport(el){var rect=el.getBoundingClientRect();return rect.top>=0&&rect.left>=0&&rect.top<=(window.innerHeight||document.documentElement.clientHeight);}var LazyImage=/*#__PURE__*/function(_React$Component){_inherits(LazyImage,_React$Component);var _super=_createSuper(LazyImage);function LazyImage(props){var _this;_classCallCheck(this,LazyImage);_this=_super.call(this,props);_this.imgElm=void 0;_this.state={loaded:false};_this.handleScroll=_this.handleScroll.bind(_assertThisInitialized(_this));return _this;}_createClass(LazyImage,[{key:"componentDidMount",value:function componentDidMount(){this.handleScroll();window.addEventListener("scroll",this.handleScroll);}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll);}},{key:"handleScroll",value:function handleScroll(){var _this2=this;if(!this.state.loaded){// Load real image
var imgLoader=new Image();imgLoader.src=this.props.src;imgLoader.onload=function(){_this2.imgElm.setAttribute("src","".concat(_this2.props.src));_this2.imgElm.classList.add("".concat(_this2.props.effect));_this2.setState({loaded:true});};}}},{key:"render",value:function render(){var _this3=this;var width=this.props.width||"100%";var height=this.props.height||"100%";return/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:this.props.placeHolder?this.props.placeHolder:"https://dummyimage.com/600x400/000000/dedede.png&text=c2u",width:width,height:height,ref:function ref(imgElm){return _this3.imgElm=imgElm;},className:"lazy-image"+(this.props.className?" ".concat(this.props.className):""),alt:this.props.alt});}}]);return LazyImage;}(react.Component);
;// CONCATENATED MODULE: ./src/components/ImageSelect.tsx
var ImageSelect=/*#__PURE__*/function(_React$Component){_inherits(ImageSelect,_React$Component);var _super=_createSuper(ImageSelect);function ImageSelect(){_classCallCheck(this,ImageSelect);return _super.apply(this,arguments);}_createClass(ImageSelect,[{key:"render",value:function render(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'m-2 w-20 h-12 rounded-xl transition-all cursor-pointer object-scale-down overflow-hidden '+(this.props.selected?"border-2 border-violet-500 p-1":""),onClick:this.props.onClick,children:/*#__PURE__*/(0,jsx_runtime.jsx)(LazyImage,{src:this.props.imgSrc,width:"100%",height:"auto",effect:"opacity",className:"rounded-lg w-full h-full overflow-hidden saturate-150 transition-all cursor-pointer hover:shadow-lg ",alt:"Background"})});}}]);return ImageSelect;}(react.Component);
;// CONCATENATED MODULE: ./src/screens/popup/components/SelectBackground.tsx
var BackgroundImageList=[{name:"Water",url:chrome.runtime?chrome.runtime.getURL("/images/background/bg1.jpg"):"/images/background/bg1.jpg",id:"water"},{name:"Dark Sky",url:chrome.runtime?chrome.runtime.getURL("/images/background/bg2.jpg"):"/images/background/bg2.jpg",id:"dark-sky"},{name:"Blue Mine",url:chrome.runtime?chrome.runtime.getURL("/images/background/bg3.jpg"):"/images/background/bg3.jpg",id:"blue-mine"},{name:"Hero",url:chrome.runtime?chrome.runtime.getURL("/images/background/bg4.jpg"):"/images/background/b4g.jpg",id:"hero"},{name:"Step",url:chrome.runtime?chrome.runtime.getURL("/images/background/bg5.jpg"):"/images/background/bg.jpg",id:"step"},{name:"Gas",url:chrome.runtime?chrome.runtime.getURL("/images/background/bg6.jpg"):"/images/background/bg.jpg",id:"gas"}];var SelectBackground=/*#__PURE__*/function(_React$Component){_inherits(SelectBackground,_React$Component);var _super=_createSuper(SelectBackground);function SelectBackground(props){var _this;_classCallCheck(this,SelectBackground);_this=_super.call(this,props);_this.ref=void 0;_this.state={isShowSelectPanel:false};_this.ref=/*#__PURE__*/react.createRef();return _this;}_createClass(SelectBackground,[{key:"toggleSelect",value:function toggleSelect(){this.setState({isShowSelectPanel:!this.state.isShowSelectPanel});}},{key:"setShowState",value:function setShowState(state){this.setState({isShowSelectPanel:state});}},{key:"handleClickOutside",value:function handleClickOutside(event){// Check if clicked target is inside the ref
if(this.ref.current&&!this.ref.current.contains(event.target)){this.setShowState(false);}}// Emit event when input change
},{key:"handleClick",value:function handleClick(background){this.props.onChange&&this.props.onChange(background);}// Add event when input change
},{key:"handleClickForLink",value:function handleClickForLink(url){this.props.onChange&&this.props.onChange({id:"custom-user-background",url:url,name:"Custom Background"});}},{key:"componentDidMount",value:function componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside.bind(this));}},{key:"componentWillUnmount",value:function componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside.bind(this));}},{key:"render",value:function render(){var _this2=this;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"select-background relative",ref:this.ref,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"relative z-50 transition-all "+(this.state.isShowSelectPanel?"px-3":""),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input,{title:"Background",data:{value:this.props.background.url,label:this.props.background.name},type:InputType.Button,onClick:this.toggleSelect.bind(this)})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bg-white rounded-2xl w-full p-3 absolute -bottom-3 left-0 shadow-2xl transition-all "+(this.state.isShowSelectPanel?"opacity-100 z-10":"opacity-0"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap justify-center",children:BackgroundImageList.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(ImageSelect,{imgSrc:item.url,onClick:_this2.handleClick.bind(_this2,item),selected:_this2.props.background.id===item.id},item.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input,{type:InputType.Text,title:"Link to image",value:this.props.background.url,onChangeTextLink:this.handleClickForLink.bind(this)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"h-10"})]})]});}}]);return SelectBackground;}(react.Component);
;// CONCATENATED MODULE: ./src/api/common.ts
/*
* Get default configuration
* @returns {Promise<Property>}: The default configuration
* @param finishDate: The pre finish date that will be filled in the default configuration. 
                    If undefined, the default time will be set for 1 week from now.
*/function getDefaultAppData(finishDate){return{isFloatCountdown:true,isSyncWithServer:true,finishDate:finishDate||new Date().getTime()+7*24*60*60*1000,// 1 week from now
countBy:"0",background:BackgroundImageList[0],textColor:"#ffffff",yearBornID:"yb-2k4"};}/*
* Get absolute URL from relative URL
* @param relativeURL: The relative URL
* @returns {string}: The absolute URL
*/function getAbsoluteURL(relativeURL){console.log("development");var isProduction="development"=="production";var BaseDir=isProduction?"https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/main":"https://raw.githubusercontent.com/NghiaCaNgao/CDU_2/dev";return BaseDir+relativeURL;}
;// CONCATENATED MODULE: ./src/api/getTime.ts
var Host=getAbsoluteURL("/data/data.json");var DEFAULT_TIME=Date.now()+1000*60*60*24*7;// 1 week from now
/* Get finish time from server
* @returns {Promise<number>}: The finish time
* @param prevAttr:  The previous attribute that will be used to choose the finish time. 
                    If undefined, the default time will be used.
*/function getTime(_x){return _getTime.apply(this,arguments);}function _getTime(){_getTime=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(prevAttr){var response,data,event;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return fetch(Host,{method:"GET",mode:"cors"// for external requests (avoid CORS error)
});case 3:response=_context.sent;_context.next=6;return response.json();case 6:data=_context.sent;if(!data){_context.next=14;break;}if(!(prevAttr&&prevAttr.yearBornID)){_context.next=11;break;}event=data.events.find(function(e){return e.id===prevAttr.yearBornID;});return _context.abrupt("return",event?event.end_time:data.end_time);case 11:return _context.abrupt("return",data.end_time);case 14:throw new Error("Invalid response data");case 15:_context.next=21;break;case 17:_context.prev=17;_context.t0=_context["catch"](0);console.log(_context.t0);return _context.abrupt("return",prevAttr&&prevAttr.finishDate?prevAttr.finishDate:DEFAULT_TIME);case 21:case"end":return _context.stop();}}},_callee,null,[[0,17]]);}));return _getTime.apply(this,arguments);}
;// CONCATENATED MODULE: ./src/extensions/config.ts
var Configurations=/*#__PURE__*/function(){function Configurations(){_classCallCheck(this,Configurations);this.data=void 0;this.data=getDefaultAppData();}_createClass(Configurations,[{key:"load",value:function(){var _load=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var data;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return storage.get("config");case 2:data=_context.sent["config"];if(data){this.data=data;}else{this.resetData();}case 4:case"end":return _context.stop();}}},_callee,this);}));function load(){return _load.apply(this,arguments);}return load;}()},{key:"get",value:function get(){return this.data;}},{key:"set",value:function set(data){this.data=data;}},{key:"setByKey",value:function setByKey(key,value){this.data[key]=value;}},{key:"resetData",value:function(){var _resetData=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(){return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this.clear();case 2:this.save();case 3:case"end":return _context2.stop();}}},_callee2,this);}));function resetData(){return _resetData.apply(this,arguments);}return resetData;}()},{key:"clear",value:function(){var _clear=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3(key){var finishDate;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return getTime();case 2:finishDate=_context3.sent;this.data=getDefaultAppData(finishDate);case 4:case"end":return _context3.stop();}}},_callee3,this);}));function clear(_x){return _clear.apply(this,arguments);}return clear;}()},{key:"save",value:function(){var _save=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4(){return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return storage.set({"config":this.data});case 2:case"end":return _context4.stop();}}},_callee4,this);}));function save(){return _save.apply(this,arguments);}return save;}()}],[{key:"clear",value:function(){var _clear2=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee5(){var config;return regenerator_default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:config=new Configurations();_context5.next=3;return config.resetData();case 3:case"end":return _context5.stop();}}},_callee5);}));function clear(){return _clear2.apply(this,arguments);}return clear;}()}]);return Configurations;}();
;// CONCATENATED MODULE: ./src/api/def.ts
var CountType;(function(CountType){CountType["Day"]="0";CountType["Month"]="1";CountType["Year"]="2";CountType["Hour"]="3";CountType["Minute"]="4";CountType["Second"]="5";CountType["Week"]="6";})(CountType||(CountType={}));;var FieldType;(function(FieldType){FieldType[FieldType["isFloatCountdown"]=0]="isFloatCountdown";FieldType[FieldType["isSyncWithServer"]=1]="isSyncWithServer";FieldType[FieldType["finishDate"]=2]="finishDate";FieldType[FieldType["countBy"]=3]="countBy";FieldType[FieldType["background"]=4]="background";FieldType[FieldType["textColor"]=5]="textColor";FieldType[FieldType["yearBornID"]=6]="yearBornID";})(FieldType||(FieldType={}));
;// CONCATENATED MODULE: ./src/extensions/common.ts
var EventEmitType;(function(EventEmitType){EventEmitType["TEXT_COLOR"]="cg-color";EventEmitType["ALL"]="cg-all";})(EventEmitType||(EventEmitType={}));function emitCountdownChanged(eventEmitType,property){chrome.tabs.query({url:["https://*/*","http://*/*"]},function(tabs){console.log(tabs.map(function(tab){return tab.url;}));tabs.forEach(function(tab){chrome.tabs.sendMessage(tab.id,{eventEmitType:eventEmitType||EventEmitType.ALL,property:property},function(data){console.log("Send message to all tabs");console.log(data);});});});chrome.runtime.sendMessage({eventEmitType:eventEmitType||EventEmitType.ALL});}function emitChangeFromInject(eventEmitType){chrome.runtime.sendMessage({eventEmitType:eventEmitType});}
;// CONCATENATED MODULE: ./src/api/calcTime.ts
/*
* Calculate time left and return formatted string
* @param 
    format: CountType - The type of countdown: (by day, month,...)
    endTime: number - The end time of the countdown
    delimiter: string - The delimiter between the time parts
@ returns {string}: The formatted string
*/function calcTime(format,endTime){var delimiter=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"-";var now=new Date();var time=endTime-now.getTime();if(time<0)return"Done";var formatNumber=new Intl.NumberFormat();switch(format){case CountType.Second:return"".concat(formatNumber.format(Math.floor(time/1000))).concat(delimiter,"s");case CountType.Minute:return"".concat(formatNumber.format(Math.floor(time/(1000*60)))).concat(delimiter,"m");case CountType.Hour:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60)))).concat(delimiter,"h");case CountType.Day:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24)))).concat(delimiter,"D");case CountType.Week:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24*7)))).concat(delimiter,"W");case CountType.Month:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24*30)))).concat(delimiter,"M");case CountType.Year:return"".concat(formatNumber.format(Math.floor(time/(1000*60*60*24*30*12)))).concat(delimiter,"Y");default:return"";}}
;// CONCATENATED MODULE: ./src/extensions/background.ts
// const IndexPath = chrome.runtime.getURL("index.html");
var HomePagePath="https://github.com/NghiaCaNgao/CDU_2";var SplashPagePath="index.html#/splash";// Create new tab with given url
function createTab(url){chrome.tabs.create({active:true,url:url});}// Create new context menu
function createNormalContextMenu(id,title){if(chrome.contextMenus){chrome.contextMenus.create({contexts:["image"],type:"normal",documentUrlPatterns:["<all_urls>"],id:id,title:title});}}function setBackground(_x){return _setBackground.apply(this,arguments);}function _setBackground(){_setBackground=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3(url){var config,configData;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:config=new Configurations();_context3.next=3;return config.load();case 3:configData=config.get();configData.background={id:"custom-user-background",url:url,name:"Custom Background"};config.set(configData);_context3.next=8;return config.save();case 8:emitCountdownChanged();case 9:case"end":return _context3.stop();}}},_callee3);}));return _setBackground.apply(this,arguments);}function updateSyncTime(){return _updateSyncTime.apply(this,arguments);}function _updateSyncTime(){_updateSyncTime=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4(){var config,configData;return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:config=new Configurations();_context4.next=3;return config.load();case 3:configData=config.get();_context4.next=6;return getTime(configData);case 6:configData.finishDate=_context4.sent;// Update finish date
config.set(configData);_context4.next=10;return config.save();case 10:case"end":return _context4.stop();}}},_callee4);}));return _updateSyncTime.apply(this,arguments);}function setAutoSync(){chrome.alarms.create("auto sync",{periodInMinutes:3*60,// 3 hours
when:Date.now()+3*60*1000// After install 3 minutes
// For check
// periodInMinutes: 1,
// when: Date.now() + 10 * 1000 // After install 1 minutes
});}function setAutoShowBadge(){chrome.alarms.create("auto show badge",{periodInMinutes:1,// 1 minutes
when:Date.now()// Right now
});}// calc time left
function calcTimeLeft(){return _calcTimeLeft.apply(this,arguments);}function _calcTimeLeft(){_calcTimeLeft=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee5(){var config,_config$get,finishDate,countBy,stringBadge;return regenerator_default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:config=new Configurations();_context5.next=3;return config.load();case 3:_config$get=config.get(),finishDate=_config$get.finishDate,countBy=_config$get.countBy;if(countBy===CountType.Second||countBy===CountType.Minute||countBy===CountType.Hour){countBy=CountType.Day;}stringBadge=calcTime(countBy,finishDate," ");if(!(stringBadge.length>4)){_context5.next=10;break;}return _context5.abrupt("return","99+");case 10:return _context5.abrupt("return",stringBadge);case 11:case"end":return _context5.stop();}}},_callee5);}));return _calcTimeLeft.apply(this,arguments);}if(chrome.runtime){chrome.runtime.onInstalled.addListener(/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(details){return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return notification.clear();case 2:if(!(details.reason===chrome.runtime.OnInstalledReason.INSTALL)){_context.next=12;break;}_context.next=5;return Configurations.clear();case 5:setAutoSync();setAutoShowBadge();createTab(SplashPagePath);// Create welcome notification for first time        
_context.next=10;return notification.create("c2u_welcome",{title:"Thanks for installing!",message:"Track your countdown easily and easily."});case 10:_context.next=16;break;case 12:if(!(details.reason===chrome.runtime.OnInstalledReason.UPDATE)){_context.next=16;break;}setAutoShowBadge();_context.next=16;return notification.create("c2u_update",{title:"Updated!",message:"Update successfully",buttons:[{title:"Changelog"}]});case 16:// On click notification
chrome.notifications.onButtonClicked.addListener(function(notificationId,buttonIndex){if(notificationId==="c2u_update"&&buttonIndex===0){createTab(HomePagePath);}});case 17:case"end":return _context.stop();}}},_callee);}));return function(_x2){return _ref.apply(this,arguments);};}());}// handle context menu click
if(chrome.contextMenus){chrome.contextMenus.onClicked.addListener(/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(info){return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.t0=info.menuItemId;_context2.next=_context2.t0==="set_background"?3:5;break;case 3:setBackground(info.srcUrl);return _context2.abrupt("break",5);case 5:case"end":return _context2.stop();}}},_callee2);}));return function(_x3){return _ref2.apply(this,arguments);};}());}// Handle alarm
if(chrome.alarms){chrome.alarms.onAlarm.addListener(function(alarms){if(alarms.name==="auto sync"){updateSyncTime();}else if(alarms.name==="auto show badge"){calcTimeLeft().then(function(timeLeft){chrome.action.setBadgeText({text:timeLeft});});}});}if(chrome.runtime){chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){if(request.eventEmitType===EventEmitType.ALL){sendResponse({message:"Hello"});calcTimeLeft().then(function(timeLeft){console.log(timeLeft);chrome.action.setBadgeText({text:timeLeft});});}});}// Create context menu
if(chrome.contextMenus)chrome.contextMenus.removeAll();createNormalContextMenu("set_background","Set as background");
}();
/******/ })()
;
//# sourceMappingURL=background.js.map