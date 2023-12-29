document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

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
            userRoleId: 1
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
});