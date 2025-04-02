document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/category")
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                const categories = data.data;
                const categoryContainer = document.getElementById("category-container");
                categoryContainer.innerHTML = ""; // Clear existing content
                
                categories.forEach(category => {
                    const label = document.createElement("label");
                    label.classList.add("flex", "items-center");
                    
                    const input = document.createElement("input");
                    input.type = "radio";
                    input.name = "category";
                    input.classList.add("mr-2");
                    input.value = category.id;
                    
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(category.name));
                    categoryContainer.appendChild(label);
                });
            }
        })
        .catch(error => console.error("Error fetching categories:", error));
});
