webpackHotUpdate("static/development/pages/perktree.js",{

/***/ "./src/pages/perktree.tsx":
/*!********************************!*\
  !*** ./src/pages/perktree.tsx ***!
  \********************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_Perk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Perk */ "./src/components/Perk.tsx");
/* harmony import */ var _style_perktree_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/perktree.scss */ "./src/style/perktree.scss");
/* harmony import */ var _style_perktree_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_perktree_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/madisontaskett/gitRepos/reallifeperktree/src/pages/perktree.tsx";
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
      perkLevelList: [],
      perkList: ["Strength", "Endurance", "Agility", "Charisma", "Intelligence"]
    };
    return _this;
  } //save perkLevel to state from each perk


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(perktree, [{
    key: "updatePerkLevelList",
    value: function updatePerkLevelList(perkLevel) {
      // check if perklevel with same title as the new one exist in array
      var oldPerkLevel = this.state.perkLevelList.find(function (perklevelitem) {
        return perklevelitem.title == perkLevel.title;
      }); //if exist check position in array and replace with new perklevel

      if (oldPerkLevel) {
        //get index in array of old item
        this.state.perkLevelList[this.state.perkLevelList.indexOf(oldPerkLevel)] = perkLevel;
      } // not exist in array just add it to the end of the array
      else {
          this.state.perkLevelList.push(perkLevel);
        }
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
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "perktree-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Strength",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Endurance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Agility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Charisma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), __jsx(_components_Perk__WEBPACK_IMPORTED_MODULE_7__["default"], {
        updatePerkLevelList: function updatePerkLevelList(perkLevel) {
          return _this2.updatePerkLevelList(perkLevel);
        },
        title: "Intelligence",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx("button", {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.checkPerkLevels();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "CLICK ME"));
    }
  }]);

  return perktree;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=perktree.js.1fff1ecfd8f27d22b6f6.hot-update.js.map