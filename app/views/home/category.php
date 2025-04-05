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
            <ul class="grid grid-cols-3 gap-4" id="article-list">
                <!-- Articles will be injected here -->
            </ul>
        </section>
    </div>
</div>

<script src="../dist/home.bundle.js"></script>

<?php
include __DIR__ . '/../components/footer.php';
?>
