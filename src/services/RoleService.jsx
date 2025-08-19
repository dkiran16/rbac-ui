import axios from 'axios';

const API_BASE_URL = 'https://localhost:7128/api';

export const getAllRoles = async () => {
  const response = await axios.get(`${API_BASE_URL}/Roles/GetRoles`, {
          headers: {
            'accept': '*/*'
          }
        });
  return response.data;
};

// Example: Create a new item
export const addRole = async (itemData) => {
  const response = await axios.post(`${API_BASE_URL}/Roles/PostRoles`, itemData);
  return response.data;
};

// Example: Update an item
export const updateItem = async (id, itemData) => {
  const response = await axios.put(`${API_BASE_URL}/Roles/${id}`, itemData);
  return response.data;
};

// Example: Delete an item
export const deleteItem = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/Roles/${id}`);
  return response.data;
};