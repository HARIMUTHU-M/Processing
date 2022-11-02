import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";

const AddEventRoutes = () => {
  const user = useSelector(selectCurrentUser);

  const authFn = () => {
    alert("You are not authorized to this page");
    return (<Navigate to="/" />);
  }

  return (user.isAdmin && user.role === "add-event") ? (
    <Outlet />
  ) : (
    authFn()
  );
};

export default AddEventRoutes;
