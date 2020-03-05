webpackHotUpdate("static/development/pages/perktree.js",{

/***/ "./src/components/Perk.tsx":
/*!*********************************!*\
  !*** ./src/components/Perk.tsx ***!
  \*********************************/
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
/* harmony import */ var _Perklevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Perklevel */ "./src/components/Perklevel.tsx");
/* harmony import */ var _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/404Code.jpg */ "./src/assets/404Code.jpg");





var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/components/Perk.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var amountOfLevels = 5;

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
      perkLevel: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Perk, [{
    key: "createPerkLevels",
    value: function createPerkLevels(amountOfLevels) {
      var _this2 = this;

      var _loop = function _loop(index) {
        __jsx(_Perklevel__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onClick: function onClick(e) {
            return _this2.PerklevelClicked(e, index);
          },
          image: _assets_404Code_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });
      };

      for (var index = 1; index < amountOfLevels; index++) {
        _loop(index);
      }
    }
  }, {
    key: "PerklevelClicked",
    value: function PerklevelClicked(e, perkLevel) {
      // if not previously assigned set opacity 1
      console.log("PerklevelClicked", this.state.title, perkLevel);
      e.target.style.opacity = '1';
      this.setState({
        perkLevel: perkLevel,
        oldElementTarget: e.target
      }); // if  previously assigned set opacity .6 to old element and 1 to new element

      this.state.oldElementTarget ? this.state.oldElementTarget.style.opacity = '0.6' : null; //save perkLevel to state from each perk

      this.props.updatePerkLevelList({
        title: this.state.title,
        perkLevel: perkLevel
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "perktree-perk-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("ul", {
        className: "perk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("li", {
        className: "perk-level title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.title)), this.createPerkLevels(amountOfLevels)));
    }
  }]);

  return Perk;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=perktree.js.8762bdab199fb429f2c8.hot-update.js.map