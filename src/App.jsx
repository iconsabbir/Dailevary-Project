
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Service from './component/Service/Service';

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
