import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
      
   const router=createHashRouter([
    {path:"/",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/contact',element:<Contact/>},
      {path:'/portfolio',element:<Portfolio/>}
 
    ]}
   ])

 
  return (
    <>
    
         <RouterProvider router={router}></RouterProvider>
        
    </>
  )
}

export default App
