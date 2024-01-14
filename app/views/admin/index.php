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
    <link rel="icon" type="image/x-icon" href="../assets/images/favicon.png">
    <title>Web Shop Amazon</title>
</head>

<body>
    <header>
        <div class="first">
            <div class="flex logo">
                <a href="/admin"><img src="assets/images/logo.png" alt=""></a>
            </div>
            <div class="flex input">
                <div>
                    <span>All</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <input type="text">
                <i class="fas fa-search"></i>
            </div>
            <div class="flex right">
                <div class="flex lang">
                    <img src="assets/images/usflag.jpg" alt="">
                    <span>EN</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="flex lang logout">
                    <div class="flex ac">
                        <a href="/login/logout">Log out</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="second">
            <div class="second-1">
                <div>
                    <i class="fas fa-bars"></i>
                    <span>All</span>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <!-- First Row -->
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Column 1</h5>
                        <p class="card-text">Content for column 1 goes here.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Column 2</h5>
                        <p class="card-text">Content for column 2 goes here.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Second Row -->
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Column 3</h5>
                        <p class="card-text">Content for column 3 goes here.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Column 4</h5>
                        <p class="card-text">Content for column 4 goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>