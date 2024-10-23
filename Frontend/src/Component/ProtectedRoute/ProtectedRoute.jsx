import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const { Component } = props;

    useEffect(() => {
        const userToken = Cookies.get('userToken');
        if (!userToken) {
            navigate('/login');
        }
    }, [navigate]);

    return <Component />;
};

export default ProtectedRoute;
