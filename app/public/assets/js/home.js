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