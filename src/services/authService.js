import axios from 'axios';

const API_URL = "http://localhost:3000/api/auth";

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

export const signin = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};

export const getProfile = async (token) => {
    const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`);
        
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        
        window.location.href = '/login';
    } catch (error) {
        console.error("Logout failed:", error);
    }
};

// This function verifies if the JWT token is valid
export const verifyToken = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // If the token is valid, return the response data
    } catch (error) {
        console.error("Token verification failed:", error);
        return null; // If verification fails, return null or an error message
    }
};

// Example usage in a component or page
export const checkToken = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
    if (token) {
        const verified = await verifyToken(token);
        if (verified) {
            console.log("Token is valid:", verified);
            // You can navigate to the protected page if the token is valid
        } else {
            console.log("Invalid or expired token");
            // You can redirect the user to login if the token is invalid
        }
    } else {
        console.log("No token found");
        // Redirect to login if no token is present
    }
};



