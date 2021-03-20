webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ModalCreateFolder.js":
/*!************************************************!*\
  !*** ./components/common/ModalCreateFolder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ModalCreateFolder; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/ModalCreateFolder.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction ModalCreateFolder(_ref) {\n  _s();\n\n  var refModal = _ref.refModal,\n      handleModal = _ref.handleModal;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useData = Object(_contexts__WEBPACK_IMPORTED_MODULE_6__[\"useData\"])(),\n      getData = _useData.getData;\n\n  var refSubmit = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    refModal.current.addEventListener('hidden.bs.modal', function (e) {\n      setName('');\n    });\n    return function () {\n      return $(refModal.current).modal('hide');\n    };\n  }, []);\n\n  var createFolder = /*#__PURE__*/function () {\n    var _ref2 = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var linkPath, folder, _yield$fetch$then, error, rest;\n\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              linkPath = router.asPath.split('/');\n              linkPath = linkPath.filter(function (item) {\n                return item.length;\n              });\n              folder = \"\".concat(linkPath.length ? \"/\".concat(linkPath.join('/')) : '', \"/\").concat(name);\n              _context.next = 6;\n              return fetch('/api/folder', {\n                method: 'POST',\n                body: JSON.stringify({\n                  folder: folder\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              }).then(function (res) {\n                return res.json();\n              });\n\n            case 6:\n              _yield$fetch$then = _context.sent;\n              error = _yield$fetch$then.error;\n              rest = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_yield$fetch$then, [\"error\"]);\n\n              if (!error) {\n                getData();\n                $(refModal.current).modal('hide');\n              }\n\n              console.log(rest);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createFolder(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"modal fade\",\n    ref: refModal,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal-dialog modal-md modal-dialog-centered\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"modal-title\",\n            children: \"Criar pasta\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn-close\",\n            onClick: function onClick() {\n              return handleModal();\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-body\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            onSubmit: createFolder,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"mb-3\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                htmlFor: \"name\",\n                className: \"form-label\",\n                children: \"Nome\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 25\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                className: \"form-control\",\n                onChange: function onChange(e) {\n                  return setName(e.target.value);\n                },\n                onBlur: function onBlur(e) {\n                  return setName(e.target.value.trim());\n                },\n                value: name,\n                id: \"name\",\n                placeholder: \"Nome da pasta\",\n                required: true\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 22\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              ref: refSubmit,\n              type: \"submit\",\n              hidden: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-footer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn btn-secondary\",\n            onClick: function onClick() {\n              return handleModal();\n            },\n            children: \"Cancelar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn btn-primary\",\n            onClick: function onClick() {\n              return refSubmit.current.click();\n            },\n            children: \"Criar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 7\n  }, this);\n}\n\n_s(ModalCreateFolder, \"d62ChmOZIAPhwZHftcqlEthOjEU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"], _contexts__WEBPACK_IMPORTED_MODULE_6__[\"useData\"]];\n});\n\n_c = ModalCreateFolder;\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalCreateFolder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxDcmVhdGVGb2xkZXIuanM/NTYwMyJdLCJuYW1lcyI6WyJNb2RhbENyZWF0ZUZvbGRlciIsInJlZk1vZGFsIiwiaGFuZGxlTW9kYWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VEYXRhIiwiZ2V0RGF0YSIsInJlZlN1Ym1pdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCIkIiwibW9kYWwiLCJjcmVhdGVGb2xkZXIiLCJwcmV2ZW50RGVmYXVsdCIsImxpbmtQYXRoIiwiYXNQYXRoIiwic3BsaXQiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwiZm9sZGVyIiwiam9pbiIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJlcnJvciIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULE9BQW1EO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLFdBQWEsUUFBYkEsV0FBYTtBQUMvRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQrRCxpQkFFM0NDLHlEQUFPLEVBRm9DO0FBQUEsTUFFdkRDLE9BRnVELFlBRXZEQSxPQUZ1RDs7QUFHL0QsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBSCtELGtCQUl4Q0Msc0RBQVEsQ0FBQyxFQUFELENBSmdDO0FBQUEsTUFJeERDLElBSndEO0FBQUEsTUFJbkRDLE9BSm1EOztBQU0vREMseURBQVMsQ0FBQyxZQUFJO0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbENyZWF0ZUZvbGRlcih7cmVmTW9kYWwsIGhhbmRsZU1vZGFsfSl7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHsgZ2V0RGF0YSB9ID0gdXNlRGF0YSgpXG4gICBjb25zdCByZWZTdWJtaXQgPSB1c2VSZWYobnVsbClcbiAgIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgcmVmTW9kYWwuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICBzZXROYW1lKCcnKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoKSA9PiAkKHJlZk1vZGFsLmN1cnJlbnQpLm1vZGFsKCdoaWRlJylcbiAgIH0sW10pXG5cbiAgIGNvbnN0IGNyZWF0ZUZvbGRlciA9IGFzeW5jKGUpPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBsaW5rUGF0aCA9IHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKTtcbiAgICAgIGxpbmtQYXRoID0gbGlua1BhdGguZmlsdGVyKGl0ZW0gPT4gaXRlbS5sZW5ndGgpXG4gICAgICBsZXQgZm9sZGVyID0gYCR7bGlua1BhdGgubGVuZ3RoID8gYC8ke2xpbmtQYXRoLmpvaW4oJy8nKX1gIDogJyd9LyR7bmFtZX1gXG4gICAgICBsZXQge2Vycm9yLCAuLi5yZXN0fSA9IGF3YWl0IGZldGNoKCcvYXBpL2ZvbGRlcicsIHtcbiAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtmb2xkZXJ9KSxcbiAgICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgIGdldERhdGEoKVxuICAgICAgICAgJChyZWZNb2RhbC5jdXJyZW50KS5tb2RhbCgnaGlkZScpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhyZXN0KVxuICAgfVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgcmVmPXtyZWZNb2RhbH0+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkNyaWFyIHBhc3RhPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWwoKX0+PC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZUZvbGRlcn0+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBwYXN0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVmU3VibWl0fSB0eXBlPVwic3VibWl0XCIgaGlkZGVuLz5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbCgpfT5DYW5jZWxhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiByZWZTdWJtaXQuY3VycmVudC5jbGljaygpfT5DcmlhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/ModalCreateFolder.js\n");

/***/ })

})