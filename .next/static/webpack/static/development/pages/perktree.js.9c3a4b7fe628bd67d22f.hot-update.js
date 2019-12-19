webpackHotUpdate("static/development/pages/perktree.js",{

/***/ "./components/Perk.jsx":
/*!*****************************!*\
  !*** ./components/Perk.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Perk; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Perklevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Perklevel */ "./components/Perklevel.jsx");
/* harmony import */ var _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/404Code.jpg */ "./assets/404Code.jpg");





var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/components/Perk.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Perk =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Perk, _Component);

  function Perk(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Perk);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Perk).call(this, props));
    _this.state = {
      title: _this.props.title,
      perkLevel: 0,
      isAssigned: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Perk, [{
    key: "PerklevelClicked",
    value: function PerklevelClicked(e, perkLevel) {
      if (!isAssigned) {
        console.log("PerklevelClicked", this.state.title, perkLevel);
        e.currentTarget.style.opacity = '1';
        this.setState({
          perkLevel: perkLevel,
          isAssigned: true
        });
      } else {
        this.setState({
          perkLevel: perkLevel
        });
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.opacity = '0.6';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "perktree-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("ul", {
        className: "perk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("li", {
        className: "perk-level title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.props.title)), __jsx(_components_Perklevel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: function onClick(e) {
          return _this2.PerklevelClicked(e, 1);
        },
        image: _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx(_components_Perklevel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: function onClick(e) {
          return _this2.PerklevelClicked(e, 2);
        },
        image: _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx(_components_Perklevel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: function onClick(e) {
          return _this2.PerklevelClicked(e, 3);
        },
        image: _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx(_components_Perklevel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: function onClick(e) {
          return _this2.PerklevelClicked(e, 4);
        },
        image: _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx(_components_Perklevel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: function onClick(e) {
          return _this2.PerklevelClicked(e, 5);
        },
        image: _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })));
    }
  }]);

  return Perk;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=perktree.js.9c3a4b7fe628bd67d22f.hot-update.js.map