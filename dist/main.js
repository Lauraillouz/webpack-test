/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var log = __webpack_require__(/*! ./log.js */ \"./assets/js/log.js\");\n\nlog(\"Salut\");\n\n//# sourceURL=webpack://my-webpack-project/./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/log.js":
/*!**************************!*\
  !*** ./assets/js/log.js ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = function (value) {\n  console.log(value);\n};\n\n//# sourceURL=webpack://my-webpack-project/./assets/js/log.js?");

/***/ }),

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/***/ (() => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n\n/******/\n(function () {\n  // webpackBootstrap\n\n  /******/\n  var __webpack_modules__ = {\n    /***/\n    \"./assets/js/app.js\":\n    /*!**************************!*\\\n      !*** ./assets/js/app.js ***!\n      \\**************************/\n\n    /***/\n    function assetsJsAppJs(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {\n      eval(\"var log = __webpack_require__(/*! ./log.js */ \\\"./assets/js/log.js\\\");\\n\\nlog(\\\"Salut\\\");\\n\\n//# sourceURL=webpack://my-webpack-project/./assets/js/app.js?\");\n      /***/\n    },\n\n    /***/\n    \"./assets/js/log.js\":\n    /*!**************************!*\\\n      !*** ./assets/js/log.js ***!\n      \\**************************/\n\n    /***/\n    function assetsJsLogJs(module) {\n      eval(\"module.exports = function (value) {\\n  console.log(value);\\n};\\n\\n//# sourceURL=webpack://my-webpack-project/./assets/js/log.js?\");\n      /***/\n    },\n\n    /***/\n    \"./dist/bundle.js\":\n    /*!************************!*\\\n      !*** ./dist/bundle.js ***!\n      \\************************/\n\n    /***/\n    function distBundleJs() {\n      eval(\"\\n\\n//# sourceURL=webpack://my-webpack-project/./dist/bundle.js?\");\n      /***/\n    }\n    /******/\n\n  };\n  /************************************************************************/\n\n  /******/\n  // The module cache\n\n  /******/\n\n  var __webpack_module_cache__ = {};\n  /******/\n\n  /******/\n  // The require function\n\n  /******/\n\n  function __nested_webpack_require_1971__(moduleId) {\n    /******/\n    // Check if module is in cache\n\n    /******/\n    var cachedModule = __webpack_module_cache__[moduleId];\n    /******/\n\n    if (cachedModule !== undefined) {\n      /******/\n      return cachedModule.exports;\n      /******/\n    }\n    /******/\n    // Create a new module (and put it into the cache)\n\n    /******/\n\n\n    var module = __webpack_module_cache__[moduleId] = {\n      /******/\n      // no module.id needed\n\n      /******/\n      // no module.loaded needed\n\n      /******/\n      exports: {}\n      /******/\n\n    };\n    /******/\n\n    /******/\n    // Execute the module function\n\n    /******/\n\n    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1971__);\n    /******/\n\n    /******/\n    // Return the exports of the module\n\n    /******/\n\n\n    return module.exports;\n    /******/\n  }\n  /******/\n\n  /************************************************************************/\n\n  /******/\n\n  /******/\n  // startup\n\n  /******/\n  // Load entry module and return exports\n\n  /******/\n  // This entry module can't be inlined because the eval devtool is used.\n\n  /******/\n\n\n  __nested_webpack_require_1971__(\"./assets/js/app.js\");\n  /******/\n\n\n  var __webpack_exports__ = __nested_webpack_require_1971__(\"./dist/bundle.js\");\n  /******/\n\n  /******/\n\n})();\n\n//# sourceURL=webpack://my-webpack-project/./dist/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/main.js");
/******/ 	
/******/ })()
;