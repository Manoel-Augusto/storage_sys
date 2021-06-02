webpackHotUpdate_N_E("pages/share",{

/***/ "./contexts/models/data.js":
/*!*********************************!*\
  !*** ./contexts/models/data.js ***!
  \*********************************/
/*! exports provided: default, ContextData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContextData\", function() { return ContextData; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/contexts/models/data.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar ContextData = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createContext();\n\nfunction ProviderData(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var slug = router.query.slug;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      listRecords = _useState[0],\n      setListRecords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      checkAll = _useState2[0],\n      setCheckAll = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      dataShare = _useState3[0],\n      setDataShare = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      shared = _useState4[0],\n      setShared = _useState4[1];\n\n  var elCheckAll = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useCallback\"])(function (el) {\n    if (el) {\n      if (checkAll === null) {\n        el.indeterminate = true;\n      } else {\n        el.indeterminate = false;\n      }\n    }\n  }, [checkAll]);\n\n  var toggleCheck = function toggleCheck() {\n    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    ids = ids.length ? ids : listRecords.filter(function (item) {\n      return checkAll === null ? Boolean(item.selected) : !checkAll != Boolean(item.selected);\n    }).map(function (item) {\n      return item.id;\n    });\n    var newListRecords = listRecords.map(function (item) {\n      return ids.includes(item.id) ? _objectSpread(_objectSpread({}, item), {}, {\n        selected: !item.selected\n      }) : item;\n    });\n    var selectedRecords = newListRecords.filter(function (item) {\n      return item.selected;\n    });\n    setCheckAll(selectedRecords.length < newListRecords.length ? selectedRecords.length ? null : false : !checkAll);\n    setListRecords(newListRecords);\n  };\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var _yield$fetch$then, entries;\n\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"/api/get-list-folder/\".concat((slug || []).join('/'))).then(function (res) {\n                return res.json();\n              });\n\n            case 2:\n              _yield$fetch$then = _context.sent;\n              entries = _yield$fetch$then.entries;\n\n              if (entries) {\n                setListRecords(entries);\n                setCheckAll(false);\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getDataShared = /*#__PURE__*/function () {\n    var _ref2 = Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {\n      var _yield$fetch$then2, error, folders, files;\n\n      return _opt_js_storage_sys_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return fetch('/api/get-list-shared').then(function (res) {\n                return res.json();\n              });\n\n            case 2:\n              _yield$fetch$then2 = _context2.sent;\n              error = _yield$fetch$then2.error;\n              folders = _yield$fetch$then2.folders;\n              files = _yield$fetch$then2.files;\n\n              if (!error) {\n                folders.entries = folders.entries.map(function (item) {\n                  return _objectSpread(_objectSpread({}, item), {}, {\n                    \".tag\": \"folder\"\n                  });\n                });\n                files.entries = files.entries.map(function (item) {\n                  return _objectSpread(_objectSpread({}, item), {}, {\n                    \".tag\": \"file\"\n                  });\n                });\n                console.log(folders.entries, files.entries);\n                setListRecords([].concat(Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(folders.entries), Object(_opt_js_storage_sys_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(files.entries)));\n              }\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getDataShared() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContextData.Provider, {\n    value: {\n      listRecords: listRecords,\n      setListRecords: setListRecords,\n      shared: shared,\n      setShared: setShared,\n      checkAll: checkAll,\n      setCheckAll: setCheckAll,\n      dataShare: dataShare,\n      setDataShare: setDataShare,\n      elCheckAll: elCheckAll,\n      toggleCheck: toggleCheck,\n      getData: getData,\n      getDataShared: getDataShared\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 7\n  }, this);\n}\n\n_s(ProviderData, \"StLdcE85CsIsn8AbETACk/dbSBY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ProviderData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProviderData);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"ProviderData\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvbW9kZWxzL2RhdGEuanM/NmMxMyJdLCJuYW1lcyI6WyJDb250ZXh0RGF0YSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyRGF0YSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJsaXN0UmVjb3JkcyIsInNldExpc3RSZWNvcmRzIiwiY2hlY2tBbGwiLCJzZXRDaGVja0FsbCIsImRhdGFTaGFyZSIsInNldERhdGFTaGFyZSIsInNoYXJlZCIsInNldFNoYXJlZCIsImVsQ2hlY2tBbGwiLCJ1c2VDYWxsYmFjayIsImVsIiwiaW5kZXRlcm1pbmF0ZSIsInRvZ2dsZUNoZWNrIiwiaWRzIiwibGVuZ3RoIiwiZmlsdGVyIiwiaXRlbSIsIkJvb2xlYW4iLCJzZWxlY3RlZCIsIm1hcCIsImlkIiwibmV3TGlzdFJlY29yZHMiLCJpbmNsdWRlcyIsInNlbGVjdGVkUmVjb3JkcyIsImdldERhdGEiLCJmZXRjaCIsImpvaW4iLCJ0aGVuIiwicmVzIiwianNvbiIsImVudHJpZXMiLCJnZXREYXRhU2hhcmVkIiwiZXJyb3IiLCJmb2xkZXJzIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBcEI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNEI7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUR5QixNQUVqQkMsSUFGaUIsR0FFUkYsTUFBTSxDQUFDRyxLQUZDLENBRWpCRCxJQUZpQjs7QUFBQSxrQkFHYUUsc0RBQVEsQ0FBQyxFQUFELENBSHJCO0FBQUEsTUFHbEJDLFdBSGtCO0FBQUEsTUFHTEMsY0FISzs7QUFBQSxtQkFJT0Ysc0RB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QkFBVyxFQUFYQSxXQVYwQjtBQVcxQlksYUFBTyxFQUFQQSxPQVgwQjtBQVkxQk8sbUJBQWEsRUFBYkE7QUFaMEIsS0FBN0I7QUFBQSxjQWNJckMsS0FBSyxDQUFDMkM7QUFkVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFrQkY7O0dBbkVRNUMsWTtVQUNTRyxxRDs7O0tBRFRILFk7QUFvRU1BLDJFQUFmO0FBQ0EiLCJmaWxlIjoiLi9jb250ZXh0cy9tb2RlbHMvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBDb250ZXh0RGF0YSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5mdW5jdGlvbiBQcm92aWRlckRhdGEocHJvcHMpe1xuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5XG4gICBjb25zdCBbbGlzdFJlY29yZHMsIHNldExpc3RSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKVxuICAgY29uc3QgW2NoZWNrQWxsLCBzZXRDaGVja0FsbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgIGNvbnN0IFtkYXRhU2hhcmUsIHNldERhdGFTaGFyZV0gPSB1c2VTdGF0ZShudWxsKVxuICAgY29uc3QgW3NoYXJlZCwgc2V0U2hhcmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICBjb25zdCBlbENoZWNrQWxsID0gdXNlQ2FsbGJhY2soZWwgPT4ge1xuICAgICAgaWYoZWwpe1xuICAgICAgICAgaWYoY2hlY2tBbGwgPT09IG51bGwpe1xuICAgICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWVcbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXG4gICAgICAgICB9XG4gICAgICB9XG4gICB9LCBbY2hlY2tBbGxdKTtcblxuICAgY29uc3QgdG9nZ2xlQ2hlY2sgPSAoaWRzPVtdKT0+e1xuICAgICAgaWRzID0gaWRzLmxlbmd0aCA/IGlkcyA6XG4gICAgICAgICBsaXN0UmVjb3Jkc1xuICAgICAgICAgLmZpbHRlcihpdGVtID0+IGNoZWNrQWxsID09PSBudWxsID8gQm9vbGVhbihpdGVtLnNlbGVjdGVkKSA6ICFjaGVja0FsbCAhPSBCb29sZWFuKGl0ZW0uc2VsZWN0ZWQpKVxuICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uaWQpXG4gICAgICBsZXQgbmV3TGlzdFJlY29yZHMgPSBsaXN0UmVjb3Jkcy5tYXAoaXRlbSA9PiBpZHMuaW5jbHVkZXMoaXRlbS5pZCkgPyB7Li4uaXRlbSxzZWxlY3RlZDohaXRlbS5zZWxlY3RlZH0gOiBpdGVtKVxuICAgICAgbGV0IHNlbGVjdGVkUmVjb3JkcyA9IG5ld0xpc3RSZWNvcmRzLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpXG4gICAgICBzZXRDaGVja0FsbChzZWxlY3RlZFJlY29yZHMubGVuZ3RoIDwgbmV3TGlzdFJlY29yZHMubGVuZ3RoID8gc2VsZWN0ZWRSZWNvcmRzLmxlbmd0aCA/IG51bGwgOiBmYWxzZSA6ICFjaGVja0FsbClcbiAgICAgIHNldExpc3RSZWNvcmRzKG5ld0xpc3RSZWNvcmRzKVxuICAgfVxuXG4gICBjb25zdCBnZXREYXRhID0gYXN5bmMoKT0+e1xuICAgICAgbGV0IHsgZW50cmllcyB9ID0gYXdhaXQgZmV0Y2goYC9hcGkvZ2V0LWxpc3QtZm9sZGVyLyR7KHNsdWcgfHwgW10pLmpvaW4oJy8nKX1gKVxuICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICBpZihlbnRyaWVzKXtcbiAgICAgICAgIHNldExpc3RSZWNvcmRzKGVudHJpZXMpXG4gICAgICAgICBzZXRDaGVja0FsbChmYWxzZSlcbiAgICAgIH1cbiAgIH1cblxuICAgY29uc3QgZ2V0RGF0YVNoYXJlZCA9IGFzeW5jKCk9PntcbiAgICAgIGxldCB7IGVycm9yLCBmb2xkZXJzLCBmaWxlcyB9ID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0LWxpc3Qtc2hhcmVkJylcbiAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgIGZvbGRlcnMuZW50cmllcyA9IGZvbGRlcnMuZW50cmllcy5tYXAoaXRlbSA9PiAoey4uLml0ZW0sIFwiLnRhZ1wiOiBcImZvbGRlclwifSkpXG4gICAgICAgICBmaWxlcy5lbnRyaWVzID0gZmlsZXMuZW50cmllcy5tYXAoaXRlbSA9PiAoey4uLml0ZW0sIFwiLnRhZ1wiOiBcImZpbGVcIn0pKVxuICAgICAgICAgY29uc29sZS5sb2coZm9sZGVycy5lbnRyaWVzLCBmaWxlcy5lbnRyaWVzKVxuICAgICAgICAgc2V0TGlzdFJlY29yZHMoWy4uLmZvbGRlcnMuZW50cmllcywgLi4uZmlsZXMuZW50cmllc10pXG4gICAgICB9XG4gICB9XG5cbiAgIHJldHVybihcbiAgICAgIDxDb250ZXh0RGF0YS5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgbGlzdFJlY29yZHMsXG4gICAgICAgICBzZXRMaXN0UmVjb3JkcyxcbiAgICAgICAgIHNoYXJlZCxcbiAgICAgICAgIHNldFNoYXJlZCxcbiAgICAgICAgIGNoZWNrQWxsLFxuICAgICAgICAgc2V0Q2hlY2tBbGwsXG4gICAgICAgICBkYXRhU2hhcmUsXG4gICAgICAgICBzZXREYXRhU2hhcmUsXG4gICAgICAgICBlbENoZWNrQWxsLFxuICAgICAgICAgdG9nZ2xlQ2hlY2ssXG4gICAgICAgICBnZXREYXRhLFxuICAgICAgICAgZ2V0RGF0YVNoYXJlZCxcbiAgICAgIH19PlxuICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Db250ZXh0RGF0YS5Qcm92aWRlcj5cbiAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyRGF0YVxuZXhwb3J0IHsgQ29udGV4dERhdGEgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/models/data.js\n");

/***/ })

})