export async function fetchOrderData() {
    const delivered = {
        0: 'In transit',
        1: 'Delivered'
    };

    const paid = {
        0: 'Must be paid',
        1: 'Paid'
    };

    const tableBody = document.querySelector('#orderTable tbody');

    if (tableBody) {
        try {
            const response = await fetch('/api/order');
            const data = await response.json();

            const promises = data.data.map(async (order) => {
                const user = await fetchUserData(order.user_id);
                const row = tableBody.insertRow(); 
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${user.name}</td>
                    <td>${delivered[order.delivered]}</td>
                    <td>${paid[order.paid]}</td>
                `;
            });

            await Promise.all(promises);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

async function fetchUserData(id) {
    try {
        const userResponse = await fetch(`/api/user?id=${id}`);
        const userData = await userResponse.json();

        return userData.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return { name: 'Unknown' };
    }
}
