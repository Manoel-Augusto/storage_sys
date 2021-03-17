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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth.js");
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

/***/ "./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nconst {\n  serialize\n} = __webpack_require__(/*! cookie */ \"cookie\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst auth = async (email, password) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let emailExist = await db.findOne({\n    email\n  });\n  client.close();\n\n  if (emailExist) {\n    let {\n      _id: id,\n      password: password_crypt\n    } = emailExist,\n        rest = _objectWithoutProperties(emailExist, [\"_id\", \"password\"]);\n\n    if (bcrypt.compareSync(password, password_crypt)) {\n      let token = jwt.sign({\n        id\n      }, process.env.JWTSECRET, {\n        expiresIn: '1d'\n      });\n      return _objectSpread({\n        token\n      }, rest);\n    }\n  }\n\n  return {\n    error: true\n  };\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method\n    } = req;\n\n    if (method === 'POST') {\n      let {\n        email,\n        password\n      } = req.body;\n\n      let _await$auth = await auth(email, password),\n          {\n        token\n      } = _await$auth,\n          rest = _objectWithoutProperties(_await$auth, [\"token\"]);\n\n      if (token) {\n        res.setHeader('Set-Cookie', serialize('tk', token, {\n          httpOnly: true,\n          secure: false,\n          sameSite: 'strict',\n          maxAge: 3600,\n          path: '/'\n        }));\n      }\n\n      res.status(200).json(rest);\n    } else {\n      res.status(405).end(`Method ${method} Not Allowed`);\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC5qcz83ZmFlIl0sIm5hbWVzIjpbImp3dCIsInJlcXVpcmUiLCJiY3J5cHQiLCJzZXJpYWxpemUiLCJsb2dpbk1vbmdvIiwiYXV0aCIsImVtYWlsIiwicGFzc3dvcmQiLCJkYiIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCIiwiZW1haWxFeGlzdCIsImZpbmRPbmUiLCJjbG9zZSIsIl9pZCIsImlkIiwicGFzc3dvcmRfY3J5cHQiLCJyZXN0IiwiY29tcGFyZVN5bmMiLCJ0b2tlbiIsInNpZ24iLCJKV1RTRUNSRVQiLCJleHBpcmVzSW4iLCJlcnJvciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5Iiwic2V0SGVhZGVyIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIiwiZW5kIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1zZyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFuQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsTUFBTTtBQUFFRTtBQUFGLElBQWdCRixtQkFBTyxDQUFDLHNCQUFELENBQTdCOztBQUNBLE1BQU07QUFBRUc7QUFBRixJQUFpQkgsbUJBQU8sQ0FBQyw2Q0FBRCxDQUE5Qjs7QUFFQSxNQUFNSSxJQUFJLEdBQUcsT0FBTUMsS0FBTixFQUFhQyxRQUFiLEtBQXdCO0FBQ2xDLE1BQUk7QUFBQ0MsTUFBRDtBQUFLQztBQUFMLE1BQWUsTUFBTUwsVUFBVSxDQUFDTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBYixFQUFzQixPQUF0QixDQUFuQztBQUNBLE1BQUlDLFVBQVUsR0FBRyxNQUFNTCxFQUFFLENBQUNNLE9BQUgsQ0FBVztBQUFDUjtBQUFELEdBQVgsQ0FBdkI7QUFDQUcsUUFBTSxDQUFDTSxLQUFQOztBQUNBLE1BQUdGLFVBQUgsRUFBYztBQUNYLFFBQUk7QUFBRUcsU0FBRyxFQUFDQyxFQUFOO0FBQVVWLGNBQVEsRUFBQ1c7QUFBbkIsUUFBK0NMLFVBQW5EO0FBQUEsUUFBMENNLElBQTFDLDRCQUFtRE4sVUFBbkQ7O0FBQ0EsUUFBR1gsTUFBTSxDQUFDa0IsV0FBUCxDQUFtQmIsUUFBbkIsRUFBNkJXLGNBQTdCLENBQUgsRUFBZ0Q7QUFDN0MsVUFBSUcsS0FBSyxHQUFHckIsR0FBRyxDQUFDc0IsSUFBSixDQUFTO0FBQUNMO0FBQUQsT0FBVCxFQUFlUCxPQUFPLENBQUNDLEdBQVIsQ0FBWVksU0FBM0IsRUFBc0M7QUFBQ0MsaUJBQVMsRUFBRTtBQUFaLE9BQXRDLENBQVo7QUFDQTtBQUFRSDtBQUFSLFNBQWtCRixJQUFsQjtBQUNGO0FBQ0g7O0FBQ0QsU0FBTztBQUFDTSxTQUFLLEVBQUU7QUFBUixHQUFQO0FBQ0YsQ0FaRDs7QUFjZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7QUFDNUMsTUFBRztBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFhRixHQUFuQjs7QUFDQSxRQUFHRSxNQUFNLEtBQUssTUFBZCxFQUFxQjtBQUNsQixVQUFJO0FBQUV2QixhQUFGO0FBQVNDO0FBQVQsVUFBc0JvQixHQUFHLENBQUNHLElBQTlCOztBQUNBLHdCQUF5QixNQUFNekIsSUFBSSxDQUFDQyxLQUFELEVBQU9DLFFBQVAsQ0FBbkM7QUFBQSxVQUFJO0FBQUVjO0FBQUYsT0FBSjtBQUFBLFVBQWdCRixJQUFoQjs7QUFDQSxVQUFHRSxLQUFILEVBQVM7QUFDTk8sV0FBRyxDQUFDRyxTQUFKLENBQWMsWUFBZCxFQUE0QjVCLFNBQVMsQ0FBQyxJQUFELEVBQU9rQixLQUFQLEVBQWM7QUFDaERXLGtCQUFRLEVBQUUsSUFEc0M7QUFFaERDLGdCQUFNLE9BRjBDO0FBR2hEQyxrQkFBUSxFQUFFLFFBSHNDO0FBSWhEQyxnQkFBTSxFQUFFLElBSndDO0FBS2hEQyxjQUFJLEVBQUU7QUFMMEMsU0FBZCxDQUFyQztBQU9GOztBQUNEUixTQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQm5CLElBQXJCO0FBQ0YsS0FiRCxNQWFLO0FBQ0ZTLFNBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JFLEdBQWhCLENBQXFCLFVBQVNWLE1BQU8sY0FBckM7QUFDRjtBQUNILEdBbEJELENBa0JDLE9BQU1XLEdBQU4sRUFBVTtBQUNSWixPQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDRyxnQkFBVSxFQUFFLEdBQWI7QUFBa0JDLFNBQUcsRUFBRUYsR0FBRyxDQUFDRztBQUEzQixLQUFyQjtBQUNGO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0Jyk7XG5jb25zdCB7IHNlcmlhbGl6ZSB9ID0gcmVxdWlyZSgnY29va2llJyk7XG5jb25zdCB7IGxvZ2luTW9uZ28gfSA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9tb25nbycpO1xuXG5jb25zdCBhdXRoID0gYXN5bmMoZW1haWwsIHBhc3N3b3JkKT0+e1xuICAgbGV0IHtkYiwgY2xpZW50fSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3VzZXJzJylcbiAgIGxldCBlbWFpbEV4aXN0ID0gYXdhaXQgZGIuZmluZE9uZSh7ZW1haWx9KVxuICAgY2xpZW50LmNsb3NlKClcbiAgIGlmKGVtYWlsRXhpc3Qpe1xuICAgICAgbGV0IHsgX2lkOmlkLCBwYXNzd29yZDpwYXNzd29yZF9jcnlwdCwgLi4ucmVzdCB9ID0gZW1haWxFeGlzdFxuICAgICAgaWYoYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCBwYXNzd29yZF9jcnlwdCkpe1xuICAgICAgICAgbGV0IHRva2VuID0gand0LnNpZ24oe2lkfSwgcHJvY2Vzcy5lbnYuSldUU0VDUkVULCB7ZXhwaXJlc0luOiAnMWQnfSlcbiAgICAgICAgIHJldHVybiB7dG9rZW4sIC4uLnJlc3R9XG4gICAgICB9XG4gICB9XG4gICByZXR1cm4ge2Vycm9yOiB0cnVlfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgIHRyeXtcbiAgICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG4gICAgICBpZihtZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgICBsZXQgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG4gICAgICAgICBsZXQgeyB0b2tlbiwgLi4ucmVzdCB9ID0gYXdhaXQgYXV0aChlbWFpbCxwYXNzd29yZClcbiAgICAgICAgIGlmKHRva2VuKXtcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBzZXJpYWxpemUoJ3RrJywgdG9rZW4sIHtcbiAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICAgICAgICAgICAgIG1heEFnZTogMzYwMCxcbiAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgfVxuICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdClcbiAgICAgIH1lbHNle1xuICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICB9XG4gICB9Y2F0Y2goZXJyKXtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdGF0dXNDb2RlOiA1MDAsIG1zZzogZXJyLm1lc3NhZ2V9KVxuICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

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