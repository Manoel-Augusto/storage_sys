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

/***/ "./models/mongo.js":
/*!*************************!*\
  !*** ./models/mongo.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MongoClient = __webpack_require__(/*! mongodb */ \"mongodb\").MongoClient;\n\nconst URI = \"mongodb://localhost:27017/\";\n\nconst loginMongo = async (dbName, collection) => {\n  try {\n    let client = await MongoClient.connect(URI, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    });\n    let db = await client.db(dbName).collection(collection);\n    return {\n      db,\n      client\n    };\n  } catch (e) {\n    return e;\n  }\n\n  ;\n};\n\nmodule.exports = {\n  loginMongo\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvbW9uZ28uanM/MTBiNCJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInJlcXVpcmUiLCJVUkkiLCJsb2dpbk1vbmdvIiwiZGJOYW1lIiwiY29sbGVjdGlvbiIsImNsaWVudCIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYiIsImUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFXLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBUCxDQUFtQkQsV0FBdkM7O0FBQ0EsTUFBTUUsR0FBRyxHQUFHLDRCQUFaOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxPQUFNQyxNQUFOLEVBQWNDLFVBQWQsS0FBNkI7QUFDN0MsTUFBRztBQUNBLFFBQUlDLE1BQU0sR0FBRyxNQUFNTixXQUFXLENBQUNPLE9BQVosQ0FBb0JMLEdBQXBCLEVBQXlCO0FBQUNNLHFCQUFlLEVBQUMsSUFBakI7QUFBdUJDLHdCQUFrQixFQUFFO0FBQTNDLEtBQXpCLENBQW5CO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ksRUFBUCxDQUFVTixNQUFWLEVBQWtCQyxVQUFsQixDQUE2QkEsVUFBN0IsQ0FBZjtBQUNBLFdBQU87QUFBQ0ssUUFBRDtBQUFLSjtBQUFMLEtBQVA7QUFDRixHQUpELENBSUMsT0FBTUssQ0FBTixFQUFRO0FBQ04sV0FBT0EsQ0FBUDtBQUNGOztBQUFBO0FBRUgsQ0FURDs7QUFVQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVWO0FBQUYsQ0FBakIiLCJmaWxlIjoiLi9tb2RlbHMvbW9uZ28uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudDtcbmNvbnN0IFVSSSA9IFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9cIjtcblxuY29uc3QgbG9naW5Nb25nbyA9IGFzeW5jKGRiTmFtZSwgY29sbGVjdGlvbikgPT4ge1xuICAgdHJ5e1xuICAgICAgbGV0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoVVJJLCB7dXNlTmV3VXJsUGFyc2VyOnRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZX0pO1xuICAgICAgbGV0IGRiID0gYXdhaXQgY2xpZW50LmRiKGRiTmFtZSkuY29sbGVjdGlvbihjb2xsZWN0aW9uKTtcbiAgICAgIHJldHVybih7ZGIsIGNsaWVudH0pXG4gICB9Y2F0Y2goZSl7XG4gICAgICByZXR1cm4gZTtcbiAgIH07XG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IHsgbG9naW5Nb25nbyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/mongo.js\n");

/***/ }),

/***/ "./pages/api/check-auth.js":
/*!*********************************!*\
  !*** ./pages/api/check-auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst checkAuth = async token => {\n  try {\n    let {\n      id\n    } = jwt.verify(token, process.env.JWTSECRET);\n    let {\n      db,\n      client\n    } = await loginMongo(process.env.MONGODB, 'users');\n    let rt = await db.findOne({\n      _id: new ObjectID(id)\n    }, {\n      projection: {\n        _id: 0,\n        password: 0\n      }\n    });\n\n    if (rt) {\n      return _objectSpread({}, rt);\n    }\n\n    return {\n      error: true,\n      msg: \"Usuário não existe em nossa base.\"\n    };\n  } catch (e) {\n    return {\n      error: true,\n      msg: e\n    };\n  }\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method\n    } = req;\n\n    if (method === 'GET') {\n      let {\n        tk\n      } = req.cookies;\n      res.status(200).json(await checkAuth(tk));\n    } else {\n      res.status(405).end(`Method ${method} Not Allowed`);\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2stYXV0aC5qcz9mNTViIl0sIm5hbWVzIjpbImp3dCIsInJlcXVpcmUiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJjaGVja0F1dGgiLCJ0b2tlbiIsImlkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVFNFQ1JFVCIsImRiIiwiY2xpZW50IiwiTU9OR09EQiIsInJ0IiwiZmluZE9uZSIsIl9pZCIsInByb2plY3Rpb24iLCJwYXNzd29yZCIsImVycm9yIiwibXNnIiwiZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0ayIsImNvb2tpZXMiLCJzdGF0dXMiLCJqc29uIiwiZW5kIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFlRCxtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLE1BQU07QUFBRUU7QUFBRixJQUFpQkYsbUJBQU8sQ0FBQyw2Q0FBRCxDQUE5Qjs7QUFFQSxNQUFNRyxTQUFTLEdBQUcsTUFBTUMsS0FBTixJQUFjO0FBQzdCLE1BQUc7QUFDQSxRQUFJO0FBQUVDO0FBQUYsUUFBU04sR0FBRyxDQUFDTyxNQUFKLENBQVdGLEtBQVgsRUFBa0JHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUE5QixDQUFiO0FBQ0EsUUFBSTtBQUFDQyxRQUFEO0FBQUtDO0FBQUwsUUFBZSxNQUFNVCxVQUFVLENBQUNLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxPQUFiLEVBQXNCLE9BQXRCLENBQW5DO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLE1BQU1ILEVBQUUsQ0FBQ0ksT0FBSCxDQUFXO0FBQUNDLFNBQUcsRUFBRSxJQUFJZCxRQUFKLENBQWFJLEVBQWI7QUFBTixLQUFYLEVBQW1DO0FBQUVXLGdCQUFVLEVBQUM7QUFBQ0QsV0FBRyxFQUFDLENBQUw7QUFBT0UsZ0JBQVEsRUFBQztBQUFoQjtBQUFiLEtBQW5DLENBQWY7O0FBQ0EsUUFBR0osRUFBSCxFQUFNO0FBQ0gsK0JBQVdBLEVBQVg7QUFDRjs7QUFDRCxXQUFPO0FBQUVLLFdBQUssRUFBQyxJQUFSO0FBQWNDLFNBQUcsRUFBRTtBQUFuQixLQUFQO0FBQ0YsR0FSRCxDQVFDLE9BQU1DLENBQU4sRUFBUTtBQUNOLFdBQU87QUFBRUYsV0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBRyxFQUFFQztBQUFwQixLQUFQO0FBQ0Y7QUFDSCxDQVpEOztBQWNlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFnQztBQUM1QyxNQUFHO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQWFGLEdBQW5COztBQUNBLFFBQUdFLE1BQU0sS0FBSyxLQUFkLEVBQW9CO0FBQ2pCLFVBQUk7QUFBRUM7QUFBRixVQUFTSCxHQUFHLENBQUNJLE9BQWpCO0FBQ0FILFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU16QixTQUFTLENBQUNzQixFQUFELENBQXBDO0FBQ0YsS0FIRCxNQUdLO0FBQ0ZGLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JFLEdBQWhCLENBQXFCLFVBQVNMLE1BQU8sY0FBckM7QUFDRjtBQUNILEdBUkQsQ0FRQyxPQUFNTSxHQUFOLEVBQVU7QUFDUlAsT0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0csZ0JBQVUsRUFBRSxHQUFiO0FBQWtCWixTQUFHLEVBQUVXLEdBQUcsQ0FBQ0U7QUFBM0IsS0FBckI7QUFDRjtBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NoZWNrLWF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcbmNvbnN0IHsgT2JqZWN0SUQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKTtcbmNvbnN0IHsgbG9naW5Nb25nbyB9ID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL21vbmdvJyk7XG5cbmNvbnN0IGNoZWNrQXV0aCA9IGFzeW5jKHRva2VuKT0+e1xuICAgdHJ5e1xuICAgICAgbGV0IHsgaWQgfSA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVFNFQ1JFVCk7XG4gICAgICBsZXQge2RiLCBjbGllbnR9ID0gYXdhaXQgbG9naW5Nb25nbyhwcm9jZXNzLmVudi5NT05HT0RCLCAndXNlcnMnKVxuICAgICAgbGV0IHJ0ID0gYXdhaXQgZGIuZmluZE9uZSh7X2lkOiBuZXcgT2JqZWN0SUQoaWQpfSx7IHByb2plY3Rpb246e19pZDowLHBhc3N3b3JkOjB9fSlcbiAgICAgIGlmKHJ0KXtcbiAgICAgICAgIHJldHVybiB7Li4ucnR9XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjp0cnVlLCBtc2c6IFwiVXN1w6FyaW8gbsOjbyBleGlzdGUgZW0gbm9zc2EgYmFzZS5cIiB9XG4gICB9Y2F0Y2goZSl7XG4gICAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgbXNnOiBlIH1cbiAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICAgICAgaWYobWV0aG9kID09PSAnR0VUJyl7XG4gICAgICAgICBsZXQgeyB0ayB9ID0gcmVxLmNvb2tpZXNcbiAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGNoZWNrQXV0aCh0aykpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBtc2c6IGVyci5tZXNzYWdlfSlcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/check-auth.js\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });