import React from 'react';

const DriverDashboard = () => {
    return (
        <div>
            <h1>Driver Dashboard</h1>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    );
};

const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
};

export default DriverDashboard;
