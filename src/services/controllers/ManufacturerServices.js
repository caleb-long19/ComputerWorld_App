import { ref } from "vue";
import ComputerWorldServices from "../../services/ComputerWorldServices.js";

export const manufacturers = ref([]);

export const selectedManufacturer = ref({
    manufacturer_id: '',
    manufacturer_name: ''
});

export const fetchManufacturers = () => {
    ComputerWorldServices.getManufacturers()
      .then((response) => {
          manufacturers.value = response.data;
      })
      .catch((error) => {
          console.log(error);
      });
};

export const selectManufacturer = (manufacturer) => {
    selectedManufacturer.value = { ...manufacturer };
};

export const apiUrl = 'http://localhost:5000'; // Ensure this is correct

// Function to create a manufacturer record
export const createRecord = async () => {
    const url = `${apiUrl}/manufacturer/`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            manufacturer_name: selectedManufacturer.value.manufacturer_name,
        }),
    })
      .then((response) => {
          if (response.ok) {
              alert('Record created successfully');
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
};

// Function to update a manufacturer record
export const updateRecord = async (id) => {
    const url = `${apiUrl}/manufacturer/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            manufacturer_id: selectedManufacturer.value.manufacturer_id,
            manufacturer_name: selectedManufacturer.value.manufacturer_name,
        }),
    })
      .then((response) => {
          if (response.ok) {
              alert('Record updated successfully');
              return ComputerWorldServices.getManufacturers(); // Refresh list
          } else {
              alert('Failed to update Manufacturer');
          }
      })
      .then((response) => {
          if (response) {
              manufacturers.value = response.data;
              clearSelection(); // Clear selection after update
          }
      })
      .catch((error) => {
          console.log('Error:', error);
          alert('An error occurred while updating Manufacturer');
      });
};

// Function to delete a manufacturer record
export const deleteRecord = (id) => {
    const url = `${apiUrl}/manufacturer/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
      .then((response) => {
          if (response.ok) {
              alert('Record deleted successfully');
              return ComputerWorldServices.getManufacturers(); // Refresh list
          } else {
              alert('Failed to delete Manufacturer');
          }
      })
      .then((response) => {
          if (response) {
              manufacturers.value = response.data;
              clearSelection(); // Clear selection after deletion
          }
      })
      .catch((error) => {
          console.log('Error:', error);
          alert('An error occurred while deleting Manufacturer');
      });
};

// Clear the form data
export const clearSelection = () => {
    selectedManufacturer.value = {
        manufacturer_id: '',
        manufacturer_name: ''
    };
};
