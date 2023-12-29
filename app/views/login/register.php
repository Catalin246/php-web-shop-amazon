<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <title>Register</title>
</head>

<body>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <a href="/"><img class="small-logo" src="../images/amazon-logo.png" alt=""></a>
        </div>

        <div class="row">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <form id="registrationForm" role="form">
                        <div class="form-group">
                            <h2>Create Account</h2>
                        </div>
                        <div class="form-group">
                            <strong>Your Name</strong>
                            <input id="registerName" type="text" maxlength="50" class="form-control">
                        </div>
                        <div class="form-group">
                            <strong>Email</strong>
                            <input id="registerEmail" type="email" maxlength="50" class="form-control">
                        </div>
                        <div class="form-group">
                            <strong>Password</strong>
                            <input id="registerPassword" type="password" maxlength="25" class="form-control">
                        </div>
                        <div class="form-group">
                            <strong>Re-enter Password</strong>
                            <input id="registerPasswordConfirm" type="password" maxlength="25" class="form-control">
                        </div>
                        <div class="form-group" style="padding-top: 12px;">
                            <button id="registerSubmit" type="submit" class="btn sign-in-button btn-block">Create your
                                Amazon account</button>
                        </div>
                        <div class="form-group divider">
                            <hr><small>Already have an account?</small>
                        </div>
                        <p class="form-group"><a href="index" class="btn sign-in-button btn-block">Sign in to your
                                account</a>
                        </p>
                        <p class="form-group">By creating an account you agree to our <a class="link"
                                href="#">Conditions
                                of
                                Use</a> and <a class="link" href="#">Privacy Notice</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

<script>
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

</script>

</html>