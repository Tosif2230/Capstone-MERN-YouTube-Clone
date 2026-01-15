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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-125 rounded-xl p-6">
        {/* Header */}
        <h2 className="text-lg font-semibold mb-6">Create Your Channel Here</h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl text-red-600">
            
          </div>
          <button className="text-black text-sm mt-2">
            Select picture
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Channel name"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm rounded-full hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateChannel}
            className="px-4 py-2 text-sm rounded-full bg-red-600 text-white hover:bg-red-700"
          >
            Create channel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateChannel;
