import axios from 'axios';

const API_BASE_URL = 'https://localhost:7128/api';

export const getAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/User/GetUsers`, {
          headers: {
            'accept': '*/*'
          }
        });
  return response.data;
};

// Example: Create a new item
export const addUser = async (itemData) => {
  const response = await axios.post(`${API_BASE_URL}/User/AddUser`, itemData);
  return response.data;
};

// Example: Update an item
export const updateUser = async (id, itemData) => {
  const response = await axios.put(`${API_BASE_URL}/User/${id}`, itemData);
  return response.data;
};

// Example: Delete an item
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/User/${id}`);
  return response.data;
};