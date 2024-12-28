import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Home from "./Home";
import Admin from "./components/admin/Admin";
import Driver from "./components/driver/Driver";
import User from "./components/user/User";
import './App.css'
function App() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user.role;

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Home Route - Always accessible */}
          <Route path="/" element={<Home />} />
          
          {/* Login and Register routes should not be accessible if token exists */}
          {!token ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            // Redirecting if already logged in
            <Route path="*" element={<Navigate to="/" replace />} />
          )}

          {/* Role-based Routes */}
          {token && role === "admin" && (
            <>
              <Route path="/admin" element={<Admin />} />
              {/* Admin can also access Driver and User routes if needed */}
              <Route path="/driver" element={<Driver />} />
              <Route path="/user" element={<User />} />
            </>
          )}
          {token && role === "driver" && (
            <>
              <Route path="/driver" element={<Driver />} />
              <Route path="/user" element={<User />} />
            </>
          )}
          {token && role === "user" && (
            <Route path="/user" element={<User />} />
          )}

          {/* Fallback Route for invalid routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
