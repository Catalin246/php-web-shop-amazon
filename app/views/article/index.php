<?php
include __DIR__ . '/../components/admin-header.php';
?>

<script src="../dist/user.bundle.js"></script>

<div class="container p-5">
    <div class="row d-flex justify-content-center">
        <div class="col-5 py-4 d-flex justify-content-start">
            <a href="/admin"><button type="button" class="btn btn-danger btn-sm">Back</button></a>
        </div>
        <div class="col-5 py-4 d-flex justify-content-end">
            <a href="/article/add"><button type="button" class="btn btn-primary btn-sm">Add
                    Article</button></a>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-10">
            <table class="table table-bordered" id="articleTable">
                <thead>
                    <tr>
                        <th scope="col" class="col-2">ID</th>
                        <th scope="col" class="col-2">Category ID</th>
                        <th scope="col" class="col-2">Name</th>
                        <th scope="col" class="col-2">Description</th>
                        <th scope="col" class="col-2">Image</th>
                        <th scope="col" class="col-2">Price</th>
                        <th scope="col" class="col-2">Num Sales</th>
                        <th scope="col" class="col-2">Amount</th>
                        <th scope="col" class="col-2">Display</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>