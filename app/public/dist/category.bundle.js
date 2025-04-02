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

/***/ "./app/public/assets/js/category.js":
/*!******************************************!*\
  !*** ./app/public/assets/js/category.js ***!
  \******************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n    fetch(\"/api/category\")\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data.status === \"success\") {\r\n                const categories = data.data;\r\n                const categoryContainer = document.getElementById(\"category-container\");\r\n                categoryContainer.innerHTML = \"\"; // Clear existing content\r\n                \r\n                categories.forEach(category => {\r\n                    const label = document.createElement(\"label\");\r\n                    label.classList.add(\"flex\", \"items-center\");\r\n                    \r\n                    const input = document.createElement(\"input\");\r\n                    input.type = \"radio\";\r\n                    input.name = \"category\";\r\n                    input.classList.add(\"mr-2\");\r\n                    input.value = category.id;\r\n                    \r\n                    label.appendChild(input);\r\n                    label.appendChild(document.createTextNode(category.name));\r\n                    categoryContainer.appendChild(label);\r\n                });\r\n            }\r\n        })\r\n        .catch(error => console.error(\"Error fetching categories:\", error));\r\n});\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/category.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/public/assets/js/category.js"]();
/******/ 	
/******/ })()
;