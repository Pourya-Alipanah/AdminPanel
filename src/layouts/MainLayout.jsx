import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (!token) {
        navigate("/login");
      }
  },[token])

  return (
    <>
      <Outlet/>
    </>
  )
};

export default MainLayout;
