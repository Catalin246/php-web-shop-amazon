<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../dist/styles.bundle.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/x-icon" href="../assets/images/favicon.png">
    <title>Web Shop Amazon</title>
</head>

<?php
    $url = $_SERVER['REQUEST_URI']; // Get the current URL

    $imgSrcFlag = "assets/images/usflag.jpg";
    $imgSrcLogo = "assets/images/logo.png";

    // Check if "/home" is in the URL
    if (strpos($url, '/home') !== false) {
        $imgSrcFlag = "/" . $imgSrcFlag;
        $imgSrcLogo = "/" . $imgSrcLogo;
    }
?>

<body data-user='<?= htmlspecialchars(json_encode($_SESSION['user']), ENT_QUOTES, 'UTF-8') ?>'>
    <div class="sidebar">
        <div class="hdn-head">
            <?php
            if (isset($_SESSION['user'])) {
                echo '<h2>Hello, ' . $_SESSION['user']['name'] . '!</h2>';
            } else {
                echo '<h2>Hello, Sign in</h2>';
            }
            ?>
        </div>
        <div id="hdn-categorie" class="hdn-content">
            <h3>Shop By Category</h3>
            <ul>
                <!-- Categories will be dynamically inserted here -->
            </ul>
            <div class="line"></div>
        </div>
    </div>

    <div class="xmark">
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="triangle"><i class="fa-solid fa-triangle"></i></div>
    <?php
    include __DIR__ . '/../components/hdn-sign.php';
    ?>
    <div class="black"></div>
    <header>
        <div class="first">
            <div class="flex-custom logo">
                <a href="/"><img src="<?php echo htmlspecialchars($imgSrcLogo); ?>" alt=""></a>
                <div class="map flex-custom">
                    <i class="fas fa-map-marker"></i>
                    <div>
                        <span>Deliver to</span>
                        <span>Netherlands</span>
                    </div>
                </div>
            </div>
            <div class="flex-custom input">
                <div>
                    <span>All</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <input type="text">
                <i class="fas fa-search"></i>
            </div>
            <div class="flex-custom right">
                <div class="flex-custom lang">
                    <img src="<?php echo htmlspecialchars($imgSrcFlag); ?>" alt="">
                    <span>EN</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="sign">
                    <span>
                        <?php if (isset($_SESSION['user'])) {
                            echo 'Hello, ' . $_SESSION['user']['name'] . '!';
                        } else {
                            echo 'Hello, Sign in';
                        } ?>
                    </span>
                    <div class="flex-custom ac">
                        <span>Accounts & Lists</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>
                <!-- <div class="sign">
                    <span>Returns</span>
                    <span>& Orders</span>
                </div> -->
                <div class="flex-custom cart">
                    <button class="button" id="toggle-btn" type="button" onclick="toggleOffcanvas()"><i
                            class="fas fa-shopping-cart"></i>
                        <span class="ca">Cart</span></button>

                    <div class="offcanvas offcanvas-end" id="offcanvasRight">
                        <button class="button" id="close-btn" type="button" onclick="closeOffcanvas()">Back to
                            shopping</button>
                        <div class="offcanvas-header">
                            <h2 class="offcanvas-title">Your Order</h2>
                        </div>
                        <div id="cart" class="offcanvas-body">
                            <div id="cart-items">
                            </div>
                            <div id="cart-total">
                                Your cart is empty. Start shopping now!
                            </div>
                            <button class="button" id="checkout-btn" type="button" onclick="window.location.href='/payment'">Procees to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="second">
            <div class="second-1">
                <div>
                    <i class="fas fa-bars"></i>
                    <span>All</span>
                </div>
            </div>
            <!-- <div class="second-2">
                <ul>
                    <li>Today's Deal</li>
                    <li>Customer Service</li>
                    <li>Registry</li>
                    <li>Gift Cards</li>
                    <li>Sell</li>
                </ul>
            </div> -->
        </div>
    </header>