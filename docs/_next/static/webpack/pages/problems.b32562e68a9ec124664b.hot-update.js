webpackHotUpdate_N_E("pages/problems",{

/***/ "./pages/problems/index.tsx":
/*!**********************************!*\
  !*** ./pages/problems/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/board/boardInput/Board.model */ \"./components/board/boardInput/Board.model.ts\");\n/* harmony import */ var lib_applyConstraintToGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/applyConstraintToGrid */ \"./lib/applyConstraintToGrid.ts\");\n/* harmony import */ var _components_board_Board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/board/Board */ \"./components/board/Board.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/josephchotard/Documents/Fun/iqArrows/website/pages/problems/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar WIDTH = 6;\nvar HEIGHT = 3;\nfunction Problems() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      grid = _React$useState2[0],\n      setGrid = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    var givenCells = Math.floor(Math.random() * (5 - 3 + 1)) + 3;\n    fetch(\"\".concat(process.env.basePath ? process.env.basePath : '', \"/constraints/constraints-\").concat(givenCells, \".txt\")).then(function (data) {\n      return data.text();\n    }).then(function (constraintsText) {\n      var constraints = constraintsText.split(/\\r\\n|\\r|\\n/);\n      var selectedConstraintIndex = Math.floor(Math.random() * (constraints.length - 1 + 1));\n      var selectedConstraint = constraints[selectedConstraintIndex];\n      var parsedConstraintArray = selectedConstraint.substring(1, selectedConstraint.length - 2).split('), ').map(function (kvPair) {\n        return kvPair.substring(1).split('): (').map(function (pair) {\n          return pair.split(', ');\n        });\n      });\n      var parsedConstraint = {};\n      parsedConstraintArray.forEach(function (constraint) {\n        parsedConstraint[\"\".concat(constraint[0][0], \"c\").concat(constraint[0][1])] = constraint[1][0];\n      });\n      setGrid(Object(lib_applyConstraintToGrid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(new Array(HEIGHT).fill(_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"].NONE).map(function () {\n        return new Array(WIDTH).fill([_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"].NONE, '']);\n      }), parsedConstraint)); // Set the url\n\n      var query = Object.keys(parsedConstraint).map(function (key) {\n        return key + '=' + parsedConstraint[key];\n      }).join('&');\n      var href = \"/\".concat(query !== '' ? \"?\".concat(query) : '');\n      next_router__WEBPACK_IMPORTED_MODULE_7__[\"Router\"].replace(href, href, {\n        shallow: true\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [\"Solve this problem\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: grid === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_board_Board__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          grid: grid\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/problems/yes\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: \"Generate puzzle\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Problems, \"syeO4AwikX0r0RmLs1Mbz5+Rc0I=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvYmxlbXMvaW5kZXgudHN4P2Q0OGEiXSwibmFtZXMiOlsiV0lEVEgiLCJIRUlHSFQiLCJQcm9ibGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJncmlkIiwic2V0R3JpZCIsInVzZUVmZmVjdCIsImdpdmVuQ2VsbHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJiYXNlUGF0aCIsInRoZW4iLCJkYXRhIiwidGV4dCIsImNvbnN0cmFpbnRzVGV4dCIsImNvbnN0cmFpbnRzIiwic3BsaXQiLCJzZWxlY3RlZENvbnN0cmFpbnRJbmRleCIsImxlbmd0aCIsInNlbGVjdGVkQ29uc3RyYWludCIsInBhcnNlZENvbnN0cmFpbnRBcnJheSIsInN1YnN0cmluZyIsIm1hcCIsImt2UGFpciIsInBhaXIiLCJwYXJzZWRDb25zdHJhaW50IiwiZm9yRWFjaCIsImNvbnN0cmFpbnQiLCJhcHBseUNvbnN0cmFpbnRUb0dyaWQiLCJBcnJheSIsImZpbGwiLCJESVJFQ1RJT05TIiwiTk9ORSIsInF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImpvaW4iLCJocmVmIiwiUm91dGVyIiwicmVwbGFjZSIsInNoYWxsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBZjtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSx3QkFDVEMsNENBQUssQ0FBQ0MsUUFBTixDQUFzQixJQUF0QixDQURTO0FBQUE7QUFBQSxNQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsT0FEb0I7O0FBR2pDSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFD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QTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFZRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxlQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBdER1QkgsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3BhZ2VzL3Byb2JsZW1zL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJPQVJELCBESVJFQ1RJT05TIH0gZnJvbSAnQGNvbXBvbmVudHMvYm9hcmQvYm9hcmRJbnB1dC9Cb2FyZC5tb2RlbCdcbmltcG9ydCBhcHBseUNvbnN0cmFpbnRUb0dyaWQgZnJvbSAnbGliL2FwcGx5Q29uc3RyYWludFRvR3JpZCdcbmltcG9ydCBCb2FyZCBmcm9tICdAY29tcG9uZW50cy9ib2FyZC9Cb2FyZCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBXSURUSCA9IDZcbmNvbnN0IEhFSUdIVCA9IDNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvYmxlbXMoKSB7XG4gIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IFJlYWN0LnVzZVN0YXRlPEJPQVJEPihudWxsKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2l2ZW5DZWxscyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1IC0gMyArIDEpKSArIDM7XG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFzZVBhdGggPyBwcm9jZXNzLmVudi5iYXNlUGF0aCA6ICcnfS9jb25zdHJhaW50cy9jb25zdHJhaW50cy0ke2dpdmVuQ2VsbHN9LnR4dGApXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEudGV4dCgpKVxuICAgICAgLnRoZW4oY29uc3RyYWludHNUZXh0ID0+IHsgXG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gY29uc3RyYWludHNUZXh0LnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29uc3RyYWludEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbnN0cmFpbnRzLmxlbmd0aCAtIDEgKyAxKSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29uc3RyYWludCA9IGNvbnN0cmFpbnRzW3NlbGVjdGVkQ29uc3RyYWludEluZGV4XVxuICAgICAgICBjb25zdCBwYXJzZWRDb25zdHJhaW50QXJyYXkgPSBzZWxlY3RlZENvbnN0cmFpbnRcbiAgICAgICAgICAuc3Vic3RyaW5nKDEsIHNlbGVjdGVkQ29uc3RyYWludC5sZW5ndGggLSAyKVxuICAgICAgICAgIC5zcGxpdCgnKSwgJylcbiAgICAgICAgICAubWFwKGt2UGFpciA9PiBrdlBhaXJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnKTogKCcpXG4gICAgICAgICAgICAubWFwKHBhaXIgPT4gcGFpci5zcGxpdCgnLCAnKSlcbiAgICAgICAgKVxuICAgICAgICBsZXQgcGFyc2VkQ29uc3RyYWludCA9IHt9XG4gICAgICAgIHBhcnNlZENvbnN0cmFpbnRBcnJheS5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xuICAgICAgICAgIHBhcnNlZENvbnN0cmFpbnRbYCR7Y29uc3RyYWludFswXVswXX1jJHtjb25zdHJhaW50WzBdWzFdfWBdID0gY29uc3RyYWludFsxXVswXVxuICAgICAgICB9KVxuICAgICAgICBzZXRHcmlkKGFwcGx5Q29uc3RyYWludFRvR3JpZChuZXcgQXJyYXkoSEVJR0hUKS5maWxsKERJUkVDVElPTlMuTk9ORSkubWFwKCgpID0+IG5ldyBBcnJheShXSURUSCkuZmlsbChbRElSRUNUSU9OUy5OT05FLCAnJ10pKSwgcGFyc2VkQ29uc3RyYWludCkpXG5cbiAgICAgICAgLy8gU2V0IHRoZSB1cmxcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3Qua2V5cyhwYXJzZWRDb25zdHJhaW50KS5tYXAoa2V5ID0+IGtleSArICc9JyArIHBhcnNlZENvbnN0cmFpbnRba2V5XSkuam9pbignJicpXG4gICAgY29uc3QgaHJlZiA9IGAvJHtxdWVyeSAhPT0gJycgPyBgPyR7cXVlcnl9YCA6ICcnIH1gXG4gICAgUm91dGVyLnJlcGxhY2UoaHJlZiwgaHJlZiwge1xuICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgfSlcbiAgICAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBTb2x2ZSB0aGlzIHByb2JsZW1cbiAgICAgIDxkaXY+XG4gICAgICAgIHtncmlkID09PSBudWxsXG4gICAgICAgICAgPyA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAgIDogPGRpdj5cbiAgICAgICAgICAgIDxCb2FyZFxuICAgICAgICAgICAgICBncmlkPXtncmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPScvcHJvYmxlbXMveWVzJz5cbiAgICAgICAgPGE+XG4gICAgICAgICAgR2VuZXJhdGUgcHV6emxlXG4gICAgICAgIDwvYT5cbiAgICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/problems/index.tsx\n");

/***/ })

})