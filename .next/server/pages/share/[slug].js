module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/share/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/share/[slug].js":
/*!*******************************!*\
  !*** ./pages/share/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/opt/js/storage_sys/pages/share/[slug].js\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nfunction Index() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    slug\n  } = router.query;\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(async () => {\n    let _await$fetch$then = await fetch(`/api/share-link?link=${encodeURIComponent(slug)}`).then(r => r.json()),\n        {\n      error\n    } = _await$fetch$then,\n        rest = _objectWithoutProperties(_await$fetch$then, [\"error\"]);\n\n    if (!error) setFile(rest);\n  }, []);\n\n  const handleDownload = async () => {\n    let {\n      user_id,\n      file_id,\n      name,\n      type\n    } = file;\n    let rt = await fetch('/api/share-download', {\n      method: 'POST',\n      body: JSON.stringify({\n        user_id,\n        file_id,\n        type\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(r => r.blob());\n    const link = document.createElement('a');\n    const url = window.URL.createObjectURL(rt);\n    link.href = url;\n    link.setAttribute('download', type === 'file' ? name : `${name}.zip`);\n    document.body.appendChild(link);\n    link.click();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row justify-content-center mt-5\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-4 text-center\",\n        children: file ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: file.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 19\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn btn-primary\",\n            onClick: () => handleDownload(),\n            children: \"Baixar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 19\n          }, this)]\n        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Nada foi encontrado\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 16\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 10\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaGFyZS9bc2x1Z10uanM/NzljZSJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImZpbGUiLCJzZXRGaWxlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInRoZW4iLCJyIiwianNvbiIsImVycm9yIiwicmVzdCIsImhhbmRsZURvd25sb2FkIiwidXNlcl9pZCIsImZpbGVfaWQiLCJuYW1lIiwidHlwZSIsInJ0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiYmxvYiIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ1cmwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJocmVmIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWdCO0FBQzVCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0YsTUFBTSxDQUFDRyxLQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxJQUFELENBQWhDO0FBRUFDLHlEQUFTLENBQUMsWUFBUztBQUNoQiw0QkFBdUIsTUFBTUMsS0FBSyxDQUFFLHdCQUF1QkMsa0JBQWtCLENBQUNQLElBQUQsQ0FBTyxFQUFsRCxDQUFMLENBQTBEUSxJQUExRCxDQUErREMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBcEUsQ0FBN0I7QUFBQSxRQUFJO0FBQUNDO0FBQUQsS0FBSjtBQUFBLFFBQWVDLElBQWY7O0FBQ0EsUUFBRyxDQUFDRCxLQUFKLEVBQVdSLE9BQU8sQ0FBQ1MsSUFBRCxDQUFQO0FBQ2IsR0FIUSxFQUdQLEVBSE8sQ0FBVDs7QUFLQSxRQUFNQyxjQUFjLEdBQUcsWUFBVztBQUMvQixRQUFJO0FBQUNDLGFBQUQ7QUFBVUMsYUFBVjtBQUFtQkMsVUFBbkI7QUFBeUJDO0FBQXpCLFFBQWlDZixJQUFyQztBQUNBLFFBQUlnQixFQUFFLEdBQUcsTUFBTVosS0FBSyxDQUFDLHFCQUFELEVBQXdCO0FBQ3pDYSxZQUFNLEVBQUMsTUFEa0M7QUFFekNDLFVBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ1IsZUFBRDtBQUFVQyxlQUFWO0FBQW1CRTtBQUFuQixPQUFmLENBRm9DO0FBR3pDTSxhQUFPLEVBQUM7QUFBQyx3QkFBZ0I7QUFBakI7QUFIaUMsS0FBeEIsQ0FBTCxDQUlaZixJQUpZLENBSVBDLENBQUMsSUFBSUEsQ0FBQyxDQUFDZSxJQUFGLEVBSkUsQ0FBZjtBQUtBLFVBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQSxVQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxlQUFYLENBQTJCYixFQUEzQixDQUFaO0FBQ0FPLFFBQUksQ0FBQ08sSUFBTCxHQUFZSixHQUFaO0FBQ0FILFFBQUksQ0FBQ1EsWUFBTCxDQUFrQixVQUFsQixFQUE4QmhCLElBQUksS0FBRyxNQUFQLEdBQWdCRCxJQUFoQixHQUF3QixHQUFFQSxJQUFLLE1BQTdEO0FBQ0FVLFlBQVEsQ0FBQ04sSUFBVCxDQUFjYyxXQUFkLENBQTBCVCxJQUExQjtBQUNBQSxRQUFJLENBQUNVLEtBQUw7QUFDRixHQWJEOztBQWVBLHNCQUNHO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRztBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDZCQUNHO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtCQUNJakMsSUFBSSxnQkFBRztBQUFBLGtDQUNMO0FBQUEsc0JBQUtBLElBQUksQ0FBQ2M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURLLGVBRUw7QUFBUSxxQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxtQkFBTyxFQUFFLE1BQU1ILGNBQWMsRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRks7QUFBQSx3QkFBSCxnQkFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBY0YiLCJmaWxlIjoiLi9wYWdlcy9zaGFyZS9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnlcbiAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgIHVzZUVmZmVjdChhc3luYygpPT57XG4gICAgICBsZXQge2Vycm9yLCAuLi5yZXN0fSA9IGF3YWl0IGZldGNoKGAvYXBpL3NoYXJlLWxpbms/bGluaz0ke2VuY29kZVVSSUNvbXBvbmVudChzbHVnKX1gKS50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICBpZighZXJyb3IpIHNldEZpbGUocmVzdClcbiAgIH0sW10pXG5cbiAgIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMoKSA9PiB7XG4gICAgICBsZXQge3VzZXJfaWQsIGZpbGVfaWQsIG5hbWUsIHR5cGV9ID0gZmlsZVxuICAgICAgbGV0IHJ0ID0gYXdhaXQgZmV0Y2goJy9hcGkvc2hhcmUtZG93bmxvYWQnLCB7XG4gICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7dXNlcl9pZCwgZmlsZV9pZCwgdHlwZX0pLFxuICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgICAgIH0pLnRoZW4ociA9PiByLmJsb2IoKSlcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJ0KVxuICAgICAgbGluay5ocmVmID0gdXJsXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB0eXBlPT09J2ZpbGUnID8gbmFtZSA6IGAke25hbWV9LnppcGApXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG4gICAgICBsaW5rLmNsaWNrKClcbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgIHtmaWxlID8gPD5cbiAgICAgICAgICAgICAgICAgIDxoMT57ZmlsZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURvd25sb2FkKCl9PkJhaXhhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPC8+OlxuICAgICAgICAgICAgICAgPGgxPk5hZGEgZm9pIGVuY29udHJhZG88L2gxPlxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/share/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });