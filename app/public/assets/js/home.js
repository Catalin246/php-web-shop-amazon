document.addEventListener('DOMContentLoaded', function () {
    fetch('api/category')
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
        const categoryBox = document.createElement('div');
        categoryBox.className = 'box box-c';

        const title = document.createElement('h3');
        title.textContent = category.description;

        const image = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = category.image_url;
        imgElement.alt = category.name;
        image.appendChild(imgElement);

        const seeMoreLink = document.createElement('a');
        seeMoreLink.href = category.link;
        seeMoreLink.textContent = 'See More';

        categoryBox.appendChild(title);
        categoryBox.appendChild(image);
        categoryBox.appendChild(seeMoreLink);

        container.appendChild(categoryBox);
    }
});

function fetchAndDisplayArticles(categoryId, elementId) {
    fetch(`api/article?categoryId=${categoryId}`)
        .then(response => response.json())
        .then(articles => {
            articles.data.forEach(article => {
                const li = document.createElement("li");

                const cardDiv = document.createElement("div");
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
                priceParagraph.textContent = "Price: " + article.price;

                const descriptionParagraph = document.createElement("p");
                descriptionParagraph.classList.add("card-text");
                descriptionParagraph.textContent = article.description;

                const addToCartButton = document.createElement("a");
                addToCartButton.href = "#";
                addToCartButton.classList.add("btn", "btn-primary");
                addToCartButton.textContent = "Add to cart";

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(priceParagraph);
                cardBody.appendChild(descriptionParagraph);
                cardBody.appendChild(addToCartButton);

                cardDiv.appendChild(cardImage);
                cardDiv.appendChild(cardBody);

                li.appendChild(cardDiv);

                document.getElementById(elementId).appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching articles:", error));
}

document.addEventListener("DOMContentLoaded", function () {
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

function toggleOffcanvas() {
    const offcanvas = document.getElementById('offcanvasRight');
    offcanvas.classList.toggle('open');

    const isOpen = offcanvas.classList.contains('open');

    offcanvas.style.display = isOpen ? 'block' : 'none';
}

function closeOffcanvas() {
    const offcanvas = document.getElementById('offcanvasRight');
    offcanvas.classList.remove('open');

    offcanvas.style.display = 'none';
}


