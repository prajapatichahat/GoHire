import React from 'react';

const UserDashboard = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    );
};

const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
};

export default UserDashboard;
