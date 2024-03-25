import { videoCards } from "../constants";
import { useState } from "react";
import VideoCard from "./VideoCard";

const OurRoleVideo = () => {
  const [active, setActive] = useState("vid-3");

  return (
    <section>
      <div className={`mx-auto flex flex-col`}>
        <div className="flex lg:flex-row flex-col w-[950px] min-h-[50vh]">
          {videoCards.map((vid, index) => (
            <VideoCard
              key={vid.id}
              {...vid}
              index={index}
              active={active}
              handleClick={setActive}
              bgColor={
                index === 0
                  ? "rgba(128, 0, 128, 0.5)"
                  : index === 1
                  ? "rgba(255, 0, 0, 0.7)"
                  : "rgba(0, 128, 0, 0.5)"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRoleVideo;
