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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/share-download.js");
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

/***/ "./pages/api/share-download.js":
/*!*************************************!*\
  !*** ./pages/api/share-download.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst download = async (user_id, file_id, type) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(user_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: `https://content.dropboxapi.com/2/files/download${type === 'folder' ? '_zip' : ''}`,\n      encoding: null,\n      headers: {\n        \"Authorization\": `Bearer ${dropboxToken}`,\n        \"Dropbox-API-Arg\": JSON.stringify({\n          path: file_id\n        })\n      }\n    }, (err, res, body) => {\n      if (err) return r(err);\n      s(body);\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method\n    } = req;\n\n    switch (method) {\n      case 'POST':\n        try {\n          let {\n            user_id,\n            file_id,\n            type\n          } = req.body;\n          let buffer = await download(user_id, file_id, type);\n          res.status(200).send(buffer);\n        } catch (err) {\n          res.status(500).json({\n            statusCode: 500,\n            error: true,\n            msg: err\n          });\n        }\n\n        break;\n\n      default:\n        res.status(405).end(`Method ${method} Not Allowed`);\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      error: true,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2hhcmUtZG93bmxvYWQuanM/ZTA1MSJdLCJuYW1lcyI6WyJsb2dpbk1vbmdvIiwicmVxdWlyZSIsIk9iamVjdElEIiwicmVxdWVzdCIsImRvd25sb2FkIiwidXNlcl9pZCIsImZpbGVfaWQiLCJ0eXBlIiwiZGIiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQiIsImRyb3Bib3hUb2tlbiIsImZpbmRPbmUiLCJfaWQiLCJwcm9qZWN0aW9uIiwiY2xvc2UiLCJQcm9taXNlIiwicyIsInIiLCJwb3N0IiwidXJsIiwiZW5jb2RpbmciLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhdGgiLCJlcnIiLCJyZXMiLCJib2R5IiwiaGFuZGxlciIsInJlcSIsIm1ldGhvZCIsImJ1ZmZlciIsInN0YXR1cyIsInNlbmQiLCJqc29uIiwic3RhdHVzQ29kZSIsImVycm9yIiwibXNnIiwiZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFpQkMsbUJBQU8sQ0FBQyw2Q0FBRCxDQUE5Qjs7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBZUQsbUJBQU8sQ0FBQyx3QkFBRCxDQUE1Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBRUEsTUFBTUcsUUFBUSxHQUFHLE9BQU1DLE9BQU4sRUFBZUMsT0FBZixFQUF3QkMsSUFBeEIsS0FBK0I7QUFDN0MsTUFBSTtBQUFDQyxNQUFEO0FBQUtDO0FBQUwsTUFBZSxNQUFNVCxVQUFVLENBQUNVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFiLEVBQXNCLE9BQXRCLENBQW5DO0FBQ0EsTUFBSTtBQUFDQztBQUFELE1BQWlCLE1BQU1MLEVBQUUsQ0FBQ00sT0FBSCxDQUFXO0FBQUNDLE9BQUcsRUFBRSxJQUFJYixRQUFKLENBQWFHLE9BQWI7QUFBTixHQUFYLEVBQXdDO0FBQUVXLGNBQVUsRUFBQztBQUFDRCxTQUFHLEVBQUMsQ0FBTDtBQUFPRixrQkFBWSxFQUFDO0FBQXBCO0FBQWIsR0FBeEMsQ0FBM0I7QUFDQUosUUFBTSxDQUFDUSxLQUFQO0FBQ0EsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILEtBQU87QUFDdkJqQixXQUFPLENBQUNrQixJQUFSLENBQWE7QUFDVkMsU0FBRyxFQUFHLGtEQUFpRGYsSUFBSSxLQUFHLFFBQVAsR0FBa0IsTUFBbEIsR0FBMkIsRUFBRyxFQUQzRTtBQUVWZ0IsY0FBUSxFQUFFLElBRkE7QUFHVkMsYUFBTyxFQUFDO0FBQ0wseUJBQWlCLFVBQVNYLFlBQWEsRUFEbEM7QUFFTCwyQkFBbUJZLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLGNBQUksRUFBRXJCO0FBQVAsU0FBZjtBQUZkO0FBSEUsS0FBYixFQU9HLENBQUNzQixHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFrQjtBQUNsQixVQUFHRixHQUFILEVBQVEsT0FBT1IsQ0FBQyxDQUFDUSxHQUFELENBQVI7QUFDUlQsT0FBQyxDQUFDVyxJQUFELENBQUQ7QUFDRixLQVZEO0FBV0YsR0FaTSxDQUFQO0FBYUYsQ0FqQkQ7O0FBbUJlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCSCxHQUE1QixFQUFnQztBQUM1QyxNQUFHO0FBQ0EsVUFBTTtBQUFFSTtBQUFGLFFBQWFELEdBQW5COztBQUNBLFlBQU9DLE1BQVA7QUFDRyxXQUFLLE1BQUw7QUFDRyxZQUFHO0FBQ0EsY0FBSTtBQUFFNUIsbUJBQUY7QUFBV0MsbUJBQVg7QUFBb0JDO0FBQXBCLGNBQTZCeUIsR0FBRyxDQUFDRixJQUFyQztBQUNBLGNBQUlJLE1BQU0sR0FBRyxNQUFNOUIsUUFBUSxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBbUJDLElBQW5CLENBQTNCO0FBQ0FzQixhQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkYsTUFBckI7QUFDRixTQUpELENBSUMsT0FBTU4sR0FBTixFQUFVO0FBQ1JDLGFBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JFLElBQWhCLENBQXFCO0FBQUNDLHNCQUFVLEVBQUUsR0FBYjtBQUFrQkMsaUJBQUssRUFBRSxJQUF6QjtBQUErQkMsZUFBRyxFQUFFWjtBQUFwQyxXQUFyQjtBQUNGOztBQUNEOztBQUNIO0FBQ0dDLFdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JNLEdBQWhCLENBQXFCLFVBQVNSLE1BQU8sY0FBckM7QUFYTjtBQWFGLEdBZkQsQ0FlQyxPQUFNTCxHQUFOLEVBQVU7QUFDUkMsT0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkUsSUFBaEIsQ0FBcUI7QUFBQ0MsZ0JBQVUsRUFBRSxHQUFiO0FBQWtCQyxXQUFLLEVBQUUsSUFBekI7QUFBK0JDLFNBQUcsRUFBRVosR0FBRyxDQUFDYztBQUF4QyxLQUFyQjtBQUNGO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2hhcmUtZG93bmxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGxvZ2luTW9uZ28gfSA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9tb25nbycpO1xuY29uc3QgeyBPYmplY3RJRCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcblxuY29uc3QgZG93bmxvYWQgPSBhc3luYyh1c2VyX2lkLCBmaWxlX2lkLCB0eXBlKT0+e1xuICAgbGV0IHtkYiwgY2xpZW50fSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3VzZXJzJylcbiAgIGxldCB7ZHJvcGJveFRva2VufSA9IGF3YWl0IGRiLmZpbmRPbmUoe19pZDogbmV3IE9iamVjdElEKHVzZXJfaWQpfSx7IHByb2plY3Rpb246e19pZDowLGRyb3Bib3hUb2tlbjoxfX0pXG4gICBjbGllbnQuY2xvc2UoKVxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChzLHIpPT57XG4gICAgICByZXF1ZXN0LnBvc3Qoe1xuICAgICAgICAgdXJsOiBgaHR0cHM6Ly9jb250ZW50LmRyb3Bib3hhcGkuY29tLzIvZmlsZXMvZG93bmxvYWQke3R5cGU9PT0nZm9sZGVyJyA/ICdfemlwJyA6ICcnfWAsXG4gICAgICAgICBlbmNvZGluZzogbnVsbCxcbiAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6YEJlYXJlciAke2Ryb3Bib3hUb2tlbn1gLFxuICAgICAgICAgICAgXCJEcm9wYm94LUFQSS1BcmdcIjogSlNPTi5zdHJpbmdpZnkoe3BhdGg6IGZpbGVfaWR9KSxcbiAgICAgICAgIH0sXG4gICAgICB9LCAoZXJyLCByZXMsIGJvZHkpPT57XG4gICAgICAgICBpZihlcnIpIHJldHVybiByKGVycilcbiAgICAgICAgIHMoYm9keSkgXG4gICAgICB9KVxuICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICAgICAgc3dpdGNoKG1ldGhvZCl7XG4gICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgIGxldCB7IHVzZXJfaWQsIGZpbGVfaWQsIHR5cGUgfSA9IHJlcS5ib2R5XG4gICAgICAgICAgICAgICBsZXQgYnVmZmVyID0gYXdhaXQgZG93bmxvYWQodXNlcl9pZCwgZmlsZV9pZCwgdHlwZSlcbiAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGJ1ZmZlcilcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1c0NvZGU6IDUwMCwgZXJyb3I6IHRydWUsIG1zZzogZXJyfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBlcnJvcjogdHJ1ZSwgbXNnOiBlcnIubWVzc2FnZX0pXG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/share-download.js\n");

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