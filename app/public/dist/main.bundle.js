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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.js */ \"./app/public/assets/js/order.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    (0,_order_js__WEBPACK_IMPORTED_MODULE_0__.fetchOrderData)();\n\n    const leftBtn = document.querySelector(\".l-btn\");\n    const rightBtn = document.querySelector(\".r-btn\");\n\n    rightBtn.addEventListener(\"click\",\n        function (event) {\n            const content = document.querySelector(\".product-slide\");\n            content.scrollLeft += 1100;\n            event.preventDefault();\n\n        })\n    leftBtn.addEventListener(\"click\",\n        function (event) {\n            const content = document.querySelector(\".product-slide\");\n            content.scrollLeft -= 1100;\n            event.preventDefault();\n\n        })\n    const leftBtn1 = document.querySelector(\".btn-1b\");\n    const rightBtn1 = document.querySelector(\".btn-1a\");\n\n\n    rightBtn1.addEventListener(\"click\",\n        function (event) {\n            const content = document.querySelector(\".product-slide-1\");\n            content.scrollLeft += 1000;\n            event.preventDefault();\n\n        })\n    leftBtn1.addEventListener(\"click\",\n        function (event) {\n            const content = document.querySelector(\".product-slide-1\");\n            content.scrollLeft -= 1100;\n            event.preventDefault();\n\n        })\n    const leftBtn2 = document.querySelector(\".btn-1c\");\n    const rightBtn2 = document.querySelector(\".btn-1d\");\n\n\n    rightBtn2.addEventListener(\"click\",\n        function (event) {\n            const content = document.querySelector(\".product-slide-2\");\n            content.scrollLeft += 1100;\n            event.preventDefault();\n\n        })\n    leftBtn2.addEventListener(\"click\",\n        function (event) {\n            const content = document.querySelector(\".product-slide-2\");\n            content.scrollLeft -= 1100;\n            event.preventDefault();\n\n        })\n\n    const backtop = document.querySelector(\".backtop\");\n\n    backtop.addEventListener(\"click\", () => {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        })\n    })\n\n    const sidebar = document.querySelector(\".sidebar\");\n    const cross = document.querySelector(\".fa-xmark\");\n    const solid = document.querySelector(\".fa-solid\");\n    const black = document.querySelector(\".black\");\n    const sidebtn = document.querySelector(\".second-1\");\n\n    sidebtn.addEventListener(\"click\", () => {\n        sidebar.classList.add(\"active\");\n        cross.classList.add(\"active\");\n        solid.classList.add(\"active\");\n        black.classList.add(\"active\");\n        document.body.classList.add(\"stop-scroll\");\n    })\n    cross.addEventListener(\"click\", () => {\n        sidebar.classList.remove(\"active\");\n        cross.classList.remove(\"active\");\n        solid.classList.remove(\"active\");\n        black.classList.remove(\"active\");\n        document.body.classList.remove(\"stop-scroll\");\n    })\n\n    const sign = document.querySelector(\".ac\");\n    const tri = document.querySelector(\".triangle\");\n    const signin = document.querySelector(\".hdn-sign\");\n\n    sign.addEventListener(\"click\", () => {\n        black.classList.toggle(\"active-1\");\n        signin.classList.toggle(\"active\");\n        tri.classList.toggle(\"active\");\n        document.body.classList.toggle(\"stop-scroll\");\n    })\n});\n\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/main.js?");

/***/ }),

/***/ "./app/public/assets/js/order.js":
/*!***************************************!*\
  !*** ./app/public/assets/js/order.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchOrderData: () => (/* binding */ fetchOrderData)\n/* harmony export */ });\nasync function fetchOrderData() {\n    const delivered = {\n        0: 'In transit',\n        1: 'Delivered'\n    };\n\n    const paid = {\n        0: 'Must be paid',\n        1: 'Paid'\n    };\n\n    const tableBody = document.querySelector('#orderTable tbody');\n\n    try {\n        const response = await fetch('/api/order');\n        const data = await response.json();\n\n        const promises = data.data.map(async (order) => {\n            const user = await fetchUserData(order.user_id);\n            const row = tableBody.insertRow();\n            row.innerHTML = `\n                <tr data-orderid=\"${order.id}\">\n                    <td>${order.id}</td>\n                    <td>${user.name}</td>\n                    <td>${delivered[order.delivered]}</td>\n                    <td>${paid[order.paid]}</td>\n                </tr>\n            `;\n        });\n\n        await Promise.all(promises);\n    } catch (error) {\n        console.error('Error fetching data:', error);\n    }\n}\n\nasync function fetchUserData(id) {\n    try {\n        const userResponse = await fetch(`/api/user?id=${id}`);\n        const userData = await userResponse.json();\n\n        return userData.data;\n    } catch (error) {\n        console.error('Error fetching user data:', error);\n        return { name: 'Unknown' };\n    }\n}\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/order.js?");

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