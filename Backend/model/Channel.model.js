import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
  {
    channelName: {
      type: String,
      required: true,
      trim: true, //for remove extra space
    },
    channelBanner: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      unique: true, //single user for single channel
    },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
    subscribers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const ChannelModel = mongoose.model("Channel", channelSchema);

export default ChannelModel;
