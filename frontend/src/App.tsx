import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RequireAuth from './components/RequireAuth';
import {AuthProvider} from './context/AuthContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <main>
                    <Routes>
                        {/* Public route - Login */}
                        <Route path="/login" element={<LoginPage/>}/>

                        {/* Protected routes */}
                        <Route element={<RequireAuth/>}>
                            <Route path="/" element={<Home/>}/>
                        </Route>
                    </Routes>
                </main>
            </Router>
        </AuthProvider>
    );
};

export default App;
