import mongoose,{Schema} from "mongoose";

mongoose.Promise = global.Promise;


const postSchema = new Schema(
    {
        title:String,
        description:String,
        image_url:String,
    },{
        timestamps:true,
    }
);
// const Post=mongoose.model.Post || mongoose.model("Post", postSchema);

export default mongoose.models.Post || mongoose.model("Post", postSchema);



