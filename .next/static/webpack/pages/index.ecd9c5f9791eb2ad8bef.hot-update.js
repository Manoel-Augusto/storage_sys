webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts */ \"./contexts/index.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app */ \"./components/app/index.js\");\n/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login */ \"./components/login/index.js\");\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useAuth = Object(_contexts__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"])(),\n      session = _useAuth.session,\n      loading = _useAuth.loading;\n\n  var _useData = Object(_contexts__WEBPACK_IMPORTED_MODULE_3__[\"useData\"])(),\n      getData = _useData.getData,\n      setShared = _useData.setShared;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (session) {\n      setShared(false);\n      getData();\n    }\n  }, [loading, session, router]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [!loading && !session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 32\n    }, this), !loading && session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 31\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"StW1d+Qq+3dMrhzgoWXXjUCiT1I=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], _contexts__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"], _contexts__WEBPACK_IMPORTED_MODULE_3__[\"useData\"]];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZURhdGEiLCJnZXREYXRhIiwic2V0U2hhcmVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWdCO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDRCLGlCQUVBQyx5REFBTyxFQUZQO0FBQUEsTUFFcEJDLE9BRm9CLFlBRXBCQSxPQUZvQjtBQUFBLE1BRVhDLE9BRlcsWUFFWEEsT0FGVzs7QUFBQSxpQkFHR0MseURBQU8sRUFIVjtBQUFBLE1BR3BCQyxPQUhvQixZQUdwQkEsT0FIb0I7QUFBQSxNQUdYQyxTQUhXLFlBR1hBLFNBSFc7O0FBSzVCQyx5REFBUyxDQUFDLFlBQUk7QUFDWCxRQUFHTCxPQUFILEVBQVc7QUFDUkksZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRCxhQUFPO0FBQ1Q7QUFDSCxHQUxRLEVBS1AsQ0FBQ0YsT0FBRCxFQUFVRCxPQUFWLEVBQW1CSCxNQUFuQixDQUxPLENBQVQ7QUFPQSxzQkFBUTtBQUFBLGVBQ0osQ0FBQ0ksT0FBRCxJQUFZLENBQUNELE9BQWIsaUJBQXdCLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEcEIsRUFFSixDQUFDQyxPQUFELElBQVlELE9BQVosaUJBQXVCLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGbkI7QUFBQSxrQkFBUjtBQUlGOztHQWhCdUJKLEs7VUFDTkUscUQsRUFDYUMsaUQsRUFDR0csaUQ7OztLQUhWTixLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZURhdGEsIHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0cyc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKXtcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICBjb25zdCB7IHNlc3Npb24sIGxvYWRpbmd9ID0gdXNlQXV0aCgpXG4gICBjb25zdCB7IGdldERhdGEsIHNldFNoYXJlZCB9ID0gdXNlRGF0YSgpXG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgaWYoc2Vzc2lvbil7XG4gICAgICAgICBzZXRTaGFyZWQoZmFsc2UpXG4gICAgICAgICBnZXREYXRhKClcbiAgICAgIH1cbiAgIH0sW2xvYWRpbmcsIHNlc3Npb24sIHJvdXRlcl0pXG5cbiAgIHJldHVybiAoPD5cbiAgICAgIHshbG9hZGluZyAmJiAhc2Vzc2lvbiAmJiA8TG9naW4vPiB9XG4gICAgICB7IWxvYWRpbmcgJiYgc2Vzc2lvbiAmJiA8QXBwLz4gfVxuICAgPC8+KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})