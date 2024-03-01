import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('check')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
