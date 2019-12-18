webpackHotUpdate("static/development/pages/perktree.js",{

/***/ "./pages/perktree.jsx":
/*!****************************!*\
  !*** ./pages/perktree.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return perktree; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Perk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Perk */ "./components/Perk.jsx");
/* harmony import */ var _style_perktree_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/perktree.scss */ "./style/perktree.scss");
/* harmony import */ var _style_perktree_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_perktree_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/pages/perktree.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var perktree =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(perktree, _Component);

  function perktree(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, perktree);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(perktree).call(this, props));
    _this.state = {
      perkLevelList: []
    };
    return _this;
  } //save perkLevel to state from each perk


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(perktree, [{
    key: "updatePerkLevelList",
    value: function updatePerkLevelList(perkLevel) {
      var foundPerkLevel = this.state.perkLevelList.find(function (perklevelitem, index) {
        if (perklevelitem.title == perkLevel.title) return index;
      });
      var indexOfPerkLevel = this.state.perkLevelList.indexOf(foundPerkLevel); // arr[2].prop = newValue;

      if (!foundPerkLevel) this.state.perkLevelList.push(perkLevel); //CHECK IF ALREADY EXIST
    }
  }, {
    key: "checkPerkLevels",
    value: function checkPerkLevels() {
      console.log("perkLevelList", this.state.perkLevelList);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "perktree-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Strength",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Perception",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Endurance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Agility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Charisma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Intelligence",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), __jsx("button", {
        onClick: function onClick() {
          return _this2.checkPerkLevels();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "CLICK MED"));
    }
  }]);

  return perktree;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=perktree.js.02d0fc8b1e0ce437b5a6.hot-update.js.map