import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './router/router';

// html from index.html
const element = document.getElementById('root');

// create root element 
const root = ReactDOM.createRoot(element);

export const LoginContext = createContext();

const loginUser = {};

const setLoginUser = () => {};

root.render(
    <LoginContext.Provider value={{ loginUser, setLoginUser }}>
        <RouterProvider router={router} />
    </LoginContext.Provider>
);
