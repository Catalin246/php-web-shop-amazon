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

/***/ "./app/public/assets/js/home.js":
/*!**************************************!*\
  !*** ./app/public/assets/js/home.js ***!
  \**************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    fetch('api/category')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            const categoryContainer = document.getElementById('categoryContainer');\r\n            const additionalContainer = document.getElementById('additionalContainer');\r\n\r\n            data.data.slice(0, 4).forEach(category => {\r\n                createCategoryElement(category, categoryContainer);\r\n            });\r\n\r\n            data.data.slice(4, 8).forEach(category => {\r\n                createCategoryElement(category, additionalContainer);\r\n            });\r\n        })\r\n        .catch(error => console.error('Error fetching category data:', error));\r\n\r\n    function createCategoryElement(category, container) {\r\n        const categoryBox = document.createElement('div');\r\n        categoryBox.className = 'box box-c';\r\n\r\n        const title = document.createElement('h3');\r\n        title.textContent = category.description;\r\n\r\n        const image = document.createElement('div');\r\n        const imgElement = document.createElement('img');\r\n        imgElement.src = category.image_url;\r\n        imgElement.alt = category.name;\r\n        image.appendChild(imgElement);\r\n\r\n        const seeMoreLink = document.createElement('a');\r\n        seeMoreLink.href = category.link;\r\n        seeMoreLink.textContent = 'See More';\r\n\r\n        categoryBox.appendChild(title);\r\n        categoryBox.appendChild(image);\r\n        categoryBox.appendChild(seeMoreLink);\r\n\r\n        container.appendChild(categoryBox);\r\n    }\r\n});\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/public/assets/js/home.js"]();
/******/ 	
/******/ })()
;