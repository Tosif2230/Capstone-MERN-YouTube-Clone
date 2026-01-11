import ChannelModel from "../model/Channel.model.js";
import VideoModel from "../model/Video.model.js";

//Create Channel
export async function createChannel(req, res) {
  try {
    const { channelName, channelBanner, description } = req.body;
    //user already have channel
    const existingChannel = await ChannelModel.findOne({
      owner: req.user.id,
    });

    if (existingChannel) {
      return res.status(401).json({ message: "User already has a channel" });
    }

    const channel = await ChannelModel.create({
      channelName,
      channelBanner,
      description,
      owner: req.user.id,
    });

    return res.status(201).json({ message: "Channel created", channel });
  } catch (error) {
    return res.status(500).json({ message: "Faild to creat chennal" });
  }
}

//Get Channel by Id
export async function getChannelById(req,res) {
  try {
    const channel = await ChannelModel.findById(req.params.id).populate(
      "owner",
      "userName"
    );

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    return res.status(200).json(channel);
  } catch (error) {
    return res.status(500).json({ message: "Faild to get chennal" });
  }
}
//Get Video by Channel
export async function getVideosByChannel(req,res) {
  try {
    const videos = await VideoModel.find({
      channelId: req.params.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: "Faild to get Videos" });
  }
}
