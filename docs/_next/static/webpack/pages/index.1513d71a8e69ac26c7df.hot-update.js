webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/board/boardInput/Board.model */ \"./components/board/boardInput/Board.model.ts\");\n/* harmony import */ var lib_applyConstraintToGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/applyConstraintToGrid */ \"./lib/applyConstraintToGrid.ts\");\n/* harmony import */ var _components_board_Board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/board/Board */ \"./components/board/Board.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lib_constraintToQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/constraintToQuery */ \"./lib/constraintToQuery.ts\");\n/* harmony import */ var lib_windowLocationToConstraint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/windowLocationToConstraint */ \"./lib/windowLocationToConstraint.ts\");\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Index.module.scss */ \"./pages/Index.module.scss\");\n/* harmony import */ var _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Index_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\nvar _jsxFileName = \"/Users/josephchotard/Documents/Fun/iqArrows/website/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar WIDTH = 6;\nvar HEIGHT = 3;\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      grid = _React$useState2[0],\n      setGrid = _React$useState2[1];\n\n  var generateNewPuzzle = function generateNewPuzzle() {\n    var replace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    setGrid(null);\n    var g = new Array(HEIGHT).fill(_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"].NONE).map(function () {\n      return new Array(WIDTH).fill([_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"].NONE, '']);\n    });\n    var givenCells = Math.floor(Math.random() * (5 - 3 + 1)) + 3;\n    fetch(\"\".concat(process.env.NEXT_PUBLIC_basePath ? process.env.NEXT_PUBLIC_basePath : '', \"/constraints/constraints-\").concat(givenCells, \".txt\")).then(function (data) {\n      return data.text();\n    }).then(function (constraintsText) {\n      var constraints = constraintsText.split(/\\r\\n|\\r|\\n/);\n      var selectedConstraintIndex = Math.floor(Math.random() * (constraints.length - 1 + 1));\n      var selectedConstraint = constraints[selectedConstraintIndex];\n      var parsedConstraintArray = selectedConstraint.substring(1, selectedConstraint.length - 2).split('), ').map(function (kvPair) {\n        return kvPair.substring(1).split('): (').map(function (pair) {\n          return pair.split(', ');\n        });\n      });\n      var parsedConstraint = {};\n      parsedConstraintArray.forEach(function (constraint) {\n        parsedConstraint[\"\".concat(constraint[0][0], \"c\").concat(constraint[0][1])] = constraint[1][0];\n      });\n      setGrid(Object(lib_applyConstraintToGrid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(g, parsedConstraint)); // Set the url\n\n      var href = \"\".concat(Object(lib_constraintToQuery__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(parsedConstraint));\n\n      if (replace) {\n        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.replace(href, href, {\n          shallow: true\n        });\n      } else {\n        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(href, href, {\n          shallow: true\n        });\n      }\n    });\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (false) {}\n\n    if (window.location.search.length !== 0) {\n      var g = new Array(HEIGHT).fill(_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"].NONE).map(function () {\n        return new Array(WIDTH).fill([_components_board_boardInput_Board_model__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTIONS\"].NONE, '']);\n      });\n      var params = Object(lib_windowLocationToConstraint__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n      setGrid(Object(lib_applyConstraintToGrid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(g, params));\n      return;\n    }\n\n    generateNewPuzzle(true);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.problems,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"IQ Arrows Logic Puzzle Generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"IQ Arrows Logic Puzzle Generator\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n      children: \"Over 5000 more challenges for you\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      children: [\"As always, there is only one possible solution. You can find it\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        href: \"/solutions/\".concat(true ? window.location.search : undefined),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n          className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.solutionLink,\n          children: \"here\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 8\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: grid === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.loading, \" \").concat(_Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.board),\n        children: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Array(WIDTH * HEIGHT)).map(function (_, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.cell\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_board_Board__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          grid: grid\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.generateNewPuzzle,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return generateNewPuzzle();\n        },\n        className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.generateNewPuzzleButton,\n        children: \"Generate puzzle\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      children: [\"This website was made by \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n        href: \"http://github.com/JosephChotard/\",\n        children: \"Joseph Chotard\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 35\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      className: _Index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.disclaimer,\n      children: [\"I am not affiliated with SmartGames in any way. I made this website purely for entetertainment purposes. All code for this website is available for free, under the MIT license\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/JosephChotard/IQArrowsSolver\",\n        children: \" here\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Index, \"syeO4AwikX0r0RmLs1Mbz5+Rc0I=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiV0lEVEgiLCJIRUlHSFQiLCJJbmRleCIsIlJlYWN0IiwidXNlU3RhdGUiLCJncmlkIiwic2V0R3JpZCIsImdlbmVyYXRlTmV3UHV6emxlIiwicmVwbGFjZSIsImciLCJBcnJheSIsImZpbGwiLCJESVJFQ1RJT05TIiwiTk9ORSIsIm1hcCIsImdpdmVuQ2VsbHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19iYXNlUGF0aCIsInRoZW4iLCJkYXRhIiwidGV4dCIsImNvbnN0cmFpbnRzVGV4dCIsImNvbnN0cmFpbnRzIiwic3BsaXQiLCJzZWxlY3RlZENvbnN0cmFpbnRJbmRleCIsImxlbmd0aCIsInNlbGVjdGVkQ29uc3RyYWludCIsInBhcnNlZENvbnN0cmFpbnRBcnJheSIsInN1YnN0cmluZyIsImt2UGFpciIsInBhaXIiLCJwYXJzZWRDb25zdHJhaW50IiwiZm9yRWFjaCIsImNvbnN0cmFpbnQiLCJhcHBseUNvbnN0cmFpbnRUb0dyaWQiLCJocmVmIiwiY29uc3RyYWludFRvUXVlcnkiLCJSb3V0ZXIiLCJzaGFsbG93IiwicHVzaCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyYW1zIiwid2luZG93TG9jYXRpb25Ub0NvbnN0cmFpbnQiLCJzdHlsZXMiLCJwcm9ibGVtcyIsInNvbHV0aW9uTGluayIsImxvYWRpbmciLCJib2FyZCIsIl8iLCJpIiwiY2VsbCIsImdlbmVyYXRlTmV3UHV6emxlQnV0dG9uIiwiZGlzY2xhaW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQWQ7QUFDQSxJQUFNQyxNQUFN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QUFBO0FBQUEsWUE5QkYsZUErQkU7QUFBRyxlQUFTLEVBQUVSLDBEQUFNLENBQUNTLFVBQXJCO0FBQUEsaU5BSUU7QUFBRyxZQUFJLEVBQUMsaURBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3Q0Q7O0dBL0Z1QjFELEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCT0FSRCwgRElSRUNUSU9OUyB9IGZyb20gJ0Bjb21wb25lbnRzL2JvYXJkL2JvYXJkSW5wdXQvQm9hcmQubW9kZWwnXG5pbXBvcnQgYXBwbHlDb25zdHJhaW50VG9HcmlkIGZyb20gJ2xpYi9hcHBseUNvbnN0cmFpbnRUb0dyaWQnXG5pbXBvcnQgQm9hcmQgZnJvbSAnQGNvbXBvbmVudHMvYm9hcmQvQm9hcmQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGNvbnN0cmFpbnRUb1F1ZXJ5IGZyb20gJ2xpYi9jb25zdHJhaW50VG9RdWVyeSdcbmltcG9ydCB3aW5kb3dMb2NhdGlvblRvQ29uc3RyYWludCBmcm9tICdsaWIvd2luZG93TG9jYXRpb25Ub0NvbnN0cmFpbnQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IFdJRFRIID0gNlxuY29uc3QgSEVJR0hUID0gM1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gUmVhY3QudXNlU3RhdGU8Qk9BUkQ+KG51bGwpXG5cbiAgY29uc3QgZ2VuZXJhdGVOZXdQdXp6bGUgPSAocmVwbGFjZT1mYWxzZSkgPT4ge1xuICAgIHNldEdyaWQobnVsbClcbiAgICBjb25zdCBnID0gbmV3IEFycmF5KEhFSUdIVCkuZmlsbChESVJFQ1RJT05TLk5PTkUpLm1hcCgoKSA9PiBuZXcgQXJyYXkoV0lEVEgpLmZpbGwoW0RJUkVDVElPTlMuTk9ORSwgJyddKSlcbiAgICBjb25zdCBnaXZlbkNlbGxzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAzICsgMSkpICsgMztcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19iYXNlUGF0aCA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX2Jhc2VQYXRoIDogJyd9L2NvbnN0cmFpbnRzL2NvbnN0cmFpbnRzLSR7Z2l2ZW5DZWxsc30udHh0YClcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS50ZXh0KCkpXG4gICAgICAudGhlbihjb25zdHJhaW50c1RleHQgPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzVGV4dC5zcGxpdCgvXFxyXFxufFxccnxcXG4vKVxuICAgICAgICBjb25zdCBzZWxlY3RlZENvbnN0cmFpbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjb25zdHJhaW50cy5sZW5ndGggLSAxICsgMSkpXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29uc3RyYWludCA9IGNvbnN0cmFpbnRzW3NlbGVjdGVkQ29uc3RyYWludEluZGV4XVxuICAgICAgICBjb25zdCBwYXJzZWRDb25zdHJhaW50QXJyYXkgPSBzZWxlY3RlZENvbnN0cmFpbnRcbiAgICAgICAgICAuc3Vic3RyaW5nKDEsIHNlbGVjdGVkQ29uc3RyYWludC5sZW5ndGggLSAyKVxuICAgICAgICAgIC5zcGxpdCgnKSwgJylcbiAgICAgICAgICAubWFwKGt2UGFpciA9PiBrdlBhaXJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnKTogKCcpXG4gICAgICAgICAgICAubWFwKHBhaXIgPT4gcGFpci5zcGxpdCgnLCAnKSlcbiAgICAgICAgICApXG4gICAgICAgIGxldCBwYXJzZWRDb25zdHJhaW50ID0ge31cbiAgICAgICAgcGFyc2VkQ29uc3RyYWludEFycmF5LmZvckVhY2goY29uc3RyYWludCA9PiB7XG4gICAgICAgICAgcGFyc2VkQ29uc3RyYWludFtgJHtjb25zdHJhaW50WzBdWzBdfWMke2NvbnN0cmFpbnRbMF1bMV19YF0gPSBjb25zdHJhaW50WzFdWzBdXG4gICAgICAgIH0pXG4gICAgICAgIHNldEdyaWQoYXBwbHlDb25zdHJhaW50VG9HcmlkKGcsIHBhcnNlZENvbnN0cmFpbnQpKVxuXG4gICAgICAgIC8vIFNldCB0aGUgdXJsXG4gICAgICAgIGNvbnN0IGhyZWYgPSBgJHtjb25zdHJhaW50VG9RdWVyeShwYXJzZWRDb25zdHJhaW50KX1gXG4gICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgUm91dGVyLnJlcGxhY2UoaHJlZiwgaHJlZiwge1xuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJvdXRlci5wdXNoKGhyZWYsIGhyZWYsIHtcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBnID0gbmV3IEFycmF5KEhFSUdIVCkuZmlsbChESVJFQ1RJT05TLk5PTkUpLm1hcCgoKSA9PiBuZXcgQXJyYXkoV0lEVEgpLmZpbGwoW0RJUkVDVElPTlMuTk9ORSwgJyddKSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHdpbmRvd0xvY2F0aW9uVG9Db25zdHJhaW50KClcblxuICAgICAgc2V0R3JpZChhcHBseUNvbnN0cmFpbnRUb0dyaWQoZywgcGFyYW1zKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBnZW5lcmF0ZU5ld1B1enpsZSh0cnVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvYmxlbXN9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JUSBBcnJvd3MgTG9naWMgUHV6emxlIEdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDE+SVEgQXJyb3dzIExvZ2ljIFB1enpsZSBHZW5lcmF0b3I8L2gxPlxuICAgICAgPGgyPk92ZXIgNTAwMCBtb3JlIGNoYWxsZW5nZXMgZm9yIHlvdTwvaDI+XG4gICAgICA8cD5BcyBhbHdheXMsIHRoZXJlIGlzIG9ubHkgb25lIHBvc3NpYmxlIHNvbHV0aW9uLiBZb3UgY2FuIGZpbmQgaXQgXG4gICAgICAgPExpbmsgaHJlZj17YC9zb2x1dGlvbnMvJHt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJz8gd2luZG93LmxvY2F0aW9uLnNlYXJjaCA6ICcnfWB9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnNvbHV0aW9uTGlua30+aGVyZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAge2dyaWQgPT09IG51bGxcbiAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubG9hZGluZ30gJHtzdHlsZXMuYm9hcmR9YH0+XG4gICAgICAgICAgICB7Wy4uLm5ldyBBcnJheShXSURUSCAqIEhFSUdIVCldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IDxkaXY+XG4gICAgICAgICAgICA8Qm9hcmRcbiAgICAgICAgICAgICAgZ3JpZD17Z3JpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5lcmF0ZU5ld1B1enpsZX0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2VuZXJhdGVOZXdQdXp6bGUoKX0gY2xhc3NOYW1lPXtzdHlsZXMuZ2VuZXJhdGVOZXdQdXp6bGVCdXR0b259PlxuICAgICAgICAgIEdlbmVyYXRlIHB1enpsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+VGhpcyB3ZWJzaXRlIHdhcyBtYWRlIGJ5IDxhIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9Kb3NlcGhDaG90YXJkL1wiPkpvc2VwaCBDaG90YXJkPC9hPjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRpc2NsYWltZXJ9PlxuICAgICAgICBJIGFtIG5vdCBhZmZpbGlhdGVkIHdpdGggU21hcnRHYW1lcyBpbiBhbnkgd2F5LlxuICAgICAgICBJIG1hZGUgdGhpcyB3ZWJzaXRlIHB1cmVseSBmb3IgZW50ZXRlcnRhaW5tZW50IHB1cnBvc2VzLlxuICAgICAgICBBbGwgY29kZSBmb3IgdGhpcyB3ZWJzaXRlIGlzIGF2YWlsYWJsZSBmb3IgZnJlZSwgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zZXBoQ2hvdGFyZC9JUUFycm93c1NvbHZlclwiPiBoZXJlPC9hPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})