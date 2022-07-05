(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@sanity/groq-store/dist/browser/groq-store.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/groq-store/dist/browser/groq-store.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(__webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js")),t=e(__webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js")),n=__webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js"),o=__webpack_require__(/*! groq-js */ "./node_modules/groq-js/dist/groq-js.esm.js"),i=__webpack_require__(/*! mendoza */ "./node_modules/mendoza/lib/esm/index.js");function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r,t){var n,o=r.token,i=new e("https://"+r.projectId+".api.sanity.io/v1/data/listen/"+r.dataset+"?query=*&effectFormat=mendoza",{withCredentials:!0,headers:o?{Authorization:"Bearer "+o}:void 0});return i.addEventListener("welcome",t.open,!1),i.addEventListener("mutation",(n=t.next,function(e){var r;try{r=JSON.parse(e.data)}catch(e){return}n(r)}),!1),i.addEventListener("channelError",function(e){var r;i.close();try{r=JSON.parse(e.data)}catch(e){return void t.error(new Error("Unknown error parsing listener message"))}t.error(new Error(r.message||r.error||"Listener returned HTTP "+r.statusCode))},!1),i.addEventListener("error",function(){var e="undefined"!=typeof window&&window.location.origin;t.error(new Error("Error establishing listener - check that the project ID and dataset are correct"+(e?", and that the CORS-origin ("+e+") is allowed":"")))},!1),{unsubscribe:function(){return Promise.resolve(i.close())}}}function s(e){return e._id.startsWith("drafts.")?e._id.slice(7):e._id}function a(e,r){var t=u({},e);return delete t._rev,i.applyPatch(t,r)}function f(){return Promise.resolve()}function d(){var e,r,t=(e=["*[_id == $id][0]"],r||(r=e.slice(0)),e.raw=r,e);return d=function(){return t},t}function v(e,r,t){if(!e.s){if(t instanceof h){if(!t.s)return void(t.o=v.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(v.bind(null,e,r),v.bind(null,e,2));e.s=r,e.v=t;var n=e.o;n&&n(e)}}var h=function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{v(n,1,i(this.v))}catch(e){v(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?v(n,1,r?r(o):o):t?v(n,1,t(o)):v(n,2,o)}catch(e){v(n,2,e)}},n},e}();function l(e){return e instanceof h&&1&e.s}var m=function(e){var r=e.projectId,t=e.dataset,n=e.token,o=e.documentLimit;try{return Promise.resolve(fetch("https://"+r+".api.sanity.io/v1/data/export/"+t,{credentials:"include",headers:n?{Authorization:"Bearer "+n}:void 0})).then(function(e){function r(r){var t,n,i=function(e){if(!e)throw new Error("Failed to read body from response");var r,t=!1;function n(){t=!0,r&&r.cancel()}return new ReadableStream({start:function(o){r=e.getReader();var i=new TextDecoder,u="";r.read().then(function e(c){try{if(c.done)return t?Promise.resolve():0===(u=u.trim()).length?(o.close(),Promise.resolve()):(o.enqueue(JSON.parse(u)),o.close(),Promise.resolve());for(var s=(u+=i.decode(c.value,{stream:!0})).split("\n"),a=0;a<s.length-1;++a){var f=s[a].trim();if(0===f.length)return Promise.resolve();try{o.enqueue(JSON.parse(f))}catch(e){return o.error(e),n(),Promise.resolve()}}if(u=s[s.length-1],!r)return Promise.resolve();var d=function(t,n){try{var o=Promise.resolve(r.read()).then(function(r){e(r)})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){o.error(e)});return Promise.resolve(d&&d.then?d.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}).catch(function(e){return o.error(e)})},cancel:n})}(e.body).getReader(),u=[],c=function(e,r){var t;do{var n=e();if(n&&n.then){if(!l(n)){t=!0;break}n=n.v}var o=r();if(l(o)&&(o=o.v),!o)return n}while(!o.then);var i=new h,u=v.bind(null,i,2);return(t?n.then(c):o.then(s)).then(void 0,u),i;function c(t){for(n=t;l(o=r())&&(o=o.v),o;){if(o.then)return void o.then(s).then(void 0,u);if((n=e())&&n.then){if(!l(n))return void n.then(c).then(void 0,u);n=n.v}}v(i,1,n)}function s(t){if(t){do{if((n=e())&&n.then){if(!l(n))return void n.then(c).then(void 0,u);n=n.v}if(l(t=r())&&(t=t.v),!t)return void v(i,1,n)}while(!t.then);t.then(s).then(void 0,u)}else v(i,1,n)}}(function(){return Promise.resolve(i.read()).then(function(e){if(function(e){return!!e&&"error"in e&&"object"==typeof e.error&&null!==e.error&&"description"in e.error&&"string"==typeof e.error.description&&!("_id"in e)}(n=(t=e).value))throw new Error("Error streaming dataset: "+n.error);if(n&&!n._id.startsWith("_.")&&u.push(n),o&&u.length>o)throw i.cancel("Reached document limit"),new Error("Error streaming dataset: Reached limit of "+o+" documents")})},function(){return!t.done});return c&&c.then?c.then(function(e){return u}):u}var t=function(){if(200!==e.status)return Promise.resolve(e.json()).then(function(e){throw new Error("Error streaming dataset: "+("object"==typeof(r=e)&&"error"in r&&"message"in r?r.message||r.error:"<unknown error>"));var r})}();return t&&t.then?t.then(r):r()})}catch(e){return Promise.reject(e)}};exports.groq=r,exports.groqStore=function(e){if(function(){var e=["EventSource","ReadableStream","fetch"].filter(function(e){return!(e in window)});if(e.length>0)throw new Error("Browser not supported. Missing browser APIs: "+e.join(", "))}(),e.token)throw new Error("`token` option not currently supported in browser");return function(e,i){var v,h=function(e,r){try{return Promise.resolve(l()).then(function(){var t=o.parse(e);return Promise.resolve(o.evaluate(t,{dataset:m,params:r})).then(function(e){return e.get()})})}catch(e){return Promise.reject(e)}},l=function(){try{return v||(v=function(e,r,t){var n=t.getDocuments,o=t.EventSource,i=e.projectId,d=e.dataset,v=e.overlayDrafts,h=e.documentLimit;if(!e.listen)return{unsubscribe:f,loaded:n({projectId:i,dataset:d,documentLimit:h}).then(j).then(f)};var l,m,p,w,b,g,y=new Map,P=[],E=new Promise(function(e,r){m=e,p=r});return{unsubscribe:c(o,e,{next:function(e){l?(function(e){if(e.effects&&!e.documentId.startsWith("_.")){var r=y.get(e.documentId)||null;!function(e,r){var t=y.get(e),n=l||[],o=t?n.indexOf(t):-1;-1===o&&r?(n.push(r),y.set(e,r)):r?(n.splice(o,1,r),y.set(e,r)):(n.splice(o,1),y.delete(e))}(e.documentId,a(r,e.effects.apply))}}(e),function(e,r){clearTimeout(g),b!==r.transactionId&&w?(j(w),b=void 0):(b=r.transactionId,w=e.slice()),g=setTimeout(j,25,e.slice())}(l,e)):P.push(e)},open:function(){try{return Promise.resolve(n({projectId:i,dataset:d,documentLimit:h})).then(function(e){(l=function(e,r){var t=new Map;return r.forEach(function(e){var r=t.get(e.documentId)||[];r.push(e),t.set(e.documentId,r)}),t.forEach(function(r,t){var n=e.find(function(e){return e._id===t});if(n){var o=!1,i=n;r.forEach(function(e){(o=o||e.previousRev===n._rev)&&e.effects&&(i=a(i,e.effects.apply))}),e.splice(e.indexOf(n),1,i)}else console.warn("Received mutation for missing document %s",t)}),e}(e,P)).forEach(function(e){return y.set(e._id,e)}),j(l),m()})}catch(e){return Promise.reject(e)}},error:function(e){return p(e)}}).unsubscribe,loaded:E};function j(e){w=void 0,g=void 0,b=void 0,r(v?function(e){var r=new Map;return e.forEach(function(e){var t=r.get(s(e));e._id.startsWith("drafts.")?r.set(s(e),function(e){return u({},e,{_id:s(e)})}(e)):t||r.set(e._id,e)}),Array.from(r.values())}(e):e)}}(e,function(e){m=e,p()},i)),Promise.resolve(v.loaded).then(function(){})}catch(e){return Promise.reject(e)}},m=[],p=n.throttle(e.subscriptionThrottleMs||50,function(){w.forEach(b)}),w=[];function b(e){return h(e.query,e.params).then(function(r){"previousResult"in e&&t(e.previousResult,r)||(e.previousResult=r,e.callback(void 0,r))}).catch(function(r){e.callback(r)})}return{query:h,getDocument:function(e){try{return Promise.resolve(l()).then(function(){return h(r(d()),{id:e})})}catch(e){return Promise.reject(e)}},getDocuments:function(e){try{return Promise.resolve(l()).then(function(){var r=e.map(function(e){return'*[_id == "'+e+'"][0]'}).join(",\n");return h("["+r+"]")})}catch(e){return Promise.reject(e)}},subscribe:function(r,t,n){if(!e.listen)throw new Error("Cannot use `subscribe()` without `listen: true`");var o={query:r,params:t,callback:n};w.push(o);var i=!1;return b(o),{unsubscribe:function(){return i||(i=!0,w.splice(w.indexOf(o),1)),Promise.resolve()}}},close:function(){return p.cancel(),v?v.unsubscribe():Promise.resolve()}}}(e,{EventSource:window.EventSource,getDocuments:m})};
//# sourceMappingURL=groq-store.js.map


/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/groq-js/dist/groq-js.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/groq-js/dist/groq-js.esm.js ***!
  \**************************************************/
/*! exports provided: evaluate, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluate", function() { return evaluate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse$1; });
class MarkProcessor {
  constructor(visitor, string, marks) {
    this.visitor = visitor;
    this.string = string;
    this.marks = marks;
    this.index = 0;
  }

  hasMark(pos) {
    if (pos === void 0) {
      pos = 0;
    }

    return this.index + pos < this.marks.length;
  }

  getMark(pos) {
    if (pos === void 0) {
      pos = 0;
    }

    return this.marks[this.index + pos];
  }

  shift() {
    this.index += 1;
  }

  process() {
    var mark = this.marks[this.index];
    this.shift();
    var func = this.visitor[mark.name];
    if (!func) throw new Error('Unknown handler: ' + mark.name);
    return func.call(this.visitor, this, mark);
  }

  processString() {
    this.shift();
    return this.processStringEnd();
  }

  processStringEnd() {
    var prev = this.marks[this.index - 1];
    var curr = this.marks[this.index];
    this.shift();
    return this.string.slice(prev.position, curr.position);
  }

}

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

function _AwaitValue(value) {
  this.wrapped = value;
}

function _AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen.return !== "function") {
    this.return = undefined;
  }
}

if (typeof Symbol === "function" && Symbol.asyncIterator) {
  _AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
    return this;
  };
}

_AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

_AsyncGenerator.prototype.throw = function (arg) {
  return this._invoke("throw", arg);
};

_AsyncGenerator.prototype.return = function (arg) {
  return this._invoke("return", arg);
};

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator(fn.apply(this, arguments));
  };
}

function _awaitAsyncGenerator(value) {
  return new _AwaitValue(value);
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

/**
 * Returns the type of the value.
 */
function getType(data) {
  if (data === null || typeof data === 'undefined') return 'null';
  if (Array.isArray(data)) return 'array';
  if (data instanceof Range) return 'range';
  if (data instanceof Pair) return 'pair';
  if (data instanceof Path) return 'path';
  return typeof data;
}
class StaticValue {
  constructor(data) {
    this.data = data;
  }

  getType() {
    return getType(this.data);
  }

  get() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return _this2.data;
    })();
  }

  [Symbol.asyncIterator]() {
    if (Array.isArray(this.data)) {
      return function* (data) {
        for (var _iterator4 = _createForOfIteratorHelperLoose(data), _step4; !(_step4 = _iterator4()).done;) {
          var element = _step4.value;
          yield new StaticValue(element);
        }
      }(this.data);
    } else {
      throw new Error('Cannot iterate over: ' + this.getType());
    }
  }

  getBoolean() {
    return typeof this.data === 'boolean' && this.data === true;
  }

}
var NULL_VALUE = /*#__PURE__*/new StaticValue(null);
var TRUE_VALUE = /*#__PURE__*/new StaticValue(true);
var FALSE_VALUE = /*#__PURE__*/new StaticValue(false);
/**
 * A StreamValue accepts a generator which yields values.
 */

class StreamValue {
  constructor(generator) {
    this.generator = generator;
    this.ticker = null;
    this.isDone = false;
    this.data = [];
  }

  getType() {
    return 'array';
  }

  get() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = _asyncIterator(_this3), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
          var value = _value;
          result.push(yield value.get());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            yield _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    })();
  }

  [Symbol.asyncIterator]() {
    var _this = this;

    return _wrapAsyncGenerator(function* () {
      var i = 0;

      while (true) {
        for (; i < _this.data.length; i++) {
          yield _this.data[i];
        }

        if (_this.isDone) return;
        yield _awaitAsyncGenerator(_this._nextTick());
      }
    })();
  }

  getBoolean() {
    return false;
  }

  _nextTick() {
    var _this4 = this;

    if (this.ticker) return this.ticker;
    var currentResolver;

    var setupTicker = () => {
      this.ticker = new Promise(resolve => {
        currentResolver = resolve;
      });
    };

    var tick = () => {
      currentResolver();
      setupTicker();
    };

    var fetch = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;

        var _iteratorError2;

        try {
          for (var _iterator2 = _asyncIterator(_this4.generator()), _step2, _value2; _step2 = yield _iterator2.next(), _iteratorNormalCompletion2 = _step2.done, _value2 = yield _step2.value, !_iteratorNormalCompletion2; _iteratorNormalCompletion2 = true) {
            var value = _value2;

            _this4.data.push(value);

            tick();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              yield _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        _this4.isDone = true;
        tick();
      });

      return function fetch() {
        return _ref2.apply(this, arguments);
      };
    }();

    setupTicker();
    fetch();
    return this.ticker;
  }

}
class MapperValue {
  constructor(value) {
    this.value = value;
  }

  getType() {
    return 'array';
  }

  get() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      return yield _this5.value.get();
    })();
  }

  [Symbol.asyncIterator]() {
    var value = this.value;
    var iterator = value[Symbol.asyncIterator];
    return iterator.call(this.value);
  }

  getBoolean() {
    return false;
  }

}
class Range {
  constructor(left, right, exclusive) {
    this.left = left;
    this.right = right;
    this.exclusive = exclusive;
  }

  static isConstructible(leftType, rightType) {
    if (leftType === rightType) {
      if (leftType === 'number') return true;
      if (leftType === 'string') return true;
      if (leftType === 'boolean') return true;
    }

    return false;
  }

  isExclusive() {
    return this.exclusive;
  }

  toJSON() {
    return [this.left, this.right];
  }

}
class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  toJSON() {
    return [this.first, this.second];
  }

}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function pathRegExp(pattern) {
  var re = [];

  for (var _iterator5 = _createForOfIteratorHelperLoose(pattern.split('.')), _step5; !(_step5 = _iterator5()).done;) {
    var part = _step5.value;

    if (part === '*') {
      re.push('[^.]+');
    } else if (part === '**') {
      re.push('.*');
    } else {
      re.push(escapeRegExp(part));
    }
  }

  return new RegExp("^" + re.join('.') + "$");
}

class Path {
  constructor(pattern) {
    this.pattern = pattern;
    this.patternRe = pathRegExp(pattern);
  }

  matches(str) {
    return this.patternRe.test(str);
  }

  toJSON() {
    return this.pattern;
  }

}
function fromNumber(num) {
  if (Number.isFinite(num)) {
    return new StaticValue(num);
  } else {
    return NULL_VALUE;
  }
}

function isIterator(obj) {
  return obj && typeof obj.next === 'function';
}

function fromJS(val) {
  if (isIterator(val)) {
    return new StreamValue( /*#__PURE__*/_wrapAsyncGenerator(function* () {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;

      var _iteratorError3;

      try {
        for (var _iterator3 = _asyncIterator(val), _step3, _value3; _step3 = yield _awaitAsyncGenerator(_iterator3.next()), _iteratorNormalCompletion3 = _step3.done, _value3 = yield _awaitAsyncGenerator(_step3.value), !_iteratorNormalCompletion3; _iteratorNormalCompletion3 = true) {
          var value = _value3;
          yield new StaticValue(value);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            yield _awaitAsyncGenerator(_iterator3.return());
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }));
  } else if (val === null || val === undefined) {
    return NULL_VALUE;
  } else {
    return new StaticValue(val);
  }
}

var TYPE_ORDER = {
  number: 1,
  string: 2,
  boolean: 3
};
function partialCompare(a, b) {
  var aType = getType(a);
  var bType = getType(b);
  if (aType !== bType) return null;

  switch (aType) {
    case 'number':
    case 'boolean':
      return a - b;

    case 'string':
      return a < b ? -1 : a > b ? 1 : 0;
  }

  return null;
}
function totalCompare(a, b) {
  var aType = getType(a);
  var bType = getType(b);
  var aTypeOrder = TYPE_ORDER[aType] || 100;
  var bTypeOrder = TYPE_ORDER[bType] || 100;

  if (aTypeOrder !== bTypeOrder) {
    return aTypeOrder - bTypeOrder;
  }

  var result = partialCompare(a, b);
  if (result === null) result = 0;
  return result;
}

function hasReference(value, id) {
  switch (getType(value)) {
    case 'array':
      for (var _iterator3 = _createForOfIteratorHelperLoose(value), _step3; !(_step3 = _iterator3()).done;) {
        var v = _step3.value;
        if (hasReference(v, id)) return true;
      }

      break;

    case 'object':
      if (value._ref === id) return true;

      for (var _i = 0, _Object$values = Object.values(value); _i < _Object$values.length; _i++) {
        var _v = _Object$values[_i];
        if (hasReference(_v, id)) return true;
      }

      break;
  }

  return false;
}

function countUTF8(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    if (code >= 0xd800 && code <= 0xdbff) {
      // High surrogate. Don't count this.
      // By only counting the low surrogate we will correctly
      // count the number of UTF-8 code points.
      continue;
    }

    count++;
  }

  return count;
}

var functions = {};

functions.coalesce = /*#__PURE__*/function () {
  var _coalesce = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    for (var _iterator4 = _createForOfIteratorHelperLoose(args), _step4; !(_step4 = _iterator4()).done;) {
      var arg = _step4.value;
      var value = yield execute(arg, scope);
      if (value.getType() !== 'null') return value;
    }

    return NULL_VALUE;
  });

  function coalesce(_x, _x2, _x3) {
    return _coalesce.apply(this, arguments);
  }

  return coalesce;
}();

functions.count = /*#__PURE__*/function () {
  var _count = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    var inner = yield execute(args[0], scope);
    if (inner.getType() !== 'array') return NULL_VALUE;
    var num = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(inner), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        var _ = _value;
        num++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return new StaticValue(num);
  });

  function count(_x4, _x5, _x6) {
    return _count.apply(this, arguments);
  }

  return count;
}();

functions.count.arity = 1;

functions.defined = /*#__PURE__*/function () {
  var _defined = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    var inner = yield execute(args[0], scope);
    return inner.getType() === 'null' ? FALSE_VALUE : TRUE_VALUE;
  });

  function defined(_x7, _x8, _x9) {
    return _defined.apply(this, arguments);
  }

  return defined;
}();

functions.defined.arity = 1;

functions.identity = /*#__PURE__*/function () {
  var _identity = /*#__PURE__*/_asyncToGenerator(function* (args) {
    return new StaticValue('me');
  });

  function identity(_x10) {
    return _identity.apply(this, arguments);
  }

  return identity;
}();

functions.identity.arity = 0;

functions.length = /*#__PURE__*/function () {
  var _length = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    var inner = yield execute(args[0], scope);

    if (inner.getType() === 'string') {
      var data = yield inner.get();
      return fromNumber(countUTF8(data));
    }

    return NULL_VALUE;
  });

  function length(_x11, _x12, _x13) {
    return _length.apply(this, arguments);
  }

  return length;
}();

functions.length.arity = 1;

functions.path = /*#__PURE__*/function () {
  var _path = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    var inner = yield execute(args[0], scope);
    if (inner.getType() !== 'string') return NULL_VALUE;
    var str = yield inner.get();
    return new StaticValue(new Path(str));
  });

  function path(_x14, _x15, _x16) {
    return _path.apply(this, arguments);
  }

  return path;
}();

functions.path.arity = 1;

functions.select = /*#__PURE__*/function () {
  var _select = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    // First check if everything is valid:
    var seenFallback = false;

    for (var _iterator5 = _createForOfIteratorHelperLoose(args), _step5; !(_step5 = _iterator5()).done;) {
      var arg = _step5.value;
      if (seenFallback) return NULL_VALUE;

      if (arg.type === 'Pair') ; else {
        seenFallback = true;
      }
    }

    for (var _iterator6 = _createForOfIteratorHelperLoose(args), _step6; !(_step6 = _iterator6()).done;) {
      var _arg = _step6.value;

      if (_arg.type === 'Pair') {
        var cond = yield execute(_arg.left, scope);

        if (cond.getBoolean()) {
          return yield execute(_arg.right, scope);
        }
      } else {
        return yield execute(_arg, scope);
      }
    }

    return NULL_VALUE;
  });

  function select(_x17, _x18, _x19) {
    return _select.apply(this, arguments);
  }

  return select;
}();

functions.references = /*#__PURE__*/function () {
  var _references = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    var idValue = yield execute(args[0], scope);
    if (idValue.getType() !== 'string') return FALSE_VALUE;
    var id = yield idValue.get();
    var scopeValue = scope.value;
    return hasReference(scopeValue, id) ? TRUE_VALUE : FALSE_VALUE;
  });

  function references(_x20, _x21, _x22) {
    return _references.apply(this, arguments);
  }

  return references;
}();

functions.references.arity = 1;

functions.round = /*#__PURE__*/function () {
  var _round = /*#__PURE__*/_asyncToGenerator(function* (args, scope, execute) {
    var value = yield execute(args[0], scope);
    if (value.getType() !== 'number') return NULL_VALUE;
    var num = yield value.get();
    var prec = 0;

    if (args.length === 2) {
      var precValue = yield execute(args[1], scope);
      if (precValue.getType() !== 'number') return NULL_VALUE;
      prec = yield precValue.get();
    }

    if (prec === 0) {
      return fromNumber(Math.round(num));
    } else {
      return fromNumber(Number(num.toFixed(prec)));
    }
  });

  function round(_x23, _x24, _x25) {
    return _round.apply(this, arguments);
  }

  return round;
}();

functions.round.arity = count => count >= 1 && count <= 2;

functions.now = /*#__PURE__*/function () {
  var _now = /*#__PURE__*/_asyncToGenerator(function* (args, scope) {
    return new StaticValue(scope.timestamp);
  });

  function now(_x26, _x27) {
    return _now.apply(this, arguments);
  }

  return now;
}();

functions.now.arity = 0;
var pipeFunctions = {};

pipeFunctions.order = /*#__PURE__*/function () {
  var _order = /*#__PURE__*/_asyncToGenerator(function* (base, args, scope, execute) {
    // This is a workaround for https://github.com/rpetrich/babel-plugin-transform-async-to-promises/issues/59
    yield true;
    if (base.getType() !== 'array') return NULL_VALUE;
    var mappers = [];
    var directions = [];
    var n = 0;

    for (var _iterator7 = _createForOfIteratorHelperLoose(args), _step7; !(_step7 = _iterator7()).done;) {
      var mapper = _step7.value;
      var direction = 'asc';

      if (mapper.type === 'Desc') {
        direction = 'desc';
        mapper = mapper.base;
      } else if (mapper.type === 'Asc') {
        mapper = mapper.base;
      }

      mappers.push(mapper);
      directions.push(direction);
      n++;
    }

    var aux = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;

    var _iteratorError2;

    try {
      for (var _iterator2 = _asyncIterator(base), _step2, _value2; _step2 = yield _iterator2.next(), _iteratorNormalCompletion2 = _step2.done, _value2 = yield _step2.value, !_iteratorNormalCompletion2; _iteratorNormalCompletion2 = true) {
        var value = _value2;
        var newScope = scope.createNested(value);
        var tuple = [yield value.get()];

        for (var i = 0; i < n; i++) {
          var result = yield execute(mappers[i], newScope);
          tuple.push(yield result.get());
        }

        aux.push(tuple);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          yield _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    aux.sort((aTuple, bTuple) => {
      for (var _i2 = 0; _i2 < n; _i2++) {
        var c = totalCompare(aTuple[_i2 + 1], bTuple[_i2 + 1]);
        if (directions[_i2] === 'desc') c = -c;
        if (c !== 0) return c;
      }

      return 0;
    });
    return new StaticValue(aux.map(v => v[0]));
  });

  function order(_x28, _x29, _x30, _x31) {
    return _order.apply(this, arguments);
  }

  return order;
}();

pipeFunctions.order.arity = count => count >= 1;

function State() {}

function Step(token, position) {
  this.token = token;
  this.position = position;
  this.nextFrames = [];
  this.acceptedContexts = [];
  this.callers = {};
}

Step.prototype.hasNextFrames = function hasNextFrames() {
  return this.nextFrames.length > 0;
};

Step.prototype.addNextFrame = function addNextFrame(frame) {
  this.nextFrames.push(frame);
};

Step.prototype.wasAccepted = function wasAccepted() {
  return this.acceptedContexts.length > 0;
};

Step.prototype.addAccept = function addAccept(context) {
  this.acceptedContexts.push(context);
};

Step.prototype.addMark = function addMark(name, context, nextState) {
  var mark = {
    type: "mark",
    name: name,
    position: this.position
  };
  var marks = context.marks ? {
    type: "concat",
    left: context.marks,
    right: mark
  } : mark;
  var nextContext = new Context(context.caller, marks);
  var nextFrame = new Frame(nextContext);
  nextState.p(this, nextFrame);
  addNextFrame(this, nextFrame);
};

Step.prototype.startCall = function startCall(ruleId) {
  var caller = this.callers[ruleId];

  if (!caller) {
    caller = new Caller();
    this.callers[ruleId] = caller;
    var callContext = new Context(caller, null);
    var callFrame = new Frame(callContext);
    var states = ruleInitialStates[ruleId];

    for (var i = 0; i < states.length; i++) {
      var state = states[i];
      state.p(this, callFrame);
    }

    addNextFrame(this, callFrame);
  }

  return caller;
};

Step.prototype.returnCall = function returnCall(ruleId, frame) {
  // TODO: Implement proper grouping
  var caller = frame.context.caller;
  var returns = caller.returns;

  for (var i = 0; i < returns.length; i++) {
    var ret = returns[i];
    var callerContext = ret[0];
    var state = ret[1];
    var leftMarks = callerContext.marks;
    var rightMarks = frame.context.marks;
    var marks = leftMarks && rightMarks ? {
      type: "concat",
      left: callerContext.marks,
      right: frame.context.marks
    } : leftMarks || rightMarks;
    var context = new Context(callerContext.caller, marks);
    var nextFrame = new Frame(context);
    state.p(this, nextFrame);
    addNextFrame(this, nextFrame);
  }
};

function Caller() {
  this.returns = [];
}

Caller.prototype.addReturn = function (context, nextState) {
  this.returns.push([context, nextState]);
};

function Context(caller, marks) {
  this.caller = caller;
  this.marks = marks;
}

function Frame(context) {
  this.context = context;
  this.nextStates = [];
}

Frame.prototype.addNextState = function addNextState(state) {
  this.nextStates.push(state);
};

Frame.prototype.eachNextState = function eachNextState(fn) {
  this.nextStates.forEach(fn);
};

Frame.prototype.hasNextStates = function hasNextStates() {
  return this.nextStates.length > 0;
};

Frame.prototype.copy = function copy() {
  return new Frame(this.context, this.marks);
};

function processToken(token, position, frames) {
  var step = new Step(token, position);

  for (var i = 0; i < frames.length; i++) {
    var frame = frames[i];
    processFrame(step, frame);
  }

  return step;
}

function processFrame(step, frame) {
  var newFrame = frame.copy();
  frame.eachNextState(function (state) {
    state.p(step, newFrame);
  });
  addNextFrame(step, newFrame);
}

function addNextFrame(step, frame) {
  if (frame.hasNextStates()) {
    step.addNextFrame(frame);
  }
}

function flattenMarks(marks) {
  if (!marks) return [];
  var queue = [marks];
  var result = [];

  while (queue.length) {
    var m = queue.shift();

    if (m.type === "concat") {
      queue.unshift(m.left, m.right);
    } else if (m.type === "mark") {
      result.push(m);
    } else {
      throw new Error("unknown mark type: " + m.type);
    }
  }

  return result;
}

function parse(input) {
  var frames = initialFrames;
  var i = 0;

  for (; i < input.length; i++) {
    var token = input.charCodeAt(i);
    var step = processToken(token, i, frames);

    if (!step.hasNextFrames()) {
      return {
        type: "error",
        position: i
      };
    }

    frames = step.nextFrames;
  }

  step = processToken(null, i, frames);

  if (!step.wasAccepted()) {
    return {
      type: "error",
      position: i
    };
  }

  var ctx = step.acceptedContexts[0];
  var marks = flattenMarks(ctx.marks);
  return {
    type: "success",
    marks: marks
  };
}
var state0 = /*#__PURE__*/new State();
var state1 = /*#__PURE__*/new State();
var state2 = /*#__PURE__*/new State();
var state3 = /*#__PURE__*/new State();
var state4 = /*#__PURE__*/new State();
var state5 = /*#__PURE__*/new State();
var state6 = /*#__PURE__*/new State();
var state7 = /*#__PURE__*/new State();
var state8 = /*#__PURE__*/new State();
var state9 = /*#__PURE__*/new State();
var state10 = /*#__PURE__*/new State();
var state11 = /*#__PURE__*/new State();
var state12 = /*#__PURE__*/new State();
var state13 = /*#__PURE__*/new State();
var state14 = /*#__PURE__*/new State();
var state15 = /*#__PURE__*/new State();
var state16 = /*#__PURE__*/new State();
var state17 = /*#__PURE__*/new State();
var state18 = /*#__PURE__*/new State();
var state19 = /*#__PURE__*/new State();
var state20 = /*#__PURE__*/new State();
var state21 = /*#__PURE__*/new State();
var state22 = /*#__PURE__*/new State();
var state23 = /*#__PURE__*/new State();
var state24 = /*#__PURE__*/new State();
var state25 = /*#__PURE__*/new State();
var state26 = /*#__PURE__*/new State();
var state27 = /*#__PURE__*/new State();
var state28 = /*#__PURE__*/new State();
var state29 = /*#__PURE__*/new State();
var state30 = /*#__PURE__*/new State();
var state31 = /*#__PURE__*/new State();
var state32 = /*#__PURE__*/new State();
var state33 = /*#__PURE__*/new State();
var state34 = /*#__PURE__*/new State();
var state35 = /*#__PURE__*/new State();
var state36 = /*#__PURE__*/new State();
var state37 = /*#__PURE__*/new State();
var state38 = /*#__PURE__*/new State();
var state39 = /*#__PURE__*/new State();
var state40 = /*#__PURE__*/new State();
var state41 = /*#__PURE__*/new State();
var state42 = /*#__PURE__*/new State();
var state43 = /*#__PURE__*/new State();
var state44 = /*#__PURE__*/new State();
var state45 = /*#__PURE__*/new State();
var state46 = /*#__PURE__*/new State();
var state47 = /*#__PURE__*/new State();
var state48 = /*#__PURE__*/new State();
var state49 = /*#__PURE__*/new State();
var state50 = /*#__PURE__*/new State();
var state51 = /*#__PURE__*/new State();
var state52 = /*#__PURE__*/new State();
var state53 = /*#__PURE__*/new State();
var state54 = /*#__PURE__*/new State();
var state55 = /*#__PURE__*/new State();
var state56 = /*#__PURE__*/new State();
var state57 = /*#__PURE__*/new State();
var state58 = /*#__PURE__*/new State();
var state59 = /*#__PURE__*/new State();
var state60 = /*#__PURE__*/new State();
var state61 = /*#__PURE__*/new State();
var state62 = /*#__PURE__*/new State();
var state63 = /*#__PURE__*/new State();
var state64 = /*#__PURE__*/new State();
var state65 = /*#__PURE__*/new State();
var state66 = /*#__PURE__*/new State();
var state67 = /*#__PURE__*/new State();
var state68 = /*#__PURE__*/new State();
var state69 = /*#__PURE__*/new State();
var state70 = /*#__PURE__*/new State();
var state71 = /*#__PURE__*/new State();
var state72 = /*#__PURE__*/new State();
var state73 = /*#__PURE__*/new State();
var state74 = /*#__PURE__*/new State();
var state75 = /*#__PURE__*/new State();
var state76 = /*#__PURE__*/new State();
var state77 = /*#__PURE__*/new State();
var state78 = /*#__PURE__*/new State();
var state79 = /*#__PURE__*/new State();
var state80 = /*#__PURE__*/new State();
var state81 = /*#__PURE__*/new State();
var state82 = /*#__PURE__*/new State();
var state83 = /*#__PURE__*/new State();
var state84 = /*#__PURE__*/new State();
var state85 = /*#__PURE__*/new State();
var state86 = /*#__PURE__*/new State();
var state87 = /*#__PURE__*/new State();
var state88 = /*#__PURE__*/new State();
var state89 = /*#__PURE__*/new State();
var state90 = /*#__PURE__*/new State();
var state91 = /*#__PURE__*/new State();
var state92 = /*#__PURE__*/new State();
var state93 = /*#__PURE__*/new State();
var state94 = /*#__PURE__*/new State();
var state95 = /*#__PURE__*/new State();
var state96 = /*#__PURE__*/new State();
var state97 = /*#__PURE__*/new State();
var state98 = /*#__PURE__*/new State();
var state99 = /*#__PURE__*/new State();
var state100 = /*#__PURE__*/new State();
var state101 = /*#__PURE__*/new State();
var state102 = /*#__PURE__*/new State();
var state103 = /*#__PURE__*/new State();
var state104 = /*#__PURE__*/new State();
var state105 = /*#__PURE__*/new State();
var state106 = /*#__PURE__*/new State();
var state107 = /*#__PURE__*/new State();
var state108 = /*#__PURE__*/new State();
var state109 = /*#__PURE__*/new State();
var state110 = /*#__PURE__*/new State();
var state111 = /*#__PURE__*/new State();
var state112 = /*#__PURE__*/new State();
var state113 = /*#__PURE__*/new State();
var state114 = /*#__PURE__*/new State();
var state115 = /*#__PURE__*/new State();
var state116 = /*#__PURE__*/new State();
var state117 = /*#__PURE__*/new State();
var state118 = /*#__PURE__*/new State();
var state119 = /*#__PURE__*/new State();
var state120 = /*#__PURE__*/new State();
var state121 = /*#__PURE__*/new State();
var state122 = /*#__PURE__*/new State();
var state123 = /*#__PURE__*/new State();
var state124 = /*#__PURE__*/new State();
var state125 = /*#__PURE__*/new State();
var state126 = /*#__PURE__*/new State();
var state127 = /*#__PURE__*/new State();
var state128 = /*#__PURE__*/new State();
var state129 = /*#__PURE__*/new State();
var state130 = /*#__PURE__*/new State();
var state131 = /*#__PURE__*/new State();
var state132 = /*#__PURE__*/new State();
var state133 = /*#__PURE__*/new State();
var state134 = /*#__PURE__*/new State();
var state135 = /*#__PURE__*/new State();
var state136 = /*#__PURE__*/new State();
var state137 = /*#__PURE__*/new State();
var state138 = /*#__PURE__*/new State();
var state139 = /*#__PURE__*/new State();
var state140 = /*#__PURE__*/new State();
var state141 = /*#__PURE__*/new State();
var state142 = /*#__PURE__*/new State();
var state143 = /*#__PURE__*/new State();
var state144 = /*#__PURE__*/new State();
var state145 = /*#__PURE__*/new State();
var state146 = /*#__PURE__*/new State();
var state147 = /*#__PURE__*/new State();
var state148 = /*#__PURE__*/new State();
var state149 = /*#__PURE__*/new State();
var state150 = /*#__PURE__*/new State();
var state151 = /*#__PURE__*/new State();
var state152 = /*#__PURE__*/new State();
var state153 = /*#__PURE__*/new State();
var state154 = /*#__PURE__*/new State();
var state155 = /*#__PURE__*/new State();
var state156 = /*#__PURE__*/new State();
var state157 = /*#__PURE__*/new State();
var state158 = /*#__PURE__*/new State();
var state159 = /*#__PURE__*/new State();
var state160 = /*#__PURE__*/new State();
var state161 = /*#__PURE__*/new State();
var state162 = /*#__PURE__*/new State();
var state163 = /*#__PURE__*/new State();
var state164 = /*#__PURE__*/new State();
var state165 = /*#__PURE__*/new State();
var state166 = /*#__PURE__*/new State();
var state167 = /*#__PURE__*/new State();
var state168 = /*#__PURE__*/new State();
var state169 = /*#__PURE__*/new State();
var state170 = /*#__PURE__*/new State();
var state171 = /*#__PURE__*/new State();
var state172 = /*#__PURE__*/new State();
var state173 = /*#__PURE__*/new State();
var state174 = /*#__PURE__*/new State();
var state175 = /*#__PURE__*/new State();
var state176 = /*#__PURE__*/new State();
var state177 = /*#__PURE__*/new State();
var state178 = /*#__PURE__*/new State();
var state179 = /*#__PURE__*/new State();
var state180 = /*#__PURE__*/new State();
var state181 = /*#__PURE__*/new State();
var state182 = /*#__PURE__*/new State();
var state183 = /*#__PURE__*/new State();
var state184 = /*#__PURE__*/new State();
var state185 = /*#__PURE__*/new State();
var state186 = /*#__PURE__*/new State();
var state187 = /*#__PURE__*/new State();
var state188 = /*#__PURE__*/new State();
var state189 = /*#__PURE__*/new State();
var state190 = /*#__PURE__*/new State();
var state191 = /*#__PURE__*/new State();
var state192 = /*#__PURE__*/new State();
var state193 = /*#__PURE__*/new State();
var state194 = /*#__PURE__*/new State();
var state195 = /*#__PURE__*/new State();
var state196 = /*#__PURE__*/new State();
var state197 = /*#__PURE__*/new State();
var state198 = /*#__PURE__*/new State();
var state199 = /*#__PURE__*/new State();
var state200 = /*#__PURE__*/new State();
var state201 = /*#__PURE__*/new State();
var state202 = /*#__PURE__*/new State();
var state203 = /*#__PURE__*/new State();
var state204 = /*#__PURE__*/new State();
var state205 = /*#__PURE__*/new State();
var state206 = /*#__PURE__*/new State();
var state207 = /*#__PURE__*/new State();
var state208 = /*#__PURE__*/new State();
var state209 = /*#__PURE__*/new State();
var state210 = /*#__PURE__*/new State();
var state211 = /*#__PURE__*/new State();
var state212 = /*#__PURE__*/new State();
var state213 = /*#__PURE__*/new State();
var state214 = /*#__PURE__*/new State();
var state215 = /*#__PURE__*/new State();
var state216 = /*#__PURE__*/new State();
var state217 = /*#__PURE__*/new State();
var state218 = /*#__PURE__*/new State();
var state219 = /*#__PURE__*/new State();
var state220 = /*#__PURE__*/new State();
var state221 = /*#__PURE__*/new State();
var state222 = /*#__PURE__*/new State();
var state223 = /*#__PURE__*/new State();
var state224 = /*#__PURE__*/new State();
var state225 = /*#__PURE__*/new State();
var state226 = /*#__PURE__*/new State();
var state227 = /*#__PURE__*/new State();
var state228 = /*#__PURE__*/new State();
var state229 = /*#__PURE__*/new State();
var state230 = /*#__PURE__*/new State();
var state231 = /*#__PURE__*/new State();
var state232 = /*#__PURE__*/new State();
var state233 = /*#__PURE__*/new State();
var state234 = /*#__PURE__*/new State();
var state235 = /*#__PURE__*/new State();
var state236 = /*#__PURE__*/new State();
var state237 = /*#__PURE__*/new State();
var state238 = /*#__PURE__*/new State();
var state239 = /*#__PURE__*/new State();
var state240 = /*#__PURE__*/new State();
var state241 = /*#__PURE__*/new State();
var state242 = /*#__PURE__*/new State();
var state243 = /*#__PURE__*/new State();
var state244 = /*#__PURE__*/new State();
var state245 = /*#__PURE__*/new State();
var state246 = /*#__PURE__*/new State();
var state247 = /*#__PURE__*/new State();
var state248 = /*#__PURE__*/new State();
var state249 = /*#__PURE__*/new State();
var state250 = /*#__PURE__*/new State();
var state251 = /*#__PURE__*/new State();
var state252 = /*#__PURE__*/new State();
var state253 = /*#__PURE__*/new State();
var state254 = /*#__PURE__*/new State();
var state255 = /*#__PURE__*/new State();
var state256 = /*#__PURE__*/new State();
var state257 = /*#__PURE__*/new State();
var state258 = /*#__PURE__*/new State();
var state259 = /*#__PURE__*/new State();
var state260 = /*#__PURE__*/new State();
var state261 = /*#__PURE__*/new State();
var state262 = /*#__PURE__*/new State();
var state263 = /*#__PURE__*/new State();
var state264 = /*#__PURE__*/new State();
var state265 = /*#__PURE__*/new State();
var state266 = /*#__PURE__*/new State();
var state267 = /*#__PURE__*/new State();
var state268 = /*#__PURE__*/new State();
var state269 = /*#__PURE__*/new State();
var state270 = /*#__PURE__*/new State();
var state271 = /*#__PURE__*/new State();
var state272 = /*#__PURE__*/new State();
var state273 = /*#__PURE__*/new State();
var state274 = /*#__PURE__*/new State();
var state275 = /*#__PURE__*/new State();
var state276 = /*#__PURE__*/new State();
var state277 = /*#__PURE__*/new State();
var state278 = /*#__PURE__*/new State();
var state279 = /*#__PURE__*/new State();
var state280 = /*#__PURE__*/new State();
var state281 = /*#__PURE__*/new State();
var state282 = /*#__PURE__*/new State();
var state283 = /*#__PURE__*/new State();
var state284 = /*#__PURE__*/new State();
var state285 = /*#__PURE__*/new State();
var state286 = /*#__PURE__*/new State();
var state287 = /*#__PURE__*/new State();
var state288 = /*#__PURE__*/new State();
var state289 = /*#__PURE__*/new State();
var state290 = /*#__PURE__*/new State();
var state291 = /*#__PURE__*/new State();
var state292 = /*#__PURE__*/new State();
var state293 = /*#__PURE__*/new State();
var state294 = /*#__PURE__*/new State();
var state295 = /*#__PURE__*/new State();
var state296 = /*#__PURE__*/new State();
var state297 = /*#__PURE__*/new State();
var state298 = /*#__PURE__*/new State();
var state299 = /*#__PURE__*/new State();
var state300 = /*#__PURE__*/new State();
var state301 = /*#__PURE__*/new State();
var state302 = /*#__PURE__*/new State();
var state303 = /*#__PURE__*/new State();
var state304 = /*#__PURE__*/new State();
var state305 = /*#__PURE__*/new State();
var state306 = /*#__PURE__*/new State();
var state307 = /*#__PURE__*/new State();
var state308 = /*#__PURE__*/new State();
var state309 = /*#__PURE__*/new State();
var state310 = /*#__PURE__*/new State();
var state311 = /*#__PURE__*/new State();
var state312 = /*#__PURE__*/new State();
var state313 = /*#__PURE__*/new State();
var state314 = /*#__PURE__*/new State();
var state315 = /*#__PURE__*/new State();
var state316 = /*#__PURE__*/new State();
var state317 = /*#__PURE__*/new State();
var state318 = /*#__PURE__*/new State();
var state319 = /*#__PURE__*/new State();
var state320 = /*#__PURE__*/new State();
var state321 = /*#__PURE__*/new State();
var state322 = /*#__PURE__*/new State();
var state323 = /*#__PURE__*/new State();
var state324 = /*#__PURE__*/new State();
var state325 = /*#__PURE__*/new State();
var state326 = /*#__PURE__*/new State();
var state327 = /*#__PURE__*/new State();
var state328 = /*#__PURE__*/new State();
var state329 = /*#__PURE__*/new State();
var state330 = /*#__PURE__*/new State();
var state331 = /*#__PURE__*/new State();
var state332 = /*#__PURE__*/new State();
var state333 = /*#__PURE__*/new State();
var state334 = /*#__PURE__*/new State();
var state335 = /*#__PURE__*/new State();
var state336 = /*#__PURE__*/new State();
var state337 = /*#__PURE__*/new State();
var state338 = /*#__PURE__*/new State();
var state339 = /*#__PURE__*/new State();
var state340 = /*#__PURE__*/new State();
var state341 = /*#__PURE__*/new State();
var state342 = /*#__PURE__*/new State();
var state343 = /*#__PURE__*/new State();
var state344 = /*#__PURE__*/new State();
var state345 = /*#__PURE__*/new State();
var state346 = /*#__PURE__*/new State();
var state347 = /*#__PURE__*/new State();
var state348 = /*#__PURE__*/new State();
var state349 = /*#__PURE__*/new State();
var state350 = /*#__PURE__*/new State();
var state351 = /*#__PURE__*/new State();
var state352 = /*#__PURE__*/new State();
var state353 = /*#__PURE__*/new State();
var state354 = /*#__PURE__*/new State();
var state355 = /*#__PURE__*/new State();
var state356 = /*#__PURE__*/new State();
var state357 = /*#__PURE__*/new State();
var state358 = /*#__PURE__*/new State();
var state359 = /*#__PURE__*/new State();
var state360 = /*#__PURE__*/new State();
var state361 = /*#__PURE__*/new State();
var state362 = /*#__PURE__*/new State();
var state363 = /*#__PURE__*/new State();
var state364 = /*#__PURE__*/new State();
var state365 = /*#__PURE__*/new State();
var state366 = /*#__PURE__*/new State();
var state367 = /*#__PURE__*/new State();
var state368 = /*#__PURE__*/new State();
var state369 = /*#__PURE__*/new State();
var state370 = /*#__PURE__*/new State();
var state371 = /*#__PURE__*/new State();
var state372 = /*#__PURE__*/new State();
var state373 = /*#__PURE__*/new State();
var state374 = /*#__PURE__*/new State();
var state375 = /*#__PURE__*/new State();
var state376 = /*#__PURE__*/new State();
var state377 = /*#__PURE__*/new State();
var state378 = /*#__PURE__*/new State();

state0.p = function (step, frame) {
  step.startCall("main").addReturn(frame.context, state1);
};

state0.id = 0;

state1.p = function (step, frame) {
  step.addAccept(frame.context);
};

state1.id = 1;

state2.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state3);
  step.startCall("EXPR^1").addReturn(frame.context, state4);
};

state2.id = 2;

state3.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state3);
  step.startCall("EXPR^1").addReturn(frame.context, state4);
};

state3.id = 3;

state4.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state5);
  step.returnCall("main", frame);
};

state4.id = 4;

state5.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state5);
  step.returnCall("main", frame);
};

state5.id = 5;

state6.p = function (step, frame) {
  var token = step.token;

  if (token === 9) {
    frame.addNextState(state7);
  }

  if (token === 10) {
    frame.addNextState(state8);
  }

  if (token === 11) {
    frame.addNextState(state9);
  }

  if (token === 12) {
    frame.addNextState(state10);
  }

  if (token === 13) {
    frame.addNextState(state11);
  }

  if (token === 32) {
    frame.addNextState(state12);
  }

  if (token === 133) {
    frame.addNextState(state13);
  }

  if (token === 160) {
    frame.addNextState(state14);
  }
};

state6.id = 6;

state7.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state7.id = 7;

state8.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state8.id = 8;

state9.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state9.id = 9;

state10.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state10.id = 10;

state11.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state11.id = 11;

state12.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state12.id = 12;

state13.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state13.id = 13;

state14.p = function (step, frame) {
  step.returnCall("SPACE", frame);
};

state14.id = 14;

state15.p = function (step, frame) {
  var token = step.token;

  if (token === 47) {
    frame.addNextState(state16);
  }
};

state15.id = 15;

state16.p = function (step, frame) {
  var token = step.token;

  if (token === 47) {
    frame.addNextState(state17);
  }
};

state16.id = 16;

state17.p = function (step, frame) {
  var token = step.token;

  if (token <= 9) {
    frame.addNextState(state18);
  }

  if (token >= 11) {
    frame.addNextState(state19);
  }
};

state17.id = 17;

state18.p = function (step, frame) {
  var token = step.token;

  if (token <= 9) {
    frame.addNextState(state18);
  }

  if (token >= 11) {
    frame.addNextState(state19);
  }

  step.startCall("COMMENT_END").addReturn(frame.context, state20);
};

state18.id = 18;

state19.p = function (step, frame) {
  var token = step.token;

  if (token <= 9) {
    frame.addNextState(state18);
  }

  if (token >= 11) {
    frame.addNextState(state19);
  }

  step.startCall("COMMENT_END").addReturn(frame.context, state20);
};

state19.id = 19;

state20.p = function (step, frame) {
  step.returnCall("COMMENT", frame);
};

state20.id = 20;

state21.p = function (step, frame) {
  var token = step.token;

  if (token === 10) {
    frame.addNextState(state22);
  }
};

state21.id = 21;

state22.p = function (step, frame) {
  step.returnCall("COMMENT_END", frame);
};

state22.id = 22;

state23.p = function (step, frame) {
  step.startCall("SPACE").addReturn(frame.context, state24);
  step.startCall("COMMENT").addReturn(frame.context, state25);
};

state23.id = 23;

state24.p = function (step, frame) {
  step.returnCall("IGN", frame);
};

state24.id = 24;

state25.p = function (step, frame) {
  step.returnCall("IGN", frame);
};

state25.id = 25;

state26.p = function (step, frame) {
  var token = step.token;

  if (token === 124) {
    frame.addNextState(state27);
  }
};

state26.id = 26;

state27.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state28);
  step.returnCall("PIPE", frame);
};

state27.id = 27;

state28.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state28);
  step.returnCall("PIPE", frame);
};

state28.id = 28;

state29.p = function (step, frame) {
  step.addMark("parent", frame.context, state30);
  step.addMark("dblparent", frame.context, state31);
};

state29.id = 29;

state30.p = function (step, frame) {
  var token = step.token;

  if (token === 94) {
    frame.addNextState(state32);
  }
};

state30.id = 30;

state31.p = function (step, frame) {
  step.startCall("PARENT").addReturn(frame.context, state33);
};

state31.id = 31;

state32.p = function (step, frame) {
  step.returnCall("PARENT", frame);
};

state32.id = 32;

state33.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state34);
  }
};

state33.id = 33;

state34.p = function (step, frame) {
  var token = step.token;

  if (token === 94) {
    frame.addNextState(state35);
  }
};

state34.id = 34;

state35.p = function (step, frame) {
  step.returnCall("PARENT", frame);
};

state35.id = 35;

state36.p = function (step, frame) {
  var token = step.token;

  if (token >= 97 && token <= 122) {
    frame.addNextState(state37);
  }

  if (token >= 65 && token <= 90) {
    frame.addNextState(state38);
  }

  if (token === 95) {
    frame.addNextState(state39);
  }
};

state36.id = 36;

state37.p = function (step, frame) {
  step.returnCall("IDENT_FST", frame);
};

state37.id = 37;

state38.p = function (step, frame) {
  step.returnCall("IDENT_FST", frame);
};

state38.id = 38;

state39.p = function (step, frame) {
  step.returnCall("IDENT_FST", frame);
};

state39.id = 39;

state40.p = function (step, frame) {
  var token = step.token;
  step.startCall("IDENT_FST").addReturn(frame.context, state41);

  if (token >= 48 && token <= 57) {
    frame.addNextState(state42);
  }
};

state40.id = 40;

state41.p = function (step, frame) {
  step.returnCall("IDENT_REST", frame);
};

state41.id = 41;

state42.p = function (step, frame) {
  step.returnCall("IDENT_REST", frame);
};

state42.id = 42;

state43.p = function (step, frame) {
  step.startCall("IDENT_FST").addReturn(frame.context, state44);
};

state43.id = 43;

state44.p = function (step, frame) {
  var token = step.token;
  step.startCall("IDENT_REST").addReturn(frame.context, state45);
  if ((token <= 96 || token >= 123) && (token <= 64 || token >= 91) && (token <= 47 || token >= 58)) step.returnCall("IDENT", frame);
};

state44.id = 44;

state45.p = function (step, frame) {
  var token = step.token;
  step.startCall("IDENT_REST").addReturn(frame.context, state45);
  if ((token <= 96 || token >= 123) && (token <= 64 || token >= 91) && (token <= 47 || token >= 58)) step.returnCall("IDENT", frame);
};

state45.id = 45;

state46.p = function (step, frame) {
  var token = step.token;

  if (token === 42) {
    frame.addNextState(state47);
  }
};

state46.id = 46;

state47.p = function (step, frame) {
  var token = step.token;
  if (token <= 41 || token >= 43) step.returnCall("STAR", frame);
};

state47.id = 47;

state48.p = function (step, frame) {
  var token = step.token;

  if (token === 61) {
    frame.addNextState(state49);
  }

  if (token === 33) {
    frame.addNextState(state50);
  }

  if (token === 62) {
    frame.addNextState(state51);
  }

  if (token === 62) {
    frame.addNextState(state52);
  }

  if (token === 60) {
    frame.addNextState(state53);
  }

  if (token === 60) {
    frame.addNextState(state54);
  }

  if (token === 105) {
    frame.addNextState(state55);
  }

  if (token === 109) {
    frame.addNextState(state56);
  }
};

state48.id = 48;

state49.p = function (step, frame) {
  var token = step.token;

  if (token === 61) {
    frame.addNextState(state57);
  }
};

state49.id = 49;

state50.p = function (step, frame) {
  var token = step.token;

  if (token === 61) {
    frame.addNextState(state58);
  }
};

state50.id = 50;

state51.p = function (step, frame) {
  var token = step.token;

  if (token === 61) {
    frame.addNextState(state59);
  }
};

state51.id = 51;

state52.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state52.id = 52;

state53.p = function (step, frame) {
  var token = step.token;

  if (token === 61) {
    frame.addNextState(state60);
  }
};

state53.id = 53;

state54.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state54.id = 54;

state55.p = function (step, frame) {
  var token = step.token;

  if (token === 110) {
    frame.addNextState(state61);
  }
};

state55.id = 55;

state56.p = function (step, frame) {
  var token = step.token;

  if (token === 97) {
    frame.addNextState(state62);
  }
};

state56.id = 56;

state57.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state57.id = 57;

state58.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state58.id = 58;

state59.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state59.id = 59;

state60.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state60.id = 60;

state61.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state61.id = 61;

state62.p = function (step, frame) {
  var token = step.token;

  if (token === 116) {
    frame.addNextState(state63);
  }
};

state62.id = 62;

state63.p = function (step, frame) {
  var token = step.token;

  if (token === 99) {
    frame.addNextState(state64);
  }
};

state63.id = 63;

state64.p = function (step, frame) {
  var token = step.token;

  if (token === 104) {
    frame.addNextState(state65);
  }
};

state64.id = 64;

state65.p = function (step, frame) {
  step.returnCall("COMP_OP", frame);
};

state65.id = 65;

state66.p = function (step, frame) {
  step.addMark("func_call", frame.context, state67);
};

state66.id = 66;

state67.p = function (step, frame) {
  step.startCall("IDENT").addReturn(frame.context, state68);
};

state67.id = 67;

state68.p = function (step, frame) {
  step.addMark("func_name_end", frame.context, state69);
};

state68.id = 68;

state69.p = function (step, frame) {
  var token = step.token;

  if (token === 40) {
    frame.addNextState(state70);
  }
};

state69.id = 69;

state70.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state71);
  step.startCall("FUNC_ARGS").addReturn(frame.context, state72);
  step.addMark("func_args_end", frame.context, state73);
};

state70.id = 70;

state71.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state71);
  step.startCall("FUNC_ARGS").addReturn(frame.context, state72);
  step.addMark("func_args_end", frame.context, state73);
};

state71.id = 71;

state72.p = function (step, frame) {
  step.addMark("func_args_end", frame.context, state73);
};

state72.id = 72;

state73.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state74);

  if (token === 41) {
    frame.addNextState(state75);
  }
};

state73.id = 73;

state74.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state74);

  if (token === 41) {
    frame.addNextState(state75);
  }
};

state74.id = 74;

state75.p = function (step, frame) {
  step.returnCall("FUNC_CALL", frame);
};

state75.id = 75;

state76.p = function (step, frame) {
  step.startCall("EXPR^1").addReturn(frame.context, state77);
};

state76.id = 76;

state77.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state78);

  if (token === 44) {
    frame.addNextState(state80);
  }

  step.returnCall("FUNC_ARGS", frame);
};

state77.id = 77;

state78.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state78);

  if (token === 44) {
    frame.addNextState(state80);
  }

  step.returnCall("FUNC_ARGS", frame);
};

state78.id = 78;

state79.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state79);
  step.startCall("EXPR^1").addReturn(frame.context, state81);
};

state79.id = 79;

state80.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state79);
  step.startCall("EXPR^1").addReturn(frame.context, state81);
};

state80.id = 80;

state81.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state82);

  if (token === 44) {
    frame.addNextState(state80);
  }

  step.returnCall("FUNC_ARGS", frame);
};

state81.id = 81;

state82.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state82);

  if (token === 44) {
    frame.addNextState(state80);
  }

  step.returnCall("FUNC_ARGS", frame);
};

state82.id = 82;

state83.p = function (step, frame) {
  step.addMark("sci", frame.context, state84);
  step.addMark("float", frame.context, state85);
  step.addMark("integer", frame.context, state86);
};

state83.id = 83;

state84.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state87);
};

state84.id = 84;

state85.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state95);
};

state85.id = 85;

state86.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state99);
};

state86.id = 86;

state87.p = function (step, frame) {
  var token = step.token;
  step.startCall("DIGIT").addReturn(frame.context, state87);

  if (token === 46) {
    frame.addNextState(state89);
  }

  if (token === 101) {
    frame.addNextState(state90);
  }

  if (token === 69) {
    frame.addNextState(state91);
  }
};

state87.id = 87;

state88.p = function (step, frame) {
  var token = step.token;
  step.startCall("DIGIT").addReturn(frame.context, state88);

  if (token === 101) {
    frame.addNextState(state90);
  }

  if (token === 69) {
    frame.addNextState(state91);
  }
};

state88.id = 88;

state89.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state88);
};

state89.id = 89;

state90.p = function (step, frame) {
  step.startCall("SIGN").addReturn(frame.context, state92);
  step.startCall("DIGIT").addReturn(frame.context, state93);
};

state90.id = 90;

state91.p = function (step, frame) {
  step.startCall("SIGN").addReturn(frame.context, state92);
  step.startCall("DIGIT").addReturn(frame.context, state93);
};

state91.id = 91;

state92.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state93);
};

state92.id = 92;

state93.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state93);
  step.addMark("sci_end", frame.context, state94);
};

state93.id = 93;

state94.p = function (step, frame) {
  step.returnCall("NUMBER", frame);
};

state94.id = 94;

state95.p = function (step, frame) {
  var token = step.token;
  step.startCall("DIGIT").addReturn(frame.context, state95);

  if (token === 46) {
    frame.addNextState(state96);
  }
};

state95.id = 95;

state96.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state97);
};

state96.id = 96;

state97.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state97);
  step.addMark("float_end", frame.context, state98);
};

state97.id = 97;

state98.p = function (step, frame) {
  step.returnCall("NUMBER", frame);
};

state98.id = 98;

state99.p = function (step, frame) {
  step.startCall("DIGIT").addReturn(frame.context, state99);
  step.addMark("integer_end", frame.context, state100);
};

state99.id = 99;

state100.p = function (step, frame) {
  step.returnCall("NUMBER", frame);
};

state100.id = 100;

state101.p = function (step, frame) {
  var token = step.token;

  if (token >= 48 && token <= 57) {
    frame.addNextState(state102);
  }
};

state101.id = 101;

state102.p = function (step, frame) {
  step.returnCall("DIGIT", frame);
};

state102.id = 102;

state103.p = function (step, frame) {
  var token = step.token;

  if (token === 43) {
    frame.addNextState(state104);
  }

  if (token === 45) {
    frame.addNextState(state105);
  }
};

state103.id = 103;

state104.p = function (step, frame) {
  step.returnCall("SIGN", frame);
};

state104.id = 104;

state105.p = function (step, frame) {
  step.returnCall("SIGN", frame);
};

state105.id = 105;

state106.p = function (step, frame) {
  var token = step.token;

  if (token === 34) {
    frame.addNextState(state107);
  }

  if (token === 39) {
    frame.addNextState(state108);
  }
};

state106.id = 106;

state107.p = function (step, frame) {
  step.addMark("str_begin", frame.context, state109);
};

state107.id = 107;

state108.p = function (step, frame) {
  step.addMark("str_begin", frame.context, state113);
};

state108.id = 108;

state109.p = function (step, frame) {
  step.startCall("DSTRING_CHAR").addReturn(frame.context, state110);
  step.addMark("str_end", frame.context, state111);
};

state109.id = 109;

state110.p = function (step, frame) {
  step.startCall("DSTRING_CHAR").addReturn(frame.context, state110);
  step.addMark("str_end", frame.context, state111);
};

state110.id = 110;

state111.p = function (step, frame) {
  var token = step.token;

  if (token === 34) {
    frame.addNextState(state112);
  }
};

state111.id = 111;

state112.p = function (step, frame) {
  step.returnCall("STRING", frame);
};

state112.id = 112;

state113.p = function (step, frame) {
  step.startCall("SSTRING_CHAR").addReturn(frame.context, state114);
  step.addMark("str_end", frame.context, state115);
};

state113.id = 113;

state114.p = function (step, frame) {
  step.startCall("SSTRING_CHAR").addReturn(frame.context, state114);
  step.addMark("str_end", frame.context, state115);
};

state114.id = 114;

state115.p = function (step, frame) {
  var token = step.token;

  if (token === 39) {
    frame.addNextState(state116);
  }
};

state115.id = 115;

state116.p = function (step, frame) {
  step.returnCall("STRING", frame);
};

state116.id = 116;

state117.p = function (step, frame) {
  var token = step.token;

  if (token === 92) {
    frame.addNextState(state118);
  }

  if ((token <= 33 || token >= 35) && (token <= 91 || token >= 93)) {
    frame.addNextState(state119);
  }
};

state117.id = 117;

state118.p = function (step, frame) {

  {
    frame.addNextState(state120);
  }
};

state118.id = 118;

state119.p = function (step, frame) {
  step.returnCall("DSTRING_CHAR", frame);
};

state119.id = 119;

state120.p = function (step, frame) {
  step.returnCall("DSTRING_CHAR", frame);
};

state120.id = 120;

state121.p = function (step, frame) {
  var token = step.token;

  if (token === 92) {
    frame.addNextState(state122);
  }

  if ((token <= 38 || token >= 40) && (token <= 91 || token >= 93)) {
    frame.addNextState(state123);
  }
};

state121.id = 121;

state122.p = function (step, frame) {

  {
    frame.addNextState(state124);
  }
};

state122.id = 122;

state123.p = function (step, frame) {
  step.returnCall("SSTRING_CHAR", frame);
};

state123.id = 123;

state124.p = function (step, frame) {
  step.returnCall("SSTRING_CHAR", frame);
};

state124.id = 124;

state125.p = function (step, frame) {
  step.addMark("array", frame.context, state126);
};

state125.id = 125;

state126.p = function (step, frame) {
  var token = step.token;

  if (token === 91) {
    frame.addNextState(state127);
  }
};

state126.id = 126;

state127.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state128);
  step.startCall("ARRAY_ELEMENT").addReturn(frame.context, state130);

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state127.id = 127;

state128.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state128);
  step.startCall("ARRAY_ELEMENT").addReturn(frame.context, state130);

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state128.id = 128;

state129.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state129);

  if (token === 44) {
    frame.addNextState(state132);
  }

  if (token === 44) {
    frame.addNextState(state136);
  }

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state129.id = 129;

state130.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state129);

  if (token === 44) {
    frame.addNextState(state132);
  }

  if (token === 44) {
    frame.addNextState(state136);
  }

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state130.id = 130;

state131.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state131);
  step.startCall("ARRAY_ELEMENT").addReturn(frame.context, state133);
};

state131.id = 131;

state132.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state131);
  step.startCall("ARRAY_ELEMENT").addReturn(frame.context, state133);
};

state132.id = 132;

state133.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state134);

  if (token === 44) {
    frame.addNextState(state132);
  }

  if (token === 44) {
    frame.addNextState(state136);
  }

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state133.id = 133;

state134.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state134);

  if (token === 44) {
    frame.addNextState(state132);
  }

  if (token === 44) {
    frame.addNextState(state136);
  }

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state134.id = 134;

state135.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state135);

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state135.id = 135;

state136.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state135);

  if (token === 93) {
    frame.addNextState(state137);
  }
};

state136.id = 136;

state137.p = function (step, frame) {
  step.addMark("array_end", frame.context, state138);
};

state137.id = 137;

state138.p = function (step, frame) {
  step.returnCall("ARRAY", frame);
};

state138.id = 138;

state139.p = function (step, frame) {
  step.addMark("array_splat", frame.context, state140);
  step.startCall("EXPR^1").addReturn(frame.context, state141);
};

state139.id = 139;

state140.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state142);
  }
};

state140.id = 140;

state141.p = function (step, frame) {
  step.returnCall("ARRAY_ELEMENT", frame);
};

state141.id = 141;

state142.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state143);
  }
};

state142.id = 142;

state143.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state144);
  }
};

state143.id = 143;

state144.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state145);
  step.startCall("EXPR^1").addReturn(frame.context, state141);
};

state144.id = 144;

state145.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state145);
  step.startCall("EXPR^1").addReturn(frame.context, state141);
};

state145.id = 145;

state146.p = function (step, frame) {
  step.addMark("object", frame.context, state147);
};

state146.id = 146;

state147.p = function (step, frame) {
  var token = step.token;

  if (token === 123) {
    frame.addNextState(state148);
  }
};

state147.id = 147;

state148.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state149);
  step.startCall("OBJECT_PAIR").addReturn(frame.context, state151);

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state148.id = 148;

state149.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state149);
  step.startCall("OBJECT_PAIR").addReturn(frame.context, state151);

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state149.id = 149;

state150.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state150);

  if (token === 44) {
    frame.addNextState(state153);
  }

  if (token === 44) {
    frame.addNextState(state157);
  }

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state150.id = 150;

state151.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state150);

  if (token === 44) {
    frame.addNextState(state153);
  }

  if (token === 44) {
    frame.addNextState(state157);
  }

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state151.id = 151;

state152.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state152);
  step.startCall("OBJECT_PAIR").addReturn(frame.context, state154);
};

state152.id = 152;

state153.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state152);
  step.startCall("OBJECT_PAIR").addReturn(frame.context, state154);
};

state153.id = 153;

state154.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state155);

  if (token === 44) {
    frame.addNextState(state153);
  }

  if (token === 44) {
    frame.addNextState(state157);
  }

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state154.id = 154;

state155.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state155);

  if (token === 44) {
    frame.addNextState(state153);
  }

  if (token === 44) {
    frame.addNextState(state157);
  }

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state155.id = 155;

state156.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state156);

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state156.id = 156;

state157.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state156);

  if (token === 125) {
    frame.addNextState(state158);
  }
};

state157.id = 157;

state158.p = function (step, frame) {
  step.addMark("object_end", frame.context, state159);
};

state158.id = 158;

state159.p = function (step, frame) {
  step.returnCall("OBJECT", frame);
};

state159.id = 159;

state160.p = function (step, frame) {
  step.addMark("object_pair", frame.context, state161);
  step.addMark("object_expr", frame.context, state162);
  step.addMark("object_splat_this", frame.context, state163);
  step.addMark("object_splat", frame.context, state164);
};

state160.id = 160;

state161.p = function (step, frame) {
  step.startCall("STRING").addReturn(frame.context, state165);
};

state161.id = 161;

state162.p = function (step, frame) {
  step.startCall("EXPR^1").addReturn(frame.context, state170);
};

state162.id = 162;

state163.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state171);
  }
};

state163.id = 163;

state164.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state174);
  }
};

state164.id = 164;

state165.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state166);

  if (token === 58) {
    frame.addNextState(state167);
  }
};

state165.id = 165;

state166.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state166);

  if (token === 58) {
    frame.addNextState(state167);
  }
};

state166.id = 166;

state167.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state168);
  step.startCall("EXPR^1").addReturn(frame.context, state169);
};

state167.id = 167;

state168.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state168);
  step.startCall("EXPR^1").addReturn(frame.context, state169);
};

state168.id = 168;

state169.p = function (step, frame) {
  step.returnCall("OBJECT_PAIR", frame);
};

state169.id = 169;

state170.p = function (step, frame) {
  step.returnCall("OBJECT_PAIR", frame);
};

state170.id = 170;

state171.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state172);
  }
};

state171.id = 171;

state172.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state173);
  }
};

state172.id = 172;

state173.p = function (step, frame) {
  step.returnCall("OBJECT_PAIR", frame);
};

state173.id = 173;

state174.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state175);
  }
};

state174.id = 174;

state175.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state176);
  }
};

state175.id = 175;

state176.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state177);
  step.startCall("EXPR^1").addReturn(frame.context, state178);
};

state176.id = 176;

state177.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state177);
  step.startCall("EXPR^1").addReturn(frame.context, state178);
};

state177.id = 177;

state178.p = function (step, frame) {
  step.returnCall("OBJECT_PAIR", frame);
};

state178.id = 178;

state179.p = function (step, frame) {
  step.addMark("pair", frame.context, state180);
  step.startCall("EXPR^2").addReturn(frame.context, state181);
};

state179.id = 179;

state180.p = function (step, frame) {
  step.startCall("EXPR^2").addReturn(frame.context, state182);
};

state180.id = 180;

state181.p = function (step, frame) {
  step.returnCall("EXPR^1", frame);
};

state181.id = 181;

state182.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state183);

  if (token === 61) {
    frame.addNextState(state184);
  }
};

state182.id = 182;

state183.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state183);

  if (token === 61) {
    frame.addNextState(state184);
  }
};

state183.id = 183;

state184.p = function (step, frame) {
  var token = step.token;

  if (token === 62) {
    frame.addNextState(state185);
  }
};

state184.id = 184;

state185.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state186);
  step.startCall("EXPR^2").addReturn(frame.context, state187);
};

state185.id = 185;

state186.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state186);
  step.startCall("EXPR^2").addReturn(frame.context, state187);
};

state186.id = 186;

state187.p = function (step, frame) {
  step.returnCall("EXPR^1", frame);
};

state187.id = 187;

state188.p = function (step, frame) {
  step.addMark("or", frame.context, state189);
  step.startCall("EXPR^3").addReturn(frame.context, state190);
};

state188.id = 188;

state189.p = function (step, frame) {
  step.startCall("EXPR^2").addReturn(frame.context, state191);
};

state189.id = 189;

state190.p = function (step, frame) {
  step.returnCall("EXPR^2", frame);
};

state190.id = 190;

state191.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state192);

  if (token === 124) {
    frame.addNextState(state193);
  }
};

state191.id = 191;

state192.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state192);

  if (token === 124) {
    frame.addNextState(state193);
  }
};

state192.id = 192;

state193.p = function (step, frame) {
  var token = step.token;

  if (token === 124) {
    frame.addNextState(state194);
  }
};

state193.id = 193;

state194.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state195);
  step.startCall("EXPR^3").addReturn(frame.context, state196);
};

state194.id = 194;

state195.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state195);
  step.startCall("EXPR^3").addReturn(frame.context, state196);
};

state195.id = 195;

state196.p = function (step, frame) {
  step.returnCall("EXPR^2", frame);
};

state196.id = 196;

state197.p = function (step, frame) {
  step.addMark("and", frame.context, state198);
  step.startCall("EXPR^4").addReturn(frame.context, state199);
};

state197.id = 197;

state198.p = function (step, frame) {
  step.startCall("EXPR^3").addReturn(frame.context, state200);
};

state198.id = 198;

state199.p = function (step, frame) {
  step.returnCall("EXPR^3", frame);
};

state199.id = 199;

state200.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state201);

  if (token === 38) {
    frame.addNextState(state202);
  }
};

state200.id = 200;

state201.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state201);

  if (token === 38) {
    frame.addNextState(state202);
  }
};

state201.id = 201;

state202.p = function (step, frame) {
  var token = step.token;

  if (token === 38) {
    frame.addNextState(state203);
  }
};

state202.id = 202;

state203.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state204);
  step.startCall("EXPR^4").addReturn(frame.context, state205);
};

state203.id = 203;

state204.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state204);
  step.startCall("EXPR^4").addReturn(frame.context, state205);
};

state204.id = 204;

state205.p = function (step, frame) {
  step.returnCall("EXPR^3", frame);
};

state205.id = 205;

state206.p = function (step, frame) {
  step.addMark("comp", frame.context, state207);
  step.addMark("asc", frame.context, state208);
  step.addMark("desc", frame.context, state209);
  step.startCall("EXPR^5").addReturn(frame.context, state210);
};

state206.id = 206;

state207.p = function (step, frame) {
  step.startCall("EXPR^5").addReturn(frame.context, state211);
};

state207.id = 207;

state208.p = function (step, frame) {
  step.startCall("EXPR^4").addReturn(frame.context, state218);
};

state208.id = 208;

state209.p = function (step, frame) {
  step.startCall("EXPR^4").addReturn(frame.context, state223);
};

state209.id = 209;

state210.p = function (step, frame) {
  step.returnCall("EXPR^4", frame);
};

state210.id = 210;

state211.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state212);
  step.addMark("op", frame.context, state213);
};

state211.id = 211;

state212.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state212);
  step.addMark("op", frame.context, state213);
};

state212.id = 212;

state213.p = function (step, frame) {
  step.startCall("COMP_OP").addReturn(frame.context, state214);
};

state213.id = 213;

state214.p = function (step, frame) {
  step.addMark("end", frame.context, state215);
};

state214.id = 214;

state215.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state216);
  step.startCall("EXPR^5").addReturn(frame.context, state217);
};

state215.id = 215;

state216.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state216);
  step.startCall("EXPR^5").addReturn(frame.context, state217);
};

state216.id = 216;

state217.p = function (step, frame) {
  step.returnCall("EXPR^4", frame);
};

state217.id = 217;

state218.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state219);

  if (token === 97) {
    frame.addNextState(state220);
  }
};

state218.id = 218;

state219.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state219);

  if (token === 97) {
    frame.addNextState(state220);
  }
};

state219.id = 219;

state220.p = function (step, frame) {
  var token = step.token;

  if (token === 115) {
    frame.addNextState(state221);
  }
};

state220.id = 220;

state221.p = function (step, frame) {
  var token = step.token;

  if (token === 99) {
    frame.addNextState(state222);
  }
};

state221.id = 221;

state222.p = function (step, frame) {
  step.returnCall("EXPR^4", frame);
};

state222.id = 222;

state223.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state224);

  if (token === 100) {
    frame.addNextState(state225);
  }
};

state223.id = 223;

state224.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state224);

  if (token === 100) {
    frame.addNextState(state225);
  }
};

state224.id = 224;

state225.p = function (step, frame) {
  var token = step.token;

  if (token === 101) {
    frame.addNextState(state226);
  }
};

state225.id = 225;

state226.p = function (step, frame) {
  var token = step.token;

  if (token === 115) {
    frame.addNextState(state227);
  }
};

state226.id = 226;

state227.p = function (step, frame) {
  var token = step.token;

  if (token === 99) {
    frame.addNextState(state228);
  }
};

state227.id = 227;

state228.p = function (step, frame) {
  step.returnCall("EXPR^4", frame);
};

state228.id = 228;

state229.p = function (step, frame) {
  step.addMark("inc_range", frame.context, state230);
  step.addMark("exc_range", frame.context, state231);
  step.startCall("EXPR^6").addReturn(frame.context, state232);
};

state229.id = 229;

state230.p = function (step, frame) {
  step.startCall("EXPR^6").addReturn(frame.context, state233);
};

state230.id = 230;

state231.p = function (step, frame) {
  step.startCall("EXPR^6").addReturn(frame.context, state239);
};

state231.id = 231;

state232.p = function (step, frame) {
  step.returnCall("EXPR^5", frame);
};

state232.id = 232;

state233.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state234);

  if (token === 46) {
    frame.addNextState(state235);
  }
};

state233.id = 233;

state234.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state234);

  if (token === 46) {
    frame.addNextState(state235);
  }
};

state234.id = 234;

state235.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state236);
  }
};

state235.id = 235;

state236.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state237);
  step.startCall("EXPR^6").addReturn(frame.context, state238);
};

state236.id = 236;

state237.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state237);
  step.startCall("EXPR^6").addReturn(frame.context, state238);
};

state237.id = 237;

state238.p = function (step, frame) {
  step.returnCall("EXPR^5", frame);
};

state238.id = 238;

state239.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state240);

  if (token === 46) {
    frame.addNextState(state241);
  }
};

state239.id = 239;

state240.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state240);

  if (token === 46) {
    frame.addNextState(state241);
  }
};

state240.id = 240;

state241.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state242);
  }
};

state241.id = 241;

state242.p = function (step, frame) {
  var token = step.token;

  if (token === 46) {
    frame.addNextState(state243);
  }
};

state242.id = 242;

state243.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state244);
  step.startCall("EXPR^6").addReturn(frame.context, state245);
};

state243.id = 243;

state244.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state244);
  step.startCall("EXPR^6").addReturn(frame.context, state245);
};

state244.id = 244;

state245.p = function (step, frame) {
  step.returnCall("EXPR^5", frame);
};

state245.id = 245;

state246.p = function (step, frame) {
  step.addMark("add", frame.context, state247);
  step.addMark("sub", frame.context, state248);
  step.startCall("EXPR^7").addReturn(frame.context, state249);
};

state246.id = 246;

state247.p = function (step, frame) {
  step.startCall("EXPR^6").addReturn(frame.context, state250);
};

state247.id = 247;

state248.p = function (step, frame) {
  step.startCall("EXPR^6").addReturn(frame.context, state255);
};

state248.id = 248;

state249.p = function (step, frame) {
  step.returnCall("EXPR^6", frame);
};

state249.id = 249;

state250.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state251);

  if (token === 43) {
    frame.addNextState(state252);
  }
};

state250.id = 250;

state251.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state251);

  if (token === 43) {
    frame.addNextState(state252);
  }
};

state251.id = 251;

state252.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state253);
  step.startCall("EXPR^7").addReturn(frame.context, state254);
};

state252.id = 252;

state253.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state253);
  step.startCall("EXPR^7").addReturn(frame.context, state254);
};

state253.id = 253;

state254.p = function (step, frame) {
  step.returnCall("EXPR^6", frame);
};

state254.id = 254;

state255.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state256);

  if (token === 45) {
    frame.addNextState(state257);
  }
};

state255.id = 255;

state256.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state256);

  if (token === 45) {
    frame.addNextState(state257);
  }
};

state256.id = 256;

state257.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state258);
  step.startCall("EXPR^7").addReturn(frame.context, state259);
};

state257.id = 257;

state258.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state258);
  step.startCall("EXPR^7").addReturn(frame.context, state259);
};

state258.id = 258;

state259.p = function (step, frame) {
  step.returnCall("EXPR^6", frame);
};

state259.id = 259;

state260.p = function (step, frame) {
  step.addMark("mul", frame.context, state261);
  step.addMark("div", frame.context, state262);
  step.addMark("mod", frame.context, state263);
  step.startCall("EXPR^9").addReturn(frame.context, state264);
};

state260.id = 260;

state261.p = function (step, frame) {
  step.startCall("EXPR^7").addReturn(frame.context, state265);
};

state261.id = 261;

state262.p = function (step, frame) {
  step.startCall("EXPR^7").addReturn(frame.context, state270);
};

state262.id = 262;

state263.p = function (step, frame) {
  step.startCall("EXPR^7").addReturn(frame.context, state275);
};

state263.id = 263;

state264.p = function (step, frame) {
  step.returnCall("EXPR^7", frame);
};

state264.id = 264;

state265.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state266);
  step.startCall("STAR").addReturn(frame.context, state267);
};

state265.id = 265;

state266.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state266);
  step.startCall("STAR").addReturn(frame.context, state267);
};

state266.id = 266;

state267.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state268);
  step.startCall("EXPR^9").addReturn(frame.context, state269);
};

state267.id = 267;

state268.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state268);
  step.startCall("EXPR^9").addReturn(frame.context, state269);
};

state268.id = 268;

state269.p = function (step, frame) {
  step.returnCall("EXPR^7", frame);
};

state269.id = 269;

state270.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state271);

  if (token === 47) {
    frame.addNextState(state272);
  }
};

state270.id = 270;

state271.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state271);

  if (token === 47) {
    frame.addNextState(state272);
  }
};

state271.id = 271;

state272.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state273);
  step.startCall("EXPR^9").addReturn(frame.context, state274);
};

state272.id = 272;

state273.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state273);
  step.startCall("EXPR^9").addReturn(frame.context, state274);
};

state273.id = 273;

state274.p = function (step, frame) {
  step.returnCall("EXPR^7", frame);
};

state274.id = 274;

state275.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state276);

  if (token === 37) {
    frame.addNextState(state277);
  }
};

state275.id = 275;

state276.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state276);

  if (token === 37) {
    frame.addNextState(state277);
  }
};

state276.id = 276;

state277.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state278);
  step.startCall("EXPR^9").addReturn(frame.context, state279);
};

state277.id = 277;

state278.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state278);
  step.startCall("EXPR^9").addReturn(frame.context, state279);
};

state278.id = 278;

state279.p = function (step, frame) {
  step.returnCall("EXPR^7", frame);
};

state279.id = 279;

state280.p = function (step, frame) {
  step.addMark("pow", frame.context, state281);
  step.startCall("EXPR^11").addReturn(frame.context, state282);
};

state280.id = 280;

state281.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state283);
};

state281.id = 281;

state282.p = function (step, frame) {
  step.returnCall("EXPR^9", frame);
};

state282.id = 282;

state283.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state284);

  if (token === 42) {
    frame.addNextState(state285);
  }
};

state283.id = 283;

state284.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state284);

  if (token === 42) {
    frame.addNextState(state285);
  }
};

state284.id = 284;

state285.p = function (step, frame) {
  var token = step.token;

  if (token === 42) {
    frame.addNextState(state286);
  }
};

state285.id = 285;

state286.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state287);
  step.startCall("EXPR^9").addReturn(frame.context, state288);
};

state286.id = 286;

state287.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state287);
  step.startCall("EXPR^9").addReturn(frame.context, state288);
};

state287.id = 287;

state288.p = function (step, frame) {
  step.returnCall("EXPR^9", frame);
};

state288.id = 288;

state289.p = function (step, frame) {
  var token = step.token;
  step.startCall("NUMBER").addReturn(frame.context, state290);
  step.startCall("STRING").addReturn(frame.context, state291);
  step.startCall("ARRAY").addReturn(frame.context, state292);
  step.startCall("OBJECT").addReturn(frame.context, state293);
  step.addMark("star", frame.context, state294);
  step.addMark("this", frame.context, state295);
  step.startCall("PARENT").addReturn(frame.context, state296);
  step.addMark("paren", frame.context, state297);

  if (token === 36) {
    frame.addNextState(state298);
  }

  step.addMark("ident", frame.context, state299);
  step.startCall("FUNC_CALL").addReturn(frame.context, state300);
  step.addMark("neg", frame.context, state301);
  step.addMark("pos", frame.context, state302);
  step.addMark("not", frame.context, state303);

  if (token === 105) {
    frame.addNextState(state304);
  }

  step.addMark("deref", frame.context, state305);
  step.addMark("attr_cond", frame.context, state306);
  step.addMark("attr_ident", frame.context, state307);
  step.addMark("pipecall", frame.context, state308);
  step.addMark("project", frame.context, state309);
  step.addMark("filter", frame.context, state310);
  step.addMark("arr_expr", frame.context, state311);
};

state289.id = 289;

state290.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state290.id = 290;

state291.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state291.id = 291;

state292.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state292.id = 292;

state293.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state293.id = 293;

state294.p = function (step, frame) {
  step.startCall("STAR").addReturn(frame.context, state312);
};

state294.id = 294;

state295.p = function (step, frame) {
  var token = step.token;

  if (token === 64) {
    frame.addNextState(state313);
  }
};

state295.id = 295;

state296.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state296.id = 296;

state297.p = function (step, frame) {
  var token = step.token;

  if (token === 40) {
    frame.addNextState(state314);
  }
};

state297.id = 297;

state298.p = function (step, frame) {
  step.addMark("param", frame.context, state319);
};

state298.id = 298;

state299.p = function (step, frame) {
  step.startCall("IDENT").addReturn(frame.context, state322);
};

state299.id = 299;

state300.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state300.id = 300;

state301.p = function (step, frame) {
  var token = step.token;

  if (token === 45) {
    frame.addNextState(state324);
  }
};

state301.id = 301;

state302.p = function (step, frame) {
  var token = step.token;

  if (token === 43) {
    frame.addNextState(state327);
  }
};

state302.id = 302;

state303.p = function (step, frame) {
  var token = step.token;

  if (token === 33) {
    frame.addNextState(state330);
  }
};

state303.id = 303;

state304.p = function (step, frame) {
  var token = step.token;

  if (token === 115) {
    frame.addNextState(state333);
  }
};

state304.id = 304;

state305.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state336);
};

state305.id = 305;

state306.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state343);
};

state306.id = 306;

state307.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state352);
};

state307.id = 307;

state308.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state358);
};

state308.id = 308;

state309.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state362);
};

state309.id = 309;

state310.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state366);
};

state310.id = 310;

state311.p = function (step, frame) {
  step.startCall("EXPR^11").addReturn(frame.context, state374);
};

state311.id = 311;

state312.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state312.id = 312;

state313.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state313.id = 313;

state314.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state315);
  step.startCall("EXPR^1").addReturn(frame.context, state316);
};

state314.id = 314;

state315.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state315);
  step.startCall("EXPR^1").addReturn(frame.context, state316);
};

state315.id = 315;

state316.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state317);

  if (token === 41) {
    frame.addNextState(state318);
  }
};

state316.id = 316;

state317.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state317);

  if (token === 41) {
    frame.addNextState(state318);
  }
};

state317.id = 317;

state318.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state318.id = 318;

state319.p = function (step, frame) {
  step.startCall("IDENT").addReturn(frame.context, state320);
};

state319.id = 319;

state320.p = function (step, frame) {
  step.addMark("param_end", frame.context, state321);
};

state320.id = 320;

state321.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state321.id = 321;

state322.p = function (step, frame) {
  step.addMark("ident_end", frame.context, state323);
};

state322.id = 322;

state323.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state323.id = 323;

state324.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state325);
  step.startCall("EXPR^9").addReturn(frame.context, state326);
};

state324.id = 324;

state325.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state325);
  step.startCall("EXPR^9").addReturn(frame.context, state326);
};

state325.id = 325;

state326.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state326.id = 326;

state327.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state328);
  step.startCall("EXPR^11").addReturn(frame.context, state329);
};

state327.id = 327;

state328.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state328);
  step.startCall("EXPR^11").addReturn(frame.context, state329);
};

state328.id = 328;

state329.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state329.id = 329;

state330.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state331);
  step.startCall("EXPR^11").addReturn(frame.context, state332);
};

state330.id = 330;

state331.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state331);
  step.startCall("EXPR^11").addReturn(frame.context, state332);
};

state331.id = 331;

state332.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state332.id = 332;

state333.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state334);
  step.startCall("EXPR^11").addReturn(frame.context, state335);
};

state333.id = 333;

state334.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state334);
  step.startCall("EXPR^11").addReturn(frame.context, state335);
};

state334.id = 334;

state335.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state335.id = 335;

state336.p = function (step, frame) {
  var token = step.token;

  if (token === 45) {
    frame.addNextState(state337);
  }
};

state336.id = 336;

state337.p = function (step, frame) {
  var token = step.token;

  if (token === 62) {
    frame.addNextState(state338);
  }
};

state337.id = 337;

state338.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state339);
  step.addMark("deref_field", frame.context, state340);
  step.returnCall("EXPR^11", frame);
};

state338.id = 338;

state339.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state339);
  step.addMark("deref_field", frame.context, state340);
};

state339.id = 339;

state340.p = function (step, frame) {
  step.startCall("IDENT").addReturn(frame.context, state341);
};

state340.id = 340;

state341.p = function (step, frame) {
  step.addMark("end", frame.context, state342);
};

state341.id = 341;

state342.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state342.id = 342;

state343.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state344);

  if (token === 46) {
    frame.addNextState(state345);
  }
};

state343.id = 343;

state344.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state344);

  if (token === 46) {
    frame.addNextState(state345);
  }
};

state344.id = 344;

state345.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state346);

  if (token === 91) {
    frame.addNextState(state347);
  }
};

state345.id = 345;

state346.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state346);

  if (token === 91) {
    frame.addNextState(state347);
  }
};

state346.id = 346;

state347.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state348);
  step.startCall("EXPR^1").addReturn(frame.context, state349);
};

state347.id = 347;

state348.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state348);
  step.startCall("EXPR^1").addReturn(frame.context, state349);
};

state348.id = 348;

state349.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state350);

  if (token === 93) {
    frame.addNextState(state351);
  }
};

state349.id = 349;

state350.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state350);

  if (token === 93) {
    frame.addNextState(state351);
  }
};

state350.id = 350;

state351.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state351.id = 351;

state352.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state353);

  if (token === 46) {
    frame.addNextState(state354);
  }
};

state352.id = 352;

state353.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state353);

  if (token === 46) {
    frame.addNextState(state354);
  }
};

state353.id = 353;

state354.p = function (step, frame) {
  step.addMark("ident", frame.context, state355);
};

state354.id = 354;

state355.p = function (step, frame) {
  step.startCall("IDENT").addReturn(frame.context, state356);
};

state355.id = 355;

state356.p = function (step, frame) {
  step.addMark("ident_end", frame.context, state357);
};

state356.id = 356;

state357.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state357.id = 357;

state358.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state359);
  step.startCall("PIPE").addReturn(frame.context, state360);
};

state358.id = 358;

state359.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state359);
  step.startCall("PIPE").addReturn(frame.context, state360);
};

state359.id = 359;

state360.p = function (step, frame) {
  step.startCall("FUNC_CALL").addReturn(frame.context, state361);
};

state360.id = 360;

state361.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state361.id = 361;

state362.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state363);
  step.startCall("PIPE").addReturn(frame.context, state364);
  step.startCall("OBJECT").addReturn(frame.context, state365);
};

state362.id = 362;

state363.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state363);
  step.startCall("PIPE").addReturn(frame.context, state364);
  step.startCall("OBJECT").addReturn(frame.context, state365);
};

state363.id = 363;

state364.p = function (step, frame) {
  step.startCall("OBJECT").addReturn(frame.context, state365);
};

state364.id = 364;

state365.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state365.id = 365;

state366.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state367);
  step.startCall("PIPE").addReturn(frame.context, state368);

  if (token === 91) {
    frame.addNextState(state369);
  }
};

state366.id = 366;

state367.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state367);
  step.startCall("PIPE").addReturn(frame.context, state368);

  if (token === 91) {
    frame.addNextState(state369);
  }
};

state367.id = 367;

state368.p = function (step, frame) {
  var token = step.token;

  if (token === 91) {
    frame.addNextState(state369);
  }
};

state368.id = 368;

state369.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state370);
  step.startCall("EXPR^1").addReturn(frame.context, state371);
};

state369.id = 369;

state370.p = function (step, frame) {
  step.startCall("IGN").addReturn(frame.context, state370);
  step.startCall("EXPR^1").addReturn(frame.context, state371);
};

state370.id = 370;

state371.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state372);

  if (token === 93) {
    frame.addNextState(state373);
  }
};

state371.id = 371;

state372.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state372);

  if (token === 93) {
    frame.addNextState(state373);
  }
};

state372.id = 372;

state373.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state373.id = 373;

state374.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state375);
  step.startCall("PIPE").addReturn(frame.context, state376);

  if (token === 91) {
    frame.addNextState(state377);
  }
};

state374.id = 374;

state375.p = function (step, frame) {
  var token = step.token;
  step.startCall("IGN").addReturn(frame.context, state375);
  step.startCall("PIPE").addReturn(frame.context, state376);

  if (token === 91) {
    frame.addNextState(state377);
  }
};

state375.id = 375;

state376.p = function (step, frame) {
  var token = step.token;

  if (token === 91) {
    frame.addNextState(state377);
  }
};

state376.id = 376;

state377.p = function (step, frame) {
  var token = step.token;

  if (token === 93) {
    frame.addNextState(state378);
  }
};

state377.id = 377;

state378.p = function (step, frame) {
  step.returnCall("EXPR^11", frame);
};

state378.id = 378;
var initialContext = /*#__PURE__*/new Context(null, null);
var initialFrame = /*#__PURE__*/new Frame(initialContext);
initialFrame.addNextState(state0);
var initialFrames = [initialFrame];
var ruleInitialStates = {};
ruleInitialStates["main"] = [state2];
ruleInitialStates["SPACE"] = [state6];
ruleInitialStates["COMMENT"] = [state15];
ruleInitialStates["COMMENT_END"] = [state21];
ruleInitialStates["IGN"] = [state23];
ruleInitialStates["PIPE"] = [state26];
ruleInitialStates["PARENT"] = [state29];
ruleInitialStates["IDENT_FST"] = [state36];
ruleInitialStates["IDENT_REST"] = [state40];
ruleInitialStates["IDENT"] = [state43];
ruleInitialStates["STAR"] = [state46];
ruleInitialStates["COMP_OP"] = [state48];
ruleInitialStates["FUNC_CALL"] = [state66];
ruleInitialStates["FUNC_ARGS"] = [state76];
ruleInitialStates["NUMBER"] = [state83];
ruleInitialStates["DIGIT"] = [state101];
ruleInitialStates["SIGN"] = [state103];
ruleInitialStates["STRING"] = [state106];
ruleInitialStates["DSTRING_CHAR"] = [state117];
ruleInitialStates["SSTRING_CHAR"] = [state121];
ruleInitialStates["ARRAY"] = [state125];
ruleInitialStates["ARRAY_ELEMENT"] = [state139];
ruleInitialStates["OBJECT"] = [state146];
ruleInitialStates["OBJECT_PAIR"] = [state160];
ruleInitialStates["EXPR^1"] = [state179];
ruleInitialStates["EXPR^2"] = [state188];
ruleInitialStates["EXPR^3"] = [state197];
ruleInitialStates["EXPR^4"] = [state206];
ruleInitialStates["EXPR^5"] = [state229];
ruleInitialStates["EXPR^6"] = [state246];
ruleInitialStates["EXPR^7"] = [state260];
ruleInitialStates["EXPR^9"] = [state280];
ruleInitialStates["EXPR^11"] = [state289];

function isValueNode(node) {
  return node.type === 'Value';
}

function isNumber(node) {
  return isValueNode(node) && typeof node.value === 'number';
}

function isString(node) {
  return isValueNode(node) && typeof node.value === 'string';
}

var ESCAPE_SEQUENCE = {
  "'": "'",
  '"': '"',
  '\\': '\\',
  '/': '/',
  b: '\b',
  f: '\f',
  n: '\n',
  r: '\r',
  t: '\t'
};

function expandHex(str) {
  var charCode = parseInt(str, 16);
  return String.fromCharCode(charCode);
}

function expandEscapeSequence(str) {
  var re = /\\(['"/\\bfnrt]|u([A-Fa-f0-9]{4})|u\{([A-Fa-f0-9]+)\})/g;
  return str.replace(re, (_, esc, u1, u2) => {
    if (u1) return expandHex(u1);
    if (u2) return expandHex(u2);
    return ESCAPE_SEQUENCE[esc];
  });
}

class GroqQueryError extends Error {}

var BUILDER = {
  paren(p) {
    var inner = p.process();
    return {
      type: 'Parenthesis',
      base: inner
    };
  },

  filter(p) {
    var base = p.process();
    var query = p.process();

    if (isNumber(query)) {
      return {
        type: 'Element',
        base,
        index: query
      };
    }

    if (isString(query)) {
      return {
        type: 'Attribute',
        base,
        name: query.value
      };
    }

    if (query.type === 'Range') {
      return {
        type: 'Slice',
        base,
        left: query.left,
        right: query.right,
        isExclusive: query.isExclusive
      };
    }

    return {
      type: 'Filter',
      base,
      query
    };
  },

  project(p) {
    var base = p.process();
    var query = p.process();
    return {
      type: 'Projection',
      base,
      query
    };
  },

  star() {
    return {
      type: 'Star'
    };
  },

  this() {
    return {
      type: 'This'
    };
  },

  parent() {
    return {
      type: 'Parent',
      n: 1
    };
  },

  dblparent(p) {
    var next = p.process();
    return {
      type: 'Parent',
      n: next.n + 1
    };
  },

  ident(p) {
    var name = p.processStringEnd();
    if (name === 'null') return {
      type: 'Value',
      value: null
    };
    if (name === 'true') return {
      type: 'Value',
      value: true
    };
    if (name === 'false') return {
      type: 'Value',
      value: false
    };
    return {
      type: 'Identifier',
      name: name
    };
  },

  attr_ident(p) {
    var base = p.process();
    var name = p.processString();
    return {
      type: 'Attribute',
      base,
      name
    };
  },

  arr_expr(p) {
    var base = p.process();
    return {
      type: 'Mapper',
      base
    };
  },

  inc_range(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'Range',
      left,
      right,
      isExclusive: false
    };
  },

  exc_range(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'Range',
      left,
      right,
      isExclusive: true
    };
  },

  neg(p) {
    var base = p.process();

    if (base.type === 'Value' && typeof base.value === 'number') {
      return {
        type: 'Value',
        value: -base.value
      };
    }

    return {
      type: 'Neg',
      base
    };
  },

  pos(p) {
    var base = p.process();

    if (isNumber(base)) {
      return {
        type: 'Value',
        value: +base.value
      };
    }

    return {
      type: 'Pos',
      base
    };
  },

  add(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'OpCall',
      op: '+',
      left,
      right
    };
  },

  sub(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'OpCall',
      op: '-',
      left,
      right
    };
  },

  mul(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'OpCall',
      op: '*',
      left,
      right
    };
  },

  div(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'OpCall',
      op: '/',
      left,
      right
    };
  },

  mod(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'OpCall',
      op: '%',
      left,
      right
    };
  },

  pow(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'OpCall',
      op: '**',
      left,
      right
    };
  },

  deref(p) {
    var base = p.process();
    var nextMark = p.getMark();
    var result = {
      type: 'Deref',
      base
    };

    if (nextMark && nextMark.name === 'deref_field') {
      var name = p.processString();
      return {
        type: 'Attribute',
        base: result,
        name
      };
    }

    return result;
  },

  comp(p) {
    var left = p.process();
    var op = p.processString();
    var right = p.process();
    return {
      type: 'OpCall',
      op: op,
      left: left,
      right: right
    };
  },

  str_begin(p) {
    var value = expandEscapeSequence(p.processStringEnd());
    return {
      type: 'Value',
      value: value
    };
  },

  integer(p) {
    var strValue = p.processStringEnd();
    return {
      type: 'Value',
      value: Number(strValue)
    };
  },

  float(p) {
    var strValue = p.processStringEnd();
    return {
      type: 'Value',
      value: Number(strValue)
    };
  },

  sci(p) {
    var strValue = p.processStringEnd();
    return {
      type: 'Value',
      value: Number(strValue)
    };
  },

  pair(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'Pair',
      left,
      right
    };
  },

  object(p) {
    var attributes = [];

    while (p.getMark().name !== 'object_end') {
      attributes.push(p.process());
    }

    p.shift();
    return {
      type: 'Object',
      attributes
    };
  },

  object_expr(p) {
    var value = p.process();

    if (value.type === 'Pair') {
      return {
        type: 'ObjectConditionalSplat',
        condition: value.left,
        value: value.right
      };
    }

    return {
      type: 'ObjectAttribute',
      key: {
        type: 'Value',
        value: extractPropertyKey(value)
      },
      value: value
    };
  },

  object_pair(p) {
    var key = p.process();
    var value = p.process();
    return {
      type: 'ObjectAttribute',
      key: key,
      value: value
    };
  },

  object_splat(p) {
    var value = p.process();
    return {
      type: 'ObjectSplat',
      value
    };
  },

  object_splat_this() {
    return {
      type: 'ObjectSplat',
      value: {
        type: 'This'
      }
    };
  },

  array(p) {
    var elements = [];

    while (p.getMark().name !== 'array_end') {
      var isSplat = false;

      if (p.getMark().name === 'array_splat') {
        isSplat = true;
        p.shift();
      }

      var value = p.process();
      elements.push({
        type: 'ArrayElement',
        value,
        isSplat
      });
    }

    p.shift();
    return {
      type: 'Array',
      elements: elements
    };
  },

  func_call(p) {
    var name = p.processStringEnd();
    var args = [];

    while (p.getMark().name !== 'func_args_end') {
      args.push(p.process());
    }

    p.shift();
    var func = functions[name];

    if (!func) {
      throw new GroqQueryError("Undefined function: " + name);
    }

    validateArity(name, func.arity, args.length);
    return {
      type: 'FuncCall',
      func,
      name,
      args
    };
  },

  pipecall(p) {
    var base = p.process();
    var name = p.processString();
    var args = [];

    while (true) {
      var markName = p.getMark().name;
      if (markName === 'func_args_end') break;

      if (name === 'order') {
        if (markName === 'asc') {
          p.shift();
          args.push({
            type: 'Asc',
            base: p.process()
          });
          continue;
        } else if (markName === 'desc') {
          p.shift();
          args.push({
            type: 'Desc',
            base: p.process()
          });
          continue;
        }
      }

      args.push(p.process());
    }

    p.shift();
    var func = pipeFunctions[name];

    if (!func) {
      throw new GroqQueryError("Undefined pipe function: " + name);
    }

    validateArity(name, func.arity, args.length);
    return {
      type: 'PipeFuncCall',
      func,
      base,
      name: func.name,
      args
    };
  },

  and(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'And',
      left,
      right
    };
  },

  or(p) {
    var left = p.process();
    var right = p.process();
    return {
      type: 'Or',
      left,
      right
    };
  },

  not(p) {
    var base = p.process();
    return {
      type: 'Not',
      base
    };
  },

  asc(p) {
    throw new GroqQueryError('unexpected asc');
  },

  desc(p) {
    throw new GroqQueryError('unexpected desc');
  },

  param(p) {
    var name = p.processStringEnd();
    return {
      type: 'Parameter',
      name
    };
  }

};
var NESTED_PROPERTY_TYPES = ['Deref', 'Projection', 'Mapper', 'Filter', 'Element', 'Slice'];

function isNestedPropertyType(node) {
  return NESTED_PROPERTY_TYPES.includes(node.type);
}

function extractPropertyKey(node) {
  if (node.type === 'Identifier') {
    return node.name;
  }

  if (isNestedPropertyType(node)) {
    return extractPropertyKey(node.base);
  }

  throw new GroqQueryError('Cannot determine property key for type: ' + node.type);
}

function validateArity(name, arity, count) {
  if (typeof arity === 'number') {
    if (count !== arity) {
      throw new GroqQueryError("Incorrect number of arguments to function " + name + "(). Expected " + arity + ", got " + count + ".");
    }
  } else if (arity) {
    if (!arity(count)) {
      throw new GroqQueryError("Incorrect number of arguments to function " + name + "().");
    }
  }
}

class GroqSyntaxError extends Error {
  constructor(position) {
    super("Syntax error in GROQ query at position " + position);
    this.name = 'GroqSyntaxError';
    this.position = position;
  }

}
/**
 * Parses a GROQ query and returns a tree structure.
 */


function parse$1(input) {
  var result = parse(input);
  if (result.type === 'error') throw new GroqSyntaxError(result.position);
  var processor = new MarkProcessor(BUILDER, input, result.marks);
  return processor.process();
}

var isEqual = equality;

function equality(_x, _x2) {
  return _equality.apply(this, arguments);
}

function _equality() {
  _equality = _asyncToGenerator(function* (a, b) {
    var aType = a.getType();
    var bType = b.getType();
    if (aType !== bType) return false;

    if (aType === 'number' || aType === 'string' || aType === 'boolean' || aType === 'null') {
      return (yield a.get()) === (yield b.get());
    }

    return false;
  });
  return _equality.apply(this, arguments);
}

function matchText(tokens, patterns) {
  if (tokens.length === 0 || patterns.length === 0) return false;
  return patterns.every(pattern => pattern(tokens));
}
function matchTokenize(text) {
  return text.match(/[A-Za-z0-9]+/g);
}
function matchAnalyzePattern(text) {
  var terms = text.match(/[A-Za-z0-9*]+/g) || [];
  var termsRe = terms.map(term => new RegExp('^' + term.replace(/\*/g, '.*') + '$', 'i'));
  return tokens => termsRe.every(re => tokens.some(token => re.test(token)));
}
function gatherText(_x, _x2) {
  return _gatherText.apply(this, arguments);
}

function _gatherText() {
  _gatherText = _asyncToGenerator(function* (value, cb) {
    switch (value.getType()) {
      case 'string':
        {
          cb(yield value.get());
          return true;
        }

      case 'array':
        {
          var success = true;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;

          var _iteratorError;

          try {
            for (var _iterator = _asyncIterator(value), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
              var part = _value;

              if (part.getType() === 'string') {
                cb(yield part.get());
              } else {
                success = false;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                yield _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return success;
        }

      default:
        {
          return false;
        }
    }
  });
  return _gatherText.apply(this, arguments);
}

var operators = {
  '==': /*#__PURE__*/function () {
    var _eq = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield execute(left, scope);
      var b = yield execute(right, scope);
      var result = yield isEqual(a, b);
      return result ? TRUE_VALUE : FALSE_VALUE;
    });

    function eq(_x, _x2, _x3, _x4) {
      return _eq.apply(this, arguments);
    }

    return eq;
  }(),
  '!=': /*#__PURE__*/function () {
    var _neq = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield execute(left, scope);
      var b = yield execute(right, scope);
      var result = yield isEqual(a, b);
      return result ? FALSE_VALUE : TRUE_VALUE;
    });

    function neq(_x5, _x6, _x7, _x8) {
      return _neq.apply(this, arguments);
    }

    return neq;
  }(),
  '>': /*#__PURE__*/function () {
    var _gt = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield (yield execute(left, scope)).get();
      var b = yield (yield execute(right, scope)).get();
      var result = partialCompare(a, b);

      if (result === null) {
        return NULL_VALUE;
      } else {
        return result > 0 ? TRUE_VALUE : FALSE_VALUE;
      }
    });

    function gt(_x9, _x10, _x11, _x12) {
      return _gt.apply(this, arguments);
    }

    return gt;
  }(),
  '>=': /*#__PURE__*/function () {
    var _gte = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield (yield execute(left, scope)).get();
      var b = yield (yield execute(right, scope)).get();
      var result = partialCompare(a, b);

      if (result === null) {
        return NULL_VALUE;
      } else {
        return result >= 0 ? TRUE_VALUE : FALSE_VALUE;
      }
    });

    function gte(_x13, _x14, _x15, _x16) {
      return _gte.apply(this, arguments);
    }

    return gte;
  }(),
  '<': /*#__PURE__*/function () {
    var _lt = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield (yield execute(left, scope)).get();
      var b = yield (yield execute(right, scope)).get();
      var result = partialCompare(a, b);

      if (result === null) {
        return NULL_VALUE;
      } else {
        return result < 0 ? TRUE_VALUE : FALSE_VALUE;
      }
    });

    function lt(_x17, _x18, _x19, _x20) {
      return _lt.apply(this, arguments);
    }

    return lt;
  }(),
  '<=': /*#__PURE__*/function () {
    var _lte = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield (yield execute(left, scope)).get();
      var b = yield (yield execute(right, scope)).get();
      var result = partialCompare(a, b);

      if (result === null) {
        return NULL_VALUE;
      } else {
        return result <= 0 ? TRUE_VALUE : FALSE_VALUE;
      }
    });

    function lte(_x21, _x22, _x23, _x24) {
      return _lte.apply(this, arguments);
    }

    return lte;
  }(),
  in: /*#__PURE__*/function () {
    var _inop = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield execute(left, scope);
      var choices = yield execute(right, scope);

      switch (choices.getType()) {
        case 'array':
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;

          var _iteratorError;

          try {
            for (var _iterator = _asyncIterator(choices), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
              var b = _value;

              if (yield isEqual(a, b)) {
                return TRUE_VALUE;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                yield _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return FALSE_VALUE;

        case 'range':
          var value = yield a.get();
          var range = yield choices.get();
          var leftCmp = partialCompare(value, range.left);
          if (leftCmp === null) return NULL_VALUE;
          var rightCmp = partialCompare(value, range.right);
          if (rightCmp === null) return NULL_VALUE;

          if (range.isExclusive()) {
            return leftCmp >= 0 && rightCmp < 0 ? TRUE_VALUE : FALSE_VALUE;
          } else {
            return leftCmp >= 0 && rightCmp <= 0 ? TRUE_VALUE : FALSE_VALUE;
          }

        case 'path':
          if (a.getType() !== 'string') return NULL_VALUE;
          var str = yield a.get();
          var path = yield choices.get();
          return path.matches(str) ? TRUE_VALUE : FALSE_VALUE;
      }

      return NULL_VALUE;
    });

    function inop(_x25, _x26, _x27, _x28) {
      return _inop.apply(this, arguments);
    }

    return inop;
  }(),
  match: /*#__PURE__*/function () {
    var _match = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var text = yield execute(left, scope);
      var pattern = yield execute(right, scope);
      var tokens = [];
      var patterns = [];
      yield gatherText(text, part => {
        tokens = tokens.concat(matchTokenize(part));
      });
      var didSucceed = yield gatherText(pattern, part => {
        patterns = patterns.concat(matchAnalyzePattern(part));
      });
      if (!didSucceed) return FALSE_VALUE;
      var matched = matchText(tokens, patterns);
      return matched ? TRUE_VALUE : FALSE_VALUE;
    });

    function match(_x29, _x30, _x31, _x32) {
      return _match.apply(this, arguments);
    }

    return match;
  }(),
  '+': /*#__PURE__*/function () {
    var _plus = /*#__PURE__*/_asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield execute(left, scope);
      var b = yield execute(right, scope);
      var aType = a.getType();
      var bType = b.getType();

      if (aType === 'number' && bType === 'number' || aType === 'string' && bType === 'string') {
        return new StaticValue((yield a.get()) + (yield b.get()));
      }

      if (aType === 'array' && bType === 'array') {
        return new StaticValue((yield a.get()).concat(yield b.get()));
      }

      if (aType === 'object' && bType === 'object') {
        return new StaticValue(_extends({}, yield a.get(), yield b.get()));
      }

      return NULL_VALUE;
    });

    function plus(_x33, _x34, _x35, _x36) {
      return _plus.apply(this, arguments);
    }

    return plus;
  }(),
  '-': /*#__PURE__*/numericOperator((a, b) => a - b),
  '*': /*#__PURE__*/numericOperator((a, b) => a * b),
  '/': /*#__PURE__*/numericOperator((a, b) => a / b),
  '%': /*#__PURE__*/numericOperator((a, b) => a % b),
  '**': /*#__PURE__*/numericOperator((a, b) => Math.pow(a, b))
};

function numericOperator(impl) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (left, right, scope, execute) {
      var a = yield execute(left, scope);
      var b = yield execute(right, scope);
      var aType = a.getType();
      var bType = b.getType();

      if (aType === 'number' && bType === 'number') {
        var result = impl(yield a.get(), yield b.get());
        return fromNumber(result);
      }

      return NULL_VALUE;
    });

    return function (_x37, _x38, _x39, _x40) {
      return _ref.apply(this, arguments);
    };
  }();
}

function inMapper(value, fn) {
  if (value instanceof MapperValue) {
    return new MapperValue(new StreamValue( /*#__PURE__*/_wrapAsyncGenerator(function* () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError;

      try {
        for (var _iterator = _asyncIterator(value), _step, _value; _step = yield _awaitAsyncGenerator(_iterator.next()), _iteratorNormalCompletion = _step.done, _value = yield _awaitAsyncGenerator(_step.value), !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
          var elementValue = _value;
          yield fn(elementValue);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            yield _awaitAsyncGenerator(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    })));
  } else {
    return fn(value);
  }
}

class Scope {
  constructor(params, source, value, parent) {
    this.params = params;
    this.source = source;
    this.value = value;
    this.parent = parent;
    this.timestamp = parent ? parent.timestamp : new Date().toISOString();
  }

  createNested(value) {
    return new Scope(this.params, this.source, value, this);
  }

}

function execute(node, scope) {
  if (typeof EXECUTORS[node.type] === 'undefined') {
    throw new Error('No executor for node.type=' + node.type);
  }

  var func = EXECUTORS[node.type];
  return func(node, scope);
}

var EXECUTORS = {
  This(_, scope) {
    return scope.value;
  },

  Star(_, scope) {
    return scope.source;
  },

  Parameter(_ref6, scope) {
    var name = _ref6.name;
    return fromJS(scope.params[name]);
  },

  Parent(node, scope) {
    var current = scope;

    for (var i = 0; i < node.n; i++) {
      if (!current.parent) {
        return NULL_VALUE;
      }

      current = current.parent;
    }

    return current.value;
  },

  OpCall(_ref7, scope) {
    var op = _ref7.op,
        left = _ref7.left,
        right = _ref7.right;
    var func = operators[op];
    if (!func) throw new Error('Unknown operator: ' + op);
    return func(left, right, scope, execute);
  },

  FuncCall(_ref8, scope) {
    var func = _ref8.func,
        args = _ref8.args;
    return func(args, scope, execute);
  },

  PipeFuncCall(_ref9, scope) {
    return _asyncToGenerator(function* () {
      var func = _ref9.func,
          base = _ref9.base,
          args = _ref9.args;
      var baseValue = yield execute(base, scope);
      return func(baseValue, args, scope, execute);
    })();
  },

  Filter(_ref10, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref10.base,
          query = _ref10.query;
      var baseValue = yield execute(base, scope);
      return inMapper(baseValue, /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator(function* (value) {
          if (value.getType() !== 'array') return NULL_VALUE;
          return new StreamValue( /*#__PURE__*/_wrapAsyncGenerator(function* () {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;

            var _iteratorError2;

            try {
              for (var _iterator2 = _asyncIterator(value), _step2, _value2; _step2 = yield _awaitAsyncGenerator(_iterator2.next()), _iteratorNormalCompletion2 = _step2.done, _value2 = yield _awaitAsyncGenerator(_step2.value), !_iteratorNormalCompletion2; _iteratorNormalCompletion2 = true) {
                var element = _value2;
                var newScope = scope.createNested(element);
                var condValue = yield _awaitAsyncGenerator(execute(query, newScope));
                if (condValue.getBoolean()) yield element;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  yield _awaitAsyncGenerator(_iterator2.return());
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }));
        });

        return function (_x) {
          return _ref11.apply(this, arguments);
        };
      }());
    })();
  },

  Element(_ref12, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref12.base,
          index = _ref12.index;
      var baseValue = yield execute(base, scope);
      return inMapper(baseValue, /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator(function* (arrayValue) {
          if (arrayValue.getType() !== 'array') return NULL_VALUE;
          var idxValue = yield execute(index, scope);
          if (idxValue.getType() !== 'number') return NULL_VALUE; // OPT: Here we can optimize when idx >= 0

          var array = yield arrayValue.get();
          var idx = yield idxValue.get();

          if (idx < 0) {
            idx = array.length + idx;
          }

          if (idx >= 0 && idx < array.length) {
            return new StaticValue(array[idx]);
          } else {
            // Make sure we return `null` for out-of-bounds access
            return NULL_VALUE;
          }
        });

        return function (_x2) {
          return _ref13.apply(this, arguments);
        };
      }());
    })();
  },

  Slice(_ref14, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref14.base,
          left = _ref14.left,
          right = _ref14.right,
          isExclusive = _ref14.isExclusive;
      var baseValue = yield execute(base, scope);
      return inMapper(baseValue, /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator(function* (arrayValue) {
          if (arrayValue.getType() !== 'array') return NULL_VALUE;
          var leftIdxValue = yield execute(left, scope);
          var rightIdxValue = yield execute(right, scope);

          if (leftIdxValue.getType() !== 'number' || rightIdxValue.getType() !== 'number') {
            return NULL_VALUE;
          } // OPT: Here we can optimize when either indices are >= 0


          var array = yield arrayValue.get();
          var leftIdx = yield leftIdxValue.get();
          var rightIdx = yield rightIdxValue.get(); // Handle negative index

          if (leftIdx < 0) leftIdx = array.length + leftIdx;
          if (rightIdx < 0) rightIdx = array.length + rightIdx; // Convert from inclusive to exclusive index

          if (!isExclusive) rightIdx++;
          if (leftIdx < 0) leftIdx = 0;
          if (rightIdx < 0) rightIdx = 0; // Note: At this point the indices might point out-of-bound, but
          // .slice handles this correctly.

          return new StaticValue(array.slice(leftIdx, rightIdx));
        });

        return function (_x3) {
          return _ref15.apply(this, arguments);
        };
      }());
    })();
  },

  Attribute(_ref16, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref16.base,
          name = _ref16.name;
      var baseValue = yield execute(base, scope);
      return inMapper(baseValue, /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (value) {
          if (value.getType() === 'object') {
            var data = yield value.get();

            if (data.hasOwnProperty(name)) {
              return new StaticValue(data[name]);
            }
          }

          return NULL_VALUE;
        });

        return function (_x4) {
          return _ref17.apply(this, arguments);
        };
      }());
    })();
  },

  Identifier(_ref18, scope) {
    return _asyncToGenerator(function* () {
      var name = _ref18.name;

      if (scope.value.getType() === 'object') {
        var data = yield scope.value.get();

        if (data.hasOwnProperty(name)) {
          return new StaticValue(data[name]);
        }
      }

      return NULL_VALUE;
    })();
  },

  Value(_ref19) {
    var value = _ref19.value;
    return new StaticValue(value);
  },

  Mapper(_ref20, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref20.base;
      var baseValue = yield execute(base, scope);
      if (baseValue.getType() !== 'array') return baseValue;

      if (baseValue instanceof MapperValue) {
        return new MapperValue(new StreamValue( /*#__PURE__*/_wrapAsyncGenerator(function* () {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;

          var _iteratorError3;

          try {
            for (var _iterator3 = _asyncIterator(baseValue), _step3, _value3; _step3 = yield _awaitAsyncGenerator(_iterator3.next()), _iteratorNormalCompletion3 = _step3.done, _value3 = yield _awaitAsyncGenerator(_step3.value), !_iteratorNormalCompletion3; _iteratorNormalCompletion3 = true) {
              var element = _value3;

              if (element.getType() === 'array') {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;

                var _iteratorError4;

                try {
                  for (var _iterator4 = _asyncIterator(element), _step4, _value4; _step4 = yield _awaitAsyncGenerator(_iterator4.next()), _iteratorNormalCompletion4 = _step4.done, _value4 = yield _awaitAsyncGenerator(_step4.value), !_iteratorNormalCompletion4; _iteratorNormalCompletion4 = true) {
                    var subelement = _value4;
                    yield subelement;
                  }
                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                      yield _awaitAsyncGenerator(_iterator4.return());
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }
              } else {
                yield NULL_VALUE;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                yield _awaitAsyncGenerator(_iterator3.return());
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        })));
      } else {
        return new MapperValue(baseValue);
      }
    })();
  },

  Parenthesis(_ref21, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref21.base;
      var baseValue = yield execute(base, scope);

      if (baseValue instanceof MapperValue) {
        baseValue = baseValue.value;
      }

      return baseValue;
    })();
  },

  Projection(_ref22, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref22.base,
          query = _ref22.query;
      var baseValue = yield execute(base, scope);
      if (baseValue.getType() === 'null') return NULL_VALUE;

      if (baseValue.getType() === 'array') {
        return new StreamValue( /*#__PURE__*/_wrapAsyncGenerator(function* () {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;

          var _iteratorError5;

          try {
            for (var _iterator5 = _asyncIterator(baseValue), _step5, _value5; _step5 = yield _awaitAsyncGenerator(_iterator5.next()), _iteratorNormalCompletion5 = _step5.done, _value5 = yield _awaitAsyncGenerator(_step5.value), !_iteratorNormalCompletion5; _iteratorNormalCompletion5 = true) {
              var value = _value5;

              var _newScope = scope.createNested(value);

              var newValue = yield _awaitAsyncGenerator(execute(query, _newScope));
              yield newValue;
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                yield _awaitAsyncGenerator(_iterator5.return());
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }));
      }

      var newScope = scope.createNested(baseValue);
      return yield execute(query, newScope);
    })();
  },

  Deref(_ref23, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref23.base;
      var baseValue = yield execute(base, scope);
      return inMapper(baseValue, /*#__PURE__*/function () {
        var _ref24 = _asyncToGenerator(function* (baseValue) {
          if (scope.source.getType() !== 'array') return NULL_VALUE;
          if (baseValue.getType() !== 'object') return NULL_VALUE;
          var id = (yield baseValue.get())._ref;
          if (typeof id !== 'string') return NULL_VALUE;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;

          var _iteratorError6;

          try {
            for (var _iterator6 = _asyncIterator(scope.source), _step6, _value6; _step6 = yield _iterator6.next(), _iteratorNormalCompletion6 = _step6.done, _value6 = yield _step6.value, !_iteratorNormalCompletion6; _iteratorNormalCompletion6 = true) {
              var doc = _value6;

              if (id === doc.data._id) {
                return doc;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                yield _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          return NULL_VALUE;
        });

        return function (_x5) {
          return _ref24.apply(this, arguments);
        };
      }());
    })();
  },

  Object(_ref25, scope) {
    return _asyncToGenerator(function* () {
      var attributes = _ref25.attributes;
      var result = {};

      for (var _iterator8 = _createForOfIteratorHelperLoose(attributes), _step8; !(_step8 = _iterator8()).done;) {
        var attr = _step8.value;
        var attrType = attr.type;

        switch (attr.type) {
          case 'ObjectAttribute':
            {
              var key = yield execute(attr.key, scope);
              if (key.getType() !== 'string') continue;
              var value = yield execute(attr.value, scope);

              if (value.getType() === 'null') {
                delete result[key.data];
                break;
              }

              result[key.data] = yield value.get();
              break;
            }

          case 'ObjectConditionalSplat':
            {
              var cond = yield execute(attr.condition, scope);
              if (!cond.getBoolean()) continue;

              var _value8 = yield execute(attr.value, scope);

              if (_value8.getType() !== 'object') continue;
              Object.assign(result, _value8.data);
              break;
            }

          case 'ObjectSplat':
            {
              var _value9 = yield execute(attr.value, scope);

              if (_value9.getType('object')) {
                Object.assign(result, _value9.data);
              }

              break;
            }

          default:
            throw new Error('Unknown node type: ' + attrType);
        }
      }

      return new StaticValue(result);
    })();
  },

  Array(_ref26, scope) {
    var elements = _ref26.elements;
    return new StreamValue( /*#__PURE__*/_wrapAsyncGenerator(function* () {
      for (var _iterator9 = _createForOfIteratorHelperLoose(elements), _step9; !(_step9 = _iterator9()).done;) {
        var element = _step9.value;
        var value = yield _awaitAsyncGenerator(execute(element.value, scope));

        if (element.isSplat) {
          if (value.getType() === 'array') {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;

            var _iteratorError7;

            try {
              for (var _iterator7 = _asyncIterator(value), _step7, _value7; _step7 = yield _awaitAsyncGenerator(_iterator7.next()), _iteratorNormalCompletion7 = _step7.done, _value7 = yield _awaitAsyncGenerator(_step7.value), !_iteratorNormalCompletion7; _iteratorNormalCompletion7 = true) {
                var v = _value7;
                yield v;
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  yield _awaitAsyncGenerator(_iterator7.return());
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        } else {
          yield value;
        }
      }
    }));
  },

  Range(_ref27, scope) {
    return _asyncToGenerator(function* () {
      var left = _ref27.left,
          right = _ref27.right,
          isExclusive = _ref27.isExclusive;
      var leftValue = yield execute(left, scope);
      var rightValue = yield execute(right, scope);

      if (!Range.isConstructible(leftValue.getType(), rightValue.getType())) {
        return NULL_VALUE;
      }

      var range = new Range(yield leftValue.get(), yield rightValue.get(), isExclusive);
      return new StaticValue(range);
    })();
  },

  Pair(_ref28, scope) {
    return _asyncToGenerator(function* () {
      var left = _ref28.left,
          right = _ref28.right;
      var leftValue = yield execute(left, scope);
      var rightValue = yield execute(right, scope);
      var pair = new Pair(yield leftValue.get(), yield rightValue.get());
      return new StaticValue(pair);
    })();
  },

  Or(_ref29, scope) {
    return _asyncToGenerator(function* () {
      var left = _ref29.left,
          right = _ref29.right;
      var leftValue = yield execute(left, scope);
      var rightValue = yield execute(right, scope);

      if (leftValue.getType() === 'boolean') {
        if (leftValue.data === true) return TRUE_VALUE;
      }

      if (rightValue.getType() === 'boolean') {
        if (rightValue.data === true) return TRUE_VALUE;
      }

      if (leftValue.getType() !== 'boolean') return NULL_VALUE;
      if (rightValue.getType() !== 'boolean') return NULL_VALUE;
      return FALSE_VALUE;
    })();
  },

  And(_ref30, scope) {
    return _asyncToGenerator(function* () {
      var left = _ref30.left,
          right = _ref30.right;
      var leftValue = yield execute(left, scope);
      var rightValue = yield execute(right, scope);

      if (leftValue.getType() === 'boolean') {
        if (leftValue.data === false) return FALSE_VALUE;
      }

      if (rightValue.getType() === 'boolean') {
        if (rightValue.data === false) return FALSE_VALUE;
      }

      if (leftValue.getType() !== 'boolean') return NULL_VALUE;
      if (rightValue.getType() !== 'boolean') return NULL_VALUE;
      return TRUE_VALUE;
    })();
  },

  Not(_ref31, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref31.base;
      var value = yield execute(base, scope);

      if (value.getType() !== 'boolean') {
        return NULL_VALUE;
      }

      return value.getBoolean() ? FALSE_VALUE : TRUE_VALUE;
    })();
  },

  Neg(_ref32, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref32.base;
      var value = yield execute(base, scope);
      if (value.getType() !== 'number') return NULL_VALUE;
      return fromNumber(-(yield value.get()));
    })();
  },

  Pos(_ref33, scope) {
    return _asyncToGenerator(function* () {
      var base = _ref33.base;
      var value = yield execute(base, scope);
      if (value.getType() !== 'number') return NULL_VALUE;
      return fromNumber(yield value.get());
    })();
  },

  Asc() {
    return _asyncToGenerator(function* () {
      return NULL_VALUE;
    })();
  },

  Desc() {
    return _asyncToGenerator(function* () {
      return NULL_VALUE;
    })();
  }

};
/**
 * Evaluates a query.
 */

function evaluate(_x6, _x7) {
  return _evaluate.apply(this, arguments);
}

function _evaluate() {
  _evaluate = _asyncToGenerator(function* (tree, options) {
    if (options === void 0) {
      options = {};
    }

    var root = fromJS(options.root);
    var dataset = fromJS(options.dataset);

    var params = _extends({}, options.params);

    var scope = new Scope(params, dataset, root, null);
    return yield execute(tree, scope);
  });
  return _evaluate.apply(this, arguments);
}


//# sourceMappingURL=groq-js.esm.js.map


/***/ }),

/***/ "./node_modules/mendoza/lib/esm/incremental-patcher.js":
/*!*************************************************************!*\
  !*** ./node_modules/mendoza/lib/esm/incremental-patcher.js ***!
  \*************************************************************/
/*! exports provided: wrap, unwrap, getType, rebaseValue, applyPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return unwrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebaseValue", function() { return rebaseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return applyPatch; });
/* harmony import */ var _internal_patcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal-patcher */ "./node_modules/mendoza/lib/esm/internal-patcher.js");
/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utf8 */ "./node_modules/mendoza/lib/esm/utf8.js");


var Model = /** @class */ (function () {
    function Model(meta) {
        this.meta = meta;
    }
    Model.prototype.wrap = function (data) {
        return this.wrapWithMeta(data, this.meta, this.meta);
    };
    Model.prototype.wrapWithMeta = function (data, startMeta, endMeta) {
        if (endMeta === void 0) { endMeta = this.meta; }
        return { data: data, startMeta: startMeta, endMeta: endMeta };
    };
    Model.prototype.asObject = function (value) {
        if (!value.content) {
            var fields = {};
            for (var _i = 0, _a = Object.entries(value.data); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                fields[key] = this.wrapWithMeta(val, value.startMeta);
            }
            value.content = { type: 'object', fields: fields };
        }
        return value.content;
    };
    Model.prototype.asArray = function (value) {
        var _this = this;
        if (!value.content) {
            var elements = value.data.map(function (item) { return _this.wrapWithMeta(item, value.startMeta); });
            var metas = elements.map(function () { return _this.meta; });
            value.content = { type: 'array', elements: elements, metas: metas };
        }
        return value.content;
    };
    Model.prototype.asString = function (value) {
        if (!value.content) {
            var str = value.data;
            var part = {
                value: str,
                utf8size: Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["utf8stringSize"])(str),
                uses: [],
                startMeta: value.startMeta,
                endMeta: value.endMeta
            };
            value.content = this.stringFromParts([part]);
        }
        return value.content;
    };
    Model.prototype.stringFromParts = function (parts) {
        var str = {
            type: 'string',
            parts: parts
        };
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            part.uses.push(str);
        }
        return str;
    };
    Model.prototype.objectGetKeys = function (value) {
        if (value.content) {
            return Object.keys(value.content.fields);
        }
        else {
            return Object.keys(value.data);
        }
    };
    Model.prototype.objectGetField = function (value, key) {
        var obj = this.asObject(value);
        return obj.fields[key];
    };
    Model.prototype.arrayGetElement = function (value, idx) {
        var arr = this.asArray(value);
        return arr.elements[idx];
    };
    Model.prototype.finalize = function (content) {
        this.updateEndMeta(content);
        return { content: content, startMeta: this.meta, endMeta: this.meta };
    };
    Model.prototype.markChanged = function (value) {
        return this.wrap(unwrap(value));
    };
    Model.prototype.updateEndMeta = function (content) {
        if (content.type == 'string') {
            for (var _i = 0, _a = content.parts; _i < _a.length; _i++) {
                var part = _a[_i];
                part.endMeta = this.meta;
            }
        }
        else {
            if (content.type === 'array') {
                for (var _b = 0, _c = content.elements; _b < _c.length; _b++) {
                    var val = _c[_b];
                    if (val.content && val.endMeta !== this.meta) {
                        this.updateEndMeta(val.content);
                    }
                    val.endMeta = this.meta;
                }
            }
            else {
                for (var _d = 0, _e = Object.values(content.fields); _d < _e.length; _d++) {
                    var val = _e[_d];
                    if (val.content && val.endMeta !== this.meta) {
                        this.updateEndMeta(val.content);
                    }
                    val.endMeta = this.meta;
                }
            }
        }
    };
    Model.prototype.copyString = function (value) {
        if (value) {
            var other = this.asString(value);
            return this.stringFromParts(other.parts.slice());
        }
        else {
            return {
                type: 'string',
                parts: []
            };
        }
    };
    Model.prototype.copyObject = function (value) {
        var obj = {
            type: 'object',
            fields: {}
        };
        if (value) {
            var other = this.asObject(value);
            Object.assign(obj.fields, other.fields);
        }
        return obj;
    };
    Model.prototype.copyArray = function (value) {
        var arr = value ? this.asArray(value) : null;
        var elements = arr ? arr.elements : [];
        var metas = arr ? arr.metas : [];
        return {
            type: 'array',
            elements: elements,
            metas: metas
        };
    };
    Model.prototype.objectSetField = function (target, key, value) {
        target.fields[key] = value;
    };
    Model.prototype.objectDeleteField = function (target, key) {
        delete target.fields[key];
    };
    Model.prototype.arrayAppendValue = function (target, value) {
        target.elements.push(value);
        target.metas.push(this.meta);
    };
    Model.prototype.arrayAppendSlice = function (target, source, left, right) {
        var _a, _b;
        var arr = this.asArray(source);
        var samePosition = arr.elements.length === left;
        (_a = target.elements).push.apply(_a, arr.elements.slice(left, right));
        if (samePosition) {
            (_b = target.metas).push.apply(_b, arr.metas.slice(left, right));
        }
        else {
            for (var i = left; i < right; i++) {
                target.metas.push(this.meta);
            }
        }
    };
    Model.prototype.stringAppendValue = function (target, value) {
        var str = this.asString(value);
        for (var _i = 0, _a = str.parts; _i < _a.length; _i++) {
            var part = _a[_i];
            this.stringAppendPart(target, part);
        }
    };
    Model.prototype.stringAppendPart = function (target, part) {
        target.parts.push(part);
        part.uses.push(target);
    };
    Model.prototype.resolveStringPart = function (str, from, len) {
        if (len === 0)
            return from;
        for (var i = from; i < str.parts.length; i++) {
            var part = str.parts[i];
            if (len === part.utf8size) {
                // Matches perfect!
                return i + 1;
            }
            if (len < part.utf8size) {
                // It's a part of this chunk. We now need to split it up.
                this.splitString(part, len);
                return i + 1;
            }
            len -= part.utf8size;
        }
        throw new Error('splitting string out of bounds');
    };
    Model.prototype.splitString = function (part, idx) {
        var leftValue;
        var rightValue;
        var leftSize = idx;
        var rightSize = part.utf8size - leftSize;
        // idx is here in UTF-8 index, not codepoint index.
        // This means we might to adjust for multi-byte characters.
        if (part.utf8size !== part.value.length) {
            var byteCount = 0;
            for (idx = 0; byteCount < leftSize; idx++) {
                var code = part.value.codePointAt(idx);
                var size = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["utf8charSize"])(code);
                if (size === 4)
                    idx++; // Surrogate pair.
                byteCount += size;
            }
        }
        leftValue = part.value.slice(0, idx);
        rightValue = part.value.slice(idx);
        var newPart = {
            value: rightValue,
            utf8size: rightSize,
            uses: part.uses.slice(),
            startMeta: part.startMeta,
            endMeta: part.endMeta
        };
        part.value = leftValue;
        part.utf8size = leftSize;
        for (var _i = 0, _a = part.uses; _i < _a.length; _i++) {
            var use = _a[_i];
            // Insert the new part.
            var idx_1 = use.parts.indexOf(part);
            if (idx_1 === -1)
                throw new Error('bug: mismatch between string parts and use.');
            use.parts.splice(idx_1 + 1, 0, newPart);
        }
    };
    Model.prototype.stringAppendSlice = function (target, source, left, right) {
        var str = this.asString(source);
        var firstPart = this.resolveStringPart(str, 0, left);
        var lastPart = this.resolveStringPart(str, firstPart, right - left);
        for (var i = firstPart; i < lastPart; i++) {
            var part = str.parts[i];
            this.stringAppendPart(target, part);
        }
    };
    return Model;
}());
// Turns a native JavaScript object into a Value with a given origin.
function wrap(data, meta) {
    return { data: data, startMeta: meta, endMeta: meta };
}
// Converts a Value into a native JavaScript type.
function unwrap(value) {
    if (typeof value.data !== 'undefined')
        return value.data;
    var result;
    var content = value.content;
    switch (content.type) {
        case 'string':
            result = content.parts.map(function (part) { return part.value; }).join('');
            break;
        case 'array':
            result = content.elements.map(function (val) { return unwrap(val); });
            break;
        case 'object': {
            result = {};
            for (var _i = 0, _a = Object.entries(content.fields); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                result[key] = unwrap(val);
            }
        }
    }
    value.data = result;
    return result;
}
// Returns the type of a Value.
function getType(value) {
    if (value.content)
        return value.content.type;
    if (Array.isArray(value.data))
        return 'array';
    if (value.data === null)
        return 'null';
    return typeof value.data;
}
// Updates the `right` value such that it reuses as much as possible from the `left` value.
function rebaseValue(left, right) {
    var leftType = getType(left);
    var rightType = getType(right);
    if (leftType !== rightType)
        return right;
    var leftModel = new Model(left.endMeta);
    var rightModel = new Model(right.endMeta);
    switch (leftType) {
        case 'object': {
            var leftObj = leftModel.asObject(left);
            var rightObj = rightModel.asObject(right);
            // Number of fields which are identical in left and right.
            var identicalFieldCount = 0;
            var leftFieldCount = Object.keys(leftObj.fields).length;
            var rightFieldCount = Object.keys(rightObj.fields).length;
            for (var _i = 0, _a = Object.entries(rightObj.fields); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], rightVal = _b[1];
                var leftVal = leftObj.fields[key];
                if (leftVal) {
                    rightObj.fields[key] = rebaseValue(leftVal, rightVal);
                    if (rightObj.fields[key] === leftVal) {
                        identicalFieldCount++;
                    }
                }
            }
            var isIdentical = leftFieldCount === rightFieldCount && leftFieldCount === identicalFieldCount;
            return isIdentical ? left : right;
        }
        case 'array': {
            var leftArr = leftModel.asArray(left);
            var rightArr = rightModel.asArray(right);
            if (leftArr.elements.length !== rightArr.elements.length) {
                break;
            }
            var numRebased = 0;
            for (var i = 0; i < rightArr.elements.length; i++) {
                rightArr.elements[i] = rebaseValue(leftArr.elements[i], rightArr.elements[i]);
                if (rightArr.elements[i] !== leftArr.elements[i]) {
                    numRebased++;
                }
            }
            return numRebased === 0 ? left : right;
        }
        case 'null':
        case 'boolean':
        case 'number': {
            if (unwrap(left) === unwrap(right))
                return left;
            break;
        }
        case 'string': {
            var leftRaw = unwrap(left);
            var rightRaw = unwrap(right);
            if (leftRaw === rightRaw)
                return left;
            var result = rightModel.copyString(null);
            var prefix = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["commonPrefix"])(leftRaw, rightRaw);
            var suffix = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["commonSuffix"])(leftRaw, rightRaw, prefix);
            var rightLen = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["utf8stringSize"])(rightRaw);
            var leftLen = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["utf8stringSize"])(leftRaw);
            if (0 < prefix) {
                rightModel.stringAppendSlice(result, left, 0, prefix);
            }
            if (prefix < rightLen - suffix) {
                rightModel.stringAppendSlice(result, right, prefix, rightLen - suffix);
            }
            if (leftLen - suffix < leftLen) {
                rightModel.stringAppendSlice(result, left, leftLen - suffix, leftLen);
            }
            var value = rightModel.finalize(result);
            if (unwrap(value) !== rightRaw)
                throw new Error('incorrect string rebase');
            return value;
        }
    }
    return right;
}
function applyPatch(left, patch, startMeta) {
    var model = new Model(startMeta);
    var patcher = new _internal_patcher__WEBPACK_IMPORTED_MODULE_0__["Patcher"](model, left, patch);
    return patcher.process();
}
//# sourceMappingURL=incremental-patcher.js.map

/***/ }),

/***/ "./node_modules/mendoza/lib/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/mendoza/lib/esm/index.js ***!
  \***********************************************/
/*! exports provided: incremental, applyPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _incremental_patcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incremental-patcher */ "./node_modules/mendoza/lib/esm/incremental-patcher.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "incremental", function() { return _incremental_patcher__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _simple_patcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-patcher */ "./node_modules/mendoza/lib/esm/simple-patcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return _simple_patcher__WEBPACK_IMPORTED_MODULE_1__["applyPatch"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/mendoza/lib/esm/internal-patcher.js":
/*!**********************************************************!*\
  !*** ./node_modules/mendoza/lib/esm/internal-patcher.js ***!
  \**********************************************************/
/*! exports provided: Patcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patcher", function() { return Patcher; });
var OPS = [
    'Value',
    'Copy',
    'Blank',
    'ReturnIntoArray',
    'ReturnIntoObject',
    'ReturnIntoObjectSameKey',
    'PushField',
    'PushElement',
    'PushParent',
    'Pop',
    'PushFieldCopy',
    'PushFieldBlank',
    'PushElementCopy',
    'PushElementBlank',
    'ReturnIntoObjectPop',
    'ReturnIntoObjectSameKeyPop',
    'ReturnIntoArrayPop',
    'ObjectSetFieldValue',
    'ObjectCopyField',
    'ObjectDeleteField',
    'ArrayAppendValue',
    'ArrayAppendSlice',
    'StringAppendString',
    'StringAppendSlice'
];
var Patcher = /** @class */ (function () {
    function Patcher(model, root, patch) {
        this.i = 0;
        this.inputStack = [];
        this.outputStack = [];
        this.model = model;
        this.root = root;
        this.patch = patch;
    }
    Patcher.prototype.read = function () {
        return this.patch[this.i++];
    };
    Patcher.prototype.process = function () {
        this.inputStack.push({ value: this.root });
        this.outputStack.push({ value: this.root });
        for (; this.i < this.patch.length;) {
            var opcode = this.read();
            var op = OPS[opcode];
            if (!op)
                throw new Error("Unknown opcode: " + opcode);
            var processor = "process" + op;
            this[processor].apply(this);
        }
        var entry = this.outputStack.pop();
        return this.finalizeOutput(entry);
    };
    Patcher.prototype.inputEntry = function () {
        return this.inputStack[this.inputStack.length - 1];
    };
    Patcher.prototype.inputKey = function (entry, idx) {
        if (!entry.keys) {
            entry.keys = this.model.objectGetKeys(entry.value).sort();
        }
        return entry.keys[idx];
    };
    Patcher.prototype.outputEntry = function () {
        return this.outputStack[this.outputStack.length - 1];
    };
    Patcher.prototype.outputArray = function () {
        var entry = this.outputEntry();
        if (!entry.writeValue) {
            entry.writeValue = this.model.copyArray(entry.value);
        }
        return entry.writeValue;
    };
    Patcher.prototype.outputObject = function () {
        var entry = this.outputEntry();
        if (!entry.writeValue) {
            entry.writeValue = this.model.copyObject(entry.value);
        }
        return entry.writeValue;
    };
    Patcher.prototype.outputString = function () {
        var entry = this.outputEntry();
        if (!entry.writeValue) {
            entry.writeValue = this.model.copyString(entry.value);
        }
        return entry.writeValue;
    };
    Patcher.prototype.finalizeOutput = function (entry) {
        if (entry.writeValue) {
            return this.model.finalize(entry.writeValue);
        }
        else {
            return entry.value;
        }
    };
    // Processors:
    Patcher.prototype.processValue = function () {
        var value = this.model.wrap(this.read());
        this.outputStack.push({ value: value });
    };
    Patcher.prototype.processCopy = function () {
        var input = this.inputEntry();
        this.outputStack.push({ value: input.value });
    };
    Patcher.prototype.processBlank = function () {
        this.outputStack.push({ value: null });
    };
    Patcher.prototype.processReturnIntoArray = function () {
        var entry = this.outputStack.pop();
        var result = this.finalizeOutput(entry);
        var arr = this.outputArray();
        this.model.arrayAppendValue(arr, result);
    };
    Patcher.prototype.processReturnIntoObject = function () {
        var key = this.read();
        var entry = this.outputStack.pop();
        var result = this.finalizeOutput(entry);
        result = this.model.markChanged(result);
        var obj = this.outputObject();
        this.model.objectSetField(obj, key, result);
    };
    Patcher.prototype.processReturnIntoObjectSameKey = function () {
        var input = this.inputEntry();
        var entry = this.outputStack.pop();
        var result = this.finalizeOutput(entry);
        var obj = this.outputObject();
        this.model.objectSetField(obj, input.key, result);
    };
    Patcher.prototype.processPushField = function () {
        var idx = this.read();
        var entry = this.inputEntry();
        var key = this.inputKey(entry, idx);
        var value = this.model.objectGetField(entry.value, key);
        this.inputStack.push({ value: value, key: key });
    };
    Patcher.prototype.processPushElement = function () {
        var idx = this.read();
        var entry = this.inputEntry();
        var value = this.model.arrayGetElement(entry.value, idx);
        this.inputStack.push({ value: value });
    };
    Patcher.prototype.processPop = function () {
        this.inputStack.pop();
    };
    Patcher.prototype.processPushFieldCopy = function () {
        this.processPushField();
        this.processCopy();
    };
    Patcher.prototype.processPushFieldBlank = function () {
        this.processPushField();
        this.processBlank();
    };
    Patcher.prototype.processPushElementCopy = function () {
        this.processPushElement();
        this.processCopy();
    };
    Patcher.prototype.processPushElementBlank = function () {
        this.processPushElement();
        this.processBlank();
    };
    Patcher.prototype.processReturnIntoObjectPop = function () {
        this.processReturnIntoObject();
        this.processPop();
    };
    Patcher.prototype.processReturnIntoObjectSameKeyPop = function () {
        this.processReturnIntoObjectSameKey();
        this.processPop();
    };
    Patcher.prototype.processReturnIntoArrayPop = function () {
        this.processReturnIntoArray();
        this.processPop();
    };
    Patcher.prototype.processObjectSetFieldValue = function () {
        this.processValue();
        this.processReturnIntoObject();
    };
    Patcher.prototype.processObjectCopyField = function () {
        this.processPushField();
        this.processCopy();
        this.processReturnIntoObjectSameKey();
        this.processPop();
    };
    Patcher.prototype.processObjectDeleteField = function () {
        var idx = this.read();
        var entry = this.inputEntry();
        var key = this.inputKey(entry, idx);
        var obj = this.outputObject();
        this.model.objectDeleteField(obj, key);
    };
    Patcher.prototype.processArrayAppendValue = function () {
        var value = this.model.wrap(this.read());
        var arr = this.outputArray();
        this.model.arrayAppendValue(arr, value);
    };
    Patcher.prototype.processArrayAppendSlice = function () {
        var left = this.read();
        var right = this.read();
        var str = this.outputArray();
        var val = this.inputEntry().value;
        this.model.arrayAppendSlice(str, val, left, right);
    };
    Patcher.prototype.processStringAppendString = function () {
        var value = this.model.wrap(this.read());
        var str = this.outputString();
        this.model.stringAppendValue(str, value);
    };
    Patcher.prototype.processStringAppendSlice = function () {
        var left = this.read();
        var right = this.read();
        var str = this.outputString();
        var val = this.inputEntry().value;
        this.model.stringAppendSlice(str, val, left, right);
    };
    return Patcher;
}());

//# sourceMappingURL=internal-patcher.js.map

/***/ }),

/***/ "./node_modules/mendoza/lib/esm/simple-patcher.js":
/*!********************************************************!*\
  !*** ./node_modules/mendoza/lib/esm/simple-patcher.js ***!
  \********************************************************/
/*! exports provided: applyPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return applyPatch; });
/* harmony import */ var _internal_patcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal-patcher */ "./node_modules/mendoza/lib/esm/internal-patcher.js");
/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utf8 */ "./node_modules/mendoza/lib/esm/utf8.js");


var Model = {
    wrap: function (data) {
        return data;
    },
    finalize: function (b) {
        if (Array.isArray(b)) {
            return b;
        }
        else {
            return b.data;
        }
    },
    markChanged: function (value) {
        return value;
    },
    objectGetKeys: function (value) {
        return Object.keys(value);
    },
    objectGetField: function (value, key) {
        return value[key];
    },
    arrayGetElement: function (value, idx) {
        return value[idx];
    },
    copyObject: function (value) {
        var res = {
            type: 'object',
            data: {}
        };
        if (value !== null) {
            for (var _i = 0, _a = Object.entries(value); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                res.data[key] = val;
            }
        }
        return res;
    },
    copyArray: function (value) {
        if (value === null)
            return [];
        return value.slice();
    },
    copyString: function (value) {
        return {
            type: 'string',
            data: value === null ? '' : value
        };
    },
    objectSetField: function (target, key, value) {
        target.data[key] = value;
    },
    objectDeleteField: function (target, key) {
        delete target.data[key];
    },
    arrayAppendValue: function (target, value) {
        target.push(value);
    },
    arrayAppendSlice: function (target, source, left, right) {
        target.push.apply(target, source.slice(left, right));
    },
    stringAppendSlice: function (target, source, left, right) {
        var sourceString = source;
        var leftPos = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["utf8resolveIndex"])(sourceString, left);
        var rightPos = Object(_utf8__WEBPACK_IMPORTED_MODULE_1__["utf8resolveIndex"])(sourceString, right, leftPos);
        target.data += sourceString.slice(leftPos, rightPos);
    },
    stringAppendValue: function (target, value) {
        target.data += value;
    }
};
// Applies a patch on a JavaScript object.
function applyPatch(left, patch) {
    var root = left; // No need to wrap because the representation is the same.
    var patcher = new _internal_patcher__WEBPACK_IMPORTED_MODULE_0__["Patcher"](Model, root, patch);
    return patcher.process();
}
//# sourceMappingURL=simple-patcher.js.map

/***/ }),

/***/ "./node_modules/mendoza/lib/esm/utf8.js":
/*!**********************************************!*\
  !*** ./node_modules/mendoza/lib/esm/utf8.js ***!
  \**********************************************/
/*! exports provided: utf8charSize, utf8stringSize, utf8resolveIndex, commonPrefix, commonSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8charSize", function() { return utf8charSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8stringSize", function() { return utf8stringSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8resolveIndex", function() { return utf8resolveIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonPrefix", function() { return commonPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonSuffix", function() { return commonSuffix; });
function utf8charSize(code) {
    if (code >> 16) {
        return 4;
    }
    else if (code >> 11) {
        return 3;
    }
    else if (code >> 7) {
        return 2;
    }
    else {
        return 1;
    }
}
function utf8stringSize(str) {
    var b = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.codePointAt(i);
        var size = utf8charSize(code);
        if (size == 4)
            i++;
        b += size;
    }
    return b;
}
/** Converts an UTF-8 byte index into a UCS-2 index. */
function utf8resolveIndex(str, idx, start) {
    if (start === void 0) { start = 0; }
    var byteCount = start;
    var ucsIdx = 0;
    for (ucsIdx = start; byteCount < idx; ucsIdx++) {
        var code = str.codePointAt(ucsIdx);
        var size = utf8charSize(code);
        if (size === 4)
            ucsIdx++; // Surrogate pair.
        byteCount += size;
    }
    return ucsIdx;
}
function commonPrefix(str, str2) {
    var len = Math.min(str.length, str2.length);
    var b = 0;
    for (var i = 0; i < len;) {
        var aPoint = str.codePointAt(i);
        var bPoint = str2.codePointAt(i);
        if (aPoint !== bPoint)
            return b;
        var size = utf8charSize(aPoint);
        b += size;
        i += size === 4 ? 2 : 1;
    }
    return b;
}
function commonSuffix(str, str2, prefix) {
    if (prefix === void 0) { prefix = 0; }
    var len = Math.min(str.length, str2.length) - prefix;
    var b = 0;
    for (var i = 0; i < len;) {
        var aPoint = str.codePointAt(str.length - 1 - i);
        var bPoint = str2.codePointAt(str2.length - 1 - i);
        if (aPoint !== bPoint)
            return b;
        var size = utf8charSize(aPoint);
        b += size;
        i += size === 4 ? 2 : 1;
    }
    return b;
}
//# sourceMappingURL=utf8.js.map

/***/ }),

/***/ "./node_modules/throttle-debounce/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/esm/index.js ***!
  \*****************************************************/
/*! exports provided: debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvZ3JvcS1zdG9yZS9kaXN0L2Jyb3dzZXIvZ3JvcS1zdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyb3EtanMvZGlzdC9ncm9xLWpzLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21lbmRvemEvbGliL2VzbS9pbmNyZW1lbnRhbC1wYXRjaGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWVuZG96YS9saWIvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWVuZG96YS9saWIvZXNtL2ludGVybmFsLXBhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZW5kb3phL2xpYi9lc20vc2ltcGxlLXBhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZW5kb3phL2xpYi9lc20vdXRmOC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxjQUFjLHdEQUF3RCxRQUFRLG1CQUFPLENBQUMsNkNBQU0sT0FBTyxtQkFBTyxDQUFDLGdFQUFpQixLQUFLLG1CQUFPLENBQUMsd0VBQW1CLElBQUksbUJBQU8sQ0FBQywyREFBUyxJQUFJLG1CQUFPLENBQUMsd0RBQVMsRUFBRSxhQUFhLG9DQUFvQyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx3QkFBd0Isa0JBQWtCLDJIQUEySCw4QkFBOEIsMEJBQTBCLFFBQVEsRUFBRSxtR0FBbUcsTUFBTSxJQUFJLHFCQUFxQixTQUFTLE9BQU8sS0FBSyxvREFBb0QsTUFBTSxVQUFVLElBQUkscUJBQXFCLFNBQVMseUVBQXlFLCtFQUErRSwyQ0FBMkMseURBQXlELDZKQUE2SixNQUFNLHVCQUF1QixvQ0FBb0MsY0FBYyx3REFBd0QsZ0JBQWdCLFVBQVUsSUFBSSx1Q0FBdUMsYUFBYSx5QkFBeUIsYUFBYSwrREFBK0Qsb0JBQW9CLFNBQVMsR0FBRyxrQkFBa0IsU0FBUyxtQkFBbUIsMENBQTBDLG1CQUFtQixtRUFBbUUsWUFBWSxVQUFVLFNBQVMsaUJBQWlCLGNBQWMsc0NBQXNDLHFCQUFxQixNQUFNLGNBQWMsTUFBTSxJQUFJLGlCQUFpQixTQUFTLFNBQVMsU0FBUyxZQUFZLDBCQUEwQixJQUFJLFVBQVUsNkNBQTZDLFNBQVMsVUFBVSxHQUFHLEdBQUcsR0FBRyxjQUFjLDZCQUE2QixrQkFBa0IsMERBQTBELElBQUksOEVBQThFLGlDQUFpQywwQkFBMEIsUUFBUSxvQkFBb0IsY0FBYyxzQkFBc0IsMkRBQTJELFdBQVcsYUFBYSxtQkFBbUIsMkJBQTJCLGtCQUFrQixnQkFBZ0IsMkJBQTJCLDRCQUE0QixJQUFJLGtKQUFrSixnQ0FBZ0MsVUFBVSxtQkFBbUIsYUFBYSxLQUFLLGtCQUFrQix5Q0FBeUMsSUFBSSx5QkFBeUIsU0FBUyx5Q0FBeUMsK0NBQStDLG9CQUFvQixJQUFJLGlEQUFpRCxLQUFLLEVBQUUsU0FBUyxZQUFZLG9DQUFvQyxlQUFlLFdBQVcsRUFBRSxvREFBb0QsVUFBVSxTQUFTLDBCQUEwQixvQkFBb0Isa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDBDQUEwQyxNQUFNLEdBQUcsVUFBVSxjQUFjLFVBQVUsS0FBSyxNQUFNLE1BQU0sVUFBVSw2QkFBNkIsZUFBZSwrQkFBK0IsK0NBQStDLGNBQWMsUUFBUSxvQkFBb0IsRUFBRSwrQ0FBK0Msb0JBQW9CLDhDQUE4QyxPQUFPLFNBQVMsY0FBYyxNQUFNLEdBQUcsb0JBQW9CLDhDQUE4QyxNQUFNLDZDQUE2QyxlQUFlLHlCQUF5QixlQUFlLFlBQVksa0RBQWtELGVBQWUsOElBQThJLHFFQUFxRSx1S0FBdUssRUFBRSxZQUFZLGNBQWMsRUFBRSxvQ0FBb0MsU0FBUyxJQUFJLGlCQUFpQixvRUFBb0Usc0lBQXNJLE1BQU0sRUFBRSxHQUFHLCtCQUErQixFQUFFLFNBQVMsMkJBQTJCLDZDQUE2QyxjQUFjLGtFQUFrRSxxQkFBcUIsRUFBRSw0RkFBNEYsZ0ZBQWdGLHFCQUFxQixzQkFBc0IsSUFBSSw0Q0FBNEMsaUJBQWlCLHFDQUFxQyxtQkFBbUIsb0JBQW9CLGVBQWUsRUFBRSxFQUFFLFNBQVMsMEJBQTBCLGNBQWMsSUFBSSw2QkFBNkIsbUdBQW1HLG9CQUFvQix3QkFBd0Isc0NBQXNDLG1CQUFtQiwyREFBMkQsUUFBUSxFQUFFLE9BQU8sbUJBQW1CLGlCQUFpQixlQUFlLDhDQUE4QyxnQ0FBZ0MsZUFBZSwyQ0FBMkMsNEZBQTRGLHFDQUFxQyxrQkFBa0Isb0hBQW9ILGlCQUFpQixpQkFBaUIsSUFBSSwwQkFBMEIsc0NBQXNDLG9CQUFvQixpQkFBaUIsY0FBYyw2QkFBNkIsOEJBQThCLGdDQUFnQywwQkFBMEIseUJBQXlCLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxzQkFBc0IsbUVBQW1FLDZCQUE2QixpRUFBaUUsSUFBSSwyQkFBMkIsc0JBQXNCLFdBQVcsRUFBRSxTQUFTLDBCQUEwQixtQkFBbUIsYUFBYSx3QkFBd0IsY0FBYywyQ0FBMkMsY0FBYyw2QkFBNkIsa0JBQWtCLG1EQUFtRCxXQUFXLElBQUksU0FBUyxFQUFFLHVCQUF1Qix5QkFBeUIsUUFBUSxlQUFlLFFBQVEsZ0RBQWdELEVBQUUsU0FBUywwQkFBMEIsMkRBQTJELGFBQWEsT0FBTyxjQUFjLDRDQUE0Qyx1RkFBdUYsb0JBQW9CLGNBQWMsRUFBRSxPQUFPLGdDQUFnQyxJQUFJLDRDQUE0QyxpQkFBaUIsS0FBSyxFQUFFLEVBQUUsU0FBUywwQkFBMEIsMEJBQTBCLElBQUksNENBQTRDLHdCQUF3Qiw2QkFBNkIsY0FBYyxvQkFBb0IsRUFBRSxTQUFTLDBCQUEwQiwyQkFBMkIsZ0ZBQWdGLE9BQU8sNkJBQTZCLFVBQVUsU0FBUyxhQUFhLHVCQUF1Qiw4REFBOEQsa0JBQWtCLHdEQUF3RCxJQUFJLDhDQUE4QztBQUNsL1A7Ozs7Ozs7Ozs7Ozs7QUNEYTs7QUFFYjs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsK0JBQStCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1FQUFtRSxnSUFBZ0k7QUFDbk07QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9GQUFvRix1SUFBdUk7QUFDM047O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUEsb0ZBQW9GLCtCQUErQjtBQUNuSDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtRUFBbUUsbUxBQW1MO0FBQ3RQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsK0JBQStCO0FBQzFHO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDZEQUE2RCw0QkFBNEI7QUFDekY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0VBQXdFLCtCQUErQjtBQUN2RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdFQUFnRSxnSUFBZ0k7QUFDaE07QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBd0UsK0JBQStCO0FBQ3ZHO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSx3RUFBd0UsK0JBQStCO0FBQ3ZHOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBd0UsK0JBQStCO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0VBQWtFLHVJQUF1STtBQUN6TTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrQkFBa0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxFQUFFLEtBQUssZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNFQUFzRSxnSUFBZ0k7QUFDdE07O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdFQUF3RSxnSUFBZ0k7QUFDeE07O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0VBQWtFLDRLQUE0SztBQUM5TztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJFQUEyRSxtTEFBbUw7QUFDOVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZFQUE2RSxtTEFBbUw7QUFDaFE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGLG1MQUFtTDtBQUNwUTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2RUFBNkUsbUxBQW1MO0FBQ2hROztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdGQUFnRix1SUFBdUk7QUFDdk47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0ZBQWdGLCtCQUErQjtBQUMvRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLCtCQUErQjtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkVBQTJFLG1MQUFtTDtBQUM5UDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRXNDO0FBQ3RDOzs7Ozs7Ozs7Ozs7O0FDenpNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ3FDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3RELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxrREFBa0QsRUFBRTtBQUMvRyxrREFBa0QsbUJBQW1CLEVBQUU7QUFDdkUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBLDJCQUEyQiwwREFBWTtBQUN2QztBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUCxZQUFZO0FBQ1o7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG1CQUFtQixFQUFFO0FBQzdFO0FBQ0E7QUFDQSwwREFBMEQsb0JBQW9CLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdCQUFnQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxnQkFBZ0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQVk7QUFDckMseUJBQXlCLDBEQUFZO0FBQ3JDLDJCQUEyQiw0REFBYztBQUN6QywwQkFBMEIsNERBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxzQkFBc0IseURBQU87QUFDN0I7QUFDQTtBQUNBLCtDOzs7Ozs7Ozs7Ozs7QUM1V0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ2Y7QUFDTTtBQUM5QyxpQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQsK0JBQStCLG1CQUFtQjtBQUNsRCxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNrQjtBQUNuQiw0Qzs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ0g7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFnQjtBQUN0Qyx1QkFBdUIsOERBQWdCO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9CQUFvQjtBQUNwQixzQkFBc0IseURBQU87QUFDN0I7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw2RUFBNkUsYUFBYTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUU4QjtBQUM5QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJkZWZhdWx0XCJpbiBlP2UuZGVmYXVsdDplfXZhciByPWUocmVxdWlyZShcImdyb3FcIikpLHQ9ZShyZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsXCIpKSxuPXJlcXVpcmUoXCJ0aHJvdHRsZS1kZWJvdW5jZVwiKSxvPXJlcXVpcmUoXCJncm9xLWpzXCIpLGk9cmVxdWlyZShcIm1lbmRvemFcIik7ZnVuY3Rpb24gdSgpe3JldHVybih1PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgcj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspe3ZhciB0PWFyZ3VtZW50c1tyXTtmb3IodmFyIG4gaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKSYmKGVbbl09dFtuXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYyhlLHIsdCl7dmFyIG4sbz1yLnRva2VuLGk9bmV3IGUoXCJodHRwczovL1wiK3IucHJvamVjdElkK1wiLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9saXN0ZW4vXCIrci5kYXRhc2V0K1wiP3F1ZXJ5PSomZWZmZWN0Rm9ybWF0PW1lbmRvemFcIix7d2l0aENyZWRlbnRpYWxzOiEwLGhlYWRlcnM6bz97QXV0aG9yaXphdGlvbjpcIkJlYXJlciBcIitvfTp2b2lkIDB9KTtyZXR1cm4gaS5hZGRFdmVudExpc3RlbmVyKFwid2VsY29tZVwiLHQub3BlbiwhMSksaS5hZGRFdmVudExpc3RlbmVyKFwibXV0YXRpb25cIiwobj10Lm5leHQsZnVuY3Rpb24oZSl7dmFyIHI7dHJ5e3I9SlNPTi5wYXJzZShlLmRhdGEpfWNhdGNoKGUpe3JldHVybn1uKHIpfSksITEpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5uZWxFcnJvclwiLGZ1bmN0aW9uKGUpe3ZhciByO2kuY2xvc2UoKTt0cnl7cj1KU09OLnBhcnNlKGUuZGF0YSl9Y2F0Y2goZSl7cmV0dXJuIHZvaWQgdC5lcnJvcihuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yIHBhcnNpbmcgbGlzdGVuZXIgbWVzc2FnZVwiKSl9dC5lcnJvcihuZXcgRXJyb3Ioci5tZXNzYWdlfHxyLmVycm9yfHxcIkxpc3RlbmVyIHJldHVybmVkIEhUVFAgXCIrci5zdGF0dXNDb2RlKSl9LCExKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmxvY2F0aW9uLm9yaWdpbjt0LmVycm9yKG5ldyBFcnJvcihcIkVycm9yIGVzdGFibGlzaGluZyBsaXN0ZW5lciAtIGNoZWNrIHRoYXQgdGhlIHByb2plY3QgSUQgYW5kIGRhdGFzZXQgYXJlIGNvcnJlY3RcIisoZT9cIiwgYW5kIHRoYXQgdGhlIENPUlMtb3JpZ2luIChcIitlK1wiKSBpcyBhbGxvd2VkXCI6XCJcIikpKX0sITEpLHt1bnN1YnNjcmliZTpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoaS5jbG9zZSgpKX19fWZ1bmN0aW9uIHMoZSl7cmV0dXJuIGUuX2lkLnN0YXJ0c1dpdGgoXCJkcmFmdHMuXCIpP2UuX2lkLnNsaWNlKDcpOmUuX2lkfWZ1bmN0aW9uIGEoZSxyKXt2YXIgdD11KHt9LGUpO3JldHVybiBkZWxldGUgdC5fcmV2LGkuYXBwbHlQYXRjaCh0LHIpfWZ1bmN0aW9uIGYoKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9ZnVuY3Rpb24gZCgpe3ZhciBlLHIsdD0oZT1bXCIqW19pZCA9PSAkaWRdWzBdXCJdLHJ8fChyPWUuc2xpY2UoMCkpLGUucmF3PXIsZSk7cmV0dXJuIGQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sdH1mdW5jdGlvbiB2KGUscix0KXtpZighZS5zKXtpZih0IGluc3RhbmNlb2YgaCl7aWYoIXQucylyZXR1cm4gdm9pZCh0Lm89di5iaW5kKG51bGwsZSxyKSk7MSZyJiYocj10LnMpLHQ9dC52fWlmKHQmJnQudGhlbilyZXR1cm4gdm9pZCB0LnRoZW4odi5iaW5kKG51bGwsZSxyKSx2LmJpbmQobnVsbCxlLDIpKTtlLnM9cixlLnY9dDt2YXIgbj1lLm87biYmbihlKX19dmFyIGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHIsdCl7dmFyIG49bmV3IGUsbz10aGlzLnM7aWYobyl7dmFyIGk9MSZvP3I6dDtpZihpKXt0cnl7dihuLDEsaSh0aGlzLnYpKX1jYXRjaChlKXt2KG4sMixlKX1yZXR1cm4gbn1yZXR1cm4gdGhpc31yZXR1cm4gdGhpcy5vPWZ1bmN0aW9uKGUpe3RyeXt2YXIgbz1lLnY7MSZlLnM/dihuLDEscj9yKG8pOm8pOnQ/dihuLDEsdChvKSk6dihuLDIsbyl9Y2F0Y2goZSl7dihuLDIsZSl9fSxufSxlfSgpO2Z1bmN0aW9uIGwoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBoJiYxJmUuc312YXIgbT1mdW5jdGlvbihlKXt2YXIgcj1lLnByb2plY3RJZCx0PWUuZGF0YXNldCxuPWUudG9rZW4sbz1lLmRvY3VtZW50TGltaXQ7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoZmV0Y2goXCJodHRwczovL1wiK3IrXCIuYXBpLnNhbml0eS5pby92MS9kYXRhL2V4cG9ydC9cIit0LHtjcmVkZW50aWFsczpcImluY2x1ZGVcIixoZWFkZXJzOm4/e0F1dGhvcml6YXRpb246XCJCZWFyZXIgXCIrbn06dm9pZCAwfSkpLnRoZW4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcihyKXt2YXIgdCxuLGk9ZnVuY3Rpb24oZSl7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlYWQgYm9keSBmcm9tIHJlc3BvbnNlXCIpO3ZhciByLHQ9ITE7ZnVuY3Rpb24gbigpe3Q9ITAsciYmci5jYW5jZWwoKX1yZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKHtzdGFydDpmdW5jdGlvbihvKXtyPWUuZ2V0UmVhZGVyKCk7dmFyIGk9bmV3IFRleHREZWNvZGVyLHU9XCJcIjtyLnJlYWQoKS50aGVuKGZ1bmN0aW9uIGUoYyl7dHJ5e2lmKGMuZG9uZSlyZXR1cm4gdD9Qcm9taXNlLnJlc29sdmUoKTowPT09KHU9dS50cmltKCkpLmxlbmd0aD8oby5jbG9zZSgpLFByb21pc2UucmVzb2x2ZSgpKTooby5lbnF1ZXVlKEpTT04ucGFyc2UodSkpLG8uY2xvc2UoKSxQcm9taXNlLnJlc29sdmUoKSk7Zm9yKHZhciBzPSh1Kz1pLmRlY29kZShjLnZhbHVlLHtzdHJlYW06ITB9KSkuc3BsaXQoXCJcXG5cIiksYT0wO2E8cy5sZW5ndGgtMTsrK2Epe3ZhciBmPXNbYV0udHJpbSgpO2lmKDA9PT1mLmxlbmd0aClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7dHJ5e28uZW5xdWV1ZShKU09OLnBhcnNlKGYpKX1jYXRjaChlKXtyZXR1cm4gby5lcnJvcihlKSxuKCksUHJvbWlzZS5yZXNvbHZlKCl9fWlmKHU9c1tzLmxlbmd0aC0xXSwhcilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7dmFyIGQ9ZnVuY3Rpb24odCxuKXt0cnl7dmFyIG89UHJvbWlzZS5yZXNvbHZlKHIucmVhZCgpKS50aGVuKGZ1bmN0aW9uKHIpe2Uocil9KX1jYXRjaChlKXtyZXR1cm4gbihlKX1yZXR1cm4gbyYmby50aGVuP28udGhlbih2b2lkIDAsbik6b30oMCxmdW5jdGlvbihlKXtvLmVycm9yKGUpfSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShkJiZkLnRoZW4/ZC50aGVuKGZ1bmN0aW9uKCl7fSk6dm9pZCAwKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSkuY2F0Y2goZnVuY3Rpb24oZSl7cmV0dXJuIG8uZXJyb3IoZSl9KX0sY2FuY2VsOm59KX0oZS5ib2R5KS5nZXRSZWFkZXIoKSx1PVtdLGM9ZnVuY3Rpb24oZSxyKXt2YXIgdDtkb3t2YXIgbj1lKCk7aWYobiYmbi50aGVuKXtpZighbChuKSl7dD0hMDticmVha31uPW4udn12YXIgbz1yKCk7aWYobChvKSYmKG89by52KSwhbylyZXR1cm4gbn13aGlsZSghby50aGVuKTt2YXIgaT1uZXcgaCx1PXYuYmluZChudWxsLGksMik7cmV0dXJuKHQ/bi50aGVuKGMpOm8udGhlbihzKSkudGhlbih2b2lkIDAsdSksaTtmdW5jdGlvbiBjKHQpe2ZvcihuPXQ7bChvPXIoKSkmJihvPW8udiksbzspe2lmKG8udGhlbilyZXR1cm4gdm9pZCBvLnRoZW4ocykudGhlbih2b2lkIDAsdSk7aWYoKG49ZSgpKSYmbi50aGVuKXtpZighbChuKSlyZXR1cm4gdm9pZCBuLnRoZW4oYykudGhlbih2b2lkIDAsdSk7bj1uLnZ9fXYoaSwxLG4pfWZ1bmN0aW9uIHModCl7aWYodCl7ZG97aWYoKG49ZSgpKSYmbi50aGVuKXtpZighbChuKSlyZXR1cm4gdm9pZCBuLnRoZW4oYykudGhlbih2b2lkIDAsdSk7bj1uLnZ9aWYobCh0PXIoKSkmJih0PXQudiksIXQpcmV0dXJuIHZvaWQgdihpLDEsbil9d2hpbGUoIXQudGhlbik7dC50aGVuKHMpLnRoZW4odm9pZCAwLHUpfWVsc2UgdihpLDEsbil9fShmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoaS5yZWFkKCkpLnRoZW4oZnVuY3Rpb24oZSl7aWYoZnVuY3Rpb24oZSl7cmV0dXJuISFlJiZcImVycm9yXCJpbiBlJiZcIm9iamVjdFwiPT10eXBlb2YgZS5lcnJvciYmbnVsbCE9PWUuZXJyb3ImJlwiZGVzY3JpcHRpb25cImluIGUuZXJyb3ImJlwic3RyaW5nXCI9PXR5cGVvZiBlLmVycm9yLmRlc2NyaXB0aW9uJiYhKFwiX2lkXCJpbiBlKX0obj0odD1lKS52YWx1ZSkpdGhyb3cgbmV3IEVycm9yKFwiRXJyb3Igc3RyZWFtaW5nIGRhdGFzZXQ6IFwiK24uZXJyb3IpO2lmKG4mJiFuLl9pZC5zdGFydHNXaXRoKFwiXy5cIikmJnUucHVzaChuKSxvJiZ1Lmxlbmd0aD5vKXRocm93IGkuY2FuY2VsKFwiUmVhY2hlZCBkb2N1bWVudCBsaW1pdFwiKSxuZXcgRXJyb3IoXCJFcnJvciBzdHJlYW1pbmcgZGF0YXNldDogUmVhY2hlZCBsaW1pdCBvZiBcIitvK1wiIGRvY3VtZW50c1wiKX0pfSxmdW5jdGlvbigpe3JldHVybiF0LmRvbmV9KTtyZXR1cm4gYyYmYy50aGVuP2MudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdX0pOnV9dmFyIHQ9ZnVuY3Rpb24oKXtpZigyMDAhPT1lLnN0YXR1cylyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUuanNvbigpKS50aGVuKGZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIkVycm9yIHN0cmVhbWluZyBkYXRhc2V0OiBcIisoXCJvYmplY3RcIj09dHlwZW9mKHI9ZSkmJlwiZXJyb3JcImluIHImJlwibWVzc2FnZVwiaW4gcj9yLm1lc3NhZ2V8fHIuZXJyb3I6XCI8dW5rbm93biBlcnJvcj5cIikpO3ZhciByfSl9KCk7cmV0dXJuIHQmJnQudGhlbj90LnRoZW4ocik6cigpfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX07ZXhwb3J0cy5ncm9xPXIsZXhwb3J0cy5ncm9xU3RvcmU9ZnVuY3Rpb24oZSl7aWYoZnVuY3Rpb24oKXt2YXIgZT1bXCJFdmVudFNvdXJjZVwiLFwiUmVhZGFibGVTdHJlYW1cIixcImZldGNoXCJdLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hKGUgaW4gd2luZG93KX0pO2lmKGUubGVuZ3RoPjApdGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlciBub3Qgc3VwcG9ydGVkLiBNaXNzaW5nIGJyb3dzZXIgQVBJczogXCIrZS5qb2luKFwiLCBcIikpfSgpLGUudG9rZW4pdGhyb3cgbmV3IEVycm9yKFwiYHRva2VuYCBvcHRpb24gbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgaW4gYnJvd3NlclwiKTtyZXR1cm4gZnVuY3Rpb24oZSxpKXt2YXIgdixoPWZ1bmN0aW9uKGUscil7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUobCgpKS50aGVuKGZ1bmN0aW9uKCl7dmFyIHQ9by5wYXJzZShlKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG8uZXZhbHVhdGUodCx7ZGF0YXNldDptLHBhcmFtczpyfSkpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0KCl9KX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LGw9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIHZ8fCh2PWZ1bmN0aW9uKGUscix0KXt2YXIgbj10LmdldERvY3VtZW50cyxvPXQuRXZlbnRTb3VyY2UsaT1lLnByb2plY3RJZCxkPWUuZGF0YXNldCx2PWUub3ZlcmxheURyYWZ0cyxoPWUuZG9jdW1lbnRMaW1pdDtpZighZS5saXN0ZW4pcmV0dXJue3Vuc3Vic2NyaWJlOmYsbG9hZGVkOm4oe3Byb2plY3RJZDppLGRhdGFzZXQ6ZCxkb2N1bWVudExpbWl0Omh9KS50aGVuKGopLnRoZW4oZil9O3ZhciBsLG0scCx3LGIsZyx5PW5ldyBNYXAsUD1bXSxFPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGUscil7bT1lLHA9cn0pO3JldHVybnt1bnN1YnNjcmliZTpjKG8sZSx7bmV4dDpmdW5jdGlvbihlKXtsPyhmdW5jdGlvbihlKXtpZihlLmVmZmVjdHMmJiFlLmRvY3VtZW50SWQuc3RhcnRzV2l0aChcIl8uXCIpKXt2YXIgcj15LmdldChlLmRvY3VtZW50SWQpfHxudWxsOyFmdW5jdGlvbihlLHIpe3ZhciB0PXkuZ2V0KGUpLG49bHx8W10sbz10P24uaW5kZXhPZih0KTotMTstMT09PW8mJnI/KG4ucHVzaChyKSx5LnNldChlLHIpKTpyPyhuLnNwbGljZShvLDEscikseS5zZXQoZSxyKSk6KG4uc3BsaWNlKG8sMSkseS5kZWxldGUoZSkpfShlLmRvY3VtZW50SWQsYShyLGUuZWZmZWN0cy5hcHBseSkpfX0oZSksZnVuY3Rpb24oZSxyKXtjbGVhclRpbWVvdXQoZyksYiE9PXIudHJhbnNhY3Rpb25JZCYmdz8oaih3KSxiPXZvaWQgMCk6KGI9ci50cmFuc2FjdGlvbklkLHc9ZS5zbGljZSgpKSxnPXNldFRpbWVvdXQoaiwyNSxlLnNsaWNlKCkpfShsLGUpKTpQLnB1c2goZSl9LG9wZW46ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuKHtwcm9qZWN0SWQ6aSxkYXRhc2V0OmQsZG9jdW1lbnRMaW1pdDpofSkpLnRoZW4oZnVuY3Rpb24oZSl7KGw9ZnVuY3Rpb24oZSxyKXt2YXIgdD1uZXcgTWFwO3JldHVybiByLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHI9dC5nZXQoZS5kb2N1bWVudElkKXx8W107ci5wdXNoKGUpLHQuc2V0KGUuZG9jdW1lbnRJZCxyKX0pLHQuZm9yRWFjaChmdW5jdGlvbihyLHQpe3ZhciBuPWUuZmluZChmdW5jdGlvbihlKXtyZXR1cm4gZS5faWQ9PT10fSk7aWYobil7dmFyIG89ITEsaT1uO3IuZm9yRWFjaChmdW5jdGlvbihlKXsobz1vfHxlLnByZXZpb3VzUmV2PT09bi5fcmV2KSYmZS5lZmZlY3RzJiYoaT1hKGksZS5lZmZlY3RzLmFwcGx5KSl9KSxlLnNwbGljZShlLmluZGV4T2YobiksMSxpKX1lbHNlIGNvbnNvbGUud2FybihcIlJlY2VpdmVkIG11dGF0aW9uIGZvciBtaXNzaW5nIGRvY3VtZW50ICVzXCIsdCl9KSxlfShlLFApKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB5LnNldChlLl9pZCxlKX0pLGoobCksbSgpfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sZXJyb3I6ZnVuY3Rpb24oZSl7cmV0dXJuIHAoZSl9fSkudW5zdWJzY3JpYmUsbG9hZGVkOkV9O2Z1bmN0aW9uIGooZSl7dz12b2lkIDAsZz12b2lkIDAsYj12b2lkIDAscih2P2Z1bmN0aW9uKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1yLmdldChzKGUpKTtlLl9pZC5zdGFydHNXaXRoKFwiZHJhZnRzLlwiKT9yLnNldChzKGUpLGZ1bmN0aW9uKGUpe3JldHVybiB1KHt9LGUse19pZDpzKGUpfSl9KGUpKTp0fHxyLnNldChlLl9pZCxlKX0pLEFycmF5LmZyb20oci52YWx1ZXMoKSl9KGUpOmUpfX0oZSxmdW5jdGlvbihlKXttPWUscCgpfSxpKSksUHJvbWlzZS5yZXNvbHZlKHYubG9hZGVkKS50aGVuKGZ1bmN0aW9uKCl7fSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sbT1bXSxwPW4udGhyb3R0bGUoZS5zdWJzY3JpcHRpb25UaHJvdHRsZU1zfHw1MCxmdW5jdGlvbigpe3cuZm9yRWFjaChiKX0pLHc9W107ZnVuY3Rpb24gYihlKXtyZXR1cm4gaChlLnF1ZXJ5LGUucGFyYW1zKS50aGVuKGZ1bmN0aW9uKHIpe1wicHJldmlvdXNSZXN1bHRcImluIGUmJnQoZS5wcmV2aW91c1Jlc3VsdCxyKXx8KGUucHJldmlvdXNSZXN1bHQ9cixlLmNhbGxiYWNrKHZvaWQgMCxyKSl9KS5jYXRjaChmdW5jdGlvbihyKXtlLmNhbGxiYWNrKHIpfSl9cmV0dXJue3F1ZXJ5OmgsZ2V0RG9jdW1lbnQ6ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUobCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGgocihkKCkpLHtpZDplfSl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxnZXREb2N1bWVudHM6ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUobCgpKS50aGVuKGZ1bmN0aW9uKCl7dmFyIHI9ZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuJypbX2lkID09IFwiJytlKydcIl1bMF0nfSkuam9pbihcIixcXG5cIik7cmV0dXJuIGgoXCJbXCIrcitcIl1cIil9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxzdWJzY3JpYmU6ZnVuY3Rpb24ocix0LG4pe2lmKCFlLmxpc3Rlbil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGBzdWJzY3JpYmUoKWAgd2l0aG91dCBgbGlzdGVuOiB0cnVlYFwiKTt2YXIgbz17cXVlcnk6cixwYXJhbXM6dCxjYWxsYmFjazpufTt3LnB1c2gobyk7dmFyIGk9ITE7cmV0dXJuIGIobykse3Vuc3Vic2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJuIGl8fChpPSEwLHcuc3BsaWNlKHcuaW5kZXhPZihvKSwxKSksUHJvbWlzZS5yZXNvbHZlKCl9fX0sY2xvc2U6ZnVuY3Rpb24oKXtyZXR1cm4gcC5jYW5jZWwoKSx2P3YudW5zdWJzY3JpYmUoKTpQcm9taXNlLnJlc29sdmUoKX19fShlLHtFdmVudFNvdXJjZTp3aW5kb3cuRXZlbnRTb3VyY2UsZ2V0RG9jdW1lbnRzOm19KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncm9xLXN0b3JlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCJjbGFzcyBNYXJrUHJvY2Vzc29yIHtcbiAgY29uc3RydWN0b3IodmlzaXRvciwgc3RyaW5nLCBtYXJrcykge1xuICAgIHRoaXMudmlzaXRvciA9IHZpc2l0b3I7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5tYXJrcyA9IG1hcmtzO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgaGFzTWFyayhwb3MpIHtcbiAgICBpZiAocG9zID09PSB2b2lkIDApIHtcbiAgICAgIHBvcyA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5kZXggKyBwb3MgPCB0aGlzLm1hcmtzLmxlbmd0aDtcbiAgfVxuXG4gIGdldE1hcmsocG9zKSB7XG4gICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBwb3MgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1hcmtzW3RoaXMuaW5kZXggKyBwb3NdO1xuICB9XG5cbiAgc2hpZnQoKSB7XG4gICAgdGhpcy5pbmRleCArPSAxO1xuICB9XG5cbiAgcHJvY2VzcygpIHtcbiAgICB2YXIgbWFyayA9IHRoaXMubWFya3NbdGhpcy5pbmRleF07XG4gICAgdGhpcy5zaGlmdCgpO1xuICAgIHZhciBmdW5jID0gdGhpcy52aXNpdG9yW21hcmsubmFtZV07XG4gICAgaWYgKCFmdW5jKSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gaGFuZGxlcjogJyArIG1hcmsubmFtZSk7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLnZpc2l0b3IsIHRoaXMsIG1hcmspO1xuICB9XG5cbiAgcHJvY2Vzc1N0cmluZygpIHtcbiAgICB0aGlzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc1N0cmluZ0VuZCgpO1xuICB9XG5cbiAgcHJvY2Vzc1N0cmluZ0VuZCgpIHtcbiAgICB2YXIgcHJldiA9IHRoaXMubWFya3NbdGhpcy5pbmRleCAtIDFdO1xuICAgIHZhciBjdXJyID0gdGhpcy5tYXJrc1t0aGlzLmluZGV4XTtcbiAgICB0aGlzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nLnNsaWNlKHByZXYucG9zaXRpb24sIGN1cnIucG9zaXRpb24pO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgdmFyIG1ldGhvZDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cblxuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5cbmZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBfQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gIHZhciBmcm9udCwgYmFjaztcblxuICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBfQXdhaXRWYWx1ZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh3cmFwcGVkQXdhaXQgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAod3JhcHBlZEF3YWl0KSB7XG4gICAgICAgICAgcmVzdW1lKGtleSA9PT0gXCJyZXR1cm5cIiA/IFwicmV0dXJuXCIgOiBcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgaWYgKGZyb250KSB7XG4gICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG59O1xuXG5fQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgX0FzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IF9Bd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gIHZhciBpdDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlmIChpdCkgbyA9IGl0O1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgcmV0dXJuIGl0Lm5leHQuYmluZChpdCk7XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZS5cclxuICovXG5mdW5jdGlvbiBnZXRUeXBlKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJ251bGwnO1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuICdhcnJheSc7XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgUmFuZ2UpIHJldHVybiAncmFuZ2UnO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIFBhaXIpIHJldHVybiAncGFpcic7XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgUGF0aCkgcmV0dXJuICdwYXRoJztcbiAgcmV0dXJuIHR5cGVvZiBkYXRhO1xufVxuY2xhc3MgU3RhdGljVmFsdWUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIGdldFR5cGUodGhpcy5kYXRhKTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5kYXRhO1xuICAgIH0pKCk7XG4gIH1cblxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiogKGRhdGEpIHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoZGF0YSksIF9zdGVwNDsgIShfc3RlcDQgPSBfaXRlcmF0b3I0KCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcDQudmFsdWU7XG4gICAgICAgICAgeWllbGQgbmV3IFN0YXRpY1ZhbHVlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KHRoaXMuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGl0ZXJhdGUgb3ZlcjogJyArIHRoaXMuZ2V0VHlwZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhID09PSAnYm9vbGVhbicgJiYgdGhpcy5kYXRhID09PSB0cnVlO1xuICB9XG5cbn1cbnZhciBOVUxMX1ZBTFVFID0gLyojX19QVVJFX18qL25ldyBTdGF0aWNWYWx1ZShudWxsKTtcbnZhciBUUlVFX1ZBTFVFID0gLyojX19QVVJFX18qL25ldyBTdGF0aWNWYWx1ZSh0cnVlKTtcbnZhciBGQUxTRV9WQUxVRSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGljVmFsdWUoZmFsc2UpO1xuLyoqXHJcbiAqIEEgU3RyZWFtVmFsdWUgYWNjZXB0cyBhIGdlbmVyYXRvciB3aGljaCB5aWVsZHMgdmFsdWVzLlxyXG4gKi9cblxuY2xhc3MgU3RyZWFtVmFsdWUge1xuICBjb25zdHJ1Y3RvcihnZW5lcmF0b3IpIHtcbiAgICB0aGlzLmdlbmVyYXRvciA9IGdlbmVyYXRvcjtcbiAgICB0aGlzLnRpY2tlciA9IG51bGw7XG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9hc3luY0l0ZXJhdG9yKF90aGlzMyksIF9zdGVwLCBfdmFsdWU7IF9zdGVwID0geWllbGQgX2l0ZXJhdG9yLm5leHQoKSwgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IF9zdGVwLmRvbmUsIF92YWx1ZSA9IHlpZWxkIF9zdGVwLnZhbHVlLCAhX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgICAgcmVzdWx0LnB1c2goeWllbGQgdmFsdWUuZ2V0KCkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgeWllbGQgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pKCk7XG4gIH1cblxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gX3dyYXBBc3luY0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBmb3IgKDsgaSA8IF90aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB5aWVsZCBfdGhpcy5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmlzRG9uZSkgcmV0dXJuO1xuICAgICAgICB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfdGhpcy5fbmV4dFRpY2soKSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX25leHRUaWNrKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMudGlja2VyKSByZXR1cm4gdGhpcy50aWNrZXI7XG4gICAgdmFyIGN1cnJlbnRSZXNvbHZlcjtcblxuICAgIHZhciBzZXR1cFRpY2tlciA9ICgpID0+IHtcbiAgICAgIHRoaXMudGlja2VyID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGN1cnJlbnRSZXNvbHZlciA9IHJlc29sdmU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHRpY2sgPSAoKSA9PiB7XG4gICAgICBjdXJyZW50UmVzb2x2ZXIoKTtcbiAgICAgIHNldHVwVGlja2VyKCk7XG4gICAgfTtcblxuICAgIHZhciBmZXRjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfYXN5bmNJdGVyYXRvcihfdGhpczQuZ2VuZXJhdG9yKCkpLCBfc3RlcDIsIF92YWx1ZTI7IF9zdGVwMiA9IHlpZWxkIF9pdGVyYXRvcjIubmV4dCgpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IF9zdGVwMi5kb25lLCBfdmFsdWUyID0geWllbGQgX3N0ZXAyLnZhbHVlLCAhX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3ZhbHVlMjtcblxuICAgICAgICAgICAgX3RoaXM0LmRhdGEucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIHRpY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgeWllbGQgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM0LmlzRG9uZSA9IHRydWU7XG4gICAgICAgIHRpY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gZmV0Y2goKSB7XG4gICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBzZXR1cFRpY2tlcigpO1xuICAgIGZldGNoKCk7XG4gICAgcmV0dXJuIHRoaXMudGlja2VyO1xuICB9XG5cbn1cbmNsYXNzIE1hcHBlclZhbHVlIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICByZXR1cm4geWllbGQgX3RoaXM1LnZhbHVlLmdldCgpO1xuICAgIH0pKCk7XG4gIH1cblxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgdmFyIGl0ZXJhdG9yID0gdmFsdWVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgIHJldHVybiBpdGVyYXRvci5jYWxsKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuY2xhc3MgUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgZXhjbHVzaXZlKSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5leGNsdXNpdmUgPSBleGNsdXNpdmU7XG4gIH1cblxuICBzdGF0aWMgaXNDb25zdHJ1Y3RpYmxlKGxlZnRUeXBlLCByaWdodFR5cGUpIHtcbiAgICBpZiAobGVmdFR5cGUgPT09IHJpZ2h0VHlwZSkge1xuICAgICAgaWYgKGxlZnRUeXBlID09PSAnbnVtYmVyJykgcmV0dXJuIHRydWU7XG4gICAgICBpZiAobGVmdFR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChsZWZ0VHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0V4Y2x1c2l2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leGNsdXNpdmU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIFt0aGlzLmxlZnQsIHRoaXMucmlnaHRdO1xuICB9XG5cbn1cbmNsYXNzIFBhaXIge1xuICBjb25zdHJ1Y3RvcihmaXJzdCwgc2Vjb25kKSB7XG4gICAgdGhpcy5maXJzdCA9IGZpcnN0O1xuICAgIHRoaXMuc2Vjb25kID0gc2Vjb25kO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBbdGhpcy5maXJzdCwgdGhpcy5zZWNvbmRdO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIHBhdGhSZWdFeHAocGF0dGVybikge1xuICB2YXIgcmUgPSBbXTtcblxuICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShwYXR0ZXJuLnNwbGl0KCcuJykpLCBfc3RlcDU7ICEoX3N0ZXA1ID0gX2l0ZXJhdG9yNSgpKS5kb25lOykge1xuICAgIHZhciBwYXJ0ID0gX3N0ZXA1LnZhbHVlO1xuXG4gICAgaWYgKHBhcnQgPT09ICcqJykge1xuICAgICAgcmUucHVzaCgnW14uXSsnKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcqKicpIHtcbiAgICAgIHJlLnB1c2goJy4qJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlLnB1c2goZXNjYXBlUmVnRXhwKHBhcnQpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cIiArIHJlLmpvaW4oJy4nKSArIFwiJFwiKTtcbn1cblxuY2xhc3MgUGF0aCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMucGF0dGVyblJlID0gcGF0aFJlZ0V4cChwYXR0ZXJuKTtcbiAgfVxuXG4gIG1hdGNoZXMoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0dGVyblJlLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuO1xuICB9XG5cbn1cbmZ1bmN0aW9uIGZyb21OdW1iZXIobnVtKSB7XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtKSkge1xuICAgIHJldHVybiBuZXcgU3RhdGljVmFsdWUobnVtKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0l0ZXJhdG9yKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmoubmV4dCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gZnJvbUpTKHZhbCkge1xuICBpZiAoaXNJdGVyYXRvcih2YWwpKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJlYW1WYWx1ZSggLyojX19QVVJFX18qL193cmFwQXN5bmNHZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG5cbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfYXN5bmNJdGVyYXRvcih2YWwpLCBfc3RlcDMsIF92YWx1ZTM7IF9zdGVwMyA9IHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9pdGVyYXRvcjMubmV4dCgpKSwgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSBfc3RlcDMuZG9uZSwgX3ZhbHVlMyA9IHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9zdGVwMy52YWx1ZSksICFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMzsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gX3ZhbHVlMztcbiAgICAgICAgICB5aWVsZCBuZXcgU3RhdGljVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgIHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9pdGVyYXRvcjMucmV0dXJuKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgU3RhdGljVmFsdWUodmFsKTtcbiAgfVxufVxuXG52YXIgVFlQRV9PUkRFUiA9IHtcbiAgbnVtYmVyOiAxLFxuICBzdHJpbmc6IDIsXG4gIGJvb2xlYW46IDNcbn07XG5mdW5jdGlvbiBwYXJ0aWFsQ29tcGFyZShhLCBiKSB7XG4gIHZhciBhVHlwZSA9IGdldFR5cGUoYSk7XG4gIHZhciBiVHlwZSA9IGdldFR5cGUoYik7XG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBudWxsO1xuXG4gIHN3aXRjaCAoYVR5cGUpIHtcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIGEgLSBiO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gdG90YWxDb21wYXJlKGEsIGIpIHtcbiAgdmFyIGFUeXBlID0gZ2V0VHlwZShhKTtcbiAgdmFyIGJUeXBlID0gZ2V0VHlwZShiKTtcbiAgdmFyIGFUeXBlT3JkZXIgPSBUWVBFX09SREVSW2FUeXBlXSB8fCAxMDA7XG4gIHZhciBiVHlwZU9yZGVyID0gVFlQRV9PUkRFUltiVHlwZV0gfHwgMTAwO1xuXG4gIGlmIChhVHlwZU9yZGVyICE9PSBiVHlwZU9yZGVyKSB7XG4gICAgcmV0dXJuIGFUeXBlT3JkZXIgLSBiVHlwZU9yZGVyO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHBhcnRpYWxDb21wYXJlKGEsIGIpO1xuICBpZiAocmVzdWx0ID09PSBudWxsKSByZXN1bHQgPSAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBoYXNSZWZlcmVuY2UodmFsdWUsIGlkKSB7XG4gIHN3aXRjaCAoZ2V0VHlwZSh2YWx1ZSkpIHtcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSh2YWx1ZSksIF9zdGVwMzsgIShfc3RlcDMgPSBfaXRlcmF0b3IzKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciB2ID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICBpZiAoaGFzUmVmZXJlbmNlKHYsIGlkKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2YWx1ZS5fcmVmID09PSBpZCkgcmV0dXJuIHRydWU7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCR2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHZhbHVlKTsgX2kgPCBfT2JqZWN0JHZhbHVlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF92ID0gX09iamVjdCR2YWx1ZXNbX2ldO1xuICAgICAgICBpZiAoaGFzUmVmZXJlbmNlKF92LCBpZCkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY291bnRVVEY4KHN0cikge1xuICB2YXIgY291bnQgPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGJmZikge1xuICAgICAgLy8gSGlnaCBzdXJyb2dhdGUuIERvbid0IGNvdW50IHRoaXMuXG4gICAgICAvLyBCeSBvbmx5IGNvdW50aW5nIHRoZSBsb3cgc3Vycm9nYXRlIHdlIHdpbGwgY29ycmVjdGx5XG4gICAgICAvLyBjb3VudCB0aGUgbnVtYmVyIG9mIFVURi04IGNvZGUgcG9pbnRzLlxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY291bnQrKztcbiAgfVxuXG4gIHJldHVybiBjb3VudDtcbn1cblxudmFyIGZ1bmN0aW9ucyA9IHt9O1xuXG5mdW5jdGlvbnMuY29hbGVzY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX2NvYWxlc2NlID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoYXJncywgc2NvcGUsIGV4ZWN1dGUpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShhcmdzKSwgX3N0ZXA0OyAhKF9zdGVwNCA9IF9pdGVyYXRvcjQoKSkuZG9uZTspIHtcbiAgICAgIHZhciBhcmcgPSBfc3RlcDQudmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCBleGVjdXRlKGFyZywgc2NvcGUpO1xuICAgICAgaWYgKHZhbHVlLmdldFR5cGUoKSAhPT0gJ251bGwnKSByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNvYWxlc2NlKF94LCBfeDIsIF94Mykge1xuICAgIHJldHVybiBfY29hbGVzY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjb2FsZXNjZTtcbn0oKTtcblxuZnVuY3Rpb25zLmNvdW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9jb3VudCA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGFyZ3MsIHNjb3BlLCBleGVjdXRlKSB7XG4gICAgdmFyIGlubmVyID0geWllbGQgZXhlY3V0ZShhcmdzWzBdLCBzY29wZSk7XG4gICAgaWYgKGlubmVyLmdldFR5cGUoKSAhPT0gJ2FycmF5JykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgdmFyIG51bSA9IDA7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXG4gICAgdmFyIF9pdGVyYXRvckVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9hc3luY0l0ZXJhdG9yKGlubmVyKSwgX3N0ZXAsIF92YWx1ZTsgX3N0ZXAgPSB5aWVsZCBfaXRlcmF0b3IubmV4dCgpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gX3N0ZXAuZG9uZSwgX3ZhbHVlID0geWllbGQgX3N0ZXAudmFsdWUsICFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgXyA9IF92YWx1ZTtcbiAgICAgICAgbnVtKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgIHlpZWxkIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKG51bSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNvdW50KF94NCwgX3g1LCBfeDYpIHtcbiAgICByZXR1cm4gX2NvdW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY291bnQ7XG59KCk7XG5cbmZ1bmN0aW9ucy5jb3VudC5hcml0eSA9IDE7XG5cbmZ1bmN0aW9ucy5kZWZpbmVkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9kZWZpbmVkID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoYXJncywgc2NvcGUsIGV4ZWN1dGUpIHtcbiAgICB2YXIgaW5uZXIgPSB5aWVsZCBleGVjdXRlKGFyZ3NbMF0sIHNjb3BlKTtcbiAgICByZXR1cm4gaW5uZXIuZ2V0VHlwZSgpID09PSAnbnVsbCcgPyBGQUxTRV9WQUxVRSA6IFRSVUVfVkFMVUU7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRlZmluZWQoX3g3LCBfeDgsIF94OSkge1xuICAgIHJldHVybiBfZGVmaW5lZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmluZWQ7XG59KCk7XG5cbmZ1bmN0aW9ucy5kZWZpbmVkLmFyaXR5ID0gMTtcblxuZnVuY3Rpb25zLmlkZW50aXR5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9pZGVudGl0eSA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKCdtZScpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpZGVudGl0eShfeDEwKSB7XG4gICAgcmV0dXJuIF9pZGVudGl0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aXR5O1xufSgpO1xuXG5mdW5jdGlvbnMuaWRlbnRpdHkuYXJpdHkgPSAwO1xuXG5mdW5jdGlvbnMubGVuZ3RoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9sZW5ndGggPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChhcmdzLCBzY29wZSwgZXhlY3V0ZSkge1xuICAgIHZhciBpbm5lciA9IHlpZWxkIGV4ZWN1dGUoYXJnc1swXSwgc2NvcGUpO1xuXG4gICAgaWYgKGlubmVyLmdldFR5cGUoKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBkYXRhID0geWllbGQgaW5uZXIuZ2V0KCk7XG4gICAgICByZXR1cm4gZnJvbU51bWJlcihjb3VudFVURjgoZGF0YSkpO1xuICAgIH1cblxuICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICB9KTtcblxuICBmdW5jdGlvbiBsZW5ndGgoX3gxMSwgX3gxMiwgX3gxMykge1xuICAgIHJldHVybiBfbGVuZ3RoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gbGVuZ3RoO1xufSgpO1xuXG5mdW5jdGlvbnMubGVuZ3RoLmFyaXR5ID0gMTtcblxuZnVuY3Rpb25zLnBhdGggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3BhdGggPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChhcmdzLCBzY29wZSwgZXhlY3V0ZSkge1xuICAgIHZhciBpbm5lciA9IHlpZWxkIGV4ZWN1dGUoYXJnc1swXSwgc2NvcGUpO1xuICAgIGlmIChpbm5lci5nZXRUeXBlKCkgIT09ICdzdHJpbmcnKSByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICB2YXIgc3RyID0geWllbGQgaW5uZXIuZ2V0KCk7XG4gICAgcmV0dXJuIG5ldyBTdGF0aWNWYWx1ZShuZXcgUGF0aChzdHIpKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcGF0aChfeDE0LCBfeDE1LCBfeDE2KSB7XG4gICAgcmV0dXJuIF9wYXRoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn0oKTtcblxuZnVuY3Rpb25zLnBhdGguYXJpdHkgPSAxO1xuXG5mdW5jdGlvbnMuc2VsZWN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9zZWxlY3QgPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChhcmdzLCBzY29wZSwgZXhlY3V0ZSkge1xuICAgIC8vIEZpcnN0IGNoZWNrIGlmIGV2ZXJ5dGhpbmcgaXMgdmFsaWQ6XG4gICAgdmFyIHNlZW5GYWxsYmFjayA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yNSA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoYXJncyksIF9zdGVwNTsgIShfc3RlcDUgPSBfaXRlcmF0b3I1KCkpLmRvbmU7KSB7XG4gICAgICB2YXIgYXJnID0gX3N0ZXA1LnZhbHVlO1xuICAgICAgaWYgKHNlZW5GYWxsYmFjaykgcmV0dXJuIE5VTExfVkFMVUU7XG5cbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ1BhaXInKSA7IGVsc2Uge1xuICAgICAgICBzZWVuRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGFyZ3MpLCBfc3RlcDY7ICEoX3N0ZXA2ID0gX2l0ZXJhdG9yNigpKS5kb25lOykge1xuICAgICAgdmFyIF9hcmcgPSBfc3RlcDYudmFsdWU7XG5cbiAgICAgIGlmIChfYXJnLnR5cGUgPT09ICdQYWlyJykge1xuICAgICAgICB2YXIgY29uZCA9IHlpZWxkIGV4ZWN1dGUoX2FyZy5sZWZ0LCBzY29wZSk7XG5cbiAgICAgICAgaWYgKGNvbmQuZ2V0Qm9vbGVhbigpKSB7XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIGV4ZWN1dGUoX2FyZy5yaWdodCwgc2NvcGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geWllbGQgZXhlY3V0ZShfYXJnLCBzY29wZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNlbGVjdChfeDE3LCBfeDE4LCBfeDE5KSB7XG4gICAgcmV0dXJuIF9zZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3Q7XG59KCk7XG5cbmZ1bmN0aW9ucy5yZWZlcmVuY2VzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWZlcmVuY2VzID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoYXJncywgc2NvcGUsIGV4ZWN1dGUpIHtcbiAgICB2YXIgaWRWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUoYXJnc1swXSwgc2NvcGUpO1xuICAgIGlmIChpZFZhbHVlLmdldFR5cGUoKSAhPT0gJ3N0cmluZycpIHJldHVybiBGQUxTRV9WQUxVRTtcbiAgICB2YXIgaWQgPSB5aWVsZCBpZFZhbHVlLmdldCgpO1xuICAgIHZhciBzY29wZVZhbHVlID0gc2NvcGUudmFsdWU7XG4gICAgcmV0dXJuIGhhc1JlZmVyZW5jZShzY29wZVZhbHVlLCBpZCkgPyBUUlVFX1ZBTFVFIDogRkFMU0VfVkFMVUU7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlZmVyZW5jZXMoX3gyMCwgX3gyMSwgX3gyMikge1xuICAgIHJldHVybiBfcmVmZXJlbmNlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZXM7XG59KCk7XG5cbmZ1bmN0aW9ucy5yZWZlcmVuY2VzLmFyaXR5ID0gMTtcblxuZnVuY3Rpb25zLnJvdW5kID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yb3VuZCA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGFyZ3MsIHNjb3BlLCBleGVjdXRlKSB7XG4gICAgdmFyIHZhbHVlID0geWllbGQgZXhlY3V0ZShhcmdzWzBdLCBzY29wZSk7XG4gICAgaWYgKHZhbHVlLmdldFR5cGUoKSAhPT0gJ251bWJlcicpIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgIHZhciBudW0gPSB5aWVsZCB2YWx1ZS5nZXQoKTtcbiAgICB2YXIgcHJlYyA9IDA7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHZhciBwcmVjVmFsdWUgPSB5aWVsZCBleGVjdXRlKGFyZ3NbMV0sIHNjb3BlKTtcbiAgICAgIGlmIChwcmVjVmFsdWUuZ2V0VHlwZSgpICE9PSAnbnVtYmVyJykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICBwcmVjID0geWllbGQgcHJlY1ZhbHVlLmdldCgpO1xuICAgIH1cblxuICAgIGlmIChwcmVjID09PSAwKSB7XG4gICAgICByZXR1cm4gZnJvbU51bWJlcihNYXRoLnJvdW5kKG51bSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnJvbU51bWJlcihOdW1iZXIobnVtLnRvRml4ZWQocHJlYykpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJvdW5kKF94MjMsIF94MjQsIF94MjUpIHtcbiAgICByZXR1cm4gX3JvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gcm91bmQ7XG59KCk7XG5cbmZ1bmN0aW9ucy5yb3VuZC5hcml0eSA9IGNvdW50ID0+IGNvdW50ID49IDEgJiYgY291bnQgPD0gMjtcblxuZnVuY3Rpb25zLm5vdyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfbm93ID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoYXJncywgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKHNjb3BlLnRpbWVzdGFtcCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG5vdyhfeDI2LCBfeDI3KSB7XG4gICAgcmV0dXJuIF9ub3cuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBub3c7XG59KCk7XG5cbmZ1bmN0aW9ucy5ub3cuYXJpdHkgPSAwO1xudmFyIHBpcGVGdW5jdGlvbnMgPSB7fTtcblxucGlwZUZ1bmN0aW9ucy5vcmRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfb3JkZXIgPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChiYXNlLCBhcmdzLCBzY29wZSwgZXhlY3V0ZSkge1xuICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vcnBldHJpY2gvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1hc3luYy10by1wcm9taXNlcy9pc3N1ZXMvNTlcbiAgICB5aWVsZCB0cnVlO1xuICAgIGlmIChiYXNlLmdldFR5cGUoKSAhPT0gJ2FycmF5JykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgdmFyIG1hcHBlcnMgPSBbXTtcbiAgICB2YXIgZGlyZWN0aW9ucyA9IFtdO1xuICAgIHZhciBuID0gMDtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjcgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGFyZ3MpLCBfc3RlcDc7ICEoX3N0ZXA3ID0gX2l0ZXJhdG9yNygpKS5kb25lOykge1xuICAgICAgdmFyIG1hcHBlciA9IF9zdGVwNy52YWx1ZTtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSAnYXNjJztcblxuICAgICAgaWYgKG1hcHBlci50eXBlID09PSAnRGVzYycpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ2Rlc2MnO1xuICAgICAgICBtYXBwZXIgPSBtYXBwZXIuYmFzZTtcbiAgICAgIH0gZWxzZSBpZiAobWFwcGVyLnR5cGUgPT09ICdBc2MnKSB7XG4gICAgICAgIG1hcHBlciA9IG1hcHBlci5iYXNlO1xuICAgICAgfVxuXG4gICAgICBtYXBwZXJzLnB1c2gobWFwcGVyKTtcbiAgICAgIGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb24pO1xuICAgICAgbisrO1xuICAgIH1cblxuICAgIHZhciBhdXggPSBbXTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcblxuICAgIHZhciBfaXRlcmF0b3JFcnJvcjI7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9hc3luY0l0ZXJhdG9yKGJhc2UpLCBfc3RlcDIsIF92YWx1ZTI7IF9zdGVwMiA9IHlpZWxkIF9pdGVyYXRvcjIubmV4dCgpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IF9zdGVwMi5kb25lLCBfdmFsdWUyID0geWllbGQgX3N0ZXAyLnZhbHVlLCAhX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBfdmFsdWUyO1xuICAgICAgICB2YXIgbmV3U2NvcGUgPSBzY29wZS5jcmVhdGVOZXN0ZWQodmFsdWUpO1xuICAgICAgICB2YXIgdHVwbGUgPSBbeWllbGQgdmFsdWUuZ2V0KCldO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGV4ZWN1dGUobWFwcGVyc1tpXSwgbmV3U2NvcGUpO1xuICAgICAgICAgIHR1cGxlLnB1c2goeWllbGQgcmVzdWx0LmdldCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF1eC5wdXNoKHR1cGxlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgIHlpZWxkIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdXguc29ydCgoYVR1cGxlLCBiVHVwbGUpID0+IHtcbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG47IF9pMisrKSB7XG4gICAgICAgIHZhciBjID0gdG90YWxDb21wYXJlKGFUdXBsZVtfaTIgKyAxXSwgYlR1cGxlW19pMiArIDFdKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbnNbX2kyXSA9PT0gJ2Rlc2MnKSBjID0gLWM7XG4gICAgICAgIGlmIChjICE9PSAwKSByZXR1cm4gYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBTdGF0aWNWYWx1ZShhdXgubWFwKHYgPT4gdlswXSkpO1xuICB9KTtcblxuICBmdW5jdGlvbiBvcmRlcihfeDI4LCBfeDI5LCBfeDMwLCBfeDMxKSB7XG4gICAgcmV0dXJuIF9vcmRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIG9yZGVyO1xufSgpO1xuXG5waXBlRnVuY3Rpb25zLm9yZGVyLmFyaXR5ID0gY291bnQgPT4gY291bnQgPj0gMTtcblxuZnVuY3Rpb24gU3RhdGUoKSB7fVxuXG5mdW5jdGlvbiBTdGVwKHRva2VuLCBwb3NpdGlvbikge1xuICB0aGlzLnRva2VuID0gdG9rZW47XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgdGhpcy5uZXh0RnJhbWVzID0gW107XG4gIHRoaXMuYWNjZXB0ZWRDb250ZXh0cyA9IFtdO1xuICB0aGlzLmNhbGxlcnMgPSB7fTtcbn1cblxuU3RlcC5wcm90b3R5cGUuaGFzTmV4dEZyYW1lcyA9IGZ1bmN0aW9uIGhhc05leHRGcmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLm5leHRGcmFtZXMubGVuZ3RoID4gMDtcbn07XG5cblN0ZXAucHJvdG90eXBlLmFkZE5leHRGcmFtZSA9IGZ1bmN0aW9uIGFkZE5leHRGcmFtZShmcmFtZSkge1xuICB0aGlzLm5leHRGcmFtZXMucHVzaChmcmFtZSk7XG59O1xuXG5TdGVwLnByb3RvdHlwZS53YXNBY2NlcHRlZCA9IGZ1bmN0aW9uIHdhc0FjY2VwdGVkKCkge1xuICByZXR1cm4gdGhpcy5hY2NlcHRlZENvbnRleHRzLmxlbmd0aCA+IDA7XG59O1xuXG5TdGVwLnByb3RvdHlwZS5hZGRBY2NlcHQgPSBmdW5jdGlvbiBhZGRBY2NlcHQoY29udGV4dCkge1xuICB0aGlzLmFjY2VwdGVkQ29udGV4dHMucHVzaChjb250ZXh0KTtcbn07XG5cblN0ZXAucHJvdG90eXBlLmFkZE1hcmsgPSBmdW5jdGlvbiBhZGRNYXJrKG5hbWUsIGNvbnRleHQsIG5leHRTdGF0ZSkge1xuICB2YXIgbWFyayA9IHtcbiAgICB0eXBlOiBcIm1hcmtcIixcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uXG4gIH07XG4gIHZhciBtYXJrcyA9IGNvbnRleHQubWFya3MgPyB7XG4gICAgdHlwZTogXCJjb25jYXRcIixcbiAgICBsZWZ0OiBjb250ZXh0Lm1hcmtzLFxuICAgIHJpZ2h0OiBtYXJrXG4gIH0gOiBtYXJrO1xuICB2YXIgbmV4dENvbnRleHQgPSBuZXcgQ29udGV4dChjb250ZXh0LmNhbGxlciwgbWFya3MpO1xuICB2YXIgbmV4dEZyYW1lID0gbmV3IEZyYW1lKG5leHRDb250ZXh0KTtcbiAgbmV4dFN0YXRlLnAodGhpcywgbmV4dEZyYW1lKTtcbiAgYWRkTmV4dEZyYW1lKHRoaXMsIG5leHRGcmFtZSk7XG59O1xuXG5TdGVwLnByb3RvdHlwZS5zdGFydENhbGwgPSBmdW5jdGlvbiBzdGFydENhbGwocnVsZUlkKSB7XG4gIHZhciBjYWxsZXIgPSB0aGlzLmNhbGxlcnNbcnVsZUlkXTtcblxuICBpZiAoIWNhbGxlcikge1xuICAgIGNhbGxlciA9IG5ldyBDYWxsZXIoKTtcbiAgICB0aGlzLmNhbGxlcnNbcnVsZUlkXSA9IGNhbGxlcjtcbiAgICB2YXIgY2FsbENvbnRleHQgPSBuZXcgQ29udGV4dChjYWxsZXIsIG51bGwpO1xuICAgIHZhciBjYWxsRnJhbWUgPSBuZXcgRnJhbWUoY2FsbENvbnRleHQpO1xuICAgIHZhciBzdGF0ZXMgPSBydWxlSW5pdGlhbFN0YXRlc1tydWxlSWRdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdGF0ZSA9IHN0YXRlc1tpXTtcbiAgICAgIHN0YXRlLnAodGhpcywgY2FsbEZyYW1lKTtcbiAgICB9XG5cbiAgICBhZGROZXh0RnJhbWUodGhpcywgY2FsbEZyYW1lKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsZXI7XG59O1xuXG5TdGVwLnByb3RvdHlwZS5yZXR1cm5DYWxsID0gZnVuY3Rpb24gcmV0dXJuQ2FsbChydWxlSWQsIGZyYW1lKSB7XG4gIC8vIFRPRE86IEltcGxlbWVudCBwcm9wZXIgZ3JvdXBpbmdcbiAgdmFyIGNhbGxlciA9IGZyYW1lLmNvbnRleHQuY2FsbGVyO1xuICB2YXIgcmV0dXJucyA9IGNhbGxlci5yZXR1cm5zO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0dXJucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByZXQgPSByZXR1cm5zW2ldO1xuICAgIHZhciBjYWxsZXJDb250ZXh0ID0gcmV0WzBdO1xuICAgIHZhciBzdGF0ZSA9IHJldFsxXTtcbiAgICB2YXIgbGVmdE1hcmtzID0gY2FsbGVyQ29udGV4dC5tYXJrcztcbiAgICB2YXIgcmlnaHRNYXJrcyA9IGZyYW1lLmNvbnRleHQubWFya3M7XG4gICAgdmFyIG1hcmtzID0gbGVmdE1hcmtzICYmIHJpZ2h0TWFya3MgPyB7XG4gICAgICB0eXBlOiBcImNvbmNhdFwiLFxuICAgICAgbGVmdDogY2FsbGVyQ29udGV4dC5tYXJrcyxcbiAgICAgIHJpZ2h0OiBmcmFtZS5jb250ZXh0Lm1hcmtzXG4gICAgfSA6IGxlZnRNYXJrcyB8fCByaWdodE1hcmtzO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoY2FsbGVyQ29udGV4dC5jYWxsZXIsIG1hcmtzKTtcbiAgICB2YXIgbmV4dEZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQpO1xuICAgIHN0YXRlLnAodGhpcywgbmV4dEZyYW1lKTtcbiAgICBhZGROZXh0RnJhbWUodGhpcywgbmV4dEZyYW1lKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gQ2FsbGVyKCkge1xuICB0aGlzLnJldHVybnMgPSBbXTtcbn1cblxuQ2FsbGVyLnByb3RvdHlwZS5hZGRSZXR1cm4gPSBmdW5jdGlvbiAoY29udGV4dCwgbmV4dFN0YXRlKSB7XG4gIHRoaXMucmV0dXJucy5wdXNoKFtjb250ZXh0LCBuZXh0U3RhdGVdKTtcbn07XG5cbmZ1bmN0aW9uIENvbnRleHQoY2FsbGVyLCBtYXJrcykge1xuICB0aGlzLmNhbGxlciA9IGNhbGxlcjtcbiAgdGhpcy5tYXJrcyA9IG1hcmtzO1xufVxuXG5mdW5jdGlvbiBGcmFtZShjb250ZXh0KSB7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMubmV4dFN0YXRlcyA9IFtdO1xufVxuXG5GcmFtZS5wcm90b3R5cGUuYWRkTmV4dFN0YXRlID0gZnVuY3Rpb24gYWRkTmV4dFN0YXRlKHN0YXRlKSB7XG4gIHRoaXMubmV4dFN0YXRlcy5wdXNoKHN0YXRlKTtcbn07XG5cbkZyYW1lLnByb3RvdHlwZS5lYWNoTmV4dFN0YXRlID0gZnVuY3Rpb24gZWFjaE5leHRTdGF0ZShmbikge1xuICB0aGlzLm5leHRTdGF0ZXMuZm9yRWFjaChmbik7XG59O1xuXG5GcmFtZS5wcm90b3R5cGUuaGFzTmV4dFN0YXRlcyA9IGZ1bmN0aW9uIGhhc05leHRTdGF0ZXMoKSB7XG4gIHJldHVybiB0aGlzLm5leHRTdGF0ZXMubGVuZ3RoID4gMDtcbn07XG5cbkZyYW1lLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSgpIHtcbiAgcmV0dXJuIG5ldyBGcmFtZSh0aGlzLmNvbnRleHQsIHRoaXMubWFya3MpO1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc1Rva2VuKHRva2VuLCBwb3NpdGlvbiwgZnJhbWVzKSB7XG4gIHZhciBzdGVwID0gbmV3IFN0ZXAodG9rZW4sIHBvc2l0aW9uKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmcmFtZSA9IGZyYW1lc1tpXTtcbiAgICBwcm9jZXNzRnJhbWUoc3RlcCwgZnJhbWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShzdGVwLCBmcmFtZSkge1xuICB2YXIgbmV3RnJhbWUgPSBmcmFtZS5jb3B5KCk7XG4gIGZyYW1lLmVhY2hOZXh0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgc3RhdGUucChzdGVwLCBuZXdGcmFtZSk7XG4gIH0pO1xuICBhZGROZXh0RnJhbWUoc3RlcCwgbmV3RnJhbWUpO1xufVxuXG5mdW5jdGlvbiBhZGROZXh0RnJhbWUoc3RlcCwgZnJhbWUpIHtcbiAgaWYgKGZyYW1lLmhhc05leHRTdGF0ZXMoKSkge1xuICAgIHN0ZXAuYWRkTmV4dEZyYW1lKGZyYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuTWFya3MobWFya3MpIHtcbiAgaWYgKCFtYXJrcykgcmV0dXJuIFtdO1xuICB2YXIgcXVldWUgPSBbbWFya3NdO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgIHZhciBtID0gcXVldWUuc2hpZnQoKTtcblxuICAgIGlmIChtLnR5cGUgPT09IFwiY29uY2F0XCIpIHtcbiAgICAgIHF1ZXVlLnVuc2hpZnQobS5sZWZ0LCBtLnJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKG0udHlwZSA9PT0gXCJtYXJrXCIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIG1hcmsgdHlwZTogXCIgKyBtLnR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gIHZhciBmcmFtZXMgPSBpbml0aWFsRnJhbWVzO1xuICB2YXIgaSA9IDA7XG5cbiAgZm9yICg7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XG4gICAgdmFyIHN0ZXAgPSBwcm9jZXNzVG9rZW4odG9rZW4sIGksIGZyYW1lcyk7XG5cbiAgICBpZiAoIXN0ZXAuaGFzTmV4dEZyYW1lcygpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgIHBvc2l0aW9uOiBpXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZyYW1lcyA9IHN0ZXAubmV4dEZyYW1lcztcbiAgfVxuXG4gIHN0ZXAgPSBwcm9jZXNzVG9rZW4obnVsbCwgaSwgZnJhbWVzKTtcblxuICBpZiAoIXN0ZXAud2FzQWNjZXB0ZWQoKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICBwb3NpdGlvbjogaVxuICAgIH07XG4gIH1cblxuICB2YXIgY3R4ID0gc3RlcC5hY2NlcHRlZENvbnRleHRzWzBdO1xuICB2YXIgbWFya3MgPSBmbGF0dGVuTWFya3MoY3R4Lm1hcmtzKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICBtYXJrczogbWFya3NcbiAgfTtcbn1cbnZhciBzdGF0ZTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU0ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU3ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlOCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTExID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMyA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTE0ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTE3ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTIwID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTIzID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTI2ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTI5ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTMyID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTM1ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNyA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTM4ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlMzkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU0MCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTQxID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU0MyA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTQ0ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU0NiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTQ3ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU0OSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTUwID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU1MiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTUzID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU1NSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTU2ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU1OCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTU5ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU2MSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTYyID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU2NCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTY1ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU2NyA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTY4ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU3MCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTcxID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU3MyA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTc0ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU3NiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTc3ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlNzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU3OSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTgwID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlODEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU4MiA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTgzID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlODQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU4NSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTg2ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlODcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU4OCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTg5ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlOTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU5MSA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTkyID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlOTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU5NCA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTk1ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlOTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGU5NyA9IC8qI19fUFVSRV9fKi9uZXcgU3RhdGUoKTtcbnZhciBzdGF0ZTk4ID0gLyojX19QVVJFX18qL25ldyBTdGF0ZSgpO1xudmFyIHN0YXRlOTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMDkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxMzkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNDkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxNzkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxODkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUxOTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMDkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyMzkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNDkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyNzkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyODkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUyOTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMDkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzMzkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNDkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNTkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNjkgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzAgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzEgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzIgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzMgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzQgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzUgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzYgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzcgPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG52YXIgc3RhdGUzNzggPSAvKiNfX1BVUkVfXyovbmV3IFN0YXRlKCk7XG5cbnN0YXRlMC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwibWFpblwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxKTtcbn07XG5cbnN0YXRlMC5pZCA9IDA7XG5cbnN0YXRlMS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkQWNjZXB0KGZyYW1lLmNvbnRleHQpO1xufTtcblxuc3RhdGUxLmlkID0gMTtcblxuc3RhdGUyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMyk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTQpO1xufTtcblxuc3RhdGUyLmlkID0gMjtcblxuc3RhdGUzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMyk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTQpO1xufTtcblxuc3RhdGUzLmlkID0gMztcblxuc3RhdGU0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlNSk7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIm1haW5cIiwgZnJhbWUpO1xufTtcblxuc3RhdGU0LmlkID0gNDtcblxuc3RhdGU1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlNSk7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIm1haW5cIiwgZnJhbWUpO1xufTtcblxuc3RhdGU1LmlkID0gNTtcblxuc3RhdGU2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDkpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU3KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU4KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTEpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU5KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTIpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMCk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDEzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTEpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSAzMikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEyKTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTMzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTMpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSAxNjApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNCk7XG4gIH1cbn07XG5cbnN0YXRlNi5pZCA9IDY7XG5cbnN0YXRlNy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIlNQQUNFXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNy5pZCA9IDc7XG5cbnN0YXRlOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIlNQQUNFXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlOC5pZCA9IDg7XG5cbnN0YXRlOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIlNQQUNFXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlOS5pZCA9IDk7XG5cbnN0YXRlMTAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTUEFDRVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTEwLmlkID0gMTA7XG5cbnN0YXRlMTEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTUEFDRVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTExLmlkID0gMTE7XG5cbnN0YXRlMTIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTUEFDRVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTEyLmlkID0gMTI7XG5cbnN0YXRlMTMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTUEFDRVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTEzLmlkID0gMTM7XG5cbnN0YXRlMTQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTUEFDRVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTE0LmlkID0gMTQ7XG5cbnN0YXRlMTUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gNDcpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNik7XG4gIH1cbn07XG5cbnN0YXRlMTUuaWQgPSAxNTtcblxuc3RhdGUxNi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Nykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE3KTtcbiAgfVxufTtcblxuc3RhdGUxNi5pZCA9IDE2O1xuXG5zdGF0ZTE3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPD0gOSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE4KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA+PSAxMSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE5KTtcbiAgfVxufTtcblxuc3RhdGUxNy5pZCA9IDE3O1xuXG5zdGF0ZTE4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPD0gOSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE4KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA+PSAxMSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE5KTtcbiAgfVxuXG4gIHN0ZXAuc3RhcnRDYWxsKFwiQ09NTUVOVF9FTkRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjApO1xufTtcblxuc3RhdGUxOC5pZCA9IDE4O1xuXG5zdGF0ZTE5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPD0gOSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE4KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA+PSAxMSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE5KTtcbiAgfVxuXG4gIHN0ZXAuc3RhcnRDYWxsKFwiQ09NTUVOVF9FTkRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjApO1xufTtcblxuc3RhdGUxOS5pZCA9IDE5O1xuXG5zdGF0ZTIwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiQ09NTUVOVFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTIwLmlkID0gMjA7XG5cbnN0YXRlMjEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMTApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUyMik7XG4gIH1cbn07XG5cbnN0YXRlMjEuaWQgPSAyMTtcblxuc3RhdGUyMi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkNPTU1FTlRfRU5EXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjIuaWQgPSAyMjtcblxuc3RhdGUyMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiU1BBQ0VcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjQpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkNPTU1FTlRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjUpO1xufTtcblxuc3RhdGUyMy5pZCA9IDIzO1xuXG5zdGF0ZTI0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiSUdOXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjQuaWQgPSAyNDtcblxuc3RhdGUyNS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIklHTlwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTI1LmlkID0gMjU7XG5cbnN0YXRlMjYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMTI0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjcpO1xuICB9XG59O1xuXG5zdGF0ZTI2LmlkID0gMjY7XG5cbnN0YXRlMjcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyOCk7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIlBJUEVcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyNy5pZCA9IDI3O1xuXG5zdGF0ZTI4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjgpO1xuICBzdGVwLnJldHVybkNhbGwoXCJQSVBFXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjguaWQgPSAyODtcblxuc3RhdGUyOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkTWFyayhcInBhcmVudFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTMwKTtcbiAgc3RlcC5hZGRNYXJrKFwiZGJscGFyZW50XCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzEpO1xufTtcblxuc3RhdGUyOS5pZCA9IDI5O1xuXG5zdGF0ZTMwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDk0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzIpO1xuICB9XG59O1xuXG5zdGF0ZTMwLmlkID0gMzA7XG5cbnN0YXRlMzEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIlBBUkVOVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMyk7XG59O1xuXG5zdGF0ZTMxLmlkID0gMzE7XG5cbnN0YXRlMzIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJQQVJFTlRcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzMi5pZCA9IDMyO1xuXG5zdGF0ZTMzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzQpO1xuICB9XG59O1xuXG5zdGF0ZTMzLmlkID0gMzM7XG5cbnN0YXRlMzQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gOTQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzNSk7XG4gIH1cbn07XG5cbnN0YXRlMzQuaWQgPSAzNDtcblxuc3RhdGUzNS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIlBBUkVOVFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTM1LmlkID0gMzU7XG5cbnN0YXRlMzYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA+PSA5NyAmJiB0b2tlbiA8PSAxMjIpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzNyk7XG4gIH1cblxuICBpZiAodG9rZW4gPj0gNjUgJiYgdG9rZW4gPD0gOTApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzOCk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDk1KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzkpO1xuICB9XG59O1xuXG5zdGF0ZTM2LmlkID0gMzY7XG5cbnN0YXRlMzcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJJREVOVF9GU1RcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzNy5pZCA9IDM3O1xuXG5zdGF0ZTM4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiSURFTlRfRlNUXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzguaWQgPSAzODtcblxuc3RhdGUzOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIklERU5UX0ZTVFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTM5LmlkID0gMzk7XG5cbnN0YXRlNDAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklERU5UX0ZTVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU0MSk7XG5cbiAgaWYgKHRva2VuID49IDQ4ICYmIHRva2VuIDw9IDU3KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNDIpO1xuICB9XG59O1xuXG5zdGF0ZTQwLmlkID0gNDA7XG5cbnN0YXRlNDEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJJREVOVF9SRVNUXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNDEuaWQgPSA0MTtcblxuc3RhdGU0Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIklERU5UX1JFU1RcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU0Mi5pZCA9IDQyO1xuXG5zdGF0ZTQzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJREVOVF9GU1RcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlNDQpO1xufTtcblxuc3RhdGU0My5pZCA9IDQzO1xuXG5zdGF0ZTQ0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJREVOVF9SRVNUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTQ1KTtcbiAgaWYgKCh0b2tlbiA8PSA5NiB8fCB0b2tlbiA+PSAxMjMpICYmICh0b2tlbiA8PSA2NCB8fCB0b2tlbiA+PSA5MSkgJiYgKHRva2VuIDw9IDQ3IHx8IHRva2VuID49IDU4KSkgc3RlcC5yZXR1cm5DYWxsKFwiSURFTlRcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU0NC5pZCA9IDQ0O1xuXG5zdGF0ZTQ1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJREVOVF9SRVNUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTQ1KTtcbiAgaWYgKCh0b2tlbiA8PSA5NiB8fCB0b2tlbiA+PSAxMjMpICYmICh0b2tlbiA8PSA2NCB8fCB0b2tlbiA+PSA5MSkgJiYgKHRva2VuIDw9IDQ3IHx8IHRva2VuID49IDU4KSkgc3RlcC5yZXR1cm5DYWxsKFwiSURFTlRcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU0NS5pZCA9IDQ1O1xuXG5zdGF0ZTQ2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQyKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNDcpO1xuICB9XG59O1xuXG5zdGF0ZTQ2LmlkID0gNDY7XG5cbnN0YXRlNDcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBpZiAodG9rZW4gPD0gNDEgfHwgdG9rZW4gPj0gNDMpIHN0ZXAucmV0dXJuQ2FsbChcIlNUQVJcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU0Ny5pZCA9IDQ3O1xuXG5zdGF0ZTQ4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDYxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNDkpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSAzMykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTUwKTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gNjIpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU1MSk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDYyKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNTIpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSA2MCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTUzKTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gNjApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU1NCk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDEwNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTU1KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTA5KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNTYpO1xuICB9XG59O1xuXG5zdGF0ZTQ4LmlkID0gNDg7XG5cbnN0YXRlNDkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gNjEpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU1Nyk7XG4gIH1cbn07XG5cbnN0YXRlNDkuaWQgPSA0OTtcblxuc3RhdGU1MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA2MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTU4KTtcbiAgfVxufTtcblxuc3RhdGU1MC5pZCA9IDUwO1xuXG5zdGF0ZTUxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDYxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNTkpO1xuICB9XG59O1xuXG5zdGF0ZTUxLmlkID0gNTE7XG5cbnN0YXRlNTIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJDT01QX09QXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNTIuaWQgPSA1Mjtcblxuc3RhdGU1My5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA2MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTYwKTtcbiAgfVxufTtcblxuc3RhdGU1My5pZCA9IDUzO1xuXG5zdGF0ZTU0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiQ09NUF9PUFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTU0LmlkID0gNTQ7XG5cbnN0YXRlNTUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMTEwKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNjEpO1xuICB9XG59O1xuXG5zdGF0ZTU1LmlkID0gNTU7XG5cbnN0YXRlNTYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gOTcpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU2Mik7XG4gIH1cbn07XG5cbnN0YXRlNTYuaWQgPSA1Njtcblxuc3RhdGU1Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkNPTVBfT1BcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU1Ny5pZCA9IDU3O1xuXG5zdGF0ZTU4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiQ09NUF9PUFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTU4LmlkID0gNTg7XG5cbnN0YXRlNTkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJDT01QX09QXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNTkuaWQgPSA1OTtcblxuc3RhdGU2MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkNPTVBfT1BcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU2MC5pZCA9IDYwO1xuXG5zdGF0ZTYxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiQ09NUF9PUFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTYxLmlkID0gNjE7XG5cbnN0YXRlNjIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMTE2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNjMpO1xuICB9XG59O1xuXG5zdGF0ZTYyLmlkID0gNjI7XG5cbnN0YXRlNjMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gOTkpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU2NCk7XG4gIH1cbn07XG5cbnN0YXRlNjMuaWQgPSA2Mztcblxuc3RhdGU2NC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSAxMDQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU2NSk7XG4gIH1cbn07XG5cbnN0YXRlNjQuaWQgPSA2NDtcblxuc3RhdGU2NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkNPTVBfT1BcIiwgZnJhbWUpO1xufTtcblxuc3RhdGU2NS5pZCA9IDY1O1xuXG5zdGF0ZTY2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiZnVuY19jYWxsXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlNjcpO1xufTtcblxuc3RhdGU2Ni5pZCA9IDY2O1xuXG5zdGF0ZTY3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJREVOVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU2OCk7XG59O1xuXG5zdGF0ZTY3LmlkID0gNjc7XG5cbnN0YXRlNjgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJmdW5jX25hbWVfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlNjkpO1xufTtcblxuc3RhdGU2OC5pZCA9IDY4O1xuXG5zdGF0ZTY5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQwKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNzApO1xuICB9XG59O1xuXG5zdGF0ZTY5LmlkID0gNjk7XG5cbnN0YXRlNzAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU3MSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRlVOQ19BUkdTXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTcyKTtcbiAgc3RlcC5hZGRNYXJrKFwiZnVuY19hcmdzX2VuZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTczKTtcbn07XG5cbnN0YXRlNzAuaWQgPSA3MDtcblxuc3RhdGU3MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTcxKTtcbiAgc3RlcC5zdGFydENhbGwoXCJGVU5DX0FSR1NcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlNzIpO1xuICBzdGVwLmFkZE1hcmsoXCJmdW5jX2FyZ3NfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlNzMpO1xufTtcblxuc3RhdGU3MS5pZCA9IDcxO1xuXG5zdGF0ZTcyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiZnVuY19hcmdzX2VuZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTczKTtcbn07XG5cbnN0YXRlNzIuaWQgPSA3Mjtcblxuc3RhdGU3My5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTc0KTtcblxuICBpZiAodG9rZW4gPT09IDQxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlNzUpO1xuICB9XG59O1xuXG5zdGF0ZTczLmlkID0gNzM7XG5cbnN0YXRlNzQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU3NCk7XG5cbiAgaWYgKHRva2VuID09PSA0MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTc1KTtcbiAgfVxufTtcblxuc3RhdGU3NC5pZCA9IDc0O1xuXG5zdGF0ZTc1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRlVOQ19DQUxMXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNzUuaWQgPSA3NTtcblxuc3RhdGU3Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTc3KTtcbn07XG5cbnN0YXRlNzYuaWQgPSA3Njtcblxuc3RhdGU3Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTc4KTtcblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlODApO1xuICB9XG5cbiAgc3RlcC5yZXR1cm5DYWxsKFwiRlVOQ19BUkdTXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNzcuaWQgPSA3Nztcblxuc3RhdGU3OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTc4KTtcblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlODApO1xuICB9XG5cbiAgc3RlcC5yZXR1cm5DYWxsKFwiRlVOQ19BUkdTXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlNzguaWQgPSA3ODtcblxuc3RhdGU3OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTc5KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlODEpO1xufTtcblxuc3RhdGU3OS5pZCA9IDc5O1xuXG5zdGF0ZTgwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlNzkpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU4MSk7XG59O1xuXG5zdGF0ZTgwLmlkID0gODA7XG5cbnN0YXRlODEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU4Mik7XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTgwKTtcbiAgfVxuXG4gIHN0ZXAucmV0dXJuQ2FsbChcIkZVTkNfQVJHU1wiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTgxLmlkID0gODE7XG5cbnN0YXRlODIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU4Mik7XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTgwKTtcbiAgfVxuXG4gIHN0ZXAucmV0dXJuQ2FsbChcIkZVTkNfQVJHU1wiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTgyLmlkID0gODI7XG5cbnN0YXRlODMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJzY2lcIiwgZnJhbWUuY29udGV4dCwgc3RhdGU4NCk7XG4gIHN0ZXAuYWRkTWFyayhcImZsb2F0XCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlODUpO1xuICBzdGVwLmFkZE1hcmsoXCJpbnRlZ2VyXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlODYpO1xufTtcblxuc3RhdGU4My5pZCA9IDgzO1xuXG5zdGF0ZTg0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJESUdJVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU4Nyk7XG59O1xuXG5zdGF0ZTg0LmlkID0gODQ7XG5cbnN0YXRlODUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkRJR0lUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTk1KTtcbn07XG5cbnN0YXRlODUuaWQgPSA4NTtcblxuc3RhdGU4Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRElHSVRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlOTkpO1xufTtcblxuc3RhdGU4Ni5pZCA9IDg2O1xuXG5zdGF0ZTg3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJESUdJVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU4Nyk7XG5cbiAgaWYgKHRva2VuID09PSA0Nikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTg5KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTAxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlOTApO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSA2OSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTkxKTtcbiAgfVxufTtcblxuc3RhdGU4Ny5pZCA9IDg3O1xuXG5zdGF0ZTg4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJESUdJVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU4OCk7XG5cbiAgaWYgKHRva2VuID09PSAxMDEpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU5MCk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDY5KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlOTEpO1xuICB9XG59O1xuXG5zdGF0ZTg4LmlkID0gODg7XG5cbnN0YXRlODkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkRJR0lUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTg4KTtcbn07XG5cbnN0YXRlODkuaWQgPSA4OTtcblxuc3RhdGU5MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiU0lHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU5Mik7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRElHSVRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlOTMpO1xufTtcblxuc3RhdGU5MC5pZCA9IDkwO1xuXG5zdGF0ZTkxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJTSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTkyKTtcbiAgc3RlcC5zdGFydENhbGwoXCJESUdJVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU5Myk7XG59O1xuXG5zdGF0ZTkxLmlkID0gOTE7XG5cbnN0YXRlOTIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkRJR0lUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTkzKTtcbn07XG5cbnN0YXRlOTIuaWQgPSA5Mjtcblxuc3RhdGU5My5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRElHSVRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlOTMpO1xuICBzdGVwLmFkZE1hcmsoXCJzY2lfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlOTQpO1xufTtcblxuc3RhdGU5My5pZCA9IDkzO1xuXG5zdGF0ZTk0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiTlVNQkVSXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlOTQuaWQgPSA5NDtcblxuc3RhdGU5NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRElHSVRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlOTUpO1xuXG4gIGlmICh0b2tlbiA9PT0gNDYpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGU5Nik7XG4gIH1cbn07XG5cbnN0YXRlOTUuaWQgPSA5NTtcblxuc3RhdGU5Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRElHSVRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlOTcpO1xufTtcblxuc3RhdGU5Ni5pZCA9IDk2O1xuXG5zdGF0ZTk3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJESUdJVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGU5Nyk7XG4gIHN0ZXAuYWRkTWFyayhcImZsb2F0X2VuZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTk4KTtcbn07XG5cbnN0YXRlOTcuaWQgPSA5Nztcblxuc3RhdGU5OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIk5VTUJFUlwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTk4LmlkID0gOTg7XG5cbnN0YXRlOTkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkRJR0lUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTk5KTtcbiAgc3RlcC5hZGRNYXJrKFwiaW50ZWdlcl9lbmRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUxMDApO1xufTtcblxuc3RhdGU5OS5pZCA9IDk5O1xuXG5zdGF0ZTEwMC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIk5VTUJFUlwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTEwMC5pZCA9IDEwMDtcblxuc3RhdGUxMDEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA+PSA0OCAmJiB0b2tlbiA8PSA1Nykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEwMik7XG4gIH1cbn07XG5cbnN0YXRlMTAxLmlkID0gMTAxO1xuXG5zdGF0ZTEwMi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkRJR0lUXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTAyLmlkID0gMTAyO1xuXG5zdGF0ZTEwMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEwNCk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDQ1KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTA1KTtcbiAgfVxufTtcblxuc3RhdGUxMDMuaWQgPSAxMDM7XG5cbnN0YXRlMTA0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiU0lHTlwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTEwNC5pZCA9IDEwNDtcblxuc3RhdGUxMDUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTSUdOXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTA1LmlkID0gMTA1O1xuXG5zdGF0ZTEwNi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSAzNCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEwNyk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDM5KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTA4KTtcbiAgfVxufTtcblxuc3RhdGUxMDYuaWQgPSAxMDY7XG5cbnN0YXRlMTA3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwic3RyX2JlZ2luXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTA5KTtcbn07XG5cbnN0YXRlMTA3LmlkID0gMTA3O1xuXG5zdGF0ZTEwOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkTWFyayhcInN0cl9iZWdpblwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTExMyk7XG59O1xuXG5zdGF0ZTEwOC5pZCA9IDEwODtcblxuc3RhdGUxMDkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkRTVFJJTkdfQ0hBUlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxMTApO1xuICBzdGVwLmFkZE1hcmsoXCJzdHJfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTExKTtcbn07XG5cbnN0YXRlMTA5LmlkID0gMTA5O1xuXG5zdGF0ZTExMC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRFNUUklOR19DSEFSXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTExMCk7XG4gIHN0ZXAuYWRkTWFyayhcInN0cl9lbmRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUxMTEpO1xufTtcblxuc3RhdGUxMTAuaWQgPSAxMTA7XG5cbnN0YXRlMTExLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDM0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTEyKTtcbiAgfVxufTtcblxuc3RhdGUxMTEuaWQgPSAxMTE7XG5cbnN0YXRlMTEyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiU1RSSU5HXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTEyLmlkID0gMTEyO1xuXG5zdGF0ZTExMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiU1NUUklOR19DSEFSXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTExNCk7XG4gIHN0ZXAuYWRkTWFyayhcInN0cl9lbmRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUxMTUpO1xufTtcblxuc3RhdGUxMTMuaWQgPSAxMTM7XG5cbnN0YXRlMTE0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJTU1RSSU5HX0NIQVJcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTE0KTtcbiAgc3RlcC5hZGRNYXJrKFwic3RyX2VuZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTExNSk7XG59O1xuXG5zdGF0ZTExNC5pZCA9IDExNDtcblxuc3RhdGUxMTUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMzkpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMTYpO1xuICB9XG59O1xuXG5zdGF0ZTExNS5pZCA9IDExNTtcblxuc3RhdGUxMTYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJTVFJJTkdcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxMTYuaWQgPSAxMTY7XG5cbnN0YXRlMTE3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDkyKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTE4KTtcbiAgfVxuXG4gIGlmICgodG9rZW4gPD0gMzMgfHwgdG9rZW4gPj0gMzUpICYmICh0b2tlbiA8PSA5MSB8fCB0b2tlbiA+PSA5MykpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMTkpO1xuICB9XG59O1xuXG5zdGF0ZTExNy5pZCA9IDExNztcblxuc3RhdGUxMTgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuXG4gIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMjApO1xuICB9XG59O1xuXG5zdGF0ZTExOC5pZCA9IDExODtcblxuc3RhdGUxMTkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJEU1RSSU5HX0NIQVJcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxMTkuaWQgPSAxMTk7XG5cbnN0YXRlMTIwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRFNUUklOR19DSEFSXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTIwLmlkID0gMTIwO1xuXG5zdGF0ZTEyMS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA5Mikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEyMik7XG4gIH1cblxuICBpZiAoKHRva2VuIDw9IDM4IHx8IHRva2VuID49IDQwKSAmJiAodG9rZW4gPD0gOTEgfHwgdG9rZW4gPj0gOTMpKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTIzKTtcbiAgfVxufTtcblxuc3RhdGUxMjEuaWQgPSAxMjE7XG5cbnN0YXRlMTIyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcblxuICB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTI0KTtcbiAgfVxufTtcblxuc3RhdGUxMjIuaWQgPSAxMjI7XG5cbnN0YXRlMTIzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiU1NUUklOR19DSEFSXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTIzLmlkID0gMTIzO1xuXG5zdGF0ZTEyNC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIlNTVFJJTkdfQ0hBUlwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTEyNC5pZCA9IDEyNDtcblxuc3RhdGUxMjUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJhcnJheVwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTEyNik7XG59O1xuXG5zdGF0ZTEyNS5pZCA9IDEyNTtcblxuc3RhdGUxMjYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gOTEpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMjcpO1xuICB9XG59O1xuXG5zdGF0ZTEyNi5pZCA9IDEyNjtcblxuc3RhdGUxMjcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxMjgpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkFSUkFZX0VMRU1FTlRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTMwKTtcblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM3KTtcbiAgfVxufTtcblxuc3RhdGUxMjcuaWQgPSAxMjc7XG5cbnN0YXRlMTI4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTI4KTtcbiAgc3RlcC5zdGFydENhbGwoXCJBUlJBWV9FTEVNRU5UXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTEzMCk7XG5cbiAgaWYgKHRva2VuID09PSA5Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEzNyk7XG4gIH1cbn07XG5cbnN0YXRlMTI4LmlkID0gMTI4O1xuXG5zdGF0ZTEyOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTEyOSk7XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEzMik7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM2KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gOTMpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMzcpO1xuICB9XG59O1xuXG5zdGF0ZTEyOS5pZCA9IDEyOTtcblxuc3RhdGUxMzAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxMjkpO1xuXG4gIGlmICh0b2tlbiA9PT0gNDQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMzIpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEzNik7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM3KTtcbiAgfVxufTtcblxuc3RhdGUxMzAuaWQgPSAxMzA7XG5cbnN0YXRlMTMxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTMxKTtcbiAgc3RlcC5zdGFydENhbGwoXCJBUlJBWV9FTEVNRU5UXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTEzMyk7XG59O1xuXG5zdGF0ZTEzMS5pZCA9IDEzMTtcblxuc3RhdGUxMzIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxMzEpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkFSUkFZX0VMRU1FTlRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTMzKTtcbn07XG5cbnN0YXRlMTMyLmlkID0gMTMyO1xuXG5zdGF0ZTEzMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTEzNCk7XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEzMik7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM2KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gOTMpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMzcpO1xuICB9XG59O1xuXG5zdGF0ZTEzMy5pZCA9IDEzMztcblxuc3RhdGUxMzQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxMzQpO1xuXG4gIGlmICh0b2tlbiA9PT0gNDQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxMzIpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTEzNik7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM3KTtcbiAgfVxufTtcblxuc3RhdGUxMzQuaWQgPSAxMzQ7XG5cbnN0YXRlMTM1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTM1KTtcblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM3KTtcbiAgfVxufTtcblxuc3RhdGUxMzUuaWQgPSAxMzU7XG5cbnN0YXRlMTM2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTM1KTtcblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTM3KTtcbiAgfVxufTtcblxuc3RhdGUxMzYuaWQgPSAxMzY7XG5cbnN0YXRlMTM3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiYXJyYXlfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTM4KTtcbn07XG5cbnN0YXRlMTM3LmlkID0gMTM3O1xuXG5zdGF0ZTEzOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkFSUkFZXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTM4LmlkID0gMTM4O1xuXG5zdGF0ZTEzOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkTWFyayhcImFycmF5X3NwbGF0XCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTQwKTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTQxKTtcbn07XG5cbnN0YXRlMTM5LmlkID0gMTM5O1xuXG5zdGF0ZTE0MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Nikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE0Mik7XG4gIH1cbn07XG5cbnN0YXRlMTQwLmlkID0gMTQwO1xuXG5zdGF0ZTE0MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkFSUkFZX0VMRU1FTlRcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxNDEuaWQgPSAxNDE7XG5cbnN0YXRlMTQyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTQzKTtcbiAgfVxufTtcblxuc3RhdGUxNDIuaWQgPSAxNDI7XG5cbnN0YXRlMTQzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTQ0KTtcbiAgfVxufTtcblxuc3RhdGUxNDMuaWQgPSAxNDM7XG5cbnN0YXRlMTQ0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTQ1KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTQxKTtcbn07XG5cbnN0YXRlMTQ0LmlkID0gMTQ0O1xuXG5zdGF0ZTE0NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE0NSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE0MSk7XG59O1xuXG5zdGF0ZTE0NS5pZCA9IDE0NTtcblxuc3RhdGUxNDYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJvYmplY3RcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUxNDcpO1xufTtcblxuc3RhdGUxNDYuaWQgPSAxNDY7XG5cbnN0YXRlMTQ3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDEyMykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE0OCk7XG4gIH1cbn07XG5cbnN0YXRlMTQ3LmlkID0gMTQ3O1xuXG5zdGF0ZTE0OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE0OSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiT0JKRUNUX1BBSVJcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTUxKTtcblxuICBpZiAodG9rZW4gPT09IDEyNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1OCk7XG4gIH1cbn07XG5cbnN0YXRlMTQ4LmlkID0gMTQ4O1xuXG5zdGF0ZTE0OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE0OSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiT0JKRUNUX1BBSVJcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTUxKTtcblxuICBpZiAodG9rZW4gPT09IDEyNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1OCk7XG4gIH1cbn07XG5cbnN0YXRlMTQ5LmlkID0gMTQ5O1xuXG5zdGF0ZTE1MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE1MCk7XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1Myk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTU3KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTI1KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTU4KTtcbiAgfVxufTtcblxuc3RhdGUxNTAuaWQgPSAxNTA7XG5cbnN0YXRlMTUxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTUwKTtcblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTUzKTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gNDQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNTcpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSAxMjUpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNTgpO1xuICB9XG59O1xuXG5zdGF0ZTE1MS5pZCA9IDE1MTtcblxuc3RhdGUxNTIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNTIpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIk9CSkVDVF9QQUlSXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE1NCk7XG59O1xuXG5zdGF0ZTE1Mi5pZCA9IDE1Mjtcblxuc3RhdGUxNTMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNTIpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIk9CSkVDVF9QQUlSXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE1NCk7XG59O1xuXG5zdGF0ZTE1My5pZCA9IDE1Mztcblxuc3RhdGUxNTQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNTUpO1xuXG4gIGlmICh0b2tlbiA9PT0gNDQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNTMpO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1Nyk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDEyNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1OCk7XG4gIH1cbn07XG5cbnN0YXRlMTU0LmlkID0gMTU0O1xuXG5zdGF0ZTE1NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE1NSk7XG5cbiAgaWYgKHRva2VuID09PSA0NCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1Myk7XG4gIH1cblxuICBpZiAodG9rZW4gPT09IDQ0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTU3KTtcbiAgfVxuXG4gIGlmICh0b2tlbiA9PT0gMTI1KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTU4KTtcbiAgfVxufTtcblxuc3RhdGUxNTUuaWQgPSAxNTU7XG5cbnN0YXRlMTU2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTU2KTtcblxuICBpZiAodG9rZW4gPT09IDEyNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE1OCk7XG4gIH1cbn07XG5cbnN0YXRlMTU2LmlkID0gMTU2O1xuXG5zdGF0ZTE1Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE1Nik7XG5cbiAgaWYgKHRva2VuID09PSAxMjUpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNTgpO1xuICB9XG59O1xuXG5zdGF0ZTE1Ny5pZCA9IDE1Nztcblxuc3RhdGUxNTgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJvYmplY3RfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTU5KTtcbn07XG5cbnN0YXRlMTU4LmlkID0gMTU4O1xuXG5zdGF0ZTE1OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIk9CSkVDVFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTE1OS5pZCA9IDE1OTtcblxuc3RhdGUxNjAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJvYmplY3RfcGFpclwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTE2MSk7XG4gIHN0ZXAuYWRkTWFyayhcIm9iamVjdF9leHByXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTYyKTtcbiAgc3RlcC5hZGRNYXJrKFwib2JqZWN0X3NwbGF0X3RoaXNcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUxNjMpO1xuICBzdGVwLmFkZE1hcmsoXCJvYmplY3Rfc3BsYXRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUxNjQpO1xufTtcblxuc3RhdGUxNjAuaWQgPSAxNjA7XG5cbnN0YXRlMTYxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJTVFJJTkdcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTY1KTtcbn07XG5cbnN0YXRlMTYxLmlkID0gMTYxO1xuXG5zdGF0ZTE2Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE3MCk7XG59O1xuXG5zdGF0ZTE2Mi5pZCA9IDE2Mjtcblxuc3RhdGUxNjMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gNDYpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNzEpO1xuICB9XG59O1xuXG5zdGF0ZTE2My5pZCA9IDE2Mztcblxuc3RhdGUxNjQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gNDYpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNzQpO1xuICB9XG59O1xuXG5zdGF0ZTE2NC5pZCA9IDE2NDtcblxuc3RhdGUxNjUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNjYpO1xuXG4gIGlmICh0b2tlbiA9PT0gNTgpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNjcpO1xuICB9XG59O1xuXG5zdGF0ZTE2NS5pZCA9IDE2NTtcblxuc3RhdGUxNjYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNjYpO1xuXG4gIGlmICh0b2tlbiA9PT0gNTgpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxNjcpO1xuICB9XG59O1xuXG5zdGF0ZTE2Ni5pZCA9IDE2Njtcblxuc3RhdGUxNjcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNjgpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNjkpO1xufTtcblxuc3RhdGUxNjcuaWQgPSAxNjc7XG5cbnN0YXRlMTY4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTY4KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTY5KTtcbn07XG5cbnN0YXRlMTY4LmlkID0gMTY4O1xuXG5zdGF0ZTE2OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIk9CSkVDVF9QQUlSXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTY5LmlkID0gMTY5O1xuXG5zdGF0ZTE3MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIk9CSkVDVF9QQUlSXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTcwLmlkID0gMTcwO1xuXG5zdGF0ZTE3MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Nikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE3Mik7XG4gIH1cbn07XG5cbnN0YXRlMTcxLmlkID0gMTcxO1xuXG5zdGF0ZTE3Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Nikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE3Myk7XG4gIH1cbn07XG5cbnN0YXRlMTcyLmlkID0gMTcyO1xuXG5zdGF0ZTE3My5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIk9CSkVDVF9QQUlSXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTczLmlkID0gMTczO1xuXG5zdGF0ZTE3NC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Nikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE3NSk7XG4gIH1cbn07XG5cbnN0YXRlMTc0LmlkID0gMTc0O1xuXG5zdGF0ZTE3NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Nikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE3Nik7XG4gIH1cbn07XG5cbnN0YXRlMTc1LmlkID0gMTc1O1xuXG5zdGF0ZTE3Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE3Nyk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE3OCk7XG59O1xuXG5zdGF0ZTE3Ni5pZCA9IDE3Njtcblxuc3RhdGUxNzcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNzcpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxNzgpO1xufTtcblxuc3RhdGUxNzcuaWQgPSAxNzc7XG5cbnN0YXRlMTc4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiT0JKRUNUX1BBSVJcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxNzguaWQgPSAxNzg7XG5cbnN0YXRlMTc5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwicGFpclwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTE4MCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4yXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE4MSk7XG59O1xuXG5zdGF0ZTE3OS5pZCA9IDE3OTtcblxuc3RhdGUxODAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxODIpO1xufTtcblxuc3RhdGUxODAuaWQgPSAxODA7XG5cbnN0YXRlMTgxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTgxLmlkID0gMTgxO1xuXG5zdGF0ZTE4Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE4Myk7XG5cbiAgaWYgKHRva2VuID09PSA2MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE4NCk7XG4gIH1cbn07XG5cbnN0YXRlMTgyLmlkID0gMTgyO1xuXG5zdGF0ZTE4My5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE4Myk7XG5cbiAgaWYgKHRva2VuID09PSA2MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE4NCk7XG4gIH1cbn07XG5cbnN0YXRlMTgzLmlkID0gMTgzO1xuXG5zdGF0ZTE4NC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA2Mikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE4NSk7XG4gIH1cbn07XG5cbnN0YXRlMTg0LmlkID0gMTg0O1xuXG5zdGF0ZTE4NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE4Nik7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4yXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE4Nyk7XG59O1xuXG5zdGF0ZTE4NS5pZCA9IDE4NTtcblxuc3RhdGUxODYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxODYpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUxODcpO1xufTtcblxuc3RhdGUxODYuaWQgPSAxODY7XG5cbnN0YXRlMTg3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMTg3LmlkID0gMTg3O1xuXG5zdGF0ZTE4OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkTWFyayhcIm9yXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTg5KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjNcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTkwKTtcbn07XG5cbnN0YXRlMTg4LmlkID0gMTg4O1xuXG5zdGF0ZTE4OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4yXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE5MSk7XG59O1xuXG5zdGF0ZTE4OS5pZCA9IDE4OTtcblxuc3RhdGUxOTAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjJcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxOTAuaWQgPSAxOTA7XG5cbnN0YXRlMTkxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTkyKTtcblxuICBpZiAodG9rZW4gPT09IDEyNCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTE5Myk7XG4gIH1cbn07XG5cbnN0YXRlMTkxLmlkID0gMTkxO1xuXG5zdGF0ZTE5Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE5Mik7XG5cbiAgaWYgKHRva2VuID09PSAxMjQpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUxOTMpO1xuICB9XG59O1xuXG5zdGF0ZTE5Mi5pZCA9IDE5Mjtcblxuc3RhdGUxOTMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMTI0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMTk0KTtcbiAgfVxufTtcblxuc3RhdGUxOTMuaWQgPSAxOTM7XG5cbnN0YXRlMTk0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTk1KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjNcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTk2KTtcbn07XG5cbnN0YXRlMTk0LmlkID0gMTk0O1xuXG5zdGF0ZTE5NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE5NSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4zXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTE5Nik7XG59O1xuXG5zdGF0ZTE5NS5pZCA9IDE5NTtcblxuc3RhdGUxOTYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjJcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxOTYuaWQgPSAxOTY7XG5cbnN0YXRlMTk3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiYW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMTk4KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMTk5KTtcbn07XG5cbnN0YXRlMTk3LmlkID0gMTk3O1xuXG5zdGF0ZTE5OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4zXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIwMCk7XG59O1xuXG5zdGF0ZTE5OC5pZCA9IDE5ODtcblxuc3RhdGUxOTkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjNcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUxOTkuaWQgPSAxOTk7XG5cbnN0YXRlMjAwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjAxKTtcblxuICBpZiAodG9rZW4gPT09IDM4KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjAyKTtcbiAgfVxufTtcblxuc3RhdGUyMDAuaWQgPSAyMDA7XG5cbnN0YXRlMjAxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjAxKTtcblxuICBpZiAodG9rZW4gPT09IDM4KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjAyKTtcbiAgfVxufTtcblxuc3RhdGUyMDEuaWQgPSAyMDE7XG5cbnN0YXRlMjAyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDM4KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjAzKTtcbiAgfVxufTtcblxuc3RhdGUyMDIuaWQgPSAyMDI7XG5cbnN0YXRlMjAzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjA0KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjRcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjA1KTtcbn07XG5cbnN0YXRlMjAzLmlkID0gMjAzO1xuXG5zdGF0ZTIwNC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIwNCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl40XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIwNSk7XG59O1xuXG5zdGF0ZTIwNC5pZCA9IDIwNDtcblxuc3RhdGUyMDUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjNcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyMDUuaWQgPSAyMDU7XG5cbnN0YXRlMjA2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiY29tcFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTIwNyk7XG4gIHN0ZXAuYWRkTWFyayhcImFzY1wiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTIwOCk7XG4gIHN0ZXAuYWRkTWFyayhcImRlc2NcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUyMDkpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeNVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyMTApO1xufTtcblxuc3RhdGUyMDYuaWQgPSAyMDY7XG5cbnN0YXRlMjA3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjVcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjExKTtcbn07XG5cbnN0YXRlMjA3LmlkID0gMjA3O1xuXG5zdGF0ZTIwOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl40XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxOCk7XG59O1xuXG5zdGF0ZTIwOC5pZCA9IDIwODtcblxuc3RhdGUyMDkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeNFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyMjMpO1xufTtcblxuc3RhdGUyMDkuaWQgPSAyMDk7XG5cbnN0YXRlMjEwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl40XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjEwLmlkID0gMjEwO1xuXG5zdGF0ZTIxMS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxMik7XG4gIHN0ZXAuYWRkTWFyayhcIm9wXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjEzKTtcbn07XG5cbnN0YXRlMjExLmlkID0gMjExO1xuXG5zdGF0ZTIxMi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxMik7XG4gIHN0ZXAuYWRkTWFyayhcIm9wXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjEzKTtcbn07XG5cbnN0YXRlMjEyLmlkID0gMjEyO1xuXG5zdGF0ZTIxMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiQ09NUF9PUFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyMTQpO1xufTtcblxuc3RhdGUyMTMuaWQgPSAyMTM7XG5cbnN0YXRlMjE0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjE1KTtcbn07XG5cbnN0YXRlMjE0LmlkID0gMjE0O1xuXG5zdGF0ZTIxNS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxNik7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl41XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxNyk7XG59O1xuXG5zdGF0ZTIxNS5pZCA9IDIxNTtcblxuc3RhdGUyMTYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyMTYpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeNVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyMTcpO1xufTtcblxuc3RhdGUyMTYuaWQgPSAyMTY7XG5cbnN0YXRlMjE3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl40XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjE3LmlkID0gMjE3O1xuXG5zdGF0ZTIxOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxOSk7XG5cbiAgaWYgKHRva2VuID09PSA5Nykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTIyMCk7XG4gIH1cbn07XG5cbnN0YXRlMjE4LmlkID0gMjE4O1xuXG5zdGF0ZTIxOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIxOSk7XG5cbiAgaWYgKHRva2VuID09PSA5Nykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTIyMCk7XG4gIH1cbn07XG5cbnN0YXRlMjE5LmlkID0gMjE5O1xuXG5zdGF0ZTIyMC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSAxMTUpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUyMjEpO1xuICB9XG59O1xuXG5zdGF0ZTIyMC5pZCA9IDIyMDtcblxuc3RhdGUyMjEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gOTkpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUyMjIpO1xuICB9XG59O1xuXG5zdGF0ZTIyMS5pZCA9IDIyMTtcblxuc3RhdGUyMjIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjRcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyMjIuaWQgPSAyMjI7XG5cbnN0YXRlMjIzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjI0KTtcblxuICBpZiAodG9rZW4gPT09IDEwMCkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTIyNSk7XG4gIH1cbn07XG5cbnN0YXRlMjIzLmlkID0gMjIzO1xuXG5zdGF0ZTIyNC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIyNCk7XG5cbiAgaWYgKHRva2VuID09PSAxMDApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUyMjUpO1xuICB9XG59O1xuXG5zdGF0ZTIyNC5pZCA9IDIyNDtcblxuc3RhdGUyMjUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gMTAxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjI2KTtcbiAgfVxufTtcblxuc3RhdGUyMjUuaWQgPSAyMjU7XG5cbnN0YXRlMjI2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDExNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTIyNyk7XG4gIH1cbn07XG5cbnN0YXRlMjI2LmlkID0gMjI2O1xuXG5zdGF0ZTIyNy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA5OSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTIyOCk7XG4gIH1cbn07XG5cbnN0YXRlMjI3LmlkID0gMjI3O1xuXG5zdGF0ZTIyOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeNFwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTIyOC5pZCA9IDIyODtcblxuc3RhdGUyMjkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJpbmNfcmFuZ2VcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUyMzApO1xuICBzdGVwLmFkZE1hcmsoXCJleGNfcmFuZ2VcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUyMzEpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeNlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyMzIpO1xufTtcblxuc3RhdGUyMjkuaWQgPSAyMjk7XG5cbnN0YXRlMjMwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjZcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjMzKTtcbn07XG5cbnN0YXRlMjMwLmlkID0gMjMwO1xuXG5zdGF0ZTIzMS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl42XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIzOSk7XG59O1xuXG5zdGF0ZTIzMS5pZCA9IDIzMTtcblxuc3RhdGUyMzIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjVcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyMzIuaWQgPSAyMzI7XG5cbnN0YXRlMjMzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjM0KTtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjM1KTtcbiAgfVxufTtcblxuc3RhdGUyMzMuaWQgPSAyMzM7XG5cbnN0YXRlMjM0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjM0KTtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjM1KTtcbiAgfVxufTtcblxuc3RhdGUyMzQuaWQgPSAyMzQ7XG5cbnN0YXRlMjM1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjM2KTtcbiAgfVxufTtcblxuc3RhdGUyMzUuaWQgPSAyMzU7XG5cbnN0YXRlMjM2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjM3KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjZcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjM4KTtcbn07XG5cbnN0YXRlMjM2LmlkID0gMjM2O1xuXG5zdGF0ZTIzNy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIzNyk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl42XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTIzOCk7XG59O1xuXG5zdGF0ZTIzNy5pZCA9IDIzNztcblxuc3RhdGUyMzgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjVcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyMzguaWQgPSAyMzg7XG5cbnN0YXRlMjM5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjQwKTtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjQxKTtcbiAgfVxufTtcblxuc3RhdGUyMzkuaWQgPSAyMzk7XG5cbnN0YXRlMjQwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjQwKTtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjQxKTtcbiAgfVxufTtcblxuc3RhdGUyNDAuaWQgPSAyNDA7XG5cbnN0YXRlMjQxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjQyKTtcbiAgfVxufTtcblxuc3RhdGUyNDEuaWQgPSAyNDE7XG5cbnN0YXRlMjQyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjQzKTtcbiAgfVxufTtcblxuc3RhdGUyNDIuaWQgPSAyNDI7XG5cbnN0YXRlMjQzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjQ0KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjZcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjQ1KTtcbn07XG5cbnN0YXRlMjQzLmlkID0gMjQzO1xuXG5zdGF0ZTI0NC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI0NCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl42XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI0NSk7XG59O1xuXG5zdGF0ZTI0NC5pZCA9IDI0NDtcblxuc3RhdGUyNDUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjVcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyNDUuaWQgPSAyNDU7XG5cbnN0YXRlMjQ2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiYWRkXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjQ3KTtcbiAgc3RlcC5hZGRNYXJrKFwic3ViXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjQ4KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjdcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjQ5KTtcbn07XG5cbnN0YXRlMjQ2LmlkID0gMjQ2O1xuXG5zdGF0ZTI0Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl42XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1MCk7XG59O1xuXG5zdGF0ZTI0Ny5pZCA9IDI0Nztcblxuc3RhdGUyNDgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeNlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNTUpO1xufTtcblxuc3RhdGUyNDguaWQgPSAyNDg7XG5cbnN0YXRlMjQ5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl42XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjQ5LmlkID0gMjQ5O1xuXG5zdGF0ZTI1MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1MSk7XG5cbiAgaWYgKHRva2VuID09PSA0Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI1Mik7XG4gIH1cbn07XG5cbnN0YXRlMjUwLmlkID0gMjUwO1xuXG5zdGF0ZTI1MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1MSk7XG5cbiAgaWYgKHRva2VuID09PSA0Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI1Mik7XG4gIH1cbn07XG5cbnN0YXRlMjUxLmlkID0gMjUxO1xuXG5zdGF0ZTI1Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1Myk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl43XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1NCk7XG59O1xuXG5zdGF0ZTI1Mi5pZCA9IDI1Mjtcblxuc3RhdGUyNTMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNTMpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeN1wiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNTQpO1xufTtcblxuc3RhdGUyNTMuaWQgPSAyNTM7XG5cbnN0YXRlMjU0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl42XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjU0LmlkID0gMjU0O1xuXG5zdGF0ZTI1NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1Nik7XG5cbiAgaWYgKHRva2VuID09PSA0NSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI1Nyk7XG4gIH1cbn07XG5cbnN0YXRlMjU1LmlkID0gMjU1O1xuXG5zdGF0ZTI1Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1Nik7XG5cbiAgaWYgKHRva2VuID09PSA0NSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI1Nyk7XG4gIH1cbn07XG5cbnN0YXRlMjU2LmlkID0gMjU2O1xuXG5zdGF0ZTI1Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1OCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl43XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI1OSk7XG59O1xuXG5zdGF0ZTI1Ny5pZCA9IDI1Nztcblxuc3RhdGUyNTgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNTgpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeN1wiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNTkpO1xufTtcblxuc3RhdGUyNTguaWQgPSAyNTg7XG5cbnN0YXRlMjU5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl42XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjU5LmlkID0gMjU5O1xuXG5zdGF0ZTI2MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkTWFyayhcIm11bFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTI2MSk7XG4gIHN0ZXAuYWRkTWFyayhcImRpdlwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTI2Mik7XG4gIHN0ZXAuYWRkTWFyayhcIm1vZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTI2Myk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl45XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI2NCk7XG59O1xuXG5zdGF0ZTI2MC5pZCA9IDI2MDtcblxuc3RhdGUyNjEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeN1wiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNjUpO1xufTtcblxuc3RhdGUyNjEuaWQgPSAyNjE7XG5cbnN0YXRlMjYyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjdcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjcwKTtcbn07XG5cbnN0YXRlMjYyLmlkID0gMjYyO1xuXG5zdGF0ZTI2My5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl43XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3NSk7XG59O1xuXG5zdGF0ZTI2My5pZCA9IDI2Mztcblxuc3RhdGUyNjQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjdcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyNjQuaWQgPSAyNjQ7XG5cbnN0YXRlMjY1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjY2KTtcbiAgc3RlcC5zdGFydENhbGwoXCJTVEFSXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI2Nyk7XG59O1xuXG5zdGF0ZTI2NS5pZCA9IDI2NTtcblxuc3RhdGUyNjYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNjYpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIlNUQVJcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjY3KTtcbn07XG5cbnN0YXRlMjY2LmlkID0gMjY2O1xuXG5zdGF0ZTI2Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI2OCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl45XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI2OSk7XG59O1xuXG5zdGF0ZTI2Ny5pZCA9IDI2Nztcblxuc3RhdGUyNjgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNjgpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeOVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNjkpO1xufTtcblxuc3RhdGUyNjguaWQgPSAyNjg7XG5cbnN0YXRlMjY5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl43XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjY5LmlkID0gMjY5O1xuXG5zdGF0ZTI3MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3MSk7XG5cbiAgaWYgKHRva2VuID09PSA0Nykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI3Mik7XG4gIH1cbn07XG5cbnN0YXRlMjcwLmlkID0gMjcwO1xuXG5zdGF0ZTI3MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3MSk7XG5cbiAgaWYgKHRva2VuID09PSA0Nykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI3Mik7XG4gIH1cbn07XG5cbnN0YXRlMjcxLmlkID0gMjcxO1xuXG5zdGF0ZTI3Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3Myk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl45XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3NCk7XG59O1xuXG5zdGF0ZTI3Mi5pZCA9IDI3Mjtcblxuc3RhdGUyNzMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNzMpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeOVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNzQpO1xufTtcblxuc3RhdGUyNzMuaWQgPSAyNzM7XG5cbnN0YXRlMjc0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl43XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjc0LmlkID0gMjc0O1xuXG5zdGF0ZTI3NS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3Nik7XG5cbiAgaWYgKHRva2VuID09PSAzNykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI3Nyk7XG4gIH1cbn07XG5cbnN0YXRlMjc1LmlkID0gMjc1O1xuXG5zdGF0ZTI3Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3Nik7XG5cbiAgaWYgKHRva2VuID09PSAzNykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTI3Nyk7XG4gIH1cbn07XG5cbnN0YXRlMjc2LmlkID0gMjc2O1xuXG5zdGF0ZTI3Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3OCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl45XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI3OSk7XG59O1xuXG5zdGF0ZTI3Ny5pZCA9IDI3Nztcblxuc3RhdGUyNzgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNzgpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeOVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyNzkpO1xufTtcblxuc3RhdGUyNzguaWQgPSAyNzg7XG5cbnN0YXRlMjc5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl43XCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjc5LmlkID0gMjc5O1xuXG5zdGF0ZTI4MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuYWRkTWFyayhcInBvd1wiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTI4MSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyODIpO1xufTtcblxuc3RhdGUyODAuaWQgPSAyODA7XG5cbnN0YXRlMjgxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjExXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI4Myk7XG59O1xuXG5zdGF0ZTI4MS5pZCA9IDI4MTtcblxuc3RhdGUyODIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjlcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyODIuaWQgPSAyODI7XG5cbnN0YXRlMjgzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjg0KTtcblxuICBpZiAodG9rZW4gPT09IDQyKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjg1KTtcbiAgfVxufTtcblxuc3RhdGUyODMuaWQgPSAyODM7XG5cbnN0YXRlMjg0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjg0KTtcblxuICBpZiAodG9rZW4gPT09IDQyKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjg1KTtcbiAgfVxufTtcblxuc3RhdGUyODQuaWQgPSAyODQ7XG5cbnN0YXRlMjg1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDQyKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjg2KTtcbiAgfVxufTtcblxuc3RhdGUyODUuaWQgPSAyODU7XG5cbnN0YXRlMjg2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjg3KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjlcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjg4KTtcbn07XG5cbnN0YXRlMjg2LmlkID0gMjg2O1xuXG5zdGF0ZTI4Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI4Nyk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl45XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI4OCk7XG59O1xuXG5zdGF0ZTI4Ny5pZCA9IDI4Nztcblxuc3RhdGUyODgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjlcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyODguaWQgPSAyODg7XG5cbnN0YXRlMjg5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJOVU1CRVJcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjkwKTtcbiAgc3RlcC5zdGFydENhbGwoXCJTVFJJTkdcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMjkxKTtcbiAgc3RlcC5zdGFydENhbGwoXCJBUlJBWVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyOTIpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIk9CSkVDVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUyOTMpO1xuICBzdGVwLmFkZE1hcmsoXCJzdGFyXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjk0KTtcbiAgc3RlcC5hZGRNYXJrKFwidGhpc1wiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTI5NSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiUEFSRU5UXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTI5Nik7XG4gIHN0ZXAuYWRkTWFyayhcInBhcmVuXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjk3KTtcblxuICBpZiAodG9rZW4gPT09IDM2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMjk4KTtcbiAgfVxuXG4gIHN0ZXAuYWRkTWFyayhcImlkZW50XCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMjk5KTtcbiAgc3RlcC5zdGFydENhbGwoXCJGVU5DX0NBTExcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzAwKTtcbiAgc3RlcC5hZGRNYXJrKFwibmVnXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzAxKTtcbiAgc3RlcC5hZGRNYXJrKFwicG9zXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzAyKTtcbiAgc3RlcC5hZGRNYXJrKFwibm90XCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzAzKTtcblxuICBpZiAodG9rZW4gPT09IDEwNSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMwNCk7XG4gIH1cblxuICBzdGVwLmFkZE1hcmsoXCJkZXJlZlwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTMwNSk7XG4gIHN0ZXAuYWRkTWFyayhcImF0dHJfY29uZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTMwNik7XG4gIHN0ZXAuYWRkTWFyayhcImF0dHJfaWRlbnRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUzMDcpO1xuICBzdGVwLmFkZE1hcmsoXCJwaXBlY2FsbFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTMwOCk7XG4gIHN0ZXAuYWRkTWFyayhcInByb2plY3RcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUzMDkpO1xuICBzdGVwLmFkZE1hcmsoXCJmaWx0ZXJcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUzMTApO1xuICBzdGVwLmFkZE1hcmsoXCJhcnJfZXhwclwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTMxMSk7XG59O1xuXG5zdGF0ZTI4OS5pZCA9IDI4OTtcblxuc3RhdGUyOTAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjkwLmlkID0gMjkwO1xuXG5zdGF0ZTI5MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUyOTEuaWQgPSAyOTE7XG5cbnN0YXRlMjkyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTI5Mi5pZCA9IDI5Mjtcblxuc3RhdGUyOTMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMjkzLmlkID0gMjkzO1xuXG5zdGF0ZTI5NC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiU1RBUlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMTIpO1xufTtcblxuc3RhdGUyOTQuaWQgPSAyOTQ7XG5cbnN0YXRlMjk1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcblxuICBpZiAodG9rZW4gPT09IDY0KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzEzKTtcbiAgfVxufTtcblxuc3RhdGUyOTUuaWQgPSAyOTU7XG5cbnN0YXRlMjk2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTI5Ni5pZCA9IDI5Njtcblxuc3RhdGUyOTcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuXG4gIGlmICh0b2tlbiA9PT0gNDApIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzMTQpO1xuICB9XG59O1xuXG5zdGF0ZTI5Ny5pZCA9IDI5Nztcblxuc3RhdGUyOTgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJwYXJhbVwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTMxOSk7XG59O1xuXG5zdGF0ZTI5OC5pZCA9IDI5ODtcblxuc3RhdGUyOTkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklERU5UXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMyMik7XG59O1xuXG5zdGF0ZTI5OS5pZCA9IDI5OTtcblxuc3RhdGUzMDAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzAwLmlkID0gMzAwO1xuXG5zdGF0ZTMwMS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0NSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMyNCk7XG4gIH1cbn07XG5cbnN0YXRlMzAxLmlkID0gMzAxO1xuXG5zdGF0ZTMwMi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMyNyk7XG4gIH1cbn07XG5cbnN0YXRlMzAyLmlkID0gMzAyO1xuXG5zdGF0ZTMwMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSAzMykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMzMCk7XG4gIH1cbn07XG5cbnN0YXRlMzAzLmlkID0gMzAzO1xuXG5zdGF0ZTMwNC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSAxMTUpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzMzMpO1xuICB9XG59O1xuXG5zdGF0ZTMwNC5pZCA9IDMwNDtcblxuc3RhdGUzMDUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMTFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzM2KTtcbn07XG5cbnN0YXRlMzA1LmlkID0gMzA1O1xuXG5zdGF0ZTMwNi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDMpO1xufTtcblxuc3RhdGUzMDYuaWQgPSAzMDY7XG5cbnN0YXRlMzA3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjExXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM1Mik7XG59O1xuXG5zdGF0ZTMwNy5pZCA9IDMwNztcblxuc3RhdGUzMDgucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMTFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzU4KTtcbn07XG5cbnN0YXRlMzA4LmlkID0gMzA4O1xuXG5zdGF0ZTMwOS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNjIpO1xufTtcblxuc3RhdGUzMDkuaWQgPSAzMDk7XG5cbnN0YXRlMzEwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjExXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2Nik7XG59O1xuXG5zdGF0ZTMxMC5pZCA9IDMxMDtcblxuc3RhdGUzMTEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMTFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzc0KTtcbn07XG5cbnN0YXRlMzExLmlkID0gMzExO1xuXG5zdGF0ZTMxMi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzMTIuaWQgPSAzMTI7XG5cbnN0YXRlMzEzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTMxMy5pZCA9IDMxMztcblxuc3RhdGUzMTQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMTUpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMTYpO1xufTtcblxuc3RhdGUzMTQuaWQgPSAzMTQ7XG5cbnN0YXRlMzE1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzE1KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzE2KTtcbn07XG5cbnN0YXRlMzE1LmlkID0gMzE1O1xuXG5zdGF0ZTMxNi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMxNyk7XG5cbiAgaWYgKHRva2VuID09PSA0MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMxOCk7XG4gIH1cbn07XG5cbnN0YXRlMzE2LmlkID0gMzE2O1xuXG5zdGF0ZTMxNy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMxNyk7XG5cbiAgaWYgKHRva2VuID09PSA0MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMxOCk7XG4gIH1cbn07XG5cbnN0YXRlMzE3LmlkID0gMzE3O1xuXG5zdGF0ZTMxOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzMTguaWQgPSAzMTg7XG5cbnN0YXRlMzE5LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJREVOVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMjApO1xufTtcblxuc3RhdGUzMTkuaWQgPSAzMTk7XG5cbnN0YXRlMzIwLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwicGFyYW1fZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzIxKTtcbn07XG5cbnN0YXRlMzIwLmlkID0gMzIwO1xuXG5zdGF0ZTMyMS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzMjEuaWQgPSAzMjE7XG5cbnN0YXRlMzIyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiaWRlbnRfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzIzKTtcbn07XG5cbnN0YXRlMzIyLmlkID0gMzIyO1xuXG5zdGF0ZTMyMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzMjMuaWQgPSAzMjM7XG5cbnN0YXRlMzI0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzI1KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjlcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzI2KTtcbn07XG5cbnN0YXRlMzI0LmlkID0gMzI0O1xuXG5zdGF0ZTMyNS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMyNSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl45XCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMyNik7XG59O1xuXG5zdGF0ZTMyNS5pZCA9IDMyNTtcblxuc3RhdGUzMjYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzI2LmlkID0gMzI2O1xuXG5zdGF0ZTMyNy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMyOCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMjkpO1xufTtcblxuc3RhdGUzMjcuaWQgPSAzMjc7XG5cbnN0YXRlMzI4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzI4KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjExXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMyOSk7XG59O1xuXG5zdGF0ZTMyOC5pZCA9IDMyODtcblxuc3RhdGUzMjkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzI5LmlkID0gMzI5O1xuXG5zdGF0ZTMzMC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMzMSk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMzIpO1xufTtcblxuc3RhdGUzMzAuaWQgPSAzMzA7XG5cbnN0YXRlMzMxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzMxKTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjExXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMzMik7XG59O1xuXG5zdGF0ZTMzMS5pZCA9IDMzMTtcblxuc3RhdGUzMzIucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzMyLmlkID0gMzMyO1xuXG5zdGF0ZTMzMy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMzNCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMzUpO1xufTtcblxuc3RhdGUzMzMuaWQgPSAzMzM7XG5cbnN0YXRlMzM0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzM0KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjExXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMzNSk7XG59O1xuXG5zdGF0ZTMzNC5pZCA9IDMzNDtcblxuc3RhdGUzMzUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzM1LmlkID0gMzM1O1xuXG5zdGF0ZTMzNi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA0NSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMzNyk7XG4gIH1cbn07XG5cbnN0YXRlMzM2LmlkID0gMzM2O1xuXG5zdGF0ZTMzNy5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA2Mikge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTMzOCk7XG4gIH1cbn07XG5cbnN0YXRlMzM3LmlkID0gMzM3O1xuXG5zdGF0ZTMzOC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTMzOSk7XG4gIHN0ZXAuYWRkTWFyayhcImRlcmVmX2ZpZWxkXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzQwKTtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTMzOC5pZCA9IDMzODtcblxuc3RhdGUzMzkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzMzkpO1xuICBzdGVwLmFkZE1hcmsoXCJkZXJlZl9maWVsZFwiLCBmcmFtZS5jb250ZXh0LCBzdGF0ZTM0MCk7XG59O1xuXG5zdGF0ZTMzOS5pZCA9IDMzOTtcblxuc3RhdGUzNDAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklERU5UXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM0MSk7XG59O1xuXG5zdGF0ZTM0MC5pZCA9IDM0MDtcblxuc3RhdGUzNDEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLmFkZE1hcmsoXCJlbmRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUzNDIpO1xufTtcblxuc3RhdGUzNDEuaWQgPSAzNDE7XG5cbnN0YXRlMzQyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTM0Mi5pZCA9IDM0Mjtcblxuc3RhdGUzNDMucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDQpO1xuXG4gIGlmICh0b2tlbiA9PT0gNDYpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzNDUpO1xuICB9XG59O1xuXG5zdGF0ZTM0My5pZCA9IDM0Mztcblxuc3RhdGUzNDQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDQpO1xuXG4gIGlmICh0b2tlbiA9PT0gNDYpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzNDUpO1xuICB9XG59O1xuXG5zdGF0ZTM0NC5pZCA9IDM0NDtcblxuc3RhdGUzNDUucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDYpO1xuXG4gIGlmICh0b2tlbiA9PT0gOTEpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzNDcpO1xuICB9XG59O1xuXG5zdGF0ZTM0NS5pZCA9IDM0NTtcblxuc3RhdGUzNDYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDYpO1xuXG4gIGlmICh0b2tlbiA9PT0gOTEpIHtcbiAgICBmcmFtZS5hZGROZXh0U3RhdGUoc3RhdGUzNDcpO1xuICB9XG59O1xuXG5zdGF0ZTM0Ni5pZCA9IDM0Njtcblxuc3RhdGUzNDcucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDgpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNDkpO1xufTtcblxuc3RhdGUzNDcuaWQgPSAzNDc7XG5cbnN0YXRlMzQ4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzQ4KTtcbiAgc3RlcC5zdGFydENhbGwoXCJFWFBSXjFcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzQ5KTtcbn07XG5cbnN0YXRlMzQ4LmlkID0gMzQ4O1xuXG5zdGF0ZTM0OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM1MCk7XG5cbiAgaWYgKHRva2VuID09PSA5Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM1MSk7XG4gIH1cbn07XG5cbnN0YXRlMzQ5LmlkID0gMzQ5O1xuXG5zdGF0ZTM1MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM1MCk7XG5cbiAgaWYgKHRva2VuID09PSA5Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM1MSk7XG4gIH1cbn07XG5cbnN0YXRlMzUwLmlkID0gMzUwO1xuXG5zdGF0ZTM1MS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzNTEuaWQgPSAzNTE7XG5cbnN0YXRlMzUyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzUzKTtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzU0KTtcbiAgfVxufTtcblxuc3RhdGUzNTIuaWQgPSAzNTI7XG5cbnN0YXRlMzUzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzUzKTtcblxuICBpZiAodG9rZW4gPT09IDQ2KSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzU0KTtcbiAgfVxufTtcblxuc3RhdGUzNTMuaWQgPSAzNTM7XG5cbnN0YXRlMzU0LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiaWRlbnRcIiwgZnJhbWUuY29udGV4dCwgc3RhdGUzNTUpO1xufTtcblxuc3RhdGUzNTQuaWQgPSAzNTQ7XG5cbnN0YXRlMzU1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJREVOVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNTYpO1xufTtcblxuc3RhdGUzNTUuaWQgPSAzNTU7XG5cbnN0YXRlMzU2LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5hZGRNYXJrKFwiaWRlbnRfZW5kXCIsIGZyYW1lLmNvbnRleHQsIHN0YXRlMzU3KTtcbn07XG5cbnN0YXRlMzU2LmlkID0gMzU2O1xuXG5zdGF0ZTM1Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzNTcuaWQgPSAzNTc7XG5cbnN0YXRlMzU4LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzU5KTtcbiAgc3RlcC5zdGFydENhbGwoXCJQSVBFXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2MCk7XG59O1xuXG5zdGF0ZTM1OC5pZCA9IDM1ODtcblxuc3RhdGUzNTkucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNTkpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIlBJUEVcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzYwKTtcbn07XG5cbnN0YXRlMzU5LmlkID0gMzU5O1xuXG5zdGF0ZTM2MC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRlVOQ19DQUxMXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2MSk7XG59O1xuXG5zdGF0ZTM2MC5pZCA9IDM2MDtcblxuc3RhdGUzNjEucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnJldHVybkNhbGwoXCJFWFBSXjExXCIsIGZyYW1lKTtcbn07XG5cbnN0YXRlMzYxLmlkID0gMzYxO1xuXG5zdGF0ZTM2Mi5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2Myk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiUElQRVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNjQpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIk9CSkVDVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNjUpO1xufTtcblxuc3RhdGUzNjIuaWQgPSAzNjI7XG5cbnN0YXRlMzYzLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzYzKTtcbiAgc3RlcC5zdGFydENhbGwoXCJQSVBFXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2NCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiT0JKRUNUXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2NSk7XG59O1xuXG5zdGF0ZTM2My5pZCA9IDM2Mztcblxuc3RhdGUzNjQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIk9CSkVDVFwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNjUpO1xufTtcblxuc3RhdGUzNjQuaWQgPSAzNjQ7XG5cbnN0YXRlMzY1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTM2NS5pZCA9IDM2NTtcblxuc3RhdGUzNjYucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNjcpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIlBJUEVcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzY4KTtcblxuICBpZiAodG9rZW4gPT09IDkxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzY5KTtcbiAgfVxufTtcblxuc3RhdGUzNjYuaWQgPSAzNjY7XG5cbnN0YXRlMzY3LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzY3KTtcbiAgc3RlcC5zdGFydENhbGwoXCJQSVBFXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM2OCk7XG5cbiAgaWYgKHRva2VuID09PSA5MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM2OSk7XG4gIH1cbn07XG5cbnN0YXRlMzY3LmlkID0gMzY3O1xuXG5zdGF0ZTM2OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA5MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM2OSk7XG4gIH1cbn07XG5cbnN0YXRlMzY4LmlkID0gMzY4O1xuXG5zdGF0ZTM2OS5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiSUdOXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM3MCk7XG4gIHN0ZXAuc3RhcnRDYWxsKFwiRVhQUl4xXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM3MSk7XG59O1xuXG5zdGF0ZTM2OS5pZCA9IDM2OTtcblxuc3RhdGUzNzAucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNzApO1xuICBzdGVwLnN0YXJ0Q2FsbChcIkVYUFJeMVwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNzEpO1xufTtcblxuc3RhdGUzNzAuaWQgPSAzNzA7XG5cbnN0YXRlMzcxLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzcyKTtcblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzczKTtcbiAgfVxufTtcblxuc3RhdGUzNzEuaWQgPSAzNzE7XG5cbnN0YXRlMzcyLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzcyKTtcblxuICBpZiAodG9rZW4gPT09IDkzKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzczKTtcbiAgfVxufTtcblxuc3RhdGUzNzIuaWQgPSAzNzI7XG5cbnN0YXRlMzczLnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgc3RlcC5yZXR1cm5DYWxsKFwiRVhQUl4xMVwiLCBmcmFtZSk7XG59O1xuXG5zdGF0ZTM3My5pZCA9IDM3Mztcblxuc3RhdGUzNzQucCA9IGZ1bmN0aW9uIChzdGVwLCBmcmFtZSkge1xuICB2YXIgdG9rZW4gPSBzdGVwLnRva2VuO1xuICBzdGVwLnN0YXJ0Q2FsbChcIklHTlwiKS5hZGRSZXR1cm4oZnJhbWUuY29udGV4dCwgc3RhdGUzNzUpO1xuICBzdGVwLnN0YXJ0Q2FsbChcIlBJUEVcIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzc2KTtcblxuICBpZiAodG9rZW4gPT09IDkxKSB7XG4gICAgZnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMzc3KTtcbiAgfVxufTtcblxuc3RhdGUzNzQuaWQgPSAzNzQ7XG5cbnN0YXRlMzc1LnAgPSBmdW5jdGlvbiAoc3RlcCwgZnJhbWUpIHtcbiAgdmFyIHRva2VuID0gc3RlcC50b2tlbjtcbiAgc3RlcC5zdGFydENhbGwoXCJJR05cIikuYWRkUmV0dXJuKGZyYW1lLmNvbnRleHQsIHN0YXRlMzc1KTtcbiAgc3RlcC5zdGFydENhbGwoXCJQSVBFXCIpLmFkZFJldHVybihmcmFtZS5jb250ZXh0LCBzdGF0ZTM3Nik7XG5cbiAgaWYgKHRva2VuID09PSA5MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM3Nyk7XG4gIH1cbn07XG5cbnN0YXRlMzc1LmlkID0gMzc1O1xuXG5zdGF0ZTM3Ni5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA5MSkge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM3Nyk7XG4gIH1cbn07XG5cbnN0YXRlMzc2LmlkID0gMzc2O1xuXG5zdGF0ZTM3Ny5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHZhciB0b2tlbiA9IHN0ZXAudG9rZW47XG5cbiAgaWYgKHRva2VuID09PSA5Mykge1xuICAgIGZyYW1lLmFkZE5leHRTdGF0ZShzdGF0ZTM3OCk7XG4gIH1cbn07XG5cbnN0YXRlMzc3LmlkID0gMzc3O1xuXG5zdGF0ZTM3OC5wID0gZnVuY3Rpb24gKHN0ZXAsIGZyYW1lKSB7XG4gIHN0ZXAucmV0dXJuQ2FsbChcIkVYUFJeMTFcIiwgZnJhbWUpO1xufTtcblxuc3RhdGUzNzguaWQgPSAzNzg7XG52YXIgaW5pdGlhbENvbnRleHQgPSAvKiNfX1BVUkVfXyovbmV3IENvbnRleHQobnVsbCwgbnVsbCk7XG52YXIgaW5pdGlhbEZyYW1lID0gLyojX19QVVJFX18qL25ldyBGcmFtZShpbml0aWFsQ29udGV4dCk7XG5pbml0aWFsRnJhbWUuYWRkTmV4dFN0YXRlKHN0YXRlMCk7XG52YXIgaW5pdGlhbEZyYW1lcyA9IFtpbml0aWFsRnJhbWVdO1xudmFyIHJ1bGVJbml0aWFsU3RhdGVzID0ge307XG5ydWxlSW5pdGlhbFN0YXRlc1tcIm1haW5cIl0gPSBbc3RhdGUyXTtcbnJ1bGVJbml0aWFsU3RhdGVzW1wiU1BBQ0VcIl0gPSBbc3RhdGU2XTtcbnJ1bGVJbml0aWFsU3RhdGVzW1wiQ09NTUVOVFwiXSA9IFtzdGF0ZTE1XTtcbnJ1bGVJbml0aWFsU3RhdGVzW1wiQ09NTUVOVF9FTkRcIl0gPSBbc3RhdGUyMV07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIklHTlwiXSA9IFtzdGF0ZTIzXTtcbnJ1bGVJbml0aWFsU3RhdGVzW1wiUElQRVwiXSA9IFtzdGF0ZTI2XTtcbnJ1bGVJbml0aWFsU3RhdGVzW1wiUEFSRU5UXCJdID0gW3N0YXRlMjldO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJJREVOVF9GU1RcIl0gPSBbc3RhdGUzNl07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIklERU5UX1JFU1RcIl0gPSBbc3RhdGU0MF07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIklERU5UXCJdID0gW3N0YXRlNDNdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJTVEFSXCJdID0gW3N0YXRlNDZdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJDT01QX09QXCJdID0gW3N0YXRlNDhdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJGVU5DX0NBTExcIl0gPSBbc3RhdGU2Nl07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkZVTkNfQVJHU1wiXSA9IFtzdGF0ZTc2XTtcbnJ1bGVJbml0aWFsU3RhdGVzW1wiTlVNQkVSXCJdID0gW3N0YXRlODNdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJESUdJVFwiXSA9IFtzdGF0ZTEwMV07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIlNJR05cIl0gPSBbc3RhdGUxMDNdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJTVFJJTkdcIl0gPSBbc3RhdGUxMDZdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJEU1RSSU5HX0NIQVJcIl0gPSBbc3RhdGUxMTddO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJTU1RSSU5HX0NIQVJcIl0gPSBbc3RhdGUxMjFdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJBUlJBWVwiXSA9IFtzdGF0ZTEyNV07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkFSUkFZX0VMRU1FTlRcIl0gPSBbc3RhdGUxMzldO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJPQkpFQ1RcIl0gPSBbc3RhdGUxNDZdO1xucnVsZUluaXRpYWxTdGF0ZXNbXCJPQkpFQ1RfUEFJUlwiXSA9IFtzdGF0ZTE2MF07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeMVwiXSA9IFtzdGF0ZTE3OV07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeMlwiXSA9IFtzdGF0ZTE4OF07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeM1wiXSA9IFtzdGF0ZTE5N107XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeNFwiXSA9IFtzdGF0ZTIwNl07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeNVwiXSA9IFtzdGF0ZTIyOV07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeNlwiXSA9IFtzdGF0ZTI0Nl07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeN1wiXSA9IFtzdGF0ZTI2MF07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeOVwiXSA9IFtzdGF0ZTI4MF07XG5ydWxlSW5pdGlhbFN0YXRlc1tcIkVYUFJeMTFcIl0gPSBbc3RhdGUyODldO1xuXG5mdW5jdGlvbiBpc1ZhbHVlTm9kZShub2RlKSB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdWYWx1ZSc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG5vZGUpIHtcbiAgcmV0dXJuIGlzVmFsdWVOb2RlKG5vZGUpICYmIHR5cGVvZiBub2RlLnZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcobm9kZSkge1xuICByZXR1cm4gaXNWYWx1ZU5vZGUobm9kZSkgJiYgdHlwZW9mIG5vZGUudmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG52YXIgRVNDQVBFX1NFUVVFTkNFID0ge1xuICBcIidcIjogXCInXCIsXG4gICdcIic6ICdcIicsXG4gICdcXFxcJzogJ1xcXFwnLFxuICAnLyc6ICcvJyxcbiAgYjogJ1xcYicsXG4gIGY6ICdcXGYnLFxuICBuOiAnXFxuJyxcbiAgcjogJ1xccicsXG4gIHQ6ICdcXHQnXG59O1xuXG5mdW5jdGlvbiBleHBhbmRIZXgoc3RyKSB7XG4gIHZhciBjaGFyQ29kZSA9IHBhcnNlSW50KHN0ciwgMTYpO1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZEVzY2FwZVNlcXVlbmNlKHN0cikge1xuICB2YXIgcmUgPSAvXFxcXChbJ1wiL1xcXFxiZm5ydF18dShbQS1GYS1mMC05XXs0fSl8dVxceyhbQS1GYS1mMC05XSspXFx9KS9nO1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmUsIChfLCBlc2MsIHUxLCB1MikgPT4ge1xuICAgIGlmICh1MSkgcmV0dXJuIGV4cGFuZEhleCh1MSk7XG4gICAgaWYgKHUyKSByZXR1cm4gZXhwYW5kSGV4KHUyKTtcbiAgICByZXR1cm4gRVNDQVBFX1NFUVVFTkNFW2VzY107XG4gIH0pO1xufVxuXG5jbGFzcyBHcm9xUXVlcnlFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbnZhciBCVUlMREVSID0ge1xuICBwYXJlbihwKSB7XG4gICAgdmFyIGlubmVyID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdQYXJlbnRoZXNpcycsXG4gICAgICBiYXNlOiBpbm5lclxuICAgIH07XG4gIH0sXG5cbiAgZmlsdGVyKHApIHtcbiAgICB2YXIgYmFzZSA9IHAucHJvY2VzcygpO1xuICAgIHZhciBxdWVyeSA9IHAucHJvY2VzcygpO1xuXG4gICAgaWYgKGlzTnVtYmVyKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0VsZW1lbnQnLFxuICAgICAgICBiYXNlLFxuICAgICAgICBpbmRleDogcXVlcnlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0F0dHJpYnV0ZScsXG4gICAgICAgIGJhc2UsXG4gICAgICAgIG5hbWU6IHF1ZXJ5LnZhbHVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChxdWVyeS50eXBlID09PSAnUmFuZ2UnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU2xpY2UnLFxuICAgICAgICBiYXNlLFxuICAgICAgICBsZWZ0OiBxdWVyeS5sZWZ0LFxuICAgICAgICByaWdodDogcXVlcnkucmlnaHQsXG4gICAgICAgIGlzRXhjbHVzaXZlOiBxdWVyeS5pc0V4Y2x1c2l2ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0ZpbHRlcicsXG4gICAgICBiYXNlLFxuICAgICAgcXVlcnlcbiAgICB9O1xuICB9LFxuXG4gIHByb2plY3QocCkge1xuICAgIHZhciBiYXNlID0gcC5wcm9jZXNzKCk7XG4gICAgdmFyIHF1ZXJ5ID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdQcm9qZWN0aW9uJyxcbiAgICAgIGJhc2UsXG4gICAgICBxdWVyeVxuICAgIH07XG4gIH0sXG5cbiAgc3RhcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1N0YXInXG4gICAgfTtcbiAgfSxcblxuICB0aGlzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnVGhpcydcbiAgICB9O1xuICB9LFxuXG4gIHBhcmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BhcmVudCcsXG4gICAgICBuOiAxXG4gICAgfTtcbiAgfSxcblxuICBkYmxwYXJlbnQocCkge1xuICAgIHZhciBuZXh0ID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdQYXJlbnQnLFxuICAgICAgbjogbmV4dC5uICsgMVxuICAgIH07XG4gIH0sXG5cbiAgaWRlbnQocCkge1xuICAgIHZhciBuYW1lID0gcC5wcm9jZXNzU3RyaW5nRW5kKCk7XG4gICAgaWYgKG5hbWUgPT09ICdudWxsJykgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdWYWx1ZScsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gICAgaWYgKG5hbWUgPT09ICd0cnVlJykgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdWYWx1ZScsXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKG5hbWUgPT09ICdmYWxzZScpIHJldHVybiB7XG4gICAgICB0eXBlOiAnVmFsdWUnLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0lkZW50aWZpZXInLFxuICAgICAgbmFtZTogbmFtZVxuICAgIH07XG4gIH0sXG5cbiAgYXR0cl9pZGVudChwKSB7XG4gICAgdmFyIGJhc2UgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgbmFtZSA9IHAucHJvY2Vzc1N0cmluZygpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnQXR0cmlidXRlJyxcbiAgICAgIGJhc2UsXG4gICAgICBuYW1lXG4gICAgfTtcbiAgfSxcblxuICBhcnJfZXhwcihwKSB7XG4gICAgdmFyIGJhc2UgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ01hcHBlcicsXG4gICAgICBiYXNlXG4gICAgfTtcbiAgfSxcblxuICBpbmNfcmFuZ2UocCkge1xuICAgIHZhciBsZWZ0ID0gcC5wcm9jZXNzKCk7XG4gICAgdmFyIHJpZ2h0ID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdSYW5nZScsXG4gICAgICBsZWZ0LFxuICAgICAgcmlnaHQsXG4gICAgICBpc0V4Y2x1c2l2ZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGV4Y19yYW5nZShwKSB7XG4gICAgdmFyIGxlZnQgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgcmlnaHQgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1JhbmdlJyxcbiAgICAgIGxlZnQsXG4gICAgICByaWdodCxcbiAgICAgIGlzRXhjbHVzaXZlOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBuZWcocCkge1xuICAgIHZhciBiYXNlID0gcC5wcm9jZXNzKCk7XG5cbiAgICBpZiAoYmFzZS50eXBlID09PSAnVmFsdWUnICYmIHR5cGVvZiBiYXNlLnZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1ZhbHVlJyxcbiAgICAgICAgdmFsdWU6IC1iYXNlLnZhbHVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnTmVnJyxcbiAgICAgIGJhc2VcbiAgICB9O1xuICB9LFxuXG4gIHBvcyhwKSB7XG4gICAgdmFyIGJhc2UgPSBwLnByb2Nlc3MoKTtcblxuICAgIGlmIChpc051bWJlcihiYXNlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1ZhbHVlJyxcbiAgICAgICAgdmFsdWU6ICtiYXNlLnZhbHVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnUG9zJyxcbiAgICAgIGJhc2VcbiAgICB9O1xuICB9LFxuXG4gIGFkZChwKSB7XG4gICAgdmFyIGxlZnQgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgcmlnaHQgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09wQ2FsbCcsXG4gICAgICBvcDogJysnLFxuICAgICAgbGVmdCxcbiAgICAgIHJpZ2h0XG4gICAgfTtcbiAgfSxcblxuICBzdWIocCkge1xuICAgIHZhciBsZWZ0ID0gcC5wcm9jZXNzKCk7XG4gICAgdmFyIHJpZ2h0ID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdPcENhbGwnLFxuICAgICAgb3A6ICctJyxcbiAgICAgIGxlZnQsXG4gICAgICByaWdodFxuICAgIH07XG4gIH0sXG5cbiAgbXVsKHApIHtcbiAgICB2YXIgbGVmdCA9IHAucHJvY2VzcygpO1xuICAgIHZhciByaWdodCA9IHAucHJvY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnT3BDYWxsJyxcbiAgICAgIG9wOiAnKicsXG4gICAgICBsZWZ0LFxuICAgICAgcmlnaHRcbiAgICB9O1xuICB9LFxuXG4gIGRpdihwKSB7XG4gICAgdmFyIGxlZnQgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgcmlnaHQgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09wQ2FsbCcsXG4gICAgICBvcDogJy8nLFxuICAgICAgbGVmdCxcbiAgICAgIHJpZ2h0XG4gICAgfTtcbiAgfSxcblxuICBtb2QocCkge1xuICAgIHZhciBsZWZ0ID0gcC5wcm9jZXNzKCk7XG4gICAgdmFyIHJpZ2h0ID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdPcENhbGwnLFxuICAgICAgb3A6ICclJyxcbiAgICAgIGxlZnQsXG4gICAgICByaWdodFxuICAgIH07XG4gIH0sXG5cbiAgcG93KHApIHtcbiAgICB2YXIgbGVmdCA9IHAucHJvY2VzcygpO1xuICAgIHZhciByaWdodCA9IHAucHJvY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnT3BDYWxsJyxcbiAgICAgIG9wOiAnKionLFxuICAgICAgbGVmdCxcbiAgICAgIHJpZ2h0XG4gICAgfTtcbiAgfSxcblxuICBkZXJlZihwKSB7XG4gICAgdmFyIGJhc2UgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgbmV4dE1hcmsgPSBwLmdldE1hcmsoKTtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgdHlwZTogJ0RlcmVmJyxcbiAgICAgIGJhc2VcbiAgICB9O1xuXG4gICAgaWYgKG5leHRNYXJrICYmIG5leHRNYXJrLm5hbWUgPT09ICdkZXJlZl9maWVsZCcpIHtcbiAgICAgIHZhciBuYW1lID0gcC5wcm9jZXNzU3RyaW5nKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQXR0cmlidXRlJyxcbiAgICAgICAgYmFzZTogcmVzdWx0LFxuICAgICAgICBuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgY29tcChwKSB7XG4gICAgdmFyIGxlZnQgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgb3AgPSBwLnByb2Nlc3NTdHJpbmcoKTtcbiAgICB2YXIgcmlnaHQgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09wQ2FsbCcsXG4gICAgICBvcDogb3AsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgcmlnaHQ6IHJpZ2h0XG4gICAgfTtcbiAgfSxcblxuICBzdHJfYmVnaW4ocCkge1xuICAgIHZhciB2YWx1ZSA9IGV4cGFuZEVzY2FwZVNlcXVlbmNlKHAucHJvY2Vzc1N0cmluZ0VuZCgpKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1ZhbHVlJyxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH0sXG5cbiAgaW50ZWdlcihwKSB7XG4gICAgdmFyIHN0clZhbHVlID0gcC5wcm9jZXNzU3RyaW5nRW5kKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdWYWx1ZScsXG4gICAgICB2YWx1ZTogTnVtYmVyKHN0clZhbHVlKVxuICAgIH07XG4gIH0sXG5cbiAgZmxvYXQocCkge1xuICAgIHZhciBzdHJWYWx1ZSA9IHAucHJvY2Vzc1N0cmluZ0VuZCgpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnVmFsdWUnLFxuICAgICAgdmFsdWU6IE51bWJlcihzdHJWYWx1ZSlcbiAgICB9O1xuICB9LFxuXG4gIHNjaShwKSB7XG4gICAgdmFyIHN0clZhbHVlID0gcC5wcm9jZXNzU3RyaW5nRW5kKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdWYWx1ZScsXG4gICAgICB2YWx1ZTogTnVtYmVyKHN0clZhbHVlKVxuICAgIH07XG4gIH0sXG5cbiAgcGFpcihwKSB7XG4gICAgdmFyIGxlZnQgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgcmlnaHQgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BhaXInLFxuICAgICAgbGVmdCxcbiAgICAgIHJpZ2h0XG4gICAgfTtcbiAgfSxcblxuICBvYmplY3QocCkge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gW107XG5cbiAgICB3aGlsZSAocC5nZXRNYXJrKCkubmFtZSAhPT0gJ29iamVjdF9lbmQnKSB7XG4gICAgICBhdHRyaWJ1dGVzLnB1c2gocC5wcm9jZXNzKCkpO1xuICAgIH1cblxuICAgIHAuc2hpZnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09iamVjdCcsXG4gICAgICBhdHRyaWJ1dGVzXG4gICAgfTtcbiAgfSxcblxuICBvYmplY3RfZXhwcihwKSB7XG4gICAgdmFyIHZhbHVlID0gcC5wcm9jZXNzKCk7XG5cbiAgICBpZiAodmFsdWUudHlwZSA9PT0gJ1BhaXInKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnT2JqZWN0Q29uZGl0aW9uYWxTcGxhdCcsXG4gICAgICAgIGNvbmRpdGlvbjogdmFsdWUubGVmdCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLnJpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnT2JqZWN0QXR0cmlidXRlJyxcbiAgICAgIGtleToge1xuICAgICAgICB0eXBlOiAnVmFsdWUnLFxuICAgICAgICB2YWx1ZTogZXh0cmFjdFByb3BlcnR5S2V5KHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH0sXG5cbiAgb2JqZWN0X3BhaXIocCkge1xuICAgIHZhciBrZXkgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgdmFsdWUgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09iamVjdEF0dHJpYnV0ZScsXG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH0sXG5cbiAgb2JqZWN0X3NwbGF0KHApIHtcbiAgICB2YXIgdmFsdWUgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09iamVjdFNwbGF0JyxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfSxcblxuICBvYmplY3Rfc3BsYXRfdGhpcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ09iamVjdFNwbGF0JyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdUaGlzJ1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgYXJyYXkocCkge1xuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuXG4gICAgd2hpbGUgKHAuZ2V0TWFyaygpLm5hbWUgIT09ICdhcnJheV9lbmQnKSB7XG4gICAgICB2YXIgaXNTcGxhdCA9IGZhbHNlO1xuXG4gICAgICBpZiAocC5nZXRNYXJrKCkubmFtZSA9PT0gJ2FycmF5X3NwbGF0Jykge1xuICAgICAgICBpc1NwbGF0ID0gdHJ1ZTtcbiAgICAgICAgcC5zaGlmdCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBwLnByb2Nlc3MoKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goe1xuICAgICAgICB0eXBlOiAnQXJyYXlFbGVtZW50JyxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGlzU3BsYXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHAuc2hpZnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0FycmF5JyxcbiAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1xuICAgIH07XG4gIH0sXG5cbiAgZnVuY19jYWxsKHApIHtcbiAgICB2YXIgbmFtZSA9IHAucHJvY2Vzc1N0cmluZ0VuZCgpO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICB3aGlsZSAocC5nZXRNYXJrKCkubmFtZSAhPT0gJ2Z1bmNfYXJnc19lbmQnKSB7XG4gICAgICBhcmdzLnB1c2gocC5wcm9jZXNzKCkpO1xuICAgIH1cblxuICAgIHAuc2hpZnQoKTtcbiAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uc1tuYW1lXTtcblxuICAgIGlmICghZnVuYykge1xuICAgICAgdGhyb3cgbmV3IEdyb3FRdWVyeUVycm9yKFwiVW5kZWZpbmVkIGZ1bmN0aW9uOiBcIiArIG5hbWUpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQXJpdHkobmFtZSwgZnVuYy5hcml0eSwgYXJncy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRnVuY0NhbGwnLFxuICAgICAgZnVuYyxcbiAgICAgIG5hbWUsXG4gICAgICBhcmdzXG4gICAgfTtcbiAgfSxcblxuICBwaXBlY2FsbChwKSB7XG4gICAgdmFyIGJhc2UgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgbmFtZSA9IHAucHJvY2Vzc1N0cmluZygpO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIG1hcmtOYW1lID0gcC5nZXRNYXJrKCkubmFtZTtcbiAgICAgIGlmIChtYXJrTmFtZSA9PT0gJ2Z1bmNfYXJnc19lbmQnKSBicmVhaztcblxuICAgICAgaWYgKG5hbWUgPT09ICdvcmRlcicpIHtcbiAgICAgICAgaWYgKG1hcmtOYW1lID09PSAnYXNjJykge1xuICAgICAgICAgIHAuc2hpZnQoKTtcbiAgICAgICAgICBhcmdzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ0FzYycsXG4gICAgICAgICAgICBiYXNlOiBwLnByb2Nlc3MoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1hcmtOYW1lID09PSAnZGVzYycpIHtcbiAgICAgICAgICBwLnNoaWZ0KCk7XG4gICAgICAgICAgYXJncy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdEZXNjJyxcbiAgICAgICAgICAgIGJhc2U6IHAucHJvY2VzcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXJncy5wdXNoKHAucHJvY2VzcygpKTtcbiAgICB9XG5cbiAgICBwLnNoaWZ0KCk7XG4gICAgdmFyIGZ1bmMgPSBwaXBlRnVuY3Rpb25zW25hbWVdO1xuXG4gICAgaWYgKCFmdW5jKSB7XG4gICAgICB0aHJvdyBuZXcgR3JvcVF1ZXJ5RXJyb3IoXCJVbmRlZmluZWQgcGlwZSBmdW5jdGlvbjogXCIgKyBuYW1lKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUFyaXR5KG5hbWUsIGZ1bmMuYXJpdHksIGFyZ3MubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BpcGVGdW5jQ2FsbCcsXG4gICAgICBmdW5jLFxuICAgICAgYmFzZSxcbiAgICAgIG5hbWU6IGZ1bmMubmFtZSxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICB9LFxuXG4gIGFuZChwKSB7XG4gICAgdmFyIGxlZnQgPSBwLnByb2Nlc3MoKTtcbiAgICB2YXIgcmlnaHQgPSBwLnByb2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0FuZCcsXG4gICAgICBsZWZ0LFxuICAgICAgcmlnaHRcbiAgICB9O1xuICB9LFxuXG4gIG9yKHApIHtcbiAgICB2YXIgbGVmdCA9IHAucHJvY2VzcygpO1xuICAgIHZhciByaWdodCA9IHAucHJvY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnT3InLFxuICAgICAgbGVmdCxcbiAgICAgIHJpZ2h0XG4gICAgfTtcbiAgfSxcblxuICBub3QocCkge1xuICAgIHZhciBiYXNlID0gcC5wcm9jZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdOb3QnLFxuICAgICAgYmFzZVxuICAgIH07XG4gIH0sXG5cbiAgYXNjKHApIHtcbiAgICB0aHJvdyBuZXcgR3JvcVF1ZXJ5RXJyb3IoJ3VuZXhwZWN0ZWQgYXNjJyk7XG4gIH0sXG5cbiAgZGVzYyhwKSB7XG4gICAgdGhyb3cgbmV3IEdyb3FRdWVyeUVycm9yKCd1bmV4cGVjdGVkIGRlc2MnKTtcbiAgfSxcblxuICBwYXJhbShwKSB7XG4gICAgdmFyIG5hbWUgPSBwLnByb2Nlc3NTdHJpbmdFbmQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ1BhcmFtZXRlcicsXG4gICAgICBuYW1lXG4gICAgfTtcbiAgfVxuXG59O1xudmFyIE5FU1RFRF9QUk9QRVJUWV9UWVBFUyA9IFsnRGVyZWYnLCAnUHJvamVjdGlvbicsICdNYXBwZXInLCAnRmlsdGVyJywgJ0VsZW1lbnQnLCAnU2xpY2UnXTtcblxuZnVuY3Rpb24gaXNOZXN0ZWRQcm9wZXJ0eVR5cGUobm9kZSkge1xuICByZXR1cm4gTkVTVEVEX1BST1BFUlRZX1RZUEVTLmluY2x1ZGVzKG5vZGUudHlwZSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0eUtleShub2RlKSB7XG4gIGlmIChub2RlLnR5cGUgPT09ICdJZGVudGlmaWVyJykge1xuICAgIHJldHVybiBub2RlLm5hbWU7XG4gIH1cblxuICBpZiAoaXNOZXN0ZWRQcm9wZXJ0eVR5cGUobm9kZSkpIHtcbiAgICByZXR1cm4gZXh0cmFjdFByb3BlcnR5S2V5KG5vZGUuYmFzZSk7XG4gIH1cblxuICB0aHJvdyBuZXcgR3JvcVF1ZXJ5RXJyb3IoJ0Nhbm5vdCBkZXRlcm1pbmUgcHJvcGVydHkga2V5IGZvciB0eXBlOiAnICsgbm9kZS50eXBlKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBcml0eShuYW1lLCBhcml0eSwgY291bnQpIHtcbiAgaWYgKHR5cGVvZiBhcml0eSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoY291bnQgIT09IGFyaXR5KSB7XG4gICAgICB0aHJvdyBuZXcgR3JvcVF1ZXJ5RXJyb3IoXCJJbmNvcnJlY3QgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBmdW5jdGlvbiBcIiArIG5hbWUgKyBcIigpLiBFeHBlY3RlZCBcIiArIGFyaXR5ICsgXCIsIGdvdCBcIiArIGNvdW50ICsgXCIuXCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcml0eSkge1xuICAgIGlmICghYXJpdHkoY291bnQpKSB7XG4gICAgICB0aHJvdyBuZXcgR3JvcVF1ZXJ5RXJyb3IoXCJJbmNvcnJlY3QgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBmdW5jdGlvbiBcIiArIG5hbWUgKyBcIigpLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgR3JvcVN5bnRheEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHN1cGVyKFwiU3ludGF4IGVycm9yIGluIEdST1EgcXVlcnkgYXQgcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgdGhpcy5uYW1lID0gJ0dyb3FTeW50YXhFcnJvcic7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbn1cbi8qKlxyXG4gKiBQYXJzZXMgYSBHUk9RIHF1ZXJ5IGFuZCByZXR1cm5zIGEgdHJlZSBzdHJ1Y3R1cmUuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlJDEoaW5wdXQpIHtcbiAgdmFyIHJlc3VsdCA9IHBhcnNlKGlucHV0KTtcbiAgaWYgKHJlc3VsdC50eXBlID09PSAnZXJyb3InKSB0aHJvdyBuZXcgR3JvcVN5bnRheEVycm9yKHJlc3VsdC5wb3NpdGlvbik7XG4gIHZhciBwcm9jZXNzb3IgPSBuZXcgTWFya1Byb2Nlc3NvcihCVUlMREVSLCBpbnB1dCwgcmVzdWx0Lm1hcmtzKTtcbiAgcmV0dXJuIHByb2Nlc3Nvci5wcm9jZXNzKCk7XG59XG5cbnZhciBpc0VxdWFsID0gZXF1YWxpdHk7XG5cbmZ1bmN0aW9uIGVxdWFsaXR5KF94LCBfeDIpIHtcbiAgcmV0dXJuIF9lcXVhbGl0eS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZXF1YWxpdHkoKSB7XG4gIF9lcXVhbGl0eSA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoYSwgYikge1xuICAgIHZhciBhVHlwZSA9IGEuZ2V0VHlwZSgpO1xuICAgIHZhciBiVHlwZSA9IGIuZ2V0VHlwZSgpO1xuICAgIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChhVHlwZSA9PT0gJ251bWJlcicgfHwgYVR5cGUgPT09ICdzdHJpbmcnIHx8IGFUeXBlID09PSAnYm9vbGVhbicgfHwgYVR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuICh5aWVsZCBhLmdldCgpKSA9PT0gKHlpZWxkIGIuZ2V0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBfZXF1YWxpdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hUZXh0KHRva2VucywgcGF0dGVybnMpIHtcbiAgaWYgKHRva2Vucy5sZW5ndGggPT09IDAgfHwgcGF0dGVybnMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBwYXR0ZXJucy5ldmVyeShwYXR0ZXJuID0+IHBhdHRlcm4odG9rZW5zKSk7XG59XG5mdW5jdGlvbiBtYXRjaFRva2VuaXplKHRleHQpIHtcbiAgcmV0dXJuIHRleHQubWF0Y2goL1tBLVphLXowLTldKy9nKTtcbn1cbmZ1bmN0aW9uIG1hdGNoQW5hbHl6ZVBhdHRlcm4odGV4dCkge1xuICB2YXIgdGVybXMgPSB0ZXh0Lm1hdGNoKC9bQS1aYS16MC05Kl0rL2cpIHx8IFtdO1xuICB2YXIgdGVybXNSZSA9IHRlcm1zLm1hcCh0ZXJtID0+IG5ldyBSZWdFeHAoJ14nICsgdGVybS5yZXBsYWNlKC9cXCovZywgJy4qJykgKyAnJCcsICdpJykpO1xuICByZXR1cm4gdG9rZW5zID0+IHRlcm1zUmUuZXZlcnkocmUgPT4gdG9rZW5zLnNvbWUodG9rZW4gPT4gcmUudGVzdCh0b2tlbikpKTtcbn1cbmZ1bmN0aW9uIGdhdGhlclRleHQoX3gsIF94Mikge1xuICByZXR1cm4gX2dhdGhlclRleHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dhdGhlclRleHQoKSB7XG4gIF9nYXRoZXJUZXh0ID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICh2YWx1ZSwgY2IpIHtcbiAgICBzd2l0Y2ggKHZhbHVlLmdldFR5cGUoKSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAge1xuICAgICAgICAgIGNiKHlpZWxkIHZhbHVlLmdldCgpKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXG4gICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9hc3luY0l0ZXJhdG9yKHZhbHVlKSwgX3N0ZXAsIF92YWx1ZTsgX3N0ZXAgPSB5aWVsZCBfaXRlcmF0b3IubmV4dCgpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gX3N0ZXAuZG9uZSwgX3ZhbHVlID0geWllbGQgX3N0ZXAudmFsdWUsICFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgcGFydCA9IF92YWx1ZTtcblxuICAgICAgICAgICAgICBpZiAocGFydC5nZXRUeXBlKCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY2IoeWllbGQgcGFydC5nZXQoKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIF9nYXRoZXJUZXh0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBvcGVyYXRvcnMgPSB7XG4gICc9PSc6IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9lcSA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGxlZnQsIHJpZ2h0LCBzY29wZSwgZXhlY3V0ZSkge1xuICAgICAgdmFyIGEgPSB5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKTtcbiAgICAgIHZhciBiID0geWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpO1xuICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGlzRXF1YWwoYSwgYik7XG4gICAgICByZXR1cm4gcmVzdWx0ID8gVFJVRV9WQUxVRSA6IEZBTFNFX1ZBTFVFO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXEoX3gsIF94MiwgX3gzLCBfeDQpIHtcbiAgICAgIHJldHVybiBfZXEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXE7XG4gIH0oKSxcbiAgJyE9JzogLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX25lcSA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGxlZnQsIHJpZ2h0LCBzY29wZSwgZXhlY3V0ZSkge1xuICAgICAgdmFyIGEgPSB5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKTtcbiAgICAgIHZhciBiID0geWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpO1xuICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGlzRXF1YWwoYSwgYik7XG4gICAgICByZXR1cm4gcmVzdWx0ID8gRkFMU0VfVkFMVUUgOiBUUlVFX1ZBTFVFO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbmVxKF94NSwgX3g2LCBfeDcsIF94OCkge1xuICAgICAgcmV0dXJuIF9uZXEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVxO1xuICB9KCksXG4gICc+JzogLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX2d0ID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAobGVmdCwgcmlnaHQsIHNjb3BlLCBleGVjdXRlKSB7XG4gICAgICB2YXIgYSA9IHlpZWxkICh5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKSkuZ2V0KCk7XG4gICAgICB2YXIgYiA9IHlpZWxkICh5aWVsZCBleGVjdXRlKHJpZ2h0LCBzY29wZSkpLmdldCgpO1xuICAgICAgdmFyIHJlc3VsdCA9IHBhcnRpYWxDb21wYXJlKGEsIGIpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA+IDAgPyBUUlVFX1ZBTFVFIDogRkFMU0VfVkFMVUU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBndChfeDksIF94MTAsIF94MTEsIF94MTIpIHtcbiAgICAgIHJldHVybiBfZ3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3Q7XG4gIH0oKSxcbiAgJz49JzogLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX2d0ZSA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGxlZnQsIHJpZ2h0LCBzY29wZSwgZXhlY3V0ZSkge1xuICAgICAgdmFyIGEgPSB5aWVsZCAoeWllbGQgZXhlY3V0ZShsZWZ0LCBzY29wZSkpLmdldCgpO1xuICAgICAgdmFyIGIgPSB5aWVsZCAoeWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpKS5nZXQoKTtcbiAgICAgIHZhciByZXN1bHQgPSBwYXJ0aWFsQ29tcGFyZShhLCBiKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgPj0gMCA/IFRSVUVfVkFMVUUgOiBGQUxTRV9WQUxVRTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGd0ZShfeDEzLCBfeDE0LCBfeDE1LCBfeDE2KSB7XG4gICAgICByZXR1cm4gX2d0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBndGU7XG4gIH0oKSxcbiAgJzwnOiAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIHZhciBfbHQgPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChsZWZ0LCByaWdodCwgc2NvcGUsIGV4ZWN1dGUpIHtcbiAgICAgIHZhciBhID0geWllbGQgKHlpZWxkIGV4ZWN1dGUobGVmdCwgc2NvcGUpKS5nZXQoKTtcbiAgICAgIHZhciBiID0geWllbGQgKHlpZWxkIGV4ZWN1dGUocmlnaHQsIHNjb3BlKSkuZ2V0KCk7XG4gICAgICB2YXIgcmVzdWx0ID0gcGFydGlhbENvbXBhcmUoYSwgYik7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0IDwgMCA/IFRSVUVfVkFMVUUgOiBGQUxTRV9WQUxVRTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGx0KF94MTcsIF94MTgsIF94MTksIF94MjApIHtcbiAgICAgIHJldHVybiBfbHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbHQ7XG4gIH0oKSxcbiAgJzw9JzogLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX2x0ZSA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGxlZnQsIHJpZ2h0LCBzY29wZSwgZXhlY3V0ZSkge1xuICAgICAgdmFyIGEgPSB5aWVsZCAoeWllbGQgZXhlY3V0ZShsZWZ0LCBzY29wZSkpLmdldCgpO1xuICAgICAgdmFyIGIgPSB5aWVsZCAoeWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpKS5nZXQoKTtcbiAgICAgIHZhciByZXN1bHQgPSBwYXJ0aWFsQ29tcGFyZShhLCBiKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgPD0gMCA/IFRSVUVfVkFMVUUgOiBGQUxTRV9WQUxVRTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGx0ZShfeDIxLCBfeDIyLCBfeDIzLCBfeDI0KSB7XG4gICAgICByZXR1cm4gX2x0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsdGU7XG4gIH0oKSxcbiAgaW46IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pbm9wID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAobGVmdCwgcmlnaHQsIHNjb3BlLCBleGVjdXRlKSB7XG4gICAgICB2YXIgYSA9IHlpZWxkIGV4ZWN1dGUobGVmdCwgc2NvcGUpO1xuICAgICAgdmFyIGNob2ljZXMgPSB5aWVsZCBleGVjdXRlKHJpZ2h0LCBzY29wZSk7XG5cbiAgICAgIHN3aXRjaCAoY2hvaWNlcy5nZXRUeXBlKCkpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfYXN5bmNJdGVyYXRvcihjaG9pY2VzKSwgX3N0ZXAsIF92YWx1ZTsgX3N0ZXAgPSB5aWVsZCBfaXRlcmF0b3IubmV4dCgpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gX3N0ZXAuZG9uZSwgX3ZhbHVlID0geWllbGQgX3N0ZXAudmFsdWUsICFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgYiA9IF92YWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoeWllbGQgaXNFcXVhbChhLCBiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBUUlVFX1ZBTFVFO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gRkFMU0VfVkFMVUU7XG5cbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIGEuZ2V0KCk7XG4gICAgICAgICAgdmFyIHJhbmdlID0geWllbGQgY2hvaWNlcy5nZXQoKTtcbiAgICAgICAgICB2YXIgbGVmdENtcCA9IHBhcnRpYWxDb21wYXJlKHZhbHVlLCByYW5nZS5sZWZ0KTtcbiAgICAgICAgICBpZiAobGVmdENtcCA9PT0gbnVsbCkgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICAgICAgdmFyIHJpZ2h0Q21wID0gcGFydGlhbENvbXBhcmUodmFsdWUsIHJhbmdlLnJpZ2h0KTtcbiAgICAgICAgICBpZiAocmlnaHRDbXAgPT09IG51bGwpIHJldHVybiBOVUxMX1ZBTFVFO1xuXG4gICAgICAgICAgaWYgKHJhbmdlLmlzRXhjbHVzaXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0Q21wID49IDAgJiYgcmlnaHRDbXAgPCAwID8gVFJVRV9WQUxVRSA6IEZBTFNFX1ZBTFVFO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbGVmdENtcCA+PSAwICYmIHJpZ2h0Q21wIDw9IDAgPyBUUlVFX1ZBTFVFIDogRkFMU0VfVkFMVUU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgIGlmIChhLmdldFR5cGUoKSAhPT0gJ3N0cmluZycpIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgICAgIHZhciBzdHIgPSB5aWVsZCBhLmdldCgpO1xuICAgICAgICAgIHZhciBwYXRoID0geWllbGQgY2hvaWNlcy5nZXQoKTtcbiAgICAgICAgICByZXR1cm4gcGF0aC5tYXRjaGVzKHN0cikgPyBUUlVFX1ZBTFVFIDogRkFMU0VfVkFMVUU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaW5vcChfeDI1LCBfeDI2LCBfeDI3LCBfeDI4KSB7XG4gICAgICByZXR1cm4gX2lub3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5vcDtcbiAgfSgpLFxuICBtYXRjaDogLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX21hdGNoID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAobGVmdCwgcmlnaHQsIHNjb3BlLCBleGVjdXRlKSB7XG4gICAgICB2YXIgdGV4dCA9IHlpZWxkIGV4ZWN1dGUobGVmdCwgc2NvcGUpO1xuICAgICAgdmFyIHBhdHRlcm4gPSB5aWVsZCBleGVjdXRlKHJpZ2h0LCBzY29wZSk7XG4gICAgICB2YXIgdG9rZW5zID0gW107XG4gICAgICB2YXIgcGF0dGVybnMgPSBbXTtcbiAgICAgIHlpZWxkIGdhdGhlclRleHQodGV4dCwgcGFydCA9PiB7XG4gICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobWF0Y2hUb2tlbml6ZShwYXJ0KSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBkaWRTdWNjZWVkID0geWllbGQgZ2F0aGVyVGV4dChwYXR0ZXJuLCBwYXJ0ID0+IHtcbiAgICAgICAgcGF0dGVybnMgPSBwYXR0ZXJucy5jb25jYXQobWF0Y2hBbmFseXplUGF0dGVybihwYXJ0KSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghZGlkU3VjY2VlZCkgcmV0dXJuIEZBTFNFX1ZBTFVFO1xuICAgICAgdmFyIG1hdGNoZWQgPSBtYXRjaFRleHQodG9rZW5zLCBwYXR0ZXJucyk7XG4gICAgICByZXR1cm4gbWF0Y2hlZCA/IFRSVUVfVkFMVUUgOiBGQUxTRV9WQUxVRTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1hdGNoKF94MjksIF94MzAsIF94MzEsIF94MzIpIHtcbiAgICAgIHJldHVybiBfbWF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0oKSxcbiAgJysnOiAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcGx1cyA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGxlZnQsIHJpZ2h0LCBzY29wZSwgZXhlY3V0ZSkge1xuICAgICAgdmFyIGEgPSB5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKTtcbiAgICAgIHZhciBiID0geWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpO1xuICAgICAgdmFyIGFUeXBlID0gYS5nZXRUeXBlKCk7XG4gICAgICB2YXIgYlR5cGUgPSBiLmdldFR5cGUoKTtcblxuICAgICAgaWYgKGFUeXBlID09PSAnbnVtYmVyJyAmJiBiVHlwZSA9PT0gJ251bWJlcicgfHwgYVR5cGUgPT09ICdzdHJpbmcnICYmIGJUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKCh5aWVsZCBhLmdldCgpKSArICh5aWVsZCBiLmdldCgpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhVHlwZSA9PT0gJ2FycmF5JyAmJiBiVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKCh5aWVsZCBhLmdldCgpKS5jb25jYXQoeWllbGQgYi5nZXQoKSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYVR5cGUgPT09ICdvYmplY3QnICYmIGJUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKF9leHRlbmRzKHt9LCB5aWVsZCBhLmdldCgpLCB5aWVsZCBiLmdldCgpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcGx1cyhfeDMzLCBfeDM0LCBfeDM1LCBfeDM2KSB7XG4gICAgICByZXR1cm4gX3BsdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1cztcbiAgfSgpLFxuICAnLSc6IC8qI19fUFVSRV9fKi9udW1lcmljT3BlcmF0b3IoKGEsIGIpID0+IGEgLSBiKSxcbiAgJyonOiAvKiNfX1BVUkVfXyovbnVtZXJpY09wZXJhdG9yKChhLCBiKSA9PiBhICogYiksXG4gICcvJzogLyojX19QVVJFX18qL251bWVyaWNPcGVyYXRvcigoYSwgYikgPT4gYSAvIGIpLFxuICAnJSc6IC8qI19fUFVSRV9fKi9udW1lcmljT3BlcmF0b3IoKGEsIGIpID0+IGEgJSBiKSxcbiAgJyoqJzogLyojX19QVVJFX18qL251bWVyaWNPcGVyYXRvcigoYSwgYikgPT4gTWF0aC5wb3coYSwgYikpXG59O1xuXG5mdW5jdGlvbiBudW1lcmljT3BlcmF0b3IoaW1wbCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAobGVmdCwgcmlnaHQsIHNjb3BlLCBleGVjdXRlKSB7XG4gICAgICB2YXIgYSA9IHlpZWxkIGV4ZWN1dGUobGVmdCwgc2NvcGUpO1xuICAgICAgdmFyIGIgPSB5aWVsZCBleGVjdXRlKHJpZ2h0LCBzY29wZSk7XG4gICAgICB2YXIgYVR5cGUgPSBhLmdldFR5cGUoKTtcbiAgICAgIHZhciBiVHlwZSA9IGIuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAoYVR5cGUgPT09ICdudW1iZXInICYmIGJUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gaW1wbCh5aWVsZCBhLmdldCgpLCB5aWVsZCBiLmdldCgpKTtcbiAgICAgICAgcmV0dXJuIGZyb21OdW1iZXIocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKF94MzcsIF94MzgsIF94MzksIF94NDApIHtcbiAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpO1xufVxuXG5mdW5jdGlvbiBpbk1hcHBlcih2YWx1ZSwgZm4pIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwcGVyVmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IE1hcHBlclZhbHVlKG5ldyBTdHJlYW1WYWx1ZSggLyojX19QVVJFX18qL193cmFwQXN5bmNHZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9hc3luY0l0ZXJhdG9yKHZhbHVlKSwgX3N0ZXAsIF92YWx1ZTsgX3N0ZXAgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfaXRlcmF0b3IubmV4dCgpKSwgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IF9zdGVwLmRvbmUsIF92YWx1ZSA9IHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9zdGVwLnZhbHVlKSwgIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb247IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnRWYWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgICB5aWVsZCBmbihlbGVtZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgeWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoX2l0ZXJhdG9yLnJldHVybigpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmbih2YWx1ZSk7XG4gIH1cbn1cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMsIHNvdXJjZSwgdmFsdWUsIHBhcmVudCkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHBhcmVudCA/IHBhcmVudC50aW1lc3RhbXAgOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gIH1cblxuICBjcmVhdGVOZXN0ZWQodmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFNjb3BlKHRoaXMucGFyYW1zLCB0aGlzLnNvdXJjZSwgdmFsdWUsIHRoaXMpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZShub2RlLCBzY29wZSkge1xuICBpZiAodHlwZW9mIEVYRUNVVE9SU1tub2RlLnR5cGVdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZXhlY3V0b3IgZm9yIG5vZGUudHlwZT0nICsgbm9kZS50eXBlKTtcbiAgfVxuXG4gIHZhciBmdW5jID0gRVhFQ1VUT1JTW25vZGUudHlwZV07XG4gIHJldHVybiBmdW5jKG5vZGUsIHNjb3BlKTtcbn1cblxudmFyIEVYRUNVVE9SUyA9IHtcbiAgVGhpcyhfLCBzY29wZSkge1xuICAgIHJldHVybiBzY29wZS52YWx1ZTtcbiAgfSxcblxuICBTdGFyKF8sIHNjb3BlKSB7XG4gICAgcmV0dXJuIHNjb3BlLnNvdXJjZTtcbiAgfSxcblxuICBQYXJhbWV0ZXIoX3JlZjYsIHNjb3BlKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNi5uYW1lO1xuICAgIHJldHVybiBmcm9tSlMoc2NvcGUucGFyYW1zW25hbWVdKTtcbiAgfSxcblxuICBQYXJlbnQobm9kZSwgc2NvcGUpIHtcbiAgICB2YXIgY3VycmVudCA9IHNjb3BlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLm47IGkrKykge1xuICAgICAgaWYgKCFjdXJyZW50LnBhcmVudCkge1xuICAgICAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICB9LFxuXG4gIE9wQ2FsbChfcmVmNywgc2NvcGUpIHtcbiAgICB2YXIgb3AgPSBfcmVmNy5vcCxcbiAgICAgICAgbGVmdCA9IF9yZWY3LmxlZnQsXG4gICAgICAgIHJpZ2h0ID0gX3JlZjcucmlnaHQ7XG4gICAgdmFyIGZ1bmMgPSBvcGVyYXRvcnNbb3BdO1xuICAgIGlmICghZnVuYykgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG9wZXJhdG9yOiAnICsgb3ApO1xuICAgIHJldHVybiBmdW5jKGxlZnQsIHJpZ2h0LCBzY29wZSwgZXhlY3V0ZSk7XG4gIH0sXG5cbiAgRnVuY0NhbGwoX3JlZjgsIHNjb3BlKSB7XG4gICAgdmFyIGZ1bmMgPSBfcmVmOC5mdW5jLFxuICAgICAgICBhcmdzID0gX3JlZjguYXJncztcbiAgICByZXR1cm4gZnVuYyhhcmdzLCBzY29wZSwgZXhlY3V0ZSk7XG4gIH0sXG5cbiAgUGlwZUZ1bmNDYWxsKF9yZWY5LCBzY29wZSkge1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIGZ1bmMgPSBfcmVmOS5mdW5jLFxuICAgICAgICAgIGJhc2UgPSBfcmVmOS5iYXNlLFxuICAgICAgICAgIGFyZ3MgPSBfcmVmOS5hcmdzO1xuICAgICAgdmFyIGJhc2VWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUoYmFzZSwgc2NvcGUpO1xuICAgICAgcmV0dXJuIGZ1bmMoYmFzZVZhbHVlLCBhcmdzLCBzY29wZSwgZXhlY3V0ZSk7XG4gICAgfSkoKTtcbiAgfSxcblxuICBGaWx0ZXIoX3JlZjEwLCBzY29wZSkge1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIGJhc2UgPSBfcmVmMTAuYmFzZSxcbiAgICAgICAgICBxdWVyeSA9IF9yZWYxMC5xdWVyeTtcbiAgICAgIHZhciBiYXNlVmFsdWUgPSB5aWVsZCBleGVjdXRlKGJhc2UsIHNjb3BlKTtcbiAgICAgIHJldHVybiBpbk1hcHBlcihiYXNlVmFsdWUsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmMTEgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmdldFR5cGUoKSAhPT0gJ2FycmF5JykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdHJlYW1WYWx1ZSggLyojX19QVVJFX18qL193cmFwQXN5bmNHZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjI7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfYXN5bmNJdGVyYXRvcih2YWx1ZSksIF9zdGVwMiwgX3ZhbHVlMjsgX3N0ZXAyID0geWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoX2l0ZXJhdG9yMi5uZXh0KCkpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IF9zdGVwMi5kb25lLCBfdmFsdWUyID0geWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoX3N0ZXAyLnZhbHVlKSwgIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF92YWx1ZTI7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1Njb3BlID0gc2NvcGUuY3JlYXRlTmVzdGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBjb25kVmFsdWUgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihleGVjdXRlKHF1ZXJ5LCBuZXdTY29wZSkpO1xuICAgICAgICAgICAgICAgIGlmIChjb25kVmFsdWUuZ2V0Qm9vbGVhbigpKSB5aWVsZCBlbGVtZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9pdGVyYXRvcjIucmV0dXJuKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYxMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpKTtcbiAgICB9KSgpO1xuICB9LFxuXG4gIEVsZW1lbnQoX3JlZjEyLCBzY29wZSkge1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIGJhc2UgPSBfcmVmMTIuYmFzZSxcbiAgICAgICAgICBpbmRleCA9IF9yZWYxMi5pbmRleDtcbiAgICAgIHZhciBiYXNlVmFsdWUgPSB5aWVsZCBleGVjdXRlKGJhc2UsIHNjb3BlKTtcbiAgICAgIHJldHVybiBpbk1hcHBlcihiYXNlVmFsdWUsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmMTMgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGFycmF5VmFsdWUpIHtcbiAgICAgICAgICBpZiAoYXJyYXlWYWx1ZS5nZXRUeXBlKCkgIT09ICdhcnJheScpIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgICAgIHZhciBpZHhWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUoaW5kZXgsIHNjb3BlKTtcbiAgICAgICAgICBpZiAoaWR4VmFsdWUuZ2V0VHlwZSgpICE9PSAnbnVtYmVyJykgcmV0dXJuIE5VTExfVkFMVUU7IC8vIE9QVDogSGVyZSB3ZSBjYW4gb3B0aW1pemUgd2hlbiBpZHggPj0gMFxuXG4gICAgICAgICAgdmFyIGFycmF5ID0geWllbGQgYXJyYXlWYWx1ZS5nZXQoKTtcbiAgICAgICAgICB2YXIgaWR4ID0geWllbGQgaWR4VmFsdWUuZ2V0KCk7XG5cbiAgICAgICAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgICAgICAgaWR4ID0gYXJyYXkubGVuZ3RoICsgaWR4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpZHggPj0gMCAmJiBpZHggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RhdGljVmFsdWUoYXJyYXlbaWR4XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSByZXR1cm4gYG51bGxgIGZvciBvdXQtb2YtYm91bmRzIGFjY2Vzc1xuICAgICAgICAgICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94Mikge1xuICAgICAgICAgIHJldHVybiBfcmVmMTMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oKSk7XG4gICAgfSkoKTtcbiAgfSxcblxuICBTbGljZShfcmVmMTQsIHNjb3BlKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgYmFzZSA9IF9yZWYxNC5iYXNlLFxuICAgICAgICAgIGxlZnQgPSBfcmVmMTQubGVmdCxcbiAgICAgICAgICByaWdodCA9IF9yZWYxNC5yaWdodCxcbiAgICAgICAgICBpc0V4Y2x1c2l2ZSA9IF9yZWYxNC5pc0V4Y2x1c2l2ZTtcbiAgICAgIHZhciBiYXNlVmFsdWUgPSB5aWVsZCBleGVjdXRlKGJhc2UsIHNjb3BlKTtcbiAgICAgIHJldHVybiBpbk1hcHBlcihiYXNlVmFsdWUsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmMTUgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKGFycmF5VmFsdWUpIHtcbiAgICAgICAgICBpZiAoYXJyYXlWYWx1ZS5nZXRUeXBlKCkgIT09ICdhcnJheScpIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgICAgIHZhciBsZWZ0SWR4VmFsdWUgPSB5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKTtcbiAgICAgICAgICB2YXIgcmlnaHRJZHhWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUocmlnaHQsIHNjb3BlKTtcblxuICAgICAgICAgIGlmIChsZWZ0SWR4VmFsdWUuZ2V0VHlwZSgpICE9PSAnbnVtYmVyJyB8fCByaWdodElkeFZhbHVlLmdldFR5cGUoKSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgICAgIH0gLy8gT1BUOiBIZXJlIHdlIGNhbiBvcHRpbWl6ZSB3aGVuIGVpdGhlciBpbmRpY2VzIGFyZSA+PSAwXG5cblxuICAgICAgICAgIHZhciBhcnJheSA9IHlpZWxkIGFycmF5VmFsdWUuZ2V0KCk7XG4gICAgICAgICAgdmFyIGxlZnRJZHggPSB5aWVsZCBsZWZ0SWR4VmFsdWUuZ2V0KCk7XG4gICAgICAgICAgdmFyIHJpZ2h0SWR4ID0geWllbGQgcmlnaHRJZHhWYWx1ZS5nZXQoKTsgLy8gSGFuZGxlIG5lZ2F0aXZlIGluZGV4XG5cbiAgICAgICAgICBpZiAobGVmdElkeCA8IDApIGxlZnRJZHggPSBhcnJheS5sZW5ndGggKyBsZWZ0SWR4O1xuICAgICAgICAgIGlmIChyaWdodElkeCA8IDApIHJpZ2h0SWR4ID0gYXJyYXkubGVuZ3RoICsgcmlnaHRJZHg7IC8vIENvbnZlcnQgZnJvbSBpbmNsdXNpdmUgdG8gZXhjbHVzaXZlIGluZGV4XG5cbiAgICAgICAgICBpZiAoIWlzRXhjbHVzaXZlKSByaWdodElkeCsrO1xuICAgICAgICAgIGlmIChsZWZ0SWR4IDwgMCkgbGVmdElkeCA9IDA7XG4gICAgICAgICAgaWYgKHJpZ2h0SWR4IDwgMCkgcmlnaHRJZHggPSAwOyAvLyBOb3RlOiBBdCB0aGlzIHBvaW50IHRoZSBpbmRpY2VzIG1pZ2h0IHBvaW50IG91dC1vZi1ib3VuZCwgYnV0XG4gICAgICAgICAgLy8gLnNsaWNlIGhhbmRsZXMgdGhpcyBjb3JyZWN0bHkuXG5cbiAgICAgICAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKGFycmF5LnNsaWNlKGxlZnRJZHgsIHJpZ2h0SWR4KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gzKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYxNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpKTtcbiAgICB9KSgpO1xuICB9LFxuXG4gIEF0dHJpYnV0ZShfcmVmMTYsIHNjb3BlKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgYmFzZSA9IF9yZWYxNi5iYXNlLFxuICAgICAgICAgIG5hbWUgPSBfcmVmMTYubmFtZTtcbiAgICAgIHZhciBiYXNlVmFsdWUgPSB5aWVsZCBleGVjdXRlKGJhc2UsIHNjb3BlKTtcbiAgICAgIHJldHVybiBpbk1hcHBlcihiYXNlVmFsdWUsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmMTcgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmdldFR5cGUoKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdmFsdWUuZ2V0KCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgU3RhdGljVmFsdWUoZGF0YVtuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3g0KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYxNy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpKTtcbiAgICB9KSgpO1xuICB9LFxuXG4gIElkZW50aWZpZXIoX3JlZjE4LCBzY29wZSkge1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmMTgubmFtZTtcblxuICAgICAgaWYgKHNjb3BlLnZhbHVlLmdldFR5cGUoKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCBzY29wZS52YWx1ZS5nZXQoKTtcblxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHJldHVybiBuZXcgU3RhdGljVmFsdWUoZGF0YVtuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgfSkoKTtcbiAgfSxcblxuICBWYWx1ZShfcmVmMTkpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTkudmFsdWU7XG4gICAgcmV0dXJuIG5ldyBTdGF0aWNWYWx1ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgTWFwcGVyKF9yZWYyMCwgc2NvcGUpIHtcbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBiYXNlID0gX3JlZjIwLmJhc2U7XG4gICAgICB2YXIgYmFzZVZhbHVlID0geWllbGQgZXhlY3V0ZShiYXNlLCBzY29wZSk7XG4gICAgICBpZiAoYmFzZVZhbHVlLmdldFR5cGUoKSAhPT0gJ2FycmF5JykgcmV0dXJuIGJhc2VWYWx1ZTtcblxuICAgICAgaWYgKGJhc2VWYWx1ZSBpbnN0YW5jZW9mIE1hcHBlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFwcGVyVmFsdWUobmV3IFN0cmVhbVZhbHVlKCAvKiNfX1BVUkVfXyovX3dyYXBBc3luY0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXG4gICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMztcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2FzeW5jSXRlcmF0b3IoYmFzZVZhbHVlKSwgX3N0ZXAzLCBfdmFsdWUzOyBfc3RlcDMgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfaXRlcmF0b3IzLm5leHQoKSksIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gX3N0ZXAzLmRvbmUsIF92YWx1ZTMgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfc3RlcDMudmFsdWUpLCAhX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjM7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF92YWx1ZTM7XG5cbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0VHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I0O1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBfYXN5bmNJdGVyYXRvcihlbGVtZW50KSwgX3N0ZXA0LCBfdmFsdWU0OyBfc3RlcDQgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfaXRlcmF0b3I0Lm5leHQoKSksIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gX3N0ZXA0LmRvbmUsIF92YWx1ZTQgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfc3RlcDQudmFsdWUpLCAhX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQ7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ViZWxlbWVudCA9IF92YWx1ZTQ7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHN1YmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfaXRlcmF0b3I0LnJldHVybigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBOVUxMX1ZBTFVFO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfaXRlcmF0b3IzLnJldHVybigpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFwcGVyVmFsdWUoYmFzZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LFxuXG4gIFBhcmVudGhlc2lzKF9yZWYyMSwgc2NvcGUpIHtcbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBiYXNlID0gX3JlZjIxLmJhc2U7XG4gICAgICB2YXIgYmFzZVZhbHVlID0geWllbGQgZXhlY3V0ZShiYXNlLCBzY29wZSk7XG5cbiAgICAgIGlmIChiYXNlVmFsdWUgaW5zdGFuY2VvZiBNYXBwZXJWYWx1ZSkge1xuICAgICAgICBiYXNlVmFsdWUgPSBiYXNlVmFsdWUudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYXNlVmFsdWU7XG4gICAgfSkoKTtcbiAgfSxcblxuICBQcm9qZWN0aW9uKF9yZWYyMiwgc2NvcGUpIHtcbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBiYXNlID0gX3JlZjIyLmJhc2UsXG4gICAgICAgICAgcXVlcnkgPSBfcmVmMjIucXVlcnk7XG4gICAgICB2YXIgYmFzZVZhbHVlID0geWllbGQgZXhlY3V0ZShiYXNlLCBzY29wZSk7XG4gICAgICBpZiAoYmFzZVZhbHVlLmdldFR5cGUoKSA9PT0gJ251bGwnKSByZXR1cm4gTlVMTF9WQUxVRTtcblxuICAgICAgaWYgKGJhc2VWYWx1ZS5nZXRUeXBlKCkgPT09ICdhcnJheScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJlYW1WYWx1ZSggLyojX19QVVJFX18qL193cmFwQXN5bmNHZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjUgPSB0cnVlO1xuICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjUgPSBmYWxzZTtcblxuICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjU7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNSA9IF9hc3luY0l0ZXJhdG9yKGJhc2VWYWx1ZSksIF9zdGVwNSwgX3ZhbHVlNTsgX3N0ZXA1ID0geWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoX2l0ZXJhdG9yNS5uZXh0KCkpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IF9zdGVwNS5kb25lLCBfdmFsdWU1ID0geWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoX3N0ZXA1LnZhbHVlKSwgIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241OyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNSA9IHRydWUpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3ZhbHVlNTtcblxuICAgICAgICAgICAgICB2YXIgX25ld1Njb3BlID0gc2NvcGUuY3JlYXRlTmVzdGVkKHZhbHVlKTtcblxuICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihleGVjdXRlKHF1ZXJ5LCBfbmV3U2NvcGUpKTtcbiAgICAgICAgICAgICAgeWllbGQgbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjUgPSB0cnVlO1xuICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3I1ID0gZXJyO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb241ICYmIF9pdGVyYXRvcjUucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBfYXdhaXRBc3luY0dlbmVyYXRvcihfaXRlcmF0b3I1LnJldHVybigpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNSkge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3U2NvcGUgPSBzY29wZS5jcmVhdGVOZXN0ZWQoYmFzZVZhbHVlKTtcbiAgICAgIHJldHVybiB5aWVsZCBleGVjdXRlKHF1ZXJ5LCBuZXdTY29wZSk7XG4gICAgfSkoKTtcbiAgfSxcblxuICBEZXJlZihfcmVmMjMsIHNjb3BlKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgYmFzZSA9IF9yZWYyMy5iYXNlO1xuICAgICAgdmFyIGJhc2VWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUoYmFzZSwgc2NvcGUpO1xuICAgICAgcmV0dXJuIGluTWFwcGVyKGJhc2VWYWx1ZSwgLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9yZWYyNCA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoYmFzZVZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNjb3BlLnNvdXJjZS5nZXRUeXBlKCkgIT09ICdhcnJheScpIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgICAgIGlmIChiYXNlVmFsdWUuZ2V0VHlwZSgpICE9PSAnb2JqZWN0JykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICAgICAgdmFyIGlkID0gKHlpZWxkIGJhc2VWYWx1ZS5nZXQoKSkuX3JlZjtcbiAgICAgICAgICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I2ID0gZmFsc2U7XG5cbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I2O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjYgPSBfYXN5bmNJdGVyYXRvcihzY29wZS5zb3VyY2UpLCBfc3RlcDYsIF92YWx1ZTY7IF9zdGVwNiA9IHlpZWxkIF9pdGVyYXRvcjYubmV4dCgpLCBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNiA9IF9zdGVwNi5kb25lLCBfdmFsdWU2ID0geWllbGQgX3N0ZXA2LnZhbHVlLCAhX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjY7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb242ID0gdHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgZG9jID0gX3ZhbHVlNjtcblxuICAgICAgICAgICAgICBpZiAoaWQgPT09IGRvYy5kYXRhLl9pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yNiA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjYgPSBlcnI7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjYgJiYgX2l0ZXJhdG9yNi5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIF9pdGVyYXRvcjYucmV0dXJuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjYpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeDUpIHtcbiAgICAgICAgICByZXR1cm4gX3JlZjI0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KCkpO1xuICAgIH0pKCk7XG4gIH0sXG5cbiAgT2JqZWN0KF9yZWYyNSwgc2NvcGUpIHtcbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gX3JlZjI1LmF0dHJpYnV0ZXM7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjggPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGF0dHJpYnV0ZXMpLCBfc3RlcDg7ICEoX3N0ZXA4ID0gX2l0ZXJhdG9yOCgpKS5kb25lOykge1xuICAgICAgICB2YXIgYXR0ciA9IF9zdGVwOC52YWx1ZTtcbiAgICAgICAgdmFyIGF0dHJUeXBlID0gYXR0ci50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAoYXR0ci50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnT2JqZWN0QXR0cmlidXRlJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IHlpZWxkIGV4ZWN1dGUoYXR0ci5rZXksIHNjb3BlKTtcbiAgICAgICAgICAgICAgaWYgKGtleS5nZXRUeXBlKCkgIT09ICdzdHJpbmcnKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0geWllbGQgZXhlY3V0ZShhdHRyLnZhbHVlLCBzY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhbHVlLmdldFR5cGUoKSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXkuZGF0YV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXN1bHRba2V5LmRhdGFdID0geWllbGQgdmFsdWUuZ2V0KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnT2JqZWN0Q29uZGl0aW9uYWxTcGxhdCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBjb25kID0geWllbGQgZXhlY3V0ZShhdHRyLmNvbmRpdGlvbiwgc2NvcGUpO1xuICAgICAgICAgICAgICBpZiAoIWNvbmQuZ2V0Qm9vbGVhbigpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICB2YXIgX3ZhbHVlOCA9IHlpZWxkIGV4ZWN1dGUoYXR0ci52YWx1ZSwgc2NvcGUpO1xuXG4gICAgICAgICAgICAgIGlmIChfdmFsdWU4LmdldFR5cGUoKSAhPT0gJ29iamVjdCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgX3ZhbHVlOC5kYXRhKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdPYmplY3RTcGxhdCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBfdmFsdWU5ID0geWllbGQgZXhlY3V0ZShhdHRyLnZhbHVlLCBzY29wZSk7XG5cbiAgICAgICAgICAgICAgaWYgKF92YWx1ZTkuZ2V0VHlwZSgnb2JqZWN0JykpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgX3ZhbHVlOS5kYXRhKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBub2RlIHR5cGU6ICcgKyBhdHRyVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTdGF0aWNWYWx1ZShyZXN1bHQpO1xuICAgIH0pKCk7XG4gIH0sXG5cbiAgQXJyYXkoX3JlZjI2LCBzY29wZSkge1xuICAgIHZhciBlbGVtZW50cyA9IF9yZWYyNi5lbGVtZW50cztcbiAgICByZXR1cm4gbmV3IFN0cmVhbVZhbHVlKCAvKiNfX1BVUkVfXyovX3dyYXBBc3luY0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yOSA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoZWxlbWVudHMpLCBfc3RlcDk7ICEoX3N0ZXA5ID0gX2l0ZXJhdG9yOSgpKS5kb25lOykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwOS52YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlID0geWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoZXhlY3V0ZShlbGVtZW50LnZhbHVlLCBzY29wZSkpO1xuXG4gICAgICAgIGlmIChlbGVtZW50LmlzU3BsYXQpIHtcbiAgICAgICAgICBpZiAodmFsdWUuZ2V0VHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNyA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I3O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I3ID0gX2FzeW5jSXRlcmF0b3IodmFsdWUpLCBfc3RlcDcsIF92YWx1ZTc7IF9zdGVwNyA9IHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9pdGVyYXRvcjcubmV4dCgpKSwgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSBfc3RlcDcuZG9uZSwgX3ZhbHVlNyA9IHlpZWxkIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF9zdGVwNy52YWx1ZSksICFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNzsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWU3O1xuICAgICAgICAgICAgICAgIHlpZWxkIHY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjcgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjcgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjcgJiYgX2l0ZXJhdG9yNy5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgeWllbGQgX2F3YWl0QXN5bmNHZW5lcmF0b3IoX2l0ZXJhdG9yNy5yZXR1cm4oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjcpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gIH0sXG5cbiAgUmFuZ2UoX3JlZjI3LCBzY29wZSkge1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIGxlZnQgPSBfcmVmMjcubGVmdCxcbiAgICAgICAgICByaWdodCA9IF9yZWYyNy5yaWdodCxcbiAgICAgICAgICBpc0V4Y2x1c2l2ZSA9IF9yZWYyNy5pc0V4Y2x1c2l2ZTtcbiAgICAgIHZhciBsZWZ0VmFsdWUgPSB5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKTtcbiAgICAgIHZhciByaWdodFZhbHVlID0geWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpO1xuXG4gICAgICBpZiAoIVJhbmdlLmlzQ29uc3RydWN0aWJsZShsZWZ0VmFsdWUuZ2V0VHlwZSgpLCByaWdodFZhbHVlLmdldFR5cGUoKSkpIHtcbiAgICAgICAgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICB9XG5cbiAgICAgIHZhciByYW5nZSA9IG5ldyBSYW5nZSh5aWVsZCBsZWZ0VmFsdWUuZ2V0KCksIHlpZWxkIHJpZ2h0VmFsdWUuZ2V0KCksIGlzRXhjbHVzaXZlKTtcbiAgICAgIHJldHVybiBuZXcgU3RhdGljVmFsdWUocmFuZ2UpO1xuICAgIH0pKCk7XG4gIH0sXG5cbiAgUGFpcihfcmVmMjgsIHNjb3BlKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgbGVmdCA9IF9yZWYyOC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0ID0gX3JlZjI4LnJpZ2h0O1xuICAgICAgdmFyIGxlZnRWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUobGVmdCwgc2NvcGUpO1xuICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB5aWVsZCBleGVjdXRlKHJpZ2h0LCBzY29wZSk7XG4gICAgICB2YXIgcGFpciA9IG5ldyBQYWlyKHlpZWxkIGxlZnRWYWx1ZS5nZXQoKSwgeWllbGQgcmlnaHRWYWx1ZS5nZXQoKSk7XG4gICAgICByZXR1cm4gbmV3IFN0YXRpY1ZhbHVlKHBhaXIpO1xuICAgIH0pKCk7XG4gIH0sXG5cbiAgT3IoX3JlZjI5LCBzY29wZSkge1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIGxlZnQgPSBfcmVmMjkubGVmdCxcbiAgICAgICAgICByaWdodCA9IF9yZWYyOS5yaWdodDtcbiAgICAgIHZhciBsZWZ0VmFsdWUgPSB5aWVsZCBleGVjdXRlKGxlZnQsIHNjb3BlKTtcbiAgICAgIHZhciByaWdodFZhbHVlID0geWllbGQgZXhlY3V0ZShyaWdodCwgc2NvcGUpO1xuXG4gICAgICBpZiAobGVmdFZhbHVlLmdldFR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChsZWZ0VmFsdWUuZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIFRSVUVfVkFMVUU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodFZhbHVlLmdldFR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChyaWdodFZhbHVlLmRhdGEgPT09IHRydWUpIHJldHVybiBUUlVFX1ZBTFVFO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVmdFZhbHVlLmdldFR5cGUoKSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIGlmIChyaWdodFZhbHVlLmdldFR5cGUoKSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIHJldHVybiBGQUxTRV9WQUxVRTtcbiAgICB9KSgpO1xuICB9LFxuXG4gIEFuZChfcmVmMzAsIHNjb3BlKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgbGVmdCA9IF9yZWYzMC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0ID0gX3JlZjMwLnJpZ2h0O1xuICAgICAgdmFyIGxlZnRWYWx1ZSA9IHlpZWxkIGV4ZWN1dGUobGVmdCwgc2NvcGUpO1xuICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB5aWVsZCBleGVjdXRlKHJpZ2h0LCBzY29wZSk7XG5cbiAgICAgIGlmIChsZWZ0VmFsdWUuZ2V0VHlwZSgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGxlZnRWYWx1ZS5kYXRhID09PSBmYWxzZSkgcmV0dXJuIEZBTFNFX1ZBTFVFO1xuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHRWYWx1ZS5nZXRUeXBlKCkgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAocmlnaHRWYWx1ZS5kYXRhID09PSBmYWxzZSkgcmV0dXJuIEZBTFNFX1ZBTFVFO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVmdFZhbHVlLmdldFR5cGUoKSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIGlmIChyaWdodFZhbHVlLmdldFR5cGUoKSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIHJldHVybiBUUlVFX1ZBTFVFO1xuICAgIH0pKCk7XG4gIH0sXG5cbiAgTm90KF9yZWYzMSwgc2NvcGUpIHtcbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBiYXNlID0gX3JlZjMxLmJhc2U7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCBleGVjdXRlKGJhc2UsIHNjb3BlKTtcblxuICAgICAgaWYgKHZhbHVlLmdldFR5cGUoKSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiBOVUxMX1ZBTFVFO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUuZ2V0Qm9vbGVhbigpID8gRkFMU0VfVkFMVUUgOiBUUlVFX1ZBTFVFO1xuICAgIH0pKCk7XG4gIH0sXG5cbiAgTmVnKF9yZWYzMiwgc2NvcGUpIHtcbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBiYXNlID0gX3JlZjMyLmJhc2U7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCBleGVjdXRlKGJhc2UsIHNjb3BlKTtcbiAgICAgIGlmICh2YWx1ZS5nZXRUeXBlKCkgIT09ICdudW1iZXInKSByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICAgIHJldHVybiBmcm9tTnVtYmVyKC0oeWllbGQgdmFsdWUuZ2V0KCkpKTtcbiAgICB9KSgpO1xuICB9LFxuXG4gIFBvcyhfcmVmMzMsIHNjb3BlKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgYmFzZSA9IF9yZWYzMy5iYXNlO1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgZXhlY3V0ZShiYXNlLCBzY29wZSk7XG4gICAgICBpZiAodmFsdWUuZ2V0VHlwZSgpICE9PSAnbnVtYmVyJykgcmV0dXJuIE5VTExfVkFMVUU7XG4gICAgICByZXR1cm4gZnJvbU51bWJlcih5aWVsZCB2YWx1ZS5nZXQoKSk7XG4gICAgfSkoKTtcbiAgfSxcblxuICBBc2MoKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICB9KSgpO1xuICB9LFxuXG4gIERlc2MoKSB7XG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICByZXR1cm4gTlVMTF9WQUxVRTtcbiAgICB9KSgpO1xuICB9XG5cbn07XG4vKipcclxuICogRXZhbHVhdGVzIGEgcXVlcnkuXHJcbiAqL1xuXG5mdW5jdGlvbiBldmFsdWF0ZShfeDYsIF94Nykge1xuICByZXR1cm4gX2V2YWx1YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9ldmFsdWF0ZSgpIHtcbiAgX2V2YWx1YXRlID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICh0cmVlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciByb290ID0gZnJvbUpTKG9wdGlvbnMucm9vdCk7XG4gICAgdmFyIGRhdGFzZXQgPSBmcm9tSlMob3B0aW9ucy5kYXRhc2V0KTtcblxuICAgIHZhciBwYXJhbXMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucy5wYXJhbXMpO1xuXG4gICAgdmFyIHNjb3BlID0gbmV3IFNjb3BlKHBhcmFtcywgZGF0YXNldCwgcm9vdCwgbnVsbCk7XG4gICAgcmV0dXJuIHlpZWxkIGV4ZWN1dGUodHJlZSwgc2NvcGUpO1xuICB9KTtcbiAgcmV0dXJuIF9ldmFsdWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgeyBldmFsdWF0ZSwgcGFyc2UkMSBhcyBwYXJzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvcS1qcy5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBQYXRjaGVyIH0gZnJvbSAnLi9pbnRlcm5hbC1wYXRjaGVyJztcbmltcG9ydCB7IHV0ZjhjaGFyU2l6ZSwgdXRmOHN0cmluZ1NpemUsIGNvbW1vblByZWZpeCwgY29tbW9uU3VmZml4IH0gZnJvbSAnLi91dGY4JztcbnZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RlbChtZXRhKSB7XG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gICAgfVxuICAgIE1vZGVsLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcFdpdGhNZXRhKGRhdGEsIHRoaXMubWV0YSwgdGhpcy5tZXRhKTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS53cmFwV2l0aE1ldGEgPSBmdW5jdGlvbiAoZGF0YSwgc3RhcnRNZXRhLCBlbmRNZXRhKSB7XG4gICAgICAgIGlmIChlbmRNZXRhID09PSB2b2lkIDApIHsgZW5kTWV0YSA9IHRoaXMubWV0YTsgfVxuICAgICAgICByZXR1cm4geyBkYXRhOiBkYXRhLCBzdGFydE1ldGE6IHN0YXJ0TWV0YSwgZW5kTWV0YTogZW5kTWV0YSB9O1xuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLmFzT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUuY29udGVudCkge1xuICAgICAgICAgICAgdmFyIGZpZWxkcyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKHZhbHVlLmRhdGEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbCA9IF9iWzFdO1xuICAgICAgICAgICAgICAgIGZpZWxkc1trZXldID0gdGhpcy53cmFwV2l0aE1ldGEodmFsLCB2YWx1ZS5zdGFydE1ldGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUuY29udGVudCA9IHsgdHlwZTogJ29iamVjdCcsIGZpZWxkczogZmllbGRzIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLmNvbnRlbnQ7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUuYXNBcnJheSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXZhbHVlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHZhbHVlLmRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBfdGhpcy53cmFwV2l0aE1ldGEoaXRlbSwgdmFsdWUuc3RhcnRNZXRhKTsgfSk7XG4gICAgICAgICAgICB2YXIgbWV0YXMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubWV0YTsgfSk7XG4gICAgICAgICAgICB2YWx1ZS5jb250ZW50ID0geyB0eXBlOiAnYXJyYXknLCBlbGVtZW50czogZWxlbWVudHMsIG1ldGFzOiBtZXRhcyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS5jb250ZW50O1xuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLmFzU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUuY29udGVudCkge1xuICAgICAgICAgICAgdmFyIHN0ciA9IHZhbHVlLmRhdGE7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyLFxuICAgICAgICAgICAgICAgIHV0ZjhzaXplOiB1dGY4c3RyaW5nU2l6ZShzdHIpLFxuICAgICAgICAgICAgICAgIHVzZXM6IFtdLFxuICAgICAgICAgICAgICAgIHN0YXJ0TWV0YTogdmFsdWUuc3RhcnRNZXRhLFxuICAgICAgICAgICAgICAgIGVuZE1ldGE6IHZhbHVlLmVuZE1ldGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YWx1ZS5jb250ZW50ID0gdGhpcy5zdHJpbmdGcm9tUGFydHMoW3BhcnRdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUuY29udGVudDtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5zdHJpbmdGcm9tUGFydHMgPSBmdW5jdGlvbiAocGFydHMpIHtcbiAgICAgICAgdmFyIHN0ciA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcGFydHNfMSA9IHBhcnRzOyBfaSA8IHBhcnRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzXzFbX2ldO1xuICAgICAgICAgICAgcGFydC51c2VzLnB1c2goc3RyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLm9iamVjdEdldEtleXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZS5jb250ZW50LmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5vYmplY3RHZXRGaWVsZCA9IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmFzT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9iai5maWVsZHNba2V5XTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5hcnJheUdldEVsZW1lbnQgPSBmdW5jdGlvbiAodmFsdWUsIGlkeCkge1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5hc0FycmF5KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGFyci5lbGVtZW50c1tpZHhdO1xuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFbmRNZXRhKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4geyBjb250ZW50OiBjb250ZW50LCBzdGFydE1ldGE6IHRoaXMubWV0YSwgZW5kTWV0YTogdGhpcy5tZXRhIH07XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUubWFya0NoYW5nZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcCh1bndyYXAodmFsdWUpKTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS51cGRhdGVFbmRNZXRhID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGNvbnRlbnQucGFydHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgcGFydC5lbmRNZXRhID0gdGhpcy5tZXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBjb250ZW50LmVsZW1lbnRzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gX2NbX2JdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmNvbnRlbnQgJiYgdmFsLmVuZE1ldGEgIT09IHRoaXMubWV0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVFbmRNZXRhKHZhbC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWwuZW5kTWV0YSA9IHRoaXMubWV0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIF9lID0gT2JqZWN0LnZhbHVlcyhjb250ZW50LmZpZWxkcyk7IF9kIDwgX2UubGVuZ3RoOyBfZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBfZVtfZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwuY29udGVudCAmJiB2YWwuZW5kTWV0YSAhPT0gdGhpcy5tZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVuZE1ldGEodmFsLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbC5lbmRNZXRhID0gdGhpcy5tZXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLmNvcHlTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgb3RoZXIgPSB0aGlzLmFzU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ0Zyb21QYXJ0cyhvdGhlci5wYXJ0cy5zbGljZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcGFydHM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUuY29weU9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBmaWVsZHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG90aGVyID0gdGhpcy5hc09iamVjdCh2YWx1ZSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG9iai5maWVsZHMsIG90aGVyLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5jb3B5QXJyYXkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGFyciA9IHZhbHVlID8gdGhpcy5hc0FycmF5KHZhbHVlKSA6IG51bGw7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGFyciA/IGFyci5lbGVtZW50cyA6IFtdO1xuICAgICAgICB2YXIgbWV0YXMgPSBhcnIgPyBhcnIubWV0YXMgOiBbXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBlbGVtZW50czogZWxlbWVudHMsXG4gICAgICAgICAgICBtZXRhczogbWV0YXNcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5vYmplY3RTZXRGaWVsZCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0LmZpZWxkc1trZXldID0gdmFsdWU7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUub2JqZWN0RGVsZXRlRmllbGQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldC5maWVsZHNba2V5XTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5hcnJheUFwcGVuZFZhbHVlID0gZnVuY3Rpb24gKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0LmVsZW1lbnRzLnB1c2godmFsdWUpO1xuICAgICAgICB0YXJnZXQubWV0YXMucHVzaCh0aGlzLm1ldGEpO1xuICAgIH07XG4gICAgTW9kZWwucHJvdG90eXBlLmFycmF5QXBwZW5kU2xpY2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLmFzQXJyYXkoc291cmNlKTtcbiAgICAgICAgdmFyIHNhbWVQb3NpdGlvbiA9IGFyci5lbGVtZW50cy5sZW5ndGggPT09IGxlZnQ7XG4gICAgICAgIChfYSA9IHRhcmdldC5lbGVtZW50cykucHVzaC5hcHBseShfYSwgYXJyLmVsZW1lbnRzLnNsaWNlKGxlZnQsIHJpZ2h0KSk7XG4gICAgICAgIGlmIChzYW1lUG9zaXRpb24pIHtcbiAgICAgICAgICAgIChfYiA9IHRhcmdldC5tZXRhcykucHVzaC5hcHBseShfYiwgYXJyLm1ldGFzLnNsaWNlKGxlZnQsIHJpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbGVmdDsgaSA8IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQubWV0YXMucHVzaCh0aGlzLm1ldGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUuc3RyaW5nQXBwZW5kVmFsdWUgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgc3RyID0gdGhpcy5hc1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBzdHIucGFydHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IF9hW19pXTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5nQXBwZW5kUGFydCh0YXJnZXQsIHBhcnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUuc3RyaW5nQXBwZW5kUGFydCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcnQpIHtcbiAgICAgICAgdGFyZ2V0LnBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgIHBhcnQudXNlcy5wdXNoKHRhcmdldCk7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUucmVzb2x2ZVN0cmluZ1BhcnQgPSBmdW5jdGlvbiAoc3RyLCBmcm9tLCBsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBmcm9tO1xuICAgICAgICBmb3IgKHZhciBpID0gZnJvbTsgaSA8IHN0ci5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBzdHIucGFydHNbaV07XG4gICAgICAgICAgICBpZiAobGVuID09PSBwYXJ0LnV0ZjhzaXplKSB7XG4gICAgICAgICAgICAgICAgLy8gTWF0Y2hlcyBwZXJmZWN0IVxuICAgICAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW4gPCBwYXJ0LnV0ZjhzaXplKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyBhIHBhcnQgb2YgdGhpcyBjaHVuay4gV2Ugbm93IG5lZWQgdG8gc3BsaXQgaXQgdXAuXG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpdFN0cmluZyhwYXJ0LCBsZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlbiAtPSBwYXJ0LnV0ZjhzaXplO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3BsaXR0aW5nIHN0cmluZyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUuc3BsaXRTdHJpbmcgPSBmdW5jdGlvbiAocGFydCwgaWR4KSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWU7XG4gICAgICAgIHZhciByaWdodFZhbHVlO1xuICAgICAgICB2YXIgbGVmdFNpemUgPSBpZHg7XG4gICAgICAgIHZhciByaWdodFNpemUgPSBwYXJ0LnV0ZjhzaXplIC0gbGVmdFNpemU7XG4gICAgICAgIC8vIGlkeCBpcyBoZXJlIGluIFVURi04IGluZGV4LCBub3QgY29kZXBvaW50IGluZGV4LlxuICAgICAgICAvLyBUaGlzIG1lYW5zIHdlIG1pZ2h0IHRvIGFkanVzdCBmb3IgbXVsdGktYnl0ZSBjaGFyYWN0ZXJzLlxuICAgICAgICBpZiAocGFydC51dGY4c2l6ZSAhPT0gcGFydC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBieXRlQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChpZHggPSAwOyBieXRlQ291bnQgPCBsZWZ0U2l6ZTsgaWR4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHBhcnQudmFsdWUuY29kZVBvaW50QXQoaWR4KTtcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHV0ZjhjaGFyU2l6ZShjb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSA9PT0gNClcbiAgICAgICAgICAgICAgICAgICAgaWR4Kys7IC8vIFN1cnJvZ2F0ZSBwYWlyLlxuICAgICAgICAgICAgICAgIGJ5dGVDb3VudCArPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxlZnRWYWx1ZSA9IHBhcnQudmFsdWUuc2xpY2UoMCwgaWR4KTtcbiAgICAgICAgcmlnaHRWYWx1ZSA9IHBhcnQudmFsdWUuc2xpY2UoaWR4KTtcbiAgICAgICAgdmFyIG5ld1BhcnQgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmlnaHRWYWx1ZSxcbiAgICAgICAgICAgIHV0ZjhzaXplOiByaWdodFNpemUsXG4gICAgICAgICAgICB1c2VzOiBwYXJ0LnVzZXMuc2xpY2UoKSxcbiAgICAgICAgICAgIHN0YXJ0TWV0YTogcGFydC5zdGFydE1ldGEsXG4gICAgICAgICAgICBlbmRNZXRhOiBwYXJ0LmVuZE1ldGFcbiAgICAgICAgfTtcbiAgICAgICAgcGFydC52YWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICAgICAgcGFydC51dGY4c2l6ZSA9IGxlZnRTaXplO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcGFydC51c2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHVzZSA9IF9hW19pXTtcbiAgICAgICAgICAgIC8vIEluc2VydCB0aGUgbmV3IHBhcnQuXG4gICAgICAgICAgICB2YXIgaWR4XzEgPSB1c2UucGFydHMuaW5kZXhPZihwYXJ0KTtcbiAgICAgICAgICAgIGlmIChpZHhfMSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdidWc6IG1pc21hdGNoIGJldHdlZW4gc3RyaW5nIHBhcnRzIGFuZCB1c2UuJyk7XG4gICAgICAgICAgICB1c2UucGFydHMuc3BsaWNlKGlkeF8xICsgMSwgMCwgbmV3UGFydCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5zdHJpbmdBcHBlbmRTbGljZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMuYXNTdHJpbmcoc291cmNlKTtcbiAgICAgICAgdmFyIGZpcnN0UGFydCA9IHRoaXMucmVzb2x2ZVN0cmluZ1BhcnQoc3RyLCAwLCBsZWZ0KTtcbiAgICAgICAgdmFyIGxhc3RQYXJ0ID0gdGhpcy5yZXNvbHZlU3RyaW5nUGFydChzdHIsIGZpcnN0UGFydCwgcmlnaHQgLSBsZWZ0KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0UGFydDsgaSA8IGxhc3RQYXJ0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gc3RyLnBhcnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdBcHBlbmRQYXJ0KHRhcmdldCwgcGFydCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNb2RlbDtcbn0oKSk7XG4vLyBUdXJucyBhIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdCBpbnRvIGEgVmFsdWUgd2l0aCBhIGdpdmVuIG9yaWdpbi5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKGRhdGEsIG1ldGEpIHtcbiAgICByZXR1cm4geyBkYXRhOiBkYXRhLCBzdGFydE1ldGE6IG1ldGEsIGVuZE1ldGE6IG1ldGEgfTtcbn1cbi8vIENvbnZlcnRzIGEgVmFsdWUgaW50byBhIG5hdGl2ZSBKYXZhU2NyaXB0IHR5cGUuXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZS5kYXRhICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIHZhbHVlLmRhdGE7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgY29udGVudCA9IHZhbHVlLmNvbnRlbnQ7XG4gICAgc3dpdGNoIChjb250ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQucGFydHMubWFwKGZ1bmN0aW9uIChwYXJ0KSB7IHJldHVybiBwYXJ0LnZhbHVlOyB9KS5qb2luKCcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICByZXN1bHQgPSBjb250ZW50LmVsZW1lbnRzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB1bndyYXAodmFsKTsgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0Jzoge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMoY29udGVudC5maWVsZHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbCA9IF9iWzFdO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdW53cmFwKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUuZGF0YSA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8gUmV0dXJucyB0aGUgdHlwZSBvZiBhIFZhbHVlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUuY29udGVudClcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNvbnRlbnQudHlwZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZS5kYXRhKSlcbiAgICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgaWYgKHZhbHVlLmRhdGEgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5kYXRhO1xufVxuLy8gVXBkYXRlcyB0aGUgYHJpZ2h0YCB2YWx1ZSBzdWNoIHRoYXQgaXQgcmV1c2VzIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgYGxlZnRgIHZhbHVlLlxuZXhwb3J0IGZ1bmN0aW9uIHJlYmFzZVZhbHVlKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGxlZnRUeXBlID0gZ2V0VHlwZShsZWZ0KTtcbiAgICB2YXIgcmlnaHRUeXBlID0gZ2V0VHlwZShyaWdodCk7XG4gICAgaWYgKGxlZnRUeXBlICE9PSByaWdodFR5cGUpXG4gICAgICAgIHJldHVybiByaWdodDtcbiAgICB2YXIgbGVmdE1vZGVsID0gbmV3IE1vZGVsKGxlZnQuZW5kTWV0YSk7XG4gICAgdmFyIHJpZ2h0TW9kZWwgPSBuZXcgTW9kZWwocmlnaHQuZW5kTWV0YSk7XG4gICAgc3dpdGNoIChsZWZ0VHlwZSkge1xuICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgICB2YXIgbGVmdE9iaiA9IGxlZnRNb2RlbC5hc09iamVjdChsZWZ0KTtcbiAgICAgICAgICAgIHZhciByaWdodE9iaiA9IHJpZ2h0TW9kZWwuYXNPYmplY3QocmlnaHQpO1xuICAgICAgICAgICAgLy8gTnVtYmVyIG9mIGZpZWxkcyB3aGljaCBhcmUgaWRlbnRpY2FsIGluIGxlZnQgYW5kIHJpZ2h0LlxuICAgICAgICAgICAgdmFyIGlkZW50aWNhbEZpZWxkQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGxlZnRGaWVsZENvdW50ID0gT2JqZWN0LmtleXMobGVmdE9iai5maWVsZHMpLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciByaWdodEZpZWxkQ291bnQgPSBPYmplY3Qua2V5cyhyaWdodE9iai5maWVsZHMpLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhyaWdodE9iai5maWVsZHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHJpZ2h0VmFsID0gX2JbMV07XG4gICAgICAgICAgICAgICAgdmFyIGxlZnRWYWwgPSBsZWZ0T2JqLmZpZWxkc1trZXldO1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0T2JqLmZpZWxkc1trZXldID0gcmViYXNlVmFsdWUobGVmdFZhbCwgcmlnaHRWYWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRPYmouZmllbGRzW2tleV0gPT09IGxlZnRWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aWNhbEZpZWxkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpc0lkZW50aWNhbCA9IGxlZnRGaWVsZENvdW50ID09PSByaWdodEZpZWxkQ291bnQgJiYgbGVmdEZpZWxkQ291bnQgPT09IGlkZW50aWNhbEZpZWxkQ291bnQ7XG4gICAgICAgICAgICByZXR1cm4gaXNJZGVudGljYWwgPyBsZWZ0IDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYXJyYXknOiB7XG4gICAgICAgICAgICB2YXIgbGVmdEFyciA9IGxlZnRNb2RlbC5hc0FycmF5KGxlZnQpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0QXJyID0gcmlnaHRNb2RlbC5hc0FycmF5KHJpZ2h0KTtcbiAgICAgICAgICAgIGlmIChsZWZ0QXJyLmVsZW1lbnRzLmxlbmd0aCAhPT0gcmlnaHRBcnIuZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbnVtUmViYXNlZCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJpZ2h0QXJyLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRBcnIuZWxlbWVudHNbaV0gPSByZWJhc2VWYWx1ZShsZWZ0QXJyLmVsZW1lbnRzW2ldLCByaWdodEFyci5lbGVtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0QXJyLmVsZW1lbnRzW2ldICE9PSBsZWZ0QXJyLmVsZW1lbnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bVJlYmFzZWQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVtUmViYXNlZCA9PT0gMCA/IGxlZnQgOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ251bWJlcic6IHtcbiAgICAgICAgICAgIGlmICh1bndyYXAobGVmdCkgPT09IHVud3JhcChyaWdodCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdzdHJpbmcnOiB7XG4gICAgICAgICAgICB2YXIgbGVmdFJhdyA9IHVud3JhcChsZWZ0KTtcbiAgICAgICAgICAgIHZhciByaWdodFJhdyA9IHVud3JhcChyaWdodCk7XG4gICAgICAgICAgICBpZiAobGVmdFJhdyA9PT0gcmlnaHRSYXcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmlnaHRNb2RlbC5jb3B5U3RyaW5nKG51bGwpO1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbW1vblByZWZpeChsZWZ0UmF3LCByaWdodFJhdyk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29tbW9uU3VmZml4KGxlZnRSYXcsIHJpZ2h0UmF3LCBwcmVmaXgpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0TGVuID0gdXRmOHN0cmluZ1NpemUocmlnaHRSYXcpO1xuICAgICAgICAgICAgdmFyIGxlZnRMZW4gPSB1dGY4c3RyaW5nU2l6ZShsZWZ0UmF3KTtcbiAgICAgICAgICAgIGlmICgwIDwgcHJlZml4KSB7XG4gICAgICAgICAgICAgICAgcmlnaHRNb2RlbC5zdHJpbmdBcHBlbmRTbGljZShyZXN1bHQsIGxlZnQsIDAsIHByZWZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJlZml4IDwgcmlnaHRMZW4gLSBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICByaWdodE1vZGVsLnN0cmluZ0FwcGVuZFNsaWNlKHJlc3VsdCwgcmlnaHQsIHByZWZpeCwgcmlnaHRMZW4gLSBzdWZmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlZnRMZW4gLSBzdWZmaXggPCBsZWZ0TGVuKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRNb2RlbC5zdHJpbmdBcHBlbmRTbGljZShyZXN1bHQsIGxlZnQsIGxlZnRMZW4gLSBzdWZmaXgsIGxlZnRMZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gcmlnaHRNb2RlbC5maW5hbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHVud3JhcCh2YWx1ZSkgIT09IHJpZ2h0UmF3KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5jb3JyZWN0IHN0cmluZyByZWJhc2UnKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmlnaHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaChsZWZ0LCBwYXRjaCwgc3RhcnRNZXRhKSB7XG4gICAgdmFyIG1vZGVsID0gbmV3IE1vZGVsKHN0YXJ0TWV0YSk7XG4gICAgdmFyIHBhdGNoZXIgPSBuZXcgUGF0Y2hlcihtb2RlbCwgbGVmdCwgcGF0Y2gpO1xuICAgIHJldHVybiBwYXRjaGVyLnByb2Nlc3MoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluY3JlbWVudGFsLXBhdGNoZXIuanMubWFwIiwiaW1wb3J0ICogYXMgaW5jcmVtZW50YWxfMSBmcm9tICcuL2luY3JlbWVudGFsLXBhdGNoZXInO1xuZXhwb3J0IHsgaW5jcmVtZW50YWxfMSBhcyBpbmNyZW1lbnRhbCB9O1xuZXhwb3J0IHsgYXBwbHlQYXRjaCB9IGZyb20gJy4vc2ltcGxlLXBhdGNoZXInO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIE9QUyA9IFtcbiAgICAnVmFsdWUnLFxuICAgICdDb3B5JyxcbiAgICAnQmxhbmsnLFxuICAgICdSZXR1cm5JbnRvQXJyYXknLFxuICAgICdSZXR1cm5JbnRvT2JqZWN0JyxcbiAgICAnUmV0dXJuSW50b09iamVjdFNhbWVLZXknLFxuICAgICdQdXNoRmllbGQnLFxuICAgICdQdXNoRWxlbWVudCcsXG4gICAgJ1B1c2hQYXJlbnQnLFxuICAgICdQb3AnLFxuICAgICdQdXNoRmllbGRDb3B5JyxcbiAgICAnUHVzaEZpZWxkQmxhbmsnLFxuICAgICdQdXNoRWxlbWVudENvcHknLFxuICAgICdQdXNoRWxlbWVudEJsYW5rJyxcbiAgICAnUmV0dXJuSW50b09iamVjdFBvcCcsXG4gICAgJ1JldHVybkludG9PYmplY3RTYW1lS2V5UG9wJyxcbiAgICAnUmV0dXJuSW50b0FycmF5UG9wJyxcbiAgICAnT2JqZWN0U2V0RmllbGRWYWx1ZScsXG4gICAgJ09iamVjdENvcHlGaWVsZCcsXG4gICAgJ09iamVjdERlbGV0ZUZpZWxkJyxcbiAgICAnQXJyYXlBcHBlbmRWYWx1ZScsXG4gICAgJ0FycmF5QXBwZW5kU2xpY2UnLFxuICAgICdTdHJpbmdBcHBlbmRTdHJpbmcnLFxuICAgICdTdHJpbmdBcHBlbmRTbGljZSdcbl07XG52YXIgUGF0Y2hlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXRjaGVyKG1vZGVsLCByb290LCBwYXRjaCkge1xuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLmlucHV0U3RhY2sgPSBbXTtcbiAgICAgICAgdGhpcy5vdXRwdXRTdGFjayA9IFtdO1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMucGF0Y2ggPSBwYXRjaDtcbiAgICB9XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2hbdGhpcy5pKytdO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFN0YWNrLnB1c2goeyB2YWx1ZTogdGhpcy5yb290IH0pO1xuICAgICAgICB0aGlzLm91dHB1dFN0YWNrLnB1c2goeyB2YWx1ZTogdGhpcy5yb290IH0pO1xuICAgICAgICBmb3IgKDsgdGhpcy5pIDwgdGhpcy5wYXRjaC5sZW5ndGg7KSB7XG4gICAgICAgICAgICB2YXIgb3Bjb2RlID0gdGhpcy5yZWFkKCk7XG4gICAgICAgICAgICB2YXIgb3AgPSBPUFNbb3Bjb2RlXTtcbiAgICAgICAgICAgIGlmICghb3ApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGNvZGU6IFwiICsgb3Bjb2RlKTtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzb3IgPSBcInByb2Nlc3NcIiArIG9wO1xuICAgICAgICAgICAgdGhpc1twcm9jZXNzb3JdLmFwcGx5KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMub3V0cHV0U3RhY2sucG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmFsaXplT3V0cHV0KGVudHJ5KTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLmlucHV0RW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0U3RhY2tbdGhpcy5pbnB1dFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUuaW5wdXRLZXkgPSBmdW5jdGlvbiAoZW50cnksIGlkeCkge1xuICAgICAgICBpZiAoIWVudHJ5LmtleXMpIHtcbiAgICAgICAgICAgIGVudHJ5LmtleXMgPSB0aGlzLm1vZGVsLm9iamVjdEdldEtleXMoZW50cnkudmFsdWUpLnNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnkua2V5c1tpZHhdO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUub3V0cHV0RW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dFN0YWNrW3RoaXMub3V0cHV0U3RhY2subGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICBQYXRjaGVyLnByb3RvdHlwZS5vdXRwdXRBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5vdXRwdXRFbnRyeSgpO1xuICAgICAgICBpZiAoIWVudHJ5LndyaXRlVmFsdWUpIHtcbiAgICAgICAgICAgIGVudHJ5LndyaXRlVmFsdWUgPSB0aGlzLm1vZGVsLmNvcHlBcnJheShlbnRyeS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5LndyaXRlVmFsdWU7XG4gICAgfTtcbiAgICBQYXRjaGVyLnByb3RvdHlwZS5vdXRwdXRPYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMub3V0cHV0RW50cnkoKTtcbiAgICAgICAgaWYgKCFlbnRyeS53cml0ZVZhbHVlKSB7XG4gICAgICAgICAgICBlbnRyeS53cml0ZVZhbHVlID0gdGhpcy5tb2RlbC5jb3B5T2JqZWN0KGVudHJ5LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnkud3JpdGVWYWx1ZTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLm91dHB1dFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5vdXRwdXRFbnRyeSgpO1xuICAgICAgICBpZiAoIWVudHJ5LndyaXRlVmFsdWUpIHtcbiAgICAgICAgICAgIGVudHJ5LndyaXRlVmFsdWUgPSB0aGlzLm1vZGVsLmNvcHlTdHJpbmcoZW50cnkudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeS53cml0ZVZhbHVlO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUuZmluYWxpemVPdXRwdXQgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5LndyaXRlVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmFsaXplKGVudHJ5LndyaXRlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBQcm9jZXNzb3JzOlxuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC53cmFwKHRoaXMucmVhZCgpKTtcbiAgICAgICAgdGhpcy5vdXRwdXRTdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc0NvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMuaW5wdXRFbnRyeSgpO1xuICAgICAgICB0aGlzLm91dHB1dFN0YWNrLnB1c2goeyB2YWx1ZTogaW5wdXQudmFsdWUgfSk7XG4gICAgfTtcbiAgICBQYXRjaGVyLnByb3RvdHlwZS5wcm9jZXNzQmxhbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0U3RhY2sucHVzaCh7IHZhbHVlOiBudWxsIH0pO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1JldHVybkludG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5vdXRwdXRTdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZmluYWxpemVPdXRwdXQoZW50cnkpO1xuICAgICAgICB2YXIgYXJyID0gdGhpcy5vdXRwdXRBcnJheSgpO1xuICAgICAgICB0aGlzLm1vZGVsLmFycmF5QXBwZW5kVmFsdWUoYXJyLCByZXN1bHQpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1JldHVybkludG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLnJlYWQoKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5vdXRwdXRTdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZmluYWxpemVPdXRwdXQoZW50cnkpO1xuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsLm1hcmtDaGFuZ2VkKHJlc3VsdCk7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLm91dHB1dE9iamVjdCgpO1xuICAgICAgICB0aGlzLm1vZGVsLm9iamVjdFNldEZpZWxkKG9iaiwga2V5LCByZXN1bHQpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1JldHVybkludG9PYmplY3RTYW1lS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLmlucHV0RW50cnkoKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5vdXRwdXRTdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZmluYWxpemVPdXRwdXQoZW50cnkpO1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5vdXRwdXRPYmplY3QoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5vYmplY3RTZXRGaWVsZChvYmosIGlucHV0LmtleSwgcmVzdWx0KTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NQdXNoRmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLnJlYWQoKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5pbnB1dEVudHJ5KCk7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmlucHV0S2V5KGVudHJ5LCBpZHgpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLm9iamVjdEdldEZpZWxkKGVudHJ5LnZhbHVlLCBrZXkpO1xuICAgICAgICB0aGlzLmlucHV0U3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwga2V5OiBrZXkgfSk7XG4gICAgfTtcbiAgICBQYXRjaGVyLnByb3RvdHlwZS5wcm9jZXNzUHVzaEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLnJlYWQoKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5pbnB1dEVudHJ5KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuYXJyYXlHZXRFbGVtZW50KGVudHJ5LnZhbHVlLCBpZHgpO1xuICAgICAgICB0aGlzLmlucHV0U3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NQb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTdGFjay5wb3AoKTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NQdXNoRmllbGRDb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NQdXNoRmllbGQoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzQ29weSgpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1B1c2hGaWVsZEJsYW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NQdXNoRmllbGQoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzQmxhbmsoKTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NQdXNoRWxlbWVudENvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1B1c2hFbGVtZW50KCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvcHkoKTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NQdXNoRWxlbWVudEJsYW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NQdXNoRWxlbWVudCgpO1xuICAgICAgICB0aGlzLnByb2Nlc3NCbGFuaygpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1JldHVybkludG9PYmplY3RQb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JldHVybkludG9PYmplY3QoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzUG9wKCk7XG4gICAgfTtcbiAgICBQYXRjaGVyLnByb3RvdHlwZS5wcm9jZXNzUmV0dXJuSW50b09iamVjdFNhbWVLZXlQb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JldHVybkludG9PYmplY3RTYW1lS2V5KCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1BvcCgpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1JldHVybkludG9BcnJheVBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzUmV0dXJuSW50b0FycmF5KCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1BvcCgpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc09iamVjdFNldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1ZhbHVlKCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JldHVybkludG9PYmplY3QoKTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NPYmplY3RDb3B5RmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc1B1c2hGaWVsZCgpO1xuICAgICAgICB0aGlzLnByb2Nlc3NDb3B5KCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1JldHVybkludG9PYmplY3RTYW1lS2V5KCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1BvcCgpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc09iamVjdERlbGV0ZUZpZWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWR4ID0gdGhpcy5yZWFkKCk7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuaW5wdXRFbnRyeSgpO1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5pbnB1dEtleShlbnRyeSwgaWR4KTtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMub3V0cHV0T2JqZWN0KCk7XG4gICAgICAgIHRoaXMubW9kZWwub2JqZWN0RGVsZXRlRmllbGQob2JqLCBrZXkpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc0FycmF5QXBwZW5kVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwud3JhcCh0aGlzLnJlYWQoKSk7XG4gICAgICAgIHZhciBhcnIgPSB0aGlzLm91dHB1dEFycmF5KCk7XG4gICAgICAgIHRoaXMubW9kZWwuYXJyYXlBcHBlbmRWYWx1ZShhcnIsIHZhbHVlKTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NBcnJheUFwcGVuZFNsaWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVhZCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLnJlYWQoKTtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMub3V0cHV0QXJyYXkoKTtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuaW5wdXRFbnRyeSgpLnZhbHVlO1xuICAgICAgICB0aGlzLm1vZGVsLmFycmF5QXBwZW5kU2xpY2Uoc3RyLCB2YWwsIGxlZnQsIHJpZ2h0KTtcbiAgICB9O1xuICAgIFBhdGNoZXIucHJvdG90eXBlLnByb2Nlc3NTdHJpbmdBcHBlbmRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwud3JhcCh0aGlzLnJlYWQoKSk7XG4gICAgICAgIHZhciBzdHIgPSB0aGlzLm91dHB1dFN0cmluZygpO1xuICAgICAgICB0aGlzLm1vZGVsLnN0cmluZ0FwcGVuZFZhbHVlKHN0ciwgdmFsdWUpO1xuICAgIH07XG4gICAgUGF0Y2hlci5wcm90b3R5cGUucHJvY2Vzc1N0cmluZ0FwcGVuZFNsaWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVhZCgpO1xuICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLnJlYWQoKTtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMub3V0cHV0U3RyaW5nKCk7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLmlucHV0RW50cnkoKS52YWx1ZTtcbiAgICAgICAgdGhpcy5tb2RlbC5zdHJpbmdBcHBlbmRTbGljZShzdHIsIHZhbCwgbGVmdCwgcmlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFBhdGNoZXI7XG59KCkpO1xuZXhwb3J0IHsgUGF0Y2hlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJuYWwtcGF0Y2hlci5qcy5tYXAiLCJpbXBvcnQgeyBQYXRjaGVyIH0gZnJvbSAnLi9pbnRlcm5hbC1wYXRjaGVyJztcbmltcG9ydCB7IHV0ZjhyZXNvbHZlSW5kZXggfSBmcm9tICcuL3V0ZjgnO1xudmFyIE1vZGVsID0ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgZmluYWxpemU6IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiLmRhdGE7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1hcmtDaGFuZ2VkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgb2JqZWN0R2V0S2V5czogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgfSxcbiAgICBvYmplY3RHZXRGaWVsZDogZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlW2tleV07XG4gICAgfSxcbiAgICBhcnJheUdldEVsZW1lbnQ6IGZ1bmN0aW9uICh2YWx1ZSwgaWR4KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVtpZHhdO1xuICAgIH0sXG4gICAgY29weU9iamVjdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXMgPSB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIGRhdGE6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKHZhbHVlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWwgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICByZXMuZGF0YVtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgICBjb3B5QXJyYXk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgpO1xuICAgIH0sXG4gICAgY29weVN0cmluZzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgb2JqZWN0U2V0RmllbGQ6IGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0LmRhdGFba2V5XSA9IHZhbHVlO1xuICAgIH0sXG4gICAgb2JqZWN0RGVsZXRlRmllbGQ6IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgICAgICBkZWxldGUgdGFyZ2V0LmRhdGFba2V5XTtcbiAgICB9LFxuICAgIGFycmF5QXBwZW5kVmFsdWU6IGZ1bmN0aW9uICh0YXJnZXQsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKHZhbHVlKTtcbiAgICB9LFxuICAgIGFycmF5QXBwZW5kU2xpY2U6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdGFyZ2V0LnB1c2guYXBwbHkodGFyZ2V0LCBzb3VyY2Uuc2xpY2UobGVmdCwgcmlnaHQpKTtcbiAgICB9LFxuICAgIHN0cmluZ0FwcGVuZFNsaWNlOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHZhciBzb3VyY2VTdHJpbmcgPSBzb3VyY2U7XG4gICAgICAgIHZhciBsZWZ0UG9zID0gdXRmOHJlc29sdmVJbmRleChzb3VyY2VTdHJpbmcsIGxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRQb3MgPSB1dGY4cmVzb2x2ZUluZGV4KHNvdXJjZVN0cmluZywgcmlnaHQsIGxlZnRQb3MpO1xuICAgICAgICB0YXJnZXQuZGF0YSArPSBzb3VyY2VTdHJpbmcuc2xpY2UobGVmdFBvcywgcmlnaHRQb3MpO1xuICAgIH0sXG4gICAgc3RyaW5nQXBwZW5kVmFsdWU6IGZ1bmN0aW9uICh0YXJnZXQsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldC5kYXRhICs9IHZhbHVlO1xuICAgIH1cbn07XG4vLyBBcHBsaWVzIGEgcGF0Y2ggb24gYSBKYXZhU2NyaXB0IG9iamVjdC5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGNoKGxlZnQsIHBhdGNoKSB7XG4gICAgdmFyIHJvb3QgPSBsZWZ0OyAvLyBObyBuZWVkIHRvIHdyYXAgYmVjYXVzZSB0aGUgcmVwcmVzZW50YXRpb24gaXMgdGhlIHNhbWUuXG4gICAgdmFyIHBhdGNoZXIgPSBuZXcgUGF0Y2hlcihNb2RlbCwgcm9vdCwgcGF0Y2gpO1xuICAgIHJldHVybiBwYXRjaGVyLnByb2Nlc3MoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1wYXRjaGVyLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiB1dGY4Y2hhclNpemUoY29kZSkge1xuICAgIGlmIChjb2RlID4+IDE2KSB7XG4gICAgICAgIHJldHVybiA0O1xuICAgIH1cbiAgICBlbHNlIGlmIChjb2RlID4+IDExKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb2RlID4+IDcpIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXRmOHN0cmluZ1NpemUoc3RyKSB7XG4gICAgdmFyIGIgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb2RlID0gc3RyLmNvZGVQb2ludEF0KGkpO1xuICAgICAgICB2YXIgc2l6ZSA9IHV0ZjhjaGFyU2l6ZShjb2RlKTtcbiAgICAgICAgaWYgKHNpemUgPT0gNClcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgYiArPSBzaXplO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbn1cbi8qKiBDb252ZXJ0cyBhbiBVVEYtOCBieXRlIGluZGV4IGludG8gYSBVQ1MtMiBpbmRleC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1dGY4cmVzb2x2ZUluZGV4KHN0ciwgaWR4LCBzdGFydCkge1xuICAgIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7IHN0YXJ0ID0gMDsgfVxuICAgIHZhciBieXRlQ291bnQgPSBzdGFydDtcbiAgICB2YXIgdWNzSWR4ID0gMDtcbiAgICBmb3IgKHVjc0lkeCA9IHN0YXJ0OyBieXRlQ291bnQgPCBpZHg7IHVjc0lkeCsrKSB7XG4gICAgICAgIHZhciBjb2RlID0gc3RyLmNvZGVQb2ludEF0KHVjc0lkeCk7XG4gICAgICAgIHZhciBzaXplID0gdXRmOGNoYXJTaXplKGNvZGUpO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gNClcbiAgICAgICAgICAgIHVjc0lkeCsrOyAvLyBTdXJyb2dhdGUgcGFpci5cbiAgICAgICAgYnl0ZUNvdW50ICs9IHNpemU7XG4gICAgfVxuICAgIHJldHVybiB1Y3NJZHg7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tbW9uUHJlZml4KHN0ciwgc3RyMikge1xuICAgIHZhciBsZW4gPSBNYXRoLm1pbihzdHIubGVuZ3RoLCBzdHIyLmxlbmd0aCk7XG4gICAgdmFyIGIgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOykge1xuICAgICAgICB2YXIgYVBvaW50ID0gc3RyLmNvZGVQb2ludEF0KGkpO1xuICAgICAgICB2YXIgYlBvaW50ID0gc3RyMi5jb2RlUG9pbnRBdChpKTtcbiAgICAgICAgaWYgKGFQb2ludCAhPT0gYlBvaW50KVxuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIHZhciBzaXplID0gdXRmOGNoYXJTaXplKGFQb2ludCk7XG4gICAgICAgIGIgKz0gc2l6ZTtcbiAgICAgICAgaSArPSBzaXplID09PSA0ID8gMiA6IDE7XG4gICAgfVxuICAgIHJldHVybiBiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblN1ZmZpeChzdHIsIHN0cjIsIHByZWZpeCkge1xuICAgIGlmIChwcmVmaXggPT09IHZvaWQgMCkgeyBwcmVmaXggPSAwOyB9XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKHN0ci5sZW5ndGgsIHN0cjIubGVuZ3RoKSAtIHByZWZpeDtcbiAgICB2YXIgYiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47KSB7XG4gICAgICAgIHZhciBhUG9pbnQgPSBzdHIuY29kZVBvaW50QXQoc3RyLmxlbmd0aCAtIDEgLSBpKTtcbiAgICAgICAgdmFyIGJQb2ludCA9IHN0cjIuY29kZVBvaW50QXQoc3RyMi5sZW5ndGggLSAxIC0gaSk7XG4gICAgICAgIGlmIChhUG9pbnQgIT09IGJQb2ludClcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB2YXIgc2l6ZSA9IHV0ZjhjaGFyU2l6ZShhUG9pbnQpO1xuICAgICAgICBiICs9IHNpemU7XG4gICAgICAgIGkgKz0gc2l6ZSA9PT0gNCA/IDIgOiAxO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0ZjguanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG4vKipcbiAqIFRocm90dGxlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBFc3BlY2lhbGx5IHVzZWZ1bCBmb3IgcmF0ZSBsaW1pdGluZ1xuICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gICAgZGVsYXkgLSAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge2Jvb2xlYW59ICAgW25vVHJhaWxpbmddIC0gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gIGNhbGxiYWNrIC0gICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge2Jvb2xlYW59ICAgW2RlYm91bmNlTW9kZV0gLSBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlIChkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSkge1xuICAvKlxuICAgKiBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuICAgKiBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcbiAgICogZGVib3VuY2UgbW9kZXMuXG4gICAqL1xuICB2YXIgdGltZW91dElEO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblxuICB2YXIgbGFzdEV4ZWMgPSAwOyAvLyBGdW5jdGlvbiB0byBjbGVhciBleGlzdGluZyB0aW1lb3V0XG5cbiAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1RpbWVvdXQoKSB7XG4gICAgaWYgKHRpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgfVxuICB9IC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gIH0gLy8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXG5cbiAgaWYgKHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicpIHtcbiAgICBkZWJvdW5jZU1vZGUgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IG5vVHJhaWxpbmc7XG4gICAgbm9UcmFpbGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvKlxuICAgKiBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG4gICAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG4gICAqIGlzIGV4ZWN1dGVkLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c18gPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmd1bWVudHNfW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBsYXN0RXhlYztcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblxuXG4gICAgZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50c18pO1xuICAgIH1cbiAgICAvKlxuICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSB0aGlzIGlzIHVzZWQgdG8gY2xlYXIgdGhlIGZsYWdcbiAgICAgKiB0byBhbGxvdyBmdXR1cmUgYGNhbGxiYWNrYCBleGVjdXRpb25zLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRpbWVvdXRJRCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQpIHtcbiAgICAgIC8qXG4gICAgICAgKiBTaW5jZSBgd3JhcHBlcmAgaXMgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcbiAgICAgICAqIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgZXhlY3V0ZSBgY2FsbGJhY2tgLlxuICAgICAgICovXG4gICAgICBleGVjKCk7XG4gICAgfVxuXG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblxuICAgIGlmIChkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkpIHtcbiAgICAgIC8qXG4gICAgICAgKiBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcbiAgICAgICAqIGBjYWxsYmFja2AuXG4gICAgICAgKi9cbiAgICAgIGV4ZWMoKTtcbiAgICB9IGVsc2UgaWYgKG5vVHJhaWxpbmcgIT09IHRydWUpIHtcbiAgICAgIC8qXG4gICAgICAgKiBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG4gICAgICAgKiBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuICAgICAgICogcmVjZW50IGV4ZWN1dGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuICAgICAgICogYWZ0ZXIgYGRlbGF5YCBtcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuICAgICAgICogZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICAgICAgICovXG4gICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYywgZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgPyBkZWxheSAtIGVsYXBzZWQgOiBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlci5jYW5jZWwgPSBjYW5jZWw7IC8vIFJldHVybiB0aGUgd3JhcHBlciBmdW5jdGlvbi5cblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkICovXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9ICAgZGVsYXkgLSAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Ym9vbGVhbn0gIFthdEJlZ2luXSAtICAgICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIGF0QmVnaW4gaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgb25seSBiZSBleGVjdXRlZCBgZGVsYXlgIG1pbGxpc2Vjb25kc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuIElmIGF0QmVnaW4gaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmx5IGF0IHRoZSBmaXJzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLCB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcsIGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZSAoZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhyb3R0bGUoZGVsYXksIGF0QmVnaW4sIGZhbHNlKSA6IHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgYXRCZWdpbiAhPT0gZmFsc2UpO1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==