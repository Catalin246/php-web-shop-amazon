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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n    const categoryContainer = document.querySelector(\".space-y-2\");\r\n    const articleContainer = document.querySelector(\".grid.grid-cols-3\"); // Target the article section\r\n\r\n    // Get category ID from URL if available\r\n    const urlParams = new URLSearchParams(window.location.search);\r\n    const selectedCategoryId = urlParams.get(\"categoryId\");\r\n\r\n    // Fetch and populate categories\r\n    fetch(\"http://localhost/api/category\")\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data.status === \"success\") {\r\n                categoryContainer.innerHTML = \"\"; // Clear existing categories\r\n\r\n                let firstCategoryId = null;\r\n\r\n                data.data.forEach((category, index) => {\r\n                    const categoryElement = document.createElement(\"label\");\r\n                    categoryElement.classList.add(\"flex\", \"items-center\");\r\n                    categoryElement.innerHTML = `\r\n                        <input type=\"radio\" name=\"category\" class=\"mr-2\" value=\"${category.id}\" ${selectedCategoryId == category.id || (!selectedCategoryId && index === 0) ? 'checked' : ''}> ${category.name}\r\n                    `;\r\n                    categoryContainer.appendChild(categoryElement);\r\n                    \r\n                    if (index === 0) {\r\n                        firstCategoryId = category.id;\r\n                    }\r\n                });\r\n\r\n                // Add event listener to all category radio buttons\r\n                document.querySelectorAll(\"input[name='category']\").forEach(input => {\r\n                    input.addEventListener(\"change\", function () {\r\n                        window.location.href = `/home/category?categoryId=${this.value}`;\r\n                    });\r\n                });\r\n\r\n                // Fetch articles for the selected category or first by default\r\n                fetchArticles(selectedCategoryId || firstCategoryId);\r\n            }\r\n        })\r\n        .catch(error => console.error(\"Error fetching categories:\", error));\r\n\r\n    // Function to fetch and display articles\r\n    function fetchArticles(categoryId) {\r\n        fetch(`http://localhost/api/article?categoryId=${categoryId}`)\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                articleContainer.innerHTML = \"\"; // Clear existing articles\r\n\r\n                if (data.status === \"success\" && data.data.length > 0) {\r\n                    data.data.forEach(article => {\r\n                        const articleElement = document.createElement(\"div\");\r\n                        articleElement.classList.add(\"bg-white\", \"p-4\", \"rounded-lg\", \"shadow-md\");\r\n                        articleElement.innerHTML = `\r\n                            <img src=\"../${article.image_url}\" alt=\"Product Image\" class=\"mb-2\">\r\n                            <h3 class=\"font-medium\">${article.name}</h3>\r\n                            <p class=\"text-gray-600\">$${article.price}</p>\r\n                        `;\r\n                        articleContainer.appendChild(articleElement);\r\n                    });\r\n                } else {\r\n                    articleContainer.innerHTML = \"<p class='text-gray-500'>No articles available for this category.</p>\";\r\n                }\r\n            })\r\n            .catch(error => console.error(\"Error fetching articles:\", error));\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/category.js?");

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