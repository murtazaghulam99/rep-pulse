import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";

const VideoCard = ({ id, imgUrl, title, active, handleClick, bgColor }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10] " : "lg:flex-[0.5] flex-[2] "
      }
        flex items-center justify-center min-w-[190px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <HoverVideoPlayer
        videoSrc={imgUrl}
        onVideoPause={() => setIsVideoPlaying(false)}
        onVideoPlay={() => setIsVideoPlaying(true)}
        onVideoEnd={() => setIsVideoPlaying(false)}
        videoStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        paused={!active || active !== id || !isVideoPlaying}
        muted
        className="w-full h-full"
      />
      {active !== id ? (
        <div
          className="absolute bottom-0 p-8 justify-start w-full h-full flex-col"
          style={{ backgroundColor: bgColor }}
        ></div>
      ) : (
        <h3 className="font-semibold text-transparent absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      )}
    </div>
  );
};

export default VideoCard;
