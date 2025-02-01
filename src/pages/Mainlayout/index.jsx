import React from "react";
import SideBar from "../../components/sideBar";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <div className="flex w-full overflow-hidden ">
        <SideBar />
        <div className="flex flex-col w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Mainlayout;
