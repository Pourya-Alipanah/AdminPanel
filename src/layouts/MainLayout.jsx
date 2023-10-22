import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
    const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (!token) {
        navigate("/login");
      }
  },[token])

  return <div>MainLayout</div>;
};

export default MainLayout;
