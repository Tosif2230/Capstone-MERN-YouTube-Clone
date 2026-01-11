import { addComment, deleteComment, getComment, updateComment } from "../controller/comment.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import validate from "../middleware/validate.middleware.js"
import { commentSchema, updateSchema } from "../validations/comment.validation.js"

 export default function commentRoutes(app){
    //Add Comment
    app.post("/api/comments/:videoId",authMiddleware, validate(commentSchema), addComment )
    //Get all Comments
    app.get("/api/comments/:videoId", getComment )
    //Update comment by Id
    app.patch("/api/comments/update/:commentId",authMiddleware,validate(updateSchema), updateComment )
    //Delete comment by Id
    app.delete("/api/comments/delete/:commentId",authMiddleware, deleteComment )
 }