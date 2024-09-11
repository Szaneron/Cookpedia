import React, {useState} from 'react';
import axios from 'axios';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

// Define the expected structure of the login response
interface LoginResponse {
    access: string;
}

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Pass the interface as a generic type to axios.post
            const response = await axios.post<LoginResponse>('http://localhost:8000/api/users/login/', {
                username,
                password,
            });

            // Destructure the access token from the response data
            const {access} = response.data;

            // Log in the user and store the token
            login(access);

            // Redirect to the homepage after login
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
