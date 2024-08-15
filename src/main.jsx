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
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5012/itemsCount')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  
  

<QueryClientProvider client={queryClient}>
<StrictMode>
    <div className='mx-auto text-center container'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
 </QueryClientProvider>


)
