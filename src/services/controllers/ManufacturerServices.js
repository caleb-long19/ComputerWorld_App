import {onMounted, ref} from "vue";
import ComputerWorldServices from "../../services/ComputerWorldServices.js";

export const manufacturers = ref([])

export const selectedManufacturer = ref({
    manufacturer_id: '',
    manufacturer_name: ''
}) // Object to store selected manufacturer details

export const fetchManufacturers = () => {
    onMounted(() => {
        ComputerWorldServices.getManufacturers()
            .then((response) => {
                manufacturers.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    })

}

// Function to handle row click and update selected manufacturer
export const selectManufacturer = (manufacturer) => {
    selectedManufacturer.value = { ...manufacturer } // Update with clicked manufacturer data
}

export const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a manufacturer record
export const createRecord = () => {
    const url = `${apiUrl}/manufacturer/`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            manufacturer_name: selectedManufacturer.value.manufacturer_name,
        }),
    })
        .then((response) => {
            console.log("THIS IS THE URL:", selectedManufacturer.value.manufacturer_name)
            if (response.ok) {
                alert('Record created successfully');
                // Optionally, fetch and update the list of manufacturers
                return ComputerWorldServices.getManufacturers(); // Refresh list
            } else {
                alert('Failed to create Manufacturer');
            }
        })
        .then((response) => {
            if (response) {
                manufacturers.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while creating Manufacturer');
        });
}

// Function to update a manufacturer record
export const updateRecord = (id) => {
    const url = `${apiUrl}/manufacturer/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            manufacturer_id: selectedManufacturer.value.manufacturer_id,
            manufacturer_name: selectedManufacturer.value.manufacturer_name,
        }),
    })
        .then((response) => {
            console.log("THIS IS THE URL:", url)
            if (response.ok) {
                alert('Record updated successfully');
                // Optionally, fetch and update the list of manufacturers
                return ComputerWorldServices.getManufacturers(); // Refresh list
            } else {
                alert('Failed to update Manufacturer');
            }
        })
        .then((response) => {
            if (response) {
                manufacturers.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while updating Manufacturer');
        });
}

// Function to delete a manufacturer record
export const deleteRecord = (id) => {
    const url = `${apiUrl}/manufacturer/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                alert('Record deleted successfully');
                // Optionally, fetch and update the list of manufacturers
                return ComputerWorldServices.getManufacturers(); // Refresh list
            } else {
                alert('Failed to delete Manufacturer');
            }
        })
        .then((response) => {
            if (response) {
                manufacturers.value = response.data;
                clearSelection(); // Clear selection after creation
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('An error occurred while deleting Manufacturer');
        });
}

// Clear the form data
export const clearSelection = () => {
    selectedManufacturer.value = {
        manufacturer_id: '',
        manufacturer_name: ''
    };
}