import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/watch/${video._id}`} className="block">
      <div className="cursor-pointer group">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full rounded-lg"
        />

        <div className="mt-2">
          <h3 className="text-sm font-semibold line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600">{video.uploader.user}</p>
          <p className="text-xs text-gray-500">
            {video.views.toLocaleString()} views
          </p>
        </div>
      </div>
    </Link>
    
  );
}

export default VideoCard;
