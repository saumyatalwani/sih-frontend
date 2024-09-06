import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './routes/root';
import Verify from './routes/verify';
import Verified from './routes/verified';
import Issue from './routes/issue';
import Issued from './routes/issued';
import Error from './routes/error';
import NotVerified from './routes/notVerified';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />
  },
  {
    path: "/verify",
    element: <Verify/>,
  },
  {
    path: "/verified",
    element: <Verified/>,
  },
  {
    path: "/notVerified",
    element: <NotVerified/>,
  },
  {
    path: "/issue",
    element: <Issue/>,
  },
  {
    path: "/issued",
    element: <Issued/>,
  },
  {
    path: "/error",
    element: <Error/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
