/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./menu/menu.styl":
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/stylus-loader!./menu/menu.styl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".menu .list {\\n  display: none;\\n  margin: 0;\\n}\\n.menu .title {\\n  font-weight: bold;\\n  cursor: pointer;\\n  background: url(\" + __webpack_require__(/*! ./plus.svg */ \"./menu/plus.svg\") + \") left 1px no-repeat;\\n  background-size: 14px;\\n  padding-right: 6px;\\n  padding-left: 16px;\\n}\\n.menu.open .list {\\n  display: block;\\n}\\n.menu.open .title:before {\\n  background-image: url(\" + __webpack_require__(/*! ./minus.svg */ \"./menu/minus.svg\") + \");\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./menu/menu.styl?../node_modules/css-loader!../node_modules/stylus-loader");

/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n//# sourceURL=webpack:///../node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "../node_modules/jade/lib/runtime.js":
/*!*******************************************!*\
  !*** ../node_modules/jade/lib/runtime.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = function merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n  var ac = a['class'];\n  var bc = b['class'];\n\n  if (ac || bc) {\n    ac = ac || [];\n    bc = bc || [];\n    if (!Array.isArray(ac)) ac = [ac];\n    if (!Array.isArray(bc)) bc = [bc];\n    a['class'] = ac.concat(bc).filter(nulls);\n  }\n\n  for (var key in b) {\n    if (key != 'class') {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Filter null `val`s.\n *\n * @param {*} val\n * @return {Boolean}\n * @api private\n */\n\nfunction nulls(val) {\n  return val != null && val !== '';\n}\n\n/**\n * join array as classes.\n *\n * @param {*} val\n * @return {String}\n */\nexports.joinClasses = joinClasses;\nfunction joinClasses(val) {\n  return (Array.isArray(val) ? val.map(joinClasses) :\n    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :\n    [val]).filter(nulls).join(' ');\n}\n\n/**\n * Render the given classes.\n *\n * @param {Array} classes\n * @param {Array.<Boolean>} escaped\n * @return {String}\n */\nexports.cls = function cls(classes, escaped) {\n  var buf = [];\n  for (var i = 0; i < classes.length; i++) {\n    if (escaped && escaped[i]) {\n      buf.push(exports.escape(joinClasses([classes[i]])));\n    } else {\n      buf.push(joinClasses(classes[i]));\n    }\n  }\n  var text = joinClasses(buf);\n  if (text.length) {\n    return ' class=\"' + text + '\"';\n  } else {\n    return '';\n  }\n};\n\n\nexports.style = function (val) {\n  if (val && typeof val === 'object') {\n    return Object.keys(val).map(function (style) {\n      return style + ':' + val[style];\n    }).join(';');\n  } else {\n    return val;\n  }\n};\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = function attr(key, val, escaped, terse) {\n  if (key === 'style') {\n    val = exports.style(val);\n  }\n  if ('boolean' == typeof val || null == val) {\n    if (val) {\n      return ' ' + (terse ? key : key + '=\"' + key + '\"');\n    } else {\n      return '';\n    }\n  } else if (0 == key.indexOf('data') && 'string' != typeof val) {\n    if (JSON.stringify(val).indexOf('&') !== -1) {\n      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +\n                   'will be escaped to `&amp;`');\n    };\n    if (val && typeof val.toISOString === 'function') {\n      console.warn('Jade will eliminate the double quotes around dates in ' +\n                   'ISO form after 2.0.0');\n    }\n    return ' ' + key + \"='\" + JSON.stringify(val).replace(/'/g, '&apos;') + \"'\";\n  } else if (escaped) {\n    if (val && typeof val.toISOString === 'function') {\n      console.warn('Jade will stringify dates in ISO form after 2.0.0');\n    }\n    return ' ' + key + '=\"' + exports.escape(val) + '\"';\n  } else {\n    if (val && typeof val.toISOString === 'function') {\n      console.warn('Jade will stringify dates in ISO form after 2.0.0');\n    }\n    return ' ' + key + '=\"' + val + '\"';\n  }\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} escaped\n * @return {String}\n */\nexports.attrs = function attrs(obj, terse){\n  var buf = [];\n\n  var keys = Object.keys(obj);\n\n  if (keys.length) {\n    for (var i = 0; i < keys.length; ++i) {\n      var key = keys[i]\n        , val = obj[key];\n\n      if ('class' == key) {\n        if (val = joinClasses(val)) {\n          buf.push(' ' + key + '=\"' + val + '\"');\n        }\n      } else {\n        buf.push(exports.attr(key, val, false, terse));\n      }\n    }\n  }\n\n  return buf.join('');\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar jade_encode_html_rules = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;'\n};\nvar jade_match_html = /[&<>\"]/g;\n\nfunction jade_encode_char(c) {\n  return jade_encode_html_rules[c] || c;\n}\n\nexports.escape = jade_escape;\nfunction jade_escape(html){\n  var result = String(html).replace(jade_match_html, jade_encode_char);\n  if (result === '' + html) return html;\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the jade in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @api private\n */\n\nexports.rethrow = function rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Jade') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\nexports.DebugItem = function DebugItem(lineno, filename) {\n  this.lineno = lineno;\n  this.filename = filename;\n}\n\n\n//# sourceURL=webpack:///../node_modules/jade/lib/runtime.js?");

/***/ }),

/***/ "../node_modules/style-loader/addStyles.js":
/*!*************************************************!*\
  !*** ../node_modules/style-loader/addStyles.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nvar stylesInDom = {},\n\tmemoize = function(fn) {\n\t\tvar memo;\n\t\treturn function () {\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\t\treturn memo;\n\t\t};\n\t},\n\tisOldIE = memoize(function() {\n\t\treturn /msie [6-9]\\b/.test(self.navigator.userAgent.toLowerCase());\n\t}),\n\tgetHeadElement = memoize(function () {\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\n\t}),\n\tsingletonElement = null,\n\tsingletonCounter = 0,\n\tstyleElementsInsertedAtTop = [];\n\nmodule.exports = function(list, options) {\n\tif(typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the bottom of <head>.\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list);\n\taddStylesToDom(styles, options);\n\n\treturn function update(newList) {\n\t\tvar mayRemove = [];\n\t\tfor(var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\n\t\t\t\t\tdomStyle.parts[j]();\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction addStylesToDom(styles, options) {\n\tfor(var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles(list) {\n\tvar styles = [];\n\tvar newStyles = {};\n\tfor(var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\t\tif(!newStyles[id])\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse\n\t\t\tnewStyles[id].parts.push(part);\n\t}\n\treturn styles;\n}\n\nfunction insertStyleElement(options, styleElement) {\n\tvar head = getHeadElement();\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\n\tif (options.insertAt === \"top\") {\n\t\tif(!lastStyleElementInsertedAtTop) {\n\t\t\thead.insertBefore(styleElement, head.firstChild);\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\thead.appendChild(styleElement);\n\t\t}\n\t\tstyleElementsInsertedAtTop.push(styleElement);\n\t} else if (options.insertAt === \"bottom\") {\n\t\thead.appendChild(styleElement);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement(styleElement) {\n\tstyleElement.parentNode.removeChild(styleElement);\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\n\tif(idx >= 0) {\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement(options) {\n\tvar styleElement = document.createElement(\"style\");\n\tstyleElement.type = \"text/css\";\n\tinsertStyleElement(options, styleElement);\n\treturn styleElement;\n}\n\nfunction createLinkElement(options) {\n\tvar linkElement = document.createElement(\"link\");\n\tlinkElement.rel = \"stylesheet\";\n\tinsertStyleElement(options, linkElement);\n\treturn linkElement;\n}\n\nfunction addStyle(obj, options) {\n\tvar styleElement, update, remove;\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n\t} else if(obj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\") {\n\t\tstyleElement = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t\tif(styleElement.href)\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\n\t\t};\n\t} else {\n\t\tstyleElement = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle(newObj) {\n\t\tif(newObj) {\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n\t\t\t\treturn;\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = styleElement.childNodes;\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\n\t\tif (childNodes.length) {\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyleElement.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag(styleElement, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyleElement.setAttribute(\"media\", media)\n\t}\n\n\tif(styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = css;\n\t} else {\n\t\twhile(styleElement.firstChild) {\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\n\t\t}\n\t\tstyleElement.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink(linkElement, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\tif(sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = linkElement.href;\n\n\tlinkElement.href = URL.createObjectURL(blob);\n\n\tif(oldSrc)\n\t\tURL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/addStyles.js?");

/***/ }),

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./menu/index.js\");\n\n\n\n\nlet pandaMenu = new _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  title: \"Меню панды\",\n  items: [{\n    text: 'Яйца',\n    href: '#eggs'\n  }, {\n    text: 'Мясо',\n    href: '#meat'\n  }, {\n    text: '99% еды - бамбук!',\n    href: '#bamboo'\n  }]\n});\n\ndocument.body.appendChild(pandaMenu.elem);\n\n//# sourceURL=webpack:///./home.js?");

/***/ }),

/***/ "./menu/index.js":
/*!***********************!*\
  !*** ./menu/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _menu_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.styl */ \"./menu/menu.styl\");\n/* harmony import */ var _menu_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_jade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.jade */ \"./menu/menu.jade\");\n/* harmony import */ var _menu_jade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_jade__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\nclass Menu {\n  constructor(options) {\n    this.elem = document.createElement('div');\n    this.elem.className = 'menu';\n\n    this.elem.innerHTML = _menu_jade__WEBPACK_IMPORTED_MODULE_1___default()(options);\n\n    this.elem.querySelector('.title').onclick = () => {\n      this.elem.classList.toggle('open');\n    };\n  }\n}\n\n//# sourceURL=webpack:///./menu/index.js?");

/***/ }),

/***/ "./menu/menu.jade":
/*!************************!*\
  !*** ./menu/menu.jade ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jade = __webpack_require__(/*! ../node_modules/jade/lib/runtime.js */ \"../node_modules/jade/lib/runtime.js\");\n\nmodule.exports = function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (items, title, undefined) {\nbuf.push(\"<span class=\\\"title\\\">\" + (jade.escape(null == (jade_interp = title) ? \"\" : jade_interp)) + \"</span><ul class=\\\"list\\\">\");\n// iterate items\n;(function(){\n  var $$obj = items;\n  if ('number' == typeof $$obj.length) {\n\n    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {\n      var item = $$obj[$index];\n\nbuf.push(\"<li><a\" + (jade.attr(\"href\", item.href, true, true)) + \">\" + (jade.escape(null == (jade_interp = item.text) ? \"\" : jade_interp)) + \"</a></li>\");\n    }\n\n  } else {\n    var $$l = 0;\n    for (var $index in $$obj) {\n      $$l++;      var item = $$obj[$index];\n\nbuf.push(\"<li><a\" + (jade.attr(\"href\", item.href, true, true)) + \">\" + (jade.escape(null == (jade_interp = item.text) ? \"\" : jade_interp)) + \"</a></li>\");\n    }\n\n  }\n}).call(this);\n\nbuf.push(\"</ul>\");}.call(this,\"items\" in locals_for_with?locals_for_with.items:typeof items!==\"undefined\"?items:undefined,\"title\" in locals_for_with?locals_for_with.title:typeof title!==\"undefined\"?title:undefined,\"undefined\" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join(\"\");\n}\n\n//# sourceURL=webpack:///./menu/menu.jade?");

/***/ }),

/***/ "./menu/menu.styl":
/*!************************!*\
  !*** ./menu/menu.styl ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/stylus-loader!./menu.styl */ \"../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./menu/menu.styl\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ \"../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./menu/menu.styl?");

/***/ }),

/***/ "./menu/minus.svg":
/*!************************!*\
  !*** ./menu/minus.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"menu/minus.svg\";\n\n//# sourceURL=webpack:///./menu/minus.svg?");

/***/ }),

/***/ "./menu/plus.svg":
/*!***********************!*\
  !*** ./menu/plus.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"menu/plus.svg\";\n\n//# sourceURL=webpack:///./menu/plus.svg?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });