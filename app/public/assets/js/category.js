// category.js
import { addArticleToCart } from './home.js';  // Assuming both files are in the same directory

document.addEventListener("DOMContentLoaded", function () {
    const categoryContainer = document.querySelector(".space-y-2");
    const articleContainer = document.querySelector(".grid.grid-cols-3"); // Target the article section

    // Get category ID from URL if available
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategoryId = urlParams.get("categoryId");

    // Fetch and populate categories
    fetch("http://localhost/api/category")
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                categoryContainer.innerHTML = ""; // Clear existing categories

                let firstCategoryId = null;

                data.data.forEach((category, index) => {
                    const categoryElement = document.createElement("label");
                    categoryElement.classList.add("flex", "items-center");
                    categoryElement.innerHTML = `  
                        <input type="radio" name="category" class="mr-2" value="${category.id}" ${selectedCategoryId == category.id || (!selectedCategoryId && index === 0) ? 'checked' : ''}> ${category.name}
                    `;
                    categoryContainer.appendChild(categoryElement);
                    
                    if (index === 0) {
                        firstCategoryId = category.id;
                    }
                });

                // Add event listener to all category radio buttons
                document.querySelectorAll("input[name='category']").forEach(input => {
                    input.addEventListener("change", function () {
                        window.location.href = `/home/category?categoryId=${this.value}`;
                    });
                });

                // Fetch articles for the selected category or first by default
                fetchArticles(selectedCategoryId || firstCategoryId);
            }
        })
        .catch(error => console.error("Error fetching categories:", error));

    // Function to fetch and display articles
    function fetchArticles(categoryId) {
        fetch(`http://localhost/api/article?categoryId=${categoryId}`)
            .then(response => response.json())
            .then(data => {
                articleContainer.innerHTML = ""; // Clear existing articles

                if (data.status === "success" && data.data.length > 0) {
                    data.data.forEach(article => {
                        // Create the article card container
                        const articleCard = document.createElement('div');
                        articleCard.className = 'bg-white p-4 rounded-lg shadow-md';

                        // Store article ID in a data attribute (no effect on "Add to Cart" handler)
                        articleCard.dataset.articleId = article.id; // Store article ID

                        // Create and append the article image
                        const imageElement = document.createElement('img');
                        imageElement.src = `../${article.image}`;  // Adjust the path to match the article image
                        imageElement.alt = article.name;
                        imageElement.className = 'mb-4 w-full h-auto'; // Ensure the image takes full width but has constrained height
                        imageElement.style.maxHeight = '200px'; // You can adjust the height as per need
                        imageElement.style.objectFit = 'cover'; // Ensures the image maintains aspect ratio and covers the space without distortion
                        articleCard.appendChild(imageElement);

                        // Create and append the title
                        const titleElement = document.createElement('h3');
                        titleElement.textContent = article.name;
                        titleElement.className = 'font-medium text-lg mb-2'; // Styling for title
                        articleCard.appendChild(titleElement);

                        // Create and append the price
                        const priceElement = document.createElement('p');
                        priceElement.textContent = `$${article.price}`;
                        priceElement.className = 'text-gray-600 mb-2'; // Styling for price
                        articleCard.appendChild(priceElement);

                        // Create and append the description
                        const descriptionElement = document.createElement('p');
                        descriptionElement.textContent = article.description || "No description available";  // Handle missing description
                        descriptionElement.className = 'text-gray-500 mb-4'; // Styling for description
                        articleCard.appendChild(descriptionElement);

                        // Create and append the "Add to Cart" button
                        const addToCartButton = document.createElement('button');
                        addToCartButton.textContent = 'Add to Cart';
                        addToCartButton.className = 'bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'; // Button styling
                        addToCartButton.addEventListener('click', addArticleToCart);  // No change here, the handler stays the same
                        articleCard.appendChild(addToCartButton);

                        // Append the card to the container
                        articleContainer.appendChild(articleCard);
                    });
                } else {
                    articleContainer.innerHTML = "<p class='text-gray-500'>No articles available for this category.</p>";
                }
            })
            .catch(error => console.error("Error fetching articles:", error));
    }
});
