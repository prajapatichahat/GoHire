import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(email, password); // Call login function

        // Retrieve the user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role) {
            const role = user.role;

            // Redirect based on the user's role
            if (role === 'admin') {
                navigate('/admin');
            } else if (role === 'driver') {
                navigate('/driver');
            } else if (role === 'user') {
                navigate('/user');
            } else {
                setError('Invalid user role');
            }
        } else {
            setError('Unable to fetch user data');
        }
    } catch (err) {
        setError('Invalid credentials or server error');
    }
};
 

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;