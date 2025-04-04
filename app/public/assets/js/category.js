import { addArticleToCart, toggleOffcanvas, closeOffcanvas } from './home.js';

document.addEventListener("DOMContentLoaded", function () {
    const categoryContainer = document.getElementById("category-container");
    const articleContainer = document.querySelector(".grid.grid-cols-3");

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategoryId = urlParams.get("categoryId");

    fetch("/api/category")
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                // 1. Existing code for populating the main category container
                categoryContainer.innerHTML = "";

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

                document.querySelectorAll("input[name='category']").forEach(input => {
                    input.addEventListener("change", function () {
                        window.location.href = `/home/category?categoryId=${this.value}`;
                    });
                });

                // 2. Check if #hdn-categorie and its ul exist before trying to manipulate it
                const categoryList = document.querySelector("#hdn-categorie ul");
                if (categoryList) {
                    // Populate categories in #hdn-categorie
                    populateHdnCategories(data.data, categoryList);
                } else {
                    console.error("Error: #hdn-categorie or its <ul> element not found.");
                }

                // 3. Call to fetch articles for the selected category
                fetchArticles(selectedCategoryId || firstCategoryId);
            }
        })
        .catch(error => console.error("Error fetching categories:", error));

    // Function to populate categories into the #hdn-categorie section
    function populateHdnCategories(categories, categoryList) {
        // categoryList.innerHTML = ""; // Clear any previous categories

        categories.forEach(category => {
            const categoryListItem = document.createElement("li");

            const categoryLink = document.createElement("a");
            categoryLink.href = `/home/category?categoryId=${category.id}`;
            categoryLink.textContent = category.name;

            categoryListItem.appendChild(categoryLink);
            categoryList.appendChild(categoryListItem);
        });
    }

    function fetchArticles(categoryId) {
        fetch(`/api/article?categoryId=${categoryId}`)
            .then(response => response.json())
            .then(data => {
                articleContainer.innerHTML = "";

                if (data.status === "success" && data.data.length > 0) {
                    data.data.forEach(article => {
                        const li = document.createElement("li");
                        li.id = article.id;

                        const cardDiv = document.createElement("a");
                        cardDiv.classList.add("card");

                        const cardImage = document.createElement("img");
                        cardImage.classList.add("card-img-top");
                        cardImage.src = `../${article.image}`;
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

                        articleContainer.appendChild(li);
                    });
                } else {
                    articleContainer.innerHTML = "<p class='text-gray-500'>No articles available for this category.</p>";
                }
            })
            .catch(error => console.error("Error fetching articles:", error));
    }
});
