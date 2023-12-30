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

/***/ "./app/public/assets/js/main.js":
/*!**************************************!*\
  !*** ./app/public/assets/js/main.js ***!
  \**************************************/
/***/ (() => {

eval("const leftBtn = document.querySelector(\".l-btn\");\r\nconst rightBtn = document.querySelector(\".r-btn\");\r\n\r\n\r\nrightBtn.addEventListener(\"click\",\r\n    function (event) {\r\n        const content = document.querySelector(\".product-slide\");\r\n        content.scrollLeft += 1100;\r\n        event.preventDefault();\r\n\r\n    })\r\nleftBtn.addEventListener(\"click\",\r\n    function (event) {\r\n        const content = document.querySelector(\".product-slide\");\r\n        content.scrollLeft -= 1100;\r\n        event.preventDefault();\r\n\r\n    })\r\nconst leftBtn1 = document.querySelector(\".btn-1b\");\r\nconst rightBtn1 = document.querySelector(\".btn-1a\");\r\n\r\n\r\nrightBtn1.addEventListener(\"click\",\r\n    function (event) {\r\n        const content = document.querySelector(\".product-slide-1\");\r\n        content.scrollLeft += 1000;\r\n        event.preventDefault();\r\n\r\n    })\r\nleftBtn1.addEventListener(\"click\",\r\n    function (event) {\r\n        const content = document.querySelector(\".product-slide-1\");\r\n        content.scrollLeft -= 1100;\r\n        event.preventDefault();\r\n\r\n    })\r\nconst leftBtn2 = document.querySelector(\".btn-1c\");\r\nconst rightBtn2 = document.querySelector(\".btn-1d\");\r\n\r\n\r\nrightBtn2.addEventListener(\"click\",\r\n    function (event) {\r\n        const content = document.querySelector(\".product-slide-2\");\r\n        content.scrollLeft += 1100;\r\n        event.preventDefault();\r\n\r\n    })\r\nleftBtn2.addEventListener(\"click\",\r\n    function (event) {\r\n        const content = document.querySelector(\".product-slide-2\");\r\n        content.scrollLeft -= 1100;\r\n        event.preventDefault();\r\n\r\n    })\r\n\r\nconst backtop = document.querySelector(\".backtop\");\r\n\r\nbacktop.addEventListener(\"click\", () => {\r\n    window.scrollTo({\r\n        top: 0,\r\n        behavior: \"smooth\"\r\n    })\r\n})\r\n\r\nconst sidebar = document.querySelector(\".sidebar\");\r\nconst cross = document.querySelector(\".fa-xmark\");\r\nconst solid = document.querySelector(\".fa-solid\");\r\nconst black = document.querySelector(\".black\");\r\nconst sidebtn = document.querySelector(\".second-1\");\r\n\r\nsidebtn.addEventListener(\"click\", () => {\r\n    sidebar.classList.add(\"active\");\r\n    cross.classList.add(\"active\");\r\n    solid.classList.add(\"active\");\r\n    black.classList.add(\"active\");\r\n    document.body.classList.add(\"stop-scroll\");\r\n})\r\ncross.addEventListener(\"click\", () => {\r\n    sidebar.classList.remove(\"active\");\r\n    cross.classList.remove(\"active\");\r\n    solid.classList.remove(\"active\");\r\n    black.classList.remove(\"active\");\r\n    document.body.classList.remove(\"stop-scroll\");\r\n})\r\n\r\nconst sign = document.querySelector(\".ac\");\r\nconst tri = document.querySelector(\".triangle\");\r\nconst signin = document.querySelector(\".hdn-sign\");\r\n\r\nsign.addEventListener(\"click\", () => {\r\n    black.classList.toggle(\"active-1\");\r\n    signin.classList.toggle(\"active\");\r\n    tri.classList.toggle(\"active\");\r\n    document.body.classList.toggle(\"stop-scroll\");\r\n})\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/public/assets/js/main.js"]();
/******/ 	
/******/ })()
;