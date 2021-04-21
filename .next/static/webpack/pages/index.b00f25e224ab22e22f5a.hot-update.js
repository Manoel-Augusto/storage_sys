webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/ModalShare.js":
/*!*****************************************!*\
  !*** ./components/common/ModalShare.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modalhare; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts */ \"./contexts/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/components/common/ModalShare.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Modalhare(_ref) {\n  _s();\n\n  var refModal = _ref.refModal,\n      handleModal = _ref.handleModal;\n\n  var _useData = Object(_contexts__WEBPACK_IMPORTED_MODULE_5__[\"useData\"])(),\n      dataShare = _useData.dataShare;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      link = _useState2[0],\n      setLink = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    return function () {\n      return $(refModal.current).modal('hide');\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    console.log(dataShare);\n  }, [dataShare]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])( /*#__PURE__*/Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var id, name, type, _yield$fetch$then, error, rest;\n\n    return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!dataShare) {\n              _context.next = 8;\n              break;\n            }\n\n            id = dataShare.id, name = dataShare.name, type = dataShare[\".tag\"];\n            _context.next = 4;\n            return fetch('/api/share-link', {\n              method: 'POST',\n              body: JSON.stringify({\n                id: id,\n                name: name,\n                type: type,\n                active: active\n              }),\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 4:\n            _yield$fetch$then = _context.sent;\n            error = _yield$fetch$then.error;\n            rest = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_yield$fetch$then, [\"error\"]);\n\n            if (!error) {\n              setLink(\"\".concat(location.origin, \"/share/\").concat(encodeURIComponent(rest.link)));\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [active]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"modal fade\",\n    ref: refModal,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal-dialog modal-md modal-dialog-centered\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"modal-title\",\n            children: \"Criar link de compartinhamento\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn-close\",\n            onClick: function onClick() {\n              return handleModal();\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 16\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-body\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mb-3\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"form-check form-switch\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                className: \"form-check-input\",\n                type: \"checkbox\",\n                id: \"switchActive\",\n                onChange: function onChange(e) {\n                  return setActive(e.target.checked);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 25\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                className: \"form-check-label\",\n                htmlFor: \"switchActive\",\n                children: \"Ativar compartilhamento\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 22\n            }, this), active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"my-4\",\n              children: [\"Link: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: link,\n                target: \"_blank\",\n                children: link.replace(/(.{35})..+/, \"$1...\")\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 31\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 19\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Modalhare, \"8TDKb2W3+FC1sDEczUbCfILrxyY=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_5__[\"useData\"]];\n});\n\n_c = Modalhare;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modalhare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTW9kYWxTaGFyZS5qcz84ZTM4Il0sIm5hbWVzIjpbIk1vZGFsaGFyZSIsInJlZk1vZGFsIiwiaGFuZGxlTW9kYWwiLCJ1c2VEYXRhIiwiZGF0YVNoYXJlIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJsaW5rIiwic2V0TGluayIsInVzZUVmZmVjdCIsIiQiLCJjdXJyZW50IiwibW9kYWwiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJuYW1lIiwidHlwZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJlcnJvciIsInJlc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImVuY29kZVVSSUNvbXBvbmVudCIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLFdBQWEsUUFBYkEsV0FBYTs7QUFBQSxpQkFDakNDLHlEQUFPLEVBRDBCO0FBQUEsTUFDL0NDLFNBRCtDLFlBQy9DQSxTQUQrQzs7QUFBQSxrQkFFNUJDLHNEQUFRLENBQUMsS0FBRCxDQUZvQjtBQUFBLE1BRWhEQyxNQUZnRDtBQUFBLE1BRXpDQyxTQUZ5Qzs7QUFBQSxtQkFHaENGLHNEQUFRLENBQUMsRUFBRCxDQUh3QjtBQUFBLE1BR2hERyxJQUhnRDtBQUFBLE1BRzNDQyxPQUgyQzs7QUFLdkRDLHlEQUFTLENBQUMsWUFBSTtBQUNYLFdBQU87QUFBQSxhQUFNQyxDQUFDLENBQUNWLFFBQVEsQ0FBQ1csT0FBVixDQUFELENBQW9CQyxLQUFwQixDQUEwQixNQUExQixDQUFOO0FBQUEsS0FBUDtBQUNGLEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFJQUgseURBQVMsQ0FBQyxZQUFJO0FBQ1hJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxTQUFaO0FBQ0YsR0FGUSxFQUVQLENBQUNBLFNBQUQsQ0FGTyxDQUFUO0FBS0FNLHlEQUFTLGdRQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSk4sU0FESTtBQUFBO0FBQUE7QUFBQTs7QUFFQ1ksY0FGRCxHQUU0QlosU0FGNUIsQ0FFQ1ksRUFGRCxFQUVLQyxJQUZMLEdBRTRCYixTQUY1QixDQUVLYSxJQUZMLEVBRW9CQyxJQUZwQixHQUU0QmQsU0FGNUIsQ0FFWSxNQUZaO0FBQUE7QUFBQSxtQkFHeUJlLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUNuREMsb0JBQU0sRUFBQyxNQUQ0QztBQUVuREMsa0JBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ1Asa0JBQUUsRUFBRkEsRUFBRDtBQUFLQyxvQkFBSSxFQUFKQSxJQUFMO0FBQVdDLG9CQUFJLEVBQUpBLElBQVg7QUFBaUJaLHNCQUFNLEVBQU5BO0FBQWpCLGVBQWYsQ0FGOEM7QUFHbkRrQixxQkFBTyxFQUFDO0FBQUMsZ0NBQWdCO0FBQWpCO0FBSDJDLGFBQXBCLENBQUwsQ0FJMUJDLElBSjBCLENBSXJCLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQUprQixDQUh6Qjs7QUFBQTtBQUFBO0FBR0NDLGlCQUhELHFCQUdDQSxLQUhEO0FBR1dDLGdCQUhYOztBQVFKLGdCQUFHLENBQUNELEtBQUosRUFBVTtBQUNQbkIscUJBQU8sV0FBSXFCLFFBQVEsQ0FBQ0MsTUFBYixvQkFBNkJDLGtCQUFrQixDQUFDSCxJQUFJLENBQUNyQixJQUFOLENBQS9DLEVBQVA7QUFDRjs7QUFWRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBWVAsQ0FBQ0YsTUFBRCxDQVpPLENBQVQ7QUFjQSxzQkFDRztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE9BQUcsRUFBRUwsUUFBakM7QUFBQSwyQkFDRztBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDZCQUNHO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0c7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDRztBQUFJLHFCQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESCxlQUVHO0FBQVEscUJBQVMsRUFBQyxXQUFsQjtBQUE4QixtQkFBTyxFQUFFO0FBQUEscUJBQU1DLFdBQVcsRUFBakI7QUFBQTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxlQUtHO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0c7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRztBQUFLLHVCQUFTLEVBQUMsd0JBQWY7QUFBQSxzQ0FDRztBQUFPLHlCQUFTLEVBQUMsa0JBQWpCO0FBQ0csb0JBQUksRUFBQyxVQURSO0FBRUcsa0JBQUUsRUFBQyxjQUZOO0FBR0csd0JBQVEsRUFBRSxrQkFBQytCLENBQUQ7QUFBQSx5QkFBTzFCLFNBQVMsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUFWLENBQWhCO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURILGVBS0c7QUFBTyx5QkFBUyxFQUFDLGtCQUFqQjtBQUFvQyx1QkFBTyxFQUFDLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxFQVFJN0IsTUFBTSxpQkFDUDtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLGdEQUNTO0FBQUcsb0JBQUksRUFBRUUsSUFBVDtBQUFlLHNCQUFNLEVBQUMsUUFBdEI7QUFBQSwwQkFBZ0NBLElBQUksQ0FBQzRCLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLE9BQTNCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQTRCRjs7R0F4RHVCcEMsUztVQUNDRyxpRDs7O0tBRERILFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFNoYXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsaGFyZSh7cmVmTW9kYWwsIGhhbmRsZU1vZGFsfSl7XG4gICBjb25zdCB7IGRhdGFTaGFyZSB9ID0gdXNlRGF0YSgpXG4gICBjb25zdCBbYWN0aXZlLHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgIGNvbnN0IFtsaW5rLHNldExpbmtdID0gdXNlU3RhdGUoJycpXG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgcmV0dXJuICgpID0+ICQocmVmTW9kYWwuY3VycmVudCkubW9kYWwoJ2hpZGUnKVxuICAgfSxbXSlcblxuICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBjb25zb2xlLmxvZyhkYXRhU2hhcmUpXG4gICB9LFtkYXRhU2hhcmVdKVxuXG5cbiAgIHVzZUVmZmVjdChhc3luYygpPT57XG4gICAgICBpZihkYXRhU2hhcmUpe1xuICAgICAgICAgbGV0IHtpZCwgbmFtZSwgW1wiLnRhZ1wiXTp0eXBlfSA9IGRhdGFTaGFyZVxuICAgICAgICAgbGV0IHtlcnJvciwgLi4ucmVzdH0gPSBhd2FpdCBmZXRjaCgnL2FwaS9zaGFyZS1saW5rJywge1xuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe2lkLCBuYW1lLCB0eXBlLCBhY3RpdmV9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgICAgIHNldExpbmsoYCR7bG9jYXRpb24ub3JpZ2lufS9zaGFyZS8ke2VuY29kZVVSSUNvbXBvbmVudChyZXN0LmxpbmspfWApXG4gICAgICAgICB9XG4gICAgICB9XG4gICB9LFthY3RpdmVdKVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgcmVmPXtyZWZNb2RhbH0+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1tZCBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkNyaWFyIGxpbmsgZGUgY29tcGFydGluaGFtZW50bzwvaDU+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsKCl9PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaEFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFjdGl2ZShlLnRhcmdldC5jaGVja2VkKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwic3dpdGNoQWN0aXZlXCI+QXRpdmFyIGNvbXBhcnRpbGhhbWVudG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICB7YWN0aXZlICYmXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbms6IDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPntsaW5rLnJlcGxhY2UoLyguezM1fSkuLisvLCBcIiQxLi4uXCIpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/ModalShare.js\n");

/***/ })

})