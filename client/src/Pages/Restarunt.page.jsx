import React from "react";
import { Outlet } from "react-router-dom";
import RestaruntLayout from "../Layouts/Restarunt.layout";
const Restaruntpage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RestaruntLayout(Restaruntpage);
