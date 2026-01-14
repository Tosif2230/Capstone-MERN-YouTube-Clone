import React from "react";
import { videosData } from "../utils/mockVideos.js";
import VideoCard from "./VideoCard.jsx";

function VideoGrid({ selectedCategory }) {
  const filteredVideos =
    selectedCategory === "All"
      ? videosData
      : videosData.filter(
          (video) => video.category === selectedCategory
        );

  return (
    <div className="mt-8 grid grid-cols-4 gap-4">
      {filteredVideos.map((video) => (
        <VideoCard key={video.videoId} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;
