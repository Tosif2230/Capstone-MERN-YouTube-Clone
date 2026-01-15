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
  <div className="pt-16 px-3 sm:px-6 lg:px-10">
    {/* CHANNEL HEADER */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
      {/* Avatar */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl sm:text-3xl font-bold">
        {channel.channelName.charAt(0).toUpperCase()}
      </div>

      {/* Channel Info */}
      <div className="flex-1">
        <h1 className="text-xl sm:text-2xl font-bold">
          {channel.channelName}
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          {channelVideos.length} videos • 1M subscribers
        </p>

        <p className="text-sm text-gray-700 mt-2 max-w-2xl">
          Welcome to the official channel of {channel.channelName}.
          This channel shares educational and informative videos.
        </p>

        <button className="mt-3 bg-black text-white px-4 py-1 rounded-full text-sm">
          Subscribe
        </button>
        <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
          Upload Video
        </button>
      </div>
    </div>

    {/* VIDEOS SECTION */}
    {channelVideos.length === 0 ? (
      <p className="text-gray-500 text-sm">
        This channel has no videos yet.
      </p>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {channelVideos.map((video) => (
          <Link to={`/watch/${video._id}`} key={video._id}>
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="rounded-lg w-full object-cover"
            />
            <h3 className="text-sm font-semibold mt-2 line-clamp-2">
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
