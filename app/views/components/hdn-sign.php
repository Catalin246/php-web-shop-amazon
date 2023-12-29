<div class="hdn-sign">
    <div class="sign-in-section">
        <?php if (isset($_SESSION['user'])): ?>
            <form method="POST" action="/login/logout">
                <button type="submit" class="sign-in-button">Logout</button>
            </form>
            <p class="start-here-paragraph">
                Thank you for shopping,
                <?php echo $_SESSION['user']['name']; ?>!
            </p>
        <?php else: ?>
            <a href="login/index"><button class="sign-in-button">Sign In</button></a>
            <p class="start-here-paragraph">
                New Customer?<a href="login/register" class="start-here-link"> Start here </a>
            </p>
        <?php endif; ?>
        <hr class="custom-hr">
    </div>

    <div class="hdn-table">
        <div>
            <h3>Your Lists</h3>
            <ul>
                <li><a href="#" class="link">Create a List</a></li>
                <li><a href="#" class="link">Find a List & Registry</a></li>
                <li><a href="#" class="link">Amazon Smile Charity Lists</a></li>
            </ul>
        </div>
        <div class="hdn-line"></div>
        <div>
            <h3>Your Account</h3>
            <ul>
                <li><a href="#" class="link">Account</a></li>
                <li><a href="#" class="link">Orders</a></li>
                <li><a href="#" class="link">Recommendations</a></li>
                <li><a href="#" class="link">Browsing History</a></li>
                <li><a href="#" class="link">Watchlist</a></li>
                <li><a href="#" class="link">Video Purchases</a></li>
                <li><a href="#" class="link">Kindle Unlimited</a></li>
                <li><a href="#" class="link">Content & Devices</a></li>
                <li><a href="#" class="link">Subscribe & Save Items</a></li>
                <li><a href="#" class="link">Membership</a></li>
                <li><a href="#" class="link">Music Library</a></li>
            </ul>

        </div>

    </div>
</div>