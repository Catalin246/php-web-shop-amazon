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

/***/ "./app/public/assets/js/user.js":
/*!**************************************!*\
  !*** ./app/public/assets/js/user.js ***!
  \**************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    const registrationForm = document.getElementById('registrationForm');\r\n\r\n    registrationForm.addEventListener('submit', function (event) {\r\n        event.preventDefault();\r\n\r\n        const name = document.getElementById('registerName').value;\r\n        const email = document.getElementById('registerEmail').value;\r\n        const password = document.getElementById('registerPassword').value;\r\n        const passwordConfirm = document.getElementById('registerPasswordConfirm').value;\r\n\r\n        if (!name || !email || !password || !passwordConfirm) {\r\n            alert('Please fill in all fields.');\r\n            return;\r\n        }\r\n\r\n        if (password !== passwordConfirm) {\r\n            alert('Passwords do not match.');\r\n            return;\r\n        }\r\n\r\n        const formData = {\r\n            name: name,\r\n            email: email,\r\n            password: password,\r\n            passwordConfirm: passwordConfirm,\r\n            phone: \"\",\r\n            userRoleId: 1,\r\n        };\r\n\r\n        fetch('http://localhost/api/user', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(formData),\r\n        })\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                window.location.href = '/';\r\n            })\r\n            .catch(error => {\r\n                console.error('Error:', error);\r\n            });\r\n    });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    fetch('/api/user')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n\r\n            const tableBody = document.querySelector('#userTable tbody');\r\n\r\n            data.data.forEach(user => {\r\n                const row = tableBody.insertRow();\r\n                row.innerHTML = `\r\n                    <th scope=\"row\">${user.id}</th>\r\n                    <td>${user.email}</td>\r\n                    <td>${user.name}</td>\r\n                    <td>${user.phone}</td>\r\n                    <td>${user.user_role_id}</td>\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-sm\">Edit</button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n                    </td>\r\n                `;\r\n            });\r\n        })\r\n        .catch(error => console.error('Error fetching data:', error));\r\n});\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/public/assets/js/user.js"]();
/******/ 	
/******/ })()
;