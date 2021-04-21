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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/get-list-folder/index.js");
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

/***/ "./pages/api/get-list-folder/index.js":
/*!********************************************!*\
  !*** ./pages/api/get-list-folder/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../../models/mongo */ \"./models/mongo.js\");\n\nconst getListFolder = async (_id, path = \"\") => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      password: 0\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: \"https://api.dropboxapi.com/2/files/list_folder\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${dropboxToken}`\n      },\n      json: {\n        path\n      }\n    }, (err, res, body) => {\n      if (err) {\n        r(err);\n      } else {\n        s(body);\n      }\n    });\n  });\n};\n\nconst getShared = async data => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'share');\n  let sh = await db.find({\n    file_id: {\n      $in: data.entries.map(item => item.id)\n    }\n  }).toArray();\n  client.close();\n  data.entries = data.entries.map(item => {\n    let share = sh.find(i => i.file_id === item.id);\n    return _objectSpread(_objectSpread({}, item), {}, {\n      shared_link: share ? share.link : false\n    });\n  });\n  return data;\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'GET':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let rt = await getListFolder(id);\n            await getShared(rt);\n            res.status(200).json(rt);\n          } catch (e) {\n            res.status(200).json([]);\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LWxpc3QtZm9sZGVyL2luZGV4LmpzP2Q1MTgiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcXVpcmUiLCJqd3QiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJnZXRMaXN0Rm9sZGVyIiwiX2lkIiwicGF0aCIsImRiIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREIiLCJkcm9wYm94VG9rZW4iLCJmaW5kT25lIiwicHJvamVjdGlvbiIsInBhc3N3b3JkIiwiY2xvc2UiLCJQcm9taXNlIiwicyIsInIiLCJwb3N0IiwidXJsIiwiaGVhZGVycyIsImpzb24iLCJlcnIiLCJyZXMiLCJib2R5IiwiZ2V0U2hhcmVkIiwiZGF0YSIsInNoIiwiZmluZCIsImZpbGVfaWQiLCIkaW4iLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImlkIiwidG9BcnJheSIsInNoYXJlIiwiaSIsInNoYXJlZF9saW5rIiwibGluayIsImhhbmRsZXIiLCJyZXEiLCJtZXRob2QiLCJjb29raWVzIiwidGsiLCJ2ZXJpZnkiLCJKV1RTRUNSRVQiLCJydCIsInN0YXR1cyIsImUiLCJlbmQiLCJzdGF0dXNDb2RlIiwibXNnIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUNBLE1BQU07QUFBRUU7QUFBRixJQUFlRixtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLE1BQU07QUFBRUc7QUFBRixJQUFpQkgsbUJBQU8sQ0FBQyxnREFBRCxDQUE5Qjs7QUFFQSxNQUFNSSxhQUFhLEdBQUcsT0FBTUMsR0FBTixFQUFXQyxJQUFJLEdBQUMsRUFBaEIsS0FBcUI7QUFDeEMsTUFBSTtBQUFDQyxNQUFEO0FBQUtDO0FBQUwsTUFBZSxNQUFNTCxVQUFVLENBQUNNLE9BQU8s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O0FBQ0Q7O0FBQ0g7QUFDR0UsYUFBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JFLEdBQWhCLENBQXFCLFVBQVNSLE1BQU8sY0FBckM7QUFaTjtBQWNGLEtBZkQsTUFlSztBQUNGbkIsU0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0IzQixJQUFoQixDQUFxQjtBQUFDOEIsa0JBQVUsRUFBRSxHQUFiO0FBQWtCQyxXQUFHLEVBQUU7QUFBdkIsT0FBckI7QUFDRjtBQUNILEdBcEJELENBb0JDLE9BQU05QixHQUFOLEVBQVU7QUFDUkMsT0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0IzQixJQUFoQixDQUFxQjtBQUFDOEIsZ0JBQVUsRUFBRSxHQUFiO0FBQWtCQyxTQUFHLEVBQUU5QixHQUFHLENBQUMrQjtBQUEzQixLQUFyQjtBQUNGO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0LWxpc3QtZm9sZGVyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuY29uc3QgeyBPYmplY3RJRCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuY29uc3QgeyBsb2dpbk1vbmdvIH0gPSByZXF1aXJlKCcuLi8uLi8uLi9tb2RlbHMvbW9uZ28nKTtcblxuY29uc3QgZ2V0TGlzdEZvbGRlciA9IGFzeW5jKF9pZCwgcGF0aD1cIlwiKT0+e1xuICAgbGV0IHtkYiwgY2xpZW50fSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3VzZXJzJylcbiAgIGxldCB7ZHJvcGJveFRva2VufSA9IGF3YWl0IGRiLmZpbmRPbmUoe19pZDogbmV3IE9iamVjdElEKF9pZCl9LHsgcHJvamVjdGlvbjp7X2lkOjAscGFzc3dvcmQ6MH19KVxuICAgY2xpZW50LmNsb3NlKClcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocyxyKT0+e1xuICAgICAgcmVxdWVzdC5wb3N0KHtcbiAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyXCIsXG4gICAgICAgICBoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiLFwiQXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtkcm9wYm94VG9rZW59YH0sXG4gICAgICAgICBqc29uOnsgcGF0aCB9XG4gICAgICB9LCAoZXJyLCByZXMsIGJvZHkpPT57XG4gICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcihlcnIpXG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHMoYm9keSlcbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICB9KVxufVxuXG5jb25zdCBnZXRTaGFyZWQgPSBhc3luYyhkYXRhKSA9PiB7XG4gICBsZXQge2RiLCBjbGllbnR9ID0gYXdhaXQgbG9naW5Nb25nbyhwcm9jZXNzLmVudi5NT05HT0RCLCAnc2hhcmUnKVxuICAgbGV0IHNoID0gYXdhaXQgZGIuZmluZCh7ZmlsZV9pZDogeyRpbjogZGF0YS5lbnRyaWVzLm1hcChpdGVtID0+IGl0ZW0uaWQpfX0pLnRvQXJyYXkoKVxuICAgY2xpZW50LmNsb3NlKClcbiAgIGRhdGEuZW50cmllcyA9IGRhdGEuZW50cmllcy5tYXAoaXRlbSA9PiB7XG4gICAgICBsZXQgc2hhcmUgPSBzaC5maW5kKGkgPT4gaS5maWxlX2lkID09PSBpdGVtLmlkKVxuICAgICAgcmV0dXJuIHsuLi5pdGVtLCBzaGFyZWRfbGluazogc2hhcmUgPyBzaGFyZS5saW5rIDogZmFsc2V9XG4gICB9KVxuICAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCwgY29va2llczp7dGt9fSA9IHJlcTtcbiAgICAgIGlmKHRrKXtcbiAgICAgICAgIHN3aXRjaChtZXRob2Qpe1xuICAgICAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRrLCBwcm9jZXNzLmVudi5KV1RTRUNSRVQpO1xuICAgICAgICAgICAgICAgICAgbGV0IHJ0ID0gYXdhaXQgZ2V0TGlzdEZvbGRlcihpZClcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGdldFNoYXJlZChydClcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJ0KVxuICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oW10pXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1c0NvZGU6IDUwMCwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCJ9KVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBtc2c6IGVyci5tZXNzYWdlfSlcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/get-list-folder/index.js\n");

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