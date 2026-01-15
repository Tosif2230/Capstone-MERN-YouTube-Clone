import React from "react";
import { useParams } from "react-router-dom";
import { videosData } from "../utils/mockVideos";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getEmbedUrl } from "../utils/youtube.js";

function Watch() {
  const { id } = useParams();

  const video = videosData.find((video) => video._id === id);
  const suggestedVideos = videosData.filter((video) => video._id !== id);

  if (!video) {
    return <p className="text-center">Video not found</p>;
  }

  return (
    <div className="pt-16 px-3 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT: MAIN VIDEO */}
        <div className="w-full lg:w-[70%]">
          <iframe
            className="w-full aspect-video rounded-xl"
            src={getEmbedUrl(video.videoUrl)}
            title={video.title}
            allowFullScreen
          />

          <h1 className="text-base sm:text-lg font-bold mt-4">{video.title}</h1>

          {/* CHANNEL + ACTIONS */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
            {/* Channel Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="font-semibold text-sm">{video.uploader.user}</p>
                <p className="text-xs text-gray-500">1M subscribers</p>
              </div>
              <button className="ml-2 bg-black text-white px-4 py-1 rounded-full text-sm">
                Subscribe
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-2 flex-wrap">
              <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-1">
                <AiOutlineLike /> {video.likes.toLocaleString()}
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-1">
                <AiOutlineDislike /> {video.dislikes.toLocaleString()}
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-1">
                <RiShareForwardLine /> Share
              </button>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-gray-100 p-3 rounded-xl mt-4">
            <div className="flex gap-4 text-xs text-gray-600 font-semibold">
              <span>{video.views.toLocaleString()} views</span>
              <span>{video.createdAt.toLocaleString()}</span>
            </div>
            <p className="text-sm mt-3">{video.description}</p>
          </div>

          {/* COMMENTS */}
          <div className="mt-6">
            <h2 className="font-semibold mb-3 text-sm">
              {video.comments.length} Comments
            </h2>

            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full outline-none border-b pb-2 text-sm"
            />

            <div className="mt-4 space-y-4">
              {video.comments.map((comment) => (
                <div
                  key={comment.commentId}
                  className="flex justify-between gap-3"
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <div>
                      <p className="text-sm font-semibold">{comment.userId}</p>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                  </div>
                  <BsThreeDotsVertical className="text-lg text-gray-500 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: SUGGESTED VIDEOS */}
        <div className="w-full lg:w-[30%] space-y-3">
          {suggestedVideos.map((v) => (
            <div key={v._id} className="flex gap-3 cursor-pointer">
              <img
                src={v.thumbnailUrl}
                alt={v.title}
                className="w-40 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-sm font-semibold line-clamp-2">
                  {v.title}
                </h3>
                <p className="text-xs text-gray-600">{v.uploader.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watch;
