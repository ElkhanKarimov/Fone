import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailPage from './pages/detail/DetailPage';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { Store } from './Store';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);

