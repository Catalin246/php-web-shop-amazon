<?php
include __DIR__ . '/../components/header.php';
?>

<div class="container mx-auto p-4">
    <div class="flex-custom">
        <!-- Sidebar -->
        <aside class="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">Filters</h2>
            
            <!-- Categories -->
            <div class="mb-4">
                <h3 class="font-medium mb-2">Category</h3>
                <div class="space-y-2" id="category-container">
                    
                </div>
            </div>
            
            <!-- Price Range -->
            <!-- <div>
                <h3 class="font-medium mb-2">Price Range</h3>
                <input type="range" min="10" max="1000" class="w-full">
            </div> -->
        </aside>
        
        <!-- Articles Section -->
        <section class="w-3/4 p-4">
            <h2 class="text-xl font-semibold mb-4">Products</h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b1.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 1</h3>
                    <p class="text-gray-600">$99.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b2.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 2</h3>
                    <p class="text-gray-600">$199.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b3.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 3</h3>
                    <p class="text-gray-600">$299.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b4.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 1</h3>
                    <p class="text-gray-600">$99.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b5.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 2</h3>
                    <p class="text-gray-600">$199.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b6.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 3</h3>
                    <p class="text-gray-600">$299.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b7.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 1</h3>
                    <p class="text-gray-600">$99.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b8.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 2</h3>
                    <p class="text-gray-600">$199.99</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <img src="../assets/images/b9.jpg" alt="Product Image" class="mb-2">
                    <h3 class="font-medium">Product 3</h3>
                    <p class="text-gray-600">$299.99</p>
                </div>
            </div>
        </section>
    </div>
</div>

<script src="../dist/home.bundle.js"></script>

<?php
include __DIR__ . '/../components/footer.php';
?>
