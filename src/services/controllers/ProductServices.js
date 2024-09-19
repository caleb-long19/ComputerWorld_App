import { ref, onMounted } from 'vue'
import ComputerWorldServices from '../../services/ComputerWorldServices.js'

export const products = ref([])

export const selectedProduct = ref({
    product_id: '',
    product_code: '',
    product_name: '',
    manufacturer_id: '',
    product_stock: '',
    product_price: '',
}) // Object to store selected product details

export const fetchProducts = () => {
    onMounted(() => {
        ComputerWorldServices.getProducts()
            .then((response) => {
                products.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    })
}

// Function to handle row click and update selected product
export const selectProduct = (product) => {
    selectedProduct.value = { ...product } // Update with clicked product data
}

export const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a product record
export const createRecord = () => {
    const url = `${apiUrl}/product/`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_code: selectedProduct.value.product_code,
            product_name: selectedProduct.value.product_name,
            manufacturer_id: Number(selectedProduct.value.manufacturer_id),
            product_stock: Number(selectedProduct.value.product_stock),
            product_price: parseFloat(selectedProduct.value.product_price),
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert('Record created successfully');
                // Optionally, fetch and update the list of products
                return ComputerWorldServices.getProducts(); // Refresh list
            } else {
                alert('Failed to create product');
            }
        })
        .then((response) => {
            if (response) {
                products.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log("THE ERROR IS DISPLAYED HERE:", url, error)
            console.log('Error:', error);
            alert('An error occurred while creating Manufacturer');
        });
}

// Function to update a product record
export const updateRecord = (id) => {
    const url = `${apiUrl}/product/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: selectedProduct.value.product_id,
            product_code: selectedProduct.value.product_code,
            product_name: selectedProduct.value.product_name,
            manufacturer_id: Number(selectedProduct.value.manufacturer_id),
            product_stock: Number(selectedProduct.value.product_stock),
            product_price: parseFloat(selectedProduct.value.product_price),
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert('Record updated successfully');
                // Optionally, fetch and update the list of products
                return ComputerWorldServices.getProducts(); // Refresh list
            } else {
                alert('Failed to update product');
            }
        })
        .then((response) => {
            if (response) {
                products.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while updating product');
        });
}

// Function to delete a product record
export const deleteRecord = (id) => {
    const url = `${apiUrl}/product/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                alert('Record deleted successfully');
                // Optionally, fetch and update the list of products
                return ComputerWorldServices.getProducts(); // Refresh list
            } else {
                alert('Failed to delete product');
            }
        })
        .then((response) => {
            if (response) {
                products.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while deleting product');
        });
}

export const clearSelection = () => {
    selectedProduct.value = {
        product_id: '',
        product_code: '',
        product_name: '',
        manufacturer_id: '',
        product_stock: '',
        product_price: '',
    };
}