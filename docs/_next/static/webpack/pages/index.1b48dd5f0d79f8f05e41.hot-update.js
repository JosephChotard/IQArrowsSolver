webpackHotUpdate_N_E("pages/index",{

/***/ "./components/board/boardInput/BoardInput.tsx":
/*!****************************************************!*\
  !*** ./components/board/boardInput/BoardInput.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoardInput; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cellInput_CellInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellInput/CellInput */ \"./components/board/boardInput/cellInput/CellInput.tsx\");\n/* harmony import */ var _BoardInput_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardInput.module.scss */ \"./components/board/boardInput/BoardInput.module.scss\");\n/* harmony import */ var _BoardInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BoardInput_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Board_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Board.model */ \"./components/board/boardInput/Board.model.ts\");\n\nvar _jsxFileName = \"/Users/josephchotard/Documents/Fun/iqArrows/website/components/board/boardInput/BoardInput.tsx\";\n\n\n\n\nfunction BoardInput(_ref) {\n  var _this = this;\n\n  var grid = _ref.grid,\n      setGrid = _ref.setGrid;\n\n  var handleClick = function handleClick(direction, row, column) {\n    setGrid(grid.map(function (r, rowIndex) {\n      if (rowIndex !== row) {\n        return r;\n      }\n\n      return r.map(function (c, columnIndex) {\n        if (columnIndex !== column) {\n          return c;\n        }\n\n        return [direction, _Board_model__WEBPACK_IMPORTED_MODULE_4__[\"COLOURS\"].NONE];\n      });\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _BoardInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.boardInput,\n    children: grid.map(function (row, rowIndex) {\n      return row.map(function (cell, columnIndex) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _BoardInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cell,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _BoardInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.innerCell,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_cellInput_CellInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              direction: cell[0],\n              onClick: function onClick(direction) {\n                return handleClick(direction, rowIndex, columnIndex);\n              }\n            }, columnIndex, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this);\n      });\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n_c = BoardInput;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC9ib2FyZElucHV0L0JvYXJkSW5wdXQudHN4PzU1ZjQiXSwibmFtZXMiOlsiQm9hcmRJbnB1dCIsImdyaWQiLCJzZXRHcmlkIiwiaGFuZGxlQ2xpY2siLCJkaXJlY3Rpb24iLCJyb3ciLCJjb2x1bW4iLCJtYXAiLCJyIiwicm93SW5kZXgiLCJjIiwiY29sdW1uSW5kZXgiLCJDT0xPVVJTIiwiTk9ORSIsInN0eWxlcyIsImJvYXJkSW5wdXQiLCJjZWxsIiwiaW5uZXJDZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLFVBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUFsQ0MsSUFBa0MsUUFBbENBLElBQWtDO0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0Qjs7QUFFckUsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUF3QkMsR0FBeEIsRUFBcUNDLE1BQXJDLEVBQXdEO0FBQzFFSixXQUFPLENBQUNELElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsUUFBSixFQUFpQjtBQUNoQyxVQUFJQSxRQUFRLEtBQUtKLEdBQWpCLEVBQXNCO0FBQ3BCLGVBQU9HLENBQVA7QUFDRDs7QUFDRCxhQUFPQSxDQUFDLENBQUNELEdBQUYsQ0FBTSxVQUFDRyxDQUFELEVBQUlDLFdBQUosRUFBb0I7QUFDL0IsWUFBSUEsV0FBVyxLQUFLTCxNQUFwQixFQUE0QjtBQUMxQixpQkFBT0ksQ0FBUDtBQUNEOztBQUNELGVBQU8sQ0FBQ04sU0FBRCxFQUFZUSxvREFBTyxDQUFDQyxJQUFwQixDQUFQO0FBQ0QsT0FMTSxDQUFQO0FBTUQsS0FWTyxDQUFELENBQVA7QUFXRCxHQVpEOztBQWNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxVQUF2QjtBQUFBLGNBQ0dkLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNGLEdBQUQsRUFBTUksUUFBTixFQUNWO0FBQ0UsYUFBT0osR0FBRyxDQUFDRSxHQUFKLENBQVEsVUFBQ1MsSUFBRCxFQUFPTCxXQUFQO0FBQUEsNEJBQ2I7QUFBSyxtQkFBUyxFQUFFRyw4REFBTSxDQUFDRSxJQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0csU0FBdkI7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUVFLHVCQUFTLEVBQUVELElBQUksQ0FBQyxDQUFELENBRmpCO0FBR0UscUJBQU8sRUFBRSxpQkFBQVosU0FBUztBQUFBLHVCQUFJRCxXQUFXLENBQUNDLFNBQUQsRUFBWUssUUFBWixFQUFzQkUsV0FBdEIsQ0FBZjtBQUFBO0FBSHBCLGVBQ09BLFdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBUixDQUFQO0FBVUcsS0FaSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDtLQWxDdUJYLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkSW5wdXQvQm9hcmRJbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2VsbElucHV0IGZyb20gJy4vY2VsbElucHV0L0NlbGxJbnB1dCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb2FyZElucHV0Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgQ09MT1VSUywgRElSRUNUSU9OUyB9IGZyb20gJy4vQm9hcmQubW9kZWwnXG5cbmV4cG9ydCB0eXBlIEJvYXJkSW5wdXRQcm9wcyA9IHtcbiAgZ3JpZDogW0RJUkVDVElPTlMsIENPTE9VUlNdW11bXSxcbiAgc2V0R3JpZDogKGc6IFtESVJFQ1RJT05TLCBDT0xPVVJTXVtdW10pID0+IHZvaWRcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkSW5wdXQoeyBncmlkLCBzZXRHcmlkIH06IEJvYXJkSW5wdXRQcm9wcykge1xuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZGlyZWN0aW9uOiBESVJFQ1RJT05TLCByb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpID0+IHtcbiAgICBzZXRHcmlkKGdyaWQubWFwKChyLCByb3dJbmRleCkgPT4ge1xuICAgICAgaWYgKHJvd0luZGV4ICE9PSByb3cpIHtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICAgIHJldHVybiByLm1hcCgoYywgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSBjb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gY1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZGlyZWN0aW9uLCBDT0xPVVJTLk5PTkVdXG4gICAgICB9KVxuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvYXJkSW5wdXR9PlxuICAgICAge2dyaWQubWFwKChyb3csIHJvd0luZGV4KSA9PiBcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHJvdy5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJDZWxsfT5cbiAgICAgICAgICAgICAgPENlbGxJbnB1dFxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtjZWxsWzBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RpcmVjdGlvbiA9PiBoYW5kbGVDbGljayhkaXJlY3Rpb24sIHJvd0luZGV4LCBjb2x1bW5JbmRleCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board/boardInput/BoardInput.tsx\n");

/***/ })

})