import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
// import CreateGroupCard from "./components/cards/CreateGroupCard"
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import useToken from './custom-hooks/useToken';
import "./assets/css/index.css";

export default function App() {
    const { token, setToken } = useToken();
    
    return (
        <Routes>
            <Route path="/"
                element={
                    <ProtectedRoute token={token}>
                        <Home/>
                        {/* <CreateGroupCard /> */}
                    </ProtectedRoute>
                }
            />
            <Route path="/login" 
                element={
                    <PublicRoute token={token}>
                        <Login setToken={ setToken } />
                    </PublicRoute>
                }
            />
            <Route path="/register"
                element={
                    <PublicRoute token={token}>
                        <Register setToken={ setToken }/>
                    </PublicRoute>
                }
            />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}