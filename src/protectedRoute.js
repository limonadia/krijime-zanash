import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from './services/authService';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken'); // Get token from localStorage

    useEffect(() => {
        const checkTokenValidity = async () => {
            if (token) {
                const verified = await verifyToken(token);
                if (!verified) {
                    navigate('/login'); // Redirect to login if token is invalid
                }
            } else {
                navigate('/login'); // Redirect to login if there's no token
            }
        };

        checkTokenValidity();
    }, [token, navigate]);

    if (!token) {
        return <Navigate to="/login" />; // Fallback in case token is not available
    }

    return children;
};

export default ProtectedRoute;
