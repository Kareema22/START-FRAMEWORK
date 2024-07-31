import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Portfolio from './components/portfolio/Portfolio';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />,
    }, {
      path: "/about",
      element: <About />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/contact",
      element: <Contact />,
    }]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
