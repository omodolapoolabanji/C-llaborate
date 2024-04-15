import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>, 
  children: [
    {
      path:"/", 
      element: <RecordList/>,
    },
    {
      path: "/edit/:id" , 
      element: <App/>, 
      children: [
        {
          path: "edit/:id", 
          element: <Record/>
        }
      ]
    },
    {
      path: "/create", 
      element: <Record/>, 


    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
