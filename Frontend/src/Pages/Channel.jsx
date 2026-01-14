import React from "react";
import { useParams, Link } from "react-router-dom";
import { videosData } from "../utils/mockVideos";

function Channel() {
  const { id } = useParams();

  // All videos of this channel
  const channelVideos = videosData.filter(
    (video) => video.channelId._id === id
  );

  if (channelVideos.length === 0) {
    return <p className="text-center">No videos found</p>;
  }

  const channel = channelVideos[0].channelId;
  console.log(channel) 
  return (
    <div>
      {/* Channel Header */}
      <div className="flex items-center gap-4 mb-6 ">
        <div className="w-16 h-16 rounded-full bg-gray-300" />
        <div>
          <h1 className="text-xl font-bold">{channel.channelName}</h1>
          <span className="flex gap-1">
            <p className="text-sm text-gray-600">{channelVideos.length} videos</p>
          <span>•</span>
            <p className="text-sm text-gray-600">{channelVideos.subscribers} subscribers</p>
          </span>
          <button className="bg-black text-sm text-white px-2 py-1 rounded-full cursor-pointer">
              Subscribe
            </button>
        </div>
      </div>

      <button className="hover:underline cursor-pointer">Videos</button>


      {/* Channel Videos */}
      <div className="grid grid-cols-4 gap-4 mt-5">
        {channelVideos.map((video) => (
          <Link to={`/watch/${video._id}`} key={video._id}>
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="rounded-lg"
            />
            <h3 className="text-sm font-semibold mt-1 line-clamp-2">
              {video.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Channel;
