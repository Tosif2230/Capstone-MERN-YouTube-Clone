import mongoose from "mongoose";
import VideoModel from "../model/Video.model.js";
import ChannelModel from "../model/Channel.model.js";

/* CREATE VIDEO */
export async function createVideo(req, res) {
  try {
    const { title, description, thumbnailUrl, videoUrl, channelId, category } =
      req.body;
      
    const channel = await ChannelModel.findById(channelId);

    if (!channel || channel.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not your channel" });
    }

    const video = await VideoModel.create({
      title,
      description,
      thumbnailUrl,
      videoUrl,
      channelId,
      category,
      uploader: req.user.id,
    });

    return res.status(201).json({
      message: "Video Uploaded",
      video,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to upload video" });
  }
}

/* GET ALL VIDEOS */
export async function getAllVideos(req, res) {
  try {
    const { search, category, page = 1 } = req.query;

    const limit = 10;
    const skip = (page - 1) * limit;

    const query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    const videos = await VideoModel.find(query)
      .populate("uploader", "userName")
      .populate("channelId", "channelName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch videos" });
  }
}

/* GET VIDEO BY ID + INCREMENT VIEWS */
export async function getVideoById(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid video ID" });
    }
    const video = await VideoModel.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    )
      .populate("uploader", "userName")
      .populate("channelId", "channelName");

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    return res.status(200).json(video);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch video" });
  }
}

/* UPDATE VIDEO (OWNER ONLY) */
export async function updateVideo(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid video ID" });
    }

    const video = await VideoModel.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    if (video.uploader.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const allowedUpdates = [
      "title",
      "description",
      "thumbnailUrl",
      "videoUrl",
      "category",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        video[field] = req.body[field];
      }
    });

    await video.save();

    return res.status(200).json({
      message: "Video updated",
      video,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update video" });
  }
}

/* DELETE VIDEO (OWNER ONLY) */
export async function deleteVideo(req, res) {
  try {
    const video = await VideoModel.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    if (video.uploader.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await video.deleteOne();

    return res.status(200).json({ message: "Video deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete video" });
  }
}

/* LIKE VIDEO */
export async function likeVideo(req, res) {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const userId = req.user.id;

    const isLiked = video.likes.some((id) => id.toString() === userId);
    const isDisliked = video.dislikes.some((id) => id.toString() === userId);

    if (isDisliked) {
      video.dislikes.pull(userId);
    }

    if (isLiked) {
      video.likes.pull(userId);
    } else {
      video.likes.push(userId);
    }

    await video.save();

    return res.status(200).json({
      likes: video.likes.length,
      dislikes: video.dislikes.length,
      isLiked: !isLiked,
      isDisliked: false,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to like video" });
  }
}

/* DISLIKE VIDEO */
export async function dislikeVideo(req, res) {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const userId = req.user.id;

    const isLiked = video.likes.some((id) => id.toString() === userId);
    const isDisliked = video.dislikes.some((id) => id.toString() === userId);

    if (isLiked) {
      video.likes.pull(userId);
    }

    if (isDisliked) {
      video.dislikes.pull(userId);
    } else {
      video.dislikes.push(userId);
    }

    await video.save();

    return res.status(200).json({
      likes: video.likes.length,
      dislikes: video.dislikes.length,
      isLiked: false,
      isDisliked: !isDisliked,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to dislike video" });
  }
}
