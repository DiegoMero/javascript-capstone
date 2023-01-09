/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  height: 100px;\\r\\n  margin-left: 10%;\\r\\n  margin-right: 10%;\\r\\n}\\r\\n\\r\\n.logo span {\\r\\n  font-size: 40px;\\r\\n  color: rgb(19, 3, 110);\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.nav p {\\r\\n  margin: 0 1rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 3px solid black;\\r\\n}\\r\\n\\r\\n.authors {\\r\\n  font-size: large;\\r\\n  padding-left: 5px;\\r\\n}\\r\\n\\r\\nfooter div {\\r\\n  background-color: #b9b9b1;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  padding: 5px;\\r\\n  border-top: 3px solid black;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  margin: 5rem auto;\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  gap: 25px;\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  background-color: aquamarine;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 0.5rem;\\r\\n  border-radius: 10%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  width: auto;\\r\\n  height: auto;\\r\\n  margin: 0.5rem auto;\\r\\n  border-radius: 2rem;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.imgs {\\r\\n  width: 24rem;\\r\\n  height: 9rem;\\r\\n}\\r\\n\\r\\n.nameMovie {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  margin: 2rem 0;\\r\\n  gap: 25px;\\r\\n}\\r\\n\\r\\n.namedMovies {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.btnsComRres {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: flex-end;\\r\\n  margin-bottom: 10%;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.big-view-body {\\r\\n  position: fixed;\\r\\n  top: 1%;\\r\\n  left: 33%;\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding-left: 5%;\\r\\n  padding-top: 2%;\\r\\n  padding-right: 2%;\\r\\n  border: 5px solid black;\\r\\n}\\r\\n\\r\\n.popupCard {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: auto;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.description-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 50% 50%;\\r\\n  column-gap: 15px;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  margin-bottom: 0;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.comments-title {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.comments-container {\\r\\n  padding-left: 0;\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n.add-comment-title {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n.comments-input {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  margin-bottom: 10px;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.likeChange {\\r\\n  color: yellow;\\r\\n  background-color: greenyellow;\\r\\n}\\r\\n\\r\\n.holdlikess {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 0.2rem;\\r\\n}\\r\\n\\r\\n.closes {\\r\\n  color: red;\\r\\n  position: absolute;\\r\\n  right: 1.5rem;\\r\\n  top: 0.5rem;\\r\\n  background-color: blueviolet;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 1.9rem;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.name-input {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.insights-input {\\r\\n  width: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getApiShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getApiShow.js */ \"./src/modules/getApiShow.js\");\n\r\n\r\n\r\n(0,_modules_getApiShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addlikeapi.js":
/*!***********************************!*\
  !*** ./src/modules/addlikeapi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addApiLikes\": () => (/* binding */ addApiLikes),\n/* harmony export */   \"getApiLikes\": () => (/* binding */ getApiLikes)\n/* harmony export */ });\n/* eslint-disable no-unused-expressions */\r\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oXAYSzFtiLQq1yK2hMWK/likes';\r\n\r\n// const addApiLikes = (id) => {\r\n//   fetch(baseUrl, {\r\n//     method: 'POST',\r\n//     headers: { 'Content-type': 'application/json; charset=UTF-8' },\r\n//     body: JSON.stringify({\r\n//       item_id: id,\r\n//     }),\r\n//   });\r\n// };\r\n\r\nfunction addApiLikes(id) {\r\n  const bable = async () => {\r\n    const request = await fetch(baseUrl, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: { 'Content-type': 'application/json; charset=UTF-8' },\r\n    });\r\n\r\n    const data = await request.status;\r\n    return data;\r\n  };\r\n\r\n  bable().then(\r\n    (value) => { value === '201'; },\r\n    (error) => {\r\n      throw error;\r\n    },\r\n  );\r\n}\r\n\r\nconst getApiLikes = (idName, eltarget) => {\r\n  fetch(baseUrl)\r\n    .then(async (response) => {\r\n      const likeInfo = await response.json();\r\n      likeInfo.forEach((element) => {\r\n        if (element.item_id === idName) {\r\n          const numberOfLikes = element.likes;\r\n          eltarget.innerHTML = `${numberOfLikes}`;\r\n        }\r\n      });\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/addlikeapi.js?");

/***/ }),

/***/ "./src/modules/getApiShow.js":
/*!***********************************!*\
  !*** ./src/modules/getApiShow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popupCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupCard.js */ \"./src/modules/popupCard.js\");\n/* harmony import */ var _addlikeapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlikeapi.js */ \"./src/modules/addlikeapi.js\");\n/* harmony import */ var _totalItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totalItems.js */ \"./src/modules/totalItems.js\");\n\r\n\r\n\r\n\r\nconst url = 'https://api.tvmaze.com/shows';\r\nconst numberOfItems = document.querySelector('.totalitems');\r\n\r\nconst getApiShow = async () => {\r\n  const resolve = await fetch(url);\r\n  const result = await resolve.json();\r\n\r\n  const limitLength = result.slice(0, 20);\r\n  (0,_totalItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(limitLength.length, numberOfItems);\r\n  for (let i = 0; i < limitLength.length; i += 1) {\r\n    const mainPage = document.querySelector('.main');\r\n    const div1 = document.createElement('div');\r\n    div1.className = 'card';\r\n    const div2 = document.createElement('div');\r\n    div2.className = 'image';\r\n    const imgs = document.createElement('img');\r\n    imgs.setAttribute('src', limitLength[i].image.medium);\r\n    const div3 = document.createElement('div');\r\n    div3.className = 'nameMovie';\r\n\r\n    const pE1 = document.createElement('p');\r\n    pE1.className = 'namedMovies';\r\n    pE1.textContent = limitLength[i].name;\r\n\r\n    const div4 = document.createElement('div');\r\n    div4.className = 'likess';\r\n\r\n    const iE1 = document.createElement('i');\r\n    iE1.className = 'fa-regular fa-heart';\r\n\r\n    const div55 = document.createElement('div');\r\n    div55.className = 'holdlikess';\r\n\r\n    const pE2 = document.createElement('p');\r\n    pE2.className = 'likecount';\r\n    pE2.innerHTML = '';\r\n\r\n    const span1 = document.createElement('span');\r\n    span1.className = 'numberLiked';\r\n    span1.innerHTML = 'likes';\r\n\r\n    (0,_addlikeapi_js__WEBPACK_IMPORTED_MODULE_1__.getApiLikes)(limitLength[i].name, pE2);\r\n\r\n    iE1.addEventListener('click', async () => {\r\n      const { name } = limitLength[i];\r\n      await (0,_addlikeapi_js__WEBPACK_IMPORTED_MODULE_1__.getApiLikes)(name.name, pE2);\r\n      await (0,_addlikeapi_js__WEBPACK_IMPORTED_MODULE_1__.addApiLikes)(name);\r\n      iE1.classList.add('likeChange');\r\n      pE2.innerHTML = Number(pE2.innerHTML) + 1;\r\n    });\r\n\r\n    const div5 = document.createElement('div');\r\n    div5.className = 'btnsComRres';\r\n    const btn = document.createElement('button');\r\n    btn.className = 'btnComment';\r\n    btn.textContent = 'comment';\r\n    div5.appendChild(btn);\r\n    div55.append(pE2, span1);\r\n    div4.append(iE1, div55);\r\n    div3.append(pE1, div4);\r\n    div2.appendChild(imgs);\r\n    div1.append(div2, div3, div5);\r\n    mainPage.appendChild(div1);\r\n\r\n    let buttonComment = document.querySelectorAll('.btnComment');\r\n    buttonComment = [...buttonComment];\r\n\r\n    buttonComment[i].addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      (0,_popupCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(limitLength, i);\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getApiShow);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/getApiShow.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (i) => {\n  const resolve = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fyapNUEEWHEUs0ltmiAA/comments?item_id=${i}`);\n  const comments = await resolve.json();\n  return comments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getNumberOfComments.js":
/*!********************************************!*\
  !*** ./src/modules/getNumberOfComments.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n\n\nconst getNumberComments = async (i) => {\n  let numberOfComments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i);\n  numberOfComments = numberOfComments.length;\n  return numberOfComments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberComments);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/getNumberOfComments.js?");

/***/ }),

/***/ "./src/modules/popupCard.js":
/*!**********************************!*\
  !*** ./src/modules/popupCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumberOfComments.js */ \"./src/modules/getNumberOfComments.js\");\n\r\n\r\n\r\nconst popupCard = async (limitLength, i) => {\r\n  const body = document.querySelector('body');\r\n  const bigView = document.createElement('body');\r\n  bigView.className = 'big-view-body';\r\n  body.appendChild(bigView);\r\n\r\n  const popupCard = document.createElement('div');\r\n  popupCard.className = 'popupCard';\r\n  bigView.appendChild(popupCard);\r\n\r\n  const imgContainer = document.createElement('div');\r\n  imgContainer.className = 'img-container';\r\n  popupCard.appendChild(imgContainer);\r\n\r\n  const movieImg = document.createElement('img');\r\n  movieImg.setAttribute('src', limitLength[i].image.medium);\r\n  imgContainer.appendChild(movieImg);\r\n\r\n  const xIcon = document.createElement('i');\r\n  xIcon.className = 'fa-solid fa-x closes';\r\n  xIcon.addEventListener('click', () => { body.removeChild(bigView); });\r\n  imgContainer.appendChild(xIcon);\r\n\r\n  const movieTitle = document.createElement('h2');\r\n  movieTitle.className = 'movie-title';\r\n  movieTitle.textContent = limitLength[i].name;\r\n  popupCard.appendChild(movieTitle);\r\n\r\n  const descriptionContainer = document.createElement('div');\r\n  descriptionContainer.className = 'description-container';\r\n  popupCard.appendChild(descriptionContainer);\r\n\r\n  const genres = document.createElement('p');\r\n  genres.textContent = `Genres: ${limitLength[i].genres}.`;\r\n  descriptionContainer.appendChild(genres);\r\n\r\n  const premiered = document.createElement('p');\r\n  premiered.textContent = `Premiered: ${limitLength[i].premiered}.`;\r\n  descriptionContainer.appendChild(premiered);\r\n\r\n  const language = document.createElement('p');\r\n  language.textContent = `Language: ${limitLength[i].language}.`;\r\n  descriptionContainer.appendChild(language);\r\n\r\n  const ended = document.createElement('p');\r\n  if (limitLength[i].ended === null) {\r\n    ended.textContent = 'Ended: Still in tune.';\r\n  } else {\r\n    ended.textContent = `Ended: ${limitLength[i].ended}.`;\r\n  }\r\n  descriptionContainer.appendChild(ended);\r\n\r\n  const commentCounter = await (0,_getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\r\n\r\n  const commentTitle = document.createElement('h3');\r\n  commentTitle.className = 'comments-title';\r\n  if (commentCounter === undefined) {\r\n    commentTitle.textContent = 'Comments (0)';\r\n  } else {\r\n    commentTitle.textContent = `Comments (${commentCounter})`;\r\n  }\r\n  popupCard.appendChild(commentTitle);\r\n\r\n  const commentsContainer = document.createElement('ul');\r\n  commentsContainer.className = 'comments-container';\r\n  popupCard.appendChild(commentsContainer);\r\n\r\n  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i);\r\n  for (let i = 0; i < comments.length; i += 1) {\r\n    const commentText = document.createElement('li');\r\n    commentsContainer.appendChild(commentText);\r\n    commentText.textContent = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;\r\n  }\r\n\r\n  const addCommentTitle = document.createElement('h4');\r\n  addCommentTitle.textContent = 'Add a comment';\r\n  addCommentTitle.className = 'add-comment-title';\r\n  popupCard.appendChild(addCommentTitle);\r\n\r\n  const commentsInput = document.createElement('div');\r\n  commentsInput.className = 'comments-input';\r\n  popupCard.appendChild(commentsInput);\r\n\r\n  const nameInput = document.createElement('input');\r\n  nameInput.className = 'name-input';\r\n  nameInput.placeholder = 'Your name';\r\n  commentsInput.appendChild(nameInput);\r\n\r\n  const insightsInput = document.createElement('textarea');\r\n  insightsInput.className = 'insights-input';\r\n  insightsInput.setAttribute('rows', '6');\r\n  insightsInput.setAttribute('cols', '30');\r\n  insightsInput.placeholder = 'Your insights';\r\n  commentsInput.appendChild(insightsInput);\r\n\r\n  const commentButton = document.createElement('button');\r\n  commentButton.textContent = 'Comment';\r\n  commentButton.className = 'comment-button';\r\n  commentsInput.appendChild(commentButton);\r\n\r\n  const clickToComment = document.querySelector('.comment-button');\r\n\r\n  clickToComment.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fyapNUEEWHEUs0ltmiAA/comments', {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: i,\r\n        username: nameInput.value,\r\n        comment: insightsInput.value,\r\n      }),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    });\r\n\r\n    const newArrayofComments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i);\r\n    const commentText = document.createElement('li');\r\n    commentText.textContent = `${newArrayofComments[newArrayofComments.length - 1].creation_date} ${newArrayofComments[newArrayofComments.length - 1].username}: ${newArrayofComments[newArrayofComments.length - 1].comment}`;\r\n    commentsContainer.appendChild(commentText);\r\n\r\n    const newCommentsCounter = await (0,_getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\r\n    if (newCommentsCounter === undefined) {\r\n      commentTitle.textContent = 'Comments (0)';\r\n    } else {\r\n      commentTitle.textContent = `Comments (${newCommentsCounter})`;\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupCard);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/popupCard.js?");

/***/ }),

/***/ "./src/modules/totalItems.js":
/*!***********************************!*\
  !*** ./src/modules/totalItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalItems = (param, elementPage) => {\r\n  const recordNUmber = param;\r\n  elementPage.innerHTML = recordNUmber;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalItems);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/totalItems.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;