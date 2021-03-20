webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ModalCreateFolder.js":
/*!************************************************!*\
  !*** ./components/common/ModalCreateFolder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ModalCreateFolder; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/ModalCreateFolder.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ModalCreateFolder(_ref) {\n  _s();\n\n  var refModal = _ref.refModal,\n      handleModal = _ref.handleModal;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useData = Object(_contexts__WEBPACK_IMPORTED_MODULE_6__[\"useData\"])(),\n      getData = _useData.getData;\n\n  var refSubmit = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var refName = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      errorMsg = _useState2[0],\n      setErrorMsg = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    refModal.current.addEventListener('hidden.bs.modal', function (e) {\n      setName('');\n    });\n    return function () {\n      return $(refModal.current).modal('hide');\n    };\n  }, []);\n\n  var createFolder = /*#__PURE__*/function () {\n    var _ref2 = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var linkPath, folder, _yield$fetch$then, error, rest;\n\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              linkPath = router.asPath.split('/');\n              linkPath = linkPath.filter(function (item) {\n                return item.length;\n              });\n              folder = \"\".concat(linkPath.length ? \"/\".concat(linkPath.join('/')) : '', \"/\").concat(name);\n              _context.next = 6;\n              return fetch('/api/folder', {\n                method: 'POST',\n                body: JSON.stringify({\n                  folder: folder\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              }).then(function (res) {\n                return res.json();\n              });\n\n            case 6:\n              _yield$fetch$then = _context.sent;\n              error = _yield$fetch$then.error;\n              rest = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_yield$fetch$then, [\"error\"]);\n\n              if (!error) {\n                refName.current.className = \"form-control\";\n                getData();\n                $(refModal.current).modal('hide');\n              } else {\n                refName.current.className = \"form-control is-invalid\";\n                setErrorMsg(\"Pasta já existe\");\n              }\n\n              console.log(rest, error);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createFolder(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"modal fade\",\n    ref: refModal,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal-dialog modal-md modal-dialog-centered\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"modal-title\",\n            children: \"Criar pasta\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn-close\",\n            onClick: function onClick() {\n              return handleModal();\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-body\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            onSubmit: createFolder,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"mb-3\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                htmlFor: \"name\",\n                className: \"form-label\",\n                children: \"Nome\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 25\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                className: \"form-control\",\n                onChange: function onChange(e) {\n                  return setName(e.target.value);\n                },\n                onBlur: function onBlur(e) {\n                  return setName(e.target.value.trim());\n                },\n                ref: refName,\n                value: name,\n                id: \"name\",\n                placeholder: \"Nome da pasta\",\n                required: true\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 25\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"invalid-feedback\",\n                children: errorMsg\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              ref: refSubmit,\n              type: \"submit\",\n              hidden: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-footer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn btn-secondary\",\n            onClick: function onClick() {\n              return handleModal();\n            },\n            children: \"Cancelar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn btn-primary\",\n            onClick: function onClick() {\n              return refSubmit.current.click();\n            },\n            children: \"Criar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 7\n  }, this);\n}\n\n_s(ModalCreateFolder, \"e2d3jVVNPwzpaDuxfPN7T/tAU3E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"], _contexts__WEBPACK_IMPORTED_MODULE_6__[\"useData\"]];\n});\n\n_c = ModalCreateFolder;\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalCreateFolder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxDcmVhdGVGb2xkZXIuanM/NTYwMyJdLCJuYW1lcyI6WyJNb2RhbENyZWF0ZUZvbGRlciIsInJlZk1vZGFsIiwiaGFuZGxlTW9kYWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VEYXRhIiwiZ2V0RGF0YSIsInJlZlN1Ym1pdCIsInVzZVJlZiIsInJlZk5hbWUiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIiQiLCJtb2RhbCIsImNyZWF0ZUZvbGRlciIsInByZXZlbnREZWZhdWx0IiwibGlua1BhdGgiLCJhc1BhdGgiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJsZW5ndGgiLCJmb2xkZXIiLCJqb2luIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImVycm9yIiwicmVzdCIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsT0FBbUQ7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsV0FBYSxRQUFiQSxXQUFhO0FBQy9ELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRCtELGlCQUUzQ0MseURBQU8sRUFGb0M7QUFBQSxNQUV2REMsT0FGdUQsWUFFdkRBLE9BRnVEOztBQUcvRCxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXRCOztBQUorRCxr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cUJBQU1MLFdBQVcsRUFBakI7QUFBQSxhQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESCxlQUVHO0FBQVEscUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsbUJBQU8sRUFBRTtBQUFBLHFCQUFNSyxTQUFTLENBQUNTLE9BQVYsQ0FBa0JnQyxLQUFsQixFQUFOO0FBQUEsYUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBcUNGOztHQXpFdUJoRCxpQjtVQUNOSSxxRCxFQUNLQyxpRDs7O0tBRkNMLGlCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vTW9kYWxDcmVhdGVGb2xkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbENyZWF0ZUZvbGRlcih7cmVmTW9kYWwsIGhhbmRsZU1vZGFsfSl7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHsgZ2V0RGF0YSB9ID0gdXNlRGF0YSgpXG4gICBjb25zdCByZWZTdWJtaXQgPSB1c2VSZWYobnVsbClcbiAgIGNvbnN0IHJlZk5hbWUgPSB1c2VSZWYobnVsbClcbiAgIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICBjb25zdCBbZXJyb3JNc2csc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoJycpXG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgcmVmTW9kYWwuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICBzZXROYW1lKCcnKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoKSA9PiAkKHJlZk1vZGFsLmN1cnJlbnQpLm1vZGFsKCdoaWRlJylcbiAgIH0sW10pXG5cbiAgIGNvbnN0IGNyZWF0ZUZvbGRlciA9IGFzeW5jKGUpPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBsaW5rUGF0aCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKTtcbiAgICAgIGxpbmtQYXRoID0gbGlua1BhdGguZmlsdGVyKGl0ZW0gPT4gaXRlbS5sZW5ndGgpXG4gICAgICBsZXQgZm9sZGVyID0gYCR7bGlua1BhdGgubGVuZ3RoID8gYC8ke2xpbmtQYXRoLmpvaW4oJy8nKX1gIDogJyd9LyR7bmFtZX1gXG4gICAgICBsZXQge2Vycm9yLCAuLi5yZXN0fSA9IGF3YWl0IGZldGNoKCcvYXBpL2ZvbGRlcicsIHtcbiAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtmb2xkZXJ9KSxcbiAgICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgIHJlZk5hbWUuY3VycmVudC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiXG4gICAgICAgICBnZXREYXRhKClcbiAgICAgICAgICQocmVmTW9kYWwuY3VycmVudCkubW9kYWwoJ2hpZGUnKVxuICAgICAgfWVsc2V7XG4gICAgICAgICByZWZOYW1lLmN1cnJlbnQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgaXMtaW52YWxpZFwiXG4gICAgICAgICBzZXRFcnJvck1zZyhcIlBhc3RhIGrDoSBleGlzdGVcIilcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHJlc3QsIGVycm9yKVxuICAgfVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgcmVmPXtyZWZNb2RhbH0+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkNyaWFyIHBhc3RhPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWwoKX0+PC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZUZvbGRlcn0+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBwYXN0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTXNnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZlN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiIGhpZGRlbi8+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWwoKX0+Q2FuY2VsYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gcmVmU3VibWl0LmN1cnJlbnQuY2xpY2soKX0+Q3JpYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/ModalCreateFolder.js\n");

/***/ })

})