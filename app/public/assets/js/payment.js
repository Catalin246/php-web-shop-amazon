// Function to load shopping cart from LocalStorage
function loadShoppingCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    const cartData = savedCart ? JSON.parse(savedCart) : [];

    console.log(cartData);

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
        const totalItemPrice = (item.price * item.quantity).toFixed(2); // Use the quantity of each item
        subtotal += parseFloat(totalItemPrice);
        orderDetailsHTML += `
            <p class="flex justify-between mb-2">
                <span>${item.name} x ${item.quantity}</span>
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

// Function to handle order submission
function handlePlaceOrder() {
    // Gather the user's input from the form
    const fullName = document.querySelector('input[placeholder="John Doe"]').value.trim();
    const phoneNumber = document.querySelector('input[placeholder="0612345678"]').value.trim();
    const deliveryAddress = document.querySelector('input[placeholder="Main Street 42, Haarlem, 2032WE"]').value.trim();

    // Check if any of the fields are empty
    if (!fullName || !phoneNumber || !deliveryAddress) {
        alert('Please fill in all the fields.');
        return; // Stop the order process if any of the fields are empty
    }

    // Get cart data from LocalStorage
    const savedCart = localStorage.getItem('shoppingCart');
    const cartData = savedCart ? JSON.parse(savedCart) : [];

    // If the cart is empty, show an alert and stop the order process
    if (cartData.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Prepare the items for the order (article_id and quantity)
    const items = cartData.map(item => ({
        article_id: item.id,
        quantity: item.quantity
    }));

    // const user = document.body.dataset.user;

    // console.log(user);

    // Prepare the payload for the API
    const orderData = {
        delivered: false,
        paid: true,
        user_id: 69, // To Do: Take the user_id from the session
        name: fullName,
        phone: phoneNumber,
        delivery_address: deliveryAddress,
        items: items
    };

    // Send the order to the API endpoint
    fetch('http://localhost/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order placed successfully:', data);

        // Clear the shopping cart from localStorage
        localStorage.removeItem('shoppingCart');

        // Redirect to the home page after successful order submission
        window.location.href = 'http://localhost/home/thankyou'; 
    })
    .catch(error => {
        console.error('Error placing order:', error);
        alert('There was an error placing your order. Please try again.');
    });
}

// Add event listener to the "Place Order" button
document.getElementById('place-order-btn').addEventListener('click', handlePlaceOrder);
