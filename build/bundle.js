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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/index.js!./src/styles/main.styl":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader!./src/styles/main.styl ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\nimg {\n  max-width: 100%;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background-color: #f4f5f7;\n  font-size: 1rem;\n  font-family: sans-serif;\n  font-weight: 400;\n  line-height: 1.5;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\np,\nul {\n  margin: 0;\n  padding: 0;\n}\nbutton:focus {\n  outline: none;\n}\nli {\n  list-style: none;\n}\nbutton {\n  border: none;\n  cursor: pointer;\n  background-color: inherit;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.mt-2 {\n  margin-top: 2rem;\n}\n.mb-1 {\n  margin-bottom: 1rem;\n}\n.mb-2 {\n  margin-bottom: 2rem;\n}\n.mb-4 {\n  margin-bottom: 4rem;\n}\n.hidden {\n  display: none !important;\n}\n.is-required {\n  font-size: 0.8rem;\n  color: #900909;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.todo-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n.todo-item {\n  position: relative;\n  margin: 0 2rem 2rem 2rem;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  flex-basis: calc(33.333% - 4rem);\n  flex-grow: 0;\n  flex-shrink: 0;\n  border: 1px solid #d3d3d3;\n  background-color: #ebecf0;\n  color: #172b4d;\n  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);\n}\n.todo-item--done {\n  background-color: #a9a9a9;\n}\n.todo-item--done::after {\n  content: \"✓\";\n  font-size: 2rem;\n  font-weight: 600;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.todo-item--done > .todo-item__description {\n  background-color: #dedbdb;\n}\n.todo-item__title {\n  text-align: center;\n}\n.todo-item__title::first-letter {\n  text-transform: capitalize;\n}\n.todo-item__description {\n  padding: 0.3rem;\n  margin: 1rem 0;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.todo-item__description::first-letter {\n  text-transform: capitalize;\n}\n.todo-item__wrapper {\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n}\n.todo-item__priority {\n  padding: 6px;\n  width: 70px;\n  background: #c5c5c5;\n  border-radius: 50%;\n  font-weight: 600;\n  text-align: center;\n}\n.header {\n  background-color: #a7a8a9;\n  box-shadow: 0 0 4px 3px rgba(0,0,0,0.2);\n}\n.header__link {\n  padding: 0.5rem;\n  display: block;\n  color: #eee;\n  font-size: 1.8rem;\n  font-weight: 600;\n  text-align: center;\n}\n.main-button {\n  padding: 0.5rem 1rem;\n  font-size: 1.2rem;\n  border-radius: 10px;\n  border: 1px solid #afafaf;\n  background-color: rgba(0,0,0,0.24);\n  color: #fff;\n  transition: background-color 0.5s ease;\n}\n.main-button:hover {\n  background-color: #172b4d;\n}\n.main-button--dark {\n  background-color: #172b4d;\n}\n.main-button--large {\n  width: 130px;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(216,216,216,0.86);\n}\n.modal__card {\n  padding: 3rem 2rem;\n  background-color: #fff;\n  max-height: calc(100% - 40px);\n  max-width: 500px;\n  width: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  box-shadow: 0 0 19px 3px rgba(0,0,0,0.2);\n}\n.form {\n  font-size: 1.2rem;\n  color: #172b4d;\n}\n.form__title,\n.form__description {\n  padding: 5px 10px;\n  font-size: 1.2rem;\n  width: 100%;\n  color: #172b4d;\n}\n.form__priority {\n  margin: 0 1rem;\n  padding: 4px 10px;\n  font-size: 1.2rem;\n  background-color: inherit;\n  color: #172b4d;\n}\n.form__buttons-box {\n  display: flex;\n  justify-content: space-between;\n}\n.todo-dropdown {\n  position: relative;\n  display: inline-block;\n}\n.todo-dropdown__button {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: #fff;\n}\n.todo-dropdown__menu {\n  padding-top: 5px;\n  position: absolute;\n  width: 120px;\n  top: 100%;\n  left: 50%;\n  z-index: 1;\n  transform: translateX(-50%);\n}\n.todo-dropdown__content {\n  padding-bottom: 8px;\n  padding-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.1);\n  display: none;\n  flex-direction: column;\n  background-color: #fff;\n}\n.todo-dropdown__item {\n  text-decoration: none;\n  color: #4a4a4a;\n  padding: 6px 16px;\n  font-size: 1rem;\n}\n.todo-dropdown__item:hover {\n  background-color: #172b4d;\n  color: #fff;\n}\n.todo-dropdown:hover .todo-dropdown__content {\n  display: flex;\n}\n.footer {\n  border-top: 1px solid #172b4d;\n}\n.footer__details {\n  padding: 2rem;\n  color: #172b4d;\n  font-size: 1rem;\n  font-weight: bold;\n}\n.navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.navigation__filter {\n  margin: 0 1rem;\n  padding: 4px 10px;\n  width: 200px;\n  font-size: 1.2rem;\n  background-color: inherit;\n  color: #172b4d;\n}\n.search__input {\n  padding: 5px 10px;\n  font-size: 1.2rem;\n  width: 100%;\n  color: #172b4d;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/controllers/CreateTodoController.js":
/*!*************************************************!*\
  !*** ./src/controllers/CreateTodoController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateTodoController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CreateTodoController =
/*#__PURE__*/
function () {
  function CreateTodoController(createTodoView, todoListView, todoModel) {
    _classCallCheck(this, CreateTodoController);

    this.createTodoView = createTodoView;
    this.todoListView = todoListView;
    this.todoModel = todoModel;
    this.initialize();
  }

  _createClass(CreateTodoController, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.createTodoView.onsubmitAddTodo = function (evt) {
        evt.preventDefault();

        var func = function func() {
          _this.todoListView.renderTodoList(_this.todoModel);
        };

        if (_this.createTodoView.getTodoTitle() === '' || _this.createTodoView.getTodoDescription() === '') {
          _this.createTodoView.showRequiredMessage();

          return;
        }

        _this.todoModel.createTodo(_this.createTodoView.getTodoTitle(), _this.createTodoView.getTodoDescription(), _this.createTodoView.getTodoPriority(), func);

        _this.createTodoView.toggleHiddenModal();
      };

      this.createTodoView.oncancelCancelTodo = function () {
        _this.createTodoView.toggleHiddenModal();

        _this.createTodoView.setTodoTitle('');

        _this.createTodoView.getTodoDescription('');

        _this.createTodoView.getTodoPriority('high');
      };

      this.createTodoView.renderCreateTodo();
    }
  }]);

  return CreateTodoController;
}();



/***/ }),

/***/ "./src/controllers/EditTodoController.js":
/*!***********************************************!*\
  !*** ./src/controllers/EditTodoController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditTodoController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EditTodoController =
/*#__PURE__*/
function () {
  function EditTodoController(createTodoView, todoView, todoModel, todoId) {
    _classCallCheck(this, EditTodoController);

    this.createTodoView = createTodoView;
    this.todoView = todoView;
    this.todoModel = todoModel;
    this.todoId = todoId;
    this.initialize();
  }

  _createClass(EditTodoController, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.createTodoView.onsubmitEditTodo = function (evt) {
        evt.preventDefault();

        var func = function func() {
          _this.todoView.renderTodo(_this.todoModel);
        };

        if (_this.createTodoView.getTodoTitle() === '' || _this.createTodoView.getTodoDescription() === '') {
          _this.createTodoView.showRequiredMessage();

          return;
        }

        _this.todoModel.editTodo(_this.todoId, _this.createTodoView.getTodoTitle(), _this.createTodoView.getTodoDescription(), _this.createTodoView.getTodoPriority(), func);

        _this.createTodoView.toggleHiddenModal();
      };

      this.createTodoView.oncancelCancelTodo = function () {
        _this.createTodoView.toggleHiddenModal();
      };

      this.createTodoView.renderCreateTodo();
    }
  }]);

  return EditTodoController;
}();



/***/ }),

/***/ "./src/controllers/NavigationController.js":
/*!*************************************************!*\
  !*** ./src/controllers/NavigationController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoController; });
/* harmony import */ var _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/TodoModel */ "./src/models/TodoModel.js");
/* harmony import */ var _views_CreateTodoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/CreateTodoView */ "./src/views/CreateTodoView.js");
/* harmony import */ var _views_TodoListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/TodoListView */ "./src/views/TodoListView.js");
/* harmony import */ var _CreateTodoController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTodoController */ "./src/controllers/CreateTodoController.js");
/* harmony import */ var _TodoListController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoListController */ "./src/controllers/TodoListController.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../todos */ "./todos.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var TodoController =
/*#__PURE__*/
function () {
  function TodoController(view, todoListView) {
    _classCallCheck(this, TodoController);

    this.navigationView = view;
    this.todoListView = todoListView;
    this.initialize();
  }

  _createClass(TodoController, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.navigationView.onclickCreateTodo = function () {
        var addTodoModelEl = document.querySelector('.add-todo-model');
        var createTodoView = new _views_CreateTodoView__WEBPACK_IMPORTED_MODULE_1__["default"](addTodoModelEl);
        var todoModel = new _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
        new _CreateTodoController__WEBPACK_IMPORTED_MODULE_3__["default"](createTodoView, _this.todoListView, todoModel);
        createTodoView.toggleHiddenModal();
      };

      var todoList = _toConsumableArray(_todos__WEBPACK_IMPORTED_MODULE_5__["todos"]);

      var todosEl = document.querySelector('.todos');
      var todoListView = new _views_TodoListView__WEBPACK_IMPORTED_MODULE_2__["default"](todosEl);
      var todoModel = new _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__["default"]();

      this.navigationView.oninputSearchTodos = function (evt) {
        if (evt.target.value) {
          var foundTodos = _todos__WEBPACK_IMPORTED_MODULE_5__["todos"].filter(function (todo) {
            return todo.title.toLowerCase().includes(evt.target.value);
          });
          Object(_todos__WEBPACK_IMPORTED_MODULE_5__["setTodos"])(foundTodos);
        } else {
          Object(_todos__WEBPACK_IMPORTED_MODULE_5__["setTodos"])(todoList);
        }

        new _TodoListController__WEBPACK_IMPORTED_MODULE_4__["default"](todoListView, todoModel);
      };

      this.navigationView.onchangeFilterDoneTodos = function (evt) {
        var foundTodos = [];

        if (evt.target.value === 'done') {
          foundTodos = _todos__WEBPACK_IMPORTED_MODULE_5__["todos"].filter(function (todo) {
            return todo.done === true;
          });
        } else if (evt.target.value === 'open') {
          foundTodos = _todos__WEBPACK_IMPORTED_MODULE_5__["todos"].filter(function (todo) {
            return todo.done === false;
          });
        } else {
          foundTodos = todoList;
        }

        Object(_todos__WEBPACK_IMPORTED_MODULE_5__["setTodos"])(foundTodos);
        new _TodoListController__WEBPACK_IMPORTED_MODULE_4__["default"](todoListView, todoModel);
      };

      this.navigationView.onchangeFilterPriorityTodos = function (evt) {
        var foundTodos = [];

        if (evt.target.value === 'all') {
          foundTodos = todoList;
        } else {
          foundTodos = _todos__WEBPACK_IMPORTED_MODULE_5__["todos"].filter(function (todo) {
            return todo.priority === evt.target.value;
          });
        }

        Object(_todos__WEBPACK_IMPORTED_MODULE_5__["setTodos"])(foundTodos);
        new _TodoListController__WEBPACK_IMPORTED_MODULE_4__["default"](todoListView, todoModel);
      };

      this.navigationView.renderNavigation();
    }
  }]);

  return TodoController;
}();



/***/ }),

/***/ "./src/controllers/TodoController.js":
/*!*******************************************!*\
  !*** ./src/controllers/TodoController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoController; });
/* harmony import */ var _views_CreateTodoView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/CreateTodoView */ "./src/views/CreateTodoView.js");
/* harmony import */ var _EditTodoController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditTodoController */ "./src/controllers/EditTodoController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TodoController =
/*#__PURE__*/
function () {
  function TodoController(view, model, todo) {
    _classCallCheck(this, TodoController);

    this.todoView = view;
    this.todoModel = model;
    this.todo = todo;
    this.initialize();
  }

  _createClass(TodoController, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.todoView.onclickDeleteTodo = function () {
        _this.todoModel.deleteTodo(_this.todo.id, function () {
          _this.todoView.deleteTodo();
        });
      };

      this.todoView.onclickEditTodo = function () {
        var addTodoModelEl = document.querySelector('.add-todo-model');
        var createTodoView = new _views_CreateTodoView__WEBPACK_IMPORTED_MODULE_0__["default"](addTodoModelEl);
        new _EditTodoController__WEBPACK_IMPORTED_MODULE_1__["default"](createTodoView, _this.todoView, _this.todoModel, _this.todo.id);
        createTodoView.toggleHiddenModal();
        createTodoView.setTodoTitle(_this.todo.title);
        createTodoView.setTodoDescription(_this.todo.description);
        createTodoView.setTodoPriority(_this.todo.priority);
      };

      this.todoView.onclickDoneTodo = function () {
        _this.todoModel.doneTodo(_this.todo.id, function () {
          _this.todoView.markAsDoneTodo();
        });
      };

      this.todoModel.getTodo(this.todo.id, function () {
        _this.todoView.renderTodo(_this.todoModel);
      });
    }
  }]);

  return TodoController;
}();



/***/ }),

/***/ "./src/controllers/TodoListController.js":
/*!***********************************************!*\
  !*** ./src/controllers/TodoListController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoListController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoListController =
/*#__PURE__*/
function () {
  function TodoListController(view, model) {
    _classCallCheck(this, TodoListController);

    this.todoListView = view;
    this.todoListModel = model;
    this.initialize();
  }

  _createClass(TodoListController, [{
    key: "initialize",
    value: function initialize() {
      this.todoListView.renderTodoList(this.todoListModel);
    }
  }]);

  return TodoListController;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/TodoModel */ "./src/models/TodoModel.js");
/* harmony import */ var _views_TodoListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/TodoListView */ "./src/views/TodoListView.js");
/* harmony import */ var _controllers_TodoListController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/TodoListController */ "./src/controllers/TodoListController.js");
/* harmony import */ var _views_NavigationView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/NavigationView */ "./src/views/NavigationView.js");
/* harmony import */ var _controllers_NavigationController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/NavigationController */ "./src/controllers/NavigationController.js");






__webpack_require__(/*! ./styles/main.styl */ "./src/styles/main.styl");

var todosEl = document.querySelector('.todos');
var addTodoModelEl = document.querySelector('.add-todo-model');
var navigationEl = document.querySelector('.navigation');
var todoListView = new _views_TodoListView__WEBPACK_IMPORTED_MODULE_1__["default"](todosEl);
var todoModel = new _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _controllers_TodoListController__WEBPACK_IMPORTED_MODULE_2__["default"](todoListView, todoModel);
var navigationView = new _views_NavigationView__WEBPACK_IMPORTED_MODULE_3__["default"](navigationEl);
new _controllers_NavigationController__WEBPACK_IMPORTED_MODULE_4__["default"](navigationView, todoListView);

/***/ }),

/***/ "./src/models/TodoModel.js":
/*!*********************************!*\
  !*** ./src/models/TodoModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoModel; });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../todos */ "./todos.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var TodoModel = function TodoModel() {
  var _this = this;

  _classCallCheck(this, TodoModel);

  _defineProperty(this, "getTodo", function (todoId, callback) {
    _this.todo = _todos__WEBPACK_IMPORTED_MODULE_0__["todos"].find(function (todo) {
      return todo.id === todoId;
    });
    callback(null);
  });

  _defineProperty(this, "createTodo", function (title, description, priority, callback) {
    var todoList = [{
      id: Math.floor(Math.random() * Math.floor(1000)),
      done: false,
      title: title,
      description: description,
      priority: priority
    }].concat(_toConsumableArray(_todos__WEBPACK_IMPORTED_MODULE_0__["todos"]));
    Object(_todos__WEBPACK_IMPORTED_MODULE_0__["setTodos"])(todoList);
    callback(null);
  });

  _defineProperty(this, "editTodo", function (todoId, title, description, priority, callback) {
    var editedTodo = _todos__WEBPACK_IMPORTED_MODULE_0__["todos"].find(function (todo) {
      return todo.id === todoId;
    });
    editedTodo.title = title;
    editedTodo.description = description;
    editedTodo.priority = priority;
    callback(null);
  });

  _defineProperty(this, "deleteTodo", function (todoId, callback) {
    var deletedTodo = _todos__WEBPACK_IMPORTED_MODULE_0__["todos"].find(function (todo) {
      return todo.id === todoId;
    });
    var todoList = [].concat(_toConsumableArray(_todos__WEBPACK_IMPORTED_MODULE_0__["todos"].slice(0, deletedTodo)), _toConsumableArray(_todos__WEBPACK_IMPORTED_MODULE_0__["todos"].slice(deletedTodo + 1)));
    Object(_todos__WEBPACK_IMPORTED_MODULE_0__["setTodos"])(todoList);
    callback(null);
  });

  _defineProperty(this, "doneTodo", function (todoId, callback) {
    var doneTodo = _todos__WEBPACK_IMPORTED_MODULE_0__["todos"].find(function (todo) {
      return todo.id === todoId;
    });
    doneTodo.done = true;
    callback(null);
  });

  this.todo = null;
};



/***/ }),

/***/ "./src/styles/main.styl":
/*!******************************!*\
  !*** ./src/styles/main.styl ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/stylus-loader!./main.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/index.js!./src/styles/main.styl");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/views/CreateTodoView.js":
/*!*************************************!*\
  !*** ./src/views/CreateTodoView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateTodoView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CreateTodoView =
/*#__PURE__*/
function () {
  function CreateTodoView(element) {
    _classCallCheck(this, CreateTodoView);

    this.element = element;
    this.onsubmitAddTodo = null;
    this.onsubmitEditTodo = null;
    this.oncancelCancelTodo = null;
  }

  _createClass(CreateTodoView, [{
    key: "renderCreateTodo",
    value: function renderCreateTodo() {
      this.element.innerHTML = "\n        <div class=\"modal hidden\">\n          <div class=\"modal__background\"></div>\n          <div class=\"modal__card\">\n            <form method=\"post\" class=\"form\">\n              <div class=\"mb-1\">\n                <input class=\"form__title\" type=\"text\" spellcheck=\"false\" placeholder=\"Title\" autofocus required />\n              </div>\n              <div class=\"mb-1\">\n                <textarea class=\"form__description\" spellcheck=\"false\" placeholder=\"Write a description..\" required\n                  rows=\"5\"></textarea>\n                <p class=\"is-required description-title-required hidden\">Description and title are required!</p>\n              </div>\n              <p class=\"mb-2\">\n                <label class=\"form__label\">Priority: </label>\n                <select required name=\"priority\" class=\"form__priority\">\n                  <option value=\"high\" data-id=\"0\">high</option>\n                  <option value=\"normal\" data-id=\"1\">normal</option>\n                  <option value=\"low\" data-id=\"2\">low</option>\n                </select>\n              </p>\n              <p class=\"form__buttons-box\">\n                <button type=\"button\" class=\"main-button main-button--dark main-button--large submit-btn\">Save</button>\n                <button type=\"button\" class=\"main-button main-button--large cancel-btn\">Cancel</button>\n              </p>\n            </form>\n          </div>\n        </div>\n    ";
      var submitButtonEl = this.element.querySelector('.submit-btn');
      var cancelButtonEl = this.element.querySelector('.cancel-btn');
      submitButtonEl.addEventListener('click', this.onsubmitEditTodo);
      submitButtonEl.addEventListener('click', this.onsubmitAddTodo);
      cancelButtonEl.addEventListener('click', this.oncancelCancelTodo);
    }
  }, {
    key: "getTodoTitle",
    value: function getTodoTitle() {
      return this.element.querySelector('.form__title').value;
    }
  }, {
    key: "setTodoTitle",
    value: function setTodoTitle(value) {
      this.element.querySelector('.form__title').value = value;
    }
  }, {
    key: "getTodoDescription",
    value: function getTodoDescription() {
      return this.element.querySelector('.form__description').value;
    }
  }, {
    key: "setTodoDescription",
    value: function setTodoDescription(value) {
      this.element.querySelector('.form__description').value = value;
    }
  }, {
    key: "getTodoPriority",
    value: function getTodoPriority() {
      var formPriorityEl = this.element.querySelector('.form__priority');
      return formPriorityEl.options[formPriorityEl.selectedIndex].value;
    }
  }, {
    key: "setTodoPriority",
    value: function setTodoPriority(value) {
      var formPriorityEl = this.element.querySelector('.form__priority');
      formPriorityEl.options.selectedIndex = Array.from(formPriorityEl.options).find(function (option) {
        return option.value === value;
      }).dataset.id;
    }
  }, {
    key: "toggleHiddenModal",
    value: function toggleHiddenModal() {
      var modalEl = this.element.querySelector('.modal');
      var body = document.querySelector('body');
      modalEl.classList.toggle('hidden');
      body.classList.toggle('overflow-hidden');
    }
  }, {
    key: "showRequiredMessage",
    value: function showRequiredMessage() {
      var descriptionTitleRequiredEl = document.querySelector('.description-title-required');
      descriptionTitleRequiredEl.classList.remove('hidden');
    }
  }]);

  return CreateTodoView;
}();



/***/ }),

/***/ "./src/views/NavigationView.js":
/*!*************************************!*\
  !*** ./src/views/NavigationView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoView =
/*#__PURE__*/
function () {
  function TodoView(element) {
    _classCallCheck(this, TodoView);

    this.element = element;
    this.onclickCreateTodo = null;
    this.oninputSearchTodos = null;
    this.onchangeFilterDoneTodos = null;
    this.onchangeFilterPriorityTodos = null;
  }

  _createClass(TodoView, [{
    key: "renderNavigation",
    value: function renderNavigation() {
      this.element.innerHTML = "\n        <div class=\"search\">\n          <input class=\"search__input\" spellCheck=\"false\" type=\"text\" placeholder=\"Search by title\" />\n        </div>\n        <div>\n          <select name=\"filterDone\" class=\"navigation__filter filter-done\">\n            <option value=\"all\">all</option>\n            <option value=\"open\">open</option>\n            <option value=\"done\">done</option>\n          </select>\n        </div>\n        <div>\n          <select name=\"filterPriority\" class=\"navigation__filter filter-priority\">\n            <option value=\"all\">all</option>\n            <option value=\"high\">high</option>\n            <option value=\"normal\">normal</option>\n            <option value=\"low\">low</option>\n          </select>\n        </div>\n        <button type=\"button\" class=\"main-button create-button\">Create</button>\n    ";
      var createButtonEl = this.element.querySelector('.create-button');
      createButtonEl.addEventListener('click', this.onclickCreateTodo);
      var searchInputEl = this.element.querySelector('.search__input');
      searchInputEl.addEventListener('input', this.oninputSearchTodos);
      var filterDoneEl = this.element.querySelector('.filter-done');
      filterDoneEl.addEventListener('change', this.onchangeFilterDoneTodos);
      var filterPriorityEl = this.element.querySelector('.filter-priority');
      filterPriorityEl.addEventListener('change', this.onchangeFilterPriorityTodos);
    }
  }]);

  return TodoView;
}();



/***/ }),

/***/ "./src/views/TodoListView.js":
/*!***********************************!*\
  !*** ./src/views/TodoListView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoListView; });
/* harmony import */ var _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/TodoModel */ "./src/models/TodoModel.js");
/* harmony import */ var _TodoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoView */ "./src/views/TodoView.js");
/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/TodoController */ "./src/controllers/TodoController.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../todos */ "./todos.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var TodoListView =
/*#__PURE__*/
function () {
  function TodoListView(element) {
    _classCallCheck(this, TodoListView);

    this.element = element;
  }

  _createClass(TodoListView, [{
    key: "renderTodoList",
    value: function renderTodoList(model) {
      var todoListEl = document.querySelector('.todo-list');
      todoListEl.innerHTML = '';
      _todos__WEBPACK_IMPORTED_MODULE_3__["todos"].forEach(function (el) {
        var todo = document.createElement('li');
        todo.classList.add('todo-item');
        var todoView = new _TodoView__WEBPACK_IMPORTED_MODULE_1__["default"](todo);
        var todoModel = new _models_TodoModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
        new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_2__["default"](todoView, todoModel, el);
        todoListEl.appendChild(todo);
      });
    }
  }]);

  return TodoListView;
}();



/***/ }),

/***/ "./src/views/TodoView.js":
/*!*******************************!*\
  !*** ./src/views/TodoView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoView =
/*#__PURE__*/
function () {
  function TodoView(element) {
    _classCallCheck(this, TodoView);

    this.element = element;
    this.onclickDeleteTodo = null;
    this.onclickEditTodo = null;
    this.onclickDoneTodo = null;
  }

  _createClass(TodoView, [{
    key: "renderTodo",
    value: function renderTodo(model) {
      var _model$todo = model.todo,
          title = _model$todo.title,
          description = _model$todo.description,
          done = _model$todo.done,
          priority = _model$todo.priority;
      this.element.innerHTML = "\n        <h2 class=\"todo-item__title\">".concat(title, "</h2>\n        <p class=\"todo-item__description\">").concat(description, "</p>\n        <div class=\"todo-item__wrapper\">\n          <span class=\"todo-item__priority\">").concat(priority, "</span>\n          <div class=\"todo-dropdown\">\n            <button class=\"todo-dropdown__button\">...</button>\n            <div class=\"todo-dropdown__menu\">\n              <div class=\"todo-dropdown__content\">\n                <button type=\"button\" class=\"todo-dropdown__item done-button todo-dropdown__item--active\">done</li>\n                <button type=\"button\" class=\"todo-dropdown__item edit-button\">edit</li>\n                <button type=\"button\" class=\"todo-dropdown__item delete-button\">delete</li>\n              </div>\n            </div>\n          </div>\n        </div>\n    ");

      if (model.todo.done) {
        this.element.classList.add('todo-item--done');
      }

      var deleteButtonEl = this.element.querySelector('.delete-button');
      deleteButtonEl.addEventListener('click', this.onclickDeleteTodo);
      var editButtonEl = this.element.querySelector('.edit-button');
      editButtonEl.addEventListener('click', this.onclickEditTodo);
      var doneButtonEl = this.element.querySelector('.done-button');
      doneButtonEl.addEventListener('click', this.onclickDoneTodo);
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo() {
      this.element.remove();
    }
  }, {
    key: "markAsDoneTodo",
    value: function markAsDoneTodo() {
      this.element.classList.add('todo-item--done');
    }
  }]);

  return TodoView;
}();



/***/ }),

/***/ "./todos.js":
/*!******************!*\
  !*** ./todos.js ***!
  \******************/
/*! exports provided: todos, setTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todos", function() { return todos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTodos", function() { return setTodos; });
/* eslint-disable */
var todos = [{
  "id": 1,
  "title": "sunt aut facere",
  "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
  "done": false,
  "priority": "high"
}, {
  "id": 2,
  "title": "qui est esse",
  "description": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores",
  "done": false,
  "priority": "low"
}, {
  "id": 3,
  "title": "ea molestias quasi",
  "description": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi",
  "done": false,
  "priority": "high"
}, {
  "id": 4,
  "title": "eum et est occaecati",
  "description": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda",
  "done": true,
  "priority": "low"
}, {
  "id": 5,
  "title": "nesciunt quas odio",
  "description": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est",
  "done": true,
  "priority": "normal"
}, {
  "id": 6,
  "title": "dolorem eum magni",
  "description": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid",
  "done": true,
  "priority": "normal"
}, {
  "id": 7,
  "title": "magnam facilis autem",
  "description": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe",
  "done": false,
  "priority": "hign"
}, {
  "id": 8,
  "title": "dolorem dolore",
  "description": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint",
  "done": false,
  "priority": "normal"
}, {
  "id": 9,
  "title": "nesciunt iure omnis",
  "description": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis",
  "done": true,
  "priority": "low"
}, {
  "id": 10,
  "title": "optio molestias",
  "description": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  "done": false,
  "priority": "normal"
}]; // to change the value of todos variable outside the module

function setTodos(value) {
  todos = value;
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map