import React from "react";
import { useParams } from "react-router-dom";
import { videosData } from "../utils/mockVideos";
import { AiOutlineLike ,AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";



function Watch() {
  const { id } = useParams();

  const video = videosData.find((video) => video._id === id);
  const suggestedVideos = videosData.filter((video) => video._id !== id);

  if (!video) {
    return <p className="text-center">Video not found</p>;
  }

  return (
    <div className="flex gap-20">
      {/* LEFT: MAIN VIDEO */}
      <div className="w-[70%]">
        <video controls autoPlay className="w-full h-115 bg-black rounded-xl">
          <source src={video.videoUrl} />
        </video>

        <h1 className="text-lg font-bold mt-4">{video.title}</h1>

        <p className="text-sm text-gray-600">
          {video.views.toLocaleString()} views
        </p>

        {/* CHANNEL + ACTIONS */}
        <div className="flex justify-between items-center mt-4">
          {/* Channel Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-semibold">{video.uploader.user}</p>
              <p className="text-xs text-gray-500">1M subscribers</p>
            </div>
            <button className="ml-4 bg-black text-white px-4 py-1 rounded-full">
              Subscribe
            </button>
          </div>

          {/* Like / Dislike */}
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-200 rounded-full">
             <span className="flex items-center gap-2"> <AiOutlineLike /> {video.likes.toLocaleString()}</span>
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-full">
             <span className="flex items-center gap-2"> <AiOutlineDislike /> {video.dislikes.toLocaleString()}</span>
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-full">
              <span className="flex items-center gap-2">Share <RiShareForwardLine /></span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: SUGGESTED VIDEOS */}
      <div className="w-[20%] space-y-3">
        {suggestedVideos.map((video) => (
          <div key={video._id} className="cursor-pointer">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full rounded-lg"
            />
            <h3 className="text-sm font-semibold line-clamp-2 mt-1">
              {video.title}
            </h3>
            <p className="text-xs text-gray-600">{video.uploader.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;
