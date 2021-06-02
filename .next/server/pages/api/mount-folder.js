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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/mount-folder.js");
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

/***/ "./pages/api/mount-folder.js":
/*!***********************************!*\
  !*** ./pages/api/mount-folder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst mountFolder = async (_id, shared_folder_id) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n  return new Promise((s, r) => {\n    request.post({\n      url: \"https://api.dropboxapi.com/2/sharing/mount_folder\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${dropboxToken}`\n      },\n      json: {\n        shared_folder_id\n      }\n    }, (err, res, body) => {\n      if (err) {\n        r(err);\n      } else {\n        s(body);\n      }\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'POST':\n          try {\n            let {\n              id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              shared_folder_id\n            } = req.body;\n            res.status(200).json(await mountFolder(id, shared_folder_id));\n          } catch (e) {\n            res.status(200).json({\n              error: true,\n              msg: 'Falha na criação'\n            });\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        error: true,\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      error: true,\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbW91bnQtZm9sZGVyLmpzP2VlYjYiXSwibmFtZXMiOlsicmVxdWVzdCIsInJlcXVpcmUiLCJPYmplY3RJRCIsImxvZ2luTW9uZ28iLCJqd3QiLCJtb3VudEZvbGRlciIsIl9pZCIsInNoYXJlZF9mb2xkZXJfaWQiLCJkYiIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCIiwiZHJvcGJveFRva2VuIiwiZmluZE9uZSIsInByb2plY3Rpb24iLCJjbG9zZSIsIlByb21pc2UiLCJzIiwiciIsInBvc3QiLCJ1cmwiLCJoZWFkZXJzIiwianNvbiIsImVyciIsInJlcyIsImJvZHkiLCJoYW5kbGVyIiwicmVxIiwibWV0aG9kIiwiY29va2llcyIsInRrIiwiaWQiLCJ2ZXJpZnkiLCJKV1RTRUNSRVQiLCJzdGF0dXMiLCJlIiwiZXJyb3IiLCJtc2ciLCJlbmQiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUF2Qjs7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBZUQsbUJBQU8sQ0FBQyx3QkFBRCxDQUE1Qjs7QUFDQSxNQUFNO0FBQUVFO0FBQUYsSUFBaUJGLG1CQUFPLENBQUMsNkNBQUQsQ0FBOUI7O0FBQ0EsTUFBTUcsR0FBRyxHQUFHSCxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUVBLE1BQU1JLFdBQVcsR0FBRyxPQUFNQyxHQUFOLEVBQVdDLGdCQUFYLEtBQThCO0FBQy9DLE1BQUk7QUFBQ0MsTUFBRDtBQUFLQztBQUFMLE1BQWUsTUFBTU4sVUFBVSxDQUFDTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBYixFQUFzQixPQUF0QixDQUFuQztBQUNBLE1BQUk7QUFBQ0M7QUFBRCxNQUFpQixNQUFNTCxFQUFFLENBQUNNLE9BQUgsQ0FBVztBQUFDUixPQUFHLEVBQUUsSUFBSUosUUFBSixDQUFhSSxHQUFiO0FBQU4sR0FBWCxFQUFvQztBQUFFUyxjQUFVLEVBQUM7QUFBQ1QsU0FBRyxFQUFDLENBQUw7QUFBT08sa0JBQVksRUFBQztBQUFwQjtBQUFiLEdBQXBDLENBQTNCO0FBQ0FKLFFBQU0sQ0FBQ08sS0FBUDtBQUNBLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPO0FBQ3ZCbkIsV0FBTyxDQUFDb0IsSUFBUixDQUFhO0FBQ1ZDLFNBQUcsRUFBRSxtREFESztBQUVWQyxhQUFPLEVBQUM7QUFBQyx3QkFBZSxrQkFBaEI7QUFBbUMseUJBQWlCLFVBQVNULFlBQWE7QUFBMUUsT0FGRTtBQUdWVSxVQUFJLEVBQUM7QUFBRWhCO0FBQUY7QUFISyxLQUFiLEVBSUcsQ0FBQ2lCLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEtBQWtCO0FBQ2xCLFVBQUdGLEdBQUgsRUFBTztBQUNKTCxTQUFDLENBQUNLLEdBQUQsQ0FBRDtBQUNGLE9BRkQsTUFFSztBQUNGTixTQUFDLENBQUNRLElBQUQsQ0FBRDtBQUNGO0FBQ0gsS0FWRDtBQVdGLEdBWk0sQ0FBUDtBQWFGLENBakJEOztBQW1CZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkgsR0FBNUIsRUFBZ0M7QUFDNUMsTUFBRztBQUNBLFVBQU07QUFBRUksWUFBRjtBQUFVQyxhQUFPLEVBQUM7QUFBQ0M7QUFBRDtBQUFsQixRQUEyQkgsR0FBakM7O0FBQ0EsUUFBR0csRUFBSCxFQUFNO0FBQ0gsY0FBT0YsTUFBUDtBQUNHLGFBQUssTUFBTDtBQUNHLGNBQUc7QUFDQSxnQkFBSTtBQUFFRztBQUFGLGdCQUFTNUIsR0FBRyxDQUFDNkIsTUFBSixDQUFXRixFQUFYLEVBQWVyQixPQUFPLENBQUNDLEdBQVIsQ0FBWXVCLFNBQTNCLENBQWI7QUFDQSxnQkFBSTtBQUFFM0I7QUFBRixnQkFBdUJxQixHQUFHLENBQUNGLElBQS9CO0FBQ0FELGVBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JaLElBQWhCLENBQXFCLE1BQU1sQixXQUFXLENBQUMyQixFQUFELEVBQUt6QixnQkFBTCxDQUF0QztBQUNGLFdBSkQsQ0FJQyxPQUFNNkIsQ0FBTixFQUFRO0FBQ05YLGVBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JaLElBQWhCLENBQXFCO0FBQUNjLG1CQUFLLEVBQUUsSUFBUjtBQUFjQyxpQkFBRyxFQUFFO0FBQW5CLGFBQXJCO0FBQ0Y7O0FBQ0Q7O0FBQ0g7QUFDR2IsYUFBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkksR0FBaEIsQ0FBcUIsVUFBU1YsTUFBTyxjQUFyQztBQVhOO0FBYUYsS0FkRCxNQWNLO0FBQ0ZKLFNBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JaLElBQWhCLENBQXFCO0FBQUNjLGFBQUssRUFBRSxJQUFSO0FBQWNHLGtCQUFVLEVBQUUsR0FBMUI7QUFBK0JGLFdBQUcsRUFBRTtBQUFwQyxPQUFyQjtBQUNGO0FBQ0gsR0FuQkQsQ0FtQkMsT0FBTWQsR0FBTixFQUFVO0FBQ1JDLE9BQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JaLElBQWhCLENBQXFCO0FBQUNjLFdBQUssRUFBRSxJQUFSO0FBQWNHLGdCQUFVLEVBQUUsR0FBMUI7QUFBK0JGLFNBQUcsRUFBRWQsR0FBRyxDQUFDaUI7QUFBeEMsS0FBckI7QUFDRjtBQUNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21vdW50LWZvbGRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5jb25zdCB7IE9iamVjdElEIH0gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5jb25zdCB7IGxvZ2luTW9uZ28gfSA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9tb25nbycpO1xuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5cbmNvbnN0IG1vdW50Rm9sZGVyID0gYXN5bmMoX2lkLCBzaGFyZWRfZm9sZGVyX2lkKT0+e1xuICAgbGV0IHtkYiwgY2xpZW50fSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3VzZXJzJylcbiAgIGxldCB7ZHJvcGJveFRva2VufSA9IGF3YWl0IGRiLmZpbmRPbmUoe19pZDogbmV3IE9iamVjdElEKF9pZCl9LHsgcHJvamVjdGlvbjp7X2lkOjAsZHJvcGJveFRva2VuOjF9fSlcbiAgIGNsaWVudC5jbG9zZSgpXG4gICByZXR1cm4gbmV3IFByb21pc2UoKHMscik9PntcbiAgICAgIHJlcXVlc3QucG9zdCh7XG4gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi9zaGFyaW5nL21vdW50X2ZvbGRlclwiLFxuICAgICAgICAgaGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIixcIkF1dGhvcml6YXRpb25cIjpgQmVhcmVyICR7ZHJvcGJveFRva2VufWB9LFxuICAgICAgICAganNvbjp7IHNoYXJlZF9mb2xkZXJfaWQgfVxuICAgICAgfSwgKGVyciwgcmVzLCBib2R5KT0+e1xuICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHIoZXJyKVxuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzKGJvZHkpXG4gICAgICAgICB9XG4gICAgICB9KVxuICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICB0cnl7XG4gICAgICBjb25zdCB7IG1ldGhvZCwgY29va2llczp7dGt9IH0gPSByZXE7XG4gICAgICBpZih0ayl7XG4gICAgICAgICBzd2l0Y2gobWV0aG9kKXtcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgbGV0IHsgaWQgfSA9IGp3dC52ZXJpZnkodGssIHByb2Nlc3MuZW52LkpXVFNFQ1JFVCk7XG4gICAgICAgICAgICAgICAgICBsZXQgeyBzaGFyZWRfZm9sZGVyX2lkIH0gPSByZXEuYm9keVxuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgbW91bnRGb2xkZXIoaWQsIHNoYXJlZF9mb2xkZXJfaWQpKVxuICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2Vycm9yOiB0cnVlLCBtc2c6ICdGYWxoYSBuYSBjcmlhw6fDo28nfSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6IHRydWUsIHN0YXR1c0NvZGU6IDUwMCwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCJ9KVxuICAgICAgfVxuICAgfWNhdGNoKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6IHRydWUsIHN0YXR1c0NvZGU6IDUwMCwgbXNnOiBlcnIubWVzc2FnZX0pXG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/mount-folder.js\n");

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