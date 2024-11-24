import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import App from './App'; // Adjust the path to your App component

const root = ReactDOM.createRoot(document.getElementById('root')); // This should match the ID in your index.php
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);