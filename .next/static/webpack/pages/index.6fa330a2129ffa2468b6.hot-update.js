webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/FormLogin.js":
/*!****************************************!*\
  !*** ./components/common/FormLogin.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormLogin; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/FormLogin.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction FormLogin() {\n  _s();\n\n  var _useAuth = Object(_contexts__WEBPACK_IMPORTED_MODULE_4__[\"useAuth\"])(),\n      createSession = _useAuth.createSession;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      submitOk = _useState[0],\n      setSubmitOk = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      password = _useState3[0],\n      setPassword = _useState3[1],\n      elPassword = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var checkEmailExist = /*#__PURE__*/function () {\n    var _ref = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var exist;\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!e.target.value) {\n                _context.next = 6;\n                break;\n              }\n\n              _context.next = 3;\n              return fetch(\"/api/check-email?email=\".concat(e.target.value)).then(function (res) {\n                return res.json();\n              });\n\n            case 3:\n              exist = _context.sent;\n\n              if (exist) {\n                e.target.className = \"form-control\";\n                setSubmitOk(true);\n              } else {\n                e.target.className = \"form-control is-invalid\";\n                setSubmitOk(false);\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 6:\n              e.target.className = \"form-control\";\n              setSubmitOk(true);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function checkEmailExist(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var sendData = /*#__PURE__*/function () {\n    var _ref2 = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      var rt;\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              _context2.next = 3;\n              return fetch('/api/auth', {\n                method: 'POST',\n                body: JSON.stringify({\n                  email: email,\n                  password: password\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              }).then(function (res) {\n                return res.json();\n              });\n\n            case 3:\n              rt = _context2.sent;\n\n              if (!rt) {\n                _context2.next = 7;\n                break;\n              }\n\n              _context2.next = 7;\n              return createSession(rt);\n\n            case 7:\n              console.log(elPassword);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function sendData(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-lg-4 mb-5\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card-header\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card-body\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: sendData,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"email\",\n              className: \"form-label\",\n              children: \"E-mail\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"form-control\",\n              type: \"email\",\n              id: \"email\",\n              onBlur: function onBlur(e) {\n                return checkEmailExist(e);\n              },\n              onChange: function onChange(e) {\n                return setEmail(e.target.value);\n              },\n              value: email,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"invalid-feedback\",\n              children: \"Usu\\xE1rio n\\xE3o existe em nossa base. Cadastre-se.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"password\",\n              className: \"form-label\",\n              children: \"Senha\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"form-control\",\n              type: \"password\",\n              id: \"password\",\n              refs: elPassword,\n              onChange: function onChange(e) {\n                return setPassword(e.target.value);\n              },\n              value: password,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"invalid-feedback\",\n              children: \"Senha inv\\xE1lida.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"btn btn-primary \".concat(!submitOk ? 'disabled' : ''),\n            children: \"Acessar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 16\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 7\n  }, this);\n}\n\n_s(FormLogin, \"mNTCHUCNQR9JT2XKjIPHBeUiDVI=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_4__[\"useAuth\"]];\n});\n\n_c = FormLogin;\n\nvar _c;\n\n$RefreshReg$(_c, \"FormLogin\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vRm9ybUxvZ2luLmpzPzFlMGQiXSwibmFtZXMiOlsiRm9ybUxvZ2luIiwidXNlQXV0aCIsImNyZWF0ZVNlc3Npb24iLCJ1c2VTdGF0ZSIsInN1Ym1pdE9rIiwic2V0U3VibWl0T2siLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVsUGFzc3dvcmQiLCJ1c2VSZWYiLCJjaGVja0VtYWlsRXhpc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXhpc3QiLCJjbGFzc05hbWUiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBQUEsaUJBQ05DLHlEQUFPLEVBREQ7QUFBQSxNQUN4QkMsYUFEd0IsWUFDeEJBLGFBRHdCOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRXpCQyxRQUZ5QjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFBQSxtQkFHUEYsc0RBQVEsQ0FBQyxFQUFELENBSEQ7QUFBQSxNQUd6QkcsS0FIeUI7QUFBQSxNQUduQkMsUUFIbUI7O0FBQUEsbUJBSURKLHNEQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJekJLLFFBSnlCO0FBQUEsTUFJaEJDLFdBSmdCO0FBQUEsTUFJYUMsVUFKYixHQUkwQkMsb0RBQU0sRUFKaEM7O0FBTWhDLE1BQU1DLGVBQWU7QUFBQSxnUUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbEJBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQURTO0FBQUE7QUFBQTtBQUFBOztB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QTtBQUFBLGtCQURILGVBZUc7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRztBQUFPLHFCQUFPLEVBQUMsVUFBZjtBQUEwQix1QkFBUyxFQUFDLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBRUc7QUFBTyx1QkFBUyxFQUFDLGNBQWpCO0FBQ0csa0JBQUksRUFBQyxVQURSO0FBRUcsZ0JBQUUsRUFBQyxVQUZOO0FBR0csa0JBQUksRUFBRUksVUFIVDtBQUlHLHNCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSx1QkFBT0osV0FBVyxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLGVBSmI7QUFLRyxtQkFBSyxFQUFFUCxRQUxWO0FBTUcsc0JBQVE7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZILGVBVUc7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmSCxlQTZCRztBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyw0QkFBcUIsQ0FBQ0osUUFBRCxHQUFZLFVBQVosR0FBeUIsRUFBOUMsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0JIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUEwQ0Y7O0dBN0V1QkosUztVQUNLQyxpRDs7O0tBRExELFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9Gb3JtTG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2NvbnRleHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUxvZ2luKCl7XG4gICBjb25zdCB7IGNyZWF0ZVNlc3Npb24gfSA9IHVzZUF1dGgoKVxuICAgY29uc3QgW3N1Ym1pdE9rLHNldFN1Ym1pdE9rXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKSwgZWxQYXNzd29yZCA9IHVzZVJlZigpXG5cbiAgIGNvbnN0IGNoZWNrRW1haWxFeGlzdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBpZihlLnRhcmdldC52YWx1ZSl7XG4gICAgICAgICBsZXQgZXhpc3QgPSBhd2FpdCBmZXRjaChgL2FwaS9jaGVjay1lbWFpbD9lbWFpbD0ke2UudGFyZ2V0LnZhbHVlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICBpZihleGlzdCl7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBzZXRTdWJtaXRPayh0cnVlKVxuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBpcy1pbnZhbGlkXCJcbiAgICAgICAgICAgIHNldFN1Ym1pdE9rKGZhbHNlKVxuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBlLnRhcmdldC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiXG4gICAgICBzZXRTdWJtaXRPayh0cnVlKVxuICAgfVxuXG4gICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jKGUpPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBydCA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgnLCB7XG4gICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7ZW1haWwscGFzc3dvcmR9KSxcbiAgICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgaWYocnQpe1xuICAgICAgICAgYXdhaXQgY3JlYXRlU2Vzc2lvbihydClcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGVsUGFzc3dvcmQpXG4gICB9XG5cbiAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbWItNVwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmREYXRhfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FLW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBjaGVja0VtYWlsRXhpc3QoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBVc3XDoXJpbyBuw6NvIGV4aXN0ZSBlbSBub3NzYSBiYXNlLiBDYWRhc3RyZS1zZS5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZzPXtlbFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VuaGEgaW52w6FsaWRhLlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSAkeyFzdWJtaXRPayA/ICdkaXNhYmxlZCcgOiAnJ31gfT5BY2Vzc2FyPC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/FormLogin.js\n");

/***/ })

})