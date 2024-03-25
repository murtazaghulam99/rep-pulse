import React from "react";
import loader from "../assets/loader.mp4";

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center object-cover h-screen w-screen">
      <video
        src={loader}
        type="video/mp4"
        className="object-cover w-full h-full"
        loop
        muted
        autoPlay
      />
    </div>
  );
};

export default Loader;
