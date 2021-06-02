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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/share-link.js");
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

/***/ "./pages/api/share-link.js":
/*!*********************************!*\
  !*** ./pages/api/share-link.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst saltRounds = 54321;\n\nconst shareLink = async (user_id, id, name, type, active) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'share');\n\n  if (active) {\n    let link = bcrypt.genSaltSync(saltRounds);\n    await db.insert({\n      file_id: id,\n      user_id,\n      name,\n      type,\n      link\n    });\n    return {\n      error: false,\n      link\n    };\n  }\n\n  await db.remove({\n    file_id: id\n  });\n  client.close();\n  return {\n    error: false,\n    link: ''\n  };\n};\n\nconst getLink = async link => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'share');\n  let rt = await db.findOne({\n    link\n  }, {\n    projection: {\n      _id: 0,\n      name: 1,\n      type: 1,\n      file_id: 1,\n      user_id: 1\n    }\n  });\n  client.close();\n  if (rt) return _objectSpread({\n    error: false\n  }, rt);\n  return {\n    error: true\n  };\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    switch (method) {\n      case 'POST':\n        if (tk) {\n          try {\n            let {\n              id: user_id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              id,\n              name,\n              type,\n              active\n            } = req.body;\n            res.status(200).json(await shareLink(user_id, id, name, type, active));\n          } catch (e) {\n            res.status(200).json({\n              error: true,\n              msg: 'Falha na criação'\n            });\n          }\n        } else {\n          res.status(500).json({\n            statusCode: 500,\n            error: true,\n            msg: \"Falha na autenticação\"\n          });\n        }\n\n        break;\n\n      case 'GET':\n        let {\n          link\n        } = req.query;\n        res.status(200).json(await getLink(link));\n        break;\n\n      default:\n        res.status(405).end(`Method ${method} Not Allowed`);\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2hhcmUtbGluay5qcz84MDk3Il0sIm5hbWVzIjpbInJlcXVlc3QiLCJyZXF1aXJlIiwiYmNyeXB0Iiwiand0IiwiT2JqZWN0SUQiLCJsb2dpbk1vbmdvIiwic2FsdFJvdW5kcyIsInNoYXJlTGluayIsInVzZXJfaWQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiYWN0aXZlIiwiZGIiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQiIsImxpbmsiLCJnZW5TYWx0U3luYyIsImluc2VydCIsImZpbGVfaWQiLCJlcnJvciIsInJlbW92ZSIsImNsb3NlIiwiZ2V0TGluayIsInJ0IiwiZmluZE9uZSIsInByb2plY3Rpb24iLCJfaWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29va2llcyIsInRrIiwidmVyaWZ5IiwiSldUU0VDUkVUIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlIiwibXNnIiwic3RhdHVzQ29kZSIsInF1ZXJ5IiwiZW5kIiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1FLEdBQUcsR0FBR0YsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFuQjs7QUFDQSxNQUFNO0FBQUVHO0FBQUYsSUFBZUgsbUJBQU8sQ0FBQyx3QkFBRCxDQUE1Qjs7QUFDQSxNQUFNO0FBQUVJO0FBQUYsSUFBaUJKLG1CQUFPLENBQUMsNkNBQUQsQ0FBOUI7O0FBQ0EsTUFBTUssVUFBVSxHQUFHLEtBQW5COztBQUVBLE1BQU1DLFNBQVMsR0FBRyxPQUFNQyxPQUFOLEVBQWVDLEVBQWYsRUFBbUJDLElBQW5CLEVBQXlCQyxJQUF6QixFQUErQkMsTUFBL0IsS0FBd0M7QUFDdkQsTUFBSTtBQUFDQyxNQUFEO0FBQUtDO0FB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YSxHQUFHLENBQUNhLEtBQW5CO0FBQ0FaLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU1mLE9BQU8sQ0FBQ1AsSUFBRCxDQUFsQztBQUNBOztBQUNIO0FBQ0djLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JNLEdBQWhCLENBQXFCLFVBQVNaLE1BQU8sY0FBckM7QUFuQk47QUFxQkYsR0F2QkQsQ0F1QkMsT0FBTWEsR0FBTixFQUFVO0FBQ1JkLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNHLGdCQUFVLEVBQUUsR0FBYjtBQUFrQkQsU0FBRyxFQUFFSSxHQUFHLENBQUNDO0FBQTNCLEtBQXJCO0FBQ0Y7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zaGFyZS1saW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5jb25zdCB7IE9iamVjdElEIH0gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5jb25zdCB7IGxvZ2luTW9uZ28gfSA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9tb25nbycpO1xuY29uc3Qgc2FsdFJvdW5kcyA9IDU0MzIxO1xuXG5jb25zdCBzaGFyZUxpbmsgPSBhc3luYyh1c2VyX2lkLCBpZCwgbmFtZSwgdHlwZSwgYWN0aXZlKT0+e1xuICAgbGV0IHtkYiwgY2xpZW50fSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3NoYXJlJylcbiAgIGlmKGFjdGl2ZSl7XG4gICAgICBsZXQgbGluayA9IGJjcnlwdC5nZW5TYWx0U3luYyhzYWx0Um91bmRzKTtcbiAgICAgIGF3YWl0IGRiLmluc2VydCh7ZmlsZV9pZDogaWQsIHVzZXJfaWQsIG5hbWUsIHR5cGUsIGxpbmt9KVxuICAgICAgcmV0dXJuIHtlcnJvcjogZmFsc2UsIGxpbmt9XG4gICB9XG4gICBhd2FpdCBkYi5yZW1vdmUoe2ZpbGVfaWQ6IGlkfSlcbiAgIGNsaWVudC5jbG9zZSgpXG4gICByZXR1cm4ge2Vycm9yOiBmYWxzZSwgbGluazogJyd9XG59XG5cbmNvbnN0IGdldExpbmsgPSBhc3luYyhsaW5rKSA9PiB7XG4gICBsZXQge2RiLCBjbGllbnR9ID0gYXdhaXQgbG9naW5Nb25nbyhwcm9jZXNzLmVudi5NT05HT0RCLCAnc2hhcmUnKVxuICAgbGV0IHJ0ID0gYXdhaXQgZGIuZmluZE9uZSh7bGlua30sIHtwcm9qZWN0aW9uOntfaWQ6MCxuYW1lOjEsdHlwZToxLGZpbGVfaWQ6MSx1c2VyX2lkOjF9fSlcbiAgIGNsaWVudC5jbG9zZSgpXG4gICBpZihydCkgcmV0dXJuIHtlcnJvcjogZmFsc2UsIC4uLnJ0fVxuICAgcmV0dXJuIHtlcnJvcjogdHJ1ZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCwgY29va2llczp7dGt9IH0gPSByZXE7XG4gICAgICBzd2l0Y2gobWV0aG9kKXtcbiAgICAgICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgICAgICAgaWYodGspe1xuICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgbGV0IHsgaWQ6dXNlcl9pZCB9ID0gand0LnZlcmlmeSh0aywgcHJvY2Vzcy5lbnYuSldUU0VDUkVUKTtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGlkLCBuYW1lLCB0eXBlLCBhY3RpdmUgfSA9IHJlcS5ib2R5XG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCBzaGFyZUxpbmsodXNlcl9pZCwgaWQsIG5hbWUsIHR5cGUsIGFjdGl2ZSkpXG4gICAgICAgICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ZXJyb3I6IHRydWUsIG1zZzogJ0ZhbGhhIG5hIGNyaWHDp8Ojbyd9KVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7c3RhdHVzQ29kZTogNTAwLCBlcnJvcjogdHJ1ZSwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICAgICAgbGV0IHsgbGluayB9ID0gcmVxLnF1ZXJ5XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhd2FpdCBnZXRMaW5rKGxpbmspKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICB9XG4gICB9Y2F0Y2goZXJyKXtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIG1zZzogZXJyLm1lc3NhZ2V9KVxuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/share-link.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

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