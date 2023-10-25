// eslint-disable-next-line no-unused-vars
import { appAuth } from "@components/firebaseConfig";
import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/MainLayout";
import { loginAction } from "./features/identity/components/loginAction";
import { registerAction } from "./features/identity/components/registerAction";

const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout/>
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);

export default router;
