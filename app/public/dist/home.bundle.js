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

/***/ }),

/***/ "./app/public/assets/js/home.js":
/*!**************************************!*\
  !*** ./app/public/assets/js/home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.js */ \"./app/public/assets/js/category.js\");\n/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_category_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    fetch('api/category')\n        .then(response => response.json())\n        .then(data => {\n            const categoryContainer = document.getElementById('categoryContainer');\n            const additionalContainer = document.getElementById('additionalContainer');\n\n            data.data.slice(0, 4).forEach(category => {\n                createCategoryElement(category, categoryContainer);\n            });\n\n            data.data.slice(4, 8).forEach(category => {\n                createCategoryElement(category, additionalContainer);\n            });\n        })\n        .catch(error => console.error('Error fetching category data:', error));\n\n    function createCategoryElement(category, container) {\n        const link = document.createElement('a');\n        link.href = `/home/category`;\n        link.className = 'category-link'; \n        link.style.textDecoration = 'none'; \n    \n        const categoryBox = document.createElement('div');\n        categoryBox.className = 'box box-c';\n    \n        const title = document.createElement('h3');\n        title.textContent = category.description;\n    \n        const image = document.createElement('div');\n        const imgElement = document.createElement('img');\n        imgElement.src = category.image_url;\n        imgElement.alt = category.name;\n        image.appendChild(imgElement);\n    \n        categoryBox.appendChild(title);\n        categoryBox.appendChild(image);\n\n        const seeMoreButton = document.createElement('a');\n        seeMoreButton.href = `/home/category`;\n        seeMoreButton.textContent = 'See More';\n        seeMoreButton.className = 'see-more-btn'; \n\n        categoryBox.appendChild(seeMoreButton)\n    \n        link.appendChild(categoryBox);\n        container.appendChild(link);\n    }        \n});\n\nfunction fetchAndDisplayArticles(categoryId, elementId) {\n    fetch(`api/article?categoryId=${categoryId}`)\n        .then(response => response.json())\n        .then(articles => {\n            articles.data.forEach(article => {\n                const li = document.createElement(\"li\");\n                li.id = article.id;\n\n                const cardDiv = document.createElement(\"a\");\n                cardDiv.classList.add(\"card\");\n\n                const cardImage = document.createElement(\"img\");\n                cardImage.classList.add(\"card-img-top\");\n                cardImage.src = article.image;\n                cardImage.alt = \"Card image cap\";\n\n                const cardBody = document.createElement(\"div\");\n                cardBody.classList.add(\"card-body\");\n\n                const cardTitle = document.createElement(\"h3\");\n                cardTitle.classList.add(\"card-title\");\n                cardTitle.textContent = article.name;\n\n                const priceParagraph = document.createElement(\"p\");\n                priceParagraph.classList.add(\"card-text\");\n                priceParagraph.textContent = \"Price: \" + article.price + \" €\";\n\n                const descriptionParagraph = document.createElement(\"p\");\n                descriptionParagraph.classList.add(\"card-text\");\n                descriptionParagraph.textContent = article.description;\n\n                const addToCartButton = document.createElement(\"a\");\n                addToCartButton.classList.add(\"btn\", \"btn-primary\");\n                addToCartButton.textContent = \"Add to cart\";\n                addToCartButton.addEventListener(\"click\", toggleOffcanvas);\n                addToCartButton.addEventListener(\"click\", addArticleToCart);\n\n                cardBody.appendChild(cardTitle);\n                cardBody.appendChild(priceParagraph);\n                cardBody.appendChild(descriptionParagraph);\n                cardBody.appendChild(addToCartButton);\n\n                cardDiv.appendChild(cardImage);\n                cardDiv.appendChild(cardBody);\n\n                cardDiv.addEventListener(\"click\", toggleOffcanvas);\n                cardDiv.addEventListener(\"click\", addArticleToCart);\n\n                li.appendChild(cardDiv);\n\n                document.getElementById(elementId).appendChild(li);\n            });\n        })\n        .catch(error => console.error(\"Error fetching articles:\", error));\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    fetchAndDisplayArticles(1, \"book-products\");\n    fetchAndDisplayArticles(2, \"pc-products\");\n\n    const toggleButton = document.getElementById(\"toggle-btn\");\n    const closeButton = document.getElementById(\"close-btn\");\n\n    if (toggleButton) {\n        toggleButton.addEventListener(\"click\", toggleOffcanvas);\n    }\n\n    if (closeButton) {\n        closeButton.addEventListener(\"click\", closeOffcanvas);\n    }\n});\n\nfunction toggleOffcanvas() {\n    const offcanvas = document.getElementById('offcanvasRight');\n    offcanvas.classList.toggle('open');\n\n    const isOpen = offcanvas.classList.contains('open');\n\n    offcanvas.style.display = 'block';\n}\n\nfunction closeOffcanvas() {\n    const offcanvas = document.getElementById('offcanvasRight');\n    offcanvas.classList.remove('open');\n\n    offcanvas.style.display = 'none';\n}\n\n\nfunction fetchArticleById(articleId) {\n    return fetch(`api/article?id=${articleId}`)\n        .then(response => response.json())\n        .then(data => data.data)\n        .catch(error => {\n            console.error(\"Error fetching article:\", error);\n            throw error;\n        });\n}\n\nshoppingCart = [];\n\nfunction addArticleToCart(event) {\n    const articleId = event.target.closest(\"li\").id;\n\n    fetchArticleById(articleId)\n        .then(article => {\n            const cartItems = document.getElementById('cart-items');\n\n            const existingCartItem = document.getElementById(\"item-\" + article.id);\n\n            if (existingCartItem) {\n                updateQuantity(existingCartItem, article, 1);\n            } else {\n                shoppingCart.push(article);\n\n                const cartItem = document.createElement(\"div\");\n                cartItem.id = \"item-\" + article.id;\n                cartItem.classList.add(\"cart-item\");\n\n                const itemInfo = document.createElement(\"div\");\n                itemInfo.classList.add(\"item-info\");\n\n                const itemImage = document.createElement(\"img\");\n                itemImage.src = article.image;\n                itemImage.alt = \"Product Image\";\n                itemInfo.appendChild(itemImage);\n\n                const itemDetails = document.createElement(\"div\");\n                itemDetails.innerHTML = `\n                    <div class=\"item-name\">${article.name}</div>\n                    <div class=\"item-price\">Price: ${article.price} €</div>\n                `;\n                itemInfo.appendChild(itemDetails);\n\n                cartItem.appendChild(itemInfo);\n\n                const itemQuantity = document.createElement(\"div\");\n                itemQuantity.classList.add(\"item-quantity\");\n\n                const minusButton = document.createElement(\"button\");\n                minusButton.innerHTML = `<i class=\"fas fa-minus\"></i>`;\n                minusButton.addEventListener(\"click\", () => updateQuantity(cartItem, article, -1));\n\n                const quantityValue = document.createElement(\"span\");\n                quantityValue.textContent = \"1\";\n\n                const plusButton = document.createElement(\"button\");\n                plusButton.innerHTML = `<i class=\"fas fa-plus\"></i>`;\n                plusButton.addEventListener(\"click\", () => updateQuantity(cartItem, article, 1));\n\n                itemQuantity.appendChild(minusButton);\n                itemQuantity.appendChild(quantityValue);\n                itemQuantity.appendChild(plusButton);\n\n                cartItem.appendChild(itemQuantity);\n\n                const removeButton = document.createElement(\"button\");\n                removeButton.classList.add(\"remove-item-btn\");\n                removeButton.innerHTML = `<i class=\"fas fa-times\"></i>`;\n                removeButton.addEventListener(\"click\", () => removeCartItem(cartItem, article));\n\n                cartItem.appendChild(removeButton);\n\n                cartItems.appendChild(cartItem);\n\n                // Update the total after removing the item\n                updateCartTotal();\n            }\n        })\n        .catch(error => {\n            console.error(\"Error adding article to cart:\", error);\n        });\n}\n\nfunction updateQuantity(cartItem, article, change) {\n    const quantityElement = cartItem.querySelector(\".item-quantity span\");\n    let currentQuantity = parseInt(quantityElement.textContent);\n    currentQuantity += change;\n    if (currentQuantity < 1) {\n        removeCartItem(cartItem, article)\n    }\n    quantityElement.textContent = currentQuantity;\n\n    updateItemTotal(cartItem, article, currentQuantity);\n    updateCartTotal();\n}\n\nfunction removeCartItem(cartItem, article) {\n    const index = shoppingCart.findIndex(item => item.id === article.id);\n    if (index !== -1) {\n        shoppingCart.splice(index, 1);\n    }\n\n    cartItem.remove();\n\n    // Update the total after removing the item\n    updateCartTotal();\n}\n\nfunction updateCartTotal() {\n    let cartTotalElement = document.getElementById(\"cart-total\");\n    let total = shoppingCart.reduce((sum, item) => {\n        let quantity = parseInt(document.getElementById(\"item-\" + item.id).querySelector(\".item-quantity span\").textContent);\n        return sum + item.price * quantity;\n    }, 0).toFixed(2);\n\n    // Clear previous content\n    cartTotalElement.innerHTML = \"\";\n\n    if (total == 0) {\n        cartTotalElement.innerHTML = `<div class=\"empty-cart-message\">Your cart is empty. Start shopping now!</div>`;\n        \n        // Remove the checkout button if total is 0\n        let checkoutBtn = document.getElementById(\"checkout-btn\");\n        if (checkoutBtn) {\n            checkoutBtn.style.display = 'none'; // Hides the button\n        }\n    } else {\n        cartTotalElement.innerHTML = `Cart Total: ${total} €`;\n\n        // Ensure the checkout button is visible if total > 0\n        let checkoutBtn = document.getElementById(\"checkout-btn\");\n        if (checkoutBtn) {\n            checkoutBtn.style.display = 'block'; // Shows the button\n        }\n    }\n}\n\nfunction updateItemTotal(cartItem, article, quantity) {\n    let itemPrice = parseFloat(article.price);\n    let totalPrice = (itemPrice * quantity).toFixed(2);\n\n    let priceParagraph = cartItem.querySelector(\".item-info .item-price\");\n    \n    if (priceParagraph) {\n        priceParagraph.textContent = `Price: ${totalPrice} €`;\n    }\n\n    updateCartTotal();\n}\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/home.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/public/assets/js/home.js");
/******/ 	
/******/ })()
;