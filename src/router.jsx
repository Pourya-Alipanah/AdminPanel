import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login/Login";
import Register from "./features/identity/components/register/Register";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import { loginAction } from "./features/identity/components/login/loginAction";
import { registerAction } from "./features/identity/components/register/registerAction";
import Courses from "./pages/courses/Courses";
import Category from "./pages/Category";
import coursesLoader from "./pages/courses/coursesLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout/>,
    children:[
      {
        element: <Courses/>,
        index: true,
        loader: coursesLoader
      },
      {
        path:"/category",
        element:<Category/>
      }
    ]
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login/>
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />
      },
    ],
  },
]);

export default router;
