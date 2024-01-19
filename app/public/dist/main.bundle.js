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

/***/ "./app/public/assets/js/main.js":
/*!**************************************!*\
  !*** ./app/public/assets/js/main.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.js */ \"./app/public/assets/js/order.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    (0,_order_js__WEBPACK_IMPORTED_MODULE_0__.fetchOrderData)();\r\n\r\n    const leftBtn = document.querySelector(\".l-btn\");\r\n    const rightBtn = document.querySelector(\".r-btn\");\r\n\r\n    rightBtn.addEventListener(\"click\",\r\n        function (event) {\r\n            const content = document.querySelector(\".product-slide\");\r\n            content.scrollLeft += 1100;\r\n            event.preventDefault();\r\n\r\n        })\r\n    leftBtn.addEventListener(\"click\",\r\n        function (event) {\r\n            const content = document.querySelector(\".product-slide\");\r\n            content.scrollLeft -= 1100;\r\n            event.preventDefault();\r\n\r\n        })\r\n    const leftBtn1 = document.querySelector(\".btn-1b\");\r\n    const rightBtn1 = document.querySelector(\".btn-1a\");\r\n\r\n\r\n    rightBtn1.addEventListener(\"click\",\r\n        function (event) {\r\n            const content = document.querySelector(\".product-slide-1\");\r\n            content.scrollLeft += 1000;\r\n            event.preventDefault();\r\n\r\n        })\r\n    leftBtn1.addEventListener(\"click\",\r\n        function (event) {\r\n            const content = document.querySelector(\".product-slide-1\");\r\n            content.scrollLeft -= 1100;\r\n            event.preventDefault();\r\n\r\n        })\r\n    const leftBtn2 = document.querySelector(\".btn-1c\");\r\n    const rightBtn2 = document.querySelector(\".btn-1d\");\r\n\r\n\r\n    rightBtn2.addEventListener(\"click\",\r\n        function (event) {\r\n            const content = document.querySelector(\".product-slide-2\");\r\n            content.scrollLeft += 1100;\r\n            event.preventDefault();\r\n\r\n        })\r\n    leftBtn2.addEventListener(\"click\",\r\n        function (event) {\r\n            const content = document.querySelector(\".product-slide-2\");\r\n            content.scrollLeft -= 1100;\r\n            event.preventDefault();\r\n\r\n        })\r\n\r\n    const backtop = document.querySelector(\".backtop\");\r\n\r\n    backtop.addEventListener(\"click\", () => {\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        })\r\n    })\r\n\r\n    const sidebar = document.querySelector(\".sidebar\");\r\n    const cross = document.querySelector(\".fa-xmark\");\r\n    const solid = document.querySelector(\".fa-solid\");\r\n    const black = document.querySelector(\".black\");\r\n    const sidebtn = document.querySelector(\".second-1\");\r\n\r\n    sidebtn.addEventListener(\"click\", () => {\r\n        sidebar.classList.add(\"active\");\r\n        cross.classList.add(\"active\");\r\n        solid.classList.add(\"active\");\r\n        black.classList.add(\"active\");\r\n        document.body.classList.add(\"stop-scroll\");\r\n    })\r\n    cross.addEventListener(\"click\", () => {\r\n        sidebar.classList.remove(\"active\");\r\n        cross.classList.remove(\"active\");\r\n        solid.classList.remove(\"active\");\r\n        black.classList.remove(\"active\");\r\n        document.body.classList.remove(\"stop-scroll\");\r\n    })\r\n\r\n    const sign = document.querySelector(\".ac\");\r\n    const tri = document.querySelector(\".triangle\");\r\n    const signin = document.querySelector(\".hdn-sign\");\r\n\r\n    sign.addEventListener(\"click\", () => {\r\n        black.classList.toggle(\"active-1\");\r\n        signin.classList.toggle(\"active\");\r\n        tri.classList.toggle(\"active\");\r\n        document.body.classList.toggle(\"stop-scroll\");\r\n    })\r\n});\r\n\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/main.js?");

/***/ }),

/***/ "./app/public/assets/js/order.js":
/*!***************************************!*\
  !*** ./app/public/assets/js/order.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchOrderData: () => (/* binding */ fetchOrderData)\n/* harmony export */ });\nasync function fetchOrderData() {\r\n    const delivered = {\r\n        0: 'In transit',\r\n        1: 'Delivered'\r\n    };\r\n\r\n    const paid = {\r\n        0: 'Must be paid',\r\n        1: 'Paid'\r\n    };\r\n\r\n    const tableBody = document.querySelector('#orderTable tbody');\r\n\r\n    try {\r\n        const response = await fetch('/api/order');\r\n        const data = await response.json();\r\n\r\n        const promises = data.data.map(async (order) => {\r\n            const user = await fetchUserData(order.user_id);\r\n            const row = tableBody.insertRow();\r\n            row.innerHTML = `\r\n                <tr data-orderid=\"${order.id}\">\r\n                    <td>${order.id}</td>\r\n                    <td>${user.name}</td>\r\n                    <td>${delivered[order.delivered]}</td>\r\n                    <td>${paid[order.paid]}</td>\r\n                </tr>\r\n            `;\r\n        });\r\n\r\n        await Promise.all(promises);\r\n    } catch (error) {\r\n        console.error('Error fetching data:', error);\r\n    }\r\n}\r\n\r\nasync function fetchUserData(id) {\r\n    try {\r\n        const userResponse = await fetch(`/api/user?id=${id}`);\r\n        const userData = await userResponse.json();\r\n\r\n        return userData.data;\r\n    } catch (error) {\r\n        console.error('Error fetching user data:', error);\r\n        return { name: 'Unknown' };\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/order.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/public/assets/js/main.js");
/******/ 	
/******/ })()
;