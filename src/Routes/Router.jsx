import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Contact from "../Pages/Contact/Contact";
import Signup from "../Pages/Signup/Signup";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/signup',
        element:<Signup></Signup>
      }
    ]
  }
])

export default Router;