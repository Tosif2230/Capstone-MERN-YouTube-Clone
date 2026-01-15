import mongoose from "mongoose";
import CommentModel from "../model/Comment.model.js";
import VideoModel from "../model/Video.model.js";

//Create Comment
export async function addComment(req, res) {
  try {
    const { text } = req.body;
    const { videoId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return res.status(400).json({ message: "Invalid videoId" });
    }

    const comment = await CommentModel.create({
      text,
      videoId,
      userId: req.user.id,
    });

    await VideoModel.findByIdAndUpdate(videoId, {
      $push: { comments: comment._id },
    });

    return res.status(201).json({ Message: comment });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Read Comment
export async function getComment(req, res) {
  try {
    const { videoId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return res.status(400).json({ message: "Invalid videoId" });
    }

    const comments = await CommentModel.find({ videoId }).sort({
      createdAt: -1,
    });

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Update Comment Only For Owner
export async function updateComment(req, res) {
  try {
    const { commentId } = req.params;
    const { text } = req.body;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ message: "Invalid commentId" });
    }

    const comment = await CommentModel.findById(commentId);

    if (!comment) {
      return res.status(400).json({ message: "comment not found" });
    }

    //Owner Check
    if (comment.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: "You are not allowed" });
    }

    comment.text = text ?? comment.text; //nullish coalescing operator (??)
    await comment.save();

    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//Delete Comment Only For Owner
export async function deleteComment(req, res) {
  try {
    const { commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(404).json({ message: "Invalid commentID" });
    }

    const comment = await CommentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    //Owner Check
    if (comment.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: "You are not allowed" });
    }

    await comment.deleteOne();

    return res.status(200).json({ message: "comment deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
