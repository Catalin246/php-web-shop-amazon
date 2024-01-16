<?php
include __DIR__ . '/../components/admin-header.php';

$userId = isset($_GET['id']) ? $_GET['id'] : null;
?>

<script src="../dist/user.bundle.js"></script>

<div class="container mt-5 d-flex justify-content-center">
    <div class="col-md-6">
        <a href="/user"><button type="button" class="m-2 my-3 px-4 btn btn-danger">Back</button></a>

        <h2 class="p-2">Edit User
            <?php echo $userId; ?>
        </h2>

        <form id="editUserForm">
            <div class="form-row">
                <div class="form-group">
                    <label for="editName">Name:</label>
                    <input type="text" class="form-control" id="editName" placeholder="Enter name" required>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="editEmail">Email:</label>
                        <input type="email" class="form-control" id="editEmail" placeholder="Enter email" required>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="editPhone">Phone:</label>
                    <input type="tel" class="form-control" id="editPhone" placeholder="Enter phone">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="editRole">Role:</label>
                    <select class="form-control" id="editRole" required>
                        <option value="1">User</option>
                        <option value="2">Admin</option>
                    </select>
                </div>
            </div>

            <button type="submit" class="my-4 btn btn-primary">Update User</button>
        </form>
    </div>
</div>