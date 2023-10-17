/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useCustomeHook from "../Hooks/useCustomeHook";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useCustomeHook();
  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <span className=" loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/logins"}></Navigate>;
};

export default PrivateRoute;