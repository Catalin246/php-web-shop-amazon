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

/***/ "./app/public/assets/js/payment.js":
/*!*****************************************!*\
  !*** ./app/public/assets/js/payment.js ***!
  \*****************************************/
/***/ (() => {

eval("// Function to load shopping cart from LocalStorage\r\nfunction loadShoppingCart() {\r\n    const savedCart = localStorage.getItem('shoppingCart');\r\n    const cartData = savedCart ? JSON.parse(savedCart) : [];\r\n\r\n    displayOrderSummary(cartData);\r\n}\r\n\r\n// Function to display the order summary\r\nfunction displayOrderSummary(cartData) {\r\n    const orderSummary = document.getElementById('order-summary');\r\n    if (cartData.length === 0) {\r\n        orderSummary.innerHTML = \"<p>Your cart is empty!</p>\";\r\n        return;\r\n    }\r\n\r\n    let subtotal = 0;\r\n    let orderDetailsHTML = '';\r\n\r\n    // Loop through the cart data to create the order summary\r\n    cartData.forEach(item => {\r\n        const totalItemPrice = (item.price * item.quantity).toFixed(2); // Use the quantity of each item\r\n        subtotal += parseFloat(totalItemPrice);\r\n        orderDetailsHTML += `\r\n            <p class=\"flex justify-between mb-2\">\r\n                <span>${item.name} x ${item.quantity}</span>\r\n                <span>$${totalItemPrice}</span>\r\n            </p>\r\n        `;\r\n    });\r\n\r\n    const shipping = 10.00; // Flat shipping fee\r\n    const total = (subtotal + shipping).toFixed(2);\r\n\r\n    // Inject the order details into the order summary container\r\n    orderSummary.innerHTML = `\r\n        ${orderDetailsHTML}\r\n        <p class=\"flex justify-between mb-2\"><span>Shipping:</span> <span>$${shipping.toFixed(2)}</span></p>\r\n        <p class=\"flex justify-between font-semibold text-lg\"><span>Total:</span> <span>$${total}</span></p>\r\n    `;\r\n}\r\n\r\n// Call the function on page load\r\nwindow.onload = loadShoppingCart;\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/payment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/public/assets/js/payment.js"]();
/******/ 	
/******/ })()
;