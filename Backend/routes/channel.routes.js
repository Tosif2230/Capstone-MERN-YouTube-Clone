import { createChannel, getChannelById, getVideosByChannel } from "../controller/channel.controller.js";



export default function channelRoutes(app){
    
    //Create Channel
    app.post("/api/channels", createChannel)
    //Get Channel by Id
    app.get("/api/channels/:id", getChannelById)
    //Get Video by ChannelId
    app.get("/api/channels/:id/videos", getVideosByChannel)

}