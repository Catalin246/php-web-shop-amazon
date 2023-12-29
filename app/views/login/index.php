<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/styles.bundle.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/x-icon" href="/assets/images/favicon.png">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <title>Sign In</title>
</head>

<body>
    <div class="container signin">
        <div class="row d-flex justify-content-center">
            <a href="/"><img class="small-logo" src="../assets/images/amazon-logo.png" alt=""></a>
        </div>

        <div class="row">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <form method="POST" role="form">
                        <div class="form-group">
                            <h2>Sign in</h2>
                        </div>
                        <div class="form-group">
                            <strong>Email or mobile phone number</strong>
                            <input id="signinEmail" type="email" maxlength="50" class="form-control">
                        </div>
                        <div class="form-group">
                            <strong>Password</strong>
                            <span class="right"><a class="link" href="#">Forgot your password?</a></span>
                            <input id="signinPassword" type="password" maxlength="25" class="form-control">
                        </div>
                        <div class="form-group" style="padding-top: 12px;">
                            <button id="signinSubmit" type="submit" class="btn sign-in-button btn-block">Sign
                                in</button>
                        </div>
                        <div class="form-group divider-signin">
                            <hr class="left"><small>New to site?</small>
                            <hr class="right">
                        </div>
                        <p class="form-group"><a href="register" class="btn sign-in-button btn-block">Create an
                                account</a>
                        </p>
                        <p class="form-group">By signing in you are agreeing to our <a class="link" href="#">Terms of
                                Use</a> and our
                            <a class="link" href="#">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>