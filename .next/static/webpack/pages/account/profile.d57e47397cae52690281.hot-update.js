webpackHotUpdate_N_E("pages/account/profile",{

/***/ "./components/common/FormLogin.js":
/*!****************************************!*\
  !*** ./components/common/FormLogin.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormLogin; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/FormLogin.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction FormLogin() {\n  _s();\n\n  var _useAuth = Object(_contexts__WEBPACK_IMPORTED_MODULE_4__[\"useAuth\"])(),\n      createSession = _useAuth.createSession;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      submitOk = _useState[0],\n      setSubmitOk = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      password = _useState3[0],\n      setPassword = _useState3[1],\n      elPassword = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var checkEmailExist = /*#__PURE__*/function () {\n    var _ref = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var exist;\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!e.target.value) {\n                _context.next = 6;\n                break;\n              }\n\n              _context.next = 3;\n              return fetch(\"/api/check-email?email=\".concat(e.target.value)).then(function (res) {\n                return res.json();\n              });\n\n            case 3:\n              exist = _context.sent;\n\n              if (exist) {\n                e.target.className = \"form-control\";\n                setSubmitOk(true);\n              } else {\n                e.target.className = \"form-control is-invalid\";\n                setSubmitOk(false);\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 6:\n              e.target.className = \"form-control\";\n              setSubmitOk(true);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function checkEmailExist(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var sendData = /*#__PURE__*/function () {\n    var _ref2 = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      var rt;\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              _context2.next = 3;\n              return fetch('/api/auth', {\n                method: 'POST',\n                body: JSON.stringify({\n                  email: email,\n                  password: password\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              }).then(function (res) {\n                return res.json();\n              });\n\n            case 3:\n              rt = _context2.sent;\n\n              /*if(rt){\n                 await createSession(rt)\n              }*/\n              console.log(elPassword, rt);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function sendData(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-lg-4 mb-5\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card-header\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card-body\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: sendData,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"email\",\n              className: \"form-label\",\n              children: \"E-mail\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"form-control\",\n              type: \"email\",\n              id: \"email\",\n              onBlur: function onBlur(e) {\n                return checkEmailExist(e);\n              },\n              onChange: function onChange(e) {\n                return setEmail(e.target.value);\n              },\n              value: email,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"invalid-feedback\",\n              children: \"Usu\\xE1rio n\\xE3o existe em nossa base. Cadastre-se.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"password\",\n              className: \"form-label\",\n              children: \"Senha\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"form-control\",\n              type: \"password\",\n              id: \"password\",\n              ref: elPassword,\n              onChange: function onChange(e) {\n                return setPassword(e.target.value);\n              },\n              value: password,\n              required: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"invalid-feedback\",\n              children: \"Senha inv\\xE1lida.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            className: \"btn btn-primary \".concat(!submitOk ? 'disabled' : ''),\n            children: \"Acessar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 16\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 7\n  }, this);\n}\n\n_s(FormLogin, \"mNTCHUCNQR9JT2XKjIPHBeUiDVI=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_4__[\"useAuth\"]];\n});\n\n_c = FormLogin;\n\nvar _c;\n\n$RefreshReg$(_c, \"FormLogin\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vRm9ybUxvZ2luLmpzPzFlMGQiXSwibmFtZXMiOlsiRm9ybUxvZ2luIiwidXNlQXV0aCIsImNyZWF0ZVNlc3Npb24iLCJ1c2VTdGF0ZSIsInN1Ym1pdE9rIiwic2V0U3VibWl0T2siLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVsUGFzc3dvcmQiLCJ1c2VSZWYiLCJjaGVja0VtYWlsRXhpc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXhpc3QiLCJjbGFzc05hbWUiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBQUEsaUJBQ05DLHlEQUFPLEVBREQ7QUFBQSxNQUN4QkMsYUFEd0IsWUFDeEJBLGFBRHdCOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRXpCQyxRQUZ5QjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFBQSxtQkFHUEYsc0RBQVEsQ0FBQyxFQUFELENBSEQ7QUFBQSxNQUd6QkcsS0FIeUI7QUFBQSxNQUduQkMsUUFIbUI7O0FBQUEsbUJBSURKLHNEQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJekJLLFFBSnlCO0FBQUEsTUFJaEJDLFdBSmdCO0FBQUEsTUFJYUMsVUFKYixHQUkwQkMsb0RBQU0sRUFKaEM7O0FBTWhDLE1BQU1DLGVBQWU7QUFBQSxnUUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbEJBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQURTO0FBQUE7QUFBQTtBQUFBOztB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QUFBTyxxQkFBTyxFQUFDLFVBQWY7QUFBMEIsdUJBQVMsRUFBQyxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxlQUVHO0FBQU8sdUJBQVMsRUFBQyxjQUFqQjtBQUNHLGtCQUFJLEVBQUMsVUFEUjtBQUVHLGdCQUFFLEVBQUMsVUFGTjtBQUdHLGlCQUFHLEVBQUVJLFVBSFI7QUFJRyxzQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsdUJBQU9KLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxlQUpiO0FBS0csbUJBQUssRUFBRVAsUUFMVjtBQU1HLHNCQUFRO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSCxlQVVHO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkgsZUE2Qkc7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsNEJBQXFCLENBQUNKLFFBQUQsR0FBWSxVQUFaLEdBQXlCLEVBQTlDLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBMENGOztHQTdFdUJKLFM7VUFDS0MsaUQ7OztLQURMRCxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vRm9ybUxvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Mb2dpbigpe1xuICAgY29uc3QgeyBjcmVhdGVTZXNzaW9uIH0gPSB1c2VBdXRoKClcbiAgIGNvbnN0IFtzdWJtaXRPayxzZXRTdWJtaXRPa10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyksIGVsUGFzc3dvcmQgPSB1c2VSZWYoKVxuXG4gICBjb25zdCBjaGVja0VtYWlsRXhpc3QgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xuICAgICAgICAgbGV0IGV4aXN0ID0gYXdhaXQgZmV0Y2goYC9hcGkvY2hlY2stZW1haWw/ZW1haWw9JHtlLnRhcmdldC52YWx1ZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgaWYoZXhpc3Qpe1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgc2V0U3VibWl0T2sodHJ1ZSlcbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgaXMtaW52YWxpZFwiXG4gICAgICAgICAgICBzZXRTdWJtaXRPayhmYWxzZSlcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIlxuICAgICAgc2V0U3VibWl0T2sodHJ1ZSlcbiAgIH1cblxuICAgY29uc3Qgc2VuZERhdGEgPSBhc3luYyhlKT0+e1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgcnQgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoJywge1xuICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe2VtYWlsLHBhc3N3b3JkfSksXG4gICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC8qaWYocnQpe1xuICAgICAgICAgYXdhaXQgY3JlYXRlU2Vzc2lvbihydClcbiAgICAgIH0qL1xuICAgICAgY29uc29sZS5sb2coZWxQYXNzd29yZCwgcnQpXG4gICB9XG5cbiAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbWItNVwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmREYXRhfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FLW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBjaGVja0VtYWlsRXhpc3QoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBVc3XDoXJpbyBuw6NvIGV4aXN0ZSBlbSBub3NzYSBiYXNlLiBDYWRhc3RyZS1zZS5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5oYSBpbnbDoWxpZGEuXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5ICR7IXN1Ym1pdE9rID8gJ2Rpc2FibGVkJyA6ICcnfWB9PkFjZXNzYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/FormLogin.js\n");

/***/ })

})