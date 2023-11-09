import { RouterProvider } from "react-router-dom";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer limit={1} rtl />
    </>
  );
}

export default App;
