<?php
include __DIR__ . '/../components/admin-header.php';
?>

<script src="../dist/main.bundle.js"></script>

<div class="custom-container p-5">
    <div class="row d-flex-custom justify-content-center">
        <div class="col-10 py-4 d-flex-custom justify-content-start">
            <a href="/admin"><button type="button" class="btn btn-danger btn-sm">Back</button></a>
        </div>
    </div>
    <div class="row d-flex-custom justify-content-center">
        <div class="col-10">
            <table class="table table-bordered" id="orderTable">
                <thead>
                    <tr>
                        <th scope="col" class="col-3">ID</th>
                        <th scope="col" class="col-3">Customer name</th>
                        <th scope="col" class="col-3">Delivered</th>
                        <th scope="col" class="col-3">Paid</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>