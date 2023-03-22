import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Public = ({ children }) => {
  const adminToken = "";

  return adminToken ? <Navigate to="/dashboard/home" /> : children;
};

export default Public;
