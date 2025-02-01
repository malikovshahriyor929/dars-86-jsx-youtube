// svgs
import menu from "../../assets/Hamburger-Menü.svg";
import logo from "../../assets/Logo.svg";
import home from "../../assets/Group.svg";
import trending from "../../assets/trending.svg";
import subscription from "../../assets/subscription.svg";
import library from "../../assets/library.svg";
import history from "../../assets/history.svg";
import yourvideos from "../../assets/your videos.svg";
import watchlater from "../../assets/watch later.svg";
import liked from "../../assets/liked videos.svg";
import channel from "../../assets/Profile Photo.svg";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-white flex flex-col gap-2 ">
      <div className="flex  items-center p-5 gap-5 ">
        <img src={menu} alt="" />
        <img src={logo} alt="" />
      </div>
      <div>
        <NavLink to="/" className="flex items-center gap-5  ">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={home} alt="" />
            <p className="font-medium text-[14px]">Home</p>
          </div>
        </NavLink>
        <NavLink to="/trending" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={trending} alt="" />
            <p className="font-medium text-[14px]">Trending</p>
          </div>
        </NavLink>
        <NavLink to="/subscription" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={subscription} alt="" />
            <p className="font-medium text-[14px]">Subscription</p>
          </div>
        </NavLink>
        <div className="h-[1px] w-full bg-[#e5e5e5] my-2"></div>
        <NavLink to="/library" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={library} alt="" />
            <p className="font-medium text-[14px]">Library</p>
          </div>
        </NavLink>
        <NavLink to="/history" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={history} alt="" />
            <p className="font-medium text-[14px]">History</p>
          </div>
        </NavLink>
        <NavLink to="/yourvideos" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={yourvideos} alt="" />
            <p className="font-medium text-[14px]">Your videos</p>
          </div>
        </NavLink>
        <NavLink to="/watchlater" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={watchlater} alt="" />
            <p className="font-medium text-[14px]">Watch later</p>
          </div>
        </NavLink>
        <NavLink to="/liked" className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5  px-5 p-3  ">
            <img src={liked} alt="" />
            <p className="font-medium text-[14px]">Liked videos</p>
          </div>
        </NavLink>
        <div className="h-[1px] w-full bg-[#e5e5e5] my-2"></div>
        <div
          className=" flex
         flex-col gap-2"
        >
          <p className="text-[14px] px-5 text-[#606060] font-medium">
            SUBSCRIPTIONS
          </p>
          <div className="flex flex-col gap-2">
            <div className="px-5  flex items-center gap-3">
              <img src={channel} className="h-6 w-6" alt="channel" />
              <p className="text-[14px] text-[#030303] ">Oktay Candan</p>
            </div>
            <div className="px-5  flex items-center gap-3">
              <img src={channel} className="h-6 w-6" alt="channel" />
              <p className="text-[14px] text-[#030303] ">Arnold Morrison</p>
            </div>
            <div className="px-5  flex items-center gap-3">
              <img src={channel} className="h-6 w-6" alt="channel" />
              <p className="text-[14px] text-[#030303] ">Hudson Snyder</p>
            </div>
            <div className="px-5  flex items-center gap-3">
              <img src={channel} className="h-6 w-6" alt="channel" />
              <p className="text-[14px] text-[#030303] ">Thomas Burns</p>
            </div>
            <div className="px-5  flex items-center gap-3">
              <img src={channel} className="h-6 w-6" alt="channel" />
              <p className="text-[14px] text-[#030303] ">Browse channels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
