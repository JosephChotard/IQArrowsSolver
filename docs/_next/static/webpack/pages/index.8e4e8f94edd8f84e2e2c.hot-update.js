webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/board/Board */ \"./components/board/Board.tsx\");\n/* harmony import */ var _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/board/boardInput/Board.model */ \"./components/board/boardInput/Board.model.ts\");\n/* harmony import */ var _components_board_boardInput_BoardInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/board/boardInput/BoardInput */ \"./components/board/boardInput/BoardInput.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Index.module.scss */ \"./pages/Index.module.scss\");\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/josephchotard/Documents/Fun/iqArrows/website/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar WIDTH = 6;\nvar HEIGHT = 3;\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(new Array(HEIGHT).fill(_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE).map(function () {\n    return new Array(WIDTH).fill([_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE, '']);\n  })),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      grid = _React$useState2[0],\n      setGrid = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    fetch('/grids.json').then(function (data) {\n      return data.json();\n    }).then(function (json) {\n      setGrids(json);\n    });\n\n    if (window.location.search.length > 0) {\n      var _search = window.location.search.substring(1);\n\n      var params = JSON.parse('{\"' + decodeURI(_search).replace(/\"/g, '\\\\\"').replace(/&/g, '\",\"').replace(/=/g, '\":\"') + '\"}');\n      var directions = {};\n      Object.keys(params).forEach(function (key) {\n        var pos = key.split('c').map(function (x) {\n          return +x;\n        });\n        directions[\"\".concat(pos[0]).concat(pos[1])] = parseInt(params[key]);\n      });\n      console.log(directions);\n    }\n  }, []);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(null),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      grids = _React$useState4[0],\n      setGrids = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState([]),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      solutions = _React$useState6[0],\n      setSolutions = _React$useState6[1];\n\n  var search = function search() {\n    if (!grids) {\n      return;\n    }\n\n    setSolutions(grids.filter(function (g) {\n      for (var rowIndex = 0; rowIndex < grid.length; rowIndex++) {\n        var row = grid[rowIndex];\n\n        for (var cellIndex = 0; cellIndex < row.length; cellIndex++) {\n          var cell = row[cellIndex];\n\n          if (cell[0] !== _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE) {\n            if (cell[0] !== g[rowIndex][cellIndex][0]) {\n              return false;\n            }\n          }\n        }\n      }\n\n      return true;\n    }));\n  };\n\n  var onGridChange = function onGridChange(grid) {\n    var queryObj = {};\n    grid.forEach(function (row, rowIndex) {\n      row.forEach(function (cell, cellIndex) {\n        if (cell[0] !== _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].NONE) {\n          queryObj[\"\".concat(rowIndex, \"c\").concat(cellIndex)] = cell[0];\n        }\n      });\n    });\n    var query = Object.keys(queryObj).map(function (key) {\n      return key + '=' + queryObj[key];\n    }).join('&');\n    var href = \"\".concat(window.location.pathname).concat(query !== '' ? \"?\".concat(query) : '');\n    router.push(href, href, {\n      shallow: true\n    });\n    setGrid(grid);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    search();\n  }, [grid, grids]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"IQ Arrows Solver\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_board_boardInput_BoardInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      grid: grid,\n      setGrid: onGridChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), grids === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.grids,\n      children: [solutions.slice(0, 50).map(function (grid, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_board_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          grid: grid\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 15\n        }, _this);\n      }), solutions.length > 50 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.firstResults,\n        children: \"Only displaying first 50 results\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"7aqrVPU8mwRxAqfimlWXrBtS57A=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiV0lEVEgiLCJIRUlHSFQiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkRJUkVDVElPTlMiLCJOT05FIiwibWFwIiwiZ3JpZCIsInNldEdyaWQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsInNldEdyaWRzIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJwYXJhbXMiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUkkiLCJyZXBsYWNlIiwiZGlyZWN0aW9ucyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicG9zIiwic3BsaXQiLCJ4IiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiZ3JpZHMiLCJzb2x1dGlvbnMiLCJzZXRTb2x1dGlvbnMiLCJmaWx0ZXIiLCJnIiwicm93SW5kZXgiLCJyb3ciLCJjZWxsSW5kZXgiLCJjZWxsIiwib25HcmlkQ2hhbmdlIiwicXVlcnlPYmoiLCJxdWVyeSIsImpvaW4iLCJocmVmIiwicGF0aG5hbWUiLCJwdXNoIiwic2hhbGxvdyIsInN0eWxlcyIsInNsaWNlIiwiaSIsImZpcnN0UmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsS0FBSyxHQUFHLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBZjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFENkIsd0JBTXpCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQ0YsSUFBSUMsS0FBSixDQUFVTixNQUFWLEVBQWtCTyxJQUFsQixDQUF1QkMs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IjpbImltcG9ydCBCb2FyZCBmcm9tICdAY29tcG9uZW50cy9ib2FyZC9Cb2FyZCdcbmltcG9ydCB7IERJUkVDVElPTlMsIEJPQVJEIH0gZnJvbSAnQGNvbXBvbmVudHMvYm9hcmQvYm9hcmRJbnB1dC9Cb2FyZC5tb2RlbCdcbmltcG9ydCBCb2FyZElucHV0IGZyb20gJ0Bjb21wb25lbnRzL2JvYXJkL2JvYXJkSW5wdXQvQm9hcmRJbnB1dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmRleC5tb2R1bGUuc2NzcydcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuY29uc3QgV0lEVEggPSA2XG5jb25zdCBIRUlHSFQgPSAzXG4gIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbXG4gICAgZ3JpZCxcbiAgICBzZXRHcmlkXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxCT0FSRD4oXG4gICAgbmV3IEFycmF5KEhFSUdIVCkuZmlsbChESVJFQ1RJT05TLk5PTkUpLm1hcCgoKSA9PiBuZXcgQXJyYXkoV0lEVEgpLmZpbGwoW0RJUkVDVElPTlMuTk9ORSwgJyddKSlcbiAgKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9ncmlkcy5qc29uJylcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgc2V0R3JpZHMoanNvbilcbiAgICAgIH0pXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IEpTT04ucGFyc2UoJ3tcIicgKyBkZWNvZGVVUkkoc2VhcmNoKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvJi9nLCAnXCIsXCInKS5yZXBsYWNlKC89L2csICdcIjpcIicpICsgJ1wifScpXG4gICAgICBsZXQgZGlyZWN0aW9uczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9XG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0ga2V5LnNwbGl0KCdjJykubWFwKHggPT4gK3gpXG4gICAgICAgIGRpcmVjdGlvbnNbYCR7cG9zWzBdfSR7cG9zWzFdfWBdID0gcGFyc2VJbnQocGFyYW1zW2tleV0pXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9ucylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IFtncmlkcywgc2V0R3JpZHNdID0gUmVhY3QudXNlU3RhdGU8Qk9BUkRbXT4obnVsbClcbiAgXG4gIGNvbnN0IFtzb2x1dGlvbnMsIHNldFNvbHV0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcblxuICBjb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKCFncmlkcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFNvbHV0aW9ucyhncmlkcy5maWx0ZXIoZyA9PiB7XG4gICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgZ3JpZC5sZW5ndGg7IHJvd0luZGV4KyspIHsgXG4gICAgICAgIGNvbnN0IHJvdyA9IGdyaWRbcm93SW5kZXhdXG4gICAgICAgIGZvciAobGV0IGNlbGxJbmRleCA9IDA7IGNlbGxJbmRleCA8IHJvdy5sZW5ndGg7IGNlbGxJbmRleCsrKSB7IFxuICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3dbY2VsbEluZGV4XVxuICAgICAgICAgIGlmIChjZWxsWzBdICE9PSBESVJFQ1RJT05TLk5PTkUpIHtcbiAgICAgICAgICAgIGlmIChjZWxsWzBdICE9PSBnW3Jvd0luZGV4XVtjZWxsSW5kZXhdWzBdKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IG9uR3JpZENoYW5nZSA9IChncmlkOiBCT0FSRCkgPT4ge1xuICAgIGxldCBxdWVyeU9iajogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9XG4gICAgZ3JpZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjZWxsWzBdICE9PSBESVJFQ1RJT05TLk5PTkUpIHtcbiAgICAgICAgICBxdWVyeU9ialtgJHtyb3dJbmRleH1jJHtjZWxsSW5kZXh9YF0gPSBjZWxsWzBdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zdCBxdWVyeSA9IE9iamVjdC5rZXlzKHF1ZXJ5T2JqKS5tYXAoa2V5ID0+IGtleSArICc9JyArIHF1ZXJ5T2JqW2tleV0pLmpvaW4oJyYnKVxuICAgIGNvbnN0IGhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHtxdWVyeSAhPT0gJycgPyBgPyR7cXVlcnl9YCA6ICcnIH1gXG4gICAgcm91dGVyLnB1c2goaHJlZiwgaHJlZiwge1xuICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgfSlcbiAgICBzZXRHcmlkKGdyaWQpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaCgpXG4gIH0sIFtncmlkLCBncmlkc10pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklRIEFycm93cyBTb2x2ZXI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJvYXJkSW5wdXRcbiAgICAgICAgZ3JpZD17Z3JpZH1cbiAgICAgICAgc2V0R3JpZD17b25HcmlkQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIHtncmlkcyA9PT0gbnVsbFxuICAgICAgICA/IDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZHN9PlxuICAgICAgICAgICAge3NvbHV0aW9ucy5zbGljZSgwLDUwKS5tYXAoKGdyaWQsIGkpID0+IChcbiAgICAgICAgICAgICAgPEJvYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGdyaWQ9e2dyaWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAge3NvbHV0aW9ucy5sZW5ndGggPiA1MCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RSZXN1bHRzfT5Pbmx5IGRpc3BsYXlpbmcgZmlyc3QgNTAgcmVzdWx0czwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})