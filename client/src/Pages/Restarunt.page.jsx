import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Restaurant = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  if (`/restarunt/${id}` === pathname) {
    return <Navigate to={`/restarunt/${id}/overview`} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Restaurant;
