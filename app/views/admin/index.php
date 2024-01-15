<?php
include __DIR__ . '/../components/admin-header.php';
?>

<div class="container p-5">
    <div class="row">
        <div class="col-md-6 p-3">
            <div class="card">
                <div class="card-body">
                    <i class="fas fa-user fa-4x text-black"></i>
                    <h5 class="card-title pt-2">Users</h5>
                    <a href="/user" class="card-text card-link" class="">Go to Users panel.</a>
                </div>
            </div>
        </div>

        <div class="col-md-6 p-3">
            <div class="card">
                <div class="card-body">
                    <i class="fas fa-newspaper fa-4x text-black"></i>
                    <h5 class="card-title pt-2">Articles</h5>
                    <a href="/article" class="card-text card-link" class="">Go to Articles panel.</a>
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
                    <a href="/category" class="card-text card-link" class="">Go to Categories panel.</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 p-3">
            <div class="card">
                <div class="card-body">
                    <i class="fas fa-shopping-cart fa-4x text-black"></i>
                    <h5 class="card-title pt-2">Orders</h5>
                    <a href="/order" class="card-text card-link" class="">Go to Orders panel.</a>
                </div>
            </div>
        </div>
    </div>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>