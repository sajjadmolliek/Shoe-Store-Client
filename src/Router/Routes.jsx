import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Logins from "../Pages/Logins/Logins";
import Resister from "../Pages/Resister/Resister";
import Blog from "../Pages/Blog/Blog";
import MyCart from "../Pages/MyCart/MyCart";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "../Private/PrivateRoute";

const Routes = createBrowserRouter([
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/logins",
        element: <Logins></Logins>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
    ],
  },
]);

export default Routes;
