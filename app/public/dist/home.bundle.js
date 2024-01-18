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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    fetch('api/category')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            const categoryContainer = document.getElementById('categoryContainer');\r\n            const additionalContainer = document.getElementById('additionalContainer');\r\n\r\n            data.data.slice(0, 4).forEach(category => {\r\n                createCategoryElement(category, categoryContainer);\r\n            });\r\n\r\n            data.data.slice(4, 8).forEach(category => {\r\n                createCategoryElement(category, additionalContainer);\r\n            });\r\n        })\r\n        .catch(error => console.error('Error fetching category data:', error));\r\n\r\n    function createCategoryElement(category, container) {\r\n        const categoryBox = document.createElement('div');\r\n        categoryBox.className = 'box box-c';\r\n\r\n        const title = document.createElement('h3');\r\n        title.textContent = category.description;\r\n\r\n        const image = document.createElement('div');\r\n        const imgElement = document.createElement('img');\r\n        imgElement.src = category.image_url;\r\n        imgElement.alt = category.name;\r\n        image.appendChild(imgElement);\r\n\r\n        const seeMoreLink = document.createElement('a');\r\n        seeMoreLink.href = category.link;\r\n        seeMoreLink.textContent = 'See More';\r\n\r\n        categoryBox.appendChild(title);\r\n        categoryBox.appendChild(image);\r\n        categoryBox.appendChild(seeMoreLink);\r\n\r\n        container.appendChild(categoryBox);\r\n    }\r\n});\r\n\r\nfunction fetchAndDisplayArticles(categoryId, elementId) {\r\n    fetch(`api/article?categoryId=${categoryId}`)\r\n        .then(response => response.json())\r\n        .then(articles => {\r\n            articles.data.forEach(article => {\r\n                const li = document.createElement(\"li\");\r\n\r\n                const cardDiv = document.createElement(\"div\");\r\n                cardDiv.classList.add(\"card\");\r\n\r\n                const cardImage = document.createElement(\"img\");\r\n                cardImage.classList.add(\"card-img-top\");\r\n                cardImage.src = article.image;\r\n                cardImage.alt = \"Card image cap\";\r\n\r\n                const cardBody = document.createElement(\"div\");\r\n                cardBody.classList.add(\"card-body\");\r\n\r\n                const cardTitle = document.createElement(\"h3\");\r\n                cardTitle.classList.add(\"card-title\");\r\n                cardTitle.textContent = article.name;\r\n\r\n                const priceParagraph = document.createElement(\"p\");\r\n                priceParagraph.classList.add(\"card-text\");\r\n                priceParagraph.textContent = \"Price: \" + article.price;\r\n\r\n                const descriptionParagraph = document.createElement(\"p\");\r\n                descriptionParagraph.classList.add(\"card-text\");\r\n                descriptionParagraph.textContent = article.description;\r\n\r\n                const addToCartButton = document.createElement(\"a\");\r\n                addToCartButton.href = \"#\";\r\n                addToCartButton.classList.add(\"btn\", \"btn-primary\");\r\n                addToCartButton.textContent = \"Add to cart\";\r\n\r\n                cardBody.appendChild(cardTitle);\r\n                cardBody.appendChild(priceParagraph);\r\n                cardBody.appendChild(descriptionParagraph);\r\n                cardBody.appendChild(addToCartButton);\r\n\r\n                cardDiv.appendChild(cardImage);\r\n                cardDiv.appendChild(cardBody);\r\n\r\n                li.appendChild(cardDiv);\r\n\r\n                document.getElementById(elementId).appendChild(li);\r\n            });\r\n        })\r\n        .catch(error => console.error(\"Error fetching articles:\", error));\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    fetchAndDisplayArticles(1, \"book-products\");\r\n    fetchAndDisplayArticles(2, \"pc-products\");\r\n\r\n    const toggleButton = document.getElementById(\"toggle-btn\");\r\n    const closeButton = document.getElementById(\"close-btn\");\r\n\r\n    if (toggleButton) {\r\n        toggleButton.addEventListener(\"click\", toggleOffcanvas);\r\n    }\r\n\r\n    if (closeButton) {\r\n        closeButton.addEventListener(\"click\", closeOffcanvas);\r\n    }\r\n});\r\n\r\nfunction toggleOffcanvas() {\r\n    const offcanvas = document.getElementById('offcanvasRight');\r\n    offcanvas.classList.toggle('open');\r\n\r\n    const isOpen = offcanvas.classList.contains('open');\r\n\r\n    offcanvas.style.display = isOpen ? 'block' : 'none';\r\n}\r\n\r\nfunction closeOffcanvas() {\r\n    const offcanvas = document.getElementById('offcanvasRight');\r\n    offcanvas.classList.remove('open');\r\n\r\n    offcanvas.style.display = 'none';\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/home.js?");

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