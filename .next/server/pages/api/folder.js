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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/folder.js");
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

/***/ "./pages/api/folder.js":
/*!*****************************!*\
  !*** ./pages/api/folder.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst createFolder = async (_id, path) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: \"https://api.dropboxapi.com/2/files/create_folder_v2\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${dropboxToken}`\n      },\n      json: {\n        path,\n        autorename: false\n      }\n    }, (err, res, body) => {\n      if (err) {\n        r(err);\n      } else {\n        s(body);\n      }\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'POST':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              folder\n            } = req.body;\n            res.status(200).json(await createFolder(id, folder));\n          } catch (e) {\n            res.status(200).json({\n              error: true,\n              msg: 'Falha na criação'\n            });\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZm9sZGVyLmpzP2RlNzkiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcXVpcmUiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJqd3QiLCJjcmVhdGVGb2xkZXIiLCJfaWQiLCJwYXRoIiwiZGIiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQiIsImRyb3Bib3hUb2tlbiIsImZpbmRPbmUiLCJwcm9qZWN0aW9uIiwiY2xvc2UiLCJQcm9taXNlIiwicyIsInIiLCJwb3N0IiwidXJsIiwiaGVhZGVycyIsImpzb24iLCJhdXRvcmVuYW1lIiwiZXJyIiwicmVzIiwiYm9keSIsImhhbmRsZXIiLCJyZXEiLCJtZXRob2QiLCJjb29raWVzIiwidGsiLCJpZCIsInZlcmlmeSIsIkpXVFNFQ1JFVCIsImZvbGRlciIsInN0YXR1cyIsImUiLCJlcnJvciIsIm1zZyIsImVuZCIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFlRCxtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLE1BQU07QUFBRUU7QUFBRixJQUFpQkYsbUJBQU8sQ0FBQyw2Q0FBRCxDQUE5Qjs7QUFDQSxNQUFNRyxHQUFHLEdBQUdILG1CQUFPLENBQUMsa0NBQUQsQ0FBbkI7O0FBRUEsTUFBTUksWUFBWSxHQUFHLE9BQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFrQjtBQUNwQyxNQUFJO0FBQUNDLE1BQUQ7QUFBS0M7QUFBTCxNQUFlLE1BQU1OLFVBQVUsQ0FBQ08sT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWIsRUFBc0IsT0FBdEIsQ0FBbkM7QUFDQSxNQUFJO0FBQUNDO0FBQUQsTUFBaUIsTUFBTUwsRUFBRSxDQUFDTSxPQUFILENBQVc7QUFBQ1IsT0FBRyxFQUFFLElBQUlKLFFBQUosQ0FBYUksR0FBYjtBQUFOLEdBQVgsRUFBb0M7QUFBRVMsY0FBVSxFQUFDO0FBQUNULFNBQUcsRUFBQyxDQUFMO0FBQU9PLGtCQUFZLEVBQUM7QUFBcEI7QUFBYixHQUFwQyxDQUEzQjtBQUNBSixRQUFNLENBQUNPLEtBQVA7QUFDQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxDQUFELEVBQUdDLENBQUgsS0FBTztBQUN2Qm5CLFdBQU8sQ0FBQ29CLElBQVIsQ0FBYTtBQUNWQyxTQUFHLEVBQUUscURBREs7QUFFVkMsYUFBTyxFQUFDO0FBQUMsd0JBQWUsa0JBQWhCO0FBQW1DLHlCQUFpQixVQUFTVCxZQUFhO0FBQTFFLE9BRkU7QUFHVlUsVUFBSSxFQUFDO0FBQUVoQixZQUFGO0FBQVFpQixrQkFBVSxFQUFFO0FBQXBCO0FBSEssS0FBYixFQUlHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEtBQWtCO0FBQ2xCLFVBQUdGLEdBQUgsRUFBTztBQUNKTixTQUFDLENBQUNNLEdBQUQsQ0FBRDtBQUNGLE9BRkQsTUFFSztBQUNGUCxTQUFDLENBQUNTLElBQUQsQ0FBRDtBQUNGO0FBQ0gsS0FWRDtBQVdGLEdBWk0sQ0FBUDtBQWFGLENBakJEOztBQW1CZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkgsR0FBNUIsRUFBZ0M7QUFDNUMsTUFBRztBQUNBLFVBQU07QUFBRUksWUFBRjtBQUFVQyxhQUFPLEVBQUM7QUFBQ0M7QUFBRDtBQUFsQixRQUEyQkgsR0FBakM7O0FBQ0EsUUFBR0csRUFBSCxFQUFNO0FBQ0gsY0FBT0YsTUFBUDtBQUNHLGFBQUssTUFBTDtBQUNHLGNBQUc7QUFDQSxnQkFBSTtBQUFFRztBQUFGLGdCQUFTN0IsR0FBRyxDQUFDOEIsTUFBSixDQUFXRixFQUFYLEVBQWV0QixPQUFPLENBQUNDLEdBQVIsQ0FBWXdCLFNBQTNCLENBQWI7QUFDQSxnQkFBSTtBQUFFQztBQUFGLGdCQUFhUCxHQUFHLENBQUNGLElBQXJCO0FBQ0FELGVBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JkLElBQWhCLENBQXFCLE1BQU1sQixZQUFZLENBQUM0QixFQUFELEVBQUtHLE1BQUwsQ0FBdkM7QUFDRixXQUpELENBSUMsT0FBTUUsQ0FBTixFQUFRO0FBQ05aLGVBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JkLElBQWhCLENBQXFCO0FBQUNnQixtQkFBSyxFQUFFLElBQVI7QUFBY0MsaUJBQUcsRUFBRTtBQUFuQixhQUFyQjtBQUNGOztBQUNEOztBQUNIO0FBQ0dkLGFBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JJLEdBQWhCLENBQXFCLFVBQVNYLE1BQU8sY0FBckM7QUFYTjtBQWFGLEtBZEQsTUFjSztBQUNGSixTQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCZCxJQUFoQixDQUFxQjtBQUFDbUIsa0JBQVUsRUFBRSxHQUFiO0FBQWtCRixXQUFHLEVBQUU7QUFBdkIsT0FBckI7QUFDRjtBQUNILEdBbkJELENBbUJDLE9BQU1mLEdBQU4sRUFBVTtBQUNSQyxPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCZCxJQUFoQixDQUFxQjtBQUFDbUIsZ0JBQVUsRUFBRSxHQUFiO0FBQWtCRixTQUFHLEVBQUVmLEdBQUcsQ0FBQ2tCO0FBQTNCLEtBQXJCO0FBQ0Y7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9mb2xkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuY29uc3QgeyBPYmplY3RJRCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuY29uc3QgeyBsb2dpbk1vbmdvIH0gPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMvbW9uZ28nKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuXG5jb25zdCBjcmVhdGVGb2xkZXIgPSBhc3luYyhfaWQsIHBhdGgpPT57XG4gICBsZXQge2RiLCBjbGllbnR9ID0gYXdhaXQgbG9naW5Nb25nbyhwcm9jZXNzLmVudi5NT05HT0RCLCAndXNlcnMnKVxuICAgbGV0IHtkcm9wYm94VG9rZW59ID0gYXdhaXQgZGIuZmluZE9uZSh7X2lkOiBuZXcgT2JqZWN0SUQoX2lkKX0seyBwcm9qZWN0aW9uOntfaWQ6MCxkcm9wYm94VG9rZW46MX19KVxuICAgY2xpZW50LmNsb3NlKClcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocyxyKT0+e1xuICAgICAgcmVxdWVzdC5wb3N0KHtcbiAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2NyZWF0ZV9mb2xkZXJfdjJcIixcbiAgICAgICAgIGhlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXCJBdXRob3JpemF0aW9uXCI6YEJlYXJlciAke2Ryb3Bib3hUb2tlbn1gfSxcbiAgICAgICAgIGpzb246eyBwYXRoLCBhdXRvcmVuYW1lOiBmYWxzZSB9XG4gICAgICB9LCAoZXJyLCByZXMsIGJvZHkpPT57XG4gICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcihlcnIpXG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHMoYm9keSlcbiAgICAgICAgIH1cbiAgICAgIH0pXG4gICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgIHRyeXtcbiAgICAgIGNvbnN0IHsgbWV0aG9kLCBjb29raWVzOnt0a30gfSA9IHJlcTtcbiAgICAgIGlmKHRrKXtcbiAgICAgICAgIHN3aXRjaChtZXRob2Qpe1xuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICBsZXQgeyBpZCB9ID0gand0LnZlcmlmeSh0aywgcHJvY2Vzcy5lbnYuSldUU0VDUkVUKTtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGZvbGRlciB9ID0gcmVxLmJvZHlcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGNyZWF0ZUZvbGRlcihpZCwgZm9sZGVyKSlcbiAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjogdHJ1ZSwgbXNnOiAnRmFsaGEgbmEgY3JpYcOnw6NvJ30pXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1c0NvZGU6IDUwMCwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCJ9KVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBtc2c6IGVyci5tZXNzYWdlfSlcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/folder.js\n");

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