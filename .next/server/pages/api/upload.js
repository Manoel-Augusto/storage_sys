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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n\nconst upload = async (_id, path, file) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: \"https://content.dropboxapi.com/2/files/upload\",\n      headers: {\n        \"Content-Type\": \"application/octet-stream\",\n        \"Authorization\": `Bearer ${dropboxToken}`,\n        \"Dropbox-API-Arg\": JSON.stringify({\n          path,\n          mode: \"add\",\n          autorename: true,\n          mute: false,\n          strict_conflict: false\n        })\n      },\n      body: file\n    }, (err, res, body) => {\n      if (err) {\n        r(err);\n      } else {\n        s(body);\n      }\n    });\n  });\n};\n\nconst getFiles = req => {\n  const form = new formidable.IncomingForm();\n  return new Promise((s, r) => {\n    form.parse(req, (err, fields, files) => {\n      if (err) {\n        r(err);\n      } else {\n        s({\n          fields,\n          files\n        });\n      }\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'POST':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              fields: {\n                path\n              },\n              files: {\n                file\n              }\n            } = await getFiles(req);\n            await upload(id, path, fs.readFileSync(file.path));\n            res.status(200).json({\n              error: false\n            });\n          } catch (e) {\n            res.status(200).json({\n              error: true,\n              msg: 'Falha na criação'\n            });\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkLmpzP2M2MjEiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcXVpcmUiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJqd3QiLCJmcyIsImZvcm1pZGFibGUiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwidXBsb2FkIiwiX2lkIiwicGF0aCIsImZpbGUiLCJkYiIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCIiwiZHJvcGJveFRva2VuIiwiZmluZE9uZSIsInByb2plY3Rpb24iLCJjbG9zZSIsIlByb21pc2UiLCJzIiwiciIsInBvc3QiLCJ1cmwiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGUiLCJhdXRvcmVuYW1lIiwibXV0ZSIsInN0cmljdF9jb25mbGljdCIsImJvZHkiLCJlcnIiLCJyZXMiLCJnZXRGaWxlcyIsInJlcSIsImZvcm0iLCJJbmNvbWluZ0Zvcm0iLCJwYXJzZSIsImZpZWxkcyIsImZpbGVzIiwiaGFuZGxlciIsIm1ldGhvZCIsImNvb2tpZXMiLCJ0ayIsImlkIiwidmVyaWZ5IiwiSldUU0VDUkVUIiwicmVhZEZpbGVTeW5jIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZSIsIm1zZyIsImVuZCIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQWVELG1CQUFPLENBQUMsd0JBQUQsQ0FBNUI7O0FBQ0EsTUFBTTtBQUFFRTtBQUFGLElBQWlCRixtQkFBTyxDQUFDLDZDQUFELENBQTlCOztBQUNBLE1BQU1HLEdBQUcsR0FBR0gsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFuQjs7QUFDQSxNQUFNSSxFQUFFLEdBQUdKLG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFDQSxNQUFNSyxVQUFVLEdBQUdM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LEVBQUtyQyxJQUFMLEVBQVdQLEVBQUUsQ0FBQytDLFlBQUgsQ0FBZ0J2QyxJQUFJLENBQUNELElBQXJCLENBQVgsQ0FBWjtBQUNBeUIsZUFBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLG1CQUFLLEVBQUU7QUFBUixhQUFyQjtBQUNGLFdBTEQsQ0FLQyxPQUFNQyxDQUFOLEVBQVE7QUFDTm5CLGVBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxtQkFBSyxFQUFFLElBQVI7QUFBY0UsaUJBQUcsRUFBRTtBQUFuQixhQUFyQjtBQUNGOztBQUNEOztBQUNIO0FBQ0dwQixhQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkssR0FBaEIsQ0FBcUIsVUFBU1osTUFBTyxjQUFyQztBQVpOO0FBY0YsS0FmRCxNQWVLO0FBQ0ZULFNBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDSyxrQkFBVSxFQUFFLEdBQWI7QUFBa0JGLFdBQUcsRUFBRTtBQUF2QixPQUFyQjtBQUNGO0FBQ0gsR0FwQkQsQ0FvQkMsT0FBTXJCLEdBQU4sRUFBVTtBQUNSQyxPQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0ssZ0JBQVUsRUFBRSxHQUFiO0FBQWtCRixTQUFHLEVBQUVyQixHQUFHLENBQUN3QjtBQUEzQixLQUFyQjtBQUNGO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmNvbnN0IHsgT2JqZWN0SUQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKTtcbmNvbnN0IHsgbG9naW5Nb25nbyB9ID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL21vbmdvJyk7XG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhcGk6IHsgYm9keVBhcnNlcjogZmFsc2UgfX07XG5cbmNvbnN0IHVwbG9hZCA9IGFzeW5jKF9pZCwgcGF0aCwgZmlsZSk9PntcbiAgIGxldCB7ZGIsIGNsaWVudH0gPSBhd2FpdCBsb2dpbk1vbmdvKHByb2Nlc3MuZW52Lk1PTkdPREIsICd1c2VycycpXG4gICBsZXQge2Ryb3Bib3hUb2tlbn0gPSBhd2FpdCBkYi5maW5kT25lKHtfaWQ6IG5ldyBPYmplY3RJRChfaWQpfSx7IHByb2plY3Rpb246e19pZDowLGRyb3Bib3hUb2tlbjoxfX0pXG4gICBjbGllbnQuY2xvc2UoKVxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChzLHIpPT57XG4gICAgICByZXF1ZXN0LnBvc3Qoe1xuICAgICAgICAgdXJsOiBcImh0dHBzOi8vY29udGVudC5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL3VwbG9hZFwiLFxuICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6YEJlYXJlciAke2Ryb3Bib3hUb2tlbn1gLFxuICAgICAgICAgICAgXCJEcm9wYm94LUFQSS1BcmdcIjogSlNPTi5zdHJpbmdpZnkoe3BhdGgsIG1vZGU6IFwiYWRkXCIsYXV0b3JlbmFtZTogdHJ1ZSxtdXRlOiBmYWxzZSxzdHJpY3RfY29uZmxpY3Q6IGZhbHNlfSksXG4gICAgICAgICB9LFxuICAgICAgICAgYm9keTogZmlsZSxcbiAgICAgIH0sIChlcnIsIHJlcywgYm9keSk9PntcbiAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByKGVycilcbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcyhib2R5KVxuICAgICAgICAgfVxuICAgICAgfSlcbiAgIH0pXG59XG5cbmNvbnN0IGdldEZpbGVzID0gKHJlcSk9PntcbiAgIGNvbnN0IGZvcm0gPSBuZXcgZm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oKTtcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocyxyKT0+e1xuICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByKGVycilcbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcyh7ZmllbGRzLCBmaWxlc30pXG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgdHJ5e1xuICAgICAgY29uc3QgeyBtZXRob2QsIGNvb2tpZXM6e3RrfSB9ID0gcmVxO1xuICAgICAgaWYodGspe1xuICAgICAgICAgc3dpdGNoKG1ldGhvZCl7XG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRrLCBwcm9jZXNzLmVudi5KV1RTRUNSRVQpO1xuICAgICAgICAgICAgICAgICAgbGV0IHtmaWVsZHM6e3BhdGh9LCBmaWxlczp7ZmlsZX19ID0gYXdhaXQgZ2V0RmlsZXMocmVxKVxuICAgICAgICAgICAgICAgICAgYXdhaXQgdXBsb2FkKGlkLCBwYXRoLCBmcy5yZWFkRmlsZVN5bmMoZmlsZS5wYXRoKSlcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlcnJvcjogZmFsc2V9KVxuICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2Vycm9yOiB0cnVlLCBtc2c6ICdGYWxoYSBuYSBjcmlhw6fDo28nfSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBtc2c6IFwiRmFsaGEgbmEgYXV0ZW50aWNhw6fDo29cIn0pXG4gICAgICB9XG4gICB9Y2F0Y2goZXJyKXtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIG1zZzogZXJyLm1lc3NhZ2V9KVxuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/upload.js\n");

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