import "./category.js";

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost/api/category')
        .then(response => response.json())
        .then(data => {
            const categoryContainer = document.getElementById('categoryContainer');
            const additionalContainer = document.getElementById('additionalContainer');

            data.data.slice(0, 4).forEach(category => {
                createCategoryElement(category, categoryContainer);
            });

            data.data.slice(4, 8).forEach(category => {
                createCategoryElement(category, additionalContainer);
            });
        })
        .catch(error => console.error('Error fetching category data:', error));

    function createCategoryElement(category, container) {
        const link = document.createElement('a');
        link.href = `/home/category?categoryId=${category.id}`;
        link.className = 'category-link';
        link.style.textDecoration = 'none';

        const categoryBox = document.createElement('div');
        categoryBox.className = 'box box-c';

        const title = document.createElement('h3');
        title.textContent = category.description;

        const image = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = category.image_url;
        imgElement.alt = category.name;
        image.appendChild(imgElement);

        categoryBox.appendChild(title);
        categoryBox.appendChild(image);

        const seeMoreButton = document.createElement('a');
        seeMoreButton.href = `/home/category?categoryId=${category.id}`;
        seeMoreButton.textContent = 'See More';
        seeMoreButton.className = 'see-more-btn';

        categoryBox.appendChild(seeMoreButton)

        link.appendChild(categoryBox);
        container.appendChild(link);
    }

    loadShoppingCartFromStorage();
    fetchAndDisplayArticles(1, "book-products");
    fetchAndDisplayArticles(2, "pc-products");

    const toggleButton = document.getElementById("toggle-btn");
    const closeButton = document.getElementById("close-btn");

    if (toggleButton) {
        toggleButton.addEventListener("click", toggleOffcanvas);
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeOffcanvas);
    }
});

// Fetching and displaying articles for each category
function fetchAndDisplayArticles(categoryId, elementId) {
    fetch(`http://localhost/api/article?categoryId=${categoryId}`)
        .then(response => response.json())
        .then(articles => {
            articles.data.forEach(article => {
                const li = document.createElement("li");
                li.id = article.id;

                const cardDiv = document.createElement("a");
                cardDiv.classList.add("card");

                const cardImage = document.createElement("img");
                cardImage.classList.add("card-img-top");
                cardImage.src = article.image;
                cardImage.alt = "Card image cap";

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const cardTitle = document.createElement("h3");
                cardTitle.classList.add("card-title");
                cardTitle.textContent = article.name;

                const priceParagraph = document.createElement("p");
                priceParagraph.classList.add("card-text");
                priceParagraph.textContent = "Price: " + article.price + " €";

                const descriptionParagraph = document.createElement("p");
                descriptionParagraph.classList.add("card-text");
                descriptionParagraph.textContent = article.description;

                const addToCartButton = document.createElement("a");
                addToCartButton.classList.add("btn", "btn-primary");
                addToCartButton.textContent = "Add to cart";
                addToCartButton.addEventListener("click", toggleOffcanvas);
                addToCartButton.addEventListener("click", addArticleToCart);

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(priceParagraph);
                cardBody.appendChild(descriptionParagraph);
                cardBody.appendChild(addToCartButton);

                cardDiv.appendChild(cardImage);
                cardDiv.appendChild(cardBody);

                cardDiv.addEventListener("click", toggleOffcanvas);
                cardDiv.addEventListener("click", addArticleToCart);

                li.appendChild(cardDiv);

                document.getElementById(elementId).appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching articles:", error));
}

let shoppingCart = [];

// Function to load the shopping cart from LocalStorage
function loadShoppingCartFromStorage() {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Function to update the shopping cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the current items
    shoppingCart.forEach(article => {
        const cartItem = createCartItemElement(article);
        cartItemsContainer.appendChild(cartItem);
    });
    updateCartTotal();
}

// Function to create cart item HTML
function createCartItemElement(article) {
    const cartItem = document.createElement("div");
    cartItem.id = "item-" + article.id;
    cartItem.classList.add("cart-item");

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    const itemImage = document.createElement("img");
    itemImage.src = "../" + article.image;
    itemImage.alt = "Product Image";
    itemInfo.appendChild(itemImage);

    const itemDetails = document.createElement("div");
    itemDetails.innerHTML = `
        <div class="item-name">${article.name}</div>
        <div class="item-price">Price: ${article.price} €</div>
    `;
    itemInfo.appendChild(itemDetails);

    cartItem.appendChild(itemInfo);

    const itemQuantity = document.createElement("div");
    itemQuantity.classList.add("item-quantity");

    const minusButton = document.createElement("button");
    minusButton.innerHTML = `<i class="fas fa-minus"></i>`;
    minusButton.addEventListener("click", () => updateQuantity(cartItem, article, -1));

    const quantityValue = document.createElement("span");
    quantityValue.textContent = article.quantity; // Display the correct quantity

    const plusButton = document.createElement("button");
    plusButton.innerHTML = `<i class="fas fa-plus"></i>`;
    plusButton.addEventListener("click", () => updateQuantity(cartItem, article, 1));

    itemQuantity.appendChild(minusButton);
    itemQuantity.appendChild(quantityValue);
    itemQuantity.appendChild(plusButton);

    cartItem.appendChild(itemQuantity);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-item-btn");
    removeButton.innerHTML = `<i class="fas fa-times"></i>`;
    removeButton.addEventListener("click", () => removeCartItem(cartItem, article));

    cartItem.appendChild(removeButton);

    return cartItem;
}

// Function to update the quantity of an item in the cart
function updateQuantity(cartItem, article, change) {
    const quantityElement = cartItem.querySelector(".item-quantity span");
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += change;

    if (currentQuantity < 1) {
        removeCartItem(cartItem, article); // If quantity becomes less than 1, remove the item
    } else {
        // Update quantity and re-render the total price for the item
        quantityElement.textContent = currentQuantity;
        article.quantity = currentQuantity; // Update the quantity in the cart
        updateItemTotal(cartItem, article, currentQuantity);
        saveCartToStorage(); // Save updated cart to LocalStorage
    }
}

// Function to remove an item from the cart
function removeCartItem(cartItem, article) {
    const index = shoppingCart.findIndex(item => item.id === article.id);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        cartItem.remove();
        saveCartToStorage();
        updateCartTotal();
    }
}

// Function to update the total price of an item in the cart
function updateItemTotal(cartItem, article, quantity) {
    let itemPrice = parseFloat(article.price);
    let totalPrice = (itemPrice * quantity).toFixed(2);

    let priceParagraph = cartItem.querySelector(".item-info .item-price");
    if (priceParagraph) {
        priceParagraph.textContent = `Price: ${totalPrice} €`;
    }

    updateCartTotal(); // Update the cart total after price change
}

// Function to update the total price of the cart
function updateCartTotal() {
    let cartTotalElement = document.getElementById("cart-total");
    let total = shoppingCart.reduce((sum, item) => {
        let quantity = parseInt(document.getElementById("item-" + item.id).querySelector(".item-quantity span").textContent);
        return sum + item.price * quantity;
    }, 0).toFixed(2);

    cartTotalElement.innerHTML = "";
    if (total == 0) {
        cartTotalElement.innerHTML = `<div class="empty-cart-message">Your cart is empty. Start shopping now!</div>`;
        let checkoutBtn = document.getElementById("checkout-btn");
        if (checkoutBtn) {
            checkoutBtn.style.display = 'none';
        }
    } else {
        cartTotalElement.innerHTML = `Cart Total: ${total} €`;
        let checkoutBtn = document.getElementById("checkout-btn");
        if (checkoutBtn) {
            checkoutBtn.style.display = 'block';
        }
    }
}

// Function to save the cart to LocalStorage
function saveCartToStorage() {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

// Function to add article to the cart
export function addArticleToCart(event) {
    const articleId = event.target.closest("li").id;

    fetchArticleById(articleId)
        .then(article => {
            const existingCartItem = shoppingCart.find(item => item.id === article.id);

            if (existingCartItem) {
                // If item already exists in the cart, increase the quantity
                existingCartItem.quantity += 1;
                updateCartDisplay(); // Update the display to reflect the quantity change
            } else {
                // If item doesn't exist, add it with quantity 1
                article.quantity = 1; // Add a quantity property to the article
                shoppingCart.push(article);
                updateCartDisplay(); // Update the display
            }

            saveCartToStorage(); // Save the updated cart
        })
        .catch(error => {
            console.error("Error adding article to cart:", error);
        });
}

function fetchArticleById(articleId) {
    return fetch(`http://localhost/api/article?id=${articleId}`)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            console.error("Error fetching article:", error);
            throw error;
        });
}

export function toggleOffcanvas() {
    const offcanvas = document.getElementById('offcanvasRight');
    offcanvas.classList.toggle('open');

    const isOpen = offcanvas.classList.contains('open');

    offcanvas.style.display = 'block';
}

export function closeOffcanvas() {
    const offcanvas = document.getElementById('offcanvasRight');
    offcanvas.classList.remove('open');

    offcanvas.style.display = 'none';
}
