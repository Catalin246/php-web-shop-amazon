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

eval("document.addEventListener('DOMContentLoaded', function () {\n    let tableBody;\n    fetch('/api/category')\n        .then(response => response.json())\n        .then(categoryData => {\n            const categoryMap = {};\n            categoryData.data.forEach(category => {\n                categoryMap[category.id] = category.name;\n            });\n\n            fetch('/api/article')\n                .then(response => response.json())\n                .then(data => {\n                    tableBody = document.querySelector('#articleTable tbody');\n\n                    data.data.forEach(article => {\n                        const row = document.createElement('tr');\n\n                        const columns = ['id', 'category_id', 'name', 'description', 'image', 'price', 'num_sales', 'amount', 'display'];\n\n                        columns.forEach(column => {\n                            const cell = document.createElement('td');\n\n                            if (column === 'category_id') {\n                                cell.textContent = categoryMap[article[column]];\n                            } else {\n                                cell.textContent = article[column];\n                            }\n\n                            row.appendChild(cell);\n                        });\n\n                        const actionsCell = document.createElement('td');\n\n                        const editButton = document.createElement('button');\n                        const editLink = document.createElement('a');\n                        editLink.href = `/article/edit?id=${article.id}`;\n                        editButton.textContent = 'Edit';\n                        editButton.setAttribute('update-articleid', article.id);\n                        editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'm-2', 'px-3');\n                        editLink.appendChild(editButton);\n                        actionsCell.appendChild(editLink);\n\n                        const deleteButton = document.createElement('button');\n                        deleteButton.textContent = 'Delete';\n                        deleteButton.setAttribute('delete-articleid', article.id);\n                        deleteButton.addEventListener('click', function () {\n                            const articleId = this.getAttribute('delete-articleid');\n                            deleteArticle(articleId, row);\n                        });\n                        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'm-2');\n                        actionsCell.appendChild(deleteButton);\n\n                        row.appendChild(actionsCell);\n\n                        tableBody.appendChild(row);\n                    });\n                })\n                .catch(error => console.error('Error fetching data:', error));\n        })\n        .catch(error => console.error('Error fetching category data:', error));\n\n    function deleteArticle(articleId, row) {\n        fetch(`/api/article/delete?id=${articleId}`, {\n            method: 'DELETE',\n        })\n            .then(response => {\n                if (response.ok) {\n                    tableBody.removeChild(row);\n                } else {\n                    console.error('Error deleting article');\n                }\n            })\n            .catch(error => console.error('Error deleting article:', error));\n    }\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    fetch('/api/category')\n        .then(response => response.json())\n        .then(data => {\n            const addCategorySelect = document.getElementById('addCategory');\n\n            data.data.forEach(category => {\n                const option = document.createElement('option');\n                option.value = category.id;\n                option.textContent = category.name;\n                addCategorySelect.appendChild(option);\n            });\n        })\n        .catch(error => console.error('Error fetching categories:', error));\n});\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/article.js?");

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