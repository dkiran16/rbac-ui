import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const API_BASE_URL = 'https://localhost:7128/api';


export const login = async (itemData) => {
    const response = await axios.post(`${API_BASE_URL}/Auth/login`, itemData);
    const token = response.data.token;
    if(token){
        try {
            const decoded = jwtDecode(token);
            console.log('Decoded token:', decoded);
            localStorage.setItem("jwt", token); 
            return decoded; 
        } catch (error) {
            console.error('Invalid token:', error);            
            localStorage.removeItem("jwt");  
        }
    } else {
        console.log('No token found in localStorage');
    }
    return null;
}; 
