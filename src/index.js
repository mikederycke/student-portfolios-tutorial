import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Sidebar, {loader as sidebarLoader} from './components/Sidebar';
import About from './routes/About';

import Content, {loader as studentLoader} from './components/Content';
import ErrorPage from './routes/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: sidebarLoader, 
    children: [
      {
        path: '/student/:id',
        element: <Content />,
        loader: studentLoader
      }
    ]
  },{
    path: '/about',
    element: <About />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

