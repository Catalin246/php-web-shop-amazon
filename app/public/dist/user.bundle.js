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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    const registrationForm = document.getElementById('registrationForm');\r\n\r\n    if (registrationForm) {\r\n        registrationForm.addEventListener('submit', function (event) {\r\n            event.preventDefault();\r\n\r\n            const name = document.getElementById('registerName').value;\r\n            const email = document.getElementById('registerEmail').value;\r\n            const password = document.getElementById('registerPassword').value;\r\n            const passwordConfirm = document.getElementById('registerPasswordConfirm').value;\r\n\r\n            if (!name || !email || !password || !passwordConfirm) {\r\n                alert('Please fill in all fields.');\r\n                return;\r\n            }\r\n\r\n            if (password !== passwordConfirm) {\r\n                alert('Passwords do not match.');\r\n                return;\r\n            }\r\n\r\n            const formData = {\r\n                name: name,\r\n                email: email,\r\n                password: password,\r\n                passwordConfirm: passwordConfirm,\r\n                phone: \"\",\r\n                userRoleId: 1,\r\n            };\r\n\r\n            fetch('http://localhost/api/user', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify(formData),\r\n            })\r\n                .then(response => response.json())\r\n                .then(data => {\r\n                    window.location.href = '/';\r\n                })\r\n                .catch(error => {\r\n                    console.error('Error:', error);\r\n                });\r\n        });\r\n    }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    fetch('/api/user')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            const tableBody = document.querySelector('#userTable tbody');\r\n\r\n            data.data.forEach(user => {\r\n                const row = tableBody.insertRow();\r\n                row.innerHTML = `\r\n                    <tr data-userid=\"${user.id}\">\r\n                    <td>${user.id}</td>\r\n                    <td>${user.email}</td>\r\n                    <td>${user.name}</td>\r\n                    <td>${user.phone}</td>\r\n                    <td>${user.user_role_id}</td>\r\n                    <td class=\"d-flex justify-content-center\">\r\n                        <a href=\"/user/edit?id=${user.id}\"><button update-userid=\"${user.id} type=\"button\" class=\"btn btn-warning btn-sm mx-2\">Edit</button></a>\r\n                        <button delete-userid=\"${user.id}\" type=\"button\" class=\"btn btn-danger btn-sm mx-2\">Delete</button>\r\n                    </td>\r\n                    </tr>\r\n                `;\r\n            });\r\n\r\n            const deleteButtons = document.querySelectorAll('#userTable tbody button[delete-userid]');\r\n            deleteButtons.forEach(deleteButton => {\r\n                deleteButton.addEventListener('click', function () {\r\n                    const userId = this.getAttribute('delete-userid');\r\n                    deleteUser(userId);\r\n                });\r\n            });\r\n        })\r\n        .catch(error => console.error('Error fetching data:', error));\r\n\r\n    function deleteUser(userId) {\r\n        const confirmDelete = confirm('Are you sure you want to delete this user?');\r\n        if (!confirmDelete) {\r\n            return;\r\n        }\r\n\r\n        fetch(`/api/user?id=${userId}`, {\r\n            method: 'DELETE',\r\n        })\r\n            .then(response => {\r\n                if (response.ok) {\r\n                    location.reload()\r\n                    console.log('User deleted successfully');\r\n                } else {\r\n                    console.error('Error deleting user');\r\n                }\r\n            })\r\n            .catch(error => {\r\n                console.error('Error:', error);\r\n            });\r\n    }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const addUserForm = document.getElementById('addUserForm');\r\n\r\n    if (addUserForm) {\r\n        addUserForm.addEventListener('submit', function (event) {\r\n            event.preventDefault();\r\n\r\n            const name = document.getElementById('addName').value;\r\n            const email = document.getElementById('addEmail').value;\r\n            const phone = document.getElementById('addPhone').value;\r\n            const role = document.getElementById('addRole').value;\r\n            const pass = document.getElementById('addPassword').value;\r\n            const repeatPass = document.getElementById('addRepeatPassword').value;\r\n\r\n            if (pass.length < 8) {\r\n                alert('Password must be at least 8 characters long.');\r\n                return;\r\n            }\r\n\r\n            if (pass !== repeatPass) {\r\n                alert('Passwords do not match.');\r\n                return;\r\n            }\r\n\r\n            const formData = {\r\n                name: name,\r\n                email: email,\r\n                phone: phone,\r\n                user_role_id: role,\r\n                password: pass,\r\n            };\r\n\r\n            fetch('/api/user', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify(formData),\r\n            })\r\n                .then(response => response.json())\r\n                .then(data => {\r\n                    if (data.status === 'success') {\r\n                        window.location.href = '/user';\r\n                    } else {\r\n                        console.error('Error updating user:', data.message);\r\n                    }\r\n                })\r\n                .catch(error => {\r\n                    console.error('Error:', error);\r\n                });\r\n        });\r\n    }\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const editUserForm = document.getElementById('editUserForm');\r\n\r\n    if (editUserForm) {\r\n        const userId = getUserIdFromUrl();\r\n\r\n        fetch(`/api/user?id=${userId}`)\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                document.getElementById('editName').value = data.data.name;\r\n                document.getElementById('editEmail').value = data.data.email;\r\n                document.getElementById('editPhone').value = data.data.phone;\r\n                document.getElementById('editRole').value = data.data.user_role_id;\r\n            })\r\n            .catch(error => console.error('Error fetching user data:', error));\r\n\r\n        editUserForm.addEventListener('submit', function (event) {\r\n            event.preventDefault();\r\n\r\n            const name = document.getElementById('editName').value;\r\n            const email = document.getElementById('editEmail').value;\r\n            const phone = document.getElementById('editPhone').value;\r\n            const role = document.getElementById('editRole').value;\r\n\r\n            console.log(document.getElementById('editRole').value);\r\n\r\n            const formData = {\r\n                name: name,\r\n                email: email,\r\n                phone: phone,\r\n                user_role_id: role,\r\n            };\r\n\r\n            fetch(`/api/user?id=${userId}`, {\r\n                method: 'PUT',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify(formData),\r\n            })\r\n                .then(response => response.json())\r\n                .then(data => {\r\n                    if (data.status === 'success') {\r\n                        window.location.href = '/user';\r\n                    } else {\r\n                        console.error('Error updating user:', data.message);\r\n                    }\r\n                })\r\n                .catch(error => {\r\n                    console.error('Error:', error);\r\n                });\r\n        });\r\n    }\r\n\r\n    function getUserIdFromUrl() {\r\n        const url = new URL(window.location.href);\r\n\r\n        const userId = url.searchParams.get('id');\r\n\r\n        return userId;\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://php-web-shop-amazon/./app/public/assets/js/user.js?");

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