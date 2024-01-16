document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

            if (!name || !email || !password || !passwordConfirm) {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== passwordConfirm) {
                alert('Passwords do not match.');
                return;
            }

            const formData = {
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
                phone: "",
                userRoleId: 1,
            };

            fetch('http://localhost/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    window.location.href = '/';
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#userTable tbody');

            data.data.forEach(user => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <tr data-userid="${user.id}">
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.user_role_id}</td>
                    <td class="d-flex justify-content-center">
                        <a href="/user/edit"><button type="button" class="btn btn-warning btn-sm mx-2">Edit</button></a>
                        <button data-userid="${user.id}" type="button" class="btn btn-danger btn-sm mx-2">Delete</button>
                    </td>
                    </tr>
                `;
            });

            const deleteButtons = document.querySelectorAll('#userTable tbody button[data-userid]');
            deleteButtons.forEach(deleteButton => {
                deleteButton.addEventListener('click', function () {
                    const userId = this.getAttribute('data-userid');
                    deleteUser(userId);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function deleteUser(userId) {
        const confirmDelete = confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) {
            return;
        }

        fetch(`/api/user?id=${userId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    location.reload()
                    console.log('User deleted successfully');
                } else {
                    console.error('Error deleting user');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const addUserForm = document.getElementById('addUserForm');

    if (addUserForm) {
        addUserForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('addName').value;
            const email = document.getElementById('addEmail').value;
            const phone = document.getElementById('addPhone').value;
            const role = document.getElementById('addRole').value;
            const pass = document.getElementById('addPassword').value;
            const repeatPass = document.getElementById('addRepeatPassword').value;

            if (pass !== repeatPass) {
                alert('Passwords do not match.');
                return;
            }

            const formData = {
                name: name,
                email: email,
                phone: phone,
                user_role_id: role,
                password: pass,
            };

            fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        window.location.href = '/user';
                    } else {
                        console.error('Error updating user:', data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }
});

