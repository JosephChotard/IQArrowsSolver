webpackHotUpdate_N_E("pages/problems",{

/***/ "./pages/problems/index.tsx":
/*!**********************************!*\
  !*** ./pages/problems/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/josephchotard/Documents/Fun/iqArrows/website/pages/problems/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Problems() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      grid = _React$useState2[0],\n      setGrid = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    var givenCells = Math.floor(Math.random() * (5 - 3 + 1)) + 3;\n    fetch(\"\".concat(process.env.basePath ? process.env.basePath : '', \"/constraints/constraints-\").concat(givenCells, \".txt\")).then(function (data) {\n      return data.text();\n    }).then(function (constraintsText) {\n      var constraints = constraintsText.split(/\\r\\n|\\r|\\n/);\n      var selectedConstraintIndex = Math.floor(Math.random() * (constraints.length - 1 + 1));\n      var selectedConstraint = constraints[selectedConstraintIndex];\n      console.log(selectedConstraint);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [\"Solve this problem\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: grid === [] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: \"Grid\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/problems/yes\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"Generate puzzle\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Problems, \"w1YSakViRD9z3AUkL5Qso5coyFg=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvYmxlbXMvaW5kZXgudHN4P2Q0OGEiXSwibmFtZXMiOlsiUHJvYmxlbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ3JpZCIsInNldEdyaWQiLCJ1c2VFZmZlY3QiLCJnaXZlbkNlbGxzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiYmFzZVBhdGgiLCJ0aGVuIiwiZGF0YSIsInRleHQiLCJjb25zdHJhaW50c1RleHQiLCJjb25zdHJhaW50cyIsInNwbGl0Iiwic2VsZWN0ZWRDb25zdHJhaW50SW5kZXgiLCJsZW5ndGgiLCJzZWxlY3RlZENvbnN0cmFpbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLHdCQUNUQyw0Q0FBSyxDQUFDQyxRQUFOLENBQXNCLEVBQXRCLENBRFM7QUFBQTtBQUFBLE1BQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxPQURvQjs7QUFHakNILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsSUFBSSxDQUFKLEdBQVEsQ0FBekIsQ0FBWCxJQUEwQyxDQUE3RDtBQUNBQyxTQUFLLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEdBQXVCRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBbkMsR0FBOEMsRUFBbEQsc0NBQWdGUCxVQUFoRixVQUFMLENBQ0dRLElBREgsQ0FDUSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxLQURaLEVBRUdGLElBRkgsQ0FFUSxVQUFBRyxlQUFlLEVBQUk7QUFDdkIsVUFBTUMsV0FBVyxHQUFHRCxlQUFlLENBQUNFLEtBQWhCLENBQXNCLFlBQXRCLENBQXBCO0FBQ0EsVUFBTUMsdUJBQXVCLEdBQUdiLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJTLFdBQVcsQ0FBQ0csTUFBWixHQUFxQixDQUFyQixHQUF5QixDQUExQyxDQUFYLENBQWhDO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUdKLFdBQVcsQ0FBQ0UsdUJBQUQsQ0FBdEM7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVlGLGtCQUFaO0FBQ0EsS0FQSjtBQVFELEdBVkQsRUFVRyxFQVZIO0FBV0Esc0JBQ0U7QUFBQSxrREFFRTtBQUFBLGdCQUNHbkIsSUFBSSxLQUFLLEVBQVQsZ0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVFFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGVBQVg7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0E5QnVCSCxROztLQUFBQSxRIiwiZmlsZSI6Ii4vcGFnZXMvcHJvYmxlbXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQk9BUkQgfSBmcm9tICdAY29tcG9uZW50cy9ib2FyZC9ib2FyZElucHV0L0JvYXJkLm1vZGVsJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvYmxlbXMoKSB7XG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IFJlYWN0LnVzZVN0YXRlPEJPQVJEPihbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdpdmVuQ2VsbHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDMgKyAxKSkgKyAzO1xuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52LmJhc2VQYXRoID8gcHJvY2Vzcy5lbnYuYmFzZVBhdGggOiAnJ30vY29uc3RyYWludHMvY29uc3RyYWludHMtJHtnaXZlbkNlbGxzfS50eHRgKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLnRleHQoKSlcbiAgICAgIC50aGVuKGNvbnN0cmFpbnRzVGV4dCA9PiB7IFxuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzVGV4dC5zcGxpdCgvXFxyXFxufFxccnxcXG4vKVxuICAgICAgICBjb25zdCBzZWxlY3RlZENvbnN0cmFpbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjb25zdHJhaW50cy5sZW5ndGggLSAxICsgMSkpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZENvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tzZWxlY3RlZENvbnN0cmFpbnRJbmRleF1cbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb25zdHJhaW50KVxuICAgICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBTb2x2ZSB0aGlzIHByb2JsZW1cbiAgICAgIDxkaXY+XG4gICAgICAgIHtncmlkID09PSBbXVxuICAgICAgICAgID8gPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICA6IDxkaXY+R3JpZDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaW5rIGhyZWY9Jy9wcm9ibGVtcy95ZXMnPlxuICAgICAgICA8YT5cbiAgICAgICAgICBHZW5lcmF0ZSBwdXp6bGVcbiAgICAgICAgPC9hPlxuICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/problems/index.tsx\n");

/***/ })

})