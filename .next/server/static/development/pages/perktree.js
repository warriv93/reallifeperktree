module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/CharismaTrainingPerk.png":
/*!*********************************************!*\
  !*** ./src/assets/CharismaTrainingPerk.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAADxCAYAAAAX+eMLAAAACXBIWXMAAAsTAAALEwEAmpwYAABAM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MmNkNGEwZC1hMjgzLTExN2QtYjIwZi04MTM1ODhiZTkyZmI8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MGNjMDg1ZmItNzM3Zi00YTliLTk2MzAtNTE2MmYzMjQ2NWJjPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPjI3N0FGQjQxMEJCNDk1MTU3NThGNTVFMEEwOTA1QTIwPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo0YjMzMzJlMC04YjU0LTQxM2EtYjZjMC02NGJlNGNhMDg1OWU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDMtMDlUMTE6NTk6MDYrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y29udmVydGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5kZXJpdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowY2MwODVmYi03MzdmLTRhOWItOTYzMC01MTYyZjMyNDY1YmM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDMtMDlUMTE6NTk6MDYrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6NGIzMzMyZTAtOGI1NC00MTNhLWI2YzAtNjRiZTRjYTA4NTllPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD4yNzdBRkI0MTBCQjQ5NTE1NzU4RjU1RTBBMDkwNUEyMDwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD4yNzdBRkI0MTBCQjQ5NTE1NzU4RjU1RTBBMDkwNUEyMDwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMC0wMy0wNFQxNDowMTozNCswMTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIwLTAzLTA5VDExOjU5OjA2KzAxOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAyMC0wMy0wOVQxMTo1OTowNiswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpJbWFnZVdpZHRoPjQwMDwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8dGlmZjpJbWFnZUxlbmd0aD4zODA8L3RpZmY6SW1hZ2VMZW5ndGg+CiAgICAgICAgIDx0aWZmOkJpdHNQZXJTYW1wbGU+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvdGlmZjpCaXRzUGVyU2FtcGxlPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6U2FtcGxlc1BlclBpeGVsPjM8L3RpZmY6U2FtcGxlc1BlclBpeGVsPgogICAgICAgICA8dGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT4wPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiAgICAgICAgIDx0aWZmOllDYkNyUG9zaXRpb25pbmc+MTwvdGlmZjpZQ2JDclBvc2l0aW9uaW5nPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6RXhpZlZlcnNpb24+MDIyMTwvZXhpZjpFeGlmVmVyc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTE0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0MTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+LttKOgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAACdGklEQVR42uz9Z5ClWXrfif1eb6736V152356pscBA0uCXIEESXB3BVKMZXA3yI1V6Iu+6ru+SFpRAZErSrsB0QAMkkMS4ALgABjMoKd72ld1+crKrPR5vb+vP0cf3ps50wAIgVgMF93Ajaio6Oyqupn3ec85z/k/f6NIKfmz1w/mFcex7vt+VohEtyzb1w3d11Qt/kG8l/5nH/cf7+u/+C/+snzw4AEnx00cx0HRdeI4ZnFllZs3b/L/+L/+/ZrjOJ0/7vdV/mxF/vG9fu6v/Kw8bW9zcvoc9Jj1jQVs16TT6TANJDm3wdrmTf7+/+UfLOay2dM/K+R/wleSJHoURXYURbamabFlWRNN+73b45c//xXZOT3CjzrkCxabl1a5dn0LN2tzeHjI3QfbHO33qdQ3uXThRf7pL/yPxu/37/xZIb/vNRoNqz/5E59re56HIlVMw+Ht9x4qf5i/+7f+2/9GtlotOs0d/GkPISYoiUAKBVU1uXzxFtXKMn//5//f54X4kS+8LputE5JwzI0bBV569QKvvvYCS8tldFuhNxry4YePefe95zx+0ETTGywvX+OXfumfKX9WyP/A6/33v/tf/b3/9n/3/9rZfoKiKGTdHLaV4ef/4f/3737xi1/6HzRd/31XwX/1t/+3stsdMIoThsMh3qSJoUZYVoKhqEihoCgG42FIxi1TLi1i2zbDfo9e6xRFlZTyFi++WOWHf/QVXnn1NoaZ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");

/***/ }),

/***/ "./src/assets/StrengthPerkTransparent.png":
/*!************************************************!*\
  !*** ./src/assets/StrengthPerkTransparent.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAD2CAYAAABV7Vz6AAAACXBIWXMAAAsTAAALEwEAmpwYAABAM2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDowNTE0ZWRiMy1hMjdlLTExN2QtYjIwZi04MTM1ODhiZTkyZmI8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MTUzMDZhZTktODVhMC00NDhhLWIwMzYtYzNlODY1NGE0MjliPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPjYwMzZDMTM4NzI5MThGREJBNEVGQTZGOUU3RUIwNDAxPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2NmM0ZjVmMi0xYjFlLTRhY2EtYjUwYi1mNWJkMzA2ZmY4ZjU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDMtMDlUMTE6MjE6MjArMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y29udmVydGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5kZXJpdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxNTMwNmFlOS04NWEwLTQ0OGEtYjAzNi1jM2U4NjU0YTQyOWI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjAtMDMtMDlUMTE6MjE6MjArMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6NjZjNGY1ZjItMWIxZS00YWNhLWI1MGItZjViZDMwNmZmOGY1PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD42MDM2QzEzODcyOTE4RkRCQTRFRkE2RjlFN0VCMDQwMTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD42MDM2QzEzODcyOTE4RkRCQTRFRkE2RjlFN0VCMDQwMTwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMC0wMy0wNFQxNDowMDozNCswMTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIwLTAzLTA5VDExOjIxOjIwKzAxOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAyMC0wMy0wOVQxMToyMToyMCswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpJbWFnZVdpZHRoPjQwMDwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8dGlmZjpJbWFnZUxlbmd0aD4zODA8L3RpZmY6SW1hZ2VMZW5ndGg+CiAgICAgICAgIDx0aWZmOkJpdHNQZXJTYW1wbGU+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+ODwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvdGlmZjpCaXRzUGVyU2FtcGxlPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6U2FtcGxlc1BlclBpeGVsPjM8L3RpZmY6U2FtcGxlc1BlclBpeGVsPgogICAgICAgICA8dGlmZjpZQ2JDclN1YlNhbXBsaW5nPgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT4wPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC90aWZmOllDYkNyU3ViU2FtcGxpbmc+CiAgICAgICAgIDx0aWZmOllDYkNyUG9zaXRpb25pbmc+MTwvdGlmZjpZQ2JDclBvc2l0aW9uaW5nPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6RXhpZlZlcnNpb24+MDIyMTwvZXhpZjpFeGlmVmVyc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTYyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI0NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+hZi7dgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAC5vklEQVR42uz9d7Bl2XXeCf728ed6+7zL99JXVmVVJargDUESpCiCDpIoimq5FuVC0xMzMRHqGU5MxyhG0T0REx0zow5JPaIoiqJIUS1QJAACBEEAhK9C2fQ+n/fXu+PPnj/2fbcqCVIkSAAEpToRLyqyMt+79527ztprfev7viWklLx1fXPX3/lv/4psNA/p97tYlsXS0in++f/678Rbd+aPf4m3AvGbu/7KT/6YbLUaxElAHIckSUI2W6BUrJHPVfiX//oX3grItwLx23v9rb/+PukNuggtplqtks25dDodtrf2aR57zM6usjB3ln/6c//2rWB8KxC/tddP/fSHpO97hNGIctbEMTWmpsusra0xPVOn2+3y+ms3uHl9HSEy5DJTlGvz/Iuf//m3gvGbuIy3bsEb1wfe+7yME58w6BFGHpoIsG2dbM7FzWiUCmXOri3w1OWLnDt3jkqlRKvVwrVHmFpMsxHQbQ05PtjkH/ztvyf/2c/9i7eC8a2M+Ee//vJf+Ivy6GgPzx9gmGCZKZatU8ib1GolpmfqlMouM7UMC7MVypU8Qgg0DTRNo9X22N8d8vnPvcS92wfsHnQplBc4feY8//qX/tVbwfhWRvzDr7/0Ux+Sx62HeP4R5ZJFteRSKWUpZHJM1SqcWjjF3MIK5VyBek1HiiF+NKA7atAf9JC6RqU6zeLyCnfuv8bDrSHt/g7dQZMgavAD3/sOmc1myGQy9Efb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");

/***/ }),

/***/ "./src/assets/profileface2.jpg":
/*!*************************************!*\
  !*** ./src/assets/profileface2.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEACQAAAAAQABAJAAAAABAAE4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAB44QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAE4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAA4QklNBAIAAAAAAAIAADhCSU0EMAAAAAAAAQEAOEJJTQQtAAAAAAAGAAEAAAADOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0sAAAAGAAAAAAAAAAAAAAGeAAABkgAAAAsAcAByAG8AZgBpAGwAZQBmAGEAYwBlAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAGSAAABngAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAA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dGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMy0wNFQxNTo0NzowNyswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDMtMDRUMTU6NTQ6MzIrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDMtMDRUMTU6NTQ6MzIrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9ImYubHV4IHByb2ZpbGUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWQyM2M2OTQtMDc2MC00ZGM4LTljODktNGIwNTdmNTFhYjAwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzM1ZmYzMmEtOWViNi0xMTdkLTgxOTAtYmUyNTk5ZDdjYjM5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OGVmMTA5NTgtMDg2YS00NTg4LWFhODktNjllYjYxYmViODNiIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGVmMTA5NTgtMDg2YS00NTg4LWFhODktNjllYjYxYmViODNiIiBzdEV2dDp3aGVuPSIyMDIwLTAzLTA0VDE1OjU0OjMyKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWQyM2M2OTQtMDc2MC00ZGM4LTljODktNGIwNTdmNTFhYjAwIiBzdEV2dDp3aGVuPSIyMDIwLTAzLTA0VDE1OjU0OjMyKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGVmMTA5NTgtMDg2YS00NTg4LWFhODktNjllYjYxYmViODNiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhlZjEwOTU4LTA4NmEtNDU4OC1hYTg5LTY5ZWI2MWJlYjgzYiIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhlZjEwOTU4LTA4NmEtNDU4OC1hYTg5LTY5ZWI2MWJlYjgzYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+ILXElDQ19QUk9GSUxFAAEBAAALTGFwcGwCEAAAbW50clJHQiBYWVogB+QAAQAOABQAFgATYWNzcEFQUEwAAAAAQVBQTAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARZGVzYwAAAVAAAAA4Y3BydAAAAYgAAABUd3RwdAAAAdwAAAAUclhZWgAAAfAAAAAUZ1hZWgAAAgQAAAAUYlhZWgAAAhgAAAAUclRSQwAAAiwAAAgMYWFyZwAACjgAAAAgdmNndAAAClgAAAAwbmRpbgAACogAAAA+Y2hhZAAACsgAAAAsZmx1eAAACvQAAAAwbW1vZAAACyQAAAAoYlRSQwAAAiwAAAgMZ1RSQwAAAiwAAAgMYWFiZwAACjgAAAAgYWFnZwAACjgAAAAgbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABmAC4AbAB1AHgAIABwAHIAbwBmAGkAbABlAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADgAAAAcAEMAbwBwAHkAcgBpAGcAaAB0ACAARgAuAGwAdQB4ACAAUwBvAGYAdAB3AGEAcgBlACAATABMAENYWVogAAAAAAAA8xYAAQAAAAEWylhZWiAAAAAAAABxwAAAOYoAAAFnWFlaIAAAAAAAAGEjAAC55gAAE/ZYWVogAAAAAAAAI/IAAAyQAAC90GN1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANgA7AEAARQBK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");

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/globalStyles.scss */ "./src/style/globalStyles.scss");
/* harmony import */ var _style_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_globalStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/components/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





const Layout = ({
  children
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Perktree"), __jsx("link", {
  rel: "stylesheet",
  href: "https://bootswatch.com/4/flatly/bootstrap.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("link", {
  href: "../style/styles.scss",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_profileface2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/profileface2.jpg */ "./src/assets/profileface2.jpg");
var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/components/Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Navbar = () => __jsx("nav", {
  className: "navbar navbar-expand-lg navbar-dark bg-primary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "collapse navbar-collapse",
  id: "navbarColor01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("ul", {
  className: "navbar-nav mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link",
  href: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, " ", "Home", " "))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/perktree",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Perktree")))), __jsx("ul", {
  className: "nav navbar-nav navbar-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("li", {
  className: "profile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/profile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, " Profile"), __jsx("div", {
  className: "image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("img", {
  src: _assets_profileface2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "Profilememes",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Perk.tsx":
/*!*********************************!*\
  !*** ./src/components/Perk.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Perk; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Perklevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Perklevel */ "./src/components/Perklevel.tsx");
var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/components/Perk.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Perk extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      level: this.props.level,
      image: this.props.image
    };
  } // return correct image based on perk title 
  // return all levels of the perk - done
  // with  image based on if skilled or not GRAYSCALE - done


  createPerkLevels(currentLevel, totalLevels, levelAchievedImage) {
    let levels = []; //push desired nbr of levels to the perk

    for (let index = 1; index < totalLevels + 1; index++) {
      levels.push(__jsx(_Perklevel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        grayscale: currentLevel < index ? "grayscale" : "",
        image: levelAchievedImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }));
    }

    return levels;
  }

  render() {
    return __jsx("div", {
      className: "perktree-perk-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("ul", {
      className: "perk",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("li", {
      className: "perk-level title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, this.props.title)), this.createPerkLevels(this.state.level, 5, this.state.image)));
  }

}

/***/ }),

/***/ "./src/components/Perklevel.tsx":
/*!**************************************!*\
  !*** ./src/components/Perklevel.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/components/Perklevel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const PerkLevel = ({
  grayscale,
  image
}) => __jsx("li", {
  className: "perk-level",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("img", {
  src: image,
  alt: "perk-image",
  className: `perk-image ${grayscale}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (PerkLevel);

/***/ }),

/***/ "./src/pages/perktree.tsx":
/*!********************************!*\
  !*** ./src/pages/perktree.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return perktree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_Perk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Perk */ "./src/components/Perk.tsx");
/* harmony import */ var _assets_StrengthPerkTransparent_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/StrengthPerkTransparent.png */ "./src/assets/StrengthPerkTransparent.png");
/* harmony import */ var _assets_CharismaTrainingPerk_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/CharismaTrainingPerk.png */ "./src/assets/CharismaTrainingPerk.png");
/* harmony import */ var _style_perktree_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/perktree.scss */ "./src/style/perktree.scss");
/* harmony import */ var _style_perktree_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_perktree_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/pages/perktree.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //TODO - med en tom props måste jag ha med det?? - ta bort?

class perktree extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      perkList: [{
        level: 2,
        title: "Strength",
        image: _assets_StrengthPerkTransparent_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        level: 0,
        title: "Endurance",
        image: _assets_StrengthPerkTransparent_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        level: 0,
        title: "Agility",
        image: _assets_StrengthPerkTransparent_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        level: 3,
        title: "Charisma",
        image: _assets_CharismaTrainingPerk_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        level: 0,
        title: "Intelligence",
        image: _assets_StrengthPerkTransparent_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      }]
    };
  }

  createPerkList(perkList) {
    return perkList.map((perk, index) => {
      return __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        level: perk.level,
        title: perk.title,
        image: perk.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "perktree-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.createPerkList(this.state.perkList)));
  }

}

/***/ }),

/***/ "./src/style/globalStyles.scss":
/*!*************************************!*\
  !*** ./src/style/globalStyles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/style/perktree.scss":
/*!*********************************!*\
  !*** ./src/style/perktree.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./src/pages/perktree.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/madisontaskett/gitRepos/reallifeperktree/src/pages/perktree.tsx */"./src/pages/perktree.tsx");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=perktree.js.map