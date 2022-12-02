import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// redux dependencies
import { Provider } from 'react-redux';
import store from './store';

// html from index.html
const element = document.getElementById('root');

// create root element 
const root = ReactDOM.createRoot(element);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
