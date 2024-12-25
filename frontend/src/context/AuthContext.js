import axios from 'axios';
import {useState , createContext} from 'react'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'; 
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.withCredentials = true; 

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    
    const login = async (email, password) => {
        try {
            const { data } = await axios.post('/login', { email, password });
    
            // Store the token and user in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
    
            // Set the user state
            setUser(data.user);
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            throw error; // Let the error propagate for the frontend to handle
        }
    };
    

    const register = async (name, email, password, role) => {
        const { data } = await axios.post('/register', { name, email, password, role });
        localStorage.setItem('token', data.token);
        setUser(data.user);
    };

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};  

export { AuthContext, AuthProvider };
