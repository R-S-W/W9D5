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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    \n    const clock = document.getElementById('clock');\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clock);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogLinkCreator, attachDogLinks, handleEnter, handleLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachDogLinks\", function() { return attachDogLinks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleEnter\", function() { return handleEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLeave\", function() { return handleLeave; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nconst dogLinkCreator = function(){\n  \n  let dogArray = [];\n  Object.keys(dogs).forEach((dog)=>{\n    \n    const newA = document.createElement('a');\n    \n    newA.innerHTML =dog;\n    newA.setAttribute('href', dogs[dog]);\n    const newLi = document.createElement('li');\n    newLi.setAttribute('class', 'dog-link');\n    newLi.append(newA);\n    dogArray.push(newLi);\n  });\n  return dogArray;\n}\n\nfunction attachDogLinks(){\n  let dogLinks = dogLinkCreator();\n  const dddl= document.getElementsByClassName('drop-down-dog-list')[0];\n  dddl.classList.add('hidden');\n  dogLinks.forEach((listElement)=>{\n  dddl.append(listElement);\n  });\n}\n\n\nfunction handleEnter(){\n  const dddn = document.getElementsByClassName('drop-down-dog-nav')[0];\n  \n  dddn.addEventListener('mouseenter', e => {\n    const dddl = document.getElementsByClassName('drop-down-dog-list')[0];\n\n    dddl.classList.remove('hidden');\n    console.log(\"we're in!\");\n  });\n}\n\nfunction handleLeave(){\n  const dddn = document.getElementsByClassName('drop-down-dog-nav')[0];\n  dddn.addEventListener('mouseleave', e => {\n    const dddl = document.getElementsByClassName('drop-down-dog-list')[0];\n\n    dddl.classList.add( 'hidden');\n    console.log(\"we're out!\");\n  });\n}\n\n\nattachDogLinks();\nhandleLeave();\nhandleEnter();\n\n// module.exports = dogLinkCreator;\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const todos = [];\nconst list = document.getElementsByClassName('todos')[0];\n\nif(list.children.length === 1){\n    let jarr = JSON.parse(localStorage.getItem('stodos'))\n    jarr.forEach(el => {\n        todos.push(el);\n    });\n    populateList(todos);\n}\n\n\n// const form = getElementsByClassName('add-todo-form');\n\nfunction addTodo(){\n \n    let addTodoInput = document.querySelector(\"input[name='add-todo']\");\n    let todoObj = {value: addTodoInput.value, done: false};\n    todos.push(todoObj);\n    addTodoInput.value = \"\";\n    \n    populateList([todos[todos.length - 1]]);\n    localStorage.setItem('stodos',JSON.stringify(todos));\n};\n\nfunction populateList(todos){\n    // debugger\n    todos.forEach((td)=> {\n        const lb = document.createElement('label');\n        const newString = document.createTextNode(td.value);\n        lb.appendChild(newString);\n\n        const cb = document.createElement('input');\n        cb.type = \"checkbox\";\n        cb.name = td.value;\n        cb.checked = td.done;\n        cb.setAttribute('class', 'cbutton');\n        \n        const li = document.createElement('li');\n        li.append(lb);\n        li.append(cb);\n        list.append(li);\n    });\n};\nconst sbtn = document.querySelector(\"input[value='+ Add Todo']\");\nsbtn.addEventListener('click', e =>{\n    addTodo();\n}) ;\n\n// const cbxs = document.querySelectorAll(\"input[type='checkbox']\");\n// const cbxs = document.getElementsByClassName(\"cbutton\");\n\nlist.addEventListener('click', e =>{\n    for(let i = 0; i < todos.length; i++){\n        if(todos[i].value === e.target.name) {\n            todos[i].done = e.target.checked\n        }\n        localStorage.setItem('stodos',JSON.stringify(todos));\n    }\n});\n\n\nmodule.exports = addTodo;\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n\n    if (htmlElement.children.length ==1){\n        htmlElement.removeChild(htmlElement.childNodes[0]);\n    }\n    const newP = document.createElement('p');\n    const newString = document.createTextNode(string);\n    newP.appendChild(newString);\n    \n    htmlElement.append(newP);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n// htmlGenerator('aaaaaaa', partyHeader)\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });