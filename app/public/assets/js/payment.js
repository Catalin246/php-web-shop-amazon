// Function to load shopping cart from LocalStorage
function loadShoppingCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    const cartData = savedCart ? JSON.parse(savedCart) : [];

    // Display the cart data in the console
    console.log("Shopping Cart:", cartData);

    displayOrderSummary(cartData);
}

// Function to display the order summary
function displayOrderSummary(cartData) {
    const orderSummary = document.getElementById('order-summary');
    if (cartData.length === 0) {
        orderSummary.innerHTML = "<p>Your cart is empty!</p>";
        return;
    }

    let subtotal = 0;
    let orderDetailsHTML = '';

    // Loop through the cart data to create the order summary
    cartData.forEach(item => {
        const totalItemPrice = (item.price * 1).toFixed(2); // Assuming quantity is 1 for simplicity
        subtotal += parseFloat(totalItemPrice);
        orderDetailsHTML += `
            <p class="flex justify-between mb-2">
                <span>${item.name}</span>
                <span>$${totalItemPrice}</span>
            </p>
        `;
    });

    const shipping = 10.00; // Flat shipping fee
    const total = (subtotal + shipping).toFixed(2);

    // Inject the order details into the order summary container
    orderSummary.innerHTML = `
        ${orderDetailsHTML}
        <p class="flex justify-between mb-2"><span>Shipping:</span> <span>$${shipping.toFixed(2)}</span></p>
        <p class="flex justify-between font-semibold text-lg"><span>Total:</span> <span>$${total}</span></p>
    `;
}

// Call the function on page load
window.onload = loadShoppingCart;
