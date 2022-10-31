import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";

const PrivateRoutes = () => {
  const user = useSelector(selectCurrentUser);

  const authFn = () => {
    alert("You are not authorized to this page");
    return (<Navigate to="/profile" />);
  }

  return user.isAdmin ? (
    <Outlet />
  ) : (
    authFn()
  );
};

export default PrivateRoutes;
