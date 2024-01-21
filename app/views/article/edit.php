<?php
include __DIR__ . '/../components/admin-header.php';
$articleId = isset($_GET['id']) ? $_GET['id'] : null;
?>

<script src="../dist/article.bundle.js"></script>

<div class="container mt-5 d-flex justify-content-center">
    <div class="col-md-8">
        <a href="/article"><button type="button" class="m-2 my-3 px-4 btn btn-danger">Back</button></a>

        <h2 class="p-2 col-md-8">Edit Article
            <?php echo $articleId; ?>
        </h2>

        <form id="addArticleForm">
            <div class="form-row col-md-8">
                <div class="form-group">
                    <label for="addName">Name:</label>
                    <input type="text" class="form-control" id="addName" placeholder="Enter name" required>
                </div>
                <div class="form-group">
                    <label for="addCategory">Category:</label>
                    <select class="form-control" id="addCategory" required></select>
                </div>
            </div>

            <div class="form-row col-md-8">
                <div class="form-group">
                    <label for="addDescription">Description:</label>
                    <textarea class="form-control" id="addDescription" placeholder="Enter description" rows="4"
                        required></textarea>
                </div>
            </div>

            <div class="form-row col-md-8">
                <div class="form-group">
                    <label for="addImage">Image URL:</label>
                    <input type="url" class="form-control" id="addImage" placeholder="Enter image URL">
                </div>
                <div class="form-group">
                    <label for="addPrice">Price:</label>
                    <input type="number" class="form-control" id="addPrice" placeholder="Enter price" min="0"
                        step="0.01" required>
                </div>
            </div>

            <div class="form-row col-md-8">
                <div class="form-group">
                    <label for="addNumSales">Number of Sales:</label>
                    <input type="number" class="form-control" id="addNumSales" placeholder="Enter number of sales"
                        min="0" required>
                </div>
                <div class="form-group">
                    <label for="addAmount">Amount:</label>
                    <input type="number" class="form-control" id="addAmount" placeholder="Enter amount" min="0"
                        step="0.01" required>
                </div>
            </div>

            <div class="form-row col-md-8">
                <div class="form-group">
                    <label for="addDisplay">Display:</label>
                    <select class="form-control" id="addDisplay" required>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
            </div>

            <button type="submit" class="my-4 btn btn-primary">Edit Article</button>
        </form>
    </div>
</div>