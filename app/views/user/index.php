<?php
include __DIR__ . '/../components/admin-header.php';
?>

<script src="../dist/user.bundle.js"></script>

<div class="container p-5">
    <div class="row d-flex justify-content-center">
        <div class="col-5 py-4 d-flex justify-content-start">
            <a href="/"><button type="button" class="btn btn-danger btn-sm">Back</button></a>
        </div>
        <div class="col-5 py-4 d-flex justify-content-end">
            <a href="/user/add"><button type="button" class="btn btn-primary btn-sm">Add
                    User</button></a>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-10">
            <table class="table table-bordered" id="userTable">
                <thead>
                    <tr>
                        <th scope="col" class="col-2">ID</th>
                        <th scope="col" class="col-2">Email</th>
                        <th scope="col" class="col-2">Name</th>
                        <th scope="col" class="col-2">Phone</th>
                        <th scope="col" class="col-2">Role</th>
                        <th scope="col" class="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>