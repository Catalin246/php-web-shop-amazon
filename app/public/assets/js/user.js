function deleteUser(userId) {
    console.log(userId);

    fetch(`/api/user?id=${userId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`User with ID ${userId} deleted successfully:`, data);
        })
        .catch(error => {
            console.error(`Error deleting user with ID ${userId}:`, error);
        });
}


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
                    <th scope="row">${user.id}</th>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.user_role_id}</td>
                    <td class="d-flex justify-content-center">
                        <a href="/user/edit"><button type="button" class="btn btn-warning btn-sm mx-2">Edit</button></a>
                        <button id="${user.id}" type="button" onclick="deleteUser(${user.id})" class="btn btn-danger btn-sm mx-2">Delete</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});