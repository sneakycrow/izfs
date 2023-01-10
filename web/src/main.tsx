import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Upload from "./Upload";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/upload",
        element: <Upload />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
