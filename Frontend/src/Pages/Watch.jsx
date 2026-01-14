import React from "react";
import { useParams } from "react-router-dom";
import { videosData } from "../utils/mockVideos";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

function Watch() {
  const { id } = useParams();

  const video = videosData.find((video) => video._id === id);
  const suggestedVideos = videosData.filter((video) => video._id !== id);

  if (!video) {
    return <p className="text-center">Video not found</p>;
  }

  return (
    <div className="flex gap-5">
      {/* LEFT: MAIN VIDEO */}
      <div className="w-[70%]">
        <video controls autoPlay className="w-full h-115 bg-black rounded-xl">
          <source src={video.videoUrl} />
        </video>

        <h1 className="text-lg font-bold mt-4">{video.title}</h1>

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
              <span className="flex items-center gap-2">
                <AiOutlineLike /> {video.likes.toLocaleString()}
              </span>
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-full">
              <span className="flex items-center gap-2">
                <AiOutlineDislike /> {video.dislikes.toLocaleString()}
              </span>
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-full">
              <span className="flex items-center gap-2">
                Share <RiShareForwardLine />
              </span>
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-gray-100 p-3 rounded-xl mt-4">
          <span className="flex gap-5 font-extrabold">
            <p className="text-sm text-gray-600">
              {video.views.toLocaleString()} views
            </p>
            <p className="text-sm text-gray-600">
              {video.createdAt.toLocaleString()}
            </p>
          </span>
          <p className="text-sm mt-3">{video.description}</p>
        </div>

        {/* COMMENTS */}
        <div className="mt-6">
          <h2 className="font-semibold mb-3">
            {video.comments.length} Comments
          </h2>

          {/* Add Comment */}
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full outline-none pb-2"
          />
          <hr className="text-gray-300" />

          {/* Comment List */}
          <div className="mt-4 space-y-4">
            {video.comments.map((comment) => (
              <div
                key={comment.commentId}
                className="flex items-start justify-between gap-3"
              >
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300" />

                  <div>
                    <p className="text-sm font-semibold">{comment.userId}</p>
                    <p className="text-sm text-gray-700">{comment.text}</p>
                  </div>
                </div>

                <BsThreeDotsVertical className="text-xl text-gray-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: SUGGESTED VIDEOS */}
      <div className="w-[25%] space-y-3">
        {suggestedVideos.map((video) => (
          <div key={video._id} className="flex gap-2 cursor-pointer">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-35 rounded-lg"
            />
            <span>
              <h3 className="text-sm font-semibold line-clamp-2 mt-1">
                {video.title}
              </h3>
              <p className="text-xs text-gray-600">{video.uploader.user}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;
