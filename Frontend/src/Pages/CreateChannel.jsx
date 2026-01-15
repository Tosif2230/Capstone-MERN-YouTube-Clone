import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../utils/authSlice";

function CreateChannel() {
  const [channelName, setChannelName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const handleCreateChannel = () => {
    if (!channelName.trim()) {
      alert("Channel name is required");
      return;
    }

    // MOCK channel creation
    const newChannelId = "channel_" + Date.now();

    const updatedUser = {
      ...user,
      channelId: newChannelId,
      channelName: channelName,
    };

    // Update Redux + localStorage using existing flow
    dispatch(
      loginSuccess({
        user: updatedUser,
        token: token,
      })
    );

    // Redirect to channel page
    navigate(`/channel/${newChannelId}`);
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-xl font-bold mb-4 text-center">
          Create Your Channel
        </h1>

        <input
          type="text"
          placeholder="Enter channel name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg mb-4"
        />

        <button
          onClick={handleCreateChannel}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Create Channel
        </button>
      </div>
    </div>
  );
}

export default CreateChannel;
