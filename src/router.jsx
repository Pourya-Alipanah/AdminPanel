import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login/Login";
import Register from "./features/identity/components/register/Register";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/MainLayout";
import { loginAction } from "./features/identity/components/login/loginAction";
import { registerAction } from "./features/identity/components/register/registerAction";
import Courses from "./pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout/>,
    children:[
      {
        element: <Courses/>,
        index: true
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
