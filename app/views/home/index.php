<?php
session_start();

include __DIR__ . '/../components/header.php';

?>

<section class="sec-1">
    <div class="custom-container">
        <div class="custom-container-1">
            <div class="product-comp" id="categoryContainer">

            </div>
        </div>
        <div class="slider">
            <div class="image-box">
                <div class="slide">
                    <img src="assets/images/si3.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="sec-2">
    <div class="slide-sec">
        <div class="l-btn btn-1b"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="r-btn btn-1a"><i class="fa-solid fa-chevron-right"></i></div>
        <h3>Popular Products in PC Internationally</h3>

        <ul id="pc-products" class="product-slide product-slide-1">
        </ul>
    </div>
</section>

<div class="product-comp" id="additionalContainer">

</div>

<section class="sec-2">
    <div class="slide-sec">
        <div class="l-btn btn-1c"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="r-btn btn-1d"><i class="fa-solid fa-chevron-right"></i></div>
        <h3>Top Sellers in Books</h3>
        <ul id="book-products" class="product-slide product-slide-2">

        </ul>
    </div>
</section>

<script src="../dist/home.bundle.js"></script>

<?php
include __DIR__ . '/../components/footer.php';
?>