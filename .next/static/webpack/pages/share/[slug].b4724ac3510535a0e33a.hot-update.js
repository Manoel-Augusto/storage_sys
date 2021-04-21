webpackHotUpdate_N_E("pages/share/[slug]",{

/***/ "./pages/share/[slug].js":
/*!*******************************!*\
  !*** ./pages/share/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/pages/share/[slug].js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Index() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var slug = router.query.slug;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({}),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var _yield$fetch$then, error, rest;\n\n    return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"/api/share-link?link=\".concat(encodeURIComponent(slug))).then(function (r) {\n              return r.json();\n            });\n\n          case 2:\n            _yield$fetch$then = _context.sent;\n            error = _yield$fetch$then.error;\n            rest = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_yield$fetch$then, [\"error\"]);\n\n            if (!error) {\n              setFile(rest);\n            }\n\n            console.log(slug, rest);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n\n  var handleDownload = /*#__PURE__*/function () {\n    var _ref2 = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var user_id, file_id, name, type, rt;\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              user_id = file.user_id, file_id = file.file_id, name = file.name, type = file.type;\n              _context2.next = 3;\n              return fetch('/api/share-download', {\n                method: 'POST',\n                body: JSON.stringify({\n                  user_id: user_id,\n                  path: file_id,\n                  type: type\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              }).then(function (r) {\n                return r.blob();\n              });\n\n            case 3:\n              rt = _context2.sent;\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleDownload() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row justify-content-center mt-5\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-4 text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: file.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-primary\",\n          onClick: function onClick() {\n            return handleDownload();\n          },\n          children: \"Baixar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Index, \"jdlO2Oa6qs2b6jBoxt1u1dd8bW4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hhcmUvW3NsdWddLmpzPzc5Y2UiXSwibmFtZXMiOlsiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0aGVuIiwiciIsImpzb24iLCJlcnJvciIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRG93bmxvYWQiLCJ1c2VyX2lkIiwiZmlsZV9pZCIsIm5hbWUiLCJ0eXBlIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwiaGVhZGVycyIsImJsb2IiLCJydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDRCLE1BRXBCQyxJQUZvQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFcEJELElBRm9COztBQUFBLGtCQUdKRSxzREFBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3JCQyxJQUhxQjtBQUFBLE1BR2ZDLE9BSGU7O0FBSzVCQyx5REFBUyxnUUFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDc0JDLEtBQUssZ0NBQXlCQyxrQkFBa0IsQ0FBQ1AsSUFBRCxDQUEzQyxFQUFMLENBQTBEUSxJQUExRCxDQUErRCxVQUFBQyxDQUFDO0FBQUEscUJBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFKO0FBQUEsYUFBaEUsQ0FEdEI7O0FBQUE7QUFBQTtBQUNGQyxpQkFERSxxQkFDRkEsS0FERTtBQUNRQyxnQkFEUjs7QUFFUCxnQkFBRyxDQUFDRCxLQUFKLEVBQVU7QUFDUFAscUJBQU8sQ0FBQ1EsSUFBRCxDQUFQO0FBQ0Y7O0FBQ0RDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWQsSUFBWixFQUFrQlksSUFBbEI7O0FBTE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQU1QLEVBTk8sQ0FBVDs7QUFRQSxNQUFNRyxjQUFjO0FBQUEsaVFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLHFCQURlLEdBQ2lCYixJQURqQixDQUNmYSxPQURlLEVBQ05DLE9BRE0sR0FDaUJkLElBRGpCLENBQ05jLE9BRE0sRUFDR0MsSUFESCxHQUNpQmYsSUFEakIsQ0FDR2UsSUFESCxFQUNTQyxJQURULEdBQ2lCaEIsSUFEakIsQ0FDU2dCLElBRFQ7QUFBQTtBQUFBLHFCQUVMYixLQUFLLENBQUMscUJBQUQsRUFBd0I7QUFDekNjLHNCQUFNLEVBQUMsTUFEa0M7QUFFekNDLG9CQUFJLEVBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNQLHlCQUFPLEVBQVBBLE9BQUQ7QUFBVVEsc0JBQUksRUFBRVAsT0FBaEI7QUFBeUJFLHNCQUFJLEVBQUpBO0FBQXpCLGlCQUFmLENBRm9DO0FBR3pDTSx1QkFBTyxFQUFDO0FBQUMsa0NBQWdCO0FBQWpCO0FBSGlDLGVBQXhCLENBQUwsQ0FJWmpCLElBSlksQ0FJUCxVQUFBQyxDQUFDO0FBQUEsdUJBQUlBLENBQUMsQ0FBQ2lCLElBQUYsRUFBSjtBQUFBLGVBSk0sQ0FGSzs7QUFBQTtBQUVoQkMsZ0JBRmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRaLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBZUEsc0JBQ0c7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNHO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0c7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0c7QUFBQSxvQkFBS1osSUFBSSxDQUFDZTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZUFFRztBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUgsY0FBYyxFQUFwQjtBQUFBLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFVRjs7R0F0Q3VCbEIsSztVQUNORSxxRDs7O0tBRE1GLEsiLCJmaWxlIjoiLi9wYWdlcy9zaGFyZS9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnlcbiAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKHt9KVxuXG4gICB1c2VFZmZlY3QoYXN5bmMoKT0+e1xuICAgICAgbGV0IHtlcnJvciwgLi4ucmVzdH0gPSBhd2FpdCBmZXRjaChgL2FwaS9zaGFyZS1saW5rP2xpbms9JHtlbmNvZGVVUklDb21wb25lbnQoc2x1Zyl9YCkudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgIHNldEZpbGUocmVzdClcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHNsdWcsIHJlc3QpXG4gICB9LFtdKVxuXG4gICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IGFzeW5jKCkgPT4ge1xuICAgICAgbGV0IHt1c2VyX2lkLCBmaWxlX2lkLCBuYW1lLCB0eXBlfSA9IGZpbGVcbiAgICAgIGxldCBydCA9IGF3YWl0IGZldGNoKCcvYXBpL3NoYXJlLWRvd25sb2FkJywge1xuICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe3VzZXJfaWQsIHBhdGg6IGZpbGVfaWQsIHR5cGV9KSxcbiAgICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS50aGVuKHIgPT4gci5ibG9iKCkpXG4gICAgICAvKmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJ0KVxuICAgICAgbGluay5ocmVmID0gdXJsXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB0eXBlPT09J2ZpbGUnID8gbmFtZSA6IGAke25hbWV9LnppcGApXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG4gICAgICBsaW5rLmNsaWNrKCkqL1xuICAgfVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgPGgxPntmaWxlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlRG93bmxvYWQoKX0+QmFpeGFyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/share/[slug].js\n");

/***/ })

})