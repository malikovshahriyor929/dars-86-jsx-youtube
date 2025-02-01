import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../pages/Mainlayout";
import Trending from "../pages/mainPage/trending";
import Subscription from "../pages/mainPage/Subscription";
import Library from "../pages/mainPage/Library";
import History from "../pages/mainPage/History";
import Yourvd from "../pages/mainPage/yourvd";
import Watchlater from "../pages/mainPage/watchlater";
import Liked from "../pages/mainPage/liked";
import Home from "../pages/mainPage/Home";

const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/yourvideos" element={<Yourvd />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/liked" element={<Liked />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
