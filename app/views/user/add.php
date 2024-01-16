<?php
include __DIR__ . '/../components/admin-header.php';
?>

<script src="../dist/user.bundle.js"></script>

<div class="container mt-5 d-flex justify-content-center">
    <div class="col-md-6">
        <h2 class="p-2">Add User</h2>

        <form id="addUserForm">
            <div class="form-row">
                <div class="form-group">
                    <label for="addName">Name:</label>
                    <input type="text" class="form-control" id="addName" placeholder="Enter name" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="addEmail">Email:</label>
                        <input type="email" class="form-control" id="addEmail" placeholder="Enter email" required>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="addPhone">Phone:</label>
                    <input type="tel" class="form-control" id="addPhone" placeholder="Enter phone">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="addRole">Role:</label>
                    <select class="form-control" id="addRole" required>
                        <option value="1">User</option>
                        <option value="2">Admin</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="addPassword">Password:</label>
                    <input type="password" class="form-control" id="addPassword" placeholder="Enter password">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="addRepeatPassword">Repeat Password:</label>
                    <input type="password" class="form-control" id="addRepeatPassword" placeholder="Repeat password">
                </div>
            </div>


            <button type="submit" class="my-4 btn btn-primary">Add User</button>
        </form>
    </div>
</div>