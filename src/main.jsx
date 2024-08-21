import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Component/Root.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Component/Home/Home.jsx';
import LogIn from './Component/LogIn/LogIn.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://electra-server-chi.vercel.app/itemsCount')
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  
  

<QueryClientProvider client={queryClient}>
<StrictMode>
    <AuthProvider>
    <div className='mx-auto text-center container'>
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </StrictMode>
 </QueryClientProvider>


)
