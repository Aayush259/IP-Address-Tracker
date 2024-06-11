import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/IP-Address-Tracker/' element={<App />}>
            <Route path='/IP-Address-Tracker/' element={<App />} />
            <Route path='/IP-Address-Tracker/ip/:ip' element={<App />} />
            <Route path='/IP-Address-Tracker/ip' element={<App />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
