webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/board/Board */ \"./components/board/Board.tsx\");\n/* harmony import */ var _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/board/boardInput/Board.model */ \"./components/board/boardInput/Board.model.ts\");\n/* harmony import */ var _components_board_boardInput_BoardInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/board/boardInput/BoardInput */ \"./components/board/boardInput/BoardInput.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Index.module.scss */ \"./pages/Index.module.scss\");\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/josephchotard/Documents/Fun/iqArrows/website/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar WIDTH = 6;\nvar HEIGHT = 3;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      grids = _React$useState2[0],\n      setGrids = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    fetch('/grids.json').then(function (data) {\n      return data.json();\n    }).then(function (json) {\n      setGrids(json);\n    });\n  }, []);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(new Array(HEIGHT).fill(_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE).map(function () {\n    return new Array(WIDTH).fill([_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE, '']);\n  })),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      grid = _React$useState4[0],\n      setGrid = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      solutions = _React$useState6[0],\n      setSolutions = _React$useState6[1];\n\n  var search = function search() {\n    if (!grids) {\n      return;\n    }\n\n    setSolutions(grids.filter(function (g) {\n      for (var rowIndex = 0; rowIndex < grid.length; rowIndex++) {\n        var row = grid[rowIndex];\n\n        for (var cellIndex = 0; cellIndex < row.length; cellIndex++) {\n          var cell = row[cellIndex];\n\n          if (cell[0] !== _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE) {\n            if (cell[0] !== g[rowIndex][cellIndex][0]) {\n              return false;\n            }\n          }\n        }\n      }\n\n      return true;\n    }));\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    var queryObj = {};\n    grid.forEach(function (row, rowIndex) {\n      row.forEach(function (cell, cellIndex) {\n        if (cell[0] !== _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE) {\n          queryObj[\"\".concat(rowIndex, \"-\").concat(cellIndex)] = cell[0];\n        }\n      });\n    });\n    var query = Object.keys(queryObj).map(function (key) {\n      return key + '=' + queryObj[key];\n    }).join('&');\n    var href = \"\".concat(window.location.pathname, \"?\").concat(query);\n    router.push(href, href, {\n      shallow: true\n    });\n  }, [grid]);\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    search();\n  }, [grid, grids]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"IQ Arrows Solver\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_board_boardInput_BoardInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      grid: grid,\n      setGrid: setGrid\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this), grids === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.grids,\n      children: [solutions.slice(0, 50).map(function (grid, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_board_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          grid: grid\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 15\n        }, _this);\n      }), solutions.length > 50 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.firstResults,\n        children: \"Only displaying first 50 results\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"O8UHHCqH23cnOiKj2yL9pHzDXkc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiV0lEVEgiLCJIRUlHSFQiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImdyaWRzIiwic2V0R3JpZHMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsIkFycmF5IiwiZmlsbCIsIkRJUkVDVElPTlMiLCJOT05FIiwibWFwIiwiZ3JpZCIsInNldEdyaWQiLCJzb2x1dGlvbnMiLCJzZXRTb2x1dGlvbnMiLCJzZWFyY2giLCJmaWx0ZXIiLCJnIiwicm93SW5kZXgiLCJsZW5ndGgiLCJyb3ciLCJjZWxsSW5kZXgiLCJjZWxsIiwicXVlcnlPYmoiLCJmb3JFYWNoIiwicXVlcnkiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwiam9pbiIsImhyZWYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsInNoYWxsb3ciLCJzdHlsZXMiLCJzbGljZSIsImkiLCJmaXJzdFJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBRyxDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLENBQWY7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDZCLHdCQUVIQyw0Q0FBSyxDQUFDQyxRQUFOLENBQXdCLElBQXhCLENBRkc7QUFBQTtBQUFBLE1BRXRCQyxLQUZzQjtBQUFBLE1BRWZDLFFBRmU7O0FBSTdCSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFNBQUssQ0FBQyxhQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLElBQUwsRUFBSjtB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RCxDQWRIO0FBZ0JBZCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEJjLFVBQU07QUFDUCxHQUZELEVBRUcsQ0FBQ0osSUFBRCxFQUFPWixLQUFQLENBRkg7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQywrRUFBRDtBQUNFLFVBQUksRUFBRVksSUFEUjtBQUVFLGFBQU8sRUFBRUM7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFRR2IsS0FBSyxLQUFLLElBQVYsZ0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxnQkFHRztBQUFLLGVBQVMsRUFBRXFDLHlEQUFNLENBQUNyQyxLQUF2QjtBQUFBLGlCQUNHYyxTQUFTLENBQUN3QixLQUFWLENBQWdCLENBQWhCLEVBQWtCLEVBQWxCLEVBQXNCM0IsR0FBdEIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFPMkIsQ0FBUDtBQUFBLDRCQUN6QixxRUFBQywrREFBRDtBQUVFLGNBQUksRUFBRTNCO0FBRlIsV0FDTzJCLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeUI7QUFBQSxPQUExQixDQURILEVBT0t6QixTQUFTLENBQUNNLE1BQVYsR0FBbUIsRUFBbkIsaUJBQ0M7QUFBRyxpQkFBUyxFQUFFaUIseURBQU0sQ0FBQ0csWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7R0F6RnVCN0MsSTtVQUNQRSxxRDs7O0tBRE9GLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSAnQGNvbXBvbmVudHMvYm9hcmQvQm9hcmQnXG5pbXBvcnQgeyBESVJFQ1RJT05TLCBCT0FSRCB9IGZyb20gJ0Bjb21wb25lbnRzL2JvYXJkL2JvYXJkSW5wdXQvQm9hcmQubW9kZWwnXG5pbXBvcnQgQm9hcmRJbnB1dCBmcm9tICdAY29tcG9uZW50cy9ib2FyZC9ib2FyZElucHV0L0JvYXJkSW5wdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IFdJRFRIID0gNlxuY29uc3QgSEVJR0hUID0gM1xuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtncmlkcywgc2V0R3JpZHNdID0gUmVhY3QudXNlU3RhdGU8Qk9BUkRbXT4obnVsbClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvZ3JpZHMuanNvbicpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHNldEdyaWRzKGpzb24pXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBbXG4gICAgZ3JpZCxcbiAgICBzZXRHcmlkXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxCT0FSRD4oXG4gICAgbmV3IEFycmF5KEhFSUdIVCkuZmlsbChESVJFQ1RJT05TLk5PTkUpLm1hcCgoKSA9PiBuZXcgQXJyYXkoV0lEVEgpLmZpbGwoW0RJUkVDVElPTlMuTk9ORSwgJyddKSlcbiAgKVxuICBcbiAgY29uc3QgW3NvbHV0aW9ucywgc2V0U29sdXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgICBpZiAoIWdyaWRzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0U29sdXRpb25zKGdyaWRzLmZpbHRlcihnID0+IHtcbiAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBncmlkLmxlbmd0aDsgcm93SW5kZXgrKykgeyBcbiAgICAgICAgY29uc3Qgcm93ID0gZ3JpZFtyb3dJbmRleF1cbiAgICAgICAgZm9yIChsZXQgY2VsbEluZGV4ID0gMDsgY2VsbEluZGV4IDwgcm93Lmxlbmd0aDsgY2VsbEluZGV4KyspIHsgXG4gICAgICAgICAgY29uc3QgY2VsbCA9IHJvd1tjZWxsSW5kZXhdXG4gICAgICAgICAgaWYgKGNlbGxbMF0gIT09IERJUkVDVElPTlMuTk9ORSkge1xuICAgICAgICAgICAgaWYgKGNlbGxbMF0gIT09IGdbcm93SW5kZXhdW2NlbGxJbmRleF1bMF0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcXVlcnlPYmo6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgIGdyaWQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2VsbFswXSAhPT0gRElSRUNUSU9OUy5OT05FKSB7XG4gICAgICAgICAgcXVlcnlPYmpbYCR7cm93SW5kZXh9LSR7Y2VsbEluZGV4fWBdID0gY2VsbFswXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgY29uc3QgcXVlcnkgPSAgT2JqZWN0LmtleXMocXVlcnlPYmopLm1hcChrZXkgPT4ga2V5ICsgJz0nICsgcXVlcnlPYmpba2V5XSkuam9pbignJicpO1xuICAgIGNvbnN0IGhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7cXVlcnl9YFxuICAgIHJvdXRlci5wdXNoKGhyZWYsIGhyZWYsIHtcbiAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIH0pXG4gIH0sIFtncmlkXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaCgpXG4gIH0sIFtncmlkLCBncmlkc10pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklRIEFycm93cyBTb2x2ZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJvYXJkSW5wdXRcbiAgICAgICAgZ3JpZD17Z3JpZH1cbiAgICAgICAgc2V0R3JpZD17c2V0R3JpZH1cbiAgICAgIC8+XG4gICAgICB7Z3JpZHMgPT09IG51bGxcbiAgICAgICAgPyA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRzfT5cbiAgICAgICAgICAgIHtzb2x1dGlvbnMuc2xpY2UoMCw1MCkubWFwKChncmlkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxCb2FyZFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBncmlkPXtncmlkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtzb2x1dGlvbnMubGVuZ3RoID4gNTAgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0UmVzdWx0c30+T25seSBkaXNwbGF5aW5nIGZpcnN0IDUwIHJlc3VsdHM8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})