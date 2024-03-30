import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import Bookmarks from './Pages/Bookmarks.jsx';
import Root from './Root/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
        {
    path: '/blog',
    element:<Blog></Blog>
  },
  {
    path: '/bookmarks',
    element:<Bookmarks></Bookmarks>
  }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
