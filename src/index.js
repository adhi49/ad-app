import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Agri from './AAB-App-1-1/Agri';
import AgriComp from './AAB-App-2-1/AgriComp';
const routerList = createBrowserRouter([
  {
    path: "/",
    element: <AgriComp />
  },
  {
    path: "/home",
    element: <Agri />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerList} />
  </React.StrictMode>
);
reportWebVitals();
