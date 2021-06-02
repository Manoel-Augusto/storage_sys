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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/add-member.js");
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

/***/ "./pages/api/add-member.js":
/*!*********************************!*\
  !*** ./pages/api/add-member.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst request = __webpack_require__(/*! request */ \"request\");\n\nconst {\n  ObjectID\n} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nconst {\n  loginMongo\n} = __webpack_require__(/*! ../../models/mongo */ \"./models/mongo.js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst getSharedFolderId = (token, path) => {\n  return new Promise((s, r) => {\n    request.post({\n      url: 'https://api.dropboxapi.com/2/sharing/share_folder',\n      headers: {\n        \"Authorization\": `Bearer ${token}`\n      },\n      json: {\n        path,\n        acl_update_policy: \"editors\",\n        access_inheritance: \"inherit\"\n      }\n    }, (err, res, body) => {\n      if (err) return r(err);\n\n      if (body.error) {\n        if (body.error.bad_path) {\n          let {\n            shared_folder_id\n          } = body.error.bad_path;\n          return s({\n            shared_folder_id\n          });\n        }\n      }\n\n      let {\n        shared_folder_id\n      } = body;\n      s({\n        shared_folder_id\n      });\n    });\n  });\n};\n\nconst addCollaborator = async (user_id, id, path, email, type) => {\n  let {\n    db,\n    client\n  } = await loginMongo(process.env.MONGODB, 'users');\n  let {\n    dropboxToken\n  } = await db.findOne({\n    _id: new ObjectID(user_id)\n  }, {\n    projection: {\n      _id: 0,\n      dropboxToken: 1\n    }\n  });\n  client.close();\n\n  if (type == \"folder\") {\n    let {\n      shared_folder_id\n    } = await getSharedFolderId(dropboxToken, path);\n    var params = {\n      shared_folder_id,\n      members: [{\n        member: {\n          \".tag\": \"email\",\n          email\n        },\n        access_level: \"editor\"\n      }]\n    };\n  } else {\n    var params = {\n      file: id,\n      members: [{\n        \".tag\": \"email\",\n        email\n      }],\n      access_level: \"viewer\"\n    };\n  }\n\n  return new Promise((s, r) => {\n    request.post({\n      url: `https://api.dropboxapi.com/2/sharing/add_${type}_member`,\n      headers: {\n        \"Authorization\": `Bearer ${dropboxToken}`\n      },\n      json: params\n    }, (err, res, body) => {\n      if (err) return r(err);\n      s(body);\n    });\n  });\n};\n\nasync function handler(req, res) {\n  try {\n    const {\n      method,\n      cookies: {\n        tk\n      }\n    } = req;\n\n    if (tk) {\n      switch (method) {\n        case 'POST':\n          try {\n            let {\n              id: user_id\n            } = jwt.verify(tk, process.env.JWTSECRET);\n            let {\n              id,\n              path,\n              email,\n              type\n            } = req.body;\n            let result = await addCollaborator(user_id, id, path, email, type);\n            res.status(200).json({\n              result\n            });\n          } catch (e) {\n            res.status(200).json({\n              error: true,\n              msg: 'Falha ao adicionar membro'\n            });\n          }\n\n          break;\n\n        default:\n          res.status(405).end(`Method ${method} Not Allowed`);\n      }\n    } else {\n      res.status(500).json({\n        statusCode: 500,\n        msg: \"Falha na autenticação\"\n      });\n    }\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      msg: err.message\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLW1lbWJlci5qcz9hNjQxIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJyZXF1aXJlIiwiT2JqZWN0SUQiLCJsb2dpbk1vbmdvIiwiand0IiwiZ2V0U2hhcmVkRm9sZGVySWQiLCJ0b2tlbiIsInBhdGgiLCJQcm9taXNlIiwicyIsInIiLCJwb3N0IiwidXJsIiwiaGVhZGVycyIsImpzb24iLCJhY2xfdXBkYXRlX3BvbGljeSIsImFjY2Vzc19pbmhlcml0YW5jZSIsImVyciIsInJlcyIsImJvZHkiLCJlcnJvciIsImJhZF9wYXRoIiwic2hhcmVkX2ZvbGRlcl9pZCIsImFkZENvbGxhYm9yYXRvciIsInVzZXJfaWQiLCJpZCIsImVtYWlsIiwidHlwZSIsImRiIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREIiLCJkcm9wYm94VG9rZW4iLCJmaW5kT25lIiwiX2lkIiwicHJvamVjdGlvbiIsImNsb3NlIiwicGFyYW1zIiwibWVtYmVycyIsIm1lbWJlciIsImFjY2Vzc19sZXZlbCIsImZpbGUiLCJoYW5kbGVyIiwicmVxIiwibWV0aG9kIiwiY29va2llcyIsInRrIiwidmVyaWZ5IiwiSldUU0VDUkVUIiwicmVzdWx0Iiwic3RhdHVzIiwiZSIsIm1zZyIsImVuZCIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFlRCxtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLE1BQU07QUFBRUU7QUFBRixJQUFpQkYsbUJBQU8sQ0FBQyw2Q0FBRCxDQUE5Qjs7QUFDQSxNQUFNRyxHQUFHLEdBQUdILG1CQUFPLENBQUMsa0NBQUQsQ0FBbkI7O0FBRUEsTUFBTUksaUJBQWlCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEtBQWlCO0FBQ3hDLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQzFCVixXQUFPLENBQUNXLElBQVIsQ0FBYTtBQUNWQyxTQUFHLEVBQUUsbURBREs7QUFFVkMsYUFBTyxFQUFFO0FBQ04seUJBQWtCLFVBQVNQLEtBQU07QUFEM0IsT0FGQztBQUtWUSxVQUFJLEVBQUU7QUFBQ1AsWUFBRDtBQUFPUSx5QkFBaUIsRUFBRSxTQUExQjtBQUFxQ0MsMEJBQWtCLEVBQUU7QUFBekQ7QUFMSSxLQUFiLEVBTUcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDcEIsVUFBSUYsR0FBSixFQUFTLE9BQU9QLENBQUMsQ0FBQ08sR0FBRCxDQUFSOztBQUNULFVBQUdFLElBQUksQ0FBQ0MsS0FBUixFQUFjO0FBQ1gsWUFBR0QsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQWQsRUFBdUI7QUFDcEIsY0FBSTtBQUFFQztBQUFGLGNBQXVCSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBdEM7QUFDQSxpQkFBT1osQ0FBQyxDQUFDO0FBQUNhO0FBQUQsV0FBRCxDQUFSO0FBQ0Y7QUFDSDs7QUFDRCxVQUFJO0FBQUVBO0FBQUYsVUFBdUJILElBQTNCO0FBQ0FWLE9BQUMsQ0FBQztBQUFDYTtBQUFELE9BQUQsQ0FBRDtBQUNGLEtBaEJEO0FBaUJGLEdBbEJNLENBQVA7QUFvQkYsQ0FyQkQ7O0FBdUJBLE1BQU1DLGVBQWUsR0FBRyxPQUFPQyxPQUFQLEVBQWdCQyxFQUFoQixFQUFvQmxCLElBQXBCLEVBQTBCbUIsS0FBMUIsRUFBaUNDLElBQWpDLEtBQTBDO0FBQy9ELE1BQUk7QUFBRUMsTUFBRjtBQUFNQztBQUFOLE1BQWlCLE1BQU0xQixVQUFVLENBQUMyQixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBYixFQUFzQixPQUF0QixDQUFyQztBQUNBLE1BQUk7QUFBRUM7QUFBRixNQUFtQixNQUFNTCxFQUFFLENBQUNNLE9BQUgsQ0FBVztBQUFFQyxPQUFHLEVBQUUsSUFBSWpDLFFBQUosQ0FBYXNCLE9BQWI7QUFBUCxHQUFYLEVBQTJDO0FBQUVZLGNBQVUsRUFBRTtBQUFFRCxTQUFHLEVBQUUsQ0FBUDtBQUFVRixrQkFBWSxFQUFFO0FBQXhCO0FBQWQsR0FBM0MsQ0FBN0I7QUFDQUosUUFBTSxDQUFDUSxLQUFQOztBQUNBLE1BQUlWLElBQUksSUFBSSxRQUFaLEVBQXNCO0FBQ25CLFFBQUk7QUFBRUw7QUFBRixRQUF1QixNQUFNakIsaUJBQWlCLENBQUM0QixZQUFELEVBQWUxQixJQUFmLENBQWxEO0FBQ0EsUUFBSStCLE1BQU0sR0FBRztBQUNWaEIsc0JBRFU7QUFFVmlCLGFBQU8sRUFBRSxDQUFDO0FBQ1BDLGNBQU0sRUFBRTtBQUNMLGtCQUFRLE9BREg7QUFFTGQ7QUFGSyxTQUREO0FBS1BlLG9CQUFZLEVBQUU7QUFMUCxPQUFEO0FBRkMsS0FBYjtBQVVGLEdBWkQsTUFZTztBQUNKLFFBQUlILE1BQU0sR0FBRztBQUNWSSxVQUFJLEVBQUVqQixFQURJO0FBRVZjLGFBQU8sRUFBRSxDQUFDO0FBQ1AsZ0JBQVEsT0FERDtBQUVQYjtBQUZPLE9BQUQsQ0FGQztBQU1WZSxrQkFBWSxFQUFFO0FBTkosS0FBYjtBQVFGOztBQUNELFNBQU8sSUFBSWpDLE9BQUosQ0FBWSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUMxQlYsV0FBTyxDQUFDVyxJQUFSLENBQWE7QUFDVkMsU0FBRyxFQUFHLDRDQUEyQ2UsSUFBSyxTQUQ1QztBQUVWZCxhQUFPLEVBQUU7QUFDTix5QkFBa0IsVUFBU29CLFlBQWE7QUFEbEMsT0FGQztBQUtWbkIsVUFBSSxFQUFFd0I7QUFMSSxLQUFiLEVBTUcsQ0FBQ3JCLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEtBQW9CO0FBQ3BCLFVBQUlGLEdBQUosRUFBUyxPQUFPUCxDQUFDLENBQUNPLEdBQUQsQ0FBUjtBQUNUUixPQUFDLENBQUNVLElBQUQsQ0FBRDtBQUNGLEtBVEQ7QUFVRixHQVhNLENBQVA7QUFZRixDQXRDRDs7QUF3Q2UsZUFBZXdCLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCMUIsR0FBNUIsRUFBaUM7QUFDN0MsTUFBSTtBQUNELFVBQU07QUFBRTJCLFlBQUY7QUFBVUMsYUFBTyxFQUFFO0FBQUVDO0FBQUY7QUFBbkIsUUFBOEJILEdBQXBDOztBQUNBLFFBQUlHLEVBQUosRUFBUTtBQUNMLGNBQVFGLE1BQVI7QUFDRyxhQUFLLE1BQUw7QUFDRyxjQUFJO0FBQ0QsZ0JBQUk7QUFBRXBCLGdCQUFFLEVBQUVEO0FBQU4sZ0JBQWtCcEIsR0FBRyxDQUFDNEMsTUFBSixDQUFXRCxFQUFYLEVBQWVqQixPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLFNBQTNCLENBQXRCO0FBQ0EsZ0JBQUk7QUFBRXhCLGdCQUFGO0FBQU1sQixrQkFBTjtBQUFZbUIsbUJBQVo7QUFBbUJDO0FBQW5CLGdCQUE0QmlCLEdBQUcsQ0FBQ3pCLElBQXBDO0FBQ0EsZ0JBQUkrQixNQUFNLEdBQUcsTUFBTTNCLGVBQWUsQ0FBQ0MsT0FBRCxFQUFVQyxFQUFWLEVBQWNsQixJQUFkLEVBQW9CbUIsS0FBcEIsRUFBMkJDLElBQTNCLENBQWxDO0FBQ0FULGVBQUcsQ0FBQ2lDLE1BQUosQ0FBVyxHQUFYLEVBQWdCckMsSUFBaEIsQ0FBcUI7QUFBQ29DO0FBQUQsYUFBckI7QUFDRixXQUxELENBS0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1RsQyxlQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQnJDLElBQWhCLENBQXFCO0FBQUVNLG1CQUFLLEVBQUUsSUFBVDtBQUFlaUMsaUJBQUcsRUFBRTtBQUFwQixhQUFyQjtBQUNGOztBQUNEOztBQUNIO0FBQ0duQyxhQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQkcsR0FBaEIsQ0FBcUIsVUFBU1QsTUFBTyxjQUFyQztBQVpOO0FBY0YsS0FmRCxNQWVPO0FBQ0ozQixTQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQnJDLElBQWhCLENBQXFCO0FBQUV5QyxrQkFBVSxFQUFFLEdBQWQ7QUFBbUJGLFdBQUcsRUFBRTtBQUF4QixPQUFyQjtBQUNGO0FBQ0gsR0FwQkQsQ0FvQkUsT0FBT3BDLEdBQVAsRUFBWTtBQUNYQyxPQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQnJDLElBQWhCLENBQXFCO0FBQUV5QyxnQkFBVSxFQUFFLEdBQWQ7QUFBbUJGLFNBQUcsRUFBRXBDLEdBQUcsQ0FBQ3VDO0FBQTVCLEtBQXJCO0FBQ0Y7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hZGQtbWVtYmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmNvbnN0IHsgT2JqZWN0SUQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKTtcbmNvbnN0IHsgbG9naW5Nb25nbyB9ID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL21vbmdvJyk7XG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKTtcblxuY29uc3QgZ2V0U2hhcmVkRm9sZGVySWQgPSAodG9rZW4sIHBhdGgpID0+IHtcbiAgIHJldHVybiBuZXcgUHJvbWlzZSgocywgcikgPT4ge1xuICAgICAgcmVxdWVzdC5wb3N0KHtcbiAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tLzIvc2hhcmluZy9zaGFyZV9mb2xkZXInLFxuICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgfSxcbiAgICAgICAgIGpzb246IHtwYXRoLCBhY2xfdXBkYXRlX3BvbGljeTogXCJlZGl0b3JzXCIsIGFjY2Vzc19pbmhlcml0YW5jZTogXCJpbmhlcml0XCJ9XG4gICAgICB9LCAoZXJyLCByZXMsIGJvZHkpID0+IHtcbiAgICAgICAgIGlmIChlcnIpIHJldHVybiByKGVycilcbiAgICAgICAgIGlmKGJvZHkuZXJyb3Ipe1xuICAgICAgICAgICAgaWYoYm9keS5lcnJvci5iYWRfcGF0aCl7XG4gICAgICAgICAgICAgICBsZXQgeyBzaGFyZWRfZm9sZGVyX2lkIH0gPSBib2R5LmVycm9yLmJhZF9wYXRoXG4gICAgICAgICAgICAgICByZXR1cm4gcyh7c2hhcmVkX2ZvbGRlcl9pZH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICBsZXQgeyBzaGFyZWRfZm9sZGVyX2lkIH0gPSBib2R5XG4gICAgICAgICBzKHtzaGFyZWRfZm9sZGVyX2lkfSlcbiAgICAgIH0pXG4gICB9KVxuXG59XG5cbmNvbnN0IGFkZENvbGxhYm9yYXRvciA9IGFzeW5jICh1c2VyX2lkLCBpZCwgcGF0aCwgZW1haWwsIHR5cGUpID0+IHtcbiAgIGxldCB7IGRiLCBjbGllbnQgfSA9IGF3YWl0IGxvZ2luTW9uZ28ocHJvY2Vzcy5lbnYuTU9OR09EQiwgJ3VzZXJzJylcbiAgIGxldCB7IGRyb3Bib3hUb2tlbiB9ID0gYXdhaXQgZGIuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElEKHVzZXJfaWQpIH0sIHsgcHJvamVjdGlvbjogeyBfaWQ6IDAsIGRyb3Bib3hUb2tlbjogMSB9IH0pXG4gICBjbGllbnQuY2xvc2UoKVxuICAgaWYgKHR5cGUgPT0gXCJmb2xkZXJcIikge1xuICAgICAgbGV0IHsgc2hhcmVkX2ZvbGRlcl9pZCB9ID0gYXdhaXQgZ2V0U2hhcmVkRm9sZGVySWQoZHJvcGJveFRva2VuLCBwYXRoKVxuICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgIHNoYXJlZF9mb2xkZXJfaWQsXG4gICAgICAgICBtZW1iZXJzOiBbe1xuICAgICAgICAgICAgbWVtYmVyOiB7XG4gICAgICAgICAgICAgICBcIi50YWdcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY2Nlc3NfbGV2ZWw6IFwiZWRpdG9yXCJcbiAgICAgICAgIH1dLFxuICAgICAgfVxuICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICBmaWxlOiBpZCxcbiAgICAgICAgIG1lbWJlcnM6IFt7XG4gICAgICAgICAgICBcIi50YWdcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgIH1dLFxuICAgICAgICAgYWNjZXNzX2xldmVsOiBcInZpZXdlclwiLFxuICAgICAgfVxuICAgfVxuICAgcmV0dXJuIG5ldyBQcm9taXNlKChzLCByKSA9PiB7XG4gICAgICByZXF1ZXN0LnBvc3Qoe1xuICAgICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkuZHJvcGJveGFwaS5jb20vMi9zaGFyaW5nL2FkZF8ke3R5cGV9X21lbWJlcmAsXG4gICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2Ryb3Bib3hUb2tlbn1gLFxuICAgICAgICAgfSxcbiAgICAgICAgIGpzb246IHBhcmFtc1xuICAgICAgfSwgKGVyciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICAgICBpZiAoZXJyKSByZXR1cm4gcihlcnIpXG4gICAgICAgICBzKGJvZHkpXG4gICAgICB9KVxuICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbWV0aG9kLCBjb29raWVzOiB7IHRrIH0gfSA9IHJlcTtcbiAgICAgIGlmICh0aykge1xuICAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGxldCB7IGlkOiB1c2VyX2lkIH0gPSBqd3QudmVyaWZ5KHRrLCBwcm9jZXNzLmVudi5KV1RTRUNSRVQpO1xuICAgICAgICAgICAgICAgICAgbGV0IHsgaWQsIHBhdGgsIGVtYWlsLCB0eXBlIH0gPSByZXEuYm9keVxuICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGFkZENvbGxhYm9yYXRvcih1c2VyX2lkLCBpZCwgcGF0aCwgZW1haWwsIHR5cGUpXG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cmVzdWx0fSlcbiAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXJyb3I6IHRydWUsIG1zZzogJ0ZhbGhhIGFvIGFkaWNpb25hciBtZW1icm8nIH0pXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN0YXR1c0NvZGU6IDUwMCwgbXNnOiBcIkZhbGhhIG5hIGF1dGVudGljYcOnw6NvXCIgfSlcbiAgICAgIH1cbiAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdGF0dXNDb2RlOiA1MDAsIG1zZzogZXJyLm1lc3NhZ2UgfSlcbiAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/add-member.js\n");

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