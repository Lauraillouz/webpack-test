"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdynamic_imports"] = self["webpackChunkdynamic_imports"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 569);\n\n\n\nconst component = () => {\n    const element = document.createElement(\"div\");\n\n    // Lodash imported bu the script\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join([\"Hello\", \"webpack\"], \" \");\n    element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(null, \"Hellowebpack\");\n\n    return element\n}\ndocument.body.appendChild(component())\n// main, vendor and runtime bundle's hashes are gonna change. main because of its new content (expected), runtim because it now contains a reference to a ne module (the button has been added, so it's expected), but the vendor should remain the same. => add moduleIds in webpacj.config.js\n\n\n\n/* const getComponent = () => {\n    const element = document.createElement(\"div\");\n\n    // dynamic importing to separate a chunck\n    return import(\"lodash\") // returns a Promise\n        .then(({ default: _ }) => {\n            const element = document.createElement(\"div\");\n\n            element.innerHTML = _.join([\"Hello\", \"webpack\"], \" \");\n\n            return element;\n        })\n        .catch((err) => \"An error occured while loadig the component\");\n}\n\ngetComponent().then((component) => {\n    document.body.appendChild(component);\n  }); */\n\n  \n  \n// Simplified code using async/await since import() returns a promise :\n\n/* const getComponent = async () => {\n    const element = document.createElement(\"div\");\n    const { default: _ } = await import(\"lodash\");\n\n    element.innerHTML = _.join([\"Hello\", \"webpack\"], \" \");\n\n    return element;\n}\n\ngetComponent().then((component) => {\n    document.body.appendChild(component);\n  }); */\n\n//# sourceURL=webpack://dynamic-imports/./src/index.js?");

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (print = (text) => {\n    console.log(text)\n});\n\n//# sourceURL=webpack://dynamic-imports/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);