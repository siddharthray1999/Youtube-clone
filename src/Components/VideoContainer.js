import React, { useEffect, useState } from "react";

import { YOUTUBE_VIDEO_API } from "../utlis/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [Videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (!Videos) ? <Shimmer/> : (
    <div className="flex flex-wrap">
      {Videos.map((video) => (
        <Link to={"/watch?v="+video.id}>
      <VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
