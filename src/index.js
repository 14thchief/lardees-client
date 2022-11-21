import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css';
import Hero from './features/hero/Hero';
import Product from './features/product/Product';

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Hero />,
      },
      
    ],
  },
  {
    path: "product",
    element: <Product />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
