document.addEventListener("DOMContentLoaded", function () {
    const categoryContainer = document.querySelector(".space-y-2");
    const articleContainer = document.querySelector(".grid.grid-cols-3"); // Target the article section

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
                        <input type="radio" name="category" class="mr-2" value="${category.id}" ${index === 0 ? 'checked' : ''}> ${category.name}
                    `;
                    categoryContainer.appendChild(categoryElement);
                    
                    if (index === 0) {
                        firstCategoryId = category.id;
                    }
                });

                // Add event listener to all category radio buttons
                document.querySelectorAll("input[name='category']").forEach(input => {
                    input.addEventListener("change", function () {
                        fetchArticles(this.value);
                    });
                });

                // Fetch articles for the first category by default
                if (firstCategoryId) {
                    fetchArticles(firstCategoryId);
                }
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
                        const articleElement = document.createElement("div");
                        articleElement.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md");
                        articleElement.innerHTML = `
                            <img src="../${article.image_url}" alt="Product Image" class="mb-2">
                            <h3 class="font-medium">${article.name}</h3>
                            <p class="text-gray-600">$${article.price}</p>
                        `;
                        articleContainer.appendChild(articleElement);
                    });
                } else {
                    articleContainer.innerHTML = "<p class='text-gray-500'>No articles available for this category.</p>";
                }
            })
            .catch(error => console.error("Error fetching articles:", error));
    }
});
