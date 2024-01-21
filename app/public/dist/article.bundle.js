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

/***/ "./app/public/assets/js/article.js":
/*!*****************************************!*\
  !*** ./app/public/assets/js/article.js ***!
  \*****************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    let tableBody;\r\n    fetch('/api/category')\r\n        .then(response => response.json())\r\n        .then(categoryData => {\r\n            const categoryMap = {};\r\n            categoryData.data.forEach(category => {\r\n                categoryMap[category.id] = category.name;\r\n            });\r\n\r\n            fetch('/api/article')\r\n                .then(response => response.json())\r\n                .then(data => {\r\n                    tableBody = document.querySelector('#articleTable tbody');\r\n\r\n                    data.data.forEach(article => {\r\n                        const row = document.createElement('tr');\r\n\r\n                        const columns = ['id', 'category_id', 'name', 'description', 'image', 'price', 'num_sales', 'amount', 'display'];\r\n\r\n                        columns.forEach(column => {\r\n                            const cell = document.createElement('td');\r\n\r\n                            if (column === 'category_id') {\r\n                                cell.textContent = categoryMap[article[column]];\r\n                            } else {\r\n                                cell.textContent = article[column];\r\n                            }\r\n\r\n                            row.appendChild(cell);\r\n                        });\r\n\r\n                        const actionsCell = document.createElement('td');\r\n\r\n                        const editButton = document.createElement('button');\r\n                        const editLink = document.createElement('a');\r\n                        editLink.href = `/article/edit?id=${article.id}`;\r\n                        editButton.textContent = 'Edit';\r\n                        editButton.setAttribute('update-articleid', article.id);\r\n                        editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'm-2', 'px-3');\r\n                        editLink.appendChild(editButton);\r\n                        actionsCell.appendChild(editLink);\r\n\r\n                        const deleteButton = document.createElement('button');\r\n                        deleteButton.textContent = 'Delete';\r\n                        deleteButton.setAttribute('delete-articleid', article.id);\r\n                        deleteButton.addEventListener('click', function () {\r\n                            const articleId = this.getAttribute('delete-articleid');\r\n                            deleteArticle(articleId, row);\r\n                        });\r\n                        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'm-2');\r\n                        actionsCell.appendChild(deleteButton);\r\n\r\n                        row.appendChild(actionsCell);\r\n\r\n                        tableBody.appendChild(row);\r\n                    });\r\n                })\r\n                .catch(error => console.error('Error fetching data:', error));\r\n        })\r\n        .catch(error => console.error('Error fetching category data:', error));\r\n\r\n    function deleteArticle(articleId, row) {\r\n        fetch(`/api/article/delete?id=${articleId}`, {\r\n            method: 'DELETE',\r\n        })\r\n            .then(response => {\r\n                if (response.ok) {\r\n                    tableBody.removeChild(row);\r\n                } else {\r\n                    console.error('Error deleting article');\r\n                }\r\n            })\r\n            .catch(error => console.error('Error deleting article:', error));\r\n    }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    fetch('/api/category')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            const addCategorySelect = document.getElementById('addCategory');\r\n\r\n            data.data.forEach(category => {\r\n                const option = document.createElement('option');\r\n                option.value = category.id;\r\n                option.textContent = category.name;\r\n                addCategorySelect.appendChild(option);\r\n            });\r\n        })\r\n        .catch(error => console.error('Error fetching categories:', error));\r\n});\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/article.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/public/assets/js/article.js"]();
/******/ 	
/******/ })()
;