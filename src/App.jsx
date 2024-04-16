import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sample from "./Pages/Sample"
import Singleinfo from './Pages/Singleinfo'
import Hello from './Pages/Hello'
import Hai from './Pages/Hai'

function App() {

  const rijo=createBrowserRouter([
    {
      path:'/',
      element:<Sample/>
    },
    {
      path:'/productinfo/:id',
      element:<Singleinfo/>
    },
    {
      path:"/hello",
      element:<Hello/>
    },
    {
      path:'/hai/:ok',
      element:<Hai/>
    }
  ])


  return (
   <RouterProvider router={rijo}></RouterProvider>
  )
}

export default App
