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

eval("// Function to load shopping cart from LocalStorage\r\nfunction loadShoppingCart() {\r\n    const savedCart = localStorage.getItem('shoppingCart');\r\n    const cartData = savedCart ? JSON.parse(savedCart) : [];\r\n\r\n    console.log(cartData);\r\n\r\n    displayOrderSummary(cartData);\r\n}\r\n\r\n// Function to display the order summary\r\nfunction displayOrderSummary(cartData) {\r\n    const orderSummary = document.getElementById('order-summary');\r\n    if (cartData.length === 0) {\r\n        orderSummary.innerHTML = \"<p>Your cart is empty!</p>\";\r\n        return;\r\n    }\r\n\r\n    let subtotal = 0;\r\n    let orderDetailsHTML = '';\r\n\r\n    // Loop through the cart data to create the order summary\r\n    cartData.forEach(item => {\r\n        const totalItemPrice = (item.price * item.quantity).toFixed(2); // Use the quantity of each item\r\n        subtotal += parseFloat(totalItemPrice);\r\n        orderDetailsHTML += `\r\n            <p class=\"flex justify-between mb-2\">\r\n                <span>${item.name} x ${item.quantity}</span>\r\n                <span>$${totalItemPrice}</span>\r\n            </p>\r\n        `;\r\n    });\r\n\r\n    const shipping = 10.00; // Flat shipping fee\r\n    const total = (subtotal + shipping).toFixed(2);\r\n\r\n    // Inject the order details into the order summary container\r\n    orderSummary.innerHTML = `\r\n        ${orderDetailsHTML}\r\n        <p class=\"flex justify-between mb-2\"><span>Shipping:</span> <span>$${shipping.toFixed(2)}</span></p>\r\n        <p class=\"flex justify-between font-semibold text-lg\"><span>Total:</span> <span>$${total}</span></p>\r\n    `;\r\n}\r\n\r\n// Call the function on page load\r\nwindow.onload = loadShoppingCart;\r\n\r\n// Function to handle order submission\r\nfunction handlePlaceOrder() {\r\n    // Gather the user's input from the form\r\n    const fullName = document.querySelector('input[placeholder=\"John Doe\"]').value.trim();\r\n    const phoneNumber = document.querySelector('input[placeholder=\"0612345678\"]').value.trim();\r\n    const deliveryAddress = document.querySelector('input[placeholder=\"Main Street 42, Haarlem, 2032WE\"]').value.trim();\r\n\r\n    // Check if any of the fields are empty\r\n    if (!fullName || !phoneNumber || !deliveryAddress) {\r\n        alert('Please fill in all the fields.');\r\n        return; // Stop the order process if any of the fields are empty\r\n    }\r\n\r\n    // Get cart data from LocalStorage\r\n    const savedCart = localStorage.getItem('shoppingCart');\r\n    const cartData = savedCart ? JSON.parse(savedCart) : [];\r\n\r\n    // If the cart is empty, show an alert and stop the order process\r\n    if (cartData.length === 0) {\r\n        alert('Your cart is empty!');\r\n        return;\r\n    }\r\n\r\n    // Prepare the items for the order (article_id and quantity)\r\n    const items = cartData.map(item => ({\r\n        article_id: item.id,\r\n        quantity: item.quantity\r\n    }));\r\n\r\n    // const user = document.body.dataset.user;\r\n\r\n    // console.log(user);\r\n\r\n    // Prepare the payload for the API\r\n    const orderData = {\r\n        delivered: false,\r\n        paid: true,\r\n        user_id: 69, // To Do: Take the user_id from the session\r\n        name: fullName,\r\n        phone: phoneNumber,\r\n        delivery_address: deliveryAddress,\r\n        items: items\r\n    };\r\n\r\n    // Send the order to the API endpoint\r\n    fetch('http://localhost/api/order', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(orderData),\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log('Order placed successfully:', data);\r\n\r\n        // Clear the shopping cart from localStorage\r\n        localStorage.removeItem('shoppingCart');\r\n\r\n        // Redirect to the home page after successful order submission\r\n        window.location.href = 'http://localhost/home/thankyou'; \r\n    })\r\n    .catch(error => {\r\n        console.error('Error placing order:', error);\r\n        alert('There was an error placing your order. Please try again.');\r\n    });\r\n}\r\n\r\n// Add event listener to the \"Place Order\" button\r\ndocument.getElementById('place-order-btn').addEventListener('click', handlePlaceOrder);\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/payment.js?");

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