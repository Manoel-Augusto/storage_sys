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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/download.js");
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

/***/ "./pages/api/download.js":
/*!*******************************!*\
  !*** ./pages/api/download.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst download = async (_id, path, type) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: `https://content.dropboxapi.com/2/files/download${type === 'folder' ? '_zip' : ''}`,\n      encoding: null,\n      headers: {\n        \"Authorization\": `Bearer ${dropboxToken}`,\n        \"Dropbox-API-Arg\": JSON.stringify({\n          path\n        })\n      }\n    }, (err, res, body) => {\n      if (err) return r(err);\n      s(body);\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'POST':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              path,\n              type\n            } = req.body;\n            path = unescape(encodeURIComponent(path));\n            let buffer = await download(id, path, type);\n            res.status(200).send(buffer);\n          } catch (err) {\n            res.status(500).json({\n              statusCode: 500,\n              error: true,\n              msg: err\n            });\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        error: true,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      error: true,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZG93bmxvYWQuanM/MTMzMSJdLCJuYW1lcyI6WyJsb2dpbk1vbmdvIiwicmVxdWlyZSIsIk9iamVjdElEIiwiand0IiwicmVxdWVzdCIsImRvd25sb2FkIiwiX2lkIiwicGF0aCIsInR5cGUiLCJkYiIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCIiwiZHJvcGJveFRva2VuIiwiZmluZE9uZSIsInByb2plY3Rpb24iLCJjbG9zZSIsIlByb21pc2UiLCJzIiwiciIsInBvc3QiLCJ1cmwiLCJlbmNvZGluZyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwicmVzIiwiYm9keSIsImhhbmRsZXIiLCJyZXEiLCJtZXRob2QiLCJjb29raWVzIiwidGsiLCJpZCIsInZlcmlmeSIsIkpXVFNFQ1JFVCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYnVmZmVyIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJtc2ciLCJlbmQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTTtBQUFFQTtBQUFGLElBQWlCQyxtQkFBTyxDQUFDLDZDQUFELENBQTlCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFlRCxtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLE1BQU1FLEdBQUcsR0FBR0YsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFuQjs7QUFDQSxNQUFNRyxPQUFPLEdBQUdILG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBRUEsTUFBTUksUUFBUSxHQUFHLE9BQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFpQkMsSUFBakIsS0FBd0I7QUFDdEMsTUFBSTtBQUFDQyxNQUFEO0FBQUtDO0FBQUwsTUFBZSxNQUFNVixVQUFVLENBQUNXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFiLEVBQXNCLE9BQXRCLENBQW5DO0FBQ0EsTUFBSTtBQUFD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dXJjZXNDb250ZW50IjpbImNvbnN0IHsgbG9naW5Nb25nbyB9ID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL21vbmdvJyk7XG5jb25zdCB7IE9iamVjdElEIH0gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcbmNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNvbnN0IGRvd25sb2FkID0gYXN5bmMoX2lkLCBwYXRoLCB0eXBlKT0+e1xuICAgbGV0IHtkYiwgY2xpZW50fSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3VzZXJzJylcbiAgIGxldCB7ZHJvcGJveFRva2VufSA9IGF3YWl0IGRiLmZpbmRPbmUoe19pZDogbmV3IE9iamVjdElEKF9pZCl9LHsgcHJvamVjdGlvbjp7X2lkOjAsZHJvcGJveFRva2VuOjF9fSlcbiAgIGNsaWVudC5jbG9zZSgpXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHMscik9PntcbiAgICAgIHJlcXVlc3QucG9zdCh7XG4gICAgICAgICB1cmw6IGBodHRwczovL2NvbnRlbnQuZHJvcGJveGFwaS5jb20vMi9maWxlcy9kb3dubG9hZCR7dHlwZT09PSdmb2xkZXInID8gJ196aXAnIDogJyd9YCxcbiAgICAgICAgIGVuY29kaW5nOiBudWxsLFxuICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpgQmVhcmVyICR7ZHJvcGJveFRva2VufWAsXG4gICAgICAgICAgICBcIkRyb3Bib3gtQVBJLUFyZ1wiOiBKU09OLnN0cmluZ2lmeSh7cGF0aH0pLFxuICAgICAgICAgfSxcbiAgICAgIH0sIChlcnIsIHJlcywgYm9keSk9PntcbiAgICAgICAgIGlmKGVycikgcmV0dXJuIHIoZXJyKVxuICAgICAgICAgcyhib2R5KSBcbiAgICAgIH0pXG4gICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgIHRyeXtcbiAgICAgIGNvbnN0IHsgbWV0aG9kLCBjb29raWVzOnt0a30gfSA9IHJlcTtcbiAgICAgIGlmKHRrKXtcbiAgICAgICAgIHN3aXRjaChtZXRob2Qpe1xuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICBsZXQgeyBpZCB9ID0gand0LnZlcmlmeSh0aywgcHJvY2Vzcy5lbnYuSldUU0VDUkVUKTtcbiAgICAgICAgICAgICAgICAgIGxldCB7IHBhdGgsIHR5cGUgfSA9IHJlcS5ib2R5XG4gICAgICAgICAgICAgICAgICBwYXRoID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpKVxuICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IGF3YWl0IGRvd25sb2FkKGlkLCBwYXRoLCB0eXBlKVxuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoYnVmZmVyKVxuICAgICAgICAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBlcnJvcjogdHJ1ZSwgbXNnOiBlcnJ9KVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIGVycm9yOiB0cnVlLCBtc2c6IFwiRmFsaGEgbmEgYXV0ZW50aWNhw6fDo29cIn0pXG4gICAgICB9XG4gICB9Y2F0Y2goZXJyKXtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIGVycm9yOiB0cnVlLCBtc2c6IGVyci5tZXNzYWdlfSlcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/download.js\n");

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