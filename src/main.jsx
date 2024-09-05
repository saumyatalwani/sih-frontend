import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Loading from './routes/loading';
import './index.css'
import Verified from './routes/verified';
import Issue from './routes/create';
import Issued from './routes/issued';
import Error from './routes/error';

const router = createBrowserRouter([
  {
    path: "/upload",
    element: <Root/>,
  },
  {
    path: "/load",
    element: <Loading/>,
  },
  {
    path: "/issued",
    element: <Issued/>,
  },
  {
    path: "/verified",
    element: <Verified/>,
  },
  {
    path: "/issue",
    element: <Issue/>,
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
