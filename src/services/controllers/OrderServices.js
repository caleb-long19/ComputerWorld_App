import { ref, onMounted } from 'vue'
import ComputerWorldServices from '../../services/ComputerWorldServices.js'


export const orders = ref([])

export const selectedOrder = ref({
    order_id: '',
    order_ref: '',
    order_amount: '',
    product_id: '',
    order_price: '',
}) // Object to store selected order details

export const fetchOrders = () => {
    onMounted(() => {
        ComputerWorldServices.getOrders()
            .then((response) => {
                orders.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    })
}

// Function to handle row click and update selected order
export const selectOrder = (order) => {
    selectedOrder.value = { ...order } // Update with clicked order data
}

export const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a order record
export const createRecord = () => {
    const url = `${apiUrl}/order/`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order_ref: selectedOrder.value.order_ref,
            order_amount: Number(selectedOrder.value.order_amount),
            product_id: Number(selectedOrder.value.product_id),
            order_price: parseFloat(selectedOrder.value.order_price),
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert('Record created successfully');
// Optionally, fetch and update the list of orders
                return ComputerWorldServices.getOrders(); // Refresh list
            } else {
                alert('Failed to create order');
            }
        })
        .then((response) => {
            if (response) {
                orders.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log("THE ERROR IS DISPLAYED HERE:", url, error)
            console.log('Error:', error);
            alert('An error occurred while creating Manufacturer');
        });
}

// Function to update a order record
export const updateRecord = (id) => {
    const url = `${apiUrl}/order/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order_id: selectedOrder.value.order_id,
            order_ref: selectedOrder.value.order_ref,
            order_amount: Number(selectedOrder.value.order_amount),
            product_id: Number(selectedOrder.value.product_id),
            order_price: parseFloat(selectedOrder.value.order_price),
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert('Record updated successfully');
// Optionally, fetch and update the list of orders
                return ComputerWorldServices.getOrders(); // Refresh list
            } else {
                alert('Failed to update order');
            }
        })
        .then((response) => {
            if (response) {
                orders.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while updating product');
        });
}

// Function to delete a order record
export const deleteRecord = (id) => {
    const url = `${apiUrl}/order/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                alert('Record deleted successfully');
// Optionally, fetch and update the list of orders
                return ComputerWorldServices.getOrders(); // Refresh list
            } else {
                alert('Failed to delete order');
            }
        })
        .then((response) => {
            if (response) {
                orders.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while deleting order');
        });
}

export const clearSelection = () => {
    selectedOrder.value = {
        order_id: '',
        order_ref: '',
        order_amount: '',
        product_id: '',
        order_price: '',
    };
}
