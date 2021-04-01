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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/upload.js");
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

/***/ "./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst {\n  IncomingForm\n} = __webpack_require__(/*! formidable */ \"formidable\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n\nconst getFormData = req => new Promise((s, r) => {\n  const form = new IncomingForm();\n  form.parse(req, (err, fields, files) => {\n    if (err) return r(err);\n    s({\n      fields,\n      file: fs.readFileSync(files.file.path)\n    });\n  });\n});\n\nconst upload = async (_id, path, file) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    const args = JSON.stringify({\n      path,\n      mode: \"add\",\n      autorename: true,\n      mute: false,\n      strict_conflict: false\n    });\n    request.post({\n      url: \"https://content.dropboxapi.com/2/files/upload\",\n      headers: {\n        \"Content-Type\": \"application/octet-stream\",\n        \"Authorization\": `Bearer ${dropboxToken}`,\n        \"Dropbox-API-Arg\": args\n      },\n      body: file\n    }, (err, res, body) => {\n      if (err) return r(err);\n\n      try {\n        s(JSON.parse(body));\n      } catch (e) {\n        r(body);\n      }\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'POST':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              fields: {\n                path\n              },\n              file\n            } = await getFormData(req);\n            path = unescape(encodeURIComponent(path));\n            let {\n              id: idUpload\n            } = await upload(id, path, file);\n            res.status(200).json({\n              error: false,\n              idUpload\n            });\n          } catch (err) {\n            res.status(500).json({\n              statusCode: 500,\n              error: true,\n              msg: err\n            });\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        error: true,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      error: true,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkLmpzP2M2MjEiXSwibmFtZXMiOlsibG9naW5Nb25nbyIsInJlcXVpcmUiLCJJbmNvbWluZ0Zvcm0iLCJPYmplY3RJRCIsImp3dCIsInJlcXVlc3QiLCJmcyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJnZXRGb3JtRGF0YSIsInJlcSIsIlByb21pc2UiLCJzIiwiciIsImZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiZmlsZSIsInJlYWRGaWxlU3luYyIsInBhdGgiLCJ1cGxvYWQiLCJfaWQiLCJkYiIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCIiwiZHJvcGJveFRva2VuIiwiZmluZE9uZSIsInByb2plY3Rpb24iLCJjbG9zZSIsImFyZ3MiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZSIsImF1dG9yZW5hbWUiLCJtdXRlIiwic3RyaWN0X2NvbmZsaWN0IiwicG9zdCIsInVybCIsImhlYWRlcnMiLCJib2R5IiwicmVzIiwiZSIsImhhbmRsZXIiLCJtZXRob2QiLCJjb29raWVzIiwidGsiLCJpZCIsInZlcmlmeSIsIkpXVFNFQ1JFVCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaWRVcGxvYWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwibXNnIiwiZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTTtBQUFFQTtBQUFGLElBQWlCQyxtQkFBTyxDQUFDLDZDQUFELENBQTlCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFtQkQsbUJBQU8sQ0FBQyw4QkFBRCxDQUFoQzs7QUFDQSxNQUFNO0FBQUVFO0FBQUYsSUFBZUYsbUJBQU8sQ0FBQyx3QkFBRCxDQUE1Qjs7QUFDQSxNQUFNRyxHQUFHLEdBQUdILG1CQUFPLENBQUMsa0NBQUQsQ0FBbkI7O0FBQ0EsTUFBTUksT0FBTyxHQUFH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QUErQkUsU0FBRyxFQUFFNUMsR0FBRyxDQUFDOEM7QUFBeEMsS0FBckI7QUFDRjtBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VwbG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgbG9naW5Nb25nbyB9ID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL21vbmdvJyk7XG5jb25zdCB7IEluY29taW5nRm9ybSB9ID0gcmVxdWlyZSgnZm9ybWlkYWJsZScpO1xuY29uc3QgeyBPYmplY3RJRCB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHthcGk6IHtib2R5UGFyc2VyOiBmYWxzZX19XG5cbmNvbnN0IGdldEZvcm1EYXRhID0gKHJlcSkgPT4gbmV3IFByb21pc2UoKHMscik9PntcbiAgIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKCk7XG4gICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHIoZXJyKVxuICAgICAgcyh7ZmllbGRzLCBmaWxlOiBmcy5yZWFkRmlsZVN5bmMoZmlsZXMuZmlsZS5wYXRoKX0pXG4gICB9KTtcbn0pO1xuXG5jb25zdCB1cGxvYWQgPSBhc3luYyhfaWQsIHBhdGgsIGZpbGUpPT57XG4gICBsZXQge2RiLCBjbGllbnR9ID0gYXdhaXQgbG9naW5Nb25nbyhwcm9jZXNzLmVudi5NT05HT0RCLCAndXNlcnMnKVxuICAgbGV0IHtkcm9wYm94VG9rZW59ID0gYXdhaXQgZGIuZmluZE9uZSh7X2lkOiBuZXcgT2JqZWN0SUQoX2lkKX0seyBwcm9qZWN0aW9uOntfaWQ6MCxkcm9wYm94VG9rZW46MX19KVxuICAgY2xpZW50LmNsb3NlKClcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocyxyKT0+e1xuICAgICAgY29uc3QgYXJncyA9IEpTT04uc3RyaW5naWZ5KHtwYXRoLCBtb2RlOiBcImFkZFwiLGF1dG9yZW5hbWU6IHRydWUsbXV0ZTogZmFsc2Usc3RyaWN0X2NvbmZsaWN0OiBmYWxzZX0pXG4gICAgICByZXF1ZXN0LnBvc3Qoe1xuICAgICAgICAgdXJsOiBcImh0dHBzOi8vY29udGVudC5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL3VwbG9hZFwiLFxuICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6YEJlYXJlciAke2Ryb3Bib3hUb2tlbn1gLFxuICAgICAgICAgICAgXCJEcm9wYm94LUFQSS1BcmdcIjogYXJncyxcbiAgICAgICAgIH0sXG4gICAgICAgICBib2R5OiBmaWxlLFxuICAgICAgfSwgKGVyciwgcmVzLCBib2R5KT0+e1xuICAgICAgICAgaWYoZXJyKSByZXR1cm4gcihlcnIpXG4gICAgICAgICB0cnl7XG4gICAgICAgICAgICBzKEpTT04ucGFyc2UoYm9keSkpIFxuICAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgcihib2R5KVxuICAgICAgICAgfVxuICAgICAgfSlcbiAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgdHJ5e1xuICAgICAgY29uc3QgeyBtZXRob2QsIGNvb2tpZXM6e3RrfSB9ID0gcmVxO1xuICAgICAgaWYodGspe1xuICAgICAgICAgc3dpdGNoKG1ldGhvZCl7XG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRrLCBwcm9jZXNzLmVudi5KV1RTRUNSRVQpO1xuICAgICAgICAgICAgICAgICAgbGV0IHtmaWVsZHM6e3BhdGh9LCBmaWxlfSA9IGF3YWl0IGdldEZvcm1EYXRhKHJlcSlcbiAgICAgICAgICAgICAgICAgIHBhdGggPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQocGF0aCkpXG4gICAgICAgICAgICAgICAgICBsZXQge2lkOmlkVXBsb2FkfSA9IGF3YWl0IHVwbG9hZChpZCwgcGF0aCwgZmlsZSlcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjogZmFsc2UsIGlkVXBsb2FkfSlcbiAgICAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1c0NvZGU6IDUwMCwgZXJyb3I6IHRydWUsIG1zZzogZXJyfSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBlcnJvcjogdHJ1ZSwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCJ9KVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBlcnJvcjogdHJ1ZSwgbXNnOiBlcnIubWVzc2FnZX0pXG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/upload.js\n");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWRhYmxlXCI/ZWI3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmb3JtaWRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlkYWJsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///formidable\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

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