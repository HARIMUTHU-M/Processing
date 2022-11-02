import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";

const ViewParticipants = () => {
  const user = useSelector(selectCurrentUser);

  const authFn = () => {
    alert("You are not authorized to this page");
    return <Navigate to="/" />;
  };

  return (user.isAdmin && user.role === "view-participants") ? (
    <Outlet />
  ) : (
    authFn()
  );
};

export default ViewParticipants;
