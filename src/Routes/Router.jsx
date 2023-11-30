import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Contact from "../Pages/Contact/Contact";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/MainLayout/Dashboard";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Dashboard/Admin/Details/Details";
import Hr from "../Pages/Dashboard/Hr/Hr";
import Progress from "../Pages/Dashboard/Hr/Progress";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "details",
        element: <Details></Details>,
      },
      {
        path: "all-user",
        element: <AllUser></AllUser>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "employee-list",
        element:<Hr></Hr>
      },
      {
        path: 'progress',
        element:<Progress></Progress>
      },
    ],
  },
]);

export default Router;
