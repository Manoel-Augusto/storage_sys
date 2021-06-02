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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/get-list-shared.js");
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

/***/ "./pages/api/get-list-shared.js":
/*!**************************************!*\
  !*** ./pages/api/get-list-shared.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst getList = async (_id, type) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      password: 0\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: `https://api.dropboxapi.com/2/sharing/${type == \"folders\" ? \"list_folders\" : \"list_received_files\"}`,\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${dropboxToken}`\n      },\n      json: {\n        limit: 100,\n        actions: []\n      }\n    }, (err, res, body) => {\n      if (err) {\n        r(err);\n      } else {\n        s(body);\n      }\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'GET':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let folders = await getList(id, \"folders\");\n\n            if (!folders.error) {\n              folders.entries = folders.entries.map(item => _objectSpread(_objectSpread({}, item), {}, {\n                \".tag\": \"folder\"\n              }));\n            }\n\n            let files = await getList(id, \"files\");\n\n            if (!files.error) {\n              files.entries = files.entries.map(item => _objectSpread(_objectSpread({}, item), {}, {\n                \".tag\": \"file\"\n              }));\n            }\n\n            res.status(200).json({\n              folders,\n              files\n            });\n          } catch (e) {\n            res.status(200).json([]);\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        error: true,\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LWxpc3Qtc2hhcmVkLmpzP2RmY2YiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcXVpcmUiLCJqd3QiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJnZXRMaXN0IiwiX2lkIiwidHlwZSIsImRiIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREIiLCJkcm9wYm94VG9rZW4iLCJmaW5kT25lIiwicHJvamVjdGlvbiIsInBhc3N3b3JkIiwiY2xvc2UiLCJQcm9taXNlIiwicyIsInIiLCJwb3N0IiwidXJsIiwiaGVhZGVycyIsImpzb24iLCJsaW1pdCIsImFjdGlvbnMiLCJlcnIiLCJyZXMiLCJib2R5IiwiaGFuZGxlciIsInJlcSIsIm1ldGhvZCIsImNvb2tpZXMiLCJ0ayIsImlkIiwidmVyaWZ5IiwiSldUU0VDUkVUIiwiZm9sZGVycyIsImVycm9yIiwiZW50cmllcyIsIm1hcCIsIml0ZW0iLCJmaWxlcyIsInN0YXR1cyIsImUiLCJlbmQiLCJzdGF0dXNDb2RlIiwibXNnIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUNBLE1BQU07QUFBRUU7QUFBRixJQUFlRixtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLE1BQU07QUFBRUc7QUFBRixJQUFpQkgsbUJBQU8sQ0FBQyw2Q0FBRCxDQUE5Qjs7QUFFQSxNQUFNSSxPQUFPLEdBQUcsT0FBTUMsR0FBTixFQUFXQyxJQUFYLEtBQWtCO0FBQy9CLE1BQUk7QUFBQ0MsTUFBRDtBQUFLQztBQUFMLE1BQWUsTUFBTUwsVUFBVSxDQUFDTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBYixFQUFzQixPQUF0QixDQUFuQztBQUNBLE1BQUk7QUFBQ0M7QUFBRCxNQUFpQixNQUFNTCxF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LE9BQU1yQixHQUFOLEVBQVU7QUFDUkMsT0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JwQixJQUFoQixDQUFxQjtBQUFDdUIsZ0JBQVUsRUFBRSxHQUFiO0FBQWtCQyxTQUFHLEVBQUVyQixHQUFHLENBQUNzQjtBQUEzQixLQUFyQjtBQUNGO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LWxpc3Qtc2hhcmVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuY29uc3QgeyBPYmplY3RJRCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuY29uc3QgeyBsb2dpbk1vbmdvIH0gPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMvbW9uZ28nKTtcblxuY29uc3QgZ2V0TGlzdCA9IGFzeW5jKF9pZCwgdHlwZSk9PntcbiAgIGxldCB7ZGIsIGNsaWVudH0gPSBhd2FpdCBsb2dpbk1vbmdvKHByb2Nlc3MuZW52Lk1PTkdPREIsICd1c2VycycpXG4gICBsZXQge2Ryb3Bib3hUb2tlbn0gPSBhd2FpdCBkYi5maW5kT25lKHtfaWQ6IG5ldyBPYmplY3RJRChfaWQpfSx7IHByb2plY3Rpb246e19pZDowLHBhc3N3b3JkOjB9fSlcbiAgIGNsaWVudC5jbG9zZSgpXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHMscik9PntcbiAgICAgIHJlcXVlc3QucG9zdCh7XG4gICAgICAgICB1cmw6IGBodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL3NoYXJpbmcvJHt0eXBlID09IFwiZm9sZGVyc1wiID8gXCJsaXN0X2ZvbGRlcnNcIiA6IFwibGlzdF9yZWNlaXZlZF9maWxlc1wifWAsXG4gICAgICAgICBoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiLFwiQXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtkcm9wYm94VG9rZW59YH0sXG4gICAgICAgICBqc29uOnsgbGltaXQ6IDEwMCwgYWN0aW9uczogW10gfVxuICAgICAgfSwgKGVyciwgcmVzLCBib2R5KT0+e1xuICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHIoZXJyKVxuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzKGJvZHkpXG4gICAgICAgICB9XG4gICAgICB9KVxuICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCwgY29va2llczp7dGt9fSA9IHJlcTtcbiAgICAgIGlmKHRrKXtcbiAgICAgICAgIHN3aXRjaChtZXRob2Qpe1xuICAgICAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRrLCBwcm9jZXNzLmVudi5KV1RTRUNSRVQpO1xuICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlcnMgPSBhd2FpdCBnZXRMaXN0KGlkLCBcImZvbGRlcnNcIilcbiAgICAgICAgICAgICAgICAgIGlmKCFmb2xkZXJzLmVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgIGZvbGRlcnMuZW50cmllcyA9IGZvbGRlcnMuZW50cmllcy5tYXAoaXRlbSA9PiAoey4uLml0ZW0sIFwiLnRhZ1wiOiBcImZvbGRlclwifSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsZXQgZmlsZXMgPSBhd2FpdCBnZXRMaXN0KGlkLCBcImZpbGVzXCIpXG4gICAgICAgICAgICAgICAgICBpZighZmlsZXMuZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgZmlsZXMuZW50cmllcyA9IGZpbGVzLmVudHJpZXMubWFwKGl0ZW0gPT4gKHsuLi5pdGVtLCBcIi50YWdcIjogXCJmaWxlXCJ9KSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtmb2xkZXJzLCBmaWxlc30pXG4gICAgICAgICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihbXSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6IHRydWUsIHN0YXR1c0NvZGU6IDUwMCwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCJ9KVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBtc2c6IGVyci5tZXNzYWdlfSlcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/get-list-shared.js\n");

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

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1ZXN0XCI/MGZiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVxdWVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///request\n");

/***/ })

/******/ });