import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layouts/IdentityLayout";

const router = createBrowserRouter([
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
