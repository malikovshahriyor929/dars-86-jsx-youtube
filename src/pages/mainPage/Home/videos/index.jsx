import React from "react";
import profile from "../../../../assets/Profile Photo.svg";

const VideosCard = ({
  videoUrl,
  profileImg,
  description,
  bloggerName,
  viewsAndTime,
  handleMouseOver
}) => {
  return (
    <div>
      <div onClick={handleMouseOver} className="cursor-pointer">
        <iframe
          width="100%"
          height="220px"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ;fullscreen"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          aria-controls="youtube"
          style={{ borderRadius: "10px", cursor: "pointer" }}
        ></iframe>
        <div className="flex py-2 gap-4">
          <img className="w-10 h-10 my-2" src={profile} alt="" />
          <div className="flex flex-col  ">
            <p className="text-[14px] text-[#030303] ">
           {description}
            </p>
            <p className="text-[14px] text-[#606060] ">{bloggerName}</p>
            <p className="text-[14px] text-[#606060] ">{viewsAndTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// "videoUrl": "https://www.youtube.com/embed/GMS4SYIxAJM",
// "profileImg": "profile1.jpg",
// "description": "Lorem Ipsum is simply dummy text of the printing...",
// "bloggerName": "Blogger Name 1",
// "viewsAndTime": "1.2M views 2 days ago"
export default VideosCard;
