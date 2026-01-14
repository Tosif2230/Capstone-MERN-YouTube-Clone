import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/watch/${video.videoId || video._id}`}>
      <div className="cursor-pointer">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full rounded-lg"
        />

        <div className="mt-2">
          <h3 className="text-sm font-semibold line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600">{video.uploader}</p>
          <p className="text-xs text-gray-500">
            {video.views.toLocaleString()} views
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
