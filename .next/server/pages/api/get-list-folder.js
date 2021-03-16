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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../../models/mongo */ \"./models/mongo.js\");\n\nconst getListFolder = async (_id, path = \"\") => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let result = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      password: 0\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: \"https://api.dropboxapi.com/2/files/list_folder\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${result.dropboxToken}`\n      },\n      json: {\n        path\n      }\n    }, (err, res, body) => {\n      if (err) {\n        r(err);\n      } else {\n        s(body);\n      }\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      headers: {\n        authorization\n      }\n    } = req;\n\n    if (authorization) {\n      const token = authorization.split(' ')[1];\n\n      switch (method) {\n        case 'GET':\n          try {\n            let {\n              id\n            } = jwt.verify(token, process.env.JWTSECRET);\n            let rt = await getListFolder(id);\n            res.status(200).json(rt);\n          } catch (e) {\n            res.status(200).json([]);\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LWxpc3QtZm9sZGVyL2luZGV4LmpzP2Q1MTgiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcXVpcmUiLCJqd3QiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJnZXRMaXN0Rm9sZGVyIiwiX2lkIiwicGF0aCIsImRiIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREIiLCJyZXN1bHQiLCJmaW5kT25lIiwicHJvamVjdGlvbiIsInBhc3N3b3JkIiwiY2xvc2UiLCJQcm9taXNlIiwicyIsInIiLCJwb3N0IiwidXJsIiwiaGVhZGVycyIsImRyb3Bib3hUb2tlbiIsImpzb24iLCJlcnIiLCJyZXMiLCJib2R5IiwiaGFuZGxlciIsInJlcSIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInNwbGl0IiwiaWQiLCJ2ZXJpZnkiLCJKV1RTRUNSRVQiLCJydCIsInN0YXR1cyIsImUiLCJlbmQiLCJzdGF0dXNDb2RlIiwibXNnIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUF2Qjs7QUFDQSxNQUFNQyxHQUFHLEdBQUdELG1CQUFPLENBQUMsa0NBQUQsQ0FBbkI7O0FBQ0EsTUFBTTtBQUFFRTtBQUFGLElBQWVGLG1CQUFPLENBQUMsd0JBQUQsQ0FBNUI7O0FBQ0EsTUFBTTtBQUFFRztBQUFGLElBQWlCSCxtQkFBTyxDQUFDLGdEQUFELENBQTlCOztBQUVBLE1BQU1JLGFBQWEsR0FBRyxPQUFNQyxHQUFOLEVBQVdDLElBQUksR0FBQyxFQUFoQixLQUFxQjtBQUN4QyxNQUFJO0FBQUNDLE1BQUQ7QUFBS0M7QUFBTCxNQUFlLE1BQU1MLFVBQVUsQ0FBQ00sT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWIsRUFBc0IsT0FBdEIsQ0FBbkM7QUFDQSxNQUFJQyxNQUFNLEdBQUcsTUFBTUwsRUFBRSxDQUFDTSxPQUFILENBQVc7QUFBQ1IsT0FBRyxFQUFFLElBQUlILFFBQUosQ0FBYUcsR0FBYjtBQUFOLEdBQVgsRUFBb0M7QUFBRVMsY0FBVSxFQUFDO0FBQUNULFNBQUcsRUFBQyxDQUFMO0FBQU9VLGNBQVEsRUFBQztBQUFoQjtBQUFiLEdBQXBDLENBQW5CO0FBQ0FQLFFBQU0sQ0FBQ1EsS0FBUDtBQUNBLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPO0FBQ3ZCcEIsV0FBTyxDQUFDcUIsSUFBUixDQUFhO0FBQ1ZDLFNBQUcsRUFBRSxnREFESztBQUVWQyxhQUFPLEVBQUM7QUFBQyx3QkFBZSxrQkFBaEI7QUFBbUMseUJBQWlCLFVBQVNWLE1BQU0sQ0FBQ1csWUFBYTtBQUFqRixPQUZFO0FBR1ZDLFVBQUksRUFBQztBQUFFbEI7QUFBRjtBQUhLLEtBQWIsRUFJRyxDQUFDbUIsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBa0I7QUFDbEIsVUFBR0YsR0FBSCxFQUFPO0FBQ0pOLFNBQUMsQ0FBQ00sR0FBRCxDQUFEO0FBQ0YsT0FGRCxNQUVLO0FBQ0ZQLFNBQUMsQ0FBQ1MsSUFBRCxDQUFEO0FBQ0Y7QUFDSCxLQVZEO0FBV0YsR0FaTSxDQUFQO0FBYUYsQ0FqQkQ7O0FBbUJlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCSCxHQUE1QixFQUFnQztBQUM1QyxNQUFHO0FBQ0EsVUFBTTtBQUFFSSxZQUFGO0FBQVVSLGFBQU8sRUFBQztBQUFDUztBQUFEO0FBQWxCLFFBQXNDRixHQUE1Qzs7QUFDQSxRQUFHRSxhQUFILEVBQWlCO0FBQ2QsWUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBZDs7QUFDQSxjQUFPSCxNQUFQO0FBQ0csYUFBSyxLQUFMO0FBQ0csY0FBRztBQUNBLGdCQUFJO0FBQUVJO0FBQUYsZ0JBQVNqQyxHQUFHLENBQUNrQyxNQUFKLENBQVdILEtBQVgsRUFBa0J2QixPQUFPLENBQUNDLEdBQVIsQ0FBWTBCLFNBQTlCLENBQWI7QUFDQSxnQkFBSUMsRUFBRSxHQUFHLE1BQU1qQyxhQUFhLENBQUM4QixFQUFELENBQTVCO0FBQ0FSLGVBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JkLElBQWhCLENBQXFCYSxFQUFyQjtBQUNGLFdBSkQsQ0FJQyxPQUFNRSxDQUFOLEVBQVE7QUFDTmIsZUFBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQmQsSUFBaEIsQ0FBcUIsRUFBckI7QUFDRjs7QUFDRDs7QUFDSDtBQUNHRSxhQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCRSxHQUFoQixDQUFxQixVQUFTVixNQUFPLGNBQXJDO0FBWE47QUFhRixLQWZELE1BZUs7QUFDRkosU0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQmQsSUFBaEIsQ0FBcUI7QUFBQ2lCLGtCQUFVLEVBQUUsR0FBYjtBQUFrQkMsV0FBRyxFQUFFO0FBQXZCLE9BQXJCO0FBQ0Y7QUFDSCxHQXBCRCxDQW9CQyxPQUFNakIsR0FBTixFQUFVO0FBQ1JDLE9BQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JkLElBQWhCLENBQXFCO0FBQUNpQixnQkFBVSxFQUFFLEdBQWI7QUFBa0JDLFNBQUcsRUFBRWpCLEdBQUcsQ0FBQ2tCO0FBQTNCLEtBQXJCO0FBQ0Y7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9nZXQtbGlzdC1mb2xkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5jb25zdCB7IE9iamVjdElEIH0gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5jb25zdCB7IGxvZ2luTW9uZ28gfSA9IHJlcXVpcmUoJy4uLy4uLy4uL21vZGVscy9tb25nbycpO1xuXG5jb25zdCBnZXRMaXN0Rm9sZGVyID0gYXN5bmMoX2lkLCBwYXRoPVwiXCIpPT57XG4gICBsZXQge2RiLCBjbGllbnR9ID0gYXdhaXQgbG9naW5Nb25nbyhwcm9jZXNzLmVudi5NT05HT0RCLCAndXNlcnMnKVxuICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRiLmZpbmRPbmUoe19pZDogbmV3IE9iamVjdElEKF9pZCl9LHsgcHJvamVjdGlvbjp7X2lkOjAscGFzc3dvcmQ6MH19KVxuICAgY2xpZW50LmNsb3NlKClcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocyxyKT0+e1xuICAgICAgcmVxdWVzdC5wb3N0KHtcbiAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS8yL2ZpbGVzL2xpc3RfZm9sZGVyXCIsXG4gICAgICAgICBoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiLFwiQXV0aG9yaXphdGlvblwiOmBCZWFyZXIgJHtyZXN1bHQuZHJvcGJveFRva2VufWB9LFxuICAgICAgICAganNvbjp7IHBhdGggfVxuICAgICAgfSwgKGVyciwgcmVzLCBib2R5KT0+e1xuICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHIoZXJyKVxuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzKGJvZHkpXG4gICAgICAgICB9XG4gICAgICB9KVxuICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCwgaGVhZGVyczp7YXV0aG9yaXphdGlvbn0gfSA9IHJlcTtcbiAgICAgIGlmKGF1dGhvcml6YXRpb24pe1xuICAgICAgICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XG4gICAgICAgICBzd2l0Y2gobWV0aG9kKXtcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICBsZXQgeyBpZCB9ID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUU0VDUkVUKTtcbiAgICAgICAgICAgICAgICAgIGxldCBydCA9IGF3YWl0IGdldExpc3RGb2xkZXIoaWQpXG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihydClcbiAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFtdKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIG1zZzogXCJGYWxoYSBuYSBhdXRlbnRpY2HDp8Ojb1wifSlcbiAgICAgIH1cbiAgIH1jYXRjaChlcnIpe1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1c0NvZGU6IDUwMCwgbXNnOiBlcnIubWVzc2FnZX0pXG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/get-list-folder/index.js\n");

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