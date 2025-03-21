import React from "react";

const Video = () => {
  return (
    <div className="py-[7rem] px-[4.44vw] relative z-40 bg-white">
      <div className="aspect-video">
        <iframe
          src="https://www.youtube.com/embed/fS_zlik1CV0?si=TfFVyFM5TuMDBUvi&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
