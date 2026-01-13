import mongoose from "mongoose";
import VideoModel from "../model/Video.model.js";


// Create Video
export async function createVideo(req, res) {
  try {
    const { title, description, thumbnailUrl, videoUrl, channelId, category } =
      req.body;

    const video = await VideoModel.create({
      title,
      description,
      thumbnailUrl,
      videoUrl,
      channelId,
      category,
      uploader: req.user.id,
    });

    res.status(201).json({ message: "Video Uploded", video });
  } catch (error) {
    return res.status(500).json({ message: "Failed to upload" });
  }
}

// Get All Videos
export async function getAllVideos(req, res) {
  try {
    const { search, category } = req.query;

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
      .sort({ createdAt: -1 });

    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch videos" });
  }
}

// Get Video by Id
export async function getVideoById(req, res) {
  try {
    const video = await VideoModel.findById(req.params.id)
      .populate("uploader", "userName")
      .populate("channelId", "channelName");

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    //Incriment Views
    video.views += 1;
    await video.save();

    return res.status(200).json(video);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch videos" });
  }
}

// UPDATE VIDEO (Only Owner)
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

    Object.assign(video, req.body);
    await video.save();

    return res.status(200).json({ message: "Video updated", video });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update video" });
  }
}

//Delete Video (Only Owner)
export async function deleteVideo(req, res) {
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

    video.likes += 1;
    await video.save();

    return res.status(200).json({ likes: video.likes });
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

    video.dislikes += 1;
    await video.save();

    return res.status(200).json({ dislikes: video.dislikes });
  } catch (error) {
    return res.status(500).json({ message: "Failed to dislike video" });
  }
}