import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './container/Dashboard';
import Login from './container/Login';

import Home from './container/dashboard/Home';
import About from './container/dashboard/About';
import Profile from './container/dashboard/Profile';
import NotFound from './container/NotFound';

import Applications from './container/dashboard/home/Applications';
import Servers from './container/dashboard/home/Servers';

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contextProvider/AuthProvider';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={ <Dashboard />}>
                    <Route path="home" element={ <Home />}>
                        <Route path="applications" element={ <Applications />} />
                        <Route path="servers" element={ <Servers />} />
                    </Route>
                    <Route path="about" element={ <About />} />
                    <Route path="profile" element={ <Profile />} />
                </Route>
                
                <Route path="/login" element={ <Login />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </Router>
    </AuthProvider>
);
