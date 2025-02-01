// img
import { useEffect, useState } from "react";
import { api } from "../../../server";
import VideosCard from "./videos";

const Home = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    api.get("/youtube").then((res) => setData(res.data));
  }, []);

  const handleMouseOver = (e) => {
    const iframe = e.currentTarget.querySelector("iframe");

    // if (iframe) {
    //   // Request the iframe to enter fullscreen
    //   if (iframe.requestFullscreen) {
    //     iframe.requestFullscreen();
    //   } else if (iframe.webkitRequestFullscreen) {
    //     iframe.webkitRequestFullscreen();
    //   } else if (iframe.mozRequestFullScreen) {
    //     iframe.mozRequestFullScreen();
    //   } else if (iframe.msRequestFullscreen) {
    //     iframe.msRequestFullscreen();
    //   }

    //   // Send the play command to the YouTube iframe
    //   iframe.contentWindow.postMessage(
    //     JSON.stringify({
    //       event: "command",
    //       func: "playVideo",
    //       args: [],
    //     }),
    //     "*"
    //   );
    // }
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-5 p-5  bg-[#f9f9f9] overflow-y-scroll h-[86vh] ">
        {data.map((value) => (
          <VideosCard
            key={value.id}
            {...value}
            handleMouseOver={handleMouseOver}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
