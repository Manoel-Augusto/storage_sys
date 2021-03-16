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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/check-auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/check-auth.js":
/*!*********************************!*\
  !*** ./pages/api/check-auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst checkAuth = async token => {\n  try {\n    jwt.verify(token, process.env.JWTSECRET);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method\n    } = req;\n\n    if (method === 'GET') {\n      let {\n        token\n      } = req.query;\n      res.status(200).json(await checkAuth(token));\n    } else {\n      res.status(405).end(`Method ${method} Not Allowed`);\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2stYXV0aC5qcz9mNTViIl0sIm5hbWVzIjpbImp3dCIsInJlcXVpcmUiLCJjaGVja0F1dGgiLCJ0b2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RTRUNSRVQiLCJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVuZCIsImVyciIsInN0YXR1c0NvZGUiLCJtc2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUVBLE1BQU1DLFNBQVMsR0FBRyxNQUFNQyxLQUFOLElBQWM7QUFDN0IsTUFBRztBQUNBSCxPQUFHLENBQUNJLE1BQUosQ0FBV0QsS0FBWCxFQUFrQkUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQTlCO0FBQ0EsV0FBTyxJQUFQO0FBQ0YsR0FIRCxDQUdDLE9BQU1DLENBQU4sRUFBUTtBQUNOLFdBQU8sS0FBUDtBQUNGO0FBQ0gsQ0FQRDs7QUFTZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7QUFDNUMsTUFBRztBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFhRixHQUFuQjs7QUFDQSxRQUFHRSxNQUFNLEtBQUssS0FBZCxFQUFvQjtBQUNqQixVQUFJO0FBQUVUO0FBQUYsVUFBWU8sR0FBRyxDQUFDRyxLQUFwQjtBQUNBRixTQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixNQUFNYixTQUFTLENBQUNDLEtBQUQsQ0FBcEM7QUFDRixLQUhELE1BR0s7QUFDRlEsU0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkUsR0FBaEIsQ0FBcUIsVUFBU0osTUFBTyxjQUFyQztBQUNGO0FBQ0gsR0FSRCxDQVFDLE9BQU1LLEdBQU4sRUFBVTtBQUNSTixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDRyxnQkFBVSxFQUFFLEdBQWI7QUFBa0JDLFNBQUcsRUFBRUYsR0FBRyxDQUFDRztBQUEzQixLQUFyQjtBQUNGO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2stYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuXG5jb25zdCBjaGVja0F1dGggPSBhc3luYyh0b2tlbik9PntcbiAgIHRyeXtcbiAgICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVFNFQ1JFVCk7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgfWNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgdHJ5e1xuICAgICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcbiAgICAgIGlmKG1ldGhvZCA9PT0gJ0dFVCcpe1xuICAgICAgICAgbGV0IHsgdG9rZW4gfSA9IHJlcS5xdWVyeVxuICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgY2hlY2tBdXRoKHRva2VuKSlcbiAgICAgIH1lbHNle1xuICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICB9XG4gICB9Y2F0Y2goZXJyKXtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIG1zZzogZXJyLm1lc3NhZ2V9KVxuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/check-auth.js\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ })

/******/ });