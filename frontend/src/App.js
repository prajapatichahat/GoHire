import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';

import './App.css';
import Home from './Home';
// import './css/style.css';

function App() {
    return (
        <>
        <AuthProvider>
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<div>Admin Dashboard</div>} />
                    <Route path="/driver" element={<div>Driver Dashboard</div>} />
                    <Route path="/user" element={<div>User Dashboard</div>} />
                </Routes>
            </Router>
        </AuthProvider>
        </>
    );
}

export default App;
