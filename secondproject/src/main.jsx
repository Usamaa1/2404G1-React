import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './Nav';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Layout } from './Layout';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/about',
        Component: About
      }
      ,
      {
        path: '/contact',
        Component: Contact
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
