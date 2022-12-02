import React from 'react';
import ReactDOM from 'react-dom/client';

// html from index.html
const element = document.getElementById('root');

// create root element 
const root = ReactDOM.createRoot(element);

const App = () => {
    return (
        <div> my First React App</div>
    )
};

root.render(<App />);
