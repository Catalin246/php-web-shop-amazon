<?php
include __DIR__ . '/../components/header.php';
?>

<div class="container mx-auto p-6">
    <h2 class="text-2xl font-semibold mb-6">Checkout</h2>
    <div class="flex justify-between gap-10">
        <!-- Left Section: Billing & Payment Details -->
        <div class="w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Billing Details</h3>
            <form>
                <label class="block mb-2 font-medium">Full Name</label>
                <input type="text" class="w-full p-2 border rounded mb-4" placeholder="John Doe">

                <label class="block mb-2 font-medium">Address</label>
                <input type="text" class="w-full p-2 border rounded mb-4" placeholder="123 Street, City, Country">

                <label class="block mb-2 font-medium">Phone Number</label>
                <input type="text" class="w-full p-2 border rounded mb-4" placeholder="+1 234 567 890">

                <h3 class="text-xl font-semibold mb-4">Payment Method</h3>
                <div class="mb-4">
                    <label class="flex items-center space-x-2">
                        <input type="radio" name="payment" class="mr-2"> <span>Credit/Debit Card</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="radio" name="payment" class="mr-2"> <span>PayPal</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="radio" name="payment" class="mr-2"> <span>Amazon Pay</span>
                    </label>
                </div>
                
                <label class="block mb-2 font-medium">Card Number</label>
                <input type="text" class="w-full p-2 border rounded mb-4" placeholder="**** **** **** ****">
                
                <label class="block mb-2 font-medium">Expiration Date</label>
                <input type="text" class="w-full p-2 border rounded mb-4" placeholder="MM/YY">
                
                <label class="block mb-2 font-medium">CVV</label>
                <input type="text" class="w-full p-2 border rounded mb-4" placeholder="***">
            </form>
        </div>

        <!-- Right Section: Order Summary -->
        <div class="w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Order Summary</h3>
            <p class="flex justify-between mb-2"><span>Subtotal:</span> <span>$499.99</span></p>
            <p class="flex justify-between mb-2"><span>Shipping:</span> <span>$10.00</span></p>
            <p class="flex justify-between font-semibold text-lg"><span>Total:</span> <span>$509.99</span></p>
            
            <button class="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg mt-4 hover:bg-yellow-600">Place Order</button>
        </div>
    </div>
</div>

<script src="../dist/home.bundle.js"></script>

<?php
include __DIR__ . '/../components/footer.php';
?>