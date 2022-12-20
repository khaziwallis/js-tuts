import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider
} from 'react-router-dom';

import {
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import { createHashRouter } from 'react-router-dom';

import AppForBrowserRouter from './AppForBrowserRouter';
import AppForHashRouter from './AppForHashRouter';
import Contact from './container/contact';
import Home from './container/home';
import Loading from './container/Loading';

// html from index.html
const element = document.getElementById('root');

// create root element 
const root = ReactDOM.createRoot(element);
/*
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppForBrowserRouter />}>
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
);
*/


const router = createHashRouter([
    {
        path: "/",
        element: <AppForHashRouter />,
        children: [
          {
            path: "home",
            element: <Home />
          },
          {
            path: "contact",
            element: <Contact />
          }
        ],
    }
]);


root.render(
    <RouterProvider
        router={router}
        fallbackElement={Loading}
    >
    </RouterProvider>
);
