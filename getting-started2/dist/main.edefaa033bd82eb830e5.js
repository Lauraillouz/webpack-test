/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdynamic_imports"] = self["webpackChunkdynamic_imports"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* const getComponent = () => {\n    const element = document.createElement(\"div\");\n\n    // dynamic importing to separate a chunck\n    return import(\"lodash\") // returns a Promise\n        .then(({ default: _ }) => {\n            const element = document.createElement(\"div\");\n\n            element.innerHTML = _.join([\"Hello\", \"webpack\"], \" \");\n\n            return element;\n        })\n        .catch((err) => \"An error occured while loadig the component\");\n}\n\ngetComponent().then((component) => {\n    document.body.appendChild(component);\n  }); */\n\n  \n  \n// Simplified code using async/await since import() returns a promise :\n\nconst getComponent = async () => {\n    const element = document.createElement(\"div\");\n    const { default: _ } = await __webpack_require__.e(/*! import() */ \"vendors-node_modules_lodash_lodash_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ \"./node_modules/lodash/lodash.js\", 23));\n\n    element.innerHTML = _.join([\"Hello\", \"webpack\"], \" \");\n\n    return element;\n}\n\ngetComponent().then((component) => {\n    document.body.appendChild(component);\n  });\n\n//# sourceURL=webpack://dynamic-imports/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);