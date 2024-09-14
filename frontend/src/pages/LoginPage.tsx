import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

// Define the interface for the login response
interface LoginResponse {
    access: string;
}

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {login, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the error when input fields change
        setError('');
    }, [username, password]);

    useEffect(() => {
        // If the user is authenticated, redirect to the homepage
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post<LoginResponse>('http://localhost:8000/api/users/login/', {
                username,
                password,
            });

            const {access} = response.data;

            // Log in the user
            login(access);

            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false); // Stop loading spinner when request finishes
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg rounded-5" style={{maxWidth: '900px', width: '100%'}}>
                <div className="row g-0">
                    <div className="col-md-6 d-flex flex-column justify-content-center p-5">
                        <h2 className="text-center mb-4 h2 fw-bold mb-3">Login</h2>
                        {error && <div className="alert alert-danger text-center">{error}</div>}
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${error ? 'is-invalid' : ''}`}
                                    placeholder="Username or email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className={`form-control ${error ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100 p-2 mt-3 fw-medium"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? (
                                    <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </form>
                    </div>

                    <div
                        className="col-md-6 d-flex align-items-center justify-content-center p-5 bg-isabelline rounded-end-5">
                        <img src="images/login_page.png" alt="Project Progress" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
