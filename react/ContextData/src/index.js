import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './contextProvider/UserContextProvider';

// html from index.html
const element = document.getElementById('root');

// create root element 
const root = ReactDOM.createRoot(element);

root.render(
  <UserContextProvider initalValue={{}}>
    <App />
  </UserContextProvider>
);
