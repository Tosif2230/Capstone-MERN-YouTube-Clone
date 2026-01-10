import CommentModel from "../model/Comment.model.js";


//Create Comment
export async function addComment(req,res) {
  try {
    const { text } = req.body;
    const {videoId} = req.params;

    const comment = await CommentModel.create({
        text,
        videoId,
        userId: req.user.id,
    });

    return res.status(201).json({"Message": comment})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Read Comment
export async function getComment(req,res) {
  try {

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Update Comment Only For Owner
export async function updateComment(req,res) {
  try {
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//Delete Comment Only For Owner
export async function deleteComment(req,res) {
  try {
   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}