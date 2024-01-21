document.addEventListener('DOMContentLoaded', function () {
    let tableBody;
    fetch('/api/category')
        .then(response => response.json())
        .then(categoryData => {
            const categoryMap = {};
            categoryData.data.forEach(category => {
                categoryMap[category.id] = category.name;
            });

            fetch('/api/article')
                .then(response => response.json())
                .then(data => {
                    tableBody = document.querySelector('#articleTable tbody');

                    data.data.forEach(article => {
                        const row = document.createElement('tr');

                        const columns = ['id', 'category_id', 'name', 'description', 'image', 'price', 'num_sales', 'amount', 'display'];

                        columns.forEach(column => {
                            const cell = document.createElement('td');

                            if (column === 'category_id') {
                                cell.textContent = categoryMap[article[column]];
                            } else {
                                cell.textContent = article[column];
                            }

                            row.appendChild(cell);
                        });

                        const actionsCell = document.createElement('td');

                        const editButton = document.createElement('button');
                        const editLink = document.createElement('a');
                        editLink.href = `/article/edit?id=${article.id}`;
                        editButton.textContent = 'Edit';
                        editButton.setAttribute('update-articleid', article.id);
                        editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'm-2', 'px-3');
                        editLink.appendChild(editButton);
                        actionsCell.appendChild(editLink);

                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';
                        deleteButton.setAttribute('delete-articleid', article.id);
                        deleteButton.addEventListener('click', function () {
                            const articleId = this.getAttribute('delete-articleid');
                            deleteArticle(articleId, row);
                        });
                        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'm-2');
                        actionsCell.appendChild(deleteButton);

                        row.appendChild(actionsCell);

                        tableBody.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        })
        .catch(error => console.error('Error fetching category data:', error));

    function deleteArticle(articleId, row) {
        fetch(`/api/article/delete?id=${articleId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    tableBody.removeChild(row);
                } else {
                    console.error('Error deleting article');
                }
            })
            .catch(error => console.error('Error deleting article:', error));
    }
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/category')
        .then(response => response.json())
        .then(data => {
            const addCategorySelect = document.getElementById('addCategory');

            data.data.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                addCategorySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
});
