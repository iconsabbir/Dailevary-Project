
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import SingUp from './component/SingUp/SingUp';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/service',
      element:<Service></Service>
    },
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/singup',
      element:<SingUp></SingUp>
    }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
       
    </>
  )
}

export default App
