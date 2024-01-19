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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    fetch('api/category')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            const categoryContainer = document.getElementById('categoryContainer');\r\n            const additionalContainer = document.getElementById('additionalContainer');\r\n\r\n            data.data.slice(0, 4).forEach(category => {\r\n                createCategoryElement(category, categoryContainer);\r\n            });\r\n\r\n            data.data.slice(4, 8).forEach(category => {\r\n                createCategoryElement(category, additionalContainer);\r\n            });\r\n        })\r\n        .catch(error => console.error('Error fetching category data:', error));\r\n\r\n    function createCategoryElement(category, container) {\r\n        const categoryBox = document.createElement('div');\r\n        categoryBox.className = 'box box-c';\r\n\r\n        const title = document.createElement('h3');\r\n        title.textContent = category.description;\r\n\r\n        const image = document.createElement('div');\r\n        const imgElement = document.createElement('img');\r\n        imgElement.src = category.image_url;\r\n        imgElement.alt = category.name;\r\n        image.appendChild(imgElement);\r\n\r\n        const seeMoreLink = document.createElement('a');\r\n        seeMoreLink.href = category.link;\r\n        seeMoreLink.textContent = 'See More';\r\n\r\n        categoryBox.appendChild(title);\r\n        categoryBox.appendChild(image);\r\n        categoryBox.appendChild(seeMoreLink);\r\n\r\n        container.appendChild(categoryBox);\r\n    }\r\n});\r\n\r\nfunction fetchAndDisplayArticles(categoryId, elementId) {\r\n    fetch(`api/article?categoryId=${categoryId}`)\r\n        .then(response => response.json())\r\n        .then(articles => {\r\n            articles.data.forEach(article => {\r\n                const li = document.createElement(\"li\");\r\n                li.id = article.id;\r\n\r\n                const cardDiv = document.createElement(\"div\");\r\n                cardDiv.classList.add(\"card\");\r\n\r\n                const cardImage = document.createElement(\"img\");\r\n                cardImage.classList.add(\"card-img-top\");\r\n                cardImage.src = article.image;\r\n                cardImage.alt = \"Card image cap\";\r\n\r\n                const cardBody = document.createElement(\"div\");\r\n                cardBody.classList.add(\"card-body\");\r\n\r\n                const cardTitle = document.createElement(\"h3\");\r\n                cardTitle.classList.add(\"card-title\");\r\n                cardTitle.textContent = article.name;\r\n\r\n                const priceParagraph = document.createElement(\"p\");\r\n                priceParagraph.classList.add(\"card-text\");\r\n                priceParagraph.textContent = \"Price: \" + article.price + \" €\";\r\n\r\n                const descriptionParagraph = document.createElement(\"p\");\r\n                descriptionParagraph.classList.add(\"card-text\");\r\n                descriptionParagraph.textContent = article.description;\r\n\r\n                const addToCartButton = document.createElement(\"a\");\r\n                addToCartButton.classList.add(\"btn\", \"btn-primary\");\r\n                addToCartButton.textContent = \"Add to cart\";\r\n                addToCartButton.addEventListener(\"click\", toggleOffcanvas);\r\n                addToCartButton.addEventListener(\"click\", addArticleToCart);\r\n\r\n                cardBody.appendChild(cardTitle);\r\n                cardBody.appendChild(priceParagraph);\r\n                cardBody.appendChild(descriptionParagraph);\r\n                cardBody.appendChild(addToCartButton);\r\n\r\n                cardDiv.appendChild(cardImage);\r\n                cardDiv.appendChild(cardBody);\r\n\r\n                li.appendChild(cardDiv);\r\n\r\n                document.getElementById(elementId).appendChild(li);\r\n            });\r\n        })\r\n        .catch(error => console.error(\"Error fetching articles:\", error));\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    fetchAndDisplayArticles(1, \"book-products\");\r\n    fetchAndDisplayArticles(2, \"pc-products\");\r\n\r\n    const toggleButton = document.getElementById(\"toggle-btn\");\r\n    const closeButton = document.getElementById(\"close-btn\");\r\n\r\n    if (toggleButton) {\r\n        toggleButton.addEventListener(\"click\", toggleOffcanvas);\r\n    }\r\n\r\n    if (closeButton) {\r\n        closeButton.addEventListener(\"click\", closeOffcanvas);\r\n    }\r\n});\r\n\r\nfunction toggleOffcanvas() {\r\n    const offcanvas = document.getElementById('offcanvasRight');\r\n    offcanvas.classList.toggle('open');\r\n\r\n    const isOpen = offcanvas.classList.contains('open');\r\n\r\n    offcanvas.style.display = 'block';\r\n}\r\n\r\nfunction closeOffcanvas() {\r\n    const offcanvas = document.getElementById('offcanvasRight');\r\n    offcanvas.classList.remove('open');\r\n\r\n    offcanvas.style.display = 'none';\r\n}\r\n\r\n\r\nfunction fetchArticleById(articleId) {\r\n    return fetch(`api/article?id=${articleId}`)\r\n        .then(response => response.json())\r\n        .then(data => data.data)\r\n        .catch(error => {\r\n            console.error(\"Error fetching article:\", error);\r\n            throw error;\r\n        });\r\n}\r\n\r\nshoppingCart = [];\r\n\r\nfunction addArticleToCart(event) {\r\n    const articleId = event.target.closest(\"li\").id;\r\n\r\n    fetchArticleById(articleId)\r\n        .then(article => {\r\n            const cartItems = document.getElementById('cart-items');\r\n\r\n            const existingCartItem = document.getElementById(\"item-\" + article.id);\r\n\r\n            if (existingCartItem) {\r\n                updateQuantity(existingCartItem, article, 1);\r\n            } else {\r\n                shoppingCart.push(article);\r\n\r\n                const cartItem = document.createElement(\"div\");\r\n                cartItem.id = \"item-\" + article.id;\r\n                cartItem.classList.add(\"cart-item\");\r\n\r\n                const itemInfo = document.createElement(\"div\");\r\n                itemInfo.classList.add(\"item-info\");\r\n\r\n                const itemImage = document.createElement(\"img\");\r\n                itemImage.src = article.image;\r\n                itemImage.alt = \"Product Image\";\r\n                itemInfo.appendChild(itemImage);\r\n\r\n                const itemDetails = document.createElement(\"div\");\r\n                itemDetails.innerHTML = `\r\n                    <div class=\"item-name\">${article.name}</div>\r\n                    <div class=\"item-price\">Price: $${article.price}</div>\r\n                `;\r\n                itemInfo.appendChild(itemDetails);\r\n\r\n                cartItem.appendChild(itemInfo);\r\n\r\n                const itemQuantity = document.createElement(\"div\");\r\n                itemQuantity.classList.add(\"item-quantity\");\r\n\r\n                const minusButton = document.createElement(\"button\");\r\n                minusButton.innerHTML = `<i class=\"fas fa-minus\"></i>`;\r\n                minusButton.addEventListener(\"click\", () => updateQuantity(cartItem, article, -1));\r\n\r\n                const quantityValue = document.createElement(\"span\");\r\n                quantityValue.textContent = \"1\";\r\n\r\n                const plusButton = document.createElement(\"button\");\r\n                plusButton.innerHTML = `<i class=\"fas fa-plus\"></i>`;\r\n                plusButton.addEventListener(\"click\", () => updateQuantity(cartItem, article, 1));\r\n\r\n                itemQuantity.appendChild(minusButton);\r\n                itemQuantity.appendChild(quantityValue);\r\n                itemQuantity.appendChild(plusButton);\r\n\r\n                cartItem.appendChild(itemQuantity);\r\n\r\n                const removeButton = document.createElement(\"button\");\r\n                removeButton.classList.add(\"remove-item-btn\");\r\n                removeButton.innerHTML = `<i class=\"fas fa-times\"></i>`;\r\n                removeButton.addEventListener(\"click\", () => removeCartItem(cartItem, article));\r\n\r\n                cartItem.appendChild(removeButton);\r\n\r\n                cartItems.appendChild(cartItem);\r\n            }\r\n        })\r\n        .catch(error => {\r\n            console.error(\"Error adding article to cart:\", error);\r\n        });\r\n}\r\n\r\nfunction updateQuantity(cartItem, article, change) {\r\n    const quantityElement = cartItem.querySelector(\".item-quantity span\");\r\n    let currentQuantity = parseInt(quantityElement.textContent);\r\n    currentQuantity += change;\r\n    if (currentQuantity < 1) {\r\n        currentQuantity = 1;\r\n    }\r\n    quantityElement.textContent = currentQuantity;\r\n\r\n    updateItemTotal(cartItem, article, currentQuantity);\r\n    updateCartTotal();\r\n}\r\n\r\nfunction removeCartItem(cartItem, article) {\r\n    const index = shoppingCart.findIndex(item => item.id === article.id);\r\n    if (index !== -1) {\r\n        shoppingCart.splice(index, 1);\r\n    }\r\n\r\n    cartItem.remove();\r\n\r\n    // // Update the total after removing the item\r\n    // updateCartTotal();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/home.js?");

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