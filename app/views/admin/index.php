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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<body>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="path/to/your/logo.png" alt="Logo" height="30">
            </a>

            <div class="col-md-4">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            <div class="col-md-3">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Language
                    </button>
                    <div class="dropdown-menu" aria-labelledby="languageDropdown">
                        <a class="dropdown-item" href="#">English</a>
                        <a class="dropdown-item" href="#">Spanish</a>
                    </div>
                </div>
            </div>

            <div class="col-md-1">
                <button type="button" class="btn btn-danger">Logout</button>
            </div>
        </div>
    </nav> -->

    <header>
        <div class="first">
            <div class="flex logo">
                <a href="/admin"><img src="assets/images/logo.png" alt=""></a>
            </div>
            <div class="flex input">
                <div>
                    <span>All</span>
                    <i class="fas fa-caret-down""></i>
                </div>
                <input type=" text">
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
    </header>

    <div class="container p-5">
        <div class="row">
            <div class="col-md-6 p-3">
                <div class="card">
                    <div class="card-body">
                        <i class="fas fa-user fa-4x text-black"></i>
                        <h5 class="card-title pt-2">Users</h5>
                        <a href="/admin/user" class="card-text card-link" class="">Go to Users panel.</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 p-3">
                <div class="card">
                    <div class="card-body">
                        <i class="fas fa-newspaper fa-4x text-black"></i>
                        <h5 class="card-title pt-2">Articles</h5>
                        <a href="/admin/article" class="card-text card-link" class="">Go to Articles panel.</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 p-3">
                <div class="card">
                    <div class="card-body">
                        <i class="fas fa-tags fa-4x text-black"></i>
                        <h5 class="card-title pt-2">Categories</h5>
                        <a href="/admin/category" class="card-text card-link" class="">Go to Categories panel.</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 p-3">
                <div class="card">
                    <div class="card-body">
                        <i class="fas fa-shopping-cart fa-4x text-black"></i>
                        <h5 class="card-title pt-2">Orders</h5>
                        <a href="/admin/order" class="card-text card-link" class="">Go to Orders panel.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>