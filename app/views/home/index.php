<?php
session_start();

include __DIR__ . '/../components/header.php';
?>


<section class="sec-1">
    <div class="container">
        <div class="container-1">
            <div class="product-comp" id="categoryContainer">

            </div>
        </div>
        <div class="slider">
            <div class="image-box">
                <div class="slide">
                    <img src="assets/images/si1.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="assets/images/si2.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="assets/images/si3.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="assets/images/si4.jpg" alt="">
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


        <ul class="product-slide product-slide-1">
            <li>
                <div class="card" style="">
                    <img class="card-img-top" src="assets/images/pc2.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">Laptop</h3>
                        <p class="card-text">
                            Price: 29.99
                        </p>
                        <p class="card-text">A bouquet of beautiful red roses for your loved one.</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </li>
            <li>
                <img src="assets/images/pc2.jpg" alt="">
                <a class="py-3 d-flex justify-content-start" href="#">Add to cart</a>
            </li>
            <li><img src="assets/images/pc3.jpg" alt=""></li>
            <li><img src="assets/images/pc4.jpg" alt=""></li>
            <li><img src="assets/images/pc5.jpg" alt=""></li>
            <li><img src="assets/images/pc6.jpg" alt=""></li>
            <li><img src="assets/images/pc7.jpg" alt=""></li>
            <li><img src="assets/images/pc8.jpg" alt=""></li>
            <li><img src="assets/images/pc9.jpg" alt=""></li>
            <li><img src="assets/images/pc10.jpg" alt=""></li>
            <li><img src="assets/images/pc11.jpg" alt=""></li>
            <li><img src="assets/images/pc12.jpg" alt=""></li>
            <li><img src="assets/images/pc13.jpg" alt=""></li>
            <li><img src="assets/images/pc14.jpg" alt=""></li>
            <li><img src="assets/images/pc15.jpg" alt=""></li>
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
        <ul class="product-slide product-slide-2">
            <li><img src="assets/images/b1.jpg" alt=""></li>
            <li><img src="assets/images/b2.jpg" alt=""></li>
            <li><img src="assets/images/b3.jpg" alt=""></li>
            <li><img src="assets/images/b4.jpg" alt=""></li>
            <li><img src="assets/images/b5.jpg" alt=""></li>
            <li><img src="assets/images/b6.jpg" alt=""></li>
            <li><img src="assets/images/b7.jpg" alt=""></li>
            <li><img src="assets/images/b8.jpg" alt=""></li>
            <li><img src="assets/images/b9.jpg" alt=""></li>
            <li><img src="assets/images/b10.jpg" alt=""></li>
        </ul>
    </div>
</section>

<script src="../dist/home.bundle.js"></script>

<?php
include __DIR__ . '/../components/footer.php';
?>