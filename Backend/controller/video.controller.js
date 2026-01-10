import VideoModel from "../model/Video.model.js";


// Create Video
export async function createVideo(req, res) {
  try {
    const {
      title,
      description,
      thumbnailUrl,
      videoUrl,
      channelId,
      category
    } = req.body;

    const video = await VideoModel.create({
      title,
      description,
      thumbnailUrl,
      videoUrl,
      channelId,
      category,
      uploader: req.user.id,
    });

    res.status(201).json({message: "Video Uploded",video})
  } catch (error) {
    return res.status(500).json({ message:"Failed to upload"  });
  }
}

// Get All Videos
export async function getAllVideos(req, res) {
  try {
    const videos = await VideoModel.find()
      .populate("uploader","userName")
      .populate("channelId","channelName")
      .sort({createdAt: -1});

    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch videos" });
  }
}

// Get Video by Id
export async function getVideoById(req, res) {
  try {
    const video = await VideoModel.findById(req.params.id)
      .populate("uploader","userName")
      .populate("channelId","channelName")

    if(!video){
        return res.status(404).json({message: "Video not found"})
    }

    //Incriment Views
    video.views += 1;
    await video.save();

    return res.status(200).json(video);

  }catch (error) {
    return res.status(500).json({ message: "Failed to fetch videos" });
  }
}
  


