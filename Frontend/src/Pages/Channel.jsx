import React from "react";
import { useParams, Link } from "react-router-dom";
import { videosData } from "../utils/mockVideos";

function Channel() {
  const { id } = useParams();

  // All videos of this channel
  const channelVideos = videosData.filter(
    (video) => video.channelId._id === id
  );


  const channel =
  channelVideos[0]?.channelId || {
    channelName: "My Channel",
  };
    return (
  <div>
    {/* CHANNEL HEADER */}
    <div className="flex items-center gap-5 mb-6">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold">
        {channel.channelName.charAt(0).toUpperCase()}
      </div>

      {/* Channel Info */}
      <div>
        <h1 className="text-2xl font-bold">
          {channel.channelName}
        </h1>

        <p className="text-sm text-gray-600 mt-1">
          {channelVideos.length} videos • 1M subscribers
        </p>

        <p className="text-sm text-gray-700 mt-2 max-w-xl">
          Welcome to the official channel of {channel.channelName}.
          This channel shares educational and informative videos.
        </p>

        <button className="mt-3 bg-black text-white px-4 py-1 rounded-full">
          Subscribe
        </button>
      </div>
    </div>

    {/* VIDEOS SECTION */}
    {channelVideos.length === 0 ? (
      <p className="text-gray-500">
        This channel has no videos yet.
      </p>
    ) : (
      <div className="grid grid-cols-4 gap-4">
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
    )}
  </div>
);
}

export default Channel;
