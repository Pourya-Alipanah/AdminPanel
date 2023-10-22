import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "AdminPanel/",
    element : <MainLayout/>
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "AdminPanel/login",
        element: <Login />,
      },
      {
        path: "AdminPanel/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
