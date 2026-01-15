import React from "react";
import { videosData } from "../utils/mockVideos.js";
import VideoCard from "./VideoCard.jsx";

function VideoGrid({ selectedCategory, searchQuery }) {
  const filteredVideos = videosData.filter((video) => {
    const matchCategory =
      selectedCategory === "All" || video.category === selectedCategory;

    const matchSearch =
      !searchQuery ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {filteredVideos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;
