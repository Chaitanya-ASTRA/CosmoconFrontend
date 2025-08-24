import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home';
import './App.css'
import Objectives from './Objectives';
import Event from './Events';
import Guest from './Guest';
import Gallery from './Gallery';
import Registration from './Registration';
import { Analytics } from '@vercel/analytics/react';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/objectives',
      element:<Objectives/>
    },{
      path:'/events',
      element:<Event/>
    },{
      path:'/guests',
      element:<Guest/>
    },{
      path:'/gallery',
      element:<Gallery/>
    },{
      path:"/home",
      element:<Home/>
    },{
      path:"/register",
      element:<Registration/>
    }
  ]);

  return (
    <>
    <main>
      <RouterProvider router={router} />
      <Analytics />
    </main>
    </>
  )
}

export default App
