webpackHotUpdate_N_E("pages/[...slug]",{

/***/ "./components/common/TableShared.js":
/*!******************************************!*\
  !*** ./components/common/TableShared.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TableShared; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n/* harmony import */ var _TRShared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TRShared */ \"./components/common/TRShared.js\");\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/TableShared.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction TableShared() {\n  _s();\n\n  var _this = this;\n\n  var _useData = Object(_contexts__WEBPACK_IMPORTED_MODULE_4__[\"useData\"])(),\n      listRecords = _useData.listRecords;\n\n  if (!listRecords || !listRecords.length) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"alert alert-warning\",\n      role: \"alert\",\n      children: \"Esta pasta est\\xE1 vazia\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }, this);\n  }\n\n  var mountFolder = /*#__PURE__*/function () {\n    var _ref = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"++++++++teste\", data);\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function mountFolder(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n          className: \"table table-hover\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Nome\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Modificado\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 22\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 22\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 16\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n            children: listRecords.map(function (item, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TRShared__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: item,\n                mountFolder: mountFolder\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 16\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 10\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(TableShared, \"/WBR3LEDGOxXJ9J59MXM3zjOesc=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_4__[\"useData\"]];\n});\n\n_c = TableShared;\n\nvar _c;\n\n$RefreshReg$(_c, \"TableShared\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVGFibGVTaGFyZWQuanM/YTFkNCJdLCJuYW1lcyI6WyJUYWJsZVNoYXJlZCIsInVzZURhdGEiLCJsaXN0UmVjb3JkcyIsImxlbmd0aCIsIm1vdW50Rm9sZGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsaUJBRzlCQyx5REFBTyxFQUh1QjtBQUFBLE1BRS9CQyxXQUYrQixZQUUvQkEsV0FGK0I7O0FBS2xDLE1BQUcsQ0FBQ0EsV0FBRCxJQUFnQixDQUFDQSxXQUFXLENBQUNDLE1BQWhDLEVBQXVDO0FBQ3BDLHdCQUNHO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQXFDLFVBQUksRUFBQyxPQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBS0Y7O0FBRUQsTUFBTUMsV0FBVztBQUFBLGdRQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixJQUE3Qjs7QUFEaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEQsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFJQSxzQkFBTztBQUFBLDJCQUNKO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNHO0FBQU8sbUJBQVMsRUFBQyxtQkFBakI7QUFBQSxrQ0FDRztBQUFBLG1DQUNHO0FBQUEsc0NBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREgsZUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSCxlQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESCxlQVFHO0FBQUEsc0JBQ0lGLFdBQVcsQ0FBQ00sR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU1DLEtBQU47QUFBQSxrQ0FDakIscUVBQUMsaURBQUQ7QUFBc0Isb0JBQUksRUFBRUQsSUFBNUI7QUFBa0MsMkJBQVcsRUFBRUw7QUFBL0MsaUJBQWVNLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEaUI7QUFBQSxhQUFoQjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESSxtQkFBUDtBQW9CRjs7R0FyQ3VCVixXO1VBR2pCQyxpRDs7O0tBSGlCRCxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vVGFibGVTaGFyZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgVFJTaGFyZWQgZnJvbSAnLi9UUlNoYXJlZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVTaGFyZWQoKXtcbiAgIGNvbnN0IHtcbiAgICAgIGxpc3RSZWNvcmRzLFxuICAgfSA9IHVzZURhdGEoKVxuXG4gICBpZighbGlzdFJlY29yZHMgfHwgIWxpc3RSZWNvcmRzLmxlbmd0aCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgIEVzdGEgcGFzdGEgZXN0w6EgdmF6aWFcbiAgICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgfVxuXG4gICBjb25zdCBtb3VudEZvbGRlciA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIisrKysrKysrdGVzdGVcIiwgZGF0YSlcbiAgIH1cblxuICAgcmV0dXJuKDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgPHRoPk5vbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGlmaWNhZG88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHtsaXN0UmVjb3Jkcy5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgICAgICAgICAgICAgICAgPFRSU2hhcmVkIGtleT17aW5kZXh9IGRhdGE9e2l0ZW19IG1vdW50Rm9sZGVyPXttb3VudEZvbGRlcn0vPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgIDwvPik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/TableShared.js\n");

/***/ })

})