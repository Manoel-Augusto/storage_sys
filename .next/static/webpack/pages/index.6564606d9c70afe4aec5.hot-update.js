webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ModalShare.js":
/*!*****************************************!*\
  !*** ./components/common/ModalShare.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modalhare; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/ModalShare.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Modalhare(_ref) {\n  _s();\n\n  var refModal = _ref.refModal,\n      handleModal = _ref.handleModal;\n\n  var _useData = Object(_contexts__WEBPACK_IMPORTED_MODULE_5__[\"useData\"])(),\n      dataShare = _useData.dataShare;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      link = _useState2[0],\n      setLink = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    return function () {\n      return $(refModal.current).modal('hide');\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (dataShare) {\n      var shared_link = dataShare.shared_link;\n      if (shared_link) setActive(true);\n      setLink(\"\".concat(location.origin, \"/share/\").concat(encodeURIComponent(shared_link)));\n    }\n  }, [dataShare]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var id, name, type, _yield$fetch$then, error, rest;\n\n    return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!dataShare) {\n              _context.next = 8;\n              break;\n            }\n\n            id = dataShare.id, name = dataShare.name, type = dataShare[\".tag\"];\n            _context.next = 4;\n            return fetch('/api/share-link', {\n              method: 'POST',\n              body: JSON.stringify({\n                id: id,\n                name: name,\n                type: type,\n                active: active\n              }),\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 4:\n            _yield$fetch$then = _context.sent;\n            error = _yield$fetch$then.error;\n            rest = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_yield$fetch$then, [\"error\"]);\n\n            if (!error) {\n              setLink(\"\".concat(location.origin, \"/share/\").concat(encodeURIComponent(rest.link)));\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [active]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"modal fade\",\n    ref: refModal,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal-dialog modal-md modal-dialog-centered\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"modal-title\",\n            children: \"Criar link de compartinhamento\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn-close\",\n            onClick: function onClick() {\n              return handleModal();\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-body\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"form-check form-switch\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                className: \"form-check-input\",\n                type: \"checkbox\",\n                id: \"switchActive\",\n                onChange: function onChange(e) {\n                  return setActive(e.target.checked);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 25\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                className: \"form-check-label\",\n                htmlFor: \"switchActive\",\n                children: \"Ativar compartilhamento\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 22\n            }, this), active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"my-4\",\n              children: [\"Link: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: link,\n                target: \"_blank\",\n                children: link.replace(/(.{35})..+/, \"$1...\")\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 31\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Modalhare, \"8TDKb2W3+FC1sDEczUbCfILrxyY=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_5__[\"useData\"]];\n});\n\n_c = Modalhare;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modalhare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxTaGFyZS5qcz84ZTM4Il0sIm5hbWVzIjpbIk1vZGFsaGFyZSIsInJlZk1vZGFsIiwiaGFuZGxlTW9kYWwiLCJ1c2VEYXRhIiwiZGF0YVNoYXJlIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJsaW5rIiwic2V0TGluayIsInVzZUVmZmVjdCIsIiQiLCJjdXJyZW50IiwibW9kYWwiLCJzaGFyZWRfbGluayIsImxvY2F0aW9uIiwib3JpZ2luIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaWQiLCJuYW1lIiwidHlwZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJlcnJvciIsInJlc3QiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUEyQztBQUFBOztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxXQUFhLFFBQWJBLFdBQWE7O0FBQUEsaUJBQ2pDQyx5REFBTyxFQUQwQjtBQUFBLE1BQy9DQyxTQUQrQyxZQUMvQ0EsU0FEK0M7O0FBQUEsa0JBRTVCQyxzREFBUSxDQUFDLEtBQUQsQ0FGb0I7QUFBQSxNQUVoREMsTUFGZ0Q7QUFBQSxNQUV6Q0MsU0FGeUM7O0FBQUEsbUJBR2hDRixzREFBUSxDQUFDLEVBQUQsQ0FId0I7QUFBQSxNQUdoREcsSUFIZ0Q7QUFBQSxNQUczQ0MsT0FIMkM7O0FBS3ZEQyx5REFBUyxDQUFDLFlBQUk7QUFDWCxXQUFPO0FBQUEsYUFBTUMsQ0FBQyxDQUFDVixRQUFRLENBQUNXLE9BQVYsQ0FBRCxDQUFvQkMsS0FBcEIsQ0FBMEIsTUFBMUIsQ0FBTjtBQUFBLEtBQVA7QUFDRixHQUZRLEVBRVAsRUFGTyxDQUFUO0FB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QUNTO0FBQUcsb0JBQUksRUFBRUUsSUFBVDtBQUFlLHNCQUFNLEVBQUMsUUFBdEI7QUFBQSwwQkFBZ0NBLElBQUksQ0FBQzJCLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLE9BQTNCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQTRCRjs7R0E1RHVCbkMsUztVQUNDRyxpRDs7O0tBRERILFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFNoYXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsaGFyZSh7cmVmTW9kYWwsIGhhbmRsZU1vZGFsfSl7XG4gICBjb25zdCB7IGRhdGFTaGFyZSB9ID0gdXNlRGF0YSgpXG4gICBjb25zdCBbYWN0aXZlLHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgIGNvbnN0IFtsaW5rLHNldExpbmtdID0gdXNlU3RhdGUoJycpXG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgcmV0dXJuICgpID0+ICQocmVmTW9kYWwuY3VycmVudCkubW9kYWwoJ2hpZGUnKVxuICAgfSxbXSlcblxuICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBpZihkYXRhU2hhcmUpe1xuICAgICAgICAgbGV0IHsgc2hhcmVkX2xpbmsgfSA9IGRhdGFTaGFyZVxuICAgICAgICAgaWYoc2hhcmVkX2xpbmspIHNldEFjdGl2ZSh0cnVlKVxuICAgICAgICAgc2V0TGluayhgJHtsb2NhdGlvbi5vcmlnaW59L3NoYXJlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlZF9saW5rKX1gKVxuICAgICAgfVxuICAgfSxbZGF0YVNoYXJlXSlcblxuXG4gICB1c2VFZmZlY3QoYXN5bmMoKT0+e1xuICAgICAgaWYoZGF0YVNoYXJlKXtcbiAgICAgICAgIGxldCB7aWQsIG5hbWUsIFtcIi50YWdcIl06dHlwZX0gPSBkYXRhU2hhcmVcbiAgICAgICAgIGxldCB7ZXJyb3IsIC4uLnJlc3R9ID0gYXdhaXQgZmV0Y2goJy9hcGkvc2hhcmUtbGluaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtpZCwgbmFtZSwgdHlwZSwgYWN0aXZlfSksXG4gICAgICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgIGlmKCFlcnJvcil7XG4gICAgICAgICAgICBzZXRMaW5rKGAke2xvY2F0aW9uLm9yaWdpbn0vc2hhcmUvJHtlbmNvZGVVUklDb21wb25lbnQocmVzdC5saW5rKX1gKVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfSxbYWN0aXZlXSlcblxuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIHJlZj17cmVmTW9kYWx9PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbWQgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5DcmlhciBsaW5rIGRlIGNvbXBhcnRpbmhhbWVudG88L2g1PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbCgpfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2hBY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3RpdmUoZS50YXJnZXQuY2hlY2tlZCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cInN3aXRjaEFjdGl2ZVwiPkF0aXZhciBjb21wYXJ0aWxoYW1lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rOiA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57bGluay5yZXBsYWNlKC8oLnszNX0pLi4rLywgXCIkMS4uLlwiKX08L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/ModalShare.js\n");

/***/ })

})